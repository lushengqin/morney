<template>
    <div class="money">
        <layout>
            <Tags />
            <main>
                <Calculator />
                <div class="icons">
                    <Icons/>
                </div>
            </main>
        </layout>
    </div>
</template>

<script lang="js">
    import Layout from '@/components/Layout.vue';
    import Tags from '@/components/Money/tags.vue';
    import Calculator from '@/components/Money/Calculator.vue';
    import Icons from '@/components/Money/Icons.vue';

    // new Vue({
    //     components: {tags},
    //     data:{
    //         type:'-' //-号表示支出 +号表示收入
    //     },
    //     template:`
    //         <div>
    //             <Tags :fn="selectType"/>
    //         </div>
    //     `,
    //     methods:{
    //             selectType(type){ //type只能是-号或者是+号
    //                 if(type !== '-' && type !== '+'){
    //                     throw new Error('type is 错误')
    //                 }
    //                 this.type = type
    //             }
    //         }
    // }).$mount('#')
    export default {
        name: 'money',
        components: {Icons, Calculator, Tags, Layout },
        data(){
            return {
                type:'-' //-号表示支出 +号表示收入
            }
        },
        methods:{
            selectType(type){ //type只能是-号或者是+号
                if(type !== '-' && type !== '+'){
                    throw new Error('type is 错误')
                }
                this.type = type
            }
        }
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
