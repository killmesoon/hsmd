<template>
    <div class="main">
        <div class="banner">
            <img src="../../assets/img/business/business_banner.png" alt="">
        </div>
        <div class="business-container">
            <div class="content">
                <div class="box">
                    <div class="pic-box">
                        <img src="../../assets/img/business/wyn.jpg" alt="">
                    </div>
                    <div class="pic-box">
                        <img src="../../assets/img/business/green.jpg" alt="">
                    </div>
                </div>
                <div class="box">
                    <div class="pic-box">
                        <img src="../../assets/img/business/mh.jpg" alt="">
                    </div>
                    <div class="pic-box">
                        <img src="../../assets/img/business/y.jpg" alt="">
                    </div>
                </div>
                <div class="box">
                    <div class="pic-box">
                        <img src="../../assets/img/business/yd.jpg" alt="">
                    </div>
                    <div class="pic-box">
                        <img src="../../assets/img/business/yx.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Business"
    }
</script>

<style scoped>
    .banner img {
        width: 100%;
    }

    .business-container {
        width: 100%;
    }

    .content {
        width: 40%;
        margin: 0 auto;
        height: 828px;
        background: url("../../assets/img/business/business-bg.png") no-repeat;
    }

    .box {
        display: flex;
    }

    .pic-box {
        flex: 1;
        text-align: center;
        margin-top: 50px;
    }
</style>