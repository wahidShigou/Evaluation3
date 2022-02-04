document.addEventListener('DOMContentLoaded', async () => {
  const reponse = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = (await reponse.json()) as Array<Partial<any>>;

  let html = '';

  users.forEach(user => {
    const articles = getAllPostByUser(user.id);
    console.log(articles);
  });
  document.querySelector('main').innerHTML = html;
});

async function getAllPostByUser(id: number) {
  const reponse = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const articles = (await reponse.json()) as Array<Partial<any>>;
  return articles;
}
