<template>
    <div class="money">
        <layout>
            <nav class="tags">
                <router-link to="/" class="pay" active-class="selected">支出</router-link>
                <router-link to="/" class="income" active-class="selected">收入</router-link>
            </nav>
            <main>
                <section class="icons">
                    <div class="itemBox">
                        <icon name="canying" />
                        <span>餐饮</span>
                    </div>
                    <div class="itemBox">
                        <icon name="fangzi" />
                        <span>餐饮</span>
                    </div>
                    <div class="itemBox">
                        <icon name="gouwu" />
                        <span>餐饮</span>
                    </div>
                    <div class="itemBox">
                        <icon name="jiaotong" />
                        <span>餐饮</span>
                    </div>
                    <div class="itemBox">
                        <icon name="yiliao" />
                        <span>餐饮</span>
                    </div>
                    <div class="itemBox">
                        <icon name="yule" />
                        <span>餐饮</span>
                    </div>
                    <div class="itemBox">
                        <icon name="jia" />
                        <span>餐饮</span>
                    </div>
                    <div class="itemBox">
                        <icon name="jia" />
                        <span>餐饮</span>
                    </div>
                    <div class="itemBox">
                        <icon name="jia" />
                        <span>餐饮</span>
                    </div>

                </section>
                <section class="calculator">
                    <div class="comment">
                        <label>
                            <span>备注</span>
                            <input placeholder="写点备注吧"/>
                        </label>
                    </div>
                    <div class="number">100</div>
                    <div class="compute">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>+</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>-</button>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>完成</button>
                        <button>.</button>
                        <button>0</button>
                        <button>清空</button>
                    </div>
                </section>
            </main>
        </layout>
    </div>
</template>

<script lang="ts">
    import Layout from '@/components/Layout.vue';
    import Icon from '@/components/Icon.vue';

    export default {
        name: 'money',
        components: {Layout,Icon}
    };
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .money{
        font-family: $font-hei;
        font-size: 16px;
    }
    .tags{
        height: 10vh;
        width: 100vw;
        background: $blue;
        display: block;
        color: #fff;
        display: flex;
        padding: 12px 60px;
        overflow-x: auto;
        .pay{
            border-right: 1px solid #fff ;
        }
        .pay,
        .income{
            flex: 1;
            display: flex;
            justify-content: center;
            text-align: center;
            font-size: 24px;

        }
        .pay.selected,
        .income.selected{
            color: rgba(255,255,255,0.6);
        }
    }
    .main{
        display: flex;
        
    }
    .icons{
        height: 31vh;
        margin-top: 16px;
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        align-content:stretch;
        .itemBox{
            display: flex;
            width: 20%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            flex-wrap: nowrap ;
            padding: 10px;
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
    .calculator{
        height: 45vh;
        border: 1px solid red;
        .comment{
            line-height: 40px;
            background-color: #f8f8f8;
            >label{
                display: flex;
                flex-wrap: nowrap;
                >span{
                    margin-left: 20px;
                    margin-right: 20px;
                }
                input{
                    flex: 1;
                    display: flex;
                    line-height: 40px;
                    padding-left:10px;
                    padding-right:10px;
                    border: 0;
                    background-color: transparent;
                }
            }

        }

    }
</style>
