import React from "react";
import { tourlists } from "../Tourlist";

function Tourdash() {
  // const tours = [
  //   {
  //     id: 1,
  //     name: "City Tour",
  //     price: 50,
  //   },
  //   { id: 2, 
  //     name: "Adventure Trek", 
  //     price: 100
  //   },
  //   {
  //     id: 3,
  //     name: "Cultural Experience",
  //     price: 75,
  //   },
  // ];

  // console.log({tourlists.name})
  return (
    <>
      <div>
        <h2>Available Tours
       </h2>
              <table className="user-table">
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>COUNTRY</th>
            <th>TITLE</th>
            <th>DURATION</th>
            <th>DAYS</th>
            <th>AMOUNT</th>
            <th>OPTION</th>
          </tr>
        </thead>
        <tbody>
        {tourlists.map((item, index) => (
            <tr key={item.id}>
              <td><img src={item.image} alt="IMAGES" /></td>
              <td>{item.country}</td>
              <td>{item.title}</td>
              <td>{item.duration}</td>
              <td>{item.days}</td>
              <td>{item.amount}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(user)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        
    </>
  );
}

export default Tourdash;
