import { reactive } from 'vue'


export const store = reactive({
    CardCharactersList: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    // per utilizzare il v model nel search 
    searchtext: "",
    apiNameParam: "name",
});