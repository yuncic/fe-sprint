import type { Node } from "./Node";

interface Props {
  node: Node;
  path: string;
  extendedPaths: Set<string>;
  onToggle: (childPath: string) => void;
}
export default function TreeNode({ node, path, extendedPaths, onToggle }: Props) {
  return (
    <div>
      <p style={{ color: "blue", fontSize: "20px", fontWeight: "bold" }}>{node.name}</p>
      {node.children?.map((child) => {
        const childPath = `${path}/${child.name}`;
        return (
          <TreeNode
            node={child}
            path={childPath}
            extendedPaths={extendedPaths}
            onToggle={onToggle}
            key={childPath}
          ></TreeNode>
        );
      })}
    </div>
  );
}
