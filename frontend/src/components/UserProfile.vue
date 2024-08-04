<template>
<div>

    <v-row class="profile-wrapper">
        <v-col cols="12" md="6">
            <v-text-field loading="loading" rounded="10" placeholder="First Name" variant="solo" bg-color="rgb(251, 211, 211)" hide-details class="r-searc-field text-family font-w-500 r-poet-search-field r-profile-field mt-5">
            </v-text-field>
        </v-col>
        <v-col cols="12" md="6">
            <v-text-field loading="loading" rounded="10" placeholder="Last Name" variant="solo" bg-color="rgb(251, 211, 211)" hide-details class="r-searc-field text-family font-w-500 r-poet-search-field r-profile-field mt-5">
            </v-text-field>
        </v-col>
        <v-col cols="12" md="6">
            <v-text-field loading="loading" rounded="10" placeholder="Email" variant="solo" bg-color="rgb(251, 211, 211)" hide-details class="r-searc-field text-family font-w-500 r-poet-search-field r-profile-field mt-5">
            </v-text-field>
        </v-col>
        <v-col cols="12" md="6">
            <v-text-field loading="loading" rounded="10" placeholder="Phone" variant="solo" bg-color="rgb(251, 211, 211)" hide-details class="r-searc-field text-family font-w-500 r-poet-search-field r-profile-field mt-5">
            </v-text-field>
        </v-col>
        <v-col cols="12" md="6">
            <v-text-field loading="loading" rounded="10" placeholder="Country" variant="solo" bg-color="rgb(251, 211, 211)" hide-details class="r-searc-field text-family font-w-500 r-poet-search-field r-profile-field mt-5">
            </v-text-field>
        </v-col>
        <v-col cols="12" md="6">
            <v-text-field loading="loading" rounded="10" placeholder="Province" variant="solo" bg-color="rgb(251, 211, 211)" hide-details class="r-searc-field text-family font-w-500 r-poet-search-field r-profile-field mt-5">
            </v-text-field>
        </v-col>
        <v-col cols="12" class="profile-btns-wrapper mb-15">
            <v-btn width="200px" class="text-family font-w-700 ml-auto profile-btns mt-3" height="60px"  color="#FFFFFF" flat>
                Update Password
            </v-btn>
            <v-btn width="200px" class="text-family font-w-700 ml-8 profile-btns save-btn-profile mt-3"  height="60px"  color="#F86767" flat>
                Save
            </v-btn>
        </v-col>
    </v-row>

</div>
</template>

    
<script>
export default {
    components: {

    },
    data() {
        return {

        }
    },
}
</script>

    
<style scoped>
@import url('@/assets/stylesheet/profile.css');
</style>
