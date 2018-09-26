<template>
    <div>
        <div class="header">
          <button v-on:click="goBack">返回</button>
        </div>
        <div class="title">
            {{title}}
        </div>
        <p v-html="summary">
        </p>
        <div class="content" v-html="content">
        </div>
    </div>
</template>
<script>
import axios from "axios";
import {getDetail} from '@/service/articleService'
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
  
</style>