<template>
    <div class="wrapper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
            <div class="swiper-slide"><img width="100%" :src="banner" alt=""></div>
            <div class="swiper-slide"><img width="100%" :src="banner1" alt=""></div>
            <div class="swiper-slide"><img width="100%" :src="banner2" alt=""></div>
            </div>
        </div>


        <div class="wrapper-item">
            <div class="item-container" @mouseover="changeIndex(1)" @mouseout="changeBack(1)">
                <div class="item-container-img">
                    <img :src="item1Src" alt="">
                </div>
            </div>
            <div class="item-container" @mouseover="changeIndex(3)" @mouseout="changeBack(3)">
                <div class="item-container-img">
                    <img :src="item3Src" alt="">
                </div>
            </div>
            <div class="item-container" @mouseover="changeIndex(4)" @mouseout="changeBack(4)">
                <div class="item-container-img">
                    <img :src="item4Src" alt="">
                </div>
            </div>
            <div class="item-container" @mouseover="changeIndex(5)" @mouseout="changeBack(5)">
                <div class="item-container-img">
                    <img :src="item5Src" alt="">
                </div>
            </div>
            <div class="item-container" @mouseover="changeIndex(2)" @mouseout="changeBack(2)">
                <div class="item-container-img">
                    <img :src="item2Src" alt="">
                </div>
            </div>
        </div>


        <div class="business-item">
            <div class="business-item-title">
                <h1>业务案例</h1>
                <div class="business-item-line">
                </div>
                <span><strong>Business Case</strong></span>
            </div>
            <div class="business-item-wrapper">
                <div class="business-item-case" style="text-align: right">
                    <img src="../../assets/img/business/wyn.jpg" alt="">
                </div>
                <div class="business-item-case" style="text-align: center">
                    <img src="../../assets/img/business/green.jpg" alt="">
                </div>
                <div class="business-item-case" style="text-align: left">
                    <img src="../../assets/img/business/yx.jpg" alt="">
                </div>
            </div>
            <div class="business-item-wrapper">
                <div class="business-item-case" style="text-align: right">
                    <img src="../../assets/img/business/y.jpg" alt="">
                </div>
                <div class="business-item-case" style="text-align: center">
                    <img src="../../assets/img/business/mh.jpg" alt="">
                </div>
                <div class="business-item-case" style="text-align: left">
                    <img src="../../assets/img/business/yd.jpg" alt="">
                </div>
            </div>
        </div>
        <div>
            <hs-scroll></hs-scroll>
        </div>


        <div class="business-item-title" style="clear: both">
            <h1>服务范围</h1>
            <div class="business-item-line">
            </div>
            <span><strong>Service Area</strong></span>
        </div>


        <div class="service">
            <div class="service-item">
                <div class="service-item-case">
                    <div class="service-item-case-box">
                        <img :src="serviceItem1" @mouseover="changeIndexService(1)" @mouseout="changeBackService(1)"  alt="">
                        <span>酒店</span>
                        <p>无论您是星级酒店，商务酒店或主题酒店等，我们酒店电视三剑客产品供您选择。</p>
                    </div>
                </div>
                <div class="service-item-case">
                    <div class="service-item-case-box">
                        <img :src="serviceItem2" @mouseover="changeIndexService(2)" @mouseout="changeBackService(2)" alt="">
                        <span>会所</span>
                        <p>我们的产品应用于各种类型，各种需求的场所使用，致力让您的服务更进一步。</p>
                    </div>
                </div>
                <div class="service-item-case">
                    <div class="service-item-case-box">
                        <img :src="serviceItem6" @mouseover="changeIndexService(6)" @mouseout="changeBackService(6)" alt="">
                        <span>社区</span>
                        <p>多元文化系统，更加实用实惠的方案，更少的开支，解决您的需求。</p>
                    </div>
                </div>
            </div>
            <div class="service-item" style="margin-top: 80px">
                <div class="service-item-case">
                    <div class="service-item-case-box">
                        <img :src="serviceItem3" @mouseover="changeIndexService(3)" @mouseout="changeBackService(3)" alt="">
                        <span>医院</span>
                        <p>医院介绍，科室分类，医师详情，定时插播，更搭载直播点播于一身的系统。</p>
                    </div>
                </div>
                <div class="service-item-case">
                    <div class="service-item-case-box">
                        <img :src="serviceItem4" @mouseover="changeIndexService(4)" @mouseout="changeBackService(4)" alt="">
                        <span>院校</span>
                        <p>院校介绍，课程分类，专业详情，定时插播，更搭载直播点播于一身的系统。</p>
                    </div>
                </div>
                <div class="service-item-case">
                    <div class="service-item-case-box">
                        <img :src="serviceItem5" @mouseover="changeIndexService(5)" @mouseout="changeBackService(5)" alt="">
                        <span>其他</span>
                        <p>华视美达在挖掘不同市场需求的同时，愿意倾听您不同的需求，为您创造不同。</p>
                    </div>
                </div>
            </div>
        </div>


        <div class="about-us"></div>


        <div class="business-item-title" style="clear: both">
            <h1>新闻中心</h1>
            <div class="business-item-line">
            </div>
            <span><strong>News Center</strong></span>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import HsScroll from '../scroll/HsScroll'
    //banner导入
    const banner = require("../../assets/img/BANNER.jpg")
    const banner1 = require("../../assets/img/BANNER1.jpg")
    const banner2 = require("../../assets/img/BANNER2.jpg")


    const item1Url = require("../../assets/img/item/item1.png")
    const item1UrlActive = require("../../assets/img/item/item1-pick.png")
    const item2Url = require("../../assets/img/item/item2.png")
    const item2UrlActive = require("../../assets/img/item/item2-pick.png")
    const item3Url = require("../../assets/img/item/item3.png")
    const item3UrlActive = require("../../assets/img/item/item3-pick.png")
    const item4Url = require("../../assets/img/item/item4.png")
    const item4UrlActive = require("../../assets/img/item/item4-pick.png")
    const item5Url = require("../../assets/img/item/item5.png")
    const item5UrlActive = require("../../assets/img/item/item5-pick.png")



    const s1Url = require("../../assets/img/service/s1.png")
    const s2Url = require("../../assets/img/service/s2.png")
    const s3Url = require("../../assets/img/service/s3.png")
    const s4Url = require("../../assets/img/service/s4.png")
    const s5Url = require("../../assets/img/service/s5.png")
    const s6Url = require("../../assets/img/service/s6.png")

    const s1UrlPick = require("../../assets/img/service/s1-pick.png")
    const s2UrlPick = require("../../assets/img/service/s2-pick.png")
    const s3UrlPick = require("../../assets/img/service/s3-pick.png")
    const s4UrlPick = require("../../assets/img/service/s4-pick.png")
    const s5UrlPick = require("../../assets/img/service/s5-pick.png")
    const s6UrlPick = require("../../assets/img/service/s6-pick.png")

    export default {
        name: "DashBoard",
        data() {
            return {
                item1Src: item1Url,
                item2Src: item2Url,
                item3Src: item3Url,
                item4Src: item4Url,
                item5Src: item5Url,
                serviceItem1:s1Url,
                serviceItem2:s2Url,
                serviceItem3:s3Url,
                serviceItem4:s4Url,
                serviceItem5:s5Url,
                serviceItem6:s6Url,
                banner: banner,
                banner1: banner1,
                banner2: banner2
            }
        },
        mounted() {
            new Swiper('.swiper-container', {
                loop: true,
                autoplay: true,
                speed: 1000
            })
        },
        methods: {
            changeIndex(index) {
                switch (index) {
                    case 1:
                        this.item1Src = item1UrlActive;
                        break;
                    case 2:
                        this.item2Src = item2UrlActive;
                        break;
                    case 3:
                        this.item3Src = item3UrlActive;
                        break;
                    case 4:
                        this.item4Src = item4UrlActive;
                        break;
                    case 5:
                        this.item5Src = item5UrlActive;
                        break;
                }
            },
            changeBack(index) {
                switch (index) {
                    case 1:
                        this.item1Src = item1Url;
                        break;
                    case 2:
                        this.item2Src = item2Url;
                        break;
                    case 3:
                        this.item3Src = item3Url;
                        break;
                    case 4:
                        this.item4Src = item4Url;
                        break;
                    case 5:
                        this.item5Src = item5Url;
                        break;
                }
            },
            changeIndexService(index) {
                switch (index) {
                    case 1:
                        this.serviceItem1 = s1UrlPick;
                        break;
                    case 2:
                        this.serviceItem2 = s2UrlPick;
                        break;
                    case 3:
                        this.serviceItem3 = s3UrlPick;
                        break;
                    case 4:
                        this.serviceItem4 = s4UrlPick;
                        break;
                    case 5:
                        this.serviceItem5 = s5UrlPick;
                        break;
                    case 6:
                        this.serviceItem6 = s6UrlPick;
                        break;
                }
            },
            changeBackService(index) {
                switch (index) {
                    case 1:
                        this.serviceItem1 = s1Url;
                        break;
                    case 2:
                        this.serviceItem2 = s2Url;
                        break;
                    case 3:
                        this.serviceItem3 = s3Url;
                        break;
                    case 4:
                        this.serviceItem4 = s4Url;
                        break;
                    case 5:
                        this.serviceItem5 = s5Url;
                        break;
                    case 6:
                        this.serviceItem6 = s6Url;
                        break;
                }
            }
        },
        components: {
            HsScroll
        }
    }
</script>

<style scoped>
    .wrapper {
        margin-top: 20px;
    }

    .wrapper-item {
        display: flex;
        width: 100%;
        height: 300px;
        vertical-align: middle;
    }

    .item-container {
        flex: 1;
        height: 250px;
        margin-top: 10px;
        padding: 10px 20px 0;
        border-left: 1px solid #aaa;
        cursor: pointer;
    }

    .item-container-img {
        width: 100%;
        margin-top: 35px;
        text-align: center;
    }

    /**
    业务案例
     */
    .business-item {
        width: 100%;
        height: 828px;
        background: url("../../assets/img/business/business-bg.png");
    }
    .business-item-title {
        width: 250px;
        height: 180px;
        margin: 0 auto;
        text-align: center;
        padding-top: 50px;
    }
    .business-item-line {
        width: 40px;
        height: 2px;
        margin: 0 auto 15px;
        border-top: 2px solid #ebb700;
    }

    .business-item-wrapper {
        width: 100%;
        height: 350px;
        display: flex;
    }
    .business-item-case {
        flex: 1;
    }
    .business-item-case > img {
        cursor: pointer;
    }

    .service {
        width: 100%;
        height: 600px;
        margin-top: 50px;
        margin-bottom: 100px;
    }

    .service-item {
        width: 70%;
        margin: 0 auto;
        height: 300px;
        display: flex;
    }
    .service-item-case {
        flex: 1;
    }

    .service-item-case-box {
        position: relative;
        width: 80%;
        margin: 0 auto;
        height: 240px;
        border: 2px solid #ccc;
        box-shadow: #ccc 5px 5px 15px;
    }

    .service-item-case-box > img {
        position: absolute;
        left: calc(50% - 43px);
        top: -43px;
        cursor: pointer;
    }
    .service-item-case-box > span {
        display: block;
        text-align: center;
        margin-top: 60px;
        font-size: 18px;
    }

    .service-item-case-box > p  {
        width: 90%;
        margin: 30px auto 0;
    }

    .about-us {
        width: 100%;
        height: 499px;
        background: url("../../assets/img/about-us.jpg") no-repeat;
        background-size: 100% 100%;
    }

</style>