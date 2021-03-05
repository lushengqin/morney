<template>
    <nav>
        <router-link class="item" to="./Labels" active-class="selected">
            <Icon name="labels"/>
            <div class="title">明细</div>
        </router-link>
        <router-link class="item" to="./Money" active-class="selected">
            <Icon name="money"/>
            <div class="title">记账</div>
        </router-link>
        <router-link class="item" to="./Statistic" active-class="selected">
            <Icon name="statistic"/>
            <div class="title">账单</div>
        </router-link>
    </nav>
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
    @import "~@/assets/style/helper.scss";
    nav {
          display: flex;
          height: 10vh;
          justify-content: center;
          align-items: center;
          box-shadow: 0 0 2px rgba(0,0,0,0.1);
          .item {
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-decoration: none;
              align-self: center;
              .icon{
                  width: 1.6rem;
                  height: 1.6rem;
              }
          }
        .title{
            font-size: 16px;
        }
          > .item.selected{
              color:$blue;
              .icon{
                  color: $blue;
              }
          }
      }

</style>