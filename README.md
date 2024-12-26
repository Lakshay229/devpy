# Devpy

Devpy is a real-time peer-to-peer (P2P) video and audio calling application built with **WebRTC** and **Socket.io**. It allows users to connect in rooms, exchange high-quality video and audio streams, and collaborate seamlessly.

## Features

- 🔗 **Real-Time Connections**: Establish direct peer-to-peer connections for low-latency communication.
- 🎥 **Video Streaming**: Share high-quality video streams with other participants.
- 🎙️ **Audio Streaming**: Enjoy crystal-clear audio alongside video.
- 🔄 **Dynamic Room Joining**: Connect with other users in the same room automatically.
- 🛠️ **Seamless Negotiation**: Automated WebRTC negotiation for hassle-free peer connections.

## Technologies Used

- **React**: Frontend framework for building a dynamic and responsive UI.
- **WebRTC**: Enables real-time video and audio communication.
- **Socket.io**: Provides the signaling mechanism for peer connections.
- **ReactPlayer**: Handles video playback within the app.
- **CSS Modules**: Ensures modular and scoped styling.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/devpy.git
   cd devpy

2. Running Frontend:
   ```bash
   cd client
   npm install
   npm run dev   

3. Start the development server:
   ```bash
   cd server
   npm install
   npm start

4. Open the application in your browser at http://localhost:3001.

# WebRTC Video Chat Application

A real-time video chat application built with WebRTC, Socket.io, and React that enables seamless peer-to-peer communication.

## How It Works

### Signaling with Socket.io
- Users join rooms, and their presence is broadcast to others via Socket.io events
- Users can initiate or receive calls with built-in WebRTC signaling

### Media Streaming
- The app requests access to your camera and microphone to capture streams
- Both video and audio streams are transferred to the remote peer

### Real-Time Communication
- WebRTC handles the exchange of media tracks directly between peers
- Tracks are dynamically added for a seamless communication experience

## Project Structure
```bash
devpy/
├── client/
|   ├── .env
|   ├── public/
|   ├── package.json
|   └── src/
|       ├── components/ 
|       │   ├── Room.jsx        # Main component for handling room logic
|       │   └── Lobby.jsx
|       ├── service/
|       │   └── peer.js         # WebRTC peer connection setup and management
|       ├── context/
|       │   └── SocketProvider.jsx  # Context API for socket management
|       ├── styles/
|       |   ├── Lobby.module.css
|       │   └── Room.module.css  
|       └── App.js                 # Application entry point
└── server/
    ├── index.js
    ├── .env
    ├── package-lock.json
    └── package.json
```

## Usage

1. Start the application
2. Join a room to connect with other participants
3. Initiate a video/audio call or accept incoming calls
4. Share your stream or view the remote stream seamlessly

## Future Enhancements

- 🔒 **Authentication**: Secure room access with user authentication
- 📁 **File Sharing**: Add functionality to share files between participants  
- 🖼️ **Screen Sharing**: Enable screen sharing for collaborative sessions
- 📊 **Performance Metrics**: Monitor real-time connection quality like latency and bitrate

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.

2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name

3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"

4. Push your branch:
   ```bash
   git push origin feature-name

5. Submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Email**: preetindersingh13per@gmail.com
- **GitHub**: PreetinderSinghBadesha
