<template>
  <div class="box">我是APP
    <h1>新增一个标题</h1>
  </div>
</template>

<script setup lang="js">
const str = '我爱你中国'
for (let i = 0; i < 100; i++) {
  console.log(i)
}
</script>

<style scoped>
.box {
  width: 600px;
  height: 400px;
  background-color: black;
  h1 {
    color: white;
  }
}
</style>
