import star from "../images/star-solid.png";

export default function Card(props) {
    return(
        <div className="card">
            <div className="card--hero">
                <img src={props.pic} alt="pic" className="card--img"></img>
                <p className="card--status">{props.status}</p>
            </div>
            <div className="card--data">
                <p className="card--rating"><img src={star} className="card--star" alt="star"></img> {props.rating} <span className="card--comments">({props.comments})-{props.country}</span></p>
                <p className="card--title">{props.title}</p>
                <p className="card--rate"><strong>From {props.currency}{props.price}</strong>/ person</p>
            </div>
        </div>
    )
}