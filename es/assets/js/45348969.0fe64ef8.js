"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48288"],{787725:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/length","title":"Length","description":"Length ( cadena ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/length.md","sourceDirName":"commands-legacy","slug":"/commands/length","permalink":"/docs/es/commands/length","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flength.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"length","title":"Length","slug":"/commands/length","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Insert string","permalink":"/docs/es/commands/insert-string"},"next":{"title":"Localized string","permalink":"/docs/es/commands/localized-string"}}'),r=t("785893"),l=t("250065");let d={id:"length",title:"Length",slug:"/commands/length",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4}];function a(e){let n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Length"})," ( ",(0,r.jsx)(n.em,{children:"cadena"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cadena"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Cadena de  la cual devolver la longitud"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Longitud de la cadena"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Length"})," permite obtener la longitud de ",(0,r.jsx)(n.em,{children:"cadena"}),". ",(0,r.jsx)(n.strong,{children:"Length"})," devuelve el n\xfamero de caracteres alfanum\xe9ricos en ",(0,r.jsx)(n.em,{children:"cadena"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"}),' en modo Unicode, si quiere verificar que una cadena contiene caracteres, incluyendo caracteres ignorables, debe utilizar el \xfaltimo If(Length(vtAnyText)=0) en lugar de If(vtAnyText=""). Si la cadena contiene por ejemplo Char(1), que es car\xe1cter ignorable, Length(vtAnyText) devuelve 1 pero vtAnyText="" devuelve True.']}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["Este ejemplo ilustra el uso de Length. Los resultados, descritos en los comentarios, se asignan a la variable ",(0,r.jsx)(n.em,{children:"vlResult"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vlResult:=Length("Topacio")\xa0// vlResult obtiene 7\n\xa0vlResult:=Length("Ciudadano")\xa0// vlResult obtiene 9\n'})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let r={},l=s.createContext(r);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);