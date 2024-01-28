import * as MainStyles from '../styles/mainStyles'
import ProfilePic from '../assets/ProfilePic.jpeg'
import { useState } from 'react'

const NavItemsArray = ["About", "Resume", "Portfolio", "Contact"]

const NavItem = (props) => {

    return (
        <li
            className={`${props.ActiveNav != props.Name ? "text-white" : "gradient_text font-semibold scale-110 underline"} ml-10 text-2xl font-medium capitalize cursor-pointer hover:underline ${MainStyles.Scale110Hover500}`}
            onClick={() => props.OnNavClick(props.Name)}
        >
            {props.Name}
        </li>
    )
}

export const Navbar = () => {
    const [ActiveNavItem, SetActiveNavItem] = useState("About");


    return (
        <nav className={`${MainStyles.MainBgGradientReverseds} sticky top-0 text-white `}>
            <div className={`max-w-screen`}>
                <div className={`${MainStyles.RowCenteredItems} h-16 justify-between relative`}>
                    <div className={`${MainStyles.RowCenteredItems} gap-10 px-5 absolute`}>
                        <p className={`${MainStyles.BrandTextHoverStyle} text-3xl font-bold uppercase`}>
                            Portfolio
                        </p>
                        <ul className='flex gap-5'>
                            {NavItemsArray.map((header) => (
                                <NavItem Name={header} ActiveNav={ActiveNavItem} OnNavClick={SetActiveNavItem} />
                            ))}
                        </ul>
                    </div>
                    <div className={`${MainStyles.RowCenteredItems} ${MainStyles.MainPadding} absolute right-0`}>
                        <img
                            className={`rounded-full cursor-pointer ${MainStyles.Scale150Hover500}`}
                            src={ProfilePic} alt="" width={40} height={50} />
                    </div>
                </div>
            </div>
        </nav>
    )
}
