import "./index.css";

function Address(props) {
  const { region, zip } = props;
  return (
    <div>
      <div>
        <h4 className="address-title">Address</h4>
        <ul className="address">
          <li className="address-item">Region: {region}</li>
          <li className="address-item">Zip-code: {zip}</li>
        </ul>
      </div>
    </div>
  );
}

export default Address;
