import { TextButton } from "./Components/TextButton";
import { LinkButton } from "./Components/LinkButton";
import { FaChevronLeft } from 'react-icons/fa';
import { Input } from "./Components/Input";

function App() {

  return (
    <>
      <h1>Hello, World!</h1>
      <TextButton
        content='Criar conta'
      />
      <LinkButton
        icon={FaChevronLeft}
        content='Já tenho uma conta'
      />
      <Input label='Seu nome' placeholder='Exemplo: Maria da Silva' />
    </>
  )
}

export default App;
