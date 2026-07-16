import { useTreeContext } from "./useTreeContext";
import type { Node } from "./Node";
interface Props {
  node: Node;
  path: string;
}
export default function TreeNode({ node, path }: Props) {
  const context = useTreeContext();
  const onToggle = context.onToggle;
  const expandedPaths = context.expandedPaths;
  return (
    <div>
      <p onClick={() => onToggle(path)} style={{ color: "blue", fontSize: "20px", fontWeight: "bold" }}>
        {node.name}
      </p>
      {expandedPaths.has(path) &&
        node.children?.map((child) => {
          const childPath = `${path}/${child.name}`;
          return <TreeNode node={child} path={childPath} key={childPath}></TreeNode>;
        })}
    </div>
  );
}
