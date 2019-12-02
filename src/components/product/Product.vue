<template>
    <div class="product">
        <div class="produce-wrapper">
        <ul class="nav">
            <li>
                <router-link to="/product/h6">边缘节点H6+</router-link>
            </li>
            <li>
                <router-link to="/product/hy">华视互娱</router-link>
            </li>
            <li>
                <router-link to="/product/yd">华视云朵2.0</router-link>
            </li>
            <li>
                <router-link to="/product/wg">多维投屏网关</router-link>
            </li>
            <li>
                <router-link to="/product/gq">高清编码器</router-link>
            </li>
            <li>
                <router-link to="/product/yj">"遇见"商城</router-link>
            </li>
        </ul>
        <div class="produce-item">
            <router-view></router-view>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Product"
    }
</script>

<style scoped>
    .product {
        position: relative;
    }
    a {
        color: #fff;
    }
    .nav {
        position: absolute;
        top: 20px;
        left: 10%;
    }
    .nav li {
        list-style-type: none;
    }

    .nav a {
        text-decoration: none;
        display: inline-block;
        height: 70px;
        line-height: 70px;
        width: 120px;
        text-align: center;
        background-color: #ebb700;
    }
    .router-link-active {
        opacity: 0.5;
    }
    .nav a:hover {
        opacity: 0.5;
    }
    .produce-wrapper {
        position: relative;
        height: 1200px;
    }

    .produce-item {
        width: 70%;
        position: absolute;
        left: calc(10% + 120px);
        height: 500px;
        top: 20px;
    }
</style>