import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Input } from '../../Components/Input';
import { LinkButton } from "../../Components/LinkButton";
import { Ingredient } from "../../Components/Ingredient";
import { TextButton } from "../../Components/TextButton";

import { FaAngleLeft, FaUpload } from "react-icons/fa";
import { useState } from "react";


export function NewMeal() {

    const [ingredients, setIngredients] = useState(['Pão Naan', 'Pão árabe']);
    const [newIngredient, setNewIngredient] = useState('');

    function handleAddIngredient(){
        setIngredients(previous => [...previous, newIngredient]);
        setNewIngredient('');
    }

    function handleRemoveIngredient(ingredient){
        setIngredients(previous => previous.filter(previousIngredient => previousIngredient !== ingredient));
    }



    return (
        <Container>
            <Header />
            <main>
                <LinkButton content='voltar' icon={FaAngleLeft} />
                <h2>Criar prato</h2>
                <form>
                    <div id="first-row">
                        <label htmlFor='pick-image'>
                            <label>Imagem do prato</label>
                            <div id="select-image">
                                <FaUpload />
                                <span>Selecione imagem</span>
                            </div>
                        </label>
                        <input id='pick-image' type='file' />
                        <Input label='Nome' placeholder='Ex.: Salada Caesar' />
                    </div>
                    <div id="second-row">
                        <div id="ingredients">
                            <label>Ingredientes</label>
                            <div id="ingredients-rol">
                                {ingredients.map((ingredient, index) => (
                                    <Ingredient key={String(index)} name={ingredient} onClick={() => handleRemoveIngredient(ingredient)} />
                                ))}
                                <Ingredient isNew value={newIngredient} onChange={e => setNewIngredient(e.target.value)} onClick={handleAddIngredient} />
                            </div>
                        </div>
                        <Input label='Preço' placeholder='R$ 00,00' />
                    </div>
                    <div id="description">
                        <Input type='textarea' label='Descrição' placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' rows={6} />
                    </div>
                </form>
                <TextButton content='Adicionar prato' />
            </main>
            <Footer />
        </Container>
    )
}