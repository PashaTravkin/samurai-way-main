import {ActionsType, sidebarType} from "./Store";

let initializeSidebarState = [
    {
        id: 1,
        name: "Sasha",
        ava: 'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg'
    },
    {
        id: 2,
        name: "Masha",
        ava: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'
    },
    {
        id: 3,
        name: "Lera",
        ava: 'https://sun9-60.userapi.com/s/v1/if2/X5eLXzG9LeAKYth6RI12p85xPr3g8BKTUmR9tk4UBwKZCm3ZTKH06tdV2M5qQ8DWBzeGtlPcNFfmkikTc6Q4Jy8A.jpg?size=604x604&quality=96&type=album'
    },
]
const SidebarReducer = (sidebarState:Array<sidebarType> = initializeSidebarState, action:ActionsType) => {
    return sidebarState
};

export default SidebarReducer;