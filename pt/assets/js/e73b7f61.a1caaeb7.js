"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39260"],{656109:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>i,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/wa-get-current-url","title":"WA Get current URL","description":"WA Get current URL ( { ;} objeto* ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/wa-get-current-url.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-current-url","permalink":"/docs/pt/commands/wa-get-current-url","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-current-url.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wa-get-current-url","title":"WA Get current URL","slug":"/commands/wa-get-current-url","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Forward URL available","permalink":"/docs/pt/commands/wa-forward-url-available"},"next":{"title":"WA GET EXTERNAL LINKS FILTERS","permalink":"/docs/pt/commands/wa-get-external-links-filters"}}'),a=r("785893"),s=r("250065");let d={id:"wa-get-current-url",title:"WA Get current URL",slug:"/commands/wa-get-current-url",displayed_sidebar:"docs"},o=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WA Get current URL"})," ( {* ;} ",(0,a.jsx)(n.em,{children:"objeto"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe2metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string); se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objeto"}),(0,a.jsx)(n.td,{children:"any"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"URL carregada na \xe1rea web atualmente"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(n.p,{children:["O comando WA Get current URL retorna a dire\xe7\xe3o URL da p\xe1gina mostrada na \xe1rea web designada pelos par\xe2metros * e ",(0,a.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Se a URL atual n\xe3o estiver dispon\xedvel, o comando retorna uma string vazia."}),"\n",(0,a.jsx)(n.p,{children:'Se a p\xe1gina web estiver carregada completamente, o valor retornado pela fun\xe7\xe3o \xe9 id\xeantico ao da vari\xe1vel "URL" associada com a \xe1rea web. Se a p\xe1gina estiver no processo de ser carregada, os dois valores ser\xe3o diferentes: a fun\xe7\xe3o retorna o URL completamente carregado e a vari\xe1vel cont\xe9m a URL em processo de ser carregada.'}),"\n",(0,a.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsxs)(n.p,{children:['A p\xe1gina mostrada na URL "',(0,a.jsx)(n.a,{href:"http://www.apple.com",children:"www.apple.com"}),'" e a p\xe1gina "',(0,a.jsx)(n.a,{href:"http://www.4dhispano.com",children:"www.4dhispano.com"}),'" est\xe1 em processo de ser carregada:']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0$url:=WA Get current URL(MyWArea)\xa0//devolve "http://www.apple.com"\n\xa0\xa0//A vari\xe1vel URL associada cont\xe9m "http://www.4dhispano.com"\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/pt/commands/wa-open-url",children:"WA OPEN URL"})}),"\n",(0,a.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero do comando"}),(0,a.jsx)(n.td,{children:"1025"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread-seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return d}});var t=r(667294);let a={},s=t.createContext(a);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);