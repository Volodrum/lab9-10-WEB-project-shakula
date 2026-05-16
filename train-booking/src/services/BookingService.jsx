export const BookingService = {
  saveBooking: (bookingData) => {
    return new Promise((resolve) => {
      const existingBookings = JSON.parse(localStorage.getItem('train_bookings')) || [];
      existingBookings.push({
        ...bookingData,
        id: Date.now(),
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('train_bookings', JSON.stringify(existingBookings));
      resolve({ success: true });
    });
  }
};