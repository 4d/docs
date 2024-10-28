"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71954],{25444:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var n=o(474848),t=o(28453);const r={id:"test-semaphore",title:"Test semaphore",slug:"/commands/test-semaphore",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/test-semaphore",title:"Test semaphore",description:"Test semaphore ( semaforo ) -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/test-semaphore.md",sourceDirName:"commands-legacy",slug:"/commands/test-semaphore",permalink:"/docs/pt/commands/test-semaphore",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftest-semaphore.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"test-semaphore",title:"Test semaphore",slug:"/commands/test-semaphore",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET PROCESS VARIABLE",permalink:"/docs/pt/commands/set-process-variable"},next:{title:"VARIABLE TO VARIABLE",permalink:"/docs/pt/commands/variable-to-variable"}},c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Test semaphore"})," ( ",(0,n.jsx)(s.em,{children:"semaforo"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Par\xe2metro"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"semaforo"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Sem\xe1foro a testar"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Resultado"}),(0,n.jsx)(s.td,{children:"Boolean"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"True = o sem\xe1foro existe, False = o sem\xe1foro n\xe3o existe"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(s.p,{children:"O comando Test semaphore lhe permite provar a exist\xeancia de um sem\xe1foro."}),"\n",(0,n.jsxs)(s.p,{children:["A diferen\xe7a entre a fun\xe7\xe3o ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/semaphore",title:"Semaphore",children:"Semaphore"})," e Test semaphore \xe9 que Test semaphore n\xe3o cria o ",(0,n.jsx)(s.em,{children:"semaforo"})," se este n\xe3o existe. Se o ",(0,n.jsx)(s.em,{children:"semaforo"})," existe, a fun\xe7\xe3o devolve ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/true",title:"True",children:"True"}),". Do contr\xe1rio, devolve ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/false",title:"False",children:"False"}),"."]}),"\n",(0,n.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsxs)(s.p,{children:["O exemplo a seguir lhe permite conhecer o estado de um processo (em nosso caso, a modifica\xe7\xe3o de um c\xf3digo) sem modificar ",(0,n.jsx)(s.em,{children:"semaforo"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0$Win:=Open window(x1;x2;y1;y2;-Palette window)\n\xa0Repeat\n\xa0\xa0\xa0\xa0If(Test semaphore("C\xf3digo de encripta\xe7\xe3o"))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0POSI\xc7AO MENSAGEM($x3;$y3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGE("O c\xf3digo de encripta\xe7\xe3o est\xe1 sendo modificado.")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0POSI\xc7AO MENSAGEM($x3;$y3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGE("A modifica\xe7\xe3o do c\xf3digo de encripta\xe7\xe3o for autorizada.")\n\xa0\xa0\xa0\xa0End if\n\xa0Until(StopInfo)\n\xa0CLOSE WINDOW\n'})}),"\n",(0,n.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/pt/commands/clear-semaphore",children:"CLEAR SEMAPHORE"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/commands/semaphore",children:"Semaphore"})]})]})}function l(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},28453:(e,s,o)=>{o.d(s,{R:()=>d,x:()=>a});var n=o(296540);const t={},r=n.createContext(t);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);