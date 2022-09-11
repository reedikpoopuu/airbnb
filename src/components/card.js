import star from "../images/star-solid.png";

export default function Card(props) {
    let statusText;
    if(props.item.openSpots === 0) {
        statusText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        statusText= "ONLINE"
    }
    return(
        <div className="card">
            <div className="card--hero">
                <img src={props.item.pic} alt="pic" className="card--img"></img>
                {statusText && <p className="card--status" >{statusText}</p>}
            </div>
            <div className="card--data">
                <p className="card--rating"><img src={star} className="card--star" alt="star"></img> {props.item.stats.rating} <span className="card--comments">({props.item.reviewCount})-{props.item.location}</span></p>
                <p className="card--title">{props.item.title}</p>
                <p className="card--rate"><strong>From {props.item.currency}{props.item.price}</strong>/ person</p>
            </div>
        </div>
    )
}