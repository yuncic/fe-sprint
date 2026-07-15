import type { Node } from "./Node";

export const mockTree: Node = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            { name: "Modal.tsx", type: "file" },
            { name: "Dropdown.tsx", type: "file" },
          ],
        },
        { name: "App.tsx", type: "file" },
      ],
    },
    { name: "package.json", type: "file" },
  ],
};
