<template>
    <div class="money">
        <layout>
            <Tags @selectType="selectType" :type="type" />
            <main>
                <Calculator />
                <Icons :data-source="value" v-if="type === '-'" @xxx = 'yyy'/>
                <Icon2 :collect-source="collect" v-if="type === '+'"/>
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
    import Vue from  'vue';
    import Component from 'vue-class-component';

    @Component({
        components: {Icons, Calculator, Tags, Layout,Icon2 },
    })
    export default class Money extends Vue{

        type='-'; //-号表示支出 +号表示收入
        value=[
            {
                        id:0,
                        title:'餐饮',
                        svgS:'canying'
                    },
            {
                        id:1,
                        title:'餐饮',
                        svgS:'fangzi'
                    },
            {
                        id:2,
                        title:'餐饮',
                        svgS:'gouwu'
                    },
            {
                        id:3,
                        title:'餐饮',
                        svgS:'jiaotong'
                    },
            {
                        id:4,
                        title:'餐饮',
                        svgS:'yiliao'
                    },
            {
                        id:5,
                        title:'餐饮',
                        svgS:'yule'
                    },
            {
                        id:6,
                        title:'餐饮',
                        svgS:'jia'
                    }
        ];
        collect=[
                    {
                        id:0,
                        title:'餐饮2',
                        svgS:'canying'
                    },
                    {
                        id:1,
                        title:'餐饮2',
                        svgS:'fangzi'
                    },
                    {
                        id:2,
                        title:'餐饮2',
                        svgS:'gouwu'
                    },
                    {
                        id:3,
                        title:'餐饮2',
                        svgS:'jiaotong'
                    },
                    {
                        id:4,
                        title:'餐饮2',
                        svgS:'yiliao'
                    },
                    {
                        id:5,
                        title:'餐饮2',
                        svgS:'yule'
                    },
                    {
                        id:6,
                        title:'餐饮2',
                        svgS:'jia'
                    }
                ]

        selectType(type: string){ //type只能是-号或者是+号
            if(type !== '-' && type !== '+'){
                throw new Error('type is 错误')
            }
            this.type = type
        }
    }
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
        justify-content: flex-start;
        height: 80vh;
    }
</style>
