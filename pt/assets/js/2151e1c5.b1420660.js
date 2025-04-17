"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14074"],{636230:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>a,assets:()=>i,toc:()=>l,contentTitle:()=>d});var a=JSON.parse('{"id":"ViewPro/commands/vp-add-span","title":"VP ADD SPAN","description":"VP ADD SPAN ( rangeObj : Object )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-add-span.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-add-span","permalink":"/docs/pt/20-R8/ViewPro/commands/vp-add-span","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-span.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-add-span","title":"VP ADD SPAN"},"sidebar":"docs","previous":{"title":"VP ADD SHEET","permalink":"/docs/pt/20-R8/ViewPro/commands/vp-add-sheet"},"next":{"title":"VP ADD STYLESHEET","permalink":"/docs/pt/20-R8/ViewPro/commands/vp-add-stylesheet"}}'),r=s("785893"),t=s("250065");let o={id:"vp-add-span",title:"VP ADD SPAN"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP ADD SPAN"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objeto intervalo"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.code,{children:"VP ADD SPAN"})," combina as c\xe9lulas em ",(0,r.jsx)(n.em,{children:"rangeObj"})," como um \xfanico intervalo de c\xe9lulas."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"rangeObj"}),", passe um objeto de intervalo de c\xe9lulas. As c\xe9lulas do intervalo s\xe3o unidas para criar uma c\xe9lula maior que se estende por v\xe1rias colunas ou linhas. Voc\xea pode passar v\xe1rios intervalos de c\xe9lulas para criar v\xe1rios intervalos ao mesmo tempo. Note que se os intervalos de c\xe9lulas se sobrepuserem, apenas o primeiro intervalo de c\xe9lulas \xe9 utilizado."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"S\xf3 s\xe3o apresentados os dados da c\xe9lula superior esquerda. Os dados nas outras c\xe9lulas combinadas ficam ocultos at\xe9 que a extens\xe3o seja removida."}),"\n",(0,r.jsx)(n.li,{children:"Os dados ocultos em c\xe9lulas estendidas podem ser acessados por meio de f\xf3rmulas (come\xe7ando com a c\xe9lula superior esquerda)."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Para abranger as c\xe9lulas do primeiro trimestre e do segundo trimestre nas duas c\xe9lulas ao lado delas, e a c\xe9lula da \xe1rea sul nas duas linhas abaixo dela:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"initial-document",src:s(841e3).Z+"",width:"679",height:"170"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' // Intervalo do primeiro trimestre\n $q1:=VP Cells("ViewProArea";2;3;3;1)\n \n  // Intervalo do segundo trimestre\n $q2:=VP Cells("ViewProArea";5;3;3;1)\n \n  // Intervalo da \xe1rea sul\n $south:=VP Cells("ViewProArea";0;5;1;3)\n \n VP ADD SPAN(VP Combine ranges($q1;$q2;$south))\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"vp-add-span-result",src:s(232591).Z+"",width:"679",height:"163"})}),"\n",(0,r.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/ViewPro/getting-started#using-range-objects",children:"4D View Pro Range Object Properties"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/ViewPro/commands/vp-get-spans",children:"VP Get spans"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/ViewPro/commands/vp-remove-span",children:"VP REMOVE SPAN"})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},232591:function(e,n,s){s.d(n,{Z:function(){return a}});let a=s.p+"assets/images/vp-add-span-2-584074a60f1d13d7c891d349b4531166.png"},841e3:function(e,n,s){s.d(n,{Z:function(){return a}});let a=s.p+"assets/images/vp-add-span-d3eb740fe3b6369f6553f30743000156.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var a=s(667294);let r={},t=a.createContext(r);function o(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);