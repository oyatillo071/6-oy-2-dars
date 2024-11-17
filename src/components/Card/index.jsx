import "./index.css";

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
      <h4 className="address-title">Address</h4>
      <ul className="address">
        <li className="address-item">Region: {address.region}</li>
        <li className="address-item">Zip-code: {address.zip}</li>
      </ul>{" "}
      <h4>
        Cars:<br></br>
      </h4>
      <div className="cars">
        <ul className="cars-list">
          {cars.map((value) => {
            return <li className="cars-list-items">{value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Card;
