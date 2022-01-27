import React from "react";
import "./PaginaBemVindo.css";
import { styled, Typography } from "@mui/material";
import { Rodape } from "../../Components/Rodape/Rodape";
import marca from "../../shared/img/marca.png";
import estante from "../../shared/img/estante.jpg";
import buscar from "../../shared/img/buscar.jpg";
import altofalante from "../../shared/img/altofalante.jpg";
import compartilhar from "../../shared/img/compartilhar.jpg";
import { NavLink } from "react-router-dom";

const Header = styled("div")(() => ({
  display: "flex",
  height: '60px',
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#6329af",
  paddingRight: "40px",
  paddingLeft: "40px",
}));

const Neck = styled("div")(() => ({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

const Body = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(3),
}));

const Root = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const Container = styled("div")(({ theme }) => ({
  display: "grid",
  gridRowGap: "100px",
  gridColumnGap: "100px",
  gridTemplateColumns: "auto 400px 400px auto",
  gridTemplateRows: "400px 500px",
}));

export function PaginaBemVindo(props) {
  return (
    <Root>
      <Header>
        <img alt="Bookshelf-marca" src={marca} height="40px"></img>
      </Header>
      <Neck>
        <img
          alt="estante de livros"
          src={estante}
          height="450px"
          width="100%"
        ></img>
          <NavLink className="login" to="/login"> Junte-se ao Bookshelf! </NavLink>
      </Neck>
      <Body>
        <Container>
          <img
            style={{
              gridRow: "1 / 3",
              gridColumn: "2 / 3",
              height: "400px",
              width: "100%",
              objectFit: "cover",
            }}
            alt="compartilhar livros"
            src={compartilhar}
          ></img>
          <div
            style={{
              gridRow: "1 / 2",
              gridColumn: "3 / 4",
              position: "relative",
            }}
          >
            <Typography
              variant="h3"
              component="div"
              gutterBottom
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                fontFamily: "Gotham, Outfit",
              }}
            >
              Bem-vindo ao BOOKSHELF
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                marginBottom: "50px",
                fontSize: "16px",
                fontFamily: "Outfit",
              }}
            >
              Somos a melhor plataforma de compartilhamento de livros. 
              Aqui você encontrará um Universo de histórias compartilhadas pela famíla Bookshelf. E o melhor de tudo,
              você também pode compartilhar os seus livros com os amantes da leitura. 
            </Typography>
            <div
              style={{
                height: "60px",
                width: "100%",
                backgroundColor: "#6329af",
                position: "absolute",
                bottom: "0",
              }}
            ></div>
          </div>

          <img
            style={{
              gridRow: "2 / 3",
              gridColumn: "2 / 3",
              height: "500px",
              width: "100%",
              objectFit: "cover",
            }}
            alt="altofalante"
            src={altofalante}
          ></img>

          <div
            style={{
              gridRow: "2 / 3",
              gridColumn: "3 / 4",
              position: "relative",
            }}
          >
            <img
              style={{
                height: "320px",
                width: "100%",
                objectFit: "cover",
                marginBottom: "50px",
              }}
              alt="buscar livros"
              src={buscar}
            ></img>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                position: "absolute",
                bottom: "0",
              }}
            >
              <div
                style={{
                  backgroundColor: "#6329af",
                  width: "30px",
                  height: "125px",
                }}
              ></div>
              <Typography
                variant="h4"
                component="div"
                gutterBottom
                style={{
                  fontWeight: "bold",
                  marginLeft: "16px",
                  fontFamily: "Gotham",
                }}
              >
                COMPARTILHAR A LEITURA É UM PRAZER
              </Typography>
            </div>
          </div>
        </Container>
      </Body>
      <Rodape></Rodape>
    </Root>
  );
}
