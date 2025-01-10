"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80567"],{618044:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-row-attributes","title":"VP Get row attributes","description":"VP Get row attributes ( rangeObj Collection","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-row-attributes.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-row-attributes","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-get-row-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-row-attributes.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-get-row-attributes","title":"VP Get row attributes"},"sidebar":"docs","previous":{"title":"VP Get print info","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-get-print-info"},"next":{"title":"VP Get row count","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-get-row-count"}}'),o=n("785893"),s=n("250065");let i={id:"vp-get-row-attributes",title:"VP Get row attributes"},a=void 0,c={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"VP Get row attributes"})," ( rangeObj : Object ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Par\xe2metro"}),(0,o.jsx)(t.th,{children:"Tipo"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Descri\xe7\xe3o"}),(0,o.jsx)(t.th,{})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"rangeObj"}),(0,o.jsx)(t.td,{children:"Object"}),(0,o.jsx)(t.td,{children:"->"}),(0,o.jsx)(t.td,{children:"Objeto intervalo"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Resultados"}),(0,o.jsx)(t.td,{children:"Collection"}),(0,o.jsx)(t.td,{children:"<-"}),(0,o.jsx)(t.td,{children:"Cole\xe7\xe3o de propriedades de linha"}),(0,o.jsx)(t.td,{})]})]})]}),"\n",(0,o.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"VP Get row attributes"})," command returns a collection of properties for any row in the ",(0,o.jsx)(t.em,{children:"rangeObj"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["In ",(0,o.jsx)(t.em,{children:"rangeObj"}),", pass an object containing a range of the rows whose attributes will be retrieved."]}),"\n",(0,o.jsxs)(t.p,{children:["The returned collection contains any properties for the rows, whether or not they have been set by the ",(0,o.jsx)(t.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-set-row-attributes",children:"VP SET ROW ATTRIBUTES"})," method."]}),"\n",(0,o.jsx)(t.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(t.p,{children:"O c\xf3digo seguinte retorna uma cole\xe7\xe3o de atributos no intervalo fornecido:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'var $range : Object\nvar $attr : Collection\n \n$range:=VP Column("ViewProArea";1;2)\n$attr:=VP Get row attributes($range)\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(9424).Z+"",width:"699",height:"315"})}),"\n",(0,o.jsx)(t.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-get-column-attributes",children:"VP Get column attributes"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-set-column-attributes",children:"VP SET COLUMN ATTRIBUTES"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-set-row-attributes",children:"VP SET ROW ATTRIBUTES"})]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},9424:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/cmd_vpGetRowAttributes-efed3a6fee4606a18820341e9a7ffe5a.PNG"},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return i}});var r=n(667294);let o={},s=r.createContext(o);function i(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);