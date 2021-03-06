import React, { useContext } from "react";
import { CombatantContext } from "../Contexts/CombatantContext";
import Button from "../Utils/Button";

const ClearButton = () => {
  const { handleClearCombatants } = useContext(CombatantContext);

  return (
    <Button
      color="#6a5d83"
      text="Clear All"
      onClick={(e) => handleClearCombatants(e)}
    />
  );
};

export default ClearButton;
