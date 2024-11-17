import "./index.css";
import Address from "../Address";
import Cars from "../Cars";

function Card(props) {
  const { id, firstName, lastName, phone, email, address, image, cars } = props; // addres -> address
  return (
    <div className="card">
      <img className="card-img" src={image} alt="img" />
      <h3 className="card-name">
        {firstName} {lastName}
      </h3>
      <h3>Telefon: {phone} </h3>
      <h3> email: {email}</h3>
      <Address region={address.region} zip={address.zip}></Address>

      <Cars cars={cars}></Cars>
    </div>
  );
}

export default Card;
