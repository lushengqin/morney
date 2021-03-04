<template>
    <svg class="icon">
        <use :xlink:href="'#'+name"></use>
    </svg>
</template>

<script lang="ts">
    export default {
        props:['name'],
        name: 'Icon'
    };
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        color: $iconColor;
    }
</style>