const socket = io(
  "http://localhost:3000/",
);

// Listen for the broadcast event from the server
socket.on("broadcast", (data) => {
  console.log(data);
  // Update the element with the online count
  document.getElementById("online-count").innerText = `${data}`;
});
