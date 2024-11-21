import React from "react";

/**
 * SeatGrid Component
 * @param {Object} props - Component properties.
 * @param {Array} props.seats - Array of seat objects with `id` and `occupied` properties.
 * @param {Function} props.toggleSeatStatus - Function to toggle seat status on click.
 */
const SeatGrid = ({ seats, toggleSeatStatus }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {seats.map((seat) => (
        <div
          key={seat.id}
          className={`w-16 h-16 flex items-center justify-center font-bold text-white rounded-md cursor-pointer ${
            seat.occupied ? "bg-red-500" : "bg-green-500"
          }`}
          onClick={() => toggleSeatStatus(seat.id)}
        >
          {seat.id}
        </div>
      ))}
    </div>
  );
};

export default SeatGrid;
