<template>
    <div id="vehicle-display" class="row">
       <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6 text-center display-item-container" v-for="(unit, index) in MicrositeUnits" :key="index">
            <div class="display-item">
                <a :href="/model/ + unit.model">
                    <img class="w-100" :src="unit.image_url">
                </a>
            </div>
            <h6 class="item-name" style="font-weight: bold;">{{ unit.model }}</h6>
        </div>
    </div>
</template>
<script>
export default {
    name: 'UnitDisplay',

    props: ['MicrositeUnits']
}
</script>
<style scoped>
    .display-item {
        min-height: 100px;
        margin-bottom: 10px;
    }

    .display-item-container{
        min-height: 150px;
        margin-bottom: 30px;
    }

    .display-item h6 {
        text-transform: uppercase;
    }

    
</style>