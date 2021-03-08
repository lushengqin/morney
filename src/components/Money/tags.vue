<template>
    <div>
        <nav class="tags">
            <div class="pay "   :class="type === '-'&&'selected'" @click="$emit('selectType', '-')" >支出</div>
<div class="income"  :class="type === '+' && 'selected'" @click="$emit('selectType', '+') ">收入</div>
    </nav>
    </div>
    </template>

    <script lang="ts">


    export default {
        name: 'tags',
        props:['type'],
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