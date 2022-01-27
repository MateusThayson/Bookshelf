import React from "react";
import { Menu } from "../../Components/Menu/Menu";
import { styled, Typography, Stack, Button, Card, CardContent, Chip } from "@mui/material";
import Collection from "../../Components/Thumbnail/Collection";
import { Rodape } from "../../Components/Rodape/Rodape";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import gravity from "../../shared/img/gravity.jpg";
import neuro from "../../shared/img/neuro.jpg";
import sombra from "../../shared/img/sombra.jpeg";

const CustomButtom = styled(Button)(({ theme }) => ({
    backgroundColor: "#E9C8FA",
    margin: theme.spacing(2),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  }));
  
const Container = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }));

const Root = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(3),
}));

const Body = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(3),
}));

const Feet = styled("div")(() => ({
  width: "100%",
  height: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "25px",
  boxShadow: theme.shadows[2],
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export function PaginaHome() {
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <Root>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Menu></Menu>
      </div>
      <Header>
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", fontFamily: "Gotham" }}
        >
          Home
        </Typography>
      </Header>
      <Body>
      <Typography
          variant="h5"
          style={{ fontWeight: "bold", fontFamily: "Gotham" }}
        >
          Livros Compartilhados
        </Typography>
      <div style={{marginTop: "30px"}}>
        <Typography variant="h5" style={{ fontWeight: "bold", fontFamiky: "Gotham", textAlign: "center"}}>
        </Typography>
        <Container>
          <CustomButtom>
            <ChevronLeft />
          </CustomButtom>
          <Stack direction="row" spacing={2}>
            <div>
                <Card style={{ height: "250px", display: "flex", alignItems: "center" }}>
                <CardContent>
                  <img
                    src={gravity}
                    alt="Gravity Falls"
                    width="300px"
                    height="150px"
                    style={{ objectFit: "cover" }}
                  ></img>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      label="Aventura"
                      style={{ backgroundColor: "#6329af", color: "#fff" }}
                    />
                  </Stack>
                  <Typography variant="h6" style={{ paddingTop: "4px" }}>
                    Gravity Falls
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div>
                <Card style={{ height: "250px", display: "flex", alignItems: "center" }}>
                <CardContent>
                  <img
                    src={neuro}
                    alt="neuromance"
                    width="300px"
                    height="150px"
                    style={{ objectFit: "cover" }}
                  ></img>
                  <Stack direction="row" spacing={1}>
                    <Chip
                        label="Ficção Científica"
                        style={{ backgroundColor: "#6329af", color: "#fff" }}
                      />
                  </Stack>
                  <Typography variant="h6" style={{ paddingTop: "4px" }}>
                    Neuromancer
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div>
                <Card style={{ height: "250px", display: "flex", alignItems: "center" }}>
                <CardContent>
                  <img
                    src={sombra}
                    alt="sombra e ossos"
                    width="300px"
                    height="150px"
                    style={{ objectFit: "cover" }}
                  ></img>
                  <Stack direction="row" spacing={1}>
                    <Chip
                        label="Fantasia"
                        style={{ backgroundColor: "#6329af", color: "#fff" }}
                      />
                  </Stack>
                  <Typography variant="h6" style={{ paddingTop: "4px" }}>
                    Sombra e Ossos
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Stack>
          <CustomButtom>
            <ChevronRight />
          </CustomButtom>
        </Container>
    </div> 
        <Collection titulo="Meus Livros Compartilhados"></Collection>
        <Feet>
          <CustomButton onClick={topFunction}>
            <Typography style={{ color: "#6329af" }}>
              Voltar ao Topo
            </Typography>
          </CustomButton>
        </Feet>
      </Body>
      <Rodape></Rodape>
    </Root>
  );
}
