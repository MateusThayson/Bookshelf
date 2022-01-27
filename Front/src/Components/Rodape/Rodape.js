import "./Rodape.css"; 
import marca from "../../shared/img/marca.png";
import { BiCopyright } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineBuild } from 'react-icons/md';
import { RiFileListLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';

export function Rodape(){
    return(
        <div className="rodape">

            <div className="marca">
                <img src={marca} alt="marca-bookshelf"></img>
                <p>2021 <BiCopyright/> Todos os direitos reservados. Bookshelf</p>
            </div>

            <div className="container">
                <p className="faleconosco">Fale <br/> conosco!</p>
                <div className="contatos">
                    <a href="www.globo.com"><span><BsTelephone/></span>(+55 xx) xxxxx-xxxx</a>
                    <a href="www.globo.com"><span><AiOutlineMail/></span>bookshelf@gmail.com</a>
                </div>
                <div className="contatos">
                    <a href="www.globo.com"><span><MdOutlineBuild/></span>Suporte</a>
                    <a href="www.globo.com"><span><RiFileListLine/></span>Termos de Uso e Privacidade</a>
                </div>
                <div className="contatos">
                    <a href="www.globo.com"><span><FaInstagram/></span>Instagram</a>
                    <a href="www.globo.com"><span><AiOutlineTwitter/></span>Twitter</a>
                </div>
                <div className="contatos">
                    <a href="www.globo.com"><span><AiOutlineYoutube/></span>YouTube</a>
                    <a href="www.globo.com"><span><AiFillFacebook/></span>Facebook</a>
                </div>
                <div className="contatos">
                    <a href="www.globo.com"><span><FaTiktok/></span>TikTok</a>
                </div>
            </div>     
         
        </div>
    )
}