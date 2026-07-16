import { createContext } from "react";

interface TreeContextType {
  expandedPaths: Set<string>;
  onToggle: (childPath: string) => void;
}

export const TreeContext = createContext<TreeContextType | null>(null);
