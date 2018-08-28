<template>
    <div class="article">   
        <h2 class="title"><a :href="url">{{title}}</a></h2>
        <p class="summary" v-html="meta"></p>
    </div>    
</template>

<script>
    export default {
        name:'ArticleItem',
        props:{
            title:{
                type:String,
                default:'title'
            },
            meta:{
                type:String,
                default:'meta'
            },
            url:String
        },
        
    }
</script>

<style>
    .article{
        margin-bottom:30px;
    }
    .title{
        font-size: 18px;
        line-height: 1.7em;
        margin-bottom: 8px;
        color: #000;
    }
    .summary{
        color: #737373;
        font-size: 16px;
        line-height: 1.85em;
        margin-bottom: 24px;
    }
    a{
        text-decoration: none;
    }
</style>