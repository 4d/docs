"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86169"],{949784:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"ViewPro/commands/vp-remove-span","title":"VP REMOVE SPAN","description":"VP REMOVE SPAN ( rangeObj : Object )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-remove-span.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-remove-span","permalink":"/docs/pt/ViewPro/commands/vp-remove-span","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-remove-span.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-remove-span","title":"VP REMOVE SPAN"},"sidebar":"docs","previous":{"title":"VP REMOVE SHEET","permalink":"/docs/pt/ViewPro/commands/vp-remove-sheet"},"next":{"title":"VP REMOVE STYLESHEET","permalink":"/docs/pt/ViewPro/commands/vp-remove-stylesheet"}}'),r=s("785893"),o=s("250065");let a={id:"vp-remove-span",title:"VP REMOVE SPAN"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP REMOVE SPAN"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objeto intervalo"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.code,{children:"VP REMOVE SPAN"})," remove o span das c\xe9lulas em ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"rangeObj"}),", passe um objeto de alcance do intervalo da c\xe9lula. As c\xe9lulas geradas no alcance s\xe3o divididas em c\xe9lulas individuais."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Para remover todos os intervalos de c\xe9lulas deste documento:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(812651).Z+"",width:"683",height:"162"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' //encontre todas as c\xe9lulas fusionadas\n $span:=VP Obter spans(VP All("ViewProArea"))\n\n\n  /remove a c\xe9lula\n VP SPAN($span)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Resultados:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(987360).Z+"",width:"670",height:"162"})}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-add-span",children:"VP ADD SPAN"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-spans",children:"VP Get spans"})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},812651:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/cmd_vpRemoveSpan1-fee2730f9c75949086185290f1a0b64a.PNG"},987360:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/cmd_vpRemoveSpan2-c69b0babe3e0461982532ff0403a0839.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var t=s(667294);let r={},o=t.createContext(r);function a(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);