(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{153:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return m});var a=n(7),o=n.n(a),i=n(0),r=n.n(i),c=n(158),l=n(166),s=n(164),p=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).randomIntZeroTo=function(t){return Math.floor(Math.random()*(t+1))},e}return o()(e,t),e.prototype.render=function(){var t=Object(c.a)(l.a).withConfig({componentId:"sc-8p8eor-0"})(["display:flex;height:70vh;align-items:center;justify-content:center;margin-bottom:70px;@media (max-width:414px){flex-flow:column;align-items:flex-start;padding-left:35px;}"]),e=c.a.p.withConfig({componentId:"sc-8p8eor-1"})(["line-height:2;"]),n=c.a.h2.withConfig({componentId:"sc-8p8eor-2"})(["margin:0 0 30px;font-size:100px;font-weight:100;color:#111;line-height:1;"]),a=c.a.span.withConfig({componentId:"sc-8p8eor-3"})(["display:block;margin-right:50px;font-size:150px;font-weight:normal;color:#111;writing-mode:vertical-rl;text-orientation:mixed;@media (max-width:414px){margin-bottom:50px;padding-left:20px;}"]),o=this.props.data.site.siteMetadata.title,i=["',:-l",":‑O","',:(",":‑\\"],p=this.randomIntZeroTo(i.length-1);return r.a.createElement(t,{location:this.props.location,title:o},r.a.createElement(s.a,{title:"404: Not Found"}),r.a.createElement(a,null,""+i[p]),r.a.createElement("div",null,r.a.createElement(n,null,"404"),r.a.createElement(e,null,"Page not found. ",r.a.createElement("br",null)," The requested page could not be found...")))},e}(r.a.Component);e.default=p;var m="1097489062"},159:function(t,e,n){var a;t.exports=(a=n(163))&&a.default||a},160:function(t,e,n){"use strict";var a=n(0),o=n.n(a),i=n(4),r=n.n(i),c=n(33),l=n.n(c);n.d(e,"a",function(){return l.a});n(159),o.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},162:function(t,e,n){"use strict";var a=n(7),o=n.n(a),i=n(0),r=n.n(i),c=n(158),l=function(t){function e(){return t.apply(this,arguments)||this}return o()(e,t),e.prototype.render=function(){var t=c.a.strong.withConfig({componentId:"sc-1oc7sgy-0"})(["overflow:hidden;position:absolute;width:0;height:0;line-height:0;color:transparent;"]);return r.a.createElement(t,null,this.props.text)},e}(r.a.Component);e.a=l},163:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),c=n(55),l=n(2),s=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return n?o.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=s},164:function(t,e,n){"use strict";var a=n(165),o=n(0),i=n.n(o),r=n(4),c=n.n(r),l=n(168),s=n.n(l);function p(t){var e=t.description,n=t.lang,o=t.meta,r=t.keywords,c=t.title,l=a.data.site,p=e||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s",meta:[{name:"description",content:p},{property:"og:title",content:c},{property:"og:image",content:l.siteMetadata.image},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:p}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(o)})}p.defaultProps={lang:"en",meta:[],keywords:[],description:""},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=p},165:function(t){t.exports={data:{site:{siteMetadata:{title:"boram kim, developer",description:"A starter blog demonstrating what Gatsby can do.",author:"boramkim"}}}}},166:function(t,e,n){"use strict";n(167);var a=n(7),o=n.n(a),i=n(0),r=n.n(i),c=n(162),l=n(158),s=n(160),p=function(t){function e(){return t.apply(this,arguments)||this}return o()(e,t),e.prototype.render=function(){var t=this.props.className,e=l.a.header.withConfig({componentId:"sc-1ahigr0-0"})(["padding-top:60px;&.fixed{position:fixed;top:0;right:0;left:0;z-index:999;}@media (max-width:414px){background-color:#fff;&.container{padding:25px 35px;}}"]),n=l.a.nav.withConfig({componentId:"sc-1ahigr0-1"})(["float:right;height:30px;@media (max-width:414px){a{font-size:18px;}}"]),a=Object(l.a)(s.a).withConfig({componentId:"sc-1ahigr0-2"})(["display:block;float:left;margin-left:20px;padding:5px;font-size:15px;font-weight:100;color:inherit;text-decoration:none;box-shadow:none;&:hover{color:#000}&.on{position:relative;font-weight:400;color:#111;svg{stroke-width:1.5px;}}"]),o=l.a.h1.withConfig({componentId:"sc-1ahigr0-3"})(["display:block;float:left;a{margin-left:0;}@media (max-width:414px){a{svg{width:22px;height:22px;}&.on{svg{stroke-width:1.5px;}}}}"]),i=l.a.a.withConfig({componentId:"sc-1ahigr0-4"})(["display:block;float:left;margin-left:20px;padding:5px;font-family:'Noto Sans KR',san-serif;fill:#777;text-decoration:none;svg{display:block;vertical-align:middle}&:hover{fill:#000;}"]);return r.a.createElement(e,{className:"container clear "+t},r.a.createElement(c.a,{text:"Boram Kim"}),r.a.createElement(o,{id:"logo"},r.a.createElement(a,{to:"/",className:"logo",activeClassName:"on"},r.a.createElement("svg",{width:"18px",height:"18px",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 25 25",style:{enableBackground:"new 0 0 25 25",stroke:"#111",fill:"none"},xmlSpace:"preserve"},r.a.createElement("g",null,r.a.createElement("path",{d:"M7.6,22.8c-0.5,0-1-0.1-1.5-0.2c-1.4-0.4-2.4-1.1-2.8-2.1c-0.3-0.8-0.2-1.8,0.2-2.9c0.7-1.8,3.7-5.1,5.9-6.7 c-0.1,0-0.1,0.1-0.2,0.1c-1.4,0.6-3.6,1.5-5.1,0.9c-0.7-0.3-1.3-0.9-1.6-1.8c-1.1-2.9-0.4-5.1,2-6.7c1.3-0.8,2.7-1,3.9-0.6 c1.4,0.5,2.4,1.9,2.9,3.7c0,0.1,0,0.1-0.1,0.2c-0.1,0-0.1,0-0.2-0.1c-0.4-1.7-1.4-3-2.7-3.5C7.2,2.5,5.9,2.7,4.7,3.5 C2.4,5,1.7,7.2,2.7,10c0.3,0.8,0.8,1.4,1.5,1.7c1.5,0.6,3.6-0.3,4.9-0.9c0.6-0.3,1.1-0.5,1.4-0.5c0.1,0,0.1,0,0.1,0.1 c0,0.1,0,0.1-0.1,0.1c-2.1,1-6,5.1-6.8,7.2c-0.4,1.1-0.5,2-0.2,2.7c0.4,0.9,1.3,1.6,2.6,2c1.7,0.4,4,0.1,5.2-1.5 c0.6-0.9,0.8-2.1,0.9-3.2c0.1-1.2,0.2-2.4,0.2-3.5c0.1-2,0.1-4.1,0.6-6.1c0.3-1.5,0.8-2.7,1.6-3.5l0,0c0.8-1,2.2-2.6,4.6-2.3 c1.7,0.2,3.2,1.6,3.6,3.3c0.4,1.7-0.3,3.3-1.8,4.4c-1.3,0.9-3.1,0.8-4.6,0.8c-0.8,0-1.7,0-2.3,0.1c3.1,2.1,6.5,6.4,7.8,10 c0,0.1,0,0.1-0.1,0.2c-0.1,0-0.1,0-0.2-0.1c-1.4-3.6-4.9-8-7.9-10c0,0-0.1-0.1-0.1-0.1c0,0,0-0.1,0.1-0.1c0.7-0.2,1.6-0.2,2.6-0.2 c1.5,0,3.2,0.1,4.5-0.8c1.5-1,2.1-2.5,1.7-4.1c-0.4-1.7-1.8-2.9-3.4-3.1c-2.3-0.3-3.6,1.2-4.4,2.2l0,0c-0.7,0.8-1.2,1.9-1.5,3.4 c-0.4,2-0.5,4-0.6,6c0,1.2-0.1,2.4-0.2,3.6c-0.1,1.1-0.3,2.3-1,3.3C10.6,22.3,9,22.8,7.6,22.8z"}))))),r.a.createElement(n,null,r.a.createElement(a,{to:"/dev",className:"nav-item",activeClassName:"on",partiallyActive:!0},"dev"),r.a.createElement(a,{to:"/prj",className:"nav-item",activeClassName:"on",partiallyActive:!0},"prj"),r.a.createElement(i,{href:"https://github.com/boramyy",className:["nav-item","link"]},r.a.createElement("svg",{viewBox:"0 0 32 32",width:"16",height:"16"},r.a.createElement("path",{d:"M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"}))),r.a.createElement(i,{href:"https://github.com/boramyy",className:["nav-item","link"]},r.a.createElement("svg",{viewBox:"0 0 14 16",width:"14",height:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"})))))},e}(r.a.Component),m=function(t){function e(){return t.apply(this,arguments)||this}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){window.document.documentElement.classList.remove("scrollSmooth")},n.render=function(){var t=this.props,e=t.children,n=t.className,a=l.a.footer.withConfig({componentId:"q2ro87-0"})(["padding-bottom:35px;font-size:12px;text-align:right;&.fixed{position:fixed;right:0;bottom:0;}"]);return r.a.createElement("div",{className:this.props.scrollSmooth?"scroll-smooth":""},r.a.createElement(p,{className:this.props.fixed?"fixed":""}),r.a.createElement("main",{className:n},e),r.a.createElement(a,{className:"container"+(this.props.fixed?" fixed":"")},"Copyright 2019. boramkim All rights reserved."))},e}(r.a.Component);e.a=m}}]);
//# sourceMappingURL=component---src-pages-404-js-0ed22148be8a12900306.js.map