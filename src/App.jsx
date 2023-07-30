import { useState } from "react";

import * as C from './styles';

import Header from "../components/Header/Header";
import Content from "../components/Conteudo/Content";

import mulherJovem from './assets/mulher-jovem.svg';
import mulherAdulta from './assets/mulher-adulta.svg';
import homemJovem from './assets/homem-jovem.svg';
import homemAdulto from './assets/homem-adulto.svg';
import arrowRigth from './assets/next.png';
import arrowLeft from './assets/previous.png';

function App() {

  const reviews = [
    {id: 0, img: mulherJovem, name: "Susan Smith", profission: "Web Developer", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
    {id: 1, img: homemJovem, name: "Peter Jones", profission: "Insider", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},
    {id: 2, img: mulherAdulta, name: "Anna Johnson", profission: "Web Designer", description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."},
    {id: 3, img: homemAdulto, name: "Bill Anderson", profission: "The Boss", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."},
  ];

  const [id, setId] = useState(0);

  const handleNext = () => {
    {id >= 0 && id <= 2 ? (setId(id + 1)) : (setId(0))}
  };

  const handlePrevious = () => {
    {id < 1 ? (setId(3)) : (setId(id - 1))}
  };

  const handleSurprise = () => {
    setId(Math.floor(Math.random() * 4));
  }

  return (
      <C.Container>
        <Header />
        <Content
          key={reviews[id].id}
          img={reviews[id].img}
          name={reviews[id].name}
          profission={reviews[id].profission}
          description={reviews[id].description}
        />
        <C.BoxButtons>
          <img
            onClick={handlePrevious}
            style={{width:16, cursor: "pointer", marginRight: 16}}
            src={arrowLeft}
          />
          <img
            onClick={handleNext}
            style={{width:16, cursor: "pointer", marginLeft: 16}}
            src={arrowRigth}
          />
        </C.BoxButtons>
        <C.ButtonSurprise onClick={handleSurprise}>Surpreenda-me</C.ButtonSurprise>
      </C.Container>
  )
}

export default App