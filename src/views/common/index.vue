<template>
  <!-- 以防路由问题,改由动态组件来完成操作 -->
  <div class="mainbox">
    <!-- logo区域 -->
    <div class="logo">
      <span>
        复刻.口袋
      </span>
    </div>
    <!-- 左侧菜单栏区域 -->
    <div class="slider">
      <div class="slider_item_outside">
          野外探险
      </div>
      <div class="slider_item_center">
          中心城镇
      </div>
      <div class="slider_item_pet">
          宠物资料
      </div>
      <div class="slider_item_mine">
          个人信息
      </div>
    </div>
    <!-- 导航栏区域 -->
    <div class="nav">
      <div class="nav_box">
        <div class="nav_box_item nav_box_item_bag">
          <span>背包</span>
        </div>
        <div class="nav_box_item nav_box_item_equip">
          <span>装备</span>
        </div>
        <div class="nav_box_item nav_box_item_task">
          <span>任务</span>
        </div>
        <div class="nav_box_item nav_box_item_collect">
          <span>收藏</span>
        </div>
      </div>
    </div>
    <!-- 核心操作区域 -->
    <div class="content"></div>
    <!-- 底部聊天框 -->
    <div class="chart">
      <!-- 聊天框内容页 -->
      <div class="chart_content"></div>
      <!-- 聊天框消息 -->
      <div class="chart_message"></div>
    </div>
    <!-- 系统公告 -->
    <div class="notice">
      <div class="notice_seach">
        <label>口袋百科</label>
        <input type="text" class="search_content">
        <label class="btn_search">搜索</label>
      </div>
      <div class="notice_box">
        <span>系统公告</span>
        <p v-for="x,key in notice" :title="x.msg">{{key+1}}:{{x.msg}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //系统公告
      notice:[
        {msg:'开始绘制'},
        {msg:'测试'},
        {msg:'测试例子'}
      ]
    };
  }
};
</script>

<style lang='scss'>
.mainbox {
  width: 1100px;
  height: 650px;
  border: 1px solid black;
  position: absolute;
  top: 0;
  left: 0;
  div {
    position: absolute;
  }
}

.logo {
  width: 200px;
  height: 100px;
  left: 0;
  top: 0;
  border: 1px solid black;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
}

.nav {
  width: 900px;
  height: 50px;
  left: 200px;
  top: 0;
  border: 1px solid black;
  .nav_box {
    height: 50px;
    top:0;
    float: right;
    width: 205px;
    position: relative;
    .nav_box_item {
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      display: inline-block;
      cursor: pointer;
    }
    .nav_box_item_bag {
      right: 150px;
    }
    .nav_box_item_equip {
      right: 100px;
    }
    .nav_box_item_task {
      right: 50px;
    }
    .nav_box_item_collect {
      right: 0;
    }
  }
}

.slider {
  width: 200px;
  height: 250px;
  top: 100px;
  left: 0;
  border: 1px solid black;
  .slider_item_outside,
  .slider_item_center,
  .slider_item_pet,
  .slider_item_mine {
    position: relative;
    line-height:60px;
    width:100%;
    text-align: center;
    cursor: pointer;
  }
}

.content {
  left: 200px;
  width: 900px;
  height: 300px;
  top: 50px;
  border: 1px solid black;
}

.chart {
  width: 710px;
  height: 300px;
  border: 1px solid black;
  top: 350px;
  left: 0;
  .chart_message{
    height: 40px;
    width: 100%;
    border:1px solid black;
    left: 0;
    bottom: 0;
  }
  .chart_content{
    left: 0;
    top:0;
    width: 100%;
    height:260px;
    border:1px solid black;
  }
}

.notice {
  width: 390px;
  height: 300px;
  border: 1px solid black;
  top: 350px;
  left: 710px;
  .notice_box{
    width: 290px;
    height:200px;
    margin: 50px;
    border:1px solid black;
    p{
      width: 240px;
      line-height: 30px;
      overflow:hidden;
      text-overflow:ellipsis; 
      white-space: nowrap;
    }
    span{
      display: block;
      line-height: 50px;
      text-align: center;
    }
  }
  .notice_seach{
    width: 290px;
    line-height:30px;
    margin-top:10px;
    margin-left: 50px;
    border:1px solid black;
    vertical-align: middle; 
    height: 30px;
    label,input{
      position: absolute;
    }
    input{
      outline: none;
      height: 20px;
      box-sizing: border-box;
      left: 80px;
      width: 140px;
      margin-top:6px;
      border: 1px solid black;
      padding-left: 5px;
      border-radius: 5px;
    }
    label:nth-child(1){
      width: 80px;
    }
    
    .btn_search{
      width: 40px;
      left: 240px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      margin-top:6px;
      cursor: pointer;
      border:1px solid black;
      font-size: 12px;
      border-radius: 5px;
    }
  }
}
</style>
