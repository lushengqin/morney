<template>
    <div class="money">
        <layout>
            <Tags/>
            <main>
                <Calculator />
                <Icons/>
            </main>
        </layout>
    </div>
</template>

<script lang="ts">
    import Layout from '@/components/Layout.vue';
    import Tags from '@/components/Money/tags.vue';
    import Calculator from '@/components/Money/Calculator.vue';
    import Icons from '@/components/Money/Icons.vue';

    export default {
        name: 'money',
        components: {Icons, Calculator, Tags, Layout }
    };
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .money{
        font-family: $font-hei;
        font-size: 16px;
    }

    main{
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        height: 80vh;
    }


</style>
