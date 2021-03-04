<template>
    <div class="nav">
        <div class="content">
            <slot></slot>
        </div>
        <Nav></Nav>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Layout'
    };
</script>

<style lang="scss" scoped>
    .nav{
        display: flex;
        flex-direction: column;
        max-width: 100vw;
        height: 100vh;
        .content{
            /*width: calc(100% - 40px);*/
            flex: 1;
            align-self: flex-start;
            overflow-y: auto;
        }

    }
</style>