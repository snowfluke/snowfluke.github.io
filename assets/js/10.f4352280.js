(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{432:function(t,n,a){},464:function(t,n,a){"use strict";a(432)},478:function(t,n,a){"use strict";a.r(n);a(36),a(37),a(243);var e={props:["type"],data:function(){return{halaman:[]}},mounted:function(){var t=this;this.$site.pages.forEach((function(n){n.frontmatter.type===t.type&&t.halaman.push(n)})),this.halaman.sort((function(t,n){return t-n}))}},r=(a(464),a(16)),i=Object(r.a)(e,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",t._l(t.halaman,(function(n){return a("div",{key:n.title,staticClass:"postwrapper"},[a("router-link",{attrs:{to:n.path}},[a("h2",[t._v(t._s(n.title))])]),t._v(" "),a("p",[t._v(t._s(n.frontmatter.description))])],1)})),0)}),[],!1,null,null,null);n.default=i.exports}}]);