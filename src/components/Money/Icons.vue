<template>

    <section class="icons">

        <div  v-for="icons in dataSource" :key="icons.id" class="itemBox">
            {{icons}}
            <icon name="item.svgS" />
            <span  >{{icons.title}}</span>
        </div>

    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component,Prop} from 'vue-property-decorator';

    @Component
    export default class Icons extends Vue{
        @Prop(Array) icons: string[] | undefined;
        dataSource: string[] = [];
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
            height: 90px;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            flex-wrap: nowrap ;
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