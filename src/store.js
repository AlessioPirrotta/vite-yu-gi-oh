import { reactive } from 'vue'

export const store = reactive ({
    searchText: "",
    loading: true,
    cardList: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    apiUrlArch: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypeList:[]
})