<template>
<div>

    <footer>
        <div class="footer-wrapper">
            <v-row>
                <v-col cols="12">
                    <div class="text-center d-flex justify-center">
                        <v-text-field loading="loading" rounded="0" placeholder="Subscribe Newsletter" variant="solo" max-width="600px" bg-color="rgb(251, 211, 211)" hide-details class="r-searc-field text-family font-w-500 footer-search-field">
                            <template v-slot:append-inner>
                                <v-btn width="150px" class="text-family search-field-btn font-w-500" rounded="0" height="100%" color="#F86767" flat>
                                    Submit
                                </v-btn>
                            </template>
                        </v-text-field>
                    </div>
                </v-col>
            </v-row>
        </div>
        <div class="footer-wrapper footer-bg">
            <v-row>
                <v-col cols="12" md="3">
                    <div class="social-icons">
                        <a>
                            <img :src="require('../assets/images/web.webp')" />

                        </a>
                        <a>
                            <img :src="require('../assets/images/insta.webp')" />

                        </a>
                        <a>
                            <img :src="require('../assets/images/twitter.webp')" />

                        </a>
                        <a>
                            <img :src="require('../assets/images/youtube.webp')" />

                        </a>
                    </div>
                </v-col>
                <v-col cols="12" md="3" class="p-footer-se">
                    <p class="color-white text-family font-w-700 p-footer-text">Company
                        <span class="d-block mt-5 font-w-400">About</span>
                        <span class="d-block font-w-400">Contact</span>
                    </p>
                </v-col>
                <v-col cols="12" md="3" class="p-footer-se">
                    <p class="color-white text-family font-w-700 p-footer-text">Quick Links
                        <span class="d-block mt-5 font-w-400">Poets</span>
                        <span class="d-block font-w-400">Books</span>
                        <span class="d-block font-w-400">Home</span>
                    </p>

                </v-col>
                <v-col cols="12" md="3" class="p-footer-se">
                    <p class="color-white text-family font-w-700 p-footer-text">Contact
                        <span class="d-block mt-5 font-w-400">johnDoe@mail.com</span>
                        <span class="d-block font-w-400">+92-342-123-456</span>
                        <span class="d-block font-w-400">Peshawar, Khyber Pakhtunkhwa</span>
                    </p>

                </v-col>
            </v-row>
        </div>
    </footer>
    <div class="s-footer-content-wrapper">
        <v-footer class="d-flex flex-column">
            <div class="d-md-flex d-block w-100 align-center px-4 r-sec-footer-wrapper">
                <p class="text-family font-w-400 r-sec-f-text color-white rights-text">© 2024. All Rights Reserved.</p>
                <v-spacer></v-spacer>
                <p class="mx-4 text-family font-w-400 r-sec-f-text color-white">FAQ</p>
                <p class="mx-4 text-family font-w-400 r-sec-f-text color-white">Terms & Conditions</p>
                <p class="mx-4 text-family font-w-400 r-sec-f-text color-white">Privacy Policy</p>

            </div>
        </v-footer>
    </div>
</div>
</template>

<style scoped>
@import url('../assets/stylesheet/footer.css');
</style>
