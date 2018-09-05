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
    >
    </article-item>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'
import request from '@/utils/request'

export default {
  name: 'HelloWorld',
  components:{ArticleItem},
  data:function () {
    return {
      list:[],
      page:1,
      loading:false,
      token:''
    }
  },
  methods:{
    loadMore(){
         request.get('articles/'+ this.token+'/'+ this.page)
          .then(res=>{
              debugger;
              this.list = this.list.concat(res.data.list);
              this.loading = false;
        })
    },
    next(){
      if(this.loading){
        return;
      }
      this.loading = true;
      this.page++;
      this.loadMore();

      console.info('this way');
    }
  },
  mounted(){
     request.get('articles/init')
         .then(response=>{
           console.info(response.data);
           this.token = response.data.token;
           window.localStorage.setItem('token',response.data.token);
        
           this.loadMore();
      })
  },
  directives:{
      scroll:{
      bind:function(el,binding){
       window.addEventListener('scroll', ()=> {

        if(el.clientHeight >0 && document.documentElement.scrollTop + window.innerHeight >= el.clientHeight) {
          
           console.log('load data');
           let fnc = binding.value;   
           fnc(); 
        }
      })
    }
  }
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

.hello{
  padding-left:20px;
  padding-right:20px;
  margin-top:20px;
  font-family:"DENGXIAN";
}
</style>
