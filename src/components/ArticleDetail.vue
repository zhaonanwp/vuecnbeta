<template>

    <div>
        <div class="header">
          <button @:click="goBack">返回</button>
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
      debugger;
      axios.get("http://localhost:1337/articles/detail/" + sid).then(res => {
        console.info(res);
        let data = res.data;
        this.title = data.title;
        this.summary = data.summary;
        this.content = data.content;
      });
    }, 
    goBack() {
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