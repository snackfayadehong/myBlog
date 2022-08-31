<template>
  <div class="article-container">
    <el-card class="box-card" v-for="item in 5" :key="item" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>目前没有内容</span>
          <el-button class="button" text>阅读全文</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{ "List item " + o }}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Article"
};
</script>

<style lang="less" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #ffffff;
  opacity: 0.98;
  backdrop-filter: blur(20px);
}
.article-container {
  position: relative;
  width: 70%;
}
</style>
