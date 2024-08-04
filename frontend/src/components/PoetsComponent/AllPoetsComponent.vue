<template>
<div>
    <div class="poets-content-wrapper" v-if="!poetDetails">
        <v-tabs v-model="tab" class="r-poet-slider" align-tabs="title" hide-slider>
            <v-tab class="text-family font-w-500">All</v-tab>
            <v-tab class="text-family font-w-500">Top Rated</v-tab>
            <v-tab class="text-family font-w-500">Female</v-tab>
            <v-tab class="text-family font-w-500">Classical</v-tab>
            <v-tab class="text-family font-w-500">Young</v-tab>
        </v-tabs>
        <v-tabs-window v-model="tab">
            <v-text-field loading="loading" rounded="0" placeholder="Search Poet" variant="solo" max-width="400px" width="400px" bg-color="rgb(251, 211, 211)" hide-details class="r-searc-field text-family font-w-500 r-poet-search-field mt-5 ml-auto">

            </v-text-field>
            <v-tabs-window-item>
                <div>
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
        </v-tabs-window>
    </div>
    <PoetsDetailComponent v-if="poetDetails" />
</div>
</template>

<script>
import PoetsDetailComponent from './PoetsDetailComponent.vue'
export default {
    components: {
        PoetsDetailComponent
    },
    data() {
        return {
            tab: null,
            poetDetails:false,

        }
    },
}
</script>

<style scoped>
@import url('@/assets/stylesheet/poet.css');
</style>
