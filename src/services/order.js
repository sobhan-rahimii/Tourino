import api from "@/core/config/api"

const order = async(nationalCode,fullName,gender,birthDate)=>{
    const res = await api.post("/order",nationalCode,fullName,gender,birthDate,
        
    )
    return res.data
}

export default order