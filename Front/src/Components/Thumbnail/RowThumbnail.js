import React from 'react';
import {
    Typography,
    Stack,
    Button,
    styled,
    Card, 
    CardContent
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import fantasia from "../../shared/img/fantasia.jfif";
import fic from "../../shared/img/fic.jfif";
import suspense from "../../shared/img/suspense.jfif";

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

  
export default function Row(titulo){ 
    return(
        <div style={{marginTop: "30px"}}>
        <Typography variant="h5" style={{ fontWeight: "bold", fontFamiky: "Gotham", textAlign: "center"}}>
            {titulo.titulo}
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
                    src={fantasia}
                    alt="card fantasia"
                    width="300px"
                    height="150px"
                    style={{ objectFit: "cover" }}
                  ></img>
                  <Stack direction="row" spacing={1}>
                  </Stack>
                  <Typography variant="h6" style={{ paddingTop: "4px" }}>
                    Fantasia
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div>
                <Card style={{ height: "250px", display: "flex", alignItems: "center" }}>
                <CardContent>
                  <img
                    src={suspense}
                    alt="card suspense"
                    width="300px"
                    height="150px"
                    style={{ objectFit: "cover" }}
                  ></img>
                  <Stack direction="row" spacing={1}>
                  </Stack>
                  <Typography variant="h6" style={{ paddingTop: "4px" }}>
                    Suspense
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div>
                <Card style={{ height: "250px", display: "flex", alignItems: "center" }}>
                <CardContent>
                  <img
                    src={fic}
                    alt="card ficção"
                    width="300px"
                    height="150px"
                    style={{ objectFit: "cover" }}
                  ></img>
                  <Stack direction="row" spacing={1}>
                  </Stack>
                  <Typography variant="h6" style={{ paddingTop: "4px" }}>
                    Ficção Científica
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
    )
}