import {z} from "zod"
const personalSchema = z.object({
    fullName:z.string().min(3,"نام ونام خانوادگی الزامی است"),
    natinoalCode:z.string().regex(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد"),
    birthDate:z.any().refine((val)=>val,"تاریخ تولد الزامی است"),
    gender:z.string().min(1,"جنسیت را انتخاب کنید")
    

})

export default personalSchema