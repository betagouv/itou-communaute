!function(){"use strict";var e,n={631:function(){var e=window.wp.element,n=window.wp.blocks,r=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"buddyboss-theme/buddypanel","version":"0.1.0","title":"BuddyPanel","category":"widgets","icon":"buddypanel bb-icon-f bb-icon-sidebar","description":"Add your BuddyPanel menu to your content or sidebar.","keywords":["BuddyPanel"],"supports":{"html":false},"textdomain":"buddyboss-theme","example":{"viewportWidth":800},"style":"bb_theme_block-buddypanel-style-css","editorScript":"bb_theme_block-buddypanel-block-js"}');const{useBlockProps:t}=wp.blockEditor,{serverSideRender:o}=wp,{name:s}=r;(0,n.registerBlockType)(s,{edit:()=>[(0,e.createElement)("div",t(),(0,e.createElement)(o,{block:s,key:s}))],save:()=>null})}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var s=r[e]={exports:{}};return n[e](s,s.exports,t),s.exports}t.m=n,e=[],t.O=function(n,r,o,s){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],s=e[l][2];for(var d=!0,u=0;u<r.length;u++)(!1&s||i>=s)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(d=!1,s<i&&(i=s));if(d){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,o,s]},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={781:0,539:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,s,i=r[0],d=r[1],u=r[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in d)t.o(d,o)&&(t.m[o]=d[o]);if(u)var l=u(t)}for(n&&n(r);c<i.length;c++)s=i[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(l)},r=self.webpackChunkbuddyboss_theme=self.webpackChunkbuddyboss_theme||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var o=t.O(void 0,[539],(function(){return t(631)}));o=t.O(o)}();