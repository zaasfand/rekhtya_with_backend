<template>
<div class="mb-15 mt-12">

    <div class="poets-content-wrapper">
        <v-row class="r-poet-profile-area align-center">
            <v-col cols="12" md="6">
                <p class="text-family color-white font-w-700">
                    Da Ghani Kulyaat
                    <span class="d-block">Peshawar, Pakistan</span>
                </p>
            </v-col>
            <v-col cols="12" md="6">
                <img class="r-poet-picture" :src="require('@/assets/images/bookpicture.webp')" />
               <div class="mt-5 d-sm-flex d-block">
              <div>
                  <v-icon color="white ml-6"  size="40px">mdi mdi-heart</v-icon>
                <v-icon color="white" class="ml-2"  size="40px" >mdi mdi-share-variant-outline</v-icon>
            </div>
                <v-btn class="read-more-btn ml-auto text-family font-w-500" width="200px" height="60px">Read Now</v-btn>
               </div>
            </v-col>
        </v-row>
    </div>
    <div class="mt-15">
        <div>
            <div class="r-poetry-section r-poet-detail-section r-book-detail-content-wrapper">
                <div class="r-poetry-container">
                    <div class="mt-10 text-family">
                        
                        <p class="color-white font-w-600 r-heading r-pd-content d-block"><span>Author:</span>Ghani, Ghani Khan</p>
                        <p class="color-white font-w-600 r-heading r-pd-content d-block"><span>Publisher:</span>Abdul Ghani Khan</p>
                        <p class="color-white font-w-600 r-heading r-pd-content d-block"><span>Language: </span>1914</p>
                        <p class="color-white font-w-600 r-heading r-pd-content d-block"><span>Category: </span>1996</p>
                        <p class="color-white font-w-600 r-heading r-pd-content d-block"><span>Pages:</span>Peshawar, PK</p>
                    </div>
                  
                  
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            tab: null,

        }
    },
}
</script>

<style scoped>
@import url('@/assets/stylesheet/home.css');
@import url('@/assets/stylesheet/poet.css');
@import url('@/assets/stylesheet/book.css');
</style>
