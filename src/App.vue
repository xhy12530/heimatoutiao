<template>
  <div id="app">
    <!-- <h1>黑马头条</h1>
    <TouTiaoIcon icon="sousuo"></TouTiaoIcon>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <h2>热门</h2>
    <span>撒旦</span> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped lang="less"></style>
