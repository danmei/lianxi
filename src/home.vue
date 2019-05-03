<template>
  <el-container class="big">
    <el-header class="her" style="height:200px">晋煤集团赵庄煤业职工教育学习平台</el-header>
    <el-menu
      :default-active="activeIndex2"
      class="nav"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-menu-item index="index">首页</el-menu-item>
      <el-menu-item index="jianjie">机构简介</el-menu-item>
      <el-menu-item index="wenjian">文件制度</el-menu-item>
      <el-menu-item index="anquan">
        <a target="_blank">安全培训</a>
      </el-menu-item>
      <el-menu-item index="suzhi">素质提升</el-menu-item>
      <el-menu-item index="stu">在线学习</el-menu-item>
      <el-menu-item index="teach">讲师基地</el-menu-item>
      <el-menu-item index="diaocha">调查评估</el-menu-item>
      <el-menu-item index="dashi">大师工作室</el-menu-item>
      <el-menu-item index="contact">联系我们</el-menu-item>
    </el-menu>
    <el-main>
      <router-view></router-view>
    </el-main>

    <el-footer class="foo" style="height:300px;">
      友情链接：
      <a href="#">山西新闻网</a>
      <a href="#">山西煤炭信息网</a>
      <a href="#">中国煤炭网</a>
      <a href="#">晋煤集团</a>
      <p>地址：山西省长治市长子县慈林镇</p>
      <p>电话：03563600899</p>
      <p>主办：赵庄煤业人力资源部 技术支持：技术支持</p>
      <p>@2018 Baidu 使用百度前必读 意见反馈 京ICP证03073号 京公派网安备11000002000001号</p>
    </el-footer>
  </el-container>
</template>

<script>
export default {};
</script>

<style>
.big {
  height: 100%;
}
.her {
  text-align: center;
  line-height: 200px;
  background-color: #ccc;
  font-size: 40px;
  color: blue;
}

.foo {
  background-color: #ccc;
  text-align: center;
  line-height: 40px;
}
.foo a {
  text-decoration: none;
}
.foo p {
  font-size: 12px;
}
.input-with-select {
  height: 20px;
  width: 300px;
  /* float: right; */
  margin-right: 0;
}
el-carousel__item {
  width: 300px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  /* width: 300px; */
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.s {
  margin-left: 10px;
  display: block;
  width: 300px;
}
.z {
  margin-top: 10px;
  display: block;
  width: 300px;
}
.x {
  margin-top: 10px;
  width: 300px;

  display: block;
}
.img {
  margin-left: 10px;
  width: 300px;
  height: 200px;
  border: 1px solid #000;
}
.bar {
  background-image: url(./div.png);
  width: 100%;
}
.border {
  border-bottom: 3px solid blue;
}
.left {
  color: blue;
  font-size: 18px;
}
.right {
  color: blue;
  text-decoration: none;
  float: right;
}
.footer {
  margin-top: 30px;
}
</style>
