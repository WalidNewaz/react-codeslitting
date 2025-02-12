export async function getUserById(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  return response.json();
}
