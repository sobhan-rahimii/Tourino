const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function getTours(params = {}) {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}/tour${query ? `?${query}` : ""}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default getTours;
