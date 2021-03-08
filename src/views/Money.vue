<template>
    <div class="money">
        <layout>
            <Tags @selectType="selectType" :type="type" />
            <main>
                <Calculator />
                <Icons v-if="type === '-'"/>
                <Icon2 v-if="type === '+'"/>
            </main>
        </layout>
    </div>
</template>

<script lang="ts">
    import Layout from '@/components/Layout.vue';
    import Tags from '@/components/Money/tags.vue';
    import Calculator from '@/components/Money/Calculator.vue';
    import Icons from '@/components/Money/Icons.vue';
    import Icon2 from '@/components/Money/Icon2.vue';


    import Vue from  'vue'; //引入vue
    import {Component} from 'vue-property-decorator';
    //引入component 它的作用是自动把type 和slectType变成data和methods在这里我们不用写 但是需要引入@Component

    @Component
    export default class Types extends  Vue{
        type = '-' ;//支出就'-' 收入‘+’
        selectType(type: string){
            if(type !== '-' && type !== '+'){
                throw new Error("type is error")
            }
            this.type = type
        }
    }

    //下面是js写法
    // export default {
    //     name: 'money',
    //
    //     data(){
    //         return {
    //             type:'-' //-号表示支出 +号表示收入
    //         }
    //     },
    //     methods:{
    //         selectType(type){ //type只能是-号或者是+号
    //             if(type !== '-' && type !== '+'){
    //                 throw new Error('type is 错误')
    //             }
    //             this.type = type
    //         }
    //     }
    // };
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
