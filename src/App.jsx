import { useState } from "react";
import MainShell from "./layout/MainShell";

function App() {
  const [notification, setNotification] = useState({
    type: "",
    message: "",
    visible: false
  });

  const playSound = (type) => {
    if (type === "success") {
      const audio = new Audio("/success.mp3");
      audio.volume = 0.6;
      audio.play();
    }

    if (type === "error") {
      const audio = new Audio("/error.mp3");
      audio.volume = 0.6;
      audio.play();
    }
  };

  const showNotification = (type, message) => {
    playSound(type);

    setNotification({
      type,
      message,
      visible: true
    });

    setTimeout(() => {
      setNotification((prev) => ({
        ...prev,
        visible: false
      }));
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <MainShell showNotification={showNotification} />

      {notification.visible && (
        <div
          className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl animate-slideIn ${
            notification.type === "success"
              ? "bg-green-500/10 border-green-500/20 text-green-400"
              : notification.type === "error"
              ? "bg-red-500/10 border-red-500/20 text-red-400"
              : "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
          }`}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
}

export default App;