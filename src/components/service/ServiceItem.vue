<template>
    <div class="service-item">
        <img :src="imgUrl" alt="">
    </div>
</template>

<script>
    const s1 = require("../../assets/img/service/1.jpg")
    const s2 = require("../../assets/img/service/2.jpg")
    const s3 = require("../../assets/img/service/3.jpg")
    const s4 = require("../../assets/img/service/4.jpg")
    const s5 = require("../../assets/img/service/5.jpg")
    const s6 = require("../../assets/img/service/6.jpg")

    export default {
        name: "ServiceItem",
        data() {
            return {
                imgUrl: s1
            }
        },
        created() {
            switch (this.$route.query.sId) {
                case 1:
                    this.imgUrl = s1
                    break;
                case 2:
                    this.imgUrl = s2
                    break;
                case 3:
                    this.imgUrl = s3
                    break;
                case 4:
                    this.imgUrl = s4
                    break;
                case 5:
                    this.imgUrl = s5
                    break;
                case 6:
                    this.imgUrl = s6
                    break;
            }
        }
    }
</script>

<style scoped>
    .service-item img {
        width: 100%;
    }
</style>