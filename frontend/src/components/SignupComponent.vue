<template>
    <div>
        <v-row class="login-wrapper">
            <v-col cols="12" md="7" class="login-col">
                <div class="login-first-container color-white text-family">
                    <h1 class="font-w-700 login-h1">Rekhtya <span class="font-w-300">welcomes you</span></h1>
                    <p class="login-h2 font-w-500">Sign-up to create your account</p>
                </div>
            </v-col>
            <v-col cols="12" md="5">
                <div class="login-sec-col text-family">
                    <div>
                        <p class="pin-color font-w-600 login-h3">Sign Up
                            <span class="d-block font-w-400  login-h4 mt-1">to create your account</span>
                        </p>
                        <div class="mt-5 pt-5">
                            <v-form ref="form">
                            <v-text-field   :rules="[v => !!v || 'This field is required']" variant="underlined" class="text-family log-fields" hide-details="auto" color="#FF7E7E" placeholder="Enter your name"></v-text-field>
                            <v-text-field   :rules="[v => !!v || 'This field is required']" variant="underlined" class="text-family log-fields mt-4" hide-details="auto" color="#FF7E7E" placeholder="Email address or phone number"></v-text-field>
                            <v-text-field   :rules="[v => !!v || 'This field is required']" :type="showPassword ? 'text' : 'password'" v-model="password" hide-details="auto" class="text-family log-fields mt-4" variant="underlined" color="#FF7E7E" placeholder="Password" :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" @click:append-inner="togglePasswordVisibility"></v-text-field>
                            <div class="text-center mt-4 pt-5">
                                <v-btn  @click="validate" class="text-family log-btn font-w-700 color-white" color="#F49090" width="100%" height="39" flat rounded>Sign Up</v-btn>
    
                            </div>
                            </v-form>
                            <div class="fgt-wrap pin-color font-w-500">
                                <v-checkbox class="text-family rem-che mt-1" color="#F49090" label="Remember me" value="secondary"></v-checkbox>
                                <p class="ml-auto font-w- login-h5 d-color mt-5">Forgot Password?</p>
    
                            </div>
                            <p class="login-h4 pin-color font-w-500 text-center">Log in with</p>
                            <div class="text-center mt-2">
                                <a>
                                    <img :src="require('@/assets/images/applelogocolorufull.webp')" />
                                </a>
                                <a>
                                    <img class="ml-4" :src="require('@/assets/images/googlelogo.webp')" />
                                </a>
                                <a>
                                    <img class="ml-4" :src="require('@/assets/images/facebooklogo.webp')" />
                                </a>
    
                            </div>
                            <p class="login-h4 pin-color font-w-500 text-center mt-4">Already have an account?
                                <span class="d-block font-w-700 text-family cursor-pointer" @click="$router.push('/login')">Sign In</span></p>
                        </div>
    
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
    </template>
    
    <script>
    export default {
        data() {
            return {
                password: '',
                showPassword: false,
             
            };
        },
        methods: {
            togglePasswordVisibility() {
                this.showPassword = !this.showPassword;
            },
            async validate () {
            const { valid } = await this.$refs.form.validate()
    
            if (valid) alert('Form is valid')
           

          },
        }
    };
    </script>
    
    <style scoped>
    @import url('../assets/stylesheet/login.css');
    </style>
    