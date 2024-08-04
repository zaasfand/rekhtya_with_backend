<template>
    <div>
       
     
        <div class="r-poetry-section">
            <h1 class="text-center text-family color-white r-heading font-w-700 ">Popular Tags</h1>
            <v-container class="r-poetry-container">
                <v-row>
                    <v-col>
                        <v-sheet class="mx-auto r-slide" elevation="0">
                            <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                                <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
                                    <v-card :class="['ma-4', selectedClass]" height="auto" width="225px" @click="toggle">
                                        <div class="d-flex fill-height align-center justify-center">
                                            <v-scale-transition>
                                                <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                                                <p class="color-white r-slide-text r-heading r-heading-text font-w-700">#mystic
                                                </p>
                                            </v-scale-transition>
                                        </div>
                                    </v-card>
                                </v-slide-group-item>
                            </v-slide-group>
                        </v-sheet>
                       <div class="d-flex">
                        <p class="ml-auto mr-10 text-family color-white r-seel-all-text font-w-500">See All
                        </p>
                       </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="r-poetry-section mt-15">
            <h1 class="text-center text-family color-white r-heading font-w-700 mb-5">Top 20 Collections</h1>
            <v-container class="r-poetry-container">
                <v-row>
                    <v-col>
                        <v-sheet class="mx-auto r-slide r-top-poet-slide" elevation="0">
                            <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                                <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
                                    <v-card :class="['ma-2', selectedClass]" height="250" width="240" @click="toggle">
                                        <div class="d-flex fill-height align-center justify-center">
                                            <v-scale-transition>
                                                <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                                                <div>
                                                    <!-- <img class="slide-img" :src="require('../assets/images/images1.png')" /> -->
                                                    <span class="r-poet-name text-family font-w-700 r-poetry-name">Couplets of Ghani Khan</span>
                                                </div>
                                            </v-scale-transition>
                                        </div>
                                    </v-card>
                                </v-slide-group-item>
                            </v-slide-group>
                        </v-sheet>
                        <div class="d-flex">
                        <p class="ml-auto mr-10 text-family color-white r-seel-all-text font-w-500">See All
                        </p>
                       </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="r-poetry-section mt-15">
            <h1 class="text-center text-family color-white r-heading font-w-700 mb-5">Ocassions</h1>
            <v-container class="r-poetry-container">
                <v-row>
                    <v-col>
                        <v-sheet class="mx-auto r-slide r-top-poet-slide r-poerty-oc-section" elevation="0">
                            <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                                <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
                                    <v-card :class="['ma-2', selectedClass]" height="250" width="240" @click="toggle">
                                        <div class="d-flex fill-height align-center justify-center">
                                            <v-scale-transition>
                                                <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                                                <div>
                                                    <!-- <img class="slide-img" :src="require('../assets/images/images1.png')" /> -->
                                                    <span class="r-poet-name text-family font-w-700 r-poetry-name">Women’s Day</span>
                                                </div>
                                            </v-scale-transition>
                                        </div>
                                    </v-card>
                                </v-slide-group-item>
                            </v-slide-group>
                        </v-sheet>
                        <div class="d-flex">
                        <p class="ml-auto mr-10 text-family color-white r-seel-all-text font-w-500">See All
                        </p>
                       </div>
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
    @import url('../assets/stylesheet/poetry.css');

    </style>
    