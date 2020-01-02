<template>
    <div class="container-wrapper">
        <div class="news-banner">
        </div>
        <div class="news-container">
            <div class="news-container-item">
                <div class="item-container">
                    <img src="../../assets/img/news/news4.jpg" alt="">
                    <div class="text-container" @click="openItem(4)">
                        <div class="text-container-left">
                            <img src="../../components/contact/image/H..png" alt="">
                        </div>
                        <div class="text-container-right">
                            <p>华视美达亮相Hotel Plus2019</p>
                            <p style="color: #7f7f7f">2019-03-01</p>
                        </div>
                        <div class="text-container-down">
                            <p>2019年4月25-27日，华视美达亮相上海国际酒店工<br/>程设计与用品博览会，本次华视美达主要展示小美AI场景<br/>机器人、华视云朵&点播分成平台以及9款UI和50多款应<br/>用自由搭配组合等，受到行业的同仁们的关注和肯定！
                            </p>
                        </div>
                        <div class="icon-more">
                            <img src="../../assets/img/news/more.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="news-container-item">
                <div class="item-container">
                    <!--<div class="container-right" @click="openItem(2)">-->
                        <!--<div style="position: relative">-->
                            <!--<div class="text-container-left">-->
                                <!--<img src="../../components/contact/image/H..png" alt="">-->
                            <!--</div>-->
                            <!--<div class="text-container-right">-->
                                <!--<p>青岛海信史总莅临华视美达考察</p>-->
                                <!--<p style="color: #7f7f7f">2018-12-19</p>-->
                            <!--</div>-->
                            <!--<div class="text-container-down" style="top: 70px">-->
                                <!--<p style="line-height: 25px;">-->
                                    <!--2018年12月19日，青岛海信电器营销股份有限公司<br/>史全华先生莅临华视美达郑州公司进行考察，就双方技术<br/>合作达成共识</p>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                    <div class="container-right center" @click="openItem(3)">
                        <div style="position: relative">
                            <div class="text-container-left">
                                <img src="../../components/contact/image/H..png" alt="">
                            </div>
                            <div class="text-container-right">
                                <p>华视美达亮相CCBN</p>
                                <p style="color: #7f7f7f">2019-04-25</p>
                            </div>
                            <div class="text-container-down" style="top: 70px">
                                <p style="line-height: 25px;">2019年4月25-27日，华视美达亮相《上海国际酒店<br/>工程设计与用品博览会。</p>
                            </div>
                        </div>
                    </div>
                    <div class="container-right" @click="openItem(1)">
                        <div style="position: relative">
                            <div class="text-container-left">
                                <img src="../../components/contact/image/H..png" alt="">
                            </div>
                            <div class="text-container-right">
                                <p>2019年新品发布暨渠道伙伴联营大会</p>
                                <p style="color: #7f7f7f">2019-08-29</p>
                            </div>
                            <div class="text-container-down" style="top: 70px">
                                <p style="line-height: 25px;">2019年8月29日，深圳华视美达信息技术有限公司<br/>召开《2019年新品发布暨合作渠道伙伴联营大会》。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
                :title="title"
                :visible.sync="dialogVisible"
                width="30%">
            <div style="max-height: 500px;overflow: auto">
            <div style="text-align: center"><img width="100%" :src="dialogImg" alt=""></div>
            <div style="margin-top: 20px">
                <p style="text-indent: 2em">{{newsText}}</p>
            </div>
            <span slot="footer" class="dialog-footer">
    <!--<el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
  </span>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    const news1 = require("../../assets/img/news/news1.jpg")
    const news2 = require("../../assets/img/news/news2.jpg")
    const news3 = require("../../assets/img/news/news3.jpg")
    const news4 = require("../../assets/img/news/news4.jpg")

    const text1 = "2019年4月25-27日，华视美达亮相上海国际酒店工程设计与用品博览会，本次华视美达主要展示小美AI场景机器人、华视云朵&点播分成平台以及9款UI和50多款应用自由搭配组合等，受到行业的同仁们的关注和肯定！";
    const text2 = "2018年12月19日，青岛海信电器营销股份有限公司\n" +
        "史全华先生莅临华视美达郑州公司进行考察，就双方技术\n" +
        "合作达成共识"
    const text3 = "2019年4月25-27日，华视美达亮相《上海国际酒店\n" +
        "工程设计与用品博览会。"
    const text4 = "2019年8月29日，深圳华视美达信息技术有限公司\n" +
        "召开《2019年新品发布暨合作渠道伙伴联营大会》。"


    const title1 = "2019年新品发布暨渠道伙伴联营大会"
    const title2 = "青岛海信史总莅临华视美达考察"
    const title3 = "华视美达亮相CCBN"
    const title4 = "华视美达亮相Hotel Plus2019"

    export default {
        name: "NewsCenter",
        data() {
            return {
                dialogVisible: false,
                title: '提示',
                dialogImg: news1,
                newsText: '2019年4月25-27日，华视美达亮相上海国际酒店工程设计与用品博览会，本次华视美达主要展示小美AI场景机器人、华视云朵&点播分成平台以及9款UI和50多款应用自由搭配组合等，受到行业的同仁们的关注和肯定！'
            };
        },
        methods: {
            openItem(index) {
                this.dialogVisible = true;
                switch (index) {
                    case 1:
                        this.dialogImg = news1
                        this.newsText = text4
                        this.title = title1
                        break;
                    case 2:
                        this.dialogImg = news2
                        this.newsText = text2
                        this.title = title2
                        break;
                    case 3:
                        this.dialogImg = news3
                        this.newsText = text3
                        this.title = title3
                        break;
                    case 4:
                        this.dialogImg = news4
                        this.newsText = text1
                        this.title = title4
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    .news-banner {
        width: 100%;
        height: 421px;
        background: url("../../assets/img/news/news-banner.png");
        background-size: 100% 100%;
    }

    .news-container {
        width: 1205px;
        margin: 0 auto;
        display: flex;
        height: 700px;
        background-color: #fff;
    }

    .news-container-item {
        flex: 1;
        padding-top: 50px;
    }

    .item-container {
        width: 450px;
        height: 80%;
        margin: 0 auto;
    }

    .item-container img {
        width: 100%;
    }

    .text-container {
        width: 100%;
        position: relative;
        background-color: #f6f6f6;
        height: 267px;
        cursor: pointer;
    }

    .text-container:hover {
        background-color: #fff1da;
    }

    .text-container-left {
        position: absolute;
        left: 40px;
        top: 10px;
        height: 60px;
    }

    .text-container-right {
        position: absolute;
        left: 120px;
        top: 10px;
        height: 60px;
    }

    .text-container-right p {
        margin-top: 6px;
    }

    .text-container-down {
        position: absolute;
        top: 80px;
        left: 40px;
        height: 130px;
    }

    .text-container-down p {
        text-indent: 2em;
        line-height: 28px;
    }

    .container-right {
        width: 450px;
        height: calc((100% - 60px) / 3);
        background-color: #f6f6f6;
        cursor: pointer;
    }

    .container-right:hover {
        background-color: #fff1da;
    }

    .center {
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .icon-more {
        position: absolute;
        bottom: 15px;
        right: 15px;
    }

</style>