import spicedRum from "../images/img-spiced-rum.jpg";

export default function Experiences() {
    return(
        <div className="hero">
            <div className="hero--grid">
                <img src={spicedRum} className="hero--img" alt="Spiced Rum"></img>
            </div>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activites led by one-of-a-kind hosts - all without leaving home.</p>
        </div>
    )
}