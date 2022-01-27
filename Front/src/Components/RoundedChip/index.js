import React from "react";
import { Typography } from "@mui/material";

// Waiting recive props.imgSource and text
export function RoundedChip(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <img
        src={props.imgSource}
        alt=""
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "200px",
          objectFit: "cover",
        }}
      ></img>
      <Typography variant="h4" align="center" sx={{ marginTop: "8px" }}>
        {props.text}
      </Typography>
    </div>
  );
}
