(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{417:function(t,n,e){var a=e(33),r=Date.prototype,i=r.toString,s=r.getTime;new Date(NaN)+""!="Invalid Date"&&a(r,"toString",(function(){var t=s.call(this);return t==t?i.call(this):"Invalid Date"}))},448:function(t,n,e){},497:function(t,n,e){"use strict";e(448)},509:function(t,n,e){"use strict";e.r(n);e(247),e(417),e(35),e(36);var a={props:["type"],computed:{sortedHalaman:function(){return this.halaman.sort((function(t,n){return new Date(n.frontmatter.date).getTime()-new Date(t.frontmatter.date).getTime()}))}},data:function(){return{halaman:[]}},mounted:function(){var t=this;this.$site.pages.forEach((function(n){n.frontmatter.type===t.type&&t.halaman.push(n)}))}},r=(e(497),e(13)),i=Object(r.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._l(t.sortedHalaman,(function(n){return e("div",{key:n.title,staticClass:"postwrapper"},[e("router-link",{attrs:{to:n.path}},[e("h2",[t._v(t._s(n.title))])]),t._v(" "),e("p",[t._v(t._s(n.frontmatter.description.substring(0,200)+"..."))]),t._v(" "),n.frontmatter.tags?e("div",{staticClass:"categories"},t._l(n.frontmatter.tags,(function(n){return e("div",{key:n,staticClass:"category"},[t._v("\n\t\t\t\t"+t._s(n)+"\n\t\t\t")])})),0):t._e()],1)})),0)}),[],!1,null,null,null);n.default=i.exports}}]);