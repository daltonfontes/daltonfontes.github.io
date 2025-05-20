async function carregarPosts() {
  const list = document.getElementById('post-list');
  try {
    const response = await fetch('/posts/posts.json');
    if (!response.ok) throw new Error('Erro ao carregar');
    const posts = await response.json();
    list.innerHTML = '';
    posts.forEach(post => {
      const li = document.createElement('li');
      li.innerHTML = `
                    <div class="post-title"><a href="${post.url || '#'}">${post.title || 'Sem título'}</a></div>
                    <div class="post-meta">${post.date || ''}</div>
                    <div>${post.content || ''}</div>
                `;
      list.appendChild(li);
    });
    if (posts.length === 0) {
      list.innerHTML = '<li>Nenhum post encontrado.</li>';
    }
  } catch (e) {
    list.innerHTML = '<li>Não foi possível carregar os posts.</li>';
  }
}
carregarPosts();
