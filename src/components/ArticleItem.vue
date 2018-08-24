<template>
    <div class="article">   
        <h5><a :href="url">{{title}}</a></h5>
        <small class="text-muted" v-html="meta"></small>
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
</style>