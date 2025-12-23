import { motion } from "framer-motion";

const CodeSnippet = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="glass rounded-2xl p-5 text-xs text-muted"
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
        <span className="h-2 w-2 rounded-full bg-green-400" />
      </div>
      <pre className="font-mono leading-relaxed text-slate-200">
{`const lead = await launch({
  goal: "conversii",
  stack: ["React", "TS", "UX"],
  speed: "premium"
});

if (lead.ready) {
  ship("prod");
}`}
      </pre>
    </motion.div>
  );
};

export default CodeSnippet;