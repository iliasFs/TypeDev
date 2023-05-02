const defaultVal = `class DoublyLinkedList {
    constructor() {
      this.nodes = [];
    }
  
    get size() {
      return this.nodes.length;
    }
  
    get head() {
      return this.size ? this.nodes[0] : null;
    }
  
    get tail() {
      return this.size ? this.nodes[this.size - 1] : null;
    }}`;

export const categories = [
  { name: "Javascript" },
  { name: "Typescript" },
  { name: "Python" },
  { name: "Solidity" },
  { name: "Swift" },
  { name: "C++" },
  { name: "C#" },
];

export default defaultVal;
