"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37265"],{110814:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>m,assets:()=>d,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/substring","title":"Substring","description":"Substring ( fonte ; aPartirDe {; numCars} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/substring.md","sourceDirName":"commands-legacy","slug":"/commands/substring","permalink":"/docs/pt/commands/substring","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsubstring.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"substring","title":"Substring","slug":"/commands/substring","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"String","permalink":"/docs/pt/commands/string"},"next":{"title":"Uppercase","permalink":"/docs/pt/commands/uppercase"}}'),t=r("785893"),a=r("250065");let i={id:"substring",title:"Substring",slug:"/commands/substring",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Substring"})," ( ",(0,t.jsx)(n.em,{children:"fonte"})," ; ",(0,t.jsx)(n.em,{children:"aPartirDe"})," {; ",(0,t.jsx)(n.em,{children:"numCars"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fonte"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Cadeia da qual se tira a substring"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aPartirDe"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Posi\xe7\xe3o do primeiro caractere"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numCars"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de caracteres a pegar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Substring de fonte"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"Substring"})," devolve a parte de ",(0,t.jsx)(n.em,{children:"fonte"})," definida por ",(0,t.jsx)(n.em,{children:"aPartirDe"})," e ",(0,t.jsx)(n.em,{children:"numCars"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["O par\xe2metro ",(0,t.jsx)(n.em,{children:"aPartirDe"})," indica o primeiro caractere da cadeia a devolver, e ",(0,t.jsx)(n.em,{children:"numCars"})," define o n\xfamero de caracteres a devolver."]}),"\n",(0,t.jsxs)(n.p,{children:["Se ",(0,t.jsx)(n.em,{children:"aPartirDe"})," mais ",(0,t.jsx)(n.em,{children:"numCars"})," \xe9 maior que o n\xfamero de caracteres na cadeia ou se ",(0,t.jsx)(n.em,{children:"numCars"})," n\xe3o estiver especificado, ",(0,t.jsx)(n.strong,{children:"Substring"})," devolve todos os caracteres da cadeia a partir do caractere especificado por ",(0,t.jsx)(n.em,{children:"aPartirDe"}),". Se ",(0,t.jsx)(n.em,{children:"aPartirDe"})," for superior ao n\xfamero de caracteres na cadeia, ",(0,t.jsx)(n.strong,{children:"Substring"}),' devolve uma cadeia vazia ("").']}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Aten\xe7\xe3o"}),": quando se utiliza este comando em um contexto multi-estilo, deve converter os eventuais caracteres de fim de linha Windows ('\\r\\n') em caracteres de fim de linha simples ('\\r') para que o processamento seja v\xe1lido. Isto se deve ao mecanismo que normaliza os finais de linha 4D para ter certeza a compatibilidade multi-plataforma para os textos. Para obter mais informa\xe7\xe3o, consulte ",(0,t.jsx)(n.em,{children:"Normaliza\xe7\xe3o autom\xe1tica de fins de linhas"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsxs)(n.p,{children:["Este exemplo ilustra a utiliza\xe7\xe3o de ",(0,t.jsx)(n.strong,{children:"Substring"}),". Os resultados s\xe3o atribu\xeddos \xe0 vari\xe1vel ",(0,t.jsx)(n.em,{children:"vsResult"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vsResult:=Substring("08/04/62";4;2)\xa0// vsResult toma o valor "04"\n\xa0vsResult:=Substring("Emergencia";1;6)\xa0// vsResult toma o valor "Emerge"\n\xa0vsResult:=Substring(var;2)\xa0// vsResult toma o valor de todos os caracteres exceto o primeiro\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"O seguinte m\xe9todo de projeto adiciona os par\xe1grafos que s\xe3o encontrados no texto (passado como primeiro par\xe2metro) a uma array de tipo texto ou alfa (cujo ponteiro \xe9 passado como segundo par\xe2metro):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// EXTRACT PARAGRAPHS\n\xa0\xa0// EXTRACT PARAGRAPHS ( texto ; Ponteiro )\n\xa0\xa0// EXTRACT PARAGRAPHS ( Texto a analisar ; -> Array de par\xe1grafos )\n\xa0\n\xa0var $1 : Text\n\xa0var $2 : Pointer\n\xa0\n\xa0$vlElem:=Size of array($2->)\n\xa0Repeat\n\xa0\xa0\xa0\xa0$vlElem:=$vlElem+1\n\xa0\xa0\xa0\xa0INSERT IN ARRAY($2->;$vlElem)\n\xa0\xa0\xa0\xa0$vlPos:=Position(Char(Carriage return);$1)\n\xa0\xa0\xa0\xa0If($vlPos>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$2->{$vlElem}:=Substring($1;1;$vlPos-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$1:=Substring($1;$vlPos+1)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$2->{$vlElem}:=$1\n\xa0\xa0\xa0\xa0End if\n\xa0Until($1="")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/position",children:"Position"})})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var s=r(667294);let t={},a=s.createContext(t);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);