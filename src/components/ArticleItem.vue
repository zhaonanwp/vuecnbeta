<template>
    <div>
        <div class="article"> 
            <div class="item">
                <h2 class="title"><a :href="url">{{title}}</a></h2>
                <p class="summary" v-html="meta"></p>
                <div class="meta">
                    <span class="publish-time">发布于 {{publish_time}}</span>
                    <span class="view">{{mview}}次阅读</span>
                </div>
            </div>  
            <div class="item">
                <!--<img class="thumb" :src="thumb"/>-->
            </div>
        </div>
        <hr />    
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
            url:String,
            publish_time:String,
            thumb:String,
            mview:String
        },
        
    }
</script>

<style>
    .article{
        display: flex;
        flex-wrap: nowrap;
    }
    .item{
        flex: 0 1 auto
    }
    .title{
        font-size: 18px;
        line-height: 1.7em;
        margin-bottom: 8px;
        color: #000;
    }
    .summary{
        color: #737373;
        font-size: 14px;
        line-height: 1.85em;
        margin-bottom: 24px;
    }
    a{
        text-decoration: none;
    }
    .label{
        color: #ccc;
    }

    .label::before{
        content: '';
        position: absolute;
        left: 0;
        top: 2px;
        height: 13px;
        border-left: 2px solid #0059b2;
    }

    .thumb{
        margin-left: 15px;
        margin-top: 20px;
    }

    .meta{
        font-size:12px;
        margin-bottom: 10px;
        display: flex;

        justify-content: space-between 
    }

</style>