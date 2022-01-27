import React from "react";
import { Menu } from "../../Components/Menu/Menu";
import {
  styled,
  Typography,
  Card,
  CardContent,
  Stack,
  Paper,
  Avatar,
  Chip
} from "@mui/material";
import { Link } from "react-router-dom";
import { Rodape } from "../../Components/Rodape/Rodape";
import foto from "../../shared/img/foto.jpg";
import felipe from "../../shared/img/felipe.png";
import luis from "../../shared/img/luis.jfif";
import sol from "../../shared/img/sol.jpg";
import agente from "../../shared/img/agente.jpg";
import gemeas from "../../shared/img/gemeas.jfif";


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

const Belly = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(3),
  backgroundColor: "#FBF4F4",
}));

const Box = styled("div")(({ theme }) => ({
  padding: theme.spacing(10),
}));

export function PaginaMeuPerfil() {
  return (
    <Root>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Menu></Menu>
      </div>
      <Header>
        <Typography variant="h4" style={{ fontWeight: "bold", fontFamily: "Gotham", }}>
          Meu Perfil
        </Typography>
      </Header>
      <Body>
        <Spine>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Card>
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "5px",
                  }}
                >
                  <img
                    alt="perfil"
                    src={foto}
                    width="200px"
                    height="200px"
                  ></img> 
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "18px",
                      fontFamily: "Gotham",
                    }}>
                    Mateus Thayson
                  </Typography>
                  <Stack direction="column" spacing={3}>
                    <Typography variant="h6" style={{ fontFamily: "Outfit", }}> 
                      Venho compartilhar os meus leituras com a família bookshelf
                      e busco fazer novas amizades por meio da leitura.
                    </Typography>
                    
                    <Typography variant="h6" style={{ fontWeight: "bold", fontFamily: "Gotham", }}>
                      Amigos:
                    </Typography>
                    <Stack direction="column" spacinh={1}>
                      <Paper elevation={4}>
                        <CardContent>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
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
                              <Typography
                                variant="h6"
                                style={{ fontWeight: "bold", fontFamily: "Gotham", }}
                              >
                                Ana Julia
                              </Typography>
                              <Typography variant="h6" style={{ fontFamily: "Outfit", }}>
                                Sou uma verdadeira amante dos livros! Mas os de ficção têm um lugar especial no meu S2
                              </Typography>
                            </div>
                          </div>
                        </CardContent>
                      </Paper>
                    </Stack>
                    <Stack direction="column" spacinh={1}>
                      <Paper elevation={4}>
                        <CardContent>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <Avatar
                              src={
                                felipe
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
                              <Typography
                                variant="h6"
                                style={{ fontWeight: "bold", fontFamily: "Gotham", }}
                              >
                                Felipe Alves
                              </Typography>
                              <Typography variant="h6" style={{ fontFamily: "Outfit", }}>
                                Um dia frio e um bom lugar pra ler um livro são tudo o que eu quero agora!
                              </Typography>
                            </div>
                          </div>
                        </CardContent>
                      </Paper>
                    </Stack>
                    <Stack direction="column" spacinh={1}>
                      <Paper elevation={4}>
                        <CardContent>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <Avatar
                              src={
                                luis
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
                              <Typography
                                variant="h6"
                                style={{ fontWeight: "bold", fontFamily: "Gotham", }}
                              >
                                Luis Carlos
                              </Typography>
                              <Typography variant="h6" style={{ fontFamily: "Outfit", }}>
                                Eu juro solenemente não fazer nada de bom!
                              </Typography>
                            </div>
                          </div>
                        </CardContent>
                      </Paper>
                    </Stack>
                  </Stack>
                </div>
              </CardContent>
            </Card>
          </div>
        </Spine>
        <Box></Box>
        <Belly>
        <Typography
           variant="h6"
           style={{fontFamily: "Gotham", }}>
            Meus livros
         </Typography>
          <Stack direction="column" spacing={2}>
          <Link to="/meuenvio" styles={{ textDecoration: "none" }}>
            <Card style={{ height: "250px", display: "flex", alignItems: "center" }}>
              <CardContent>
                <img
                  alt="O sol é para todos"
                  src={sol}
                  width="300px"
                  height="150px"
                  style={{ objectFit: "cover" }}
                ></img>
                <Stack direction="row" spacing={1}>
                  <Chip
                    label="Romance"
                    style={{ backgroundColor: "#5A0089", color: "#fff" }}
                  />
                </Stack>
                <Typography variant="h6" style={{ paddingTop: "4px" }}>
                  O sol é para todos
                </Typography>
              </CardContent>
            </Card>
          </Link>
          <Link to="/meuenvio" styles={{ textDecoration: "none" }}>
            <Card style={{ height: "250px", display: "flex", alignItems: "center" }}>
              <CardContent>
                <img
                  alt="O agente secreto"
                  src={agente}
                  width="300px"
                  height="150px"
                  style={{ objectFit: "cover" }}
                ></img>
                <Stack direction="row" spacing={1}>
                  <Chip
                    label="Aventura"
                    style={{ backgroundColor: "#5A0089", color: "#fff" }}
                  />
                </Stack>
                <Typography variant="h6" style={{ paddingTop: "4px" }}>
                  O agente secreto
                </Typography>
              </CardContent>
            </Card>
          </Link>
          <Link to="/meuenvio" styles={{ textDecoration: "none" }}>
            <Card style={{ height: "250px", display: "flex", alignItems: "center" }}>
              <CardContent>
                <img
                  alt="As gemeas do gelo"
                  src={gemeas}
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
                  As gêmeas do gelo
                </Typography>
              </CardContent>
            </Card>
          </Link>
          </Stack>
        </Belly>
      </Body>
      <Rodape></Rodape>
    </Root>
  );
}
