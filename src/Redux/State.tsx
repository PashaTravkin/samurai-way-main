
const state = {
    profilePage:{ postsData:[
            {id: 3, message: "Hello, how are you?", likesCount: 1},
            {id: 4, message: ' What\'s your name?', likesCount: 5}
        ]},
    messagesPage:{
        dialogsData:[
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Lera'},
            {id: 4, name: 'Nika'},
            {id: 5, name: 'Dasha'}
        ],
        messagesData:[
            {id: 1, message: 'Hi, how are you???'},
            {id: 2, message: 'I am ok thank you, and you?'},
            {id: 3, message: 'I am fine too)'},
        ]
    }
}

export default state