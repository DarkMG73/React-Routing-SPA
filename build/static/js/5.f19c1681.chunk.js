(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{49:function(e,t,c){e.exports={item:"QuoteItem_item__2dOvb"}},50:function(e,t,c){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},51:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},54:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(35),i=c(2),o=c(49),r=c.n(o),a=c(8),u=c(1),d=function(e){var t="/quotes/".concat(e.id);return Object(u.jsxs)("li",{className:r.a.item,children:[Object(u.jsxs)("figure",{children:[Object(u.jsx)("blockquote",{children:Object(u.jsx)("p",{children:e.text})}),Object(u.jsx)("figcaption",{children:e.author})]}),Object(u.jsx)(a.b,{to:t,className:"btn",children:"View Fullscreen"})]})},j=c(50),l=c.n(j),b=function(e){var t,c,n=Object(i.h)(),o=Object(i.i)(),r="asc"===new URLSearchParams(o.search).get("sort"),a=(t=e.quotes,c=r,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsx)("div",{className:l.a.sorting,children:Object(u.jsxs)("button",{onClick:function(){n.push({pathname:o.pathname,search:"?sort=".concat(r?"desc":"asc")})},children:["Sort ",r?"Descending":"Ascending"]})}),Object(u.jsx)("ul",{className:l.a.list,children:a.map((function(e){return Object(u.jsx)(d,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},h=c(36),x=c(14),O=c(51),m=c.n(O),p=function(){return Object(u.jsxs)("div",{className:m.a.noquotes,children:[Object(u.jsx)("p",{children:"No quotes found!"}),Object(u.jsx)(a.b,{to:"/new-quote",className:"btn",children:"Add a Quote"})]})};t.default=function(){var e=Object(n.a)(h.d,!0),t=e.sendRequest,c=e.status,i=e.data,o=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===c?Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(x.a,{})}):o?Object(u.jsx)("div",{className:"centered focused",children:o}):"completed"!==c||i&&0!==i.length?Object(u.jsx)(b,{quotes:i}):Object(u.jsx)(p,{})}}}]);
//# sourceMappingURL=5.f19c1681.chunk.js.map