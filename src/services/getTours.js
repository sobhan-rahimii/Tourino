
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function getTours (){
    const res = await fetch(`${BASE_URL}/tour`,)
    const data = await res.json()
    return data


}

export default getTours