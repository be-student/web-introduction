import { Checkbox } from "@mui/material";
import { useState } from "react";

type Props = {
  onCheck: () => void;
  onUndo: () => void;
};

function CheckBox({ onCheck, onUndo }: Props) {
  const [checked, setChecked] = useState<boolean>(false);
  const onClick = () => {
    if (checked) {
      onCheck();
    } else {
      onUndo();
    }
    setChecked((before) => !before);
  };
  return <Checkbox value={checked} onClick={onClick}></Checkbox>;
}

export default CheckBox;
