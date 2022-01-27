import React from "react";
import {
  Avatar,
  styled,
  Typography,
  Card,
  Chip,
  CardContent,
  Stack,
  Paper,
} from "@mui/material";
import { Menu } from "../../Components/Menu/Menu";
import { Rodape } from "../../Components/Rodape/Rodape";
import sol from "../../shared/img/sol.jpg";
import foto from "../../shared/img/foto.jpg";

const Root = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
}));

const Body = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: theme.spacing(2),
}));

const Spine = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(3),
}));

const Box = styled("div")(({ theme }) => ({
  padding: theme.spacing(10),
}));

export function PaginaMeuEnvio() {
  return (
    <Root>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Menu></Menu>
      </div>
      <Header>
        <Typography variant="h4" style={{ fontWeight: "bold", fontFamily: "Gotham",}}>
          Meu Envio
        </Typography>
      </Header>
      <Body>
        <Spine>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "24px",
            }}
          >
            <Card>
              <CardContent>
                <img
                  alt="Meu Envio"
                  src={sol}
                  width="600px"
                  height="350px"
                ></img>
                <Stack direction="row" spacing={1}>
                  <Chip
                    label="Romance"
                    style={{ backgroundColor: "#6329af", color: "#fff" }}
                  />
                </Stack>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "18px",
                      fontFamily: "Gotham",
                    }}
                  >
                    O Sol é para todos | Harper Lee
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </div>
          <Stack direction="column" spacing={2}>
            <Paper elevation={4}>
              <CardContent>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Avatar
                    src={foto}
                    sx={{ width: 70, height: 70 }}
                  ></Avatar>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginLeft: "24px",
                    }}
                  >
                    <Typography variant="h6" style={{ fontWeight: "bold", fontFamily: "Outfit", }}>
                      Mateus Thayson
                    </Typography>
                    <Typography variant="h6" style={{ fontFamily: "Outfit", }}>
                      Esse foi um dos melhores livros que já li! Gostaria muito de compartilhar essa leitura!
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Paper>
            <Typography variant="h6" style={{ fontWeight: "bold", fontFamily: "Gotham" }}>
              Comentários:
            </Typography>
            <Paper elevation={4}>
              <CardContent>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Avatar
                    src={
                      "https://ichef.bbci.co.uk/news/640/cpsprodpb/121F5/production/_116092247_foto_01.jpg"
                    }
                    sx={{ width: 70, height: 70 }}
                  ></Avatar>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginLeft: "24px",
                    }}
                  >
                    <Typography variant="h6" style={{ fontWeight: "bold", fontFamily: "Outfit",  }}>
                      Ana Julia
                    </Typography>
                    <Typography variant="h6" style={{ fontFamily: "Outfit",  }}>
                      Não acredito que encontrei esse livro aqui, quero muito ler ele. Vc poderia compartilhar cmg?
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Paper>
          </Stack>
        </Spine>
        <Box></Box>
      </Body>
      <Rodape></Rodape>
    </Root>
  );
}
