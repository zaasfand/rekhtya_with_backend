<template>
<div class="mb-15">

    <div class="poets-content-wrapper">
        <v-row class="r-poet-profile-area align-center">
            <v-col cols="12" md="6">
                <p class="text-family color-white font-w-700">
                    Ghani Khan
                    <span class="d-block">Peshawar, Pakistan</span>
                </p>
            </v-col>
            <v-col cols="12" md="6">
                <img class="r-poet-picture" :src="require('@/assets/images/poetpicture.png')" />
            </v-col>
        </v-row>
    </div>
    <div class="poets-content-wrapper">

        <v-tabs v-model="tab" class="r-poet-slider r-poet-detail-tabs mt-5 mb-15" align-tabs="title" hide-slider>
            <v-tab class="text-family font-w-500">All</v-tab>
            <v-tab class="text-family font-w-500">Profile</v-tab>
            <v-tab class="text-family font-w-500">Books</v-tab>
            <v-tab class="text-family font-w-500">Poetry</v-tab>
            <v-tab class="text-family font-w-500">Top 20</v-tab>
        </v-tabs>
    </div>
    <v-tabs-window v-model="tab">

        <v-tabs-window-item>
            <div>
                <div class="r-poetry-section">
                    <h1 class="text-center text-family color-white r-heading font-w-700 mt-3  mb-5">Top Books</h1>
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
                        <v-row class="text-center d-flex justify-center r-poet-detail-section">
                            <p class="color-white font-w-700 r-heading mt-7">Ghazals</p>
                        </v-row>
                        <div class="mt-10 r-poet-detail-section">
                            <p class="color-white font-w-600 r-heading d-block">1. Sok che chata okhandi</p>
                            <p class="color-white font-w-600 r-heading d-block">1. Sok che chata okhandi</p>
                            <p class="color-white font-w-600 r-heading d-block">1. Sok che chata okhandi</p>

                        </div>

                    </v-container>

                </div>
            </div>
        </v-tabs-window-item>
        <v-tabs-window-item>
            <div>
                <div class="r-poetry-section r-poet-detail-section">
                    <v-container class="r-poetry-container">

                        <v-row class="text-center d-flex justify-center">
                            <p class="color-white font-w-700 r-heading mt-7">Profile of Ghani Khan</p>
                        </v-row>

                        <div class="mt-10 text-family">
                            <p class="color-white font-w-600 r-heading r-pd-content d-block"><span>Pen Name:</span>Ghani, Ghani Khan</p>
                            <p class="color-white font-w-600 r-heading r-pd-content d-block"><span> Real Name:</span>Abdul Ghani Khan</p>
                            <p class="color-white font-w-600 r-heading r-pd-content d-block"><span>Born:</span>1914</p>
                            <p class="color-white font-w-600 r-heading r-pd-content d-block"><span>Died:</span>1996</p>
                            <p class="color-white font-w-600 r-heading r-pd-content d-block"><span>Location:</span>Peshawar, PK</p>
                        </div>
                        <div class="r-ol-fol-text mt-7">
                            <p class="text-family color-white font-w-700">
                                یو ځل زه په یوه دښته کې ګرځم او ښکار وم
                                ما یو ګل ولید، په خپل وجود کې ورک شو
                            </p>
                        </div>
                        <p class="text-family color-white font-w-500 rp-details mt-7">Ghani Khan, born Abdul Ghani Khan in 1914, was a prominent Pashto poet, philosopher, and artist, and is often celebrated as one of the greatest poets of the Pashto language. He hailed from a prominent political family; his father, Abdul Ghaffar Khan (also known as Bacha Khan or the Frontier Gandhi), was a notable leader in the Indian independence movement.

                            <span class="d-block mt-5 font-w-700">
                                Literary Contributions:
                            </span>

                            <ul class="mb-4">
                                Ghani Khan's poetry is renowned for its deep philosophical insights, lyrical beauty, and the portrayal of human emotions and nature. His works reflect a profound understanding of the human condition, often blending themes of love, beauty, and the mystic. Some of his most notable works include:
                                <li>"Da Panjray Chaghar" (The Lament of the Cage)</li>
                                <li> "Panoos" (The Lantern)</li>
                                <li>"Palwashey" (The Shadows)</li>
                                <li> "Kulyat-e-Ghani" (The Collected Works of Ghani)</li>
                            </ul>

                            His poetry is characterized by its unique style, rich imagery, and emotional depth, making it accessible and cherished by many Pashto-speaking readers.

                            <span class="d-block mt-10 font-w-700">Artistic Endeavors:</span>
                            Apart from his literary achievements, Ghani Khan was also a talented artist and sculptor. His artwork often reflected the same themes found in his poetry, showcasing his versatile talent and deep aesthetic sensibilities.

                            <span class="d-block mt-10 font-w-700">Philosophy:</span>
                            Ghani Khan's philosophy was deeply humanistic, emphasizing love, beauty, and the spiritual aspects of life. He often expressed disdain for materialism and the superficial aspects of society, advocating instead for a life of simplicity, introspection, and connection with nature.

                            <span class="d-block mt-10 font-w-700">Legacy:</span>
                            Ghani Khan passed away in 1996, but his legacy continues to live on through his timeless poetry and art. He is celebrated not only in Pakistan but also among Pashto-speaking communities worldwide. His work continues to inspire new generations, keeping alive the rich cultural and literary heritage of the Pashto language.
                        </p>
                    </v-container>

                </div>
            </div>
        </v-tabs-window-item>
        <v-tabs-window-item>
            <div>
                <div class="r-poetry-section r-poet-detail-section r-poet-book-detail">
                    <!-- <v-container class="r-poetry-container"> -->
                        <div class="pt-4">
                    <v-text-field loading="loading" rounded="0" placeholder="Search Books" variant="solo" max-width="400px" width="400px" bg-color="rgb(251, 211, 211)" hide-details class="r-searc-field text-family font-w-500 r-poet-search-field mt-5 ml-auto">
                    </v-text-field>
                   </div>
                    <v-row class="mt-15 pt-5 mb-15 pb-10">
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

                    <!-- </v-container> -->

                </div>
            </div>
        </v-tabs-window-item>
        <v-tabs-window-item>

            <div class="">
                <div class="r-poetry-section r-poet-detail-section r-poet-book-detail pb-10">
                    <!-- <v-container class="r-poetry-container"> -->
                    <div class="pt-4">
                        <v-text-field loading="loading" rounded="0" placeholder="Search Books" variant="solo" max-width="400px" width="400px" bg-color="rgb(251, 211, 211)" hide-details class="r-searc-field text-family font-w-500 r-poet-search-field mt-5 ml-auto">
                        </v-text-field>
                    </div>
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

                    <!-- </v-container> -->

                </div>
            </div>
        </v-tabs-window-item>
    </v-tabs-window>
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
