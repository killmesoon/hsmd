<template>
    <div>
        <!--顶部banner图-->
        <div class="topBanner">
            <img src="./image/banner.jpg" alt="">
        </div>
        <!--中间内容-->
        <div class="cenerContent">
            <!--公司位置信息-->
            <div class="location">
                <div class="map" id="container">
                    <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler"></baidu-map>
                </div>
                <div class="information">
                    <div>垂询热线：4006158816</div>
                    <div class="informationLocation">地址：深圳市龙岗区布吉街道环城南路5号</div>
                    <div>华视云朵：<a href="http://www.hotelyunos.com/">www.hotelyunos.com</a></div>
                    <div>华视美达官方网站：<a href="http://www.hotelyunos.com/">www.hotelyunos.com</a></div>
                    <div>华视远程管理系统：<a href="http://www.hsmedia.top:9800">http://www.hsmedia.top:9800</a></div>
                </div>
            </div>
            <!--分公司信息-->
            <div class="branch">
                <div class="branchList">
                    <div class="listItem">
                        <div class="listName">
                            <img src="./image/H..png" alt="">
                            <span>郑州分公司</span>
                        </div>
                        <div>地址：郑州市高新区总部企业基地82号楼8楼</div>
                    </div>
                    <div class="listItem">
                        <div class="listName">
                            <img src="./image/H..png" alt="">
                            <span>河北分公司</span>
                        </div>
                        <div>地址：郑州市高新区总部企业基地82号楼8楼</div>
                    </div>
                    <div class="listItem">
                        <div class="listName">
                            <img src="./image/H..png" alt="">
                            <span>海口分公司</span>
                        </div>
                        <div>地址：郑州市高新区</div>
                    </div>
                </div>
                <div class="branchList branchRight">
                    <div class="listItem">
                        <div class="listName">
                            <img src="./image/H..png" alt="">
                            <span>四川分公司</span>
                        </div>
                        <div>地址：郑州市高新区</div>
                    </div>
                    <div class="listItem">
                        <div class="listName">
                            <img src="./image/H..png" alt="">
                            <span>安徽分公司</span>
                        </div>
                        <div>地址：郑州市高新区总部企业基地82号楼8楼</div>
                    </div>
                    <div class="listItem">
                        <div class="listName">
                            <img src="./image/H..png" alt="">
                            <span>陕西分公司</span>
                        </div>
                        <div>地址：郑州市高新区总部企业基地82号楼8楼</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactUs",
        data() {
            return {
                center: {lng: 0, lat: 0},
                zoom: 3
            }
        },
        methods: {
            handler ({BMap, map}) {
                console.log(BMap)
                console.log(map)
                // this.center.lng = 113.65
                // this.center.lat = 34.76
                // this.zoom = 15
                var points = [
                    {"lng":113.65 ,"lat":34.76  ,"name":"深圳华视美达信息技术有限公司"}
                ];
                //116.29375,39.837923
                //创建标注点并添加到地图中
                //创建地图
                var m = new BMap.Map('container');
                function addMarker(points) {
                    //循环建立标注点
                    for(var i=0, pointsLen = points.length; i<pointsLen; i++) {
                        var point = new BMap.Point(points[i].lng, points[i].lat); //将标注点转化成地图上的点
                        var marker = new BMap.Marker(point); //将点转化成标注点
                        var label1=points[i].name;
                        var label = new BMap.Label(label1, {offset: new BMap.Size(15, -25)});
                        marker.setLabel(label);
                        // marker.setAnimation(BMap.Animation.BMAP_ANIMATION_BOUNCE); //跳动的动画
                        m.addOverlay(marker);  //将标注点添加到地图上

                    }
                }

                m.centerAndZoom(new BMap.Point(113.65,34.76 ), 14);  // 设置中心点
                addMarker(points);
            }
        }
    }
</script>

<style scoped>
    @import "css/contactUs.css";
</style>