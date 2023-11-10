import { useContext } from "react";
import "./Welcome.css"
import { QuizContext } from "../context/quiz";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">

      <h2>Selecione a dificuldade:</h2>
        <button onClick={() => dispatch({type: "CHANGE_DIFFICULTY", payload: 0})}>
          Fácil
        </button>
        <button onClick={() => dispatch({type: "CHANGE_DIFFICULTY", payload: 1})}>
          Normal
        </button>
        <button onClick={() => dispatch({type: "CHANGE_DIFFICULTY", payload: 2})}>
          Difícil
        </button>

        <h2>Clique no botão para começar o quiz:</h2>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>
          Estou pronto
        </button>

    </div>
  )
}

export default Welcome