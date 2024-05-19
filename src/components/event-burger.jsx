import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import profilePictureImg from "../assets/profilePicture.png";

export default function EventBurger(props) {
    return (
        <>
        <div className="main-burger">
            <div className="burger-color" style={{backgroundColor: props.color}}>
            </div>
            <div className="burger-content">
                <h3>{props.title}</h3>
                <p>{props.subTitle}</p>
                <div className="burger-content-date">
                    <div>
                        <div className="date">
                            <AiOutlineCalendar/>
                            <p>March 20, 2021</p>
                        </div>
                        <div className="time">
                            <AiOutlineClockCircle/>
                            <p>9:00 - 10:00 AM</p>
                        </div>
                    </div>
                    <img src={profilePictureImg} alt="Profile" />
                </div>
                
            </div>
        </div>
        </>
    )
}