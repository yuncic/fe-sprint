export type Node = {
  name: string;
  type: "file" | "folder";
  children?: Node[];
};
