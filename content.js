(() => {
  const endpoint = 'https://long-geology-portfolio.kagi5197.chatgpt.site/api/public-content';
  const assignments = document.getElementById('live-assignments');
  const projects = document.getElementById('live-projects');
  const updated = document.getElementById('live-updated');
  let loading = false;
  async function refresh() {
    if (loading) return;
    loading = true;
    try {
      const response = await fetch(endpoint, {credentials:'omit', cache:'no-store', signal:AbortSignal.timeout(20000)});
      if (!response.ok) throw new Error('Unavailable');
      const data = await response.json();
      if (![data.assignmentsHtml,data.projectsHtml,data.updatedLabel].every(x => typeof x === 'string')) throw new Error('Invalid response');
      assignments.innerHTML = data.assignmentsHtml;
      projects.innerHTML = data.projectsHtml;
      updated.textContent = data.updatedLabel;
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
      updated.textContent = 'Chưa kết nối được dữ liệu';
    } finally { loading = false; }
  }
  refresh();
  document.addEventListener('visibilitychange',() => {if (!document.hidden) refresh();});
})();
