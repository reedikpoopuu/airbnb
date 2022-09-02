import star from "../images/star-solid.png";
import pic from "../images/tomz0266__medium.jpg";

export default function Card() {
    return(
        <div className="card">
            <div className="card--hero">
                <img src={pic} alt="pic" className="card--img"></img>
                <p className="card--status">SOLD OUT</p>
            </div>
            <div className="card--data">
                
                <p className="card--rating"><img src={star} className="card--star" alt="star"></img> 5.0 <span className="card--comments">(6)-USA</span></p>
                <p className="card--title">Life lessons with Katie Zaferes</p>
                <p className="card--rate"><strong>From $136</strong>/ person</p>
            </div>
        </div>
    )
}