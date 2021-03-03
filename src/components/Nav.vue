<template>
    <div id="nav">
        <router-link class="nav-li" to="./Labels">明细</router-link>
        <router-link class="nav-li" to="./Money">记账</router-link>
        <router-link class="nav-li" to="./Statistic">账单</router-link>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Nav'
    };
</script>

<style lang="scss" scoped>
    #nav {
        background-color: #f8f8f8;
        height: 100px;
        display: flex;

        .nav-li {
            flex: 1;
            text-align: center;
            align-self: flex-end;
            text-decoration: none;
        }
    }
</style>