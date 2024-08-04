<template>
<div>
    <v-carousel class="hero-carousel">
        <v-carousel-item src="../assets/images/slideshow.webp" cover></v-carousel-item>

        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
    </v-carousel>
    <div class="r-search-container">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <div class="text-center d-flex justify-center">
                        <v-text-field loading="loading" placeholder="Search Rekhtya" variant="filled" max-width="600px" bg-color="rgb(251, 211, 211)" hide-details rounded class="r-searc-field text-family font-w-500 mt-5 mb-5">
                            <template v-slot:append-inner>
                                <v-btn rounded width="150px" class="text-family search-field-btn font-w-500" height="100%" color="#F86767" flat>
                                    Submit
                                </v-btn>
                            </template>
                        </v-text-field>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div class="r-poetry-section">
        <h1 class="text-center text-family color-white r-heading font-w-700 ">Poetry Collection</h1>
        <v-container class="r-poetry-container">
            <v-row>
                <v-col>
                    <v-sheet class="mx-auto r-slide" elevation="0">
                        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                            <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
                                <v-card :class="['ma-4', selectedClass]" height="300" width="225" @click="toggle">
                                    <div class="d-flex fill-height align-center justify-center">
                                        <v-scale-transition>
                                            <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                                            <p class="color-white r-slide-text r-heading r-heading-text font-w-700">Couplets of Absyn.
                                                Ysfz.</p>
                                        </v-scale-transition>
                                    </div>
                                </v-card>
                            </v-slide-group-item>
                        </v-slide-group>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div class="r-poetry-section mt-15">
        <h1 class="text-center text-family color-white r-heading font-w-700 mb-5">Top Poets</h1>
        <v-container class="r-poetry-container">
            <v-row>
                <v-col>
                    <v-sheet class="mx-auto r-slide r-top-poet-slide" elevation="0">
                        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                            <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
                                <v-card :class="['ma-2', selectedClass]" height="250" width="190" @click="toggle">
                                    <div class="d-flex fill-height align-center justify-center">
                                        <v-scale-transition>
                                            <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                                            <div>
                                                <!-- <img class="slide-img" :src="require('../assets/images/images1.png')" /> -->
                                                <span class="r-poet-name text-family font-w-700">Ghani Khan</span>
                                            </div>
                                        </v-scale-transition>
                                    </div>
                                </v-card>
                            </v-slide-group-item>
                        </v-slide-group>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div class="r-poetry-section">
        <h1 class="text-center text-family color-white r-heading font-w-700 mt-n13  mb-5">Top Books</h1>
        <v-container class="r-poetry-container">
            <v-row>
                <v-col>
                    <v-sheet class="mx-auto r-slide" elevation="0">
                        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                            <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
                                <v-card :class="['ma-2', selectedClass]" height="250" width="190" @click="toggle">
                                    <div class="d-flex fill-height align-center justify-center">
                                        <v-scale-transition>
                                            <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>

                                        </v-scale-transition>
                                    </div>
                                </v-card>
                            </v-slide-group-item>
                        </v-slide-group>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div class="r-poetry-section know-sec">
        <h1 class="text-center text-family color-white r-heading font-w-700 ">Did You Know?</h1>
        <v-container class="r-poetry-container">
            <v-row class="align-center">
                <v-col cols="12" md="6">
                    <v-carousel class="hero-carousel" height="auto" hide-delimiters>
                        <v-carousel-item>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <p class="poetry-sec-col color-white r-heading  r-heading-text font-w-400 r-know-section text-center">
                                            Rahman Baba, the "Nightingale of Peshawar," is a famous Pashto poet? His mystical poetry is still inspirational today.

                                        </p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-carousel-item>

                    </v-carousel>
                </v-col>
                <v-col cols="12" md="6">
                    <img width="100%" class="ml-md-10 ml-0" :src="require('../assets/images/other.png')" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</div>
</template>

<script>
export default {
    data: () => ({
        model: null,
    }),
}
</script>

<style scoped>
@import url('../assets/stylesheet/home.css');
</style>
