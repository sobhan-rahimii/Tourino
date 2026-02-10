import Image from 'next/image'
import React from 'react'
import menu from "../../assets/images/icon/menu.png"
function HambergerMenu() {
  return (
    <div>
        <Image src={menu} width={20} height={16} alt='menu' />
    </div>
  )
}

export default HambergerMenu