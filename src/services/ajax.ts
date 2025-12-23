const HOST = "http://localhost:3001"; //mock服务器的地址

export async function get(url: string) {
  const data = await fetch(`${HOST}${url}`);
  return data.json();
}

export async function post(url: string, body: any) {
  const data = await fetch(`${HOST}${url}`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return data.json();
}
