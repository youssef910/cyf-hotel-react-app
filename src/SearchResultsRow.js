import React, { useState } from "react";
import moment from "moment";

const SearchResultsRow = props => {
  const initialState = "";
  const [hover, setHover] = useState(initialState);
  const {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
  } = props;
  const calculateNumberOfNight = (checkInDate, checkOutDate) => {
    var checkInDateFormate = moment(checkInDate);
    var checkOutDateFormate = moment(checkOutDate);
    const numberOfNights = checkOutDateFormate.diff(checkInDateFormate, "days");

    return numberOfNights;
  };
  return (
    <tr
      style={{ backgroundColor: hover }}
      key={id}
      onClick={() => {
        hover === initialState ? setHover("highlight") : setHover("");
      }}
    >
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{calculateNumberOfNight(checkInDate, checkOutDate)}</td>
    </tr>
  );
};

export default SearchResultsRow;
