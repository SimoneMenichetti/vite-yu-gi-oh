import { reactive } from 'vue'


export const store = reactive({
    CardCharactersList: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    // per utilizzare il v model nel search
    // aggiunta api archetypes
    archetypesAPIURL: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    selectArchetype: '',
    selectArchetypeParam: "archetype",


});