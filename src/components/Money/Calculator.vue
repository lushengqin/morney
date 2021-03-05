<template>
    <section class="calculator">
        <div class="comment">
            <label>
                <span>备注</span>
                <input placeholder="写点备注吧"/>
            </label>
        </div>
        <div class="number">100</div>
        <div class="compute clearfix">
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
            <button class="accomplish">完成</button>
            <button>.</button>
            <button>0</button>
            <button>清空</button>
        </div>
    </section>
</template>

<script lang="ts">
    export default {
        name: 'Calculator'
    };
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .calculator{
        max-width: 100vw;
        .comment{
            line-height: 40px;
            background-color: #f8f8f8;
            >label{
                display: flex;
                flex-wrap: nowrap;
                >span{
                    margin-left: 20px;
                    margin-right: 20px;
                    white-space: nowrap;
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
        .number{
            line-height: 2rem;
            padding-right: 20px;
            text-align: right;
            color: #333;
            font-size: 20px;
        }
        .compute{
            >button{
                float: left;
                width: 25%;
                display: inline-block;
                height: 2.6rem;
                background-color: #f4f4f4;
                border: 1px solid #fff;
                color: #666;
            }
            .accomplish{
                height: 2.6rem *2;
                float: right;
            }
        }

    }
</style>