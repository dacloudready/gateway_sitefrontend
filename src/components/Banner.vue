<template>
    <div class="carousel slide" data-ride="carousel" id="carousel-1">
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active"><img class="w-100 d-block" src="images/terra_banner_per_model copy.jpg" alt="Slide Image"></div>
            <div class="carousel-item"><img class="w-100 d-block" src="images/navara_banner_per_model copy.jpg" alt="Slide Image"></div>
        </div>
        <div>
            <!-- Start: Previous --><a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span></a>
            <!-- End: Previous -->
            <!-- Start: Next --><a class="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><span class="carousel-control-next-icon"></span><span class="sr-only">Next</span></a>
            <!-- End: Next -->
        </div>
        <ol class="carousel-indicators">
            <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-1" data-slide-to="1"></li>
        </ol>
    </div>
</template>
<script>
export default {
    name: "Banner"
}
</script>