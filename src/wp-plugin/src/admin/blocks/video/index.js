!function(){"use strict";!function(){var e=window.wp.blocks,t=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"tradecast/video","title":"Tradecast Video","textdomain":"tradecast","icon":"video-alt3","category":"media","example":{},"attributes":{"videoId":{"type":"number","default":""}},"editorScript":"file:./index.js","style":"file:./style.css"}'),a=window.wp.element,r=window.wp.compose,o=window.wp.blockEditor,n=window.wp.data,d=window.wp.components,i=(0,r.compose)([(0,n.withSelect)(((e,t)=>({entities:e("core").getEntityRecords("postType","tradecast-videos",{page:1,perPage:25,orderBy:"date",order:"desc",search:t.attributes.query}),current:e("core").getEntityRecord("postType","tradecast-videos",t.attributes.videoId)})))])((e=>{var t,r;const{attributes:{videoId:n},entities:i,current:l}=e,s=(0,o.useBlockProps)({});return i||l?(0,a.createElement)("div",s,(0,a.createElement)(d.Card,null,(0,a.createElement)(d.CardHeader,null,(0,a.createElement)("p",null,"Tradecast Video")),(0,a.createElement)(d.CardBody,null,(0,a.createElement)("select",{value:n,onChange:t=>{e.setAttributes({videoId:Number(t.target.value)})}},(0,a.createElement)("option",null," "),i&&i.map((e=>(0,a.createElement)("option",{value:e.id},e.title.rendered)))),l&&(0,a.createElement)(d.Card,null,(0,a.createElement)(d.CardMedia,null,(0,a.createElement)("img",{alt:"thumbnail",src:null!==(t=l?.meta?._tradecast_video_thumbnail_url)&&void 0!==t?t:""})),(0,a.createElement)(d.CardBody,null,null!==(r=l?.content?.raw)&&void 0!==r?r:""))))):(0,a.createElement)("div",s,"Loading...")}));const{name:l}=t;(0,e.registerBlockType)(l,{edit:i,save:e=>{const{attributes:{videoId:t}}=e,a=o.useBlockProps.save({id:null!=t?t:"",width:960,height:540,autoplay:!1});if(!t||""===t)return"";let r="";return Object.keys(a).forEach((e=>{r+=" "+("className"!==e?e:"class")+'="'+a[e]+'"'})),"[tradecast-video"+r+"]"}})}()}();