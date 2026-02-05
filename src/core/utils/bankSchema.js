import {z} from "zod"

const bankSchema = z.object({
    shaba_code:z.string().min(24,"شماره شبا معتبر نیست"),
    debitCard_code:z.string().length(16,"شماره کارت باید 16رقم باشد"),
    accountIdentifier:z.string().min(5,"شماره حساب الزامی است")
})
export default bankSchema