<template>
    <div>
        <!--顶部banner图-->
        <div class="topBanner">
            <img src="./image/banner.jpg" alt="">
        </div>
        <!--中间内容-->
        <div class="cenerContent">
            <div class="top">
                <img src="./image/h.jpg" alt="">
            </div>
            <div class="container">
                <div class="container-swapper">
                    <div><img :src="imgUrl1" alt="" @mouseover="changeIndexService(1)" @mouseout="changeBackService(1)"></div>
                    <div><img :src="imgUrl2" alt="" @click="turnToWeb(1)" @mouseover="changeIndexService(2)" @mouseout="changeBackService(2)"></div>
                    <div><img :src="imgUrl3" alt="" @click="turnToWeb(2)" @mouseover="changeIndexService(3)" @mouseout="changeBackService(3)"></div>
                </div>
            </div>
            <div class="footer">
                <img src="./image/f.jpg" alt="">
            </div>
            <!--&lt;!&ndash;公司位置信息&ndash;&gt;-->
            <!--<div class="location">-->
                <!--<div class="map" id="container">-->
                    <!--<baidu-map class="map" :center="center" :zoom="zoom" @ready="handler"></baidu-map>-->
                <!--</div>-->
                <!--<div class="information">-->
                    <!--<div>垂询热线：4006158816</div>-->
                    <!--<div class="informationLocation">地址：深圳市龙岗区布吉街道环城南路5号</div>-->
                    <!--<div>华视云朵：<a href="http://www.hotelyunos.com/">www.hotelyunos.com</a></div>-->
                    <!--<div>华视美达官方网站：<a href="http://www.hotelyunos.com/">www.hotelyunos.com</a></div>-->
                    <!--<div>华视远程管理系统：<a href="http://www.hsmedia.top:9800">http://www.hsmedia.top:9800</a></div>-->
                <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;分公司信息&ndash;&gt;-->
            <!--<div class="branch">-->
                <!--<div class="branchList">-->
                    <!--<div class="listItem">-->
                        <!--<div class="listName">-->
                            <!--<img src="./image/H..png" alt="">-->
                            <!--<span>郑州分公司</span>-->
                        <!--</div>-->
                        <!--<div>地址：郑州市高新区总部企业基地82号楼8楼</div>-->
                    <!--</div>-->
                    <!--<div class="listItem">-->
                        <!--<div class="listName">-->
                            <!--<img src="./image/H..png" alt="">-->
                            <!--<span>四川分公司</span>-->
                        <!--</div>-->
                        <!--<div>地址：四川省成都市双流区海昌路天府菁蓉大厦</div>-->
                    <!--</div>-->
                    <!--<div class="listItem">-->
                        <!--<div class="listName">-->
                            <!--<img src="./image/H..png" alt="">-->
                            <!--<span>安徽分公司</span>-->
                        <!--</div>-->
                        <!--<div>地址：安徽省淮南市田家庵区龙湖路乐视生态体验店</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="branchList branchRight">-->
                    <!--<div class="listItem">-->
                        <!--<div class="listName">-->
                            <!--<img src="./image/H..png" alt="">-->
                            <!--<span>上海分公司</span>-->
                        <!--</div>-->
                        <!--<div>地址：上海市洛川东路487号</div>-->
                    <!--</div>-->
                    <!--<div class="listItem">-->
                        <!--<div class="listName">-->
                            <!--<img src="./image/H..png" alt="">-->
                            <!--<span>贵州分公司</span>-->
                        <!--</div>-->
                        <!--<div>地址：贵阳市观山湖区中天金融城MAX B座</div>-->
                    <!--</div>-->
                    <!--<div class="listItem">-->
                        <!--<div class="listName">-->
                            <!--<img src="./image/H..png" alt="">-->
                            <!--<span>湖北分公司</span>-->
                        <!--</div>-->
                        <!--<div>地址：武汉市武昌区中南二路奥山创意街区3栋</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->



        </div>
    </div>
</template>

<script>
    const s1 = require("./image/c1.png")
    const s2 = require("./image/c2.png")
    const s3 = require("./image/c3.png")

    const ss1 = require("./image/cc1.png")
    const ss2 = require("./image/cc2.png")
    const ss3 = require("./image/cc3.png")
    export default {
        name: "ContactUs",
        data() {
            return {
                // center: {lng: 0, lat: 0},
                // zoom: 3
                imgUrl1:s1,
                imgUrl2:s2,
                imgUrl3:s3,
            }
        },
        methods: {
            // handler ({BMap, map}) {
            //     console.log(BMap)
            //     console.log(map)
            //     // this.center.lng = 113.65
            //     // this.center.lat = 34.76
            //     // this.zoom = 15
            //     var points = [
            //         {"lng":114.0826 ,"lat":22.624516  ,"name":"深圳华视美达信息技术有限公司"}
            //     ];
            //     //116.29375,39.837923
            //     //创建标注点并添加到地图中
            //     //创建地图
            //     var m = new BMap.Map('container');
            //     function addMarker(points) {
            //         //循环建立标注点
            //         for(var i=0, pointsLen = points.length; i<pointsLen; i++) {
            //             var point = new BMap.Point(points[i].lng, points[i].lat); //将标注点转化成地图上的点
            //             var marker = new BMap.Marker(point); //将点转化成标注点
            //             var label1=points[i].name;
            //             var label = new BMap.Label(label1, {offset: new BMap.Size(15, -25)});
            //             marker.setLabel(label);
            //             // marker.setAnimation(BMap.Animation.BMAP_ANIMATION_BOUNCE); //跳动的动画
            //             m.addOverlay(marker);  //将标注点添加到地图上
            //
            //         }
            //     }
            //
            //     m.centerAndZoom(new BMap.Point(114.0826,22.624516), 14);  // 设置中心点
            //     addMarker(points);
            // }
            changeIndexService(index) {
                switch (index) {
                    case 1:
                        this.imgUrl1 = ss1;
                        break;
                    case 2:
                        this.imgUrl2 = ss2;
                        break;
                    case 3:
                        this.imgUrl3 = ss3;
                        break;
                }
            },
            changeBackService(index) {
                switch (index) {
                    case 1:
                        this.imgUrl1 = s1;
                        break;
                    case 2:
                        this.imgUrl2 = s2;
                        break;
                    case 3:
                        this.imgUrl3 = s3;
                        break;
                }
            },
            turnToWeb(index) {
                switch (index) {
                    case 1:
                        window.location.href = 'http://www.hsmedia.top:9800';
                        break
                    case 2:
                        window.location.href = 'http://www.hotelyunos.com';
                }
            }
        }
    }
</script>

<style scoped>
    @import "css/contactUs.css";
    .top img{
        width: 100%;
    }
    .footer img {
        width: 100%;
    }
    .container {
        width: 1205px;
        height: 180px;
    }
    .container-swapper {
        width: 80%;
        height: 100%;
        margin: 0 auto;
        display: flex;
    }
    .container-swapper > div {
        flex: 1;
        padding-top: 30px;
        text-align: center;
        cursor: pointer;
    }
</style>