import { Container, SelectImage } from "./styles";

import { HeaderAdm } from "../../components/HeaderAdm";
import { Footer } from "../../components/Footer";
import { Input } from '../../components/Input';
import { LinkButton } from "../../components/LinkButton";
import { Ingredient } from "../../components/Ingredient";
import { TextButton } from "../../components/TextButton";

import { FaAngleLeft, FaUpload } from "react-icons/fa";
import { useState } from "react";
import { mockMeals } from "../../../mockData";
import { FiX } from "react-icons/fi";


export function UpdateMeal() {

    const [ingredients, setIngredients] = useState(['Pão Naan', 'Pão árabe']);
    const [newIngredient, setNewIngredient] = useState('');
    const [mealPictureFile, setMealPictureFile] = useState();
    const [mealPictureName, setMealPictureName] = useState(mockMeals[0].picture);

    function handleAddIngredient(){
        setIngredients(previous => [...previous, newIngredient]);
        setNewIngredient('');
    }

    function handleRemoveIngredient(ingredient){
        setIngredients(previous => previous.filter(previousIngredient => previousIngredient !== ingredient));
    }

    function handleAddPicture(event){
        const file = event.target.files[0];

        if(file) {
            setMealPictureFile(file);
    
            const filename = URL.createObjectURL(file);
            setMealPictureName(filename);
        }
    }

    function handleRemovePicture(event){
        event.preventDefault();
        setMealPictureFile('');
        setMealPictureName(mockMeals[0].picture ?? '');
    }



    return (
        <Container>
            <HeaderAdm />
            <main>
                <LinkButton id='back-button' content='voltar' icon={FaAngleLeft} />
                <h2>Editar prato</h2>
                <form>
                    <div id="first-row">
                        <label htmlFor='pick-image'>
                            <label>Imagem do prato</label>
                            {(
                                () => {
                                    if(mealPictureName) {
                                        return (
                                            <SelectImage>
                                                <span>{mealPictureName}</span>
                                                <button id="remove-image" onClick={handleRemovePicture}>
                                                    <FiX color="white"/>
                                                </button>
                                            </SelectImage>
                                        )
                                    } else {
                                        return (
                                            <SelectImage>                                                  
                                                <FaUpload/>
                                                <span>Selecione imagem</span>
                                            </SelectImage>
                                        )
                                    }
                                })()
                            }
                        </label>
                        <input id='pick-image' type='file' onChange={handleAddPicture}/>
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
                <div id="action-buttons">
                    <TextButton content='Excluir prato' />
                    <TextButton content='Atualizar prato' />
                </div>
            </main>
            <Footer />
        </Container>
    )
}