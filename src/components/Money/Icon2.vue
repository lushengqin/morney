<template>
    <section class="icons">
        <div v-for="collect in collectSource"  :key='collect.id'  class="itemBox">
            <icon  :name="collect.svgS" />
            <span>{{collect.title}}</span>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component,Prop} from 'vue-property-decorator';

    @Component
    export default class Icon2 extends Vue{
        @Prop(Array) collect: string[]|undefined;
        @Prop() collectSource: string [] |undefined;
    }
</script>
<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .icons{
        height: 33vh;
        flex: 1;
        padding-top: 16px;
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        align-content:stretch;
        max-width: 100vw;
        overflow-x: auto;
        .itemBox{
            display: flex;
            width: 25%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            flex-wrap: nowrap ;
            height: 90px;
            .icon{
                background-color: #f4f4f4;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 50px;
                border-radius: 6%;
                padding: 10px;
                border: 1px solid #f1f9ff;
            }
            &.selected{
                .icon{
                    background-color: $blue;
                    color: #fff;
                }
                >span{
                    color: $blue;
                }
            }
            >span{
                margin-top: 6px;
                font-size: 14px;
                color: #999;
            }
        }

    }
</style>