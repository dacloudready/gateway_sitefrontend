<template>
    <div>
        <div v-for="(site, index) in GetMicrosite" :key="index">
            <!-- Start: Main -->    
            <section id="body-main-section">
                <div class="container">
                    <div id="row-1" class="row">
                        <div id="col-1" class="col-lg-12"> 
                            <div v-if="filteredUnits != ''">
                                <h4> CHOOSE YOUR {{ site.name.toUpperCase() }} </h4>
                                <hr>
                                <div id="vehicle-display" class="row">
                                    <div class="col-lg-2 col-md-3 col-sm-6 col-xs-6 text-center display-item-container" v-for="(unit, index) in filteredUnits" :key="index">
                                        <div class="display-item">
                                            <router-link :to="'/model/' + unit.model">
                                                <img class="w-100" :src="unit.image_url">
                                            </router-link>
                                        </div>
                                        <h6 class="item-name" style="font-weight: bold;">{{ unit.model }}</h6>
                                    </div>
                                </div>
                            </div> 
          
                            <div id="dealer-list">
                                <h4>{{ site.name.toUpperCase() }} DELEARSHIP</h4>
                                <hr>
                                <div class="row">
                                    <div class=" col-lg-3 widget" v-for="(dealer, index) in site.dealerships" :key="index" >
                                        <h6>{{ dealer.name }}</h6>
                                        <p>{{  dealer.address }}</p>
                                        <p>{{ dealer.contact }}</p> 
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <!-- End: Main -->
            <!-- End: Main-2-Column -->
        </div>
        <hr>
    </div>
</template>

<script>
    export default {

        name: 'Microsite',
        props: {
            Sites: Array,
            units: Array
        },


        computed: {

            GetMicrosite: function() {
                return this.Sites.filter((site) => {
                    return site.slug.match(this.$route.params.id)
                });
            },

            
            filteredUnits: function() {
                return this.units.filter((unit) => {
                    return unit.brand.match(this.$route.params.id.toUpperCase())
                });
            },
        }
    }

</script>

<style scoped>
    #col-1 {
        margin-bottom: 30px;
    }

    .widget {
        margin-bottom:0;
        margin: 0px;
        padding: 15px;
    }

    .widget h6 {
        text-transform: uppercase;
    }
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