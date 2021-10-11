<template>

    <div>
        <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            height="280"
        >
            <b-carousel-slide class="carrosel">
                <h1 id="carrossel"></h1>
                <template #img>
                    <img
                        class="d-block img-fluid w-100"
                        src= "../assets/SOLDAGEM.jpg"
                        alt="image slot"
                    >
                </template>
            </b-carousel-slide>

            <b-carousel-slide class="carrosel">
                <h1 id="carrossel"></h1>
                <template #img>
                    <img
                        class="d-block img-fluid w-100"
                        src= "../assets/INDUSTRIA.jpg"
                        alt="image slot"
                    >
                </template>
            </b-carousel-slide>

            <b-carousel-slide class="carrosel">
                <h1 id="carrossel"></h1>
                <template #img>
                    <img
                        class="d-block img-fluid w-100"
                        src= "../assets/Qualidade.jpg"
                        alt="image slot"
                    >
                </template>
            </b-carousel-slide>

        </b-carousel>
    </div>
</template>


<script>
export default {
    name:'Carrossel'
}
</script>

<style scoped>

.carrosel{
    height: 580px;
}

</style>