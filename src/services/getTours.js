import { api } from "./api";

async function getTours (){
    const res = await api.get("/tour",)
    return res.data

}

export default getTours