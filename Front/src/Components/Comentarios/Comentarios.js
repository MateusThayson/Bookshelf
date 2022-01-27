import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import './Comentarios.css'
import 'semantic-ui-css/semantic.min.css'

function Comentario(){
     return(
     <div>
          <Comment className='card-comment'>
               <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
               <Comment.Content>
                    <Comment.Author as='a'>Álisson</Comment.Author>
                    <Comment.Metadata>
                         <div>Hoje às 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>Ficou incrível!</Comment.Text>
                    <Comment.Actions>
                         <Comment.Action>Responder</Comment.Action>
                    </Comment.Actions>
               </Comment.Content>
          </Comment>
     </div>      
     )
}


export function Comentarios(){
     return(
          <Comment.Group size='large'>
               <Header as='h3' dividing>
                    Aprimore o passo
               </Header>
          <Comentario></Comentario>
               <Form reply>
                    <Form.TextArea />
                    <Button content='Adicionar Comentário' labelPosition='left' icon='edit' primary />
               </Form>
          </Comment.Group>
     )
}



