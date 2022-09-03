import envelope from "../images/envelope-solid.png";
import phone from "../images/phone-solid.png";
import cat from "../images/cat.jpg";

export default function Contact(props) {
    return(
        <div className="contact--card">
            <img src={cat} className="contact--img" alt="cat"/>
            <h3 className="contact--name">{props.name}</h3>
            <div className="contact--info-group">
                <img src={phone} alt="phone" />
                <p>{props.phone}</p>
            </div>
            <div className="contact--info-group">
                <img src={envelope} alt="envelope" />
                <p>{props.email}</p>
            </div>

        </div>
    )
}