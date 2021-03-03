<template>
    <div id="nav">
        <router-link class="nav-li" to="./Labels">
            <Icon name="labels"></Icon>
            <div class="title">明细</div>
        </router-link>
        <router-link class="nav-li" to="./Money">
            <Icon name="money"></Icon>
            <div class="title">记账</div>
        </router-link>
        <router-link class="nav-li" to="./Statistic">
            <Icon name="statistic"></Icon>
            <div class="title">账单</div>
        </router-link>
    </div>
</template>

<script lang="ts">
    //引入全局icon
    const importAll = (requireContext: __WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
    try {
        importAll(require.context('../assets/icons',true,/\.svg$/))
    }catch (error) {
        console.log(error)
    }

    import Icon from '@/components/Icon.vue';
    export default {
        name: 'Nav',
        components: {Icon}
    };
</script>

<style lang="scss" scoped>
    #nav {
        background-color: #f8f8f8;
        display: flex;
        justify-content: center;
        text-align: center;
        padding-top: 5px;
        padding-bottom: 5px;
        .nav-li {
            flex: 1;
            text-align: center;
            align-self: flex-end;
            text-decoration: none;
            font-size: 14px;
            svg{
                height: 18px;
                width: 18px;
                font-size: 18px;
            }
        }
    }
</style>