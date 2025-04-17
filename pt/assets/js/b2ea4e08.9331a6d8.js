"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19753"],{496886:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>t,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/wa-open-url","title":"WA OPEN URL","description":"WA OPEN URL ( { ;} objeto ; url* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/wa-open-url.md","sourceDirName":"commands-legacy","slug":"/commands/wa-open-url","permalink":"/docs/pt/commands/wa-open-url","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-open-url.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wa-open-url","title":"WA OPEN URL","slug":"/commands/wa-open-url","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA OPEN FORWARD URL","permalink":"/docs/pt/commands/wa-open-forward-url"},"next":{"title":"WA OPEN WEB INSPECTOR","permalink":"/docs/pt/commands/wa-open-web-inspector"}}'),a=r("785893"),o=r("250065");let d={id:"wa-open-url",title:"WA OPEN URL",slug:"/commands/wa-open-url",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WA OPEN URL"})," ( {* ;} ",(0,a.jsx)(n.em,{children:"objeto"})," ; ",(0,a.jsx)(n.em,{children:"url"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe2metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string); se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objeto"}),(0,a.jsx)(n.td,{children:"any"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"url"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"URL a carregar na \xe1rea Web"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(n.p,{children:["O comando ",(0,a.jsx)(n.strong,{children:"WA OPEN URL"})," carrega na \xe1rea web designada pelos par\xe2metros ",(0,a.jsx)(n.em,{children:"*"})," e ",(0,a.jsx)(n.em,{children:"objeto"})," o URL passado no par\xe2metro ",(0,a.jsx)(n.em,{children:"url"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Se passar uma cadeia vazia em ",(0,a.jsx)(n.em,{children:"url"}),', o comando WA OPEN URL n\xe3o faz nada e n\xe3o \xe9 gerado nenhum erro. Para carregar uma p\xe1gina vazia na \xe1rea web, passe a cadeia "about:blank" em ',(0,a.jsx)(n.em,{children:"url"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Como o comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/open-url",children:"OPEN URL"}),", ",(0,a.jsx)(n.strong,{children:"WA OPEN URL"})," aceita v\xe1rios tipos de sintaxe no par\xe2metro ",(0,a.jsx)(n.em,{children:"url"})," para designar os arquivos:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'sintaxe posix: "file:///c:/Meu%20Arquivo"'}),"\n",(0,a.jsx)(n.li,{children:'sintaxe sistema: "c:\\MinhaPasta\\MeuArquivo" (Windows) ou "MeuDisco:MinhaPasta:MeuArquivo" (macOS).'}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"}),' por compatibilidade, a sintaxe "file://" (uso de dois "/") \xe9 aceita em 4D mas n\xe3o cumpre com o RFC. Recomendamos utilizar a sintaxe "file:///" (com tr\xeas "/") que cumpre com o RFC.']}),"\n",(0,a.jsx)(n.p,{children:'Em Mac OS, quando FileVault est\xe1 ativo, deve utilizar a sintaxe Posix. Pode transformar as rotas do sistema utilizando o comando [#cmd id="1106"/].'}),"\n",(0,a.jsx)(n.p,{children:'Este comando tem o mesmo efeito que a modifica\xe7\xe3o do valor da vari\xe1vel "URL" associada a \xe1rea. Por exemplo, se a vari\xe1vel da \xe1rea \xe9 chamada MinhaWArea_url:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0MyWArea_url:="http://www.4d.com/"\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d"})}),"\n",(0,a.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/pt/commands/open-url",children:"OPEN URL"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/commands/wa-open-back-url",children:"WA OPEN BACK URL"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/commands/wa-open-forward-url",children:"WA OPEN FORWARD URL"})]}),"\n",(0,a.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero do comando"}),(0,a.jsx)(n.td,{children:"1020"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread-seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var s=r(667294);let a={},o=s.createContext(a);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);