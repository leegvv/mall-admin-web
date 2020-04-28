<template>
    <div class="app-wrapper" :class="classObj">
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <navbar></navbar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
    import { AppMain,  Navbar, Sidebar } from './components';

    export default {
        name: 'layout',
        components: {AppMain, Navbar, Sidebar},
        comments: {
            Navbar,
            Sidebar,
            AppMain
        },
        computed: {
            classObj() {
                return {

                };
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
    }

</style>
