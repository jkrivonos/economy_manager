<template>
    <ul class="sidenav app-sidenav" :class="{open: value}">

        <router-link v-for="el in links"
                     :key="el.url"
                     tag="li"
                     active-class="active"
                     :to="el.url"
                     :exact="el.exact"
                     >
            <a href="#" class="waves-effect waves-orange pointer">{{el.title}}</a>
        </router-link>
    </ul>
</template>
<script>
    export default {
        name: 'Sidebar',
        props: ['value'],
        data: () => ({
            links: [
                {title: 'Счет', url: '/', exact: true},
                {title: 'История', url: '/history'},
                {title: 'Планирование', url: '/planning'},
                {title: 'Новая запись', url: '/record'},
                {title: 'Категории', url: '/categories'},
            ]
        })
    }
</script>
<style scoped></style>