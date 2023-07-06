
const response = await fetch('https://deno.com');
const body = await response.text();

console.log(body)