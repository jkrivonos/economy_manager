<template>
    <div>
        <div class="app-main-layout">
            <nav-bar @click="isOpen=!isOpen"></nav-bar>

            <side-bar v-model="isOpen"></side-bar>

            <main class="app-content" :class="{full: !isOpen}">
                <div class="app-page">
                    <router-view/>
                </div>
            </main>
            <div class="fixed-action-btn">
                <router-link to="/record" class="btn-floating btn-large blue" href="#">
                    <i class="large material-icons">add</i>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import NavBar from '../components/app/NavBar.vue'
    import SideBar from '../components/app/Sidebar.vue'

    export default {
        name: 'main-layout',
        data: () => ({
           isOpen: true
        }),
        components: {
            NavBar, SideBar
        }
    }
</script>
<style scoped></style>