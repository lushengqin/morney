<template>
    <section class="calculator">
        <div class="comment">
            <label>
                {{value}}
                <span >备注</span>
                <input v-model="value" placeholder="写点备注吧"/>
            </label>
        </div>
        <div class="number">{{number}}</div>
        <div class="compute clearfix" >
            <button @click="inputContent">1</button>
            <button @click="inputContent">2</button>
            <button @click="inputContent">3</button>
            <button @click="remove">删除</button>
            <button @click="inputContent">4</button>
            <button @click="inputContent">5</button>
            <button @click="inputContent">6</button>
            <button @click="clear">清空</button>
            <button @click="inputContent">7</button>
            <button @click="inputContent">8</button>
            <button @click="inputContent">9</button>
            <button @click="accomplish" class="accomplish">完成</button>
            <button class="zero" @click="inputContent">0</button>
            <button @click="inputContent">.</button>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component,Prop} from 'vue-property-decorator';

    @Component

    export default class Calculator extends Vue{
        value = '';
        number = '0';
        inputContent(event: MouseEvent){
            const button = (event.target as HTMLButtonElement); //as HTMLButtonElement 表示给event指定它是按钮 所以它的内容不会是空
            const input  = button.textContent as string; //加！表示除了不为空的数
            // console.log(button.textContent);
            // this.number += button.textContent
            // if(this.number === '0'){
            //     if('0123456789'.indexOf(input) >= 0){
            //        this.number = input;
            //         console.log('执行完了');
            //     }else{
            //         console.log('.');
            //         this.number += button.textContent;
            //
            //     }
            //     return;
            // }
            if(this.number.length >= 16){
                return
            }
            if (this.number === '0') {
                if ('0123456789'.indexOf(input) >= 0) {
                    this.number = input;
                } else {
                    this.number += input;
                }
                return;
            }
            // console.log(this.number.indexOf('.'));
            if(this.number.indexOf('.') >= 0 && input === '.'){
                return;
            }
            this.number += button.textContent;
        }
        remove(){
            if(this.number.length === 1){
                this.number ='0'
            }else{
                this.number = this.number.slice(0,this.number.length-1)
            }

        }
        clear(){
            this.number = '0'
        }
        accomplish(){
            console.log("accomplish");
        }
    }


</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .calculator{
        max-width: 100vw;
        .comment{
            width: 100vw;
            line-height: 40px;
            background-color: #f8f8f8;
            overflow-x: auto;
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
            font-size: 30px;
            line-height: 60px;
            padding-right: 20px;
            text-align: right;
            color: #333;
            min-height: 60px;
        }
        .compute{
            >button{
                float: left;
                width: 25%;
                display: inline-block;
                height: 2.3rem;
                background-color: #f4f4f4;
                border: 1px solid #fff;
                color: #666;
            }
            .accomplish{
                height: 2.3rem *2;
                float: right;
            }
            .zero{
                width: 50%;
            }
        }

    }
</style>