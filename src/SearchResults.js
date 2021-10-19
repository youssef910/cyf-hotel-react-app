import React from "react";
import SearchResultsRow from "./SearchResultsRow";
const SearchResults = props => {
  const { fakeBookings } = props;
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number Of night</th>
          </tr>
        </thead>
        <tbody>
          {fakeBookings &&
            fakeBookings.map(booking => {
              const {
                id,
                title,
                firstName,
                surname,
                email,
                roomId,
                checkInDate,
                checkOutDate
              } = booking;
              return (
                <SearchResultsRow
                  id={id}
                  title={title}
                  firstName={firstName}
                  surname={surname}
                  email={email}
                  roomId={roomId}
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
