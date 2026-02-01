const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function getTourDetails (tourId){
    const res = await fetch(`${BASE_URL}/tour/${tourId}`,{cache:"no-store"})
    const data = await res.json()
    return data


}

export default getTourDetails