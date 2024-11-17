import "./index.css";
import Card from "../Card";
import dataJson from "../../users.json";

function UserList() {
  return (
    <div>
      <div className="wrapper-list">
        {dataJson.map((value, index) => {
          return (
            <Card
              key={value.id}
              id={value.id}
              firstName={value.firstName}
              lastName={value.lastName}
              phone={value.phone}
              email={value.email}
              address={value.address}
              image={value.image}
              cars={value.cars}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
