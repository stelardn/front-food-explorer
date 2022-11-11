import { TextButton } from "./Components/TextButton";
import { LinkButton } from "./Components/LinkButton";
import { FaChevronLeft } from 'react-icons/fa';
import { Input } from "./Components/Input";
import { QtyInput } from "./Components/QtyInput";

import { Header } from './Components/Header';
import { Footer } from './Components/Footer';


function App() {

  return (
    <>
      {/* <Header /> */}
      <Header />
      {/* <h1>Hello, World!</h1>
      <TextButton
        content='Criar conta'
      />
      <LinkButton
        icon={FaChevronLeft}
        content='Já tenho uma conta'
      />
      <Input label='Seu nome' placeholder='Exemplo: Maria da Silva' />

      <QtyInput /> */}
      <Footer />
    </>
  )
}

export default App;
