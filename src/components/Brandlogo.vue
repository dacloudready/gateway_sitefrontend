<template>
    <div>
    <!-- Start: Brands -->
    <div class="brands text-center container">
        <router-link :to="{ name: 'site', params: {id:'bmw'} }"><img src="images/bmw.jpg"></router-link>
        <router-link :to="{ name: 'site', params: {id:'kia'} }"> <img src="images/kia_logo.jpg"></router-link>
        <router-link :to="{ name: 'site', params: {id:'mg'} }"> <img src="images/MG.jpg"></router-link>
        <router-link :to="{ name: 'site', params: {id:'geely'} }"> <img src="images/geely.png"></router-link>
        <router-link :to="{ name: 'site', params: {id:'nissan'} }"> <img src="images/new nissan logo.png"></router-link>
        <router-link :to="{ name: 'site', params: {id:'suzuki'} }"> <img src="images/suzuki.jpg"></router-link>
        <router-link :to="{ name: 'site', params: {id:'foton'} }"> <img src="images/foton.png"></router-link>
        <router-link :to="{ name: 'site', params: {id:'chery'} }"> <img src="images/Chery_logo.png"></router-link>
        <router-link :to="{ name: 'site', params: {id:'motorrad'} }"> <img src="images/motorrad.png"></router-link>
    </div>
    <!-- End: Brands -->
    </div>
</template>
<script>
export default {
    name: 'brandlogo'
}
</script>