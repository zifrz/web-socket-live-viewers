# Real-Time Connection Counter Server

This is a Node.js server that tracks and broadcasts the number of people currently connected using WebSockets. The server is built using Express and Socket.io.

## Features

- Tracks the number of active WebSocket connections.
- Broadcasts the number of connected users to all clients in real-time.
- Provides an API to get the current connection count and active connection IDs.

## Prerequisites

- **Node.js**: Ensure that you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org).

## Installation

1. Install the required dependencies:
   ```bash
   npm install
   ```

## Running the Server

Start the server by running the following command:
```bash
node index.js
```

By default, the server will run on port 3000. You can access it at `http://localhost:3000`.

## API Endpoints

- `GET /`: Returns the current connection count and active connection IDs in JSON format.

  **Example Response:**
  ```json
  {
    "count": 5,
    "connections": ["socket-id-1", "socket-id-2", ...]
  }
  ```

## WebSocket Communication

The server uses Socket.io to establish WebSocket connections. When a client connects or disconnects, the server broadcasts the updated count of connected users.

## Dependencies

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Socket.io**: Enables real-time, bidirectional communication between web clients and servers.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing.

Install the dependencies using the following command:
```bash
npm install express socket.io cors
```