<template>
    <div class="detail">
        <div class="header">
          <img class="close" src="../assets/close.png" v-on:click="goBack">
        </div>
        
        <h3 class="detail-title">
            {{title}}
        </h3>
        <div class="summary" v-html="summary">
        </div>
        <div class="content" v-html="content">
        </div>
    </div>
</template>
<script>
import { getDetail } from "@/service/articleService";
export default {
  name: "articleDetail",
  props: ["sid"],
  data: function() {
    return {
      title: "",
      summary: "",
      content: ""
    };
  },
  watch: {
    $route(to, from) {
      // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
      console.log(to);
      console.log(from);
    }
  },
  methods: {
    loadHtml(sid) {
      getDetail(sid).then(res => {
        console.info(res);
        let data = res.data;
        this.title = data.title;
        this.summary = data.summary;
        this.content = data.content;
      });
    },
    goBack() {
      debugger;
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  created() {
    this.loadHtml(this.$route.params.sid);
  }
};
</script>

<style>
.detail {
  overflow: auto;
  font-family: "DENGXIAN";
}
.detail-title{
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;
}
.summary{
  padding-left:20px;
  padding-right: 20px;
}
.content{
  padding-left: 20px;
  padding-right: 20px;
}
.close {
  width: 15px;
  height: 15px;
  padding-top: 10px;
  padding-left: 5px;
}

img {
  max-width: 100%;
  max-height: 100%;
}
.header{
  border-bottom: 1px;
  border-color: black;
}
</style>