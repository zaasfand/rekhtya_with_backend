<template>
    <div>
      
        <div class="r-search-container r-search-container-dic">
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
       
        <div class="r-search-container r-dectionary-field">
            <v-container>
                <p class="text-family color-white font-w-400 rph-tr mt-5 mb-5">Dictionary matches “<span class="font-w-600">VOICE</span>”</p>
                <v-row>
                    <v-col cols="12">
                        <div class="r-dic-translator-sec">
                         
                            <div class="d-flex poets-info-sec r-books-section s-tran-section">
                                <div class="r-books-info-container">
                                    <div class="d-flex">
                                        <p class="text-family font-w-700 color-white mt-auto">VOICE<v-icon class="ml-4" size="30">mdi mdi-volume-high</v-icon>
                                            <span class="d-block">وائس</span>
                                            <span class="d-block">Vice, Voice</span>
                                        </p>
                                    </div>
                                </div>
                                <v-icon color="white" class="ml-auto">mdi mdi-arrow-down</v-icon>
                            </div>
                        </div> 
                    </v-col>

                </v-row>
                <p class="text-family color-white font-w-400 text-center d-flex justify-center rph-tr mt-5 mb-5">Search resulted in 1 word(s)</p>
                
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
    @import url('../assets/stylesheet/dictionary.css');
    @import url('../assets/stylesheet/poet.css');

    </style>
    