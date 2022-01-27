
import "./PaginaLogin.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { AppContext } from "../../App";
import { Rodape } from "../../Components/Rodape/Rodape";

function FormularioLogin(){

    const navigate = useNavigate();
    
    const {register, handleSubmit} = useForm();

    const auth = useContext(AppContext);

    const logar = (loginDados) =>{
        login(loginDados).then((response)=>{
            auth.setAuth({token: response.data.token, nome: response.data.nome});
            navigate('/home');
        }).catch((error)=>{
            console.log(error);
        })
    };

    return (
        <div className="formulario-container">
            <form className="formulario" onSubmit={handleSubmit(logar)}>
                <h3 className="sub-titulo">Email:</h3> 
                <input className="email input" type="text" name="email" placeholder="Digite seu email..." {...register('email', { required: true})}/>           
                <h3 className="sub-titulo">Senha:</h3>
                <input className="senha input" type="password" name="senha" placeholder="Digite sua senha..." {...register('senha', { required: true})}/>
                <button className="btn-login button"> Login </button> 
                <NavLink className="btn-registrar button" to="/registrar"> Registre-se! </NavLink>
                <NavLink className="btn-senha" to="/recuperarsenha">Esqueceu sua senha?</NavLink>    
            </form>
            
        </div>
        
    )
}


export function PaginaLogin(){
    return(
         <div className="paginalogin">
            <h1 className="titulo">Bem-vindo ao BOOKSHELF</h1>
            <FormularioLogin></FormularioLogin>
            <div style={{ position: "absolute", bottom: 0, width: "100vw" }}>
                <Rodape></Rodape>
            </div>               
        </div> 
    )
}