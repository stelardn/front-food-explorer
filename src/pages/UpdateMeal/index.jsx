import { Container, SelectImage } from "./styles";

import { HeaderAdm } from "../../components/HeaderAdm";
import { Footer } from "../../components/Footer";
import { Input } from '../../components/Input';
import { LinkButton } from "../../components/LinkButton";
import { Ingredient } from "../../components/Ingredient";
import { TextButton } from "../../components/TextButton";

import { FaAngleLeft, FaUpload } from "react-icons/fa";
import { useEffect, useState } from "react";
import { mockMeals } from "../../../mockData";
import { FiX } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";


export function UpdateMeal() {

    const params = useParams();
    const navigate = useNavigate();

    const [details, setDetails] = useState(null);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');


    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');

    // const [mealPicture, setMealPicture] = useState();
    const [mealPictureFile, setMealPictureFile] = useState(null);
    const [mealPictureName, setMealPictureName] = useState();


    function handleAddIngredient() {
        setIngredients(previous => [...previous, newIngredient]);
        setNewIngredient('');
    }

    function handleRemoveIngredient(ingredient) {
        setIngredients(previous => previous.filter(previousIngredient => previousIngredient !== ingredient));
    }

    function handleAddPicture(event) {
        const file = event.target.files[0];

        if (file) {
            setMealPictureFile(file);

            const filename = URL.createObjectURL(file);
            setMealPictureName(filename);
        }
    }

    function handleRemovePicture(event) {
        event.preventDefault();
        setMealPictureFile('');
        setMealPictureName('');
    }

    function handleBack() {
        navigate(-1);
    }

    async function handleDeleteMeal() {
        const confirm = window.confirm(`Tem certeza de que deseja excluir este prato?`);

        if (confirm) {
            await api.delete(`/meals/${params.id}`);
            navigate('/');
        }
    }

    async function handleUpdateMeal() {
        let validatedPrice;

        if (String(price).includes(',')) {
            const StringWithDot = price.replace(',', '.');
            validatedPrice = Number(StringWithDot);
        } else {
            validatedPrice = Number(price);
        }


        if (isNaN(validatedPrice)) {
            return alert('Insira um preço válido.')
        }

        const updated = {
            name,
            ingredients,
            price: validatedPrice,
            description
        }

        if (mealPictureFile) {
            const fileUploadForm = new FormData();

            fileUploadForm.append('picture', mealPictureFile);

            const picture = await api.patch(`/meals/picture/${params.id}`, fileUploadForm);

            updated.picture = picture.data;
        }

        console.log(updated);

        const updatedMeal = Object.assign(details, updated);
        console.log(updatedMeal);

        api.put(`/meals/${params.id}`, { ...updatedMeal })
            .then(() => {
                alert('Prato atualizado com sucesso!')
            })
            .catch(error => {
                console.log(error);
                alert(error.data.message.toString())
            });
    }

    useEffect(() => {
        async function fetchDetails() {
            const response = await api.get(`/meals/${params.id}`);

            const { data } = response;

            const ingredientsArray = response.data.ingredients.map(ingObject => ingObject.name);

            setDetails(data);
            setIngredients(ingredientsArray);
            setName(data.name);
            setDescription(data.description);
            setPrice(data.price);
            setMealPictureName(data.picture);

        }

        fetchDetails();
    }, []);




    return (
        <Container>
            <HeaderAdm />
            <main>
                <LinkButton id='back-button' content='voltar' icon={FaAngleLeft} onClick={handleBack} />
                <h2>Editar prato</h2>
                <form>
                    <div id="first-row">
                        <label htmlFor='pick-image'>
                            <label>Imagem do prato</label>
                            {(
                                () => {
                                    if (mealPictureName) {
                                        return (
                                            <SelectImage>
                                                <span>{mealPictureName}</span>
                                                <button id="remove-image" onClick={handleRemovePicture}>
                                                    <FiX color="white" />
                                                </button>
                                            </SelectImage>
                                        )
                                    } else {
                                        return (
                                            <SelectImage>
                                                <FaUpload />
                                                <span>Selecione imagem</span>
                                            </SelectImage>
                                        )
                                    }
                                })()
                            }
                        </label>
                        <input id='pick-image' type='file' onChange={handleAddPicture} />
                        <Input label='Nome' placeholder='Ex.: Salada Caesar' value={name} onChange={e => setName(e.target.value)} />
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
                        <Input label='Preço (R$)' placeholder='R$ 00,00' value={price} onChange={e => setPrice(e.target.value)} />
                    </div>
                    <div id="description">
                        <Input type='textarea' label='Descrição' placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' rows={6} value={description} onChange={e => setDescription(e.target.value)} />
                    </div>
                </form>
                <div id="action-buttons">
                    <TextButton content='Excluir prato' onClick={handleDeleteMeal} />
                    <TextButton content='Atualizar prato' onClick={handleUpdateMeal} />
                </div>
            </main>
            <Footer />
        </Container>
    )
}