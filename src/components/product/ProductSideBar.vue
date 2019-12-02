<template>
    <div class="side-bar">
        <ul class="nav">
            <li>
                <router-link to="/h6">边缘节点H6+</router-link>
            </li>
            <li>
                <router-link to="/yd">华视互娱</router-link>
            </li>
            <li>
                <router-link to="/yd">华视云朵2.0</router-link>
            </li>
            <li>
                <router-link to="/wg">多维投屏网关</router-link>
            </li>
            <li>
                <router-link to="/gq">高清编码器</router-link>
            </li>
            <li>
                <router-link to="/yj">"遇见"商城</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ProductSideBar"
    }
</script>

<style scoped>
    a {
        color: #fff;
    }
    .side-bar {
        width: 20%;
    }
    .nav {
        margin-top: 20px;
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
</style>