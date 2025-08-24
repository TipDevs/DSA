import { LinkedList } from "./linkedList.js";
const list = new LinkedList();
list.append("Car");
list.append("Apple");
list.append("Lambo");
list.append("Beans");
// list.prepend("Bugatti");
console.log(list.size());
console.log(list);