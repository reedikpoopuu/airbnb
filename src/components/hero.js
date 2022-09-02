import spicedRum from "../images/img-spiced-rum.jpg";
import donut from "../images/img-donut-small.jpg";
import myrtle from "../images/img-myrtle-ave.jpg";
import bedford from "../images/img-bedford-bizarre-small.jpg"
import blitz from "../images/img-berryblitz-small.jpg"
import locations from "../images/img-locations-background.jpg"
import mission from "../images/img-mission-background.jpg"
import peacock from "../images/favorite-1.jpg"

export default function Hero() {
    return(
        <div className="hero">
            <div className="hero--grid">
                <img src={spicedRum} width="20px" className="hero--img1" alt="Spiced Rum"></img>
                <img src={donut} className="hero--img2" alt="Spiced Rum"></img>
                <img src={myrtle} className="hero--img3" alt="Spiced Rum"></img>
                <img src={bedford} className="hero--img4" alt="Spiced Rum"></img>
                <img src={blitz} className="hero--img5" alt="Spiced Rum"></img>
                <img src={locations} className="hero--img6" alt="Spiced Rum"></img>
                <img src={mission} className="hero--img7" alt="Spiced Rum"></img>
                <img src={peacock} className="hero--img8" alt="Spiced Rum"></img>
            </div>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activites led by one-of-a-kind hosts - all without leaving home.</p>
        </div>
    )
}