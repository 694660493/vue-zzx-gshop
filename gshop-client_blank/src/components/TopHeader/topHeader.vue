<template>
  <!--隐藏和显示 title的传入-->
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>

    export default {
      name: "topHeader",
      props:{
        //vue中直接使用{{}}就能代表使用vue中的内容，{{title}}就是查找vue中的内容，会直接在data,props,(...)中查找
        title:String
      }
    }
</script>

<style scoped lang="stylus">
  .header //头部公共css
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
  .header_title
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 50%
    color #fff
    text-align center
    .header_title_text
      font-size 20px
      color #fff
      display block
</style>
