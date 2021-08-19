const Query = {
    hello() {
        return 'Hello'
    },
    quantity: () => 10,
    getUser: () => { return { name: 'Bryan', lastName: 'Suárez'}}
}

export default Query