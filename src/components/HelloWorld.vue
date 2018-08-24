<template>
  <div class="hello">

    <article-item 
      v-for="article in list"
      v-bind:title="article.title"
      v-bind:meta="article.hometext"
      v-bind:key="article.sid"
      v-bind:url="article.url_show"
    >
    </article-item>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  components:{ArticleItem},
  props: {
    msg: {
      type:String,
      default:'Welcome'
    }
  },
  data:function () {
    return {
      list:[]
    }
  },
  methods:{
    init:function(){
         axios.get('http://localhost:1337/articles/init')
         .then(response=>{
           //this.msg = response.data;
           console.info(response.data);
        })
    }
  },
  mounted(){
     axios.get('http://localhost:1337/articles/init')
         .then(response=>{
           console.info(response.data);
           window.localStorage.setItem('token',response.data.token);
        
          axios.get('http://localhost:1337/articles/'+response.data.token+'/1')
          .then(res=>{
              //this.msg = res.data;
              this.list = res.data.list;
          })
        })
  }
}
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
</style>
