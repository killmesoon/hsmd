<template>
    <div class="product-h6">
        <div class="item-one">
            <div class="item-one-left">
                <div>
                    <h1 style="color: orange">H.</h1>
                </div>
            </div>
            <div class="item-one-right">
                <img src="../../../assets/img/product/H6.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductOne"
    }
</script>

<style scoped>
    .item-one {
        display: flex;
        width: 100%;
    }
    .item-one-left {
        flex: 2;
    }
    .item-one-left h1 {
        font-size: 3em;
    }
    .item-one-right {
        text-align: center;
        flex: 1;
    }
</style>