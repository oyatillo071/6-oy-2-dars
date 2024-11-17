import "./index.css";
function Cars(props) {
  const { cars } = props;
  return (
    <div>
      <div>
        <h4>
          Cars: <br />
        </h4>
        <div className="cars">
          <ul className="cars-list">
            {cars.map((value) => {
              return <li className="cars-list-items">{value}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cars;
