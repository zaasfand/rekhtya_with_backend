<template>
<div>
    <div class="poets-content-wrapper" v-if="!poetDetails">
        <v-tabs v-model="tab" class="r-poet-slider" align-tabs="title" hide-slider>
            <v-tab class="text-family font-w-500">Books</v-tab>
            <v-tab class="text-family font-w-500">Poets</v-tab>
            <v-tab class="text-family font-w-500">Poetry</v-tab>

        </v-tabs>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item>
                <div>
                    <v-row class="mt-15 pt-5 mb-15">
                        <v-col lg="4" md="6" cols="12">
                            <div class="d-flex poets-info-sec r-books-section">
                                <div class="r-books-info-container">
                                    <div>
                                        <v-icon color="white">mdi mdi-heart</v-icon>
                                        <v-icon color="white" class="ml-2">mdi mdi-share-variant-outline</v-icon>
                                        <v-menu class="nav-fav-drop" >
                                            <template v-slot:activator="{ props }">
                                                <v-icon color="white" class="ml-2" v-bind="props">mdi mdi-plus</v-icon>

                                            </template>

                                            <v-list>
                                                <v-list-item>
                                                    <v-list-item-title class="text-family font-w-600 color-white">Fav. Collection</v-list-item-title>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-title class="text-family font-w-600 color-white">Zama Collection</v-list-item-title>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-title class="text-family font-w-600 color-white">Random</v-list-item-title>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-title class="text-family font-w-500 mt-10">
                                                        <v-btn class="nc-btn" rounded="0">New collection
                                                          <img class="ml-5" :src="require('@/assets/images/fi_arrow-right.png')"/>
                                                        </v-btn>
                                                    </v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </div>
                                    <div class="d-flex">
                                        <p class="text-family font-w-700 color-white mt-auto">
                                            <span class="text-family d-block color-white">2007</span>

                                            Zalk
                                            <span class="d-block">Shakir Orakzay</span>
                                        </p>
                                    </div>
                                </div>
                                <img class="ml-auto" :src="require('@/assets/images/book.png')" />
                            </div>
                        </v-col>
                        <v-col lg="4" md="6" cols="12">
                            <div class="d-flex poets-info-sec r-books-section">
                                <div class="r-books-info-container">
                                    <div>
                                        <v-icon color="white">mdi mdi-heart</v-icon>
                                        <v-icon color="white" class="ml-2">mdi mdi-share-variant-outline</v-icon>
                                        <v-icon color="white" class="ml-2">mdi mdi-plus</v-icon>
                                    </div>
                                    <div class="d-flex">
                                        <p class="text-family font-w-700 color-white mt-auto">
                                            <span class="text-family d-block color-white">2007</span>

                                            Zalk
                                            <span class="d-block">Shakir Orakzay</span>
                                        </p>
                                    </div>
                                </div>
                                <img class="ml-auto" :src="require('@/assets/images/book.png')" />
                            </div>
                        </v-col>
                        <v-col lg="4" md="6" cols="12">
                            <div class="d-flex poets-info-sec r-books-section">
                                <div class="r-books-info-container">
                                    <div>
                                        <v-icon color="white">mdi mdi-heart</v-icon>
                                        <v-icon color="white" class="ml-2">mdi mdi-share-variant-outline</v-icon>
                                        <v-icon color="white" class="ml-2">mdi mdi-plus</v-icon>
                                    </div>
                                    <div class="d-flex">
                                        <p class="text-family font-w-700 color-white mt-auto">
                                            <span class="text-family d-block color-white">2007</span>

                                            Zalk
                                            <span class="d-block">Shakir Orakzay</span>
                                        </p>
                                    </div>
                                </div>
                                <img class="ml-auto" :src="require('@/assets/images/book.png')" />
                            </div>
                        </v-col>
                        <v-col lg="4" md="6" cols="12">
                            <div class="d-flex poets-info-sec r-books-section">
                                <div class="r-books-info-container">
                                    <div>
                                        <v-icon color="white">mdi mdi-heart</v-icon>
                                        <v-icon color="white" class="ml-2">mdi mdi-share-variant-outline</v-icon>
                                        <v-icon color="white" class="ml-2">mdi mdi-plus</v-icon>
                                    </div>
                                    <div class="d-flex">
                                        <p class="text-family font-w-700 color-white mt-auto">
                                            <span class="text-family d-block color-white">2007</span>

                                            Zalk
                                            <span class="d-block">Shakir Orakzay</span>
                                        </p>
                                    </div>
                                </div>
                                <img class="ml-auto" :src="require('@/assets/images/book.png')" />
                            </div>
                        </v-col>

                    </v-row>
                </div>
            </v-tabs-window-item>
            <v-tabs-window-item>
                <div v-if="!poetDetails">
                    <v-row class="mt-15 pt-5 mb-15">
                        <v-col lg="4" md="6" cols="12">
                            <div class="d-flex align-center poets-info-sec cursor-pointer" @click="poetDetails = true">
                                <p class="text-family font-w-700 color-white">Ghani Khan
                                    <span class="d-block">Peshawar, Pakistan</span>
                                </p>
                                <img class="ml-auto" :src="require('@/assets/images/images1.png')" />
                            </div>

                        </v-col>
                        <v-col lg="4" md="6" cols="12">
                            <div class="d-flex align-center poets-info-sec cursor-pointer" @click="poetDetails = true">
                                <p class="text-family font-w-700 color-white">Ghani Khan
                                    <span class="d-block">Peshawar, Pakistan</span>
                                </p>
                                <img class="ml-auto" :src="require('@/assets/images/images1.png')" />
                            </div>

                        </v-col>
                        <v-col lg="4" md="6" cols="12">
                            <div class="d-flex align-center poets-info-sec cursor-pointer" @click="poetDetails = true">
                                <p class="text-family font-w-700 color-white">Ghani Khan
                                    <span class="d-block">Peshawar, Pakistan</span>
                                </p>
                                <img class="ml-auto" :src="require('@/assets/images/images1.png')" />
                            </div>

                        </v-col>
                        <v-col lg="4" md="6" cols="12">
                            <div class="d-flex align-center poets-info-sec cursor-pointer" @click="poetDetails = true">
                                <p class="text-family font-w-700 color-white">Ghani Khan
                                    <span class="d-block">Peshawar, Pakistan</span>
                                </p>
                                <img class="ml-auto" :src="require('@/assets/images/images1.png')" />
                            </div>

                        </v-col>

                    </v-row>
                </div>
            </v-tabs-window-item>
            <v-tabs-window-item>
                <v-row class="mt-15 pt-5 mb-15">
                    <v-col lg="6" md="6" cols="12">
                        <div class="poets-info-sec r-books-section r-poet-deial-block d-flex align-center">
                            <div>
                                <p class="rp-details font-w-700 color-white text-family rpp-det rpp-det-content">یو ځل زه په یوه دښته کې ګرځم او ښکار وم
                                    ما یو ګل ولید، په خپل وجود کې ورک شو</p>
                                <p class="text-family font-w-700 color-white rpp-det">
                                    <span class="d-block mt-4">Ghani Khan</span>
                                </p>
                                <v-icon color="white">mdi mdi-heart</v-icon>
                                <v-icon color="white" class="ml-2">mdi mdi-share-variant-outline</v-icon>
                            </div>
                        </div>
                    </v-col>
                    <v-col lg="6" md="6" cols="12">
                        <div class="poets-info-sec r-books-section r-poet-deial-block d-flex align-center">
                            <div>
                                <p class="rp-details font-w-700 color-white text-family rpp-det rpp-det-content">یو ځل زه په یوه دښته کې ګرځم او ښکار وم
                                    ما یو ګل ولید، په خپل وجود کې ورک شو</p>
                                <p class="text-family font-w-700 color-white rpp-det">
                                    <span class="d-block mt-4">Ghani Khan</span>
                                </p>
                                <v-icon color="white">mdi mdi-heart</v-icon>
                                <v-icon color="white" class="ml-2">mdi mdi-share-variant-outline</v-icon>
                            </div>
                        </div>
                    </v-col>
                    <v-col lg="6" md="6" cols="12">
                        <div class="poets-info-sec r-books-section r-poet-deial-block d-flex align-center">
                            <div>
                                <p class="rp-details font-w-700 color-white text-family rpp-det rpp-det-content">یو ځل زه په یوه دښته کې ګرځم او ښکار وم
                                    ما یو ګل ولید، په خپل وجود کې ورک شو</p>
                                <p class="text-family font-w-700 color-white rpp-det">
                                    <span class="d-block mt-4">Ghani Khan</span>
                                </p>
                                <v-icon color="white">mdi mdi-heart</v-icon>
                                <v-icon color="white" class="ml-2">mdi mdi-share-variant-outline</v-icon>
                            </div>
                        </div>
                    </v-col>
                    <v-col lg="6" md="6" cols="12">
                        <div class="poets-info-sec r-books-section r-poet-deial-block d-flex align-center">
                            <div>
                                <p class="rp-details font-w-700 color-white text-family rpp-det rpp-det-content">یو ځل زه په یوه دښته کې ګرځم او ښکار وم
                                    ما یو ګل ولید، په خپل وجود کې ورک شو</p>
                                <p class="text-family font-w-700 color-white rpp-det">
                                    <span class="d-block mt-4">Ghani Khan</span>
                                </p>
                                <v-icon color="white">mdi mdi-heart</v-icon>
                                <v-icon color="white" class="ml-2">mdi mdi-share-variant-outline</v-icon>
                            </div>
                        </div>
                    </v-col>

                </v-row>
            </v-tabs-window-item>
        </v-tabs-window>
    </div>
    <PoetsDetailComponent class="mt-15" v-if="poetDetails" />
</div>
</template>

<script>
import PoetsDetailComponent from '../PoetsComponent/PoetsDetailComponent.vue'
export default {
    components: {
        PoetsDetailComponent
    },
    data() {
        return {
            tab: null,
            poetDetails: false,

        }
    },
}
</script>

<style scoped>
@import url('@/assets/stylesheet/poet.css');
@import url('@/assets/stylesheet/book.css');
</style>
