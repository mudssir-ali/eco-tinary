(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[865],{5148:function(e,t,a){"use strict";var s=a(536),i=a.n(s),n=a(1664),r=a.n(n),l=a(2030),c=a(5893);t.Z=function(e){var t=e.items;return(0,c.jsxs)("nav",{className:i().dynamic([["2884153288",[l.Z.large,l.Z.xlarge]]]),children:[(0,c.jsx)("div",{className:i().dynamic([["2884153288",[l.Z.large,l.Z.xlarge]]])+" container",children:(0,c.jsx)("ol",{className:i().dynamic([["2884153288",[l.Z.large,l.Z.xlarge]]]),children:t.map((function(e){return(0,c.jsx)("li",{className:i().dynamic([["2884153288",[l.Z.large,l.Z.xlarge]]]),children:e.linkHref?(0,c.jsx)(r(),{href:e.linkHref,as:e.linkAs,children:(0,c.jsx)("a",{className:i().dynamic([["2884153288",[l.Z.large,l.Z.xlarge]]]),children:e.title})}):(0,c.jsx)("strong",{className:i().dynamic([["2884153288",[l.Z.large,l.Z.xlarge]]]),children:e.title})},e.title)}))})}),(0,c.jsx)(i(),{id:"2884153288",dynamic:[l.Z.large,l.Z.xlarge],children:["nav.__jsx-style-dynamic-selector{font-size:14px;padding-top:10px;padding-bottom:10px;border-bottom:1px solid #ebeced;}","ol.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;list-style:none;padding-left:0;margin:0;}","li.__jsx-style-dynamic-selector{text-transform:capitalize;}","li.__jsx-style-dynamic-selector:not(:last-child){margin-right:10px;}",'li.__jsx-style-dynamic-selector:not(:last-child):after{content:">";margin-left:10px;}',"a.__jsx-style-dynamic-selector{color:#2f3542;-webkit-text-decoration:underline;text-decoration:underline;}","@media ".concat(l.Z.large,"{nav.__jsx-style-dynamic-selector{padding-top:0;margin-bottom:30px;border-bottom:none;}}"),"@media ".concat(l.Z.xlarge,"{nav.__jsx-style-dynamic-selector{margin-top:-10px;}}")]})]})}},6892:function(e,t,a){"use strict";var s=a(5833),i=a(5152),n=a.n(i),r=a(271),l=a(5893),c=n()((function(){return a.e(352).then(a.bind(a,9352))}),{ssr:!1,loadableGenerated:{webpack:function(){return[9352]}}});t.Z=function(e){var t=e.sliceZone,a=e.readingTime;return(0,l.jsxs)("div",{className:"eco-toc p-4",children:[(0,l.jsxs)("div",{className:"eco-toc-header rounded-0 pl-0 mb-2",children:[a&&(0,l.jsxs)("span",{className:"eco-toc-last-update",children:["Reading time: ",a,"min"]}),"Table of contents"]}),(0,l.jsx)("div",{className:"eco-toc-wrapper",children:(0,l.jsx)("ol",{className:"pl-4 py-3 mb-0",children:t.map((function(e,t){if((0,r.W)(e))return(0,l.jsx)("li",{className:"eco-toc-item",children:(0,l.jsx)("a",{href:"#".concat((0,r.w)(s.RichText.asText(e.primary.headline))),children:s.RichText.asText(e.primary.headline)})},"this-".concat(t))}))})}),(0,l.jsxs)("div",{className:"eco-toc-share py-2",children:[(0,l.jsx)("span",{className:"text-uppercase font-weight-bold mb-2 d-block",children:"Share"}),(0,l.jsx)(c,{})]})]})}},700:function(e,t,a){"use strict";a.r(t);var s=a(9008),i=a.n(s),n=a(3344),r=a(5893),l=function(e){var t=e.statusCode,a=t?"".concat(t," Error"):"Client-side error",s=404===t?"Document not found":"Please contact your development team";return(0,r.jsx)(n.HQ,{children:(0,r.jsxs)("div",{className:"not-found",children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"Error!"})}),(0,r.jsx)("h1",{children:a}),(0,r.jsx)("h2",{children:s}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"/",children:"Return to homepage"})})]})})};l.getInitialProps=function(e){var t=e.res,a=e.err;return{statusCode:t?t.statusCode:a?a.statusCode:null}},t.default=l},3403:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return m}});var s=a(3344),i=a(700),n=a(2962),r=a(5833),l=a(9705),c=a(6892),d=a(1054),o=a(5148),x=a(5893),m=!0;t.default=function(e){var t=e.doc,a=e.guideArticles;return t?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.PB,{title:t.data.seo_title,description:"".concat(r.RichText.asText(t.data.seo_short_description)),canonical:t.data.seo_canonical_url,openGraph:{type:"article",url:t.data.seo_canonical_url,title:t.data.seo_title,description:r.RichText.asText(t.data.seo_short_description),images:[{url:t.data.seo_image.url,alt:t.data.seo_image.alt}]},twitter:{cardType:"summary_large_image"}}),(0,x.jsxs)(s.Bv,{props:t,className:"position-relative",children:[(0,x.jsx)(o.Z,{items:[{title:"Guides",linkHref:"/guides"},{title:t.data.category.uid,linkHref:"/guides/[category]",linkAs:"/guides/".concat(t.data.category.uid)},{title:r.RichText.asText(t.data.title)}]}),(0,x.jsx)(c.Z,{sliceZone:t.data.body,readingTime:t.data.reading_time}),(0,x.jsx)(l.p,{sliceZone:t.data.body,banner:!0}),(0,x.jsxs)("div",{className:"eco-article-cards-container",children:[(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsxs)("div",{className:"col-12 pt-8 pb-7",children:[(0,x.jsxs)("h2",{className:"text-center text-white",children:["Continue reading about"," ",(0,x.jsx)("span",{className:"text-capitalize",children:t.data.category.uid})]}),(0,x.jsx)("a",{className:"link link-yellow text-center w-100 d-block",href:"/guides",children:"see All Guides"})]})})}),(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row",children:a.results.map((function(e){return(0,x.jsx)("div",{className:"col-md-6 col-lg-4",children:(0,x.jsx)(d.Z,{bgFileName:e.data.card_bg.url,bottomLabel:"Read Article",title:e.data.title[0].text,subtitle:e.data.category.uid,italicText:e.data.subtitle[0].text,linkHref:"/guides/[...slugs]",linkAs:"/guides/".concat(e.data.category.uid,"/").concat(e.uid)})},e.id)}))})})]})]})]}):(0,x.jsx)(i.default,{statusCode:"404"})}},5752:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/[...slugs]",function(){return a(3403)}])}},function(e){e.O(0,[33,962,915,833,344,774,888,179],(function(){return t=5752,e(e.s=t);var t}));var t=e.O();_N_E=t}]);