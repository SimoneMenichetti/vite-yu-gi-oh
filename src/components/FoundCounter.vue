<script>
    // import dello store
    import { store } from '../store';
    export default{
        name:'FoundeCounter',
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>
    <div class="d-flex  justify-content-center " id="founder">
        <div class="col-9 ">
            <div class="counter bg-dark text-white py-2">
                <h2 class="text-left fs-6 align-text-bottom ">Found {{ store.CardCharactersList.length }} cards</h2>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #founder{
        margin-bottom: -150px;
        margin-top: 60px;
    }
</style>