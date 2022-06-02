<template>
  <div :class="{show:isShow}">
    <div class="container" :class="styleColor[i]" ref="slide">
      <h3 class="title">{{ title[i] }}</h3>
      <p v-for="item,index in poetry[i]" :key="index">{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    i: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      wordTime:null,
      isShow: false,
      title:["春","夏","秋","冬"],
      styleColor:["spring", "summer", "fall", "winter"],
      poetry:{
        0:[
          "放下一粒种子，收获一棵大树。",
          "知足是一种心态，一种人生修养，更是一种心灵体验。"
        ],
        1:[
          "有默然无语的宁静，亦有旭日初升的火热。",
          "有潮汐澎湃的激情，亦有明月照临的恬静。"
        ],
        2:[
          "枯黄的落叶，一片、两片，轻悠悠地飘落在水面上，",
          "像无数只的小船，顺风慢慢地荡走。"
        ],
        3:[
          "桂密岩花白，梨疏树叶红。",
          "江皋寒望尽，归念断征篷。"
        ]
      },
    }
  },
  methods: {
    wordMove() {
      this.isShow = true
      setTimeout(()=> {
        this.isShow = false
      },2000)
    }
  },
  computed: {
    slide() {
      return this.$refs.slide
    }
  },
  mounted() {
    this.wordTime = setInterval(this.wordMove, 8000)
  },
  destroyed() {
    clearInterval(this.wordTime)
  },
}
</script>

<style lang="less" scoped>
@keyframes wordSlid {
  0% {
    opacity: 0;
    left: -10%;
  }
  100% {
    opacity: 1;
    left: 10%;
  }
}
.show {
  animation: wordSlid 2s;
}
.container {
  padding: 50px 0 30px 0;
  text-align: center;
  .title {
    margin-bottom: 30px;
    font-size: 20px;
  }
  p {
    margin: 10px 0;
    font-weight: 900;
    font-size: 20px;
  }
}
.spring {
  .title {
    color: #8DC26F;
  }
  p {
    color: #76b852;
  }
}
.summer {
  .title {
    color: #CCCCB2;
  }
  p {
    color: #CCCCB2;
  }
}
.fall {
  .title {
    color: #FFD194;
  }
  p {
    color: #FFD194;
  }
}
.winter {
  .title {
    color: #fff;
  }
  p {
    color: #fff;
  }
}
</style>