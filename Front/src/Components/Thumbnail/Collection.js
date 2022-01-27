import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import sol from "../../shared/img/sol.jpg";
import agente from "../../shared/img/agente.jpg";
import bosque from "../../shared/img/bosque.jfif";
import gemeas from "../../shared/img/gemeas.jfif";
import pequeno from "../../shared/img/pequeno.jfif";
import carste from "../../shared/img/carste.jpg";

export default function Collection(titulo) {
  return (
    <Card>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          {titulo.titulo}
        </Typography>
      </div>
      <CardContent>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={2}>
            <Link to="/meuenvio">
              <img
                alt="O sol é para todos"
                src={sol}
                width="300px"
                height="150px"
                style={{ objectFit: "cover" }}
              ></img>
            </Link>
            <Link to="/meuenvio">
              <img
                alt="Gêmeas de gelo"
                src={gemeas}
                width="300px"
                height="150px"
                style={{ objectFit: "cover" }}
              ></img>
            </Link>
            <Link to="/meuenvio">
              <img
                alt="O bosque"
                src={bosque}
                width="300px"
                height="150px"
                style={{ objectFit: "cover" }}
              ></img>
            </Link>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Link to="/meuenvio">
              <img
                alt="O agente"
                src={agente}
                width="300px"
                height="150px"
                style={{ objectFit: "cover" }}
              ></img>
            </Link>
            <Link to="/meuenvio">
              <img
                alt="príncipe"
                src={pequeno}
                width="300px"
                height="150px"
                style={{ objectFit: "cover" }}
              ></img>
            </Link>
            <Link to="/meuenvio">
              <img
                alt="O carste"
                src={carste}
                width="300px"
                height="150px"
                style={{ objectFit: "cover" }}
              ></img>
            </Link>
          </Stack>
        </Stack>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
        </div>
      </CardContent>
    </Card>
  );
}
