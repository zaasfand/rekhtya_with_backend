<template>
<div>
    <div class="poets-content-wrapper" v-if="!bookDetails">
        <v-tabs v-model="tab" class="r-poet-slider" align-tabs="title" hide-slider>
            <v-tab class="text-family font-w-500">All</v-tab>
            <v-tab class="text-family font-w-500">Poetry</v-tab>
            <v-tab class="text-family font-w-500">History</v-tab>
            <v-tab class="text-family font-w-500">Biographies</v-tab>
            <v-tab class="text-family font-w-500">Proverbs</v-tab>
            <v-tab class="text-family font-w-500">Novels</v-tab>

        </v-tabs>
        <v-tabs-window v-model="tab">
            <v-text-field  loading="loading" rounded="0" placeholder="Search Books" variant="solo" max-width="400px" width="400px" bg-color="rgb(251, 211, 211)" hide-details class="r-searc-field text-family font-w-500 r-poet-search-field mt-5 ml-auto">

            </v-text-field>
            <v-tabs-window-item>
                <div>
                    <v-row class="mt-15 pt-5 mb-15">
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
                                <img class="ml-auto" @click="bookDetails = true" :src="require('@/assets/images/book.png')" />
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
                                <img class="ml-auto" @click="bookDetails = true" :src="require('@/assets/images/book.png')" />
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
                                <img class="ml-auto" @click="bookDetails = true" :src="require('@/assets/images/book.png')" />
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
                                <img class="ml-auto" @click="bookDetails = true" :src="require('@/assets/images/book.png')" />
                            </div>
                        </v-col>

                    </v-row>
                </div>
            </v-tabs-window-item>
        </v-tabs-window>
    </div>
    <BookDetailsComponent v-if="bookDetails" />

</div>
</template>

<script>
import BookDetailsComponent from './BookDetailsComponent.vue'
export default {
    components: {
        BookDetailsComponent
    },
    data() {
        return {
            tab: null,
            bookDetails: false,
        }
    },
}
</script>

<style scoped>
@import url('@/assets/stylesheet/poet.css');
@import url('@/assets/stylesheet/book.css');
</style>
