function NotificationCenter({ notification }) {
  if (!notification.show) return null;

  const bg =
    notification.type === "success"
      ? "bg-green-600/20 border-green-500/30 text-green-400"
      : notification.type === "error"
      ? "bg-red-600/20 border-red-500/30 text-red-400"
      : "bg-blue-600/20 border-blue-500/30 text-blue-400";

  return (
    <div className="fixed top-6 right-6 z-50 animate-pulse">
      <div className={`px-6 py-4 rounded-2xl border shadow-2xl ${bg}`}>
        {notification.message}
      </div>
    </div>
  );
}

export default NotificationCenter;