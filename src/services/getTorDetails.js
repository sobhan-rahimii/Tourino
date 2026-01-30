const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function getTourDetails (){
    const res = await fetch(`${BASE_URL}/tour/${tourId}`,)
    const data = await res.json()
    return data


}

export default getTourDetails