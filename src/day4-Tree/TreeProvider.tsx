import { useState } from "react";
import { TreeContext } from "./TreeContext";

export default function TreeProvider({ children }: { children: React.ReactNode }) {
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set());

  function onToggle(path: string) {
    const newSet = new Set(expandedPaths);
    if (newSet.has(path)) {
      newSet.delete(path);
    } else {
      newSet.add(path);
    }
    setExpandedPaths(newSet);
  }

  return <TreeContext.Provider value={{ expandedPaths, onToggle }}>{children}</TreeContext.Provider>;
}
