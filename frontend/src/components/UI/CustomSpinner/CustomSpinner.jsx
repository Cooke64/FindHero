import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import cls from "./CustomSpinner.module.css";

export default function CustomSpinner() {
  return (
    <div className={[cls.spinerBlock, "_container"].join(" ")}>
      <div className={cls.spiner}>
        <CircularProgress color="inherit"/>
        <div>Идет загрузка...</div>
      </div>
    </div>
  );
}
