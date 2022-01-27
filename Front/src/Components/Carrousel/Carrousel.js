import { Carousel } from 'react-carousel-minimal';

export function Carrousel(){
     const data = [
          {
               image: "https://www.segs.com.br/media/k2/items/cache/56318238b8a583a4f3c010bffcdd05b8_XL.jpg",
               caption: "Dance 1"
          },
          {
               image: "https://theatromunicipal.org.br/wp-content/uploads/2019/07/60A4992-11.jpg",
               caption: "Dance 2"
          },
          {
               image: "https://4.bp.blogspot.com/-GHk6npKhBTM/Vma2kqnUrJI/AAAAAAAAAnE/cSJsmFjy0ek/s1600/1417120172estreia_quebra_nozes__credito_cleber_gomes_%25288%2529.jpg",
               caption: "Dance 3"
          },
          {
               image: "https://www.sescpr.com.br/wp-content/uploads/2019/04/iStock-827891858.jpg",
               caption: "Dance 4"
          }
     ];

     const captionStyle = {
          fontSize: '2em',
          fontWeight: 'bold',
     }
     const slideNumberStyle = {
          fontSize: '20px',
          fontWeight: 'bold',
     }
     return (
          <div className="App">
               <div style={{ textAlign: "center" }}>
                    <div style={{
                         padding: "0 20px"
                    }}>
                         <Carousel
                              data={data}
                              time={3000}
                              width="200px"
                              height="300px"
                              captionStyle={captionStyle}
                              radius="10px"
                              slideNumber={true}
                              slideNumberStyle={slideNumberStyle}
                              captionPosition="bottom"
                              automatic={true}
                              dots={true}
                              pauseIconColor="darkgrey"
                              pauseIconSize="40px"
                              slideBackgroundColor="darkgrey"
                              slideImageFit="cover"
                              thumbnails={true}
                              thumbnailWidth="100px"
                              style={{
                                   textAlign: "center",
                                   maxWidth: "850px",
                                   maxHeight: "500px",
                                   margin: "40px auto",
                              }}
                         />
                    </div>
               </div>
          </div>
     );
}


