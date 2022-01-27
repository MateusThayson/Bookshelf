import React from "react";
import { Typography, Card, CardContent, Chip, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Thumbnail(link) {
  return (
    <Link to="/meu envio" styles={{ textDecoration: "none" }}>
      <Card style={{ height: "250px", display: "flex", alignItems: "center" }}>
        <CardContent>
          <img
            alt="Fundo Colorido"
            src={link.link}
            width="300px"
            height="150px"
            style={{ objectFit: "cover" }}
          ></img>
          <Stack direction="row" spacing={1}>
            <Chip
              label="Fantasia"
              style={{ backgroundColor: "#5A0089", color: "#fff" }}
            />
          </Stack>
          <Typography variant="h6" style={{ paddingTop: "4px" }}>
            Sol
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
