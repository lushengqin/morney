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



    export default {
        name: 'money',
        components: {Icons, Calculator, Tags, Layout,Icon2 },
        data(){
            return {
                type:'-' //-号表示支出 +号表示收入
            }
        },
        methods:{
            selectType(type: string){ //type只能是-号或者是+号
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
