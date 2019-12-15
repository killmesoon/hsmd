<template>
    <div class="header">
        <div class="header-nav">
            <div class="nav-logo">
                <img src="../../assets/img/logo.png" alt="">
            </div>

            <ul class="nav">
                <li><router-link to="/dashboard">首页</router-link></li>
                <li><router-link to="/product">产品介绍</router-link></li>
                <li><router-link to="/business">业务案例</router-link></li>
                <li><router-link to="/serviceRange">服务范围</router-link></li>
                <li><router-link to="/test3">关于我们</router-link></li>
                <li><router-link to="/test4">新闻中心</router-link></li>
                <li><router-link to="/contactUs">联系我们</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HsHeader"
    }
</script>

<style scoped>
    a {
        color: black;
    }
    .header-nav {
        position: relative;
    }
    .router-link-active {
        color: #ebb700;
        border-bottom: 2px solid #ebb700;
    }
    .nav {
        list-style-type: none;
        height: 70px;
        padding-top: 20px;
    }
    .nav a {
        display: inline-block;
        text-decoration: none;
        height: 70px;
    }
    .nav-logo {
        display: inline-block;
        float: left;
        width: 50%;
        text-align: center;
    }
    .nav a:hover {
        color: #ebb700;
        cursor: pointer;
        border-bottom: 2px solid #ebb700;
    }
    .nav > li {
        display: inline-block;
        float: left;
        line-height: 70px;
        margin-right: 20px;
    }
</style>