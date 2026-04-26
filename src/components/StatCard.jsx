
import { motion } from "framer-motion";

function StatCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="bg-zinc-900 border border-yellow-500/10 rounded-3xl p-6 shadow-xl"
    >
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <p className="text-3xl font-bold text-yellow-400 mt-3">{value}</p>
    </motion.div>
  );
}

export default StatCard;