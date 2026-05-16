import { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [selectedWagon, setSelectedWagon] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState({
    1: [2, 5, 13, 24],
    2: [10, 11, 12],
    3: []
  });

  const toggleSeat = (seatId) => {
    setSelectedSeats(prev => 
      prev.includes(seatId) 
        ? prev.filter(id => id !== seatId) 
        : [...prev, seatId]               
    );
  };

  const clearSelection = () => setSelectedSeats([]);

  return (
    <BookingContext.Provider value={{ 
      selectedWagon, 
      setSelectedWagon, 
      selectedSeats, 
      toggleSeat, 
      bookedSeats,
      setBookedSeats,
      clearSelection
    }}>
      {children}
    </BookingContext.Provider>
  );
};