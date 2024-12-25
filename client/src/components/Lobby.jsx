import React, { useState, useEffect, useCallback } from "react";
import { useSocket } from "../context/SocketProvider";
import styles from "../styles/Lobby.module.css";

const LobbyScreen = () => {
    const socket = useSocket();
    const [email, setEmail] = useState("");
    const [roomNumber, setRoomNumber] = useState("");

    const handleJoinForm = () => {
        if (email && roomNumber) {
            console.log("Joining room with email:", email, "and room number:", roomNumber);
            socket.emit("room:join", { email, roomNumber });
        } else {
            alert("Please enter both email and room number");
        }
    };

    const handleJoinRoom = useCallback((data) => {
        const { email, roomNumber } = data;
        console.log("Joined room with email:", email, "and room number:", roomNumber);
    }, []); 

    useEffect(() => {
        if (socket) {
            socket.on("room:join", handleJoinRoom);

            return () => {
                socket.off("room:join", handleJoinRoom);
            };
        }
    }, [socket, handleJoinRoom]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Join a Room</h1>
            <div className={styles.form}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Enter room number"
                    value={roomNumber}
                    onChange={(e) => setRoomNumber(e.target.value)}
                    className={styles.input}
                />
                <button onClick={handleJoinForm} className={styles.button}>
                    Join Room
                </button>
            </div>
        </div>
    );
};

export default LobbyScreen;
