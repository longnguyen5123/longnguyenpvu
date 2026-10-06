(() => {
  const root = document.getElementById('assignment-search');
  const list = document.getElementById('assignment-list');
  if (!root || !list || root.dataset.ready) return;
  root.dataset.ready = 'true';
  const form = document.getElementById('assignment-search-form');
  const input = document.getElementById('assignment-query');
  const suggestions = document.getElementById('assignment-suggestions');
  const clear = document.getElementById('assignment-search-clear');
  const status = document.getElementById('assignment-search-status');
  let committed = '', exact = false, category = 'assignment';
  const tr = s => window.portfolioI18n?.text(s) || s;
  const kind = card => card.dataset.category || (/\bquiz\b/i.test((card.querySelector('.course')?.textContent||'')+' '+title(card)) ? 'quiz' : 'assignment');
  const categoryButtons = Array.from(document.querySelectorAll('[data-category]')).filter(el=>el.tagName==='BUTTON');
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g,'d').replace(/Đ/g,'D').toLowerCase().trim().replace(/\s+/g,' ');
  const cards = () => Array.from(list.querySelectorAll('article.assignment'));
  const title = card => card.querySelector('h3')?.textContent || '';
  const close = () => { suggestions.hidden = true; input.setAttribute('aria-expanded','false'); };
  function apply() {
    const query = normalize(committed);
    let count = 0;
    cards().forEach(card => {
      const name = normalize(title(card));
      const match = kind(card) === category && (!query || (exact ? name === query : name.includes(query)));
      card.hidden = !match;
      if (match) count++;
    });
    status.hidden = !query && count > 0;
    status.textContent = count ? (query ? (document.documentElement.lang==='en' ? `${count} matching item(s).` : `Tìm thấy ${count} bài tập.`) : '') : tr('Không tìm thấy bài tập có tên phù hợp.');
    categoryButtons.forEach(button=>{button.setAttribute('aria-pressed',String(button.dataset.category===category));button.querySelector('.category-count').textContent=String(cards().filter(card=>kind(card)===button.dataset.category).length);});
    clear.hidden = !input.value && !committed;
  }
  function commit(value, selected = false) {
    committed = value.trim(); exact = selected; apply(); close();
  }
  function suggest() {
    suggestions.replaceChildren();
    const query = normalize(input.value);
    clear.hidden = !input.value && !committed;
    if (!query) { commit(''); return; }
    const matches = cards().filter(card => kind(card)===category && normalize(title(card)).includes(query));
    for (const card of matches) {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'assignment-suggestion';
      const number = card.querySelector('.number')?.cloneNode(true);
      const copy = document.createElement('span'); copy.className = 'suggestion-copy';
      const meta = card.querySelector('.assignment-meta')?.cloneNode(true);
      const name = document.createElement('strong'); name.className = 'suggestion-title'; name.textContent = title(card);
      if (meta) copy.append(meta);
      copy.append(name);
      if (number) button.append(number);
      button.append(copy);
      button.addEventListener('click', () => {input.value = title(card); input.focus(); commit(input.value, true);});
      suggestions.append(button);
    }
    if (!matches.length) {
      const empty = document.createElement('p'); empty.textContent = tr('Không có tên bài tập phù hợp.'); suggestions.append(empty);
    }
    suggestions.hidden = false; input.setAttribute('aria-expanded','true');
  }
  form.addEventListener('submit', event => {event.preventDefault(); commit(input.value);});
  input.addEventListener('input', suggest);
  input.addEventListener('focus', () => {if (input.value) suggest();});
  clear.addEventListener('click', () => {input.value = ''; commit(''); input.focus();});
  root.addEventListener('keydown', event => {
    if (event.key === 'Escape') {close(); input.focus(); close();}
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      if (suggestions.hidden) suggest();
      const buttons = Array.from(suggestions.querySelectorAll('button'));
      if (!buttons.length) return;
      event.preventDefault();
      const index = buttons.indexOf(document.activeElement);
      buttons[(index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length].focus();
    }
  });
  document.addEventListener('click', event => {if (!root.contains(event.target)) close();});
  root.addEventListener('focusout', event => {if (!root.contains(event.relatedTarget)) close();});
  categoryButtons.forEach(button=>button.addEventListener('click',()=>{category=button.dataset.category;input.value='';commit('');}));
  document.addEventListener('portfolio:language',()=>{apply();if(!suggestions.hidden)suggest();});
  new MutationObserver(records => {if(records.some(r=>r.target===list || r.target.id==='live-assignments')) {apply();if(!suggestions.hidden)suggest();}}).observe(list, {childList:true, subtree:true});
  apply();
})();
