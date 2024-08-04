<template>
<div>
    <div class="poets-content-wrapper">
        <v-tabs v-model="tab" class="r-poet-slider r-manage-slide" align-tabs="title" hide-slider>
            <v-tab class="text-family font-w-500" v-for="(tab, index) in tabs" :key="index">{{ tab }}</v-tab>
        </v-tabs>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item>
                <div class="mt-10 ml-auto d-flex">
                    <v-btn class="add-btn-d-board text-family font-w-600 mt-1 text-capitalize ml-auto mr-2" rounded="0" color="#F86767">Add</v-btn>
                    <v-text-field loading="loading" rounded="0" placeholder="Search Poets" variant="solo" max-width="400px" width="400px" bg-color="rgb(251, 211, 211)" hide-details class="r-searc-field text-family font-w-500 r-poet-search-field "></v-text-field>
                </div>
                <v-data-table class="r-d-table mt-15 mb-15" :items="items">
                    <template v-slot:[`item.Actions`]>
                        <v-btn icon v-bind="attrs" v-on="on" variant="depressed" @click="add_Post = true">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </template>
                    <template v-slot:[`item.Image`]>
                        <img alt="poet" class="r-table-img" :src="require('@/assets/images/user.webp')" />
                    </template>
                </v-data-table>
            </v-tabs-window-item>
            <v-tabs-window-item>
                <div class="mt-10 ml-auto d-flex">
                    <v-btn class="add-btn-d-board text-family font-w-600 mt-1 text-capitalize ml-auto mr-2" rounded="0" color="#F86767">Add</v-btn>
                    <v-text-field loading="loading" rounded="0" placeholder="Search Books" variant="solo" max-width="400px" width="400px" bg-color="rgb(251, 211, 211)" hide-details class="r-searc-field text-family font-w-500 r-poet-search-field "></v-text-field>
                </div>
                <v-data-table class="r-d-table mt-15 mb-15" :items="bookItems">
                    <template v-slot:[`item.Actions`]>
                        <v-btn icon v-bind="attrs" v-on="on" variant="depressed" @click="add_book = true">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </template>
                    <template v-slot:[`item.Image`]>
                        <img alt="poet" class="r-book-img-dash" :src="require('@/assets/images/book.png')" />
                    </template>
                </v-data-table>
            </v-tabs-window-item>
            <v-tabs-window-item>
                <div class="mt-10 ml-auto d-flex">
                    <v-btn class="add-btn-d-board text-family font-w-600 mt-1 text-capitalize ml-auto mr-2" rounded="0" color="#F86767">Add</v-btn>
                    <v-text-field loading="loading" rounded="0" placeholder="Search Poem" variant="solo" max-width="400px" width="400px" bg-color="rgb(251, 211, 211)" hide-details class="r-searc-field text-family font-w-500 r-poet-search-field "></v-text-field>
                </div>
                <v-data-table class="r-d-table mt-15 mb-15" :items="poemItems">
                    <template v-slot:[`item.Actions`]>
                        <v-btn icon v-bind="attrs" v-on="on" variant="depressed" @click="add_Poem = true">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
            </v-tabs-window-item>
            <v-tabs-window-item>
                <div class="mt-10 ml-auto d-flex">
                    <v-btn class="add-btn-d-board text-family font-w-600 mt-1 text-capitalize ml-auto mr-2" rounded="0" color="#F86767">Add</v-btn>
                    <v-text-field loading="loading" rounded="0" placeholder="Search Users" variant="solo" max-width="400px" width="400px" bg-color="rgb(251, 211, 211)" hide-details class="r-searc-field text-family font-w-500 r-poet-search-field "></v-text-field>
                </div>
                <v-data-table class="r-d-table mt-15 mb-15" :items="userItems">
                    <template v-slot:[`item.Actions`]>
                        <v-btn icon v-bind="attrs" v-on="on" variant="depressed">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
            </v-tabs-window-item>
            <v-tabs-window-item>
                <div class="mt-10 ml-auto d-flex">
                    <v-text-field loading="loading" rounded="0" placeholder="Search" variant="solo" max-width="400px" width="400px" bg-color="rgb(251, 211, 211)" hide-details class="r-searc-field text-family font-w-500 r-poet-search-field ml-auto"></v-text-field>
                </div>
                <v-data-table class="r-d-table mt-15 mb-15" :items="queryItems">
                    <template v-slot:[`item.Actions`]>
                        <v-btn icon v-bind="attrs" v-on="on" variant="depressed" @click="add_query = true">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
            </v-tabs-window-item>
        </v-tabs-window>
    </div>
    <v-dialog transition="dialog-bottom-transition r-dash-dialog" v-model="add_Post" width="900">
        <v-toolbar title="Add Poet" class="rp-d-toolbar" color="#F86767"></v-toolbar>
        <v-card class="rp-dialg-card">
            <v-form ref="form">
                <v-card-text class="r-dash-dialog-text">

                    <v-row class="mt-8">
                        <v-col cols="12" sm="6">
                            <v-text-field class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="First Name" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Last Name" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Country" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Province" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-file-input @focus="isFileInputFocused = true" @blur="isFileInputFocused = false" label="Upload Image" accept="image/*" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Upload Image" :class="['rp-d-text', 'rp-upload-field', { 'focused-input': isFileInputFocused }]" variant="outlined"></v-file-input>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <span class="text-family font-w-600 rp-al-text align-items-center d-flex">
                                Still Alive?
                                <v-checkbox class="mt-n1 ml-auto" :model-value="false"></v-checkbox>
                            </span>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Date of birth" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Date of demise" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea class="rp-d-text" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Biography" variant="outlined"></v-textarea>
                        </v-col>

                    </v-row>
                </v-card-text>

                <v-card-actions class="justify-center r-dash-dialog-actions pb-10">
                    <v-btn class="rp-d-can-btn text-family font-w-600 r-rounded-10" @click="add_Post = false"> Cancel</v-btn>
                    <v-btn class="rp-d-save-btn text-family font-w-600 r-rounded-10" @click="validate" color="#F86767">Save</v-btn>

                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
    <v-dialog transition="dialog-bottom-transition r-dash-dialog" v-model="add_book" width="900">
        <v-toolbar title="Add Book" class="rp-d-toolbar" color="#F86767"></v-toolbar>
        <v-card class="rp-dialg-card">
            <v-form ref="form">
                <v-card-text class="r-dash-dialog-text">

                    <v-row class="mt-8">
                        <v-col cols="12" sm="12">
                            <v-text-field class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Book Name" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-select class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Select Author" variant="outlined"></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Published Date" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-file-input @focus="isFileInputFocused = true" @blur="isFileInputFocused = false" label="Upload Image" accept="image/*" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Upload Image" :class="['rp-d-text', 'rp-upload-field', { 'focused-input': isFileInputFocused }]" variant="outlined"></v-file-input>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-select class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Status" variant="outlined"></v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea class="rp-d-text" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Biography" variant="outlined"></v-textarea>
                        </v-col>

                    </v-row>
                </v-card-text>

                <v-card-actions class="justify-center r-dash-dialog-actions pb-10">
                    <v-btn class="rp-d-can-btn text-family font-w-600 r-rounded-10" @click="add_book = false"> Cancel</v-btn>
                    <v-btn class="rp-d-save-btn text-family font-w-600 r-rounded-10" @click="validate" color="#F86767">Save</v-btn>

                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
    <v-dialog transition="dialog-bottom-transition r-dash-dialog" v-model="add_Poem" width="900">
        <v-toolbar title="Add Poem" class="rp-d-toolbar" color="#F86767"></v-toolbar>
        <v-card class="rp-dialg-card">
            <v-form ref="form">
                <v-card-text class="r-dash-dialog-text">

                    <v-row class="mt-8">
                        <v-col cols="12" sm="7">
                            <v-text-field class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Title" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="5">
                            <v-select class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Select Book" variant="outlined"></v-select>
                        </v-col>
                        <v-col cols="12" sm="7">
                            <v-select class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Select Author" variant="outlined"></v-select>
                        </v-col>
                        <v-col cols="12" sm="5">
                            <v-select class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Status" variant="outlined"></v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea class="rp-d-text" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Text" variant="outlined"></v-textarea>
                        </v-col>

                    </v-row>
                </v-card-text>

                <v-card-actions class="justify-center r-dash-dialog-actions pb-10">
                    <v-btn class="rp-d-can-btn text-family font-w-600 r-rounded-10" @click="add_Poem = false"> Cancel</v-btn>
                    <v-btn class="rp-d-save-btn text-family font-w-600 r-rounded-10" @click="validate" color="#F86767">Save</v-btn>

                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
    <v-dialog transition="dialog-bottom-transition r-dash-dialog" v-model="add_query" width="900">
        <v-toolbar title="User Query" class="rp-d-toolbar" color="#F86767"></v-toolbar>
        <v-card class="rp-dialg-card">
            <v-form ref="form">
                <v-card-text class="r-dash-dialog-text">

                    <v-row class="mt-8">
                        <v-col cols="12" sm="12">
                            <v-text-field class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="User Name" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-select class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Email" variant="outlined"></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-select class="rp-d-text" :rules="[v => !!v || 'This Field is required']" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="Date" variant="outlined"></v-select>
                        </v-col>
                        <v-col cols="12" sm="12">
                            <v-textarea class="rp-d-text" bg-color="rgb(252, 227, 227)" color="rgb(252, 227, 227)" placeholder="User Query" variant="outlined"></v-textarea>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea class="rp-d-text rp-text-field" bg-color="rgb(252, 227, 227)" auto-grow color="rgb(252, 227, 227)" placeholder="Reply" variant="outlined" v-model="replyText">
                                <template v-slot:append-inner>
                                    <v-btn class="rp-d-save-btn r-send-btn r-rounded-10 text-family font-w-600 mb-5" @click="validate" color="#F86767" >Send</v-btn>

                                </template>
                            </v-textarea>
                        </v-col>

                    </v-row>
                </v-card-text>

                <v-card-actions class="justify-center r-dash-dialog-actions pb-10">
                    <v-btn class="rp-d-can-btn text-family font-w-600 r-rounded-10" @click="add_query = false"> Cancel</v-btn>
                    <v-btn class="rp-d-save-btn text-family font-w-600 r-rounded-10" @click="validate" color="#F86767">Save</v-btn>

                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import {
    state
} from '@/States/state'

export default {
    data() {
        return {
            tab: null,
            tabs: ["Poets", "Books", "Poetry", "Users", "Queries"],
            add_Post: false,
            items: [{
                    ID: '1',
                    Name: 'Ghani Khan',
                    Image: '146.6',
                    Books: '230.4',
                    Poems: '2583285',
                    Status: 'c. 2580–2560 BC',
                    Actions: 'fdsfds',
                },
                {
                    ID: '2',
                    Name: 'Ghani Khan',
                    Image: '146.6',
                    Books: '230.4',
                    Poems: '2583285',
                    Status: 'c. 2580–2560 BC',
                    Actions: 'fdsfds',
                },
            ],
            bookItems: [{
                    ID: '1',
                    Name: 'Ghani Khan',
                    Image: '146.6',
                    Author: '230.4',
                    Stock: '2583285',
                    Status: 'c. 2580–2560 BC',
                    Actions: 'fdsfds',
                },
                {
                    ID: '2',
                    Name: 'Ghani Khan',
                    Image: '146.6',
                    Author: '230.4',
                    Stock: '2583285',
                    Status: 'c. 2580–2560 BC',
                    Actions: 'fdsfds',
                },
            ],
            poemItems: [{
                    ID: '1',
                    Name: 'Ghani Khan',
                    Book: '230.4',
                    Author: '2583285',
                    Status: 'c. 2580–2560 BC',
                    Actions: 'fdsfds',
                },
                {
                    ID: '2',
                    Name: 'Ghani Khan',
                    Book: '230.4',
                    Author: '2583285',
                    Status: 'c. 2580–2560 BC',
                    Actions: 'fdsfds',
                },
            ],
            userItems: [{
                    ID: '1',
                    Name: 'Ghani Khan',
                    Email: '230.4',
                    Location: '2583285',
                    Status: 'c. 2580–2560 BC',
                    Actions: 'fdsfds',
                },
                {
                    ID: '2',
                    Name: 'Ghani Khan',
                    Email: '230.4',
                    Location: '2583285',
                    Status: 'c. 2580–2560 BC',
                    Actions: 'fdsfds',
                },
            ],
            queryItems: [{
                    ID: '1',
                    Name: 'Ghani Khan',
                    Query: '230.4',
                    Date: '2583285',
                    Status: 'c. 2580–2560 BC',
                    Actions: 'fdsfds',
                },
                {
                    ID: '2',
                    Name: 'Ghani Khan',
                    Query: '230.4',
                    Date: '2583285',
                    Status: 'c. 2580–2560 BC',
                    Actions: 'fdsfds',
                },
            ],
            isFileInputFocused: false,
            add_book: false,
            add_Poem: false,
            add_query: false
        };
    },
    created() {
        this.tab = state.activeTab;
        this.$watch(() => state.activeTab, (newValue) => {
            this.tab = newValue;
        });
    },
    methods: {
        async validate() {
            const {
                valid
            } = await this.$refs.form.validate()

            if (valid) alert('Form is valid')
        },

    },
};
</script>

<style scoped>
@import url('@/assets/stylesheet/poet.css');
@import url('@/assets/stylesheet/book.css');
@import url('@/assets/stylesheet/dashboard.css');
</style>
