const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const bookings = [
    { id: 1, customerName: 'John Doe', date: '2023-07-15', startTime: '10:00', endTime: '11:00', roomId: 1 },
    { id: 2, customerName: 'Jane Smith', date: '2023-07-16', startTime: '14:00', endTime: '16:00', roomId: 2 },
  ];
  
  const rooms = [
    { id: 1, name: 'Room A', seats: 20, amenities: ['Projector', 'Whiteboard'], price: 100 },
    { id: 2, name: 'Room B', seats: 15, amenities: ['Projector'], price: 80 },
  ];
  
  // Function to get bookings for a specific room id
  function getBookingsByRoomId(roomId) {
    return bookings.filter((booking) => booking.roomId === roomId);
  }
  
  // Function to get room details by room id
  function getRoomById(roomId) {
    return rooms.find((room) => room.id === roomId);
  }

// Endpoint to create a room
app.post('/rooms', (req, res) => {
  const { seats, amenities, price } = req.body;
  const room = {
    id: rooms.length + 1,
    seats,
    amenities,
    price,
  };
  rooms.push(room);
  res.status(201).json({ message: 'Room created successfully.', room });
});

// Endpoint to book a room
app.post('/bookings', (req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;
    const booking = {
      id: bookings.length + 1,
      customerName,
      date,
      startTime,
      endTime,
      roomId,
    };
    bookings.push(booking);
    res.status(201).json({ message: 'Room booked successfully.', booking });
  });

  // Endpoint to list all rooms with booked data
app.get('/rooms', (req, res) => {
    const roomsWithBookings = rooms.map((room) => {
      const bookings = getBookingsByRoomId(room.id); // Function to get bookings for a specific room id
      return {
        roomName: room.name,
        booked: bookings.length > 0,
        bookings,
      };
    });
  
    res.json(roomsWithBookings);
  });

  // Endpoint to list all customers with booked data
app.get('/customers', (req, res) => {
    const customersWithBookings = bookings.map((booking) => {
      const room = getRoomById(booking.roomId); // Function to get room details by room id
      return {
        customerName: booking.customerName,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
        roomName: rooms.name,
      };
    });
  
    res.json(customersWithBookings);
  });

  // Endpoint to list how many times a customer has booked the room
app.get('/customer/:customerId/bookings', (req, res) => {
    const customerId = req.params.customerId;
  
    const customerBookings = bookings.filter((booking) => booking.customerId === customerId);
  
    res.json(customerBookings);
  });

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
