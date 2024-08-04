<template>
    <div class="main-content-wrapper">
        <HeaderComponent/>
        <router-view></router-view>
        <FooterComponent/>
    </div>
</template>
<script>
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent'
export default{
    components:{
        HeaderComponent,
        FooterComponent
    }
}
</script>