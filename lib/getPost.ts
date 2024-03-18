export default async function getPost(slug: number) {
  const post = await fetch(`https://dummyjson.com/products/${slug}`);
  return post.json();
}
