<template>
  <el-container class="big">
    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
      <el-button slot="append" icon="el-icon-search" class="soso"></el-button>
    </el-input>
    <el-row>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-carousel :interval="3000" arrow="always">
            <el-carousel-item v-for="item in 3" :key="item">
              <h3 style="width:300px;">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>通知公告</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <div v-for="o in 10" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="指纹登录" name="first">指纹登录</el-tab-pane>
            <el-tab-pane label="普通登录" name="second">普通登录</el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>安全培训</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <div v-for="o in 10" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>素质提升</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <div v-for="o in 10" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-button type="primary" class="s">资料下载</el-button>
          <el-button type="warning" class="z">大师工作室</el-button>
          <el-button type="success" class="x">在线学习</el-button>
          <div class="img"></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-container>
        <el-header class="bar" style="height:100px;"></el-header>
      </el-container>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <div class="border">
            <span class="left">精品课程</span>
            <a href="#" class="right">更多>></a>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="footer">
      <el-col :span="9">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>大师工作室</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <div v-for="o in 8" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>文件制度</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <div v-for="o in 8" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>疑问解答</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <div v-for="o in 6" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-carousel :interval="1000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
    <el-main class="mai"></el-main>
    <el-footer></el-footer>
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
