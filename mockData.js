const meals = [
    {
        id: 1,
        name: 'Salada Caesar',
        ingredients: ['frango', 'alface', 'tomate'],
        price: 24,
        description: 'Alface, tomate, tiras de frango, torradas em cubos e molho Caesar.',
        picture: ''
    },
    {
        id: 2,
        name: 'Salada Mediterrânea',
        ingredients: ['alface', 'tomate cereja', 'palmito', 'rúcula'],
        price: 24,
        description: 'Alface, tomate, tiras de frango, torradas em cubos e molho Caesar.',
        picture: ''
    },

];

const mockUser = {
    name: 'Teste 1',
    email: 'teste1@teste.com',
    orders: [
        {
            id: 1,
            items: [
                {
                    id: 2,
                    name: 'Caesar Salad',
                    quantity: 1,
                    price: 24
                },
                {
                    id: 3,
                    name: 'Green Salad',
                    quantity: 2,
                    price: 17
                },
            ],
            status: 'Pendente',
            price: 58,
            created_at: '27 Dec 2021 15:00 LT',
            updated_at: '27 Dec 2021 15:00 LT',
        },
        {
            id: 2,
            items: [
                {
                    id: 2,
                    name: 'Caesar Salad',
                    quantity: 1,
                    price: 24
                },
                {
                    id: 3,
                    name: 'Green Salad',
                    quantity: 2,
                    price: 17
                },
            ],
            status: 'Pendente',
            price: 58,
            created_at: '27 Dec 2021 15:00 LT',
            updated_at: '27 Dec 2021 15:00 LT'
        }
    ]
}

export {
    meals,
    mockUser
};