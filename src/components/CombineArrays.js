import info from "./info";
import CheckboxList from "./CheckboxList";

const CombineArrays = info.data.products.edges.map((edges) => {
  let findHandle = CheckboxList.find(
    (checkbox) => checkbox.handle === edges.node.handle
  );

  if (findHandle) {
    edges.node.checkbox = findHandle.checkbox;
  }
  return edges;
});

console.log(CombineArrays);

export default CombineArrays;
