import React, { useCallback, useState } from "react";
import { Checkbox } from "@shopify/polaris";

function CheckboxComponent() {
  const [checked, setChecked] = useState(false);
  const handleChange = useCallback((newChecked) => setChecked(newChecked), []);

  return <Checkbox checked={checked} onChange={handleChange} />;
}

export default CheckboxComponent;
