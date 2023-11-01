import { useContext } from "react";
import Quiz from "../img/quiz.svg";
import "./Welcome.css"
import { QuizContext } from "../context/quiz";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
        <h2>Clique no botão para começar o quiz:</h2>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>
          Estou pronto
        </button>
        <img src={Quiz} alt="Início do quiz" />
    </div>
  )
}

export default Welcome