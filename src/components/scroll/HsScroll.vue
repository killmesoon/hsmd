<template>
    <!--<div class="container z-bigger">-->
        <!--<div class="twelve columns" data-scroll-reveal="enter bottom move 150px over 0.7s after 0.2s">-->
            <!--<div id="owl-logos" class="owl-carousel owl-theme">-->
                <!--<div class="item" v-for="item of srcList" :key="item.id">-->
                    <!--<img  :src="item.src" alt="" />-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
    <vue-seamless-scroll :data="srcList" :class-option="optionLeft" class="seamless-warp2">
        <ul class="item">
            <li v-for="item in srcList" :key="item.id">
                <img :src="item.src" alt="">
            </li>
        </ul>
    </vue-seamless-scroll>
</template>

<script>
    import VueSeamlessScroll from 'vue-seamless-scroll';

    const s1 = require("../../assets/img/scroll/1.png")
    const s2 = require("../../assets/img/scroll/2.png")
    const s3 = require("../../assets/img/scroll/3.png")
    const s4 = require("../../assets/img/scroll/4.png")
    const s5 = require("../../assets/img/scroll/5.png")
    const s6 = require("../../assets/img/scroll/6.png")
    const s7 = require("../../assets/img/scroll/7.png")
    const s8 = require("../../assets/img/scroll/8.png")
    const s9 = require("../../assets/img/scroll/9.png")
    const s10 = require("../../assets/img/scroll/10.png")
    const s11 = require("../../assets/img/scroll/11.png")
    const s12 = require("../../assets/img/scroll/12.png")

    export default {
        name: "HsScroll",
        data() {
            return {
                srcList: [
                    {
                        id:1,
                        src:s1
                    },
                    {
                        id:2,
                        src:s2
                    },
                    {
                        id:3,
                        src:s3
                    },
                    {
                        id:4,
                        src:s4
                    },
                    {
                        id:5,
                        src:s5
                    },
                    {
                        id:6,
                        src:s6
                    },
                    {
                        id:7,
                        src:s7
                    },
                    {
                        id:8,
                        src:s8
                    },
                    {
                        id:9,
                        src:s9
                    },
                    {
                        id:10,
                        src:s10
                    },
                    {
                        id:11,
                        src:s11
                    },
                    {
                        id:12,
                        src:s12
                    },
                ]
            }
        },
        computed: {
            optionLeft () {
                return {
                    direction: 2,
                    limitMoveNum: 2
                }
            }
        },
        components: {
            VueSeamlessScroll
        }
    }
</script>

<style scoped>
    .seamless-warp2 {
        overflow: hidden;
        height: 25px;
        width: 380px;
    }
    ul.item {
        width: 580px;

    }
    li {
        float: left;
        margin-right: 10px;
    }
</style>