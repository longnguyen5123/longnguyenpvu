(() => {
  const endpoint = 'https://long-geology-portfolio.kagi5197.chatgpt.site/api/public-content';
  const assignments = document.getElementById('live-assignments');
  const projects = document.getElementById('live-projects');
  let loading = false;
  async function refresh() {
    if (loading) return;
    loading = true;
    try {
      const response = await fetch(endpoint, {credentials:'omit', cache:'no-store', signal:AbortSignal.timeout(20000)});
      if (!response.ok) throw new Error('Unavailable');
      const data = await response.json();
      if (![data.assignmentsHtml,data.projectsHtml].every(x => typeof x === 'string')) throw new Error('Invalid response');
      const expanded = new Set(Array.from(assignments.querySelectorAll('details.assignment-more[open]'), node => node.dataset.assignmentId));
      assignments.innerHTML = data.assignmentsHtml;
      assignments.querySelectorAll('details.assignment-more').forEach(node => {node.open = expanded.has(node.dataset.assignmentId);});
      projects.innerHTML = data.projectsHtml;
      document.dispatchEvent(new CustomEvent('portfolio:content'));
    } catch {
      for (const target of [assignments,projects]) {
        target.replaceChildren();
        const message = document.createElement('p');
        message.textContent = 'Chưa tải được nội dung mới nhất. Vui lòng thử lại.';
        const retry = document.createElement('button');
        retry.className = 'button secondary'; retry.textContent = 'Thử lại';
        retry.addEventListener('click',refresh);
        target.append(message,retry);
      }
    } finally { loading = false; }
  }
  refresh();
  document.addEventListener('visibilitychange',() => {if (!document.hidden) refresh();});
})();
