
const posts = [];
function listPosts() {
  console.log("Blog Gönderileri:");
  posts.forEach((post, index) => {
    console.log(`${index + 1}. Başlık: ${post.title}, İçerik: ${post.content}`);
  });
}
async function addPost(title, content) {
  const post = { title, content };
  posts.push(post);
  console.log("Yeni gönderi eklendi:");
  console.log(`Başlık: ${post.title}, İçerik: ${post.content}`);
}
addPost("Gönderi 1", "Bu ilk gönderidir.");
addPost("Gönderi 2", "Bu ikinci gönderidir.");
listPosts();
