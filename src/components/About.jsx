import Avatar from "../assets/Avatar.png"
import * as MainStyles from '../styles/mainStyles'
import { ProjectCard } from "./helperComponents/ProjectCard"
import OrderSummaryCard from '../assets/OrderSummaryCard.png'


export const About = () => {
    return (
        <div className={`h-screen flex flex-col justify-start`}>
            <div className={`${MainStyles.RowCenteredJustified}`}>
            </div>
            <div className={`${MainStyles.Column}`}>
                <ProjectCard ImgSrc={OrderSummaryCard}/>np
            </div>
        </div>
    )
}

