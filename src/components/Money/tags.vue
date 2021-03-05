<template>
    <div>
        <nav class="tags">
            <div class="pay "  :class="type === '-'&&'selected'" @click="selectType( '-')" >支出</div>
            <div class="income"  :class="type === '+' && 'selected'" @click="selectType('+') ">收入</div>
        </nav>
    </div>
</template>

<script lang="js">
    // import Vue from  'vue'; //引入vue
    // import {Component} from 'vue-property-decorator';
    // //引入component 它的作用是自动把type 和slectType变成data和methods在这里我们不用写 但是需要引入@Component
    //
    // @Component
    // export default class Types extends  Vue{
    //     type = '-' ;//支出就'-' 收入‘+’
    //     selectType(type:string){
    //         if(type !== '-' && type !== '+'){
    //             throw new Error("type is error")
    //         }
    //         this.type = type
    //     }
    // }


    export default {
        name: 'tags',
        props:['selectType','type'],
        // data(){
        //     return {
        //         type:'-' //-号表示支出 +号表示收入
        //     }
        // },
        // mounted(){
        //     console.log(this.type)
        // },
        // methods:{
        //     selectType(type){ //type只能是-号或者是+号
        //         if(type !== '-' && type !== '+'){
        //             throw new Error('type is 错误')
        //         }
        //         this.type = type
        //     }
        // }
    };

</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .tags{
        height: 10vh;
        width: 100vw;
        background: $blue;
        display: block;
        color: #fff;
        display: flex;
        padding: 10px 16%;
        overflow-x: auto;
        font-size: 2rem;
        line-height: calc(10vh - 18px);
        .pay,
        .income{
            flex: 1;
            display: flex;
            justify-content: center;
            text-align: center;
            font-size: 24px;
            border: 1px solid #fff ;
            margin-left: -1px;
        }
        .pay{
            border-radius: 6px 0 0 6px;
        }
        .income{
            border-radius:  0 6px 6px 0 ;
        }
        .pay.selected,
        .income.selected{
            background-color: #fff;
            color: $blue;
        }
    }
</style>