<script>
import SingleCharacterCard from './SingleCharacterCard.vue';

// import dello store
import { store } from '../store';

// esportiamo il component CardCharactersList
export default{
    name:'CardCharactersList',
    components:{
        SingleCharacterCard,
    },
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="counter bg-dark text-white py-2">
            <h2 class="text-center mt-6">Found {{ store.CardCharactersList.length }} cards</h2>
        </div>
        <div class="row card-container">
            <div v-for="character in store.CardCharactersList" :key="character.id" class="col-6 col-md-4 col-lg-3 mb-5">
            <!-- Componenti cards -->
            <SingleCharacterCard :info="character"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use'../assets/style/partials/general.scss' as*;

.container{
    .card-container {
        padding-top: 40px;
        padding-left: 60px;
        padding-right: 60px;
        

        .card{
            background-color: #D48F38;
        }
    }
}

    
  
</style>