<template>
    <div class="business-scroll">
        <div class="text-wrapper"><span>当然，还有更多</span></div>
        <vue-seamless-scroll :data="srcList" :class-option="optionLeft" class="seamless-warp2">
            <ul class="item">
                <li v-for="item in srcList" :key="item.id">
                    <img :src="item.src" alt="">
                </li>
            </ul>
        </vue-seamless-scroll>
    </div>
</template>

<script>
    import vueSeamlessScroll from 'vue-seamless-scroll'

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
                        id: 1,
                        src: s1
                    },
                    {
                        id: 2,
                        src: s2
                    },
                    {
                        id: 3,
                        src: s3
                    },
                    {
                        id: 4,
                        src: s4
                    },
                    {
                        id: 5,
                        src: s5
                    },
                    {
                        id: 6,
                        src: s6
                    },
                    {
                        id: 7,
                        src: s7
                    },
                    {
                        id: 8,
                        src: s8
                    },
                    {
                        id: 9,
                        src: s9
                    },
                    {
                        id: 10,
                        src: s10
                    },
                    {
                        id: 11,
                        src: s11
                    },
                    {
                        id: 12,
                        src: s12
                    },
                ]
            }
        },
        components: {
            vueSeamlessScroll
        },
        computed: {
            optionLeft() {
                return {
                    direction: 2,
                    limitMoveNum: 5
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .seamless-warp2 {
        overflow: hidden;
        height: 200px;
        width: 1200px;
        margin: 0 auto;

        ul.item {
            margin-top: 20px;
            width: 2800px;

            li {
                float: left;
                margin-right: 10px;
                list-style-type: none;
                width: 220px;
                text-align: center;
                img {
                    width: 180px;
                    height: 135px;
                }
            }
        }
    }
    .business-scroll {
        width: 100%;
        height: 300px;
        background: url("../../assets/img/business/scroll-bg.png") no-repeat;
        background-size: 100% 100%;
    }
    .business-scroll span {
        color: #fff;
        display: inline-block;
        height: 70px;
        line-height: 70px;
        margin: 0 auto;
    }
    .text-wrapper {
        text-align: center;
    }
</style>