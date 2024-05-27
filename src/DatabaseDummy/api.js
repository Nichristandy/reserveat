// api.js
export const fetchTables = async () => {
  // Simulate a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { tableName: "A", seatNumber: 6, status: true, room: "indoor" },
        { tableName: "B", seatNumber: 6, status: true, room: "indoor" },
        { tableName: "C", seatNumber: 2, status: true, room: "indoor" },
        { tableName: "D", seatNumber: 6, status: false, room: "indoor" },
        { tableName: "E", seatNumber: 2, status: true, room: "indoor" },
        { tableName: "F", seatNumber: 2, status: true, room: "indoor" },
        { tableName: "G", seatNumber: 2, status: false, room: "indoor" },
        { tableName: "H", seatNumber: 6, status: true, room: "indoor" },
        { tableName: "I", seatNumber: 6, status: true, room: "indoor" },
        { tableName: "J", seatNumber: 2, status: true, room: "indoor" },
      ]);
    }, 1000); // Simulate a 1-second delay
  });
};
