<template>
  <div class="hello" v-scroll="next">
    <article-item 
      v-for="article in list"
      v-bind:title="article.title"
      v-bind:meta="article.hometext"
      v-bind:key="article.sid"
      v-bind:url="article.url_show"
      v-bind:publish_time="article.inputtime" 
      v-bind:thumb="article.thumb"
      v-bind:mview="article.mview"
      v-bind:sid="article.sid"
    >
    </article-item>
    <div class="bottom">
          <div class="spinner spinnerOne" v-if="loading"></div>
    </div>

  </div>
</template>

<script>
import ArticleItem from "@/components/ArticleItem";
import {getList,getToken} from '@/service/articleService';

export default {
  name: "HelloWorld",
  components: { ArticleItem },
  data: function() {
    return {
      list: [],
      page: 1,
      loading: false,
      token: ""
    };
  },
  methods: {
    loadMore() {
      getList(this.token, this.page).then(res => {
        debugger;
        this.list = this.list.concat(res.data.list);
        this.loading = false;
      });
    },
    next() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.page++;
      this.loadMore();

      console.info("this way");
    }
  },
  mounted() {
    if (this.list.length == 0) {
      this.loading = true;
      getToken().then(response => {
        console.info(response.data);
        this.token = response.data.token;
        window.localStorage.setItem("token", response.data.token);
        this.loadMore();
      });
    }
  },

  directives: {
    scroll: {
      bind: function(el, binding) {
        window.addEventListener("scroll", () => {
          this.loading = false;
          this.loadMore();
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  margin-top: 20px;
  font-family: "DENGXIAN";
}

.bottom {
  display: flex;
  justify-content: center;
}

.spinner {
  border-radius: 50%;
  margin: 20px;
  display: inline-block;
  position: relative;
  height: 60px;
  width: 60px;
  background-color: #e0e0eb;
}

.spinnerOne::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  top: -5px;
  left: -5px;
  height: 60px;
  width: 60px;
  border: 5px solid transparent;
  border-top-color: #7389ae;
  animation: spinneroneani 1s linear infinite;
}

@keyframes spinneroneani {
  25% {
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: #05a8aa;
  }
  50% {
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: #416788;
    border-left-color: transparent;
    transform: rotate(180deg) scale(1.2);
  }
  75% {
    border-top-color: transparent;
    border-right-color: #2f6690;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  100% {
    border-top-color: #7389ae;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    transform: rotate(360deg) scale(1);
  }
}
</style>
