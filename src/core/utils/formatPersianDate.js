const formatPersianDate = (dateString)=>{
    if(!dateString) return"-"
    const date = new Date(dateString)

   const weekDay = date.toLocaleDateString("fa-IR",{weekday:"long"})
   const day = date.toLocaleDateString('fa-IR',{day:"numeric"})
   const month = date.toLocaleDateString('fa-IR',{month:"long"})
   const year = date.toLocaleDateString("fa-IR",{year:"numeric"})

   return `${weekDay} ${day} ${month} ${year}`
}
export default formatPersianDate