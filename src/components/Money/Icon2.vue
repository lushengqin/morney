<template>
    <section class="icons">
        <div class="itemBox">
            <icon name="canying" />
            <span>兼职</span>
        </div>
        <div class="itemBox">
            <icon name="fangzi" />
            <span>吃饭</span>
        </div>
        <div class="itemBox">
            <icon name="gouwu" />
            <span>滴滴</span>
        </div>
        <div class="itemBox">
            <icon name="jiaotong" />
            <span>美工</span>
        </div>
        <div class="itemBox">
            <icon name="yiliao" />
            <span>扫地</span>
        </div>
    </section>
</template>

<script lang="ts">
    export default {
        name: 'Icon2'
    };
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