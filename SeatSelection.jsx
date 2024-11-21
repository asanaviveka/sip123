import React, { useState } from "react";
import SeatGrid from "./SeatGrid";

const initialSeats = [
  { id: "1A", occupied: false },
  { id: "1B", occupied: true },
  { id: "1C", occupied: false },
  { id: "1D", occupied: true },
  { id: "2A", occupied: false },
  { id: "2B", occupied: true },
  { id: "2C", occupied: false },
  { id: "2D", occupied: true },
];

const SeatSelection = () => {
  const [seats, setSeats] = useState(initialSeats);

  const toggleSeatStatus = (id) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === id ? { ...seat, occupied: !seat.occupied } : seat
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Select Your Seats</h1>
      <SeatGrid seats={seats} toggleSeatStatus={toggleSeatStatus} />
    </div>
  );
};

export default SeatSelection;
