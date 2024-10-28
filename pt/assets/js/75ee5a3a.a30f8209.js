"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8743],{367308:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var t=s(474848),o=s(28453);const c={id:"ob-instance-of",title:"OB Instance of",slug:"/commands/ob-instance-of",displayed_sidebar:"docs"},r=void 0,d={id:"commands-legacy/ob-instance-of",title:"OB Instance of",description:"OB Instance of ( objeto ; classe ) -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-instance-of.md",sourceDirName:"commands-legacy",slug:"/commands/ob-instance-of",permalink:"/docs/pt/commands/ob-instance-of",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-instance-of.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"ob-instance-of",title:"OB Instance of",slug:"/commands/ob-instance-of",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OB Get type",permalink:"/docs/pt/commands/ob-get-type"},next:{title:"OB Is defined",permalink:"/docs/pt/commands/ob-is-defined"}},a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function i(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OB Instance of"})," ( ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"classe"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objeto cuja classe vai ser testada"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"classe"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Classe a qual vai testar a perten\xeancia"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"True se o objeto pertencer \xe0 classe especifica ou \xe0 uma classe child, sen\xe3o false"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"OB Instance of"})," devolve true se ",(0,t.jsx)(n.em,{children:"objeto"})," pertencer \xe0 ",(0,t.jsx)(n.em,{children:"classe"})," ou uma de suas classes filho, e em caso contr\xe1rio false."]}),"\n",(0,t.jsxs)(n.p,{children:["Se ",(0,t.jsx)(n.em,{children:"classe"})," n\xe3o for um objeto Classe v\xe1lido, se devolve o erro -10745."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Criar a classe Polygon:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Classe: Polygon\n\xa0Class constructor\n\xa0var $1;$2 : Integer\n\xa0This.area:=$1*$2\n"})}),"\n",(0,t.jsx)(n.p,{children:"Depois em um m\xe9todo, pode escrever:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $poly : Object\n\xa0var $instance : Boolean\n\xa0\n\xa0$poly:=cs.Polygon.new(4;3)\n\xa0\n\xa0$instance:=OB Instance of($poly;cs.Polygon)\n\xa0\xa0// true\n\xa0\n\xa0$instance:=OB Instance of($poly;4D.Object)\n\xa0\xa0// true\xa0\n\xa0\n\xa0$instance:=OB Instance of($poly;cs.Circle)\n\xa0\xa0// false\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/ob-class",children:"OB Class"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var t=s(296540);const o={},c=t.createContext(o);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);