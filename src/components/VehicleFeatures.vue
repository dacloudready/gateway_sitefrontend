<template>
    <div>
        <p class=""><strong>KEY FEATURES:</strong></p>
        <ul class="list-group">
            <li class="list-group-item" v-for="(feature, index) in features" :key="index">{{ feature.name }}</li>
            <li v-if="features.length === 0">Key features not indicated.</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'VehicleFeatures',
    props:['VariantID'],

    data() {
        return {
            features: ''
        }
    },

    created() {
        this.GetFeatures()
    },

    methods: {
         GetFeatures: function() {
           fetch('https://180.232.87.10:4443/api/features/' + this.VariantID)
                .then(response => response.json())
                .then( data => {
                    this.features = data
                })
        },
    }
}
</script>
<style scoped>
div {
    padding: 0 20px;
}
 ul {
     margin:0;
     padding:0;
     list-style-type: disc;
 }

 ul li {
     text-align: left;
     font-size: .9rem;
 }
</style>