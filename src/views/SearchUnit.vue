<template>
       <!-- Start: Main-2-Column -->
    <div>
        <!-- Start: Main -->
        <section id="body-main-section">
            <div class="container">
                <div id="row-1" class="row">
                    <div id="col-1" class="col-lg-3">
                        <h4>FILTER OPTIONS</h4>
                        <hr>
                        <div id="widget" class="widget">
                            <input type="text" class="form-control" placeholder="search your model ..." style="font-size: 14px;" @keyup="SearchModel" id="txtSearch"
                            v-model="txtSearch">
                        </div>

                       <div id="widget-1" class="widget">
                            <h6 class="widget-heading">Brand</h6>
                            <hr>
                            <select class="custom-select" style="font-size: 14px;" v-model="option_selected" @change="SelectBrands" id="optBrands">
                                <option disabled value="0">Please select one</option>
                                <option value="NISSAN">Nissan</option>
                                <option value="Bmw">BMW</option>
                                <option value="KIA">KIA</option>
                                <option value="Geely">Geely</option>
                                <option value="MG">MG</option>
                                <option value="Foton">Foton</option>
                                <option value="Chery">Chery</option>
                                <option value="Suzuki">suzuki</option>
                            </select>
                        </div>
                        
                        <div id="widget-2"
                            class="widget">
                            <h6 class="widget-heading">Body Type</h6>
                            <hr>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="chkSedan" value="Sedan" v-model="body_style" @click="FilterBodyType"> 
                                <label class="form-check-label" for="formCheck-1">Sedan</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="chkSUV" value="SUV"  v-model="body_style" @click="FilterBodyType($event)">
                                <label class="form-check-label" for="formCheck-1">SUV</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="chkSUV" value="Hatchback" v-model="body_style" @click="FilterBodyType($event)">
                                <label class="form-check-label" for="formCheck-1">Hatchback</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="chkVan" value="Van" v-model="body_style" @click="FilterBodyType($event)">
                                <label class="form-check-label" for="formCheck-1">VAN</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="chkPickUp" value="Pickup" v-model="body_style" @click="FilterBodyType($event)">
                                <label class="form-check-label" for="formCheck-1">Pick-up</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="chkTruck" value="Truck" v-model="body_style" @change="FilterBodyType($event)">
                                <label class="form-check-label" for="formCheck-1">Truck</label>
                            </div>
                        </div>

                    </div>
                    <div id="col-2" class="col-lg-9">
                        <h4>Showing results of "{{ this.$route.params.id.toUpperCase() }}"</h4>
                        <hr>
                        <!-- Start: Vehicle Display -->
                        <div id="vehicle-display" class="row">
                           <div class="col-lg-4 col-md-3 col-sm-6 text-center display-item" v-for="(model, index) in models" :key="index">
                                <div id="vehicle-display-image">
                                    <a href="#">
                                    <img :src="model.image_url" data-toggle="modal" :data-target="'#featuresmodal' + model.id ">
                                    </a>
                                    <h6 class="item-name" style="font-weight: bold;"> {{ model.variant }}</h6>
                                </div>
                                <button type="button" class="btn btn-danger btn-sm custom-btn" data-toggle="modal" :data-target="'#featuresmodal' + model.id ">
                                SHOW FEATURES
                                </button>
                                <div class="modal" :id="'featuresmodal' + model.id" tabindex="-1" role="dialog">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <!--<div class="modal-header">
                                                <h6 class="modal-title">{{ model.variant }}</h6>
                                            </div> -->SelectBrands
                                            <div class="modal-body">
                                                <VehicleFeatures :VariantID = "model.id"/>
                                                <p data-dismiss="modal" aria-label="Close" class="mt-3" style="cursor: pointer;font-size: .8rem">
                                                    Close[x]
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <!-- End: Vehicle Display -->
                    </div>
                </div>
            </div>
        </section>
        <!-- End: Main -->
        <hr>
    </div>
    <!-- End: Main-2-Column -->
</template>
<script>

import VehicleFeatures from '../components/VehicleFeatures.vue'
export default {

  components: {
        VehicleFeatures
    },

    data() {
        return{
            models:[],              // fetch models array  
            option_selected: '',    // selected option from dropdown menu
            body_style:[],          // body style filter checkbox
            txtSearch: ''
        }
    },

    mounted(){
        this.fetchModels(this.$route.params.id)
    },

    methods: {

        // fetch models from API
        fetchModels(request) {
            const api_url = 'https://autoweltbmw.com.ph/gateway/api/model/'
            fetch(api_url + request)
            .then(response => response.json())
            .then(data => { this.models = data })
        },

        SearchModel(event) {
            if( event.keyCode === 13 ){
                this.$router.push('/model/' + this.txtSearch)
                this.fetchModels(this.txtSearch)
            } 
        },

        SelectBrands() {
            this.$router.push('/model/' + this.option_selected)
            this.fetchModels(this.option_selected)
        },

        FilterBodyType(e) {
           this.body_style = []
           if(e.target.checked)
           {
                this.body_style.push(e.target.value)
                this.$router.push('/model/' + e.target.value)
                this.fetchModels(e.target.value)
           }
        }

    },
}
</script>
<style scoped>

    #vehicle-display-image {
        min-height: 180px;
    }

     #vehicle-display-image h6 {
        font-size: .9rem;
    }
</style>
