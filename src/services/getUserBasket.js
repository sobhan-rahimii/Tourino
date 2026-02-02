import api from "@/core/config/api"

const getUserBasket =async ()=>{
    const res = await api.get("/basket")
    return res?.data
}
export default getUserBasket