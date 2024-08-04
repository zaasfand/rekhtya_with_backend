<template>
<div>
    <div class="poets-content-wrapper">
        <v-tabs v-model="tab" class="r-poet-slider" align-tabs="title" hide-slider>
            <v-tab class="text-family font-w-500">Private</v-tab>
            <v-tab class="text-family font-w-500">Public</v-tab>

        </v-tabs>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item>
                <div>
                    <v-row class="mt-15 pt-5 mb-15">
                        <v-col lg="4" md="6" cols="12">
                            <div class=" poets-info-sec">

                                <p class="text-family font-w-700 color-white mt-auto">
                                    Fav. Collection
                                    <span class="d-block font-w-500">2 Books, 3 Poems</span>
                                </p>
                                <div class="d-flex">
                                    <img class="r-col-imgs ml-auto" :src="require('@/assets/images/fi_trash.webp')" />
                                    <img class="r-col-imgs ml-3" :src="require('@/assets/images/fi_share.webp')" />

                                </div>

                            </div>
                        </v-col>
                        <v-col lg="4" md="6" cols="12">
                            <div class=" poets-info-sec">

                                <p class="text-family font-w-700 color-white mt-auto">
                                    Zama Collection
                                    <span class="d-block font-w-500">2 Books, 3 Poems</span>
                                </p>
                                <div class="d-flex">
                                    <img class="r-col-imgs ml-auto" :src="require('@/assets/images/fi_trash.webp')" />
                                    <img class="r-col-imgs ml-3" :src="require('@/assets/images/fi_share.webp')" />

                                </div>

                            </div>
                        </v-col> <v-col lg="4" md="6" cols="12">
                            <div class=" poets-info-sec">

                                <p class="text-family font-w-700 color-white mt-auto">
                                    Random
                                    <span class="d-block font-w-500">2 Books, 3 Poems</span>
                                </p>
                                <div class="d-flex">
                                    <img class="r-col-imgs ml-auto" :src="require('@/assets/images/fi_trash.webp')" />
                                    <img class="r-col-imgs ml-3" :src="require('@/assets/images/fi_share.webp')" />

                                </div>

                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-tabs-window-item>

        </v-tabs-window>
    </div>
</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            tab: null,

        }
    },
}
</script>

<style scoped>
@import url('@/assets/stylesheet/poet.css');
@import url('@/assets/stylesheet/book.css');
@import url('@/assets/stylesheet/profile.css');
</style>
