<template>
    <div class="container">
        <div class="service-item" style="background-color: #fff">
            <div class="service-container">
                <div class="service-container-img">
                    <img src="../../assets/img/service/range1.png" alt="">
                </div>
            </div>
            <div class="service-container">
                <div>
                    <div class="container-wrapper">
                        <img src="../../assets/img/service/r1.png" alt="">
                        <span>酒店</span>
                    </div>

                    <p>无论您是星级酒店，商务酒店或主题酒店等，我们酒店<br/>电视系统三剑客产品供您选择</p>
                </div>
            </div>
        </div>
        <div class="service-item" style="background-color: #efe6d6">
            <div class="service-container">
                <div>
                    <div class="container-wrapper left">
                        <img src="../../assets/img/service/r2.png" alt="">
                        <span>会所</span>
                    </div>

                    <p class="left">我们的产品应用于各种类型，各种需求的场所使用致<br/>力让您的服务更进一步</p>
                </div>
            </div>
            <div class="service-container">
                <div class="service-container-img">
                    <img src="../../assets/img/service/range2.png" alt="">
                </div>
            </div>
        </div>
        <div class="service-item" style="background-color: #fff">
            <div class="service-container">
                <div class="service-container-img">
                    <img src="../../assets/img/service/range3.png" alt="">
                </div>
            </div>
            <div class="service-container">
                <div>
                    <div class="container-wrapper">
                        <img src="../../assets/img/service/r3.png" alt="">
                        <span>监狱</span>
                    </div>

                    <p>计划任务，定时播出，节目编辑。</p>
                </div>
            </div>
        </div>
        <div class="service-item" style="background-color: #efe6d6">
            <div class="service-container">
                <div>
                    <div class="container-wrapper left">
                        <img src="../../assets/img/service/r4.png" alt="">
                        <span>医院</span>
                    </div>
                    <p class="left">医院介绍，科室分类，医师详情，定时播报更搭载直<br/>播点播于一身的系统。</p>
                </div>
            </div>
            <div class="service-container">
                <div class="service-container-img">
                    <img src="../../assets/img/service/range4.png" alt="">
                </div>
            </div>
        </div>
        <div class="service-item" style="background-color: #fff">
            <div class="service-container">
                <div class="service-container-img">
                    <img src="../../assets/img/service/range5.png" alt="">
                </div>
            </div>
            <div class="service-container">
                <div>
                    <div class="container-wrapper">
                        <img src="../../assets/img/service/r5.png" alt="">
                        <span>院校</span>
                    </div>

                    <p>多元化的系统，更加实用实惠的方案，更好的开始，解<br/>决您的需求。</p>
                </div>
            </div>
        </div>
        <div class="service-item" style="background-color: #efe6d6">
            <div class="service-container">
                <div>
                    <div class="container-wrapper left">
                        <img src="../../assets/img/service/r6.png" alt="">
                        <span>其他</span>
                    </div>
                    <p class="left">华视美达在挖掘不同市场需求的同时，愿意倾听您不同<br/>的需求，为您创造不同。</p>
                </div>
            </div>
            <div class="service-container">
                <div class="service-container-img">
                    <img src="../../assets/img/service/range6.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ServiceRange"
    }
</script>

<style scoped>
    .container {
        width: 100%;
    }
    .service-item {
        width: 50%;
        height: 300px;
        margin:  0 auto;
        display: flex;
    }
    .service-container {
        flex: 1;
        padding-top: 15px;
        cursor: pointer;
    }
    .service-container-img {
        width: 80%;
        margin: 0 auto;
    }
    .container-wrapper {
        margin-bottom: 10px;
        padding-top: 20px;
        margin-top: 65px;
    }
    .left {
        padding-left: 50px;
    }
    .service-container span {
        color: #ebb700;
        display: inline-block;
        margin-left: 20px;
        margin-top: -20px;
    }
    .service-item:hover {
        /*从中心开始放大*/
        transform: scale(1.1);
    }
</style>