import info from "./info";
import CheckboxList from "./CheckboxList";

const CombineArrays = info.data.products.edges.map((v) => {
  let obj = CheckboxList.find((o) => o.handle === v.node.handle);

  if (obj) {
    v.node.checkbox = obj.checkbox;
  }
  return v;
});

console.log(CombineArrays);

export default CombineArrays;
