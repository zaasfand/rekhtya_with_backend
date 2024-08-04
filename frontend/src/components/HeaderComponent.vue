<template>
<nav>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
        <v-icon>mdi-menu</v-icon>
    </label>
    <img class="mt-2 logo" :src="require('../assets/images/rekhtya.webp')" />
    <ul class="ul-list text-family font-w-700">
        <li class="cursor-pointer home-link"><a class="active" @click="handleClick('/')">Home</a></li>
        <li class="cursor-pointer"><a @click="handleClick('/poets')">Poets</a></li>
        <li class="cursor-pointer"><a @click="handleClick('/books')">Books</a></li>
        <li class="cursor-pointer"><a @click="handleClick('/poetry')">Poetry</a></li>
        <li class="cursor-pointer"><a @click="handleClick('/dictionary')">Dictionary</a></li>
        <li class="cursor-pointer p-margin" v-if="!isLoggedIn" @click="handleClick('/login')"><a><button class="login-btn font-w-500"> Log In</button> </a></li>
        <li class="cursor-pointer n-margin" v-if="!isLoggedIn" @click="handleClick('/signup')"><a><button class="signup-btn font-w-500">Sign Up</button>
            </a></li>
        <li v-if="isLoggedIn">
            <v-menu class="nav-dropdowns" open-on-hover>
                <template v-slot:activator="{ props }">
                    <a class="m-link text-family font-w-700 cursor-pointer" v-bind="props" @click="handleClick('/manage')">
                        Manage
                        <v-icon> mdi mdi-chevron-down</v-icon>
                    </a>
                </template>

                <v-list>
                    <v-list-item v-for="(item, index) in manageCategory" :key="index" @click="navigateToManage(index)">
                        <v-list-item-title class="text-family font-w-700">{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </li>
        <v-menu class="user-profile-drp nav-dropdowns" :location="location" v-if="isLoggedIn">
            <template v-slot:activator="{ props }">
                <v-avatar size="50" class="p-margin cursor-pointer">
                    <v-img v-bind="props" alt="John" :src="require('@/assets/images/user.webp')"></v-img>
                </v-avatar>
                <v-icon class="cursor-pointer" v-bind="props"> mdi mdi-chevron-down</v-icon>

            </template>
            <v-list>
                <v-list-item @click="handleClick('/user-profile')">
                    <v-list-item-title class="text-family font-w-700">Profile</v-list-item-title>
                </v-list-item>
                <v-list-item @click="handleClick('/favourites')">
                    <v-list-item-title class="text-family font-w-700">My Favourites</v-list-item-title>
                </v-list-item>
                <v-list-item @click="handleClick('/collections')">
                    <v-list-item-title class="text-family font-w-700">My Collection</v-list-item-title>
                </v-list-item>
                <v-list-item @click="logout()">
                    <v-list-item-title class="text-family font-w-700">Logout</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </ul>
</nav>
</template>

<script>
import {
    state
} from '@/States/state'

export default {
    data() {
        return {
            items: [{
                    title: 'Profile'
                },
                {
                    title: 'My Favourites'
                },
                {
                    title: 'My Collection'
                },
                {
                    title: 'Logout'
                },
            ],
            manageCategory: [{
                    title: 'Poets'
                },
                {
                    title: 'Books'
                },
                {
                    title: 'Poetry'
                },
                {
                    title: 'Users'
                },
                {
                    title: 'Queries'
                }
            ],
            location: 'start',
            isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
        }
    },
  

    methods: {
        handleClick(route) {
            const checkbox = document.getElementById('check');
            if (checkbox.checked) {
                checkbox.checked = false;
            }
            this.$router.push(route);
        },
        logout() {
            localStorage.removeItem('isLoggedIn');
            this.isLoggedIn = false;
            this.$router.push('/login');
        },
        navigateToManage(index) {
            state.activeTab = index;
            if (this.$route.name === 'ManageComponent') {
                // Or directly set state in ManageComponent if using Vuex or similar

            } else {
                this.$router.push({
                    name: 'ManageComponent'
                });
            }
        },

    }
}
</script>

<style scoped>
@import url('../assets/stylesheet/header.css');
</style>
