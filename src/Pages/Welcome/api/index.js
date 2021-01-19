const getNewMeal = () => {
    const meal = {
        id: 3654621,
        name: 'TEST',
        ingredients: [
            'Ing 1',
            'Ing 2',
            'Ing 3',
            'Ing 4',
        ],
        delivery: true,
        byHand: false,
        restaurant: true
    }


    return meal
}

export {
    getNewMeal
}