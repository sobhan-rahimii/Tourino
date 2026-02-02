import api from "@/core/config/api"


const addToBasket = async (id)=>{
    const res = await api.put(`/basket/${id}`)
    return res.data
    console.log(res);
    

}

export default addToBasket