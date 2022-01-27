import React from "react";
import { Menu } from "../../Components/Menu/Menu";
import {
  styled,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Button
} from "@mui/material";
import { Rodape } from "../../Components/Rodape/Rodape";
import RowThumbnail from "../../Components/Thumbnail/RowThumbnail";
import estrela from "../../shared/img/estrela.jfif";
import neuro from "../../shared/img/neuro.jpg";


const Root = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F8EAFF",
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

export function PaginaDescobrir() {

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
        <Typography variant="h4" style={{ fontWeight: "bold", fontFamily:"Gotham", }}>
          Descobrir
        </Typography>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "24px" }}
        >
          <Card>
            <CardActionArea>
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  fontWeight: "bold",
                  marginBottom: "18px",
                  fontStyle: "italic",
                  fontFamily:"Outfit",
                }}
              >
                Livro mais buscado na semana
              </Typography>
              <img
                alt="Thumbnail"
                src={estrela}
                width="400px"
                height="200px"
                style={{objectFit: "cover",}}
              ></img>
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Romance"
                  style={{ backgroundColor: "#6329af", color: "#fff" }}
                />
              </Stack>
              <Typography variant="h6" style={{ paddingTop: "4px", fontFamily: "Outfit", fontWeight: "bold", }}>
                A culpa é das estrelas | John Green
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
          <div style={{ marginLeft: "35px", marginRight: "35px" }}></div>
          <Card style={{ alignItems: "center" }}>
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  fontWeight: "bold",
                  marginBottom: "18px",
                  fontStyle: "italic",
                  fontFamily: "Outfit",
                }}
              >
                 Novidade
              </Typography>
              <img
                alt="Thumbnail"
                src={neuro}
                width="400px"
                height="200px"
                style={{objectFit: "cover",}}
              ></img>
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Ficção Científica"
                  style={{ backgroundColor: "#6329af", color: "#fff" }}
                />
              </Stack>
              <Typography variant="h6" style={{ paddingTop: "4px", fontFamily: "Outfit", fontWeight: "bold", fontSize: "18px"}}>
                  Neuromancer  | William Gibson
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Header>
      <Body>
        <RowThumbnail titulo="Descubra: Gêneros Literários"></RowThumbnail>
        <Feet>
        <CustomButton onClick={topFunction}>
            <Typography style={{ color: "#5A0089FF" }}>
              Voltar ao Topo
            </Typography>
          </CustomButton>
        </Feet>
      </Body>
      <Rodape></Rodape>
    </Root>
  );
}
