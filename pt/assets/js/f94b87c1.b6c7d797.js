"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79710"],{668564:function(e,r,s){s.r(r),s.d(r,{default:()=>m,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>t});var i=JSON.parse('{"id":"commands-legacy/wa-set-url-filters","title":"WA SET URL FILTERS","description":"WA SET URL FILTERS ( { ;} objeto ; arrFiltro ; permitirArrRecusar* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/wa-set-url-filters.md","sourceDirName":"commands-legacy","slug":"/commands/wa-set-url-filters","permalink":"/docs/pt/commands/wa-set-url-filters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-set-url-filters.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wa-set-url-filters","title":"WA SET URL FILTERS","slug":"/commands/wa-set-url-filters","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA SET PREFERENCE","permalink":"/docs/pt/commands/wa-set-preference"},"next":{"title":"WA STOP LOADING URL","permalink":"/docs/pt/commands/wa-stop-loading-url"}}'),n=s("785893"),a=s("250065");let o={id:"wa-set-url-filters",title:"WA SET URL FILTERS",slug:"/commands/wa-set-url-filters",displayed_sidebar:"docs"},t=void 0,l={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo 4",id:"exemplo-4",level:2},{value:"Exemplo 5",id:"exemplo-5",level:2},{value:"Exemplo 6",id:"exemplo-6",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"WA SET URL FILTERS"})," ( {* ;} ",(0,n.jsx)(r.em,{children:"objeto"})," ; ",(0,n.jsx)(r.em,{children:"arrFiltro"})," ; ",(0,n.jsx)(r.em,{children:"permitirArrRecusar"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Par\xe2metro"}),(0,n.jsx)(r.th,{children:"Tipo"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"*"}),(0,n.jsx)(r.td,{children:"Operador"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string); se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"objeto"}),(0,n.jsx)(r.td,{children:"any"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"arrFiltro"}),(0,n.jsx)(r.td,{children:"Text array"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Array filtros"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"permitirArrRecusar"}),(0,n.jsx)(r.td,{children:"Boolean array"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Array autorizar- recusar"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["O comando WA SET URL FILTERS permite colocar um ou mais filtros para a \xe1rea Web designada pelos par\xe2metros ",(0,n.jsx)(r.em,{children:"*"})," e ",(0,n.jsx)(r.em,{children:"objeto"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Antes de carregar toda p\xe1gina solicitada pelo usu\xe1rio, 4D consulta a lista de filtros com o objetivo de verificar se a URL objetivo est\xe1 permitido. A avalia\xe7\xe3o da URL est\xe1 baseada nos conte\xfados dos arrays ",(0,n.jsx)(r.em,{children:"arrFiltro e permitirArrRecusar"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Se a URL solicitada n\xe3o estiver autorizada, n\xe3o se carrega e se gera o evento de formul\xe1rio On URL Filtering."}),"\n",(0,n.jsxs)(r.p,{children:["Os arrays ",(0,n.jsx)(r.em,{children:"arrFiltro"})," e ",(0,n.jsx)(r.em,{children:"permitirArrRecusar"})," devem estar sincronizados."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Cada elemento do array ",(0,n.jsx)(r.em,{children:"arrFiltro"})," deve conter um URL a filtrar. Pode utilizar ",(0,n.jsx)(r.em,{children:"*"})," como coringa para substituir um ou mais caracteres."]}),"\n",(0,n.jsxs)(r.li,{children:["Cada elemento correspondente no array ",(0,n.jsx)(r.em,{children:"permitirArrRecusar"})," deve conter um booleano indicando se a URL deve ser autorizado (",(0,n.jsx)(r.strong,{children:"True"}),") ou recusado (",(0,n.jsx)(r.strong,{children:"False"}),").\nEm caso de contradi\xe7\xe3o a n\xedvel dos par\xe2metros (autoriza\xe7\xe3o e recusa de uma mesma URL), ser\xe1 considerada a \xfaltima configura\xe7\xe3o."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:['Para desativar o filtro dos URLs, chame o comando e passe arrays vazios ou passe, respectivamente, os valores "*" e True nos \xfaltimos elementos dos arrays ',(0,n.jsx)(r.em,{children:"arrFiltro e permitirArrRecusar"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Quando tiver executado o comando, os filtros s\xe3o transformados em propriedade da \xe1rea Web. Se os arrays ",(0,n.jsx)(r.em,{children:"arrFiltro"})," e ",(0,n.jsx)(r.em,{children:"permitirArrRecusar"})," s\xe3o apagados ou reinicializados, os filtros permanecem ativos sempre que o comando n\xe3o tiver sido executado novamente. Para conhecer os filtros ativos para uma \xe1rea, deve utilizar o comando ",(0,n.jsx)(r.a,{href:"/docs/pt/commands/wa-get-url-filters",children:"WA GET URL FILTERS"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Importante"}),': o filtro dos URLs realizado por este comando apenas aplica a qualquer requisi\xe7\xe3o para mudar a URL prim\xe1ria da p\xe1gina, seja do usu\xe1rio, c\xf3digo javascript ou c\xf3digo 4D, exceto para o comando [#cmd id="1020"/] e URLs iniciando com "javascript:".']}),"\n",(0,n.jsx)(r.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsx)(r.p,{children:"Imagine que deseja permitir acesso todos sites web .org, .net e .fr:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT($filtros;0)\n\xa0ARRAY BOOLEAN($permitirRecusar;0)\n\xa0\n\xa0APPEND TO ARRAY($filtros;"*.org")\n\xa0APPEND TO ARRAY($permitirRecusar;False)\n\xa0APPEND TO ARRAY($filtros;"*.net")\n\xa0APPEND TO ARRAY($permitirRecusar;False)\n\xa0APPEND TO ARRAY($filtros;"*.fr")\n\xa0APPEND TO ARRAY($permitirRecusar;False)\n\xa0WA SET URL FILTERS(MinhaWArea;$filtros;$permitirRecusar)\n'})}),"\n",(0,n.jsx)(r.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsx)(r.p,{children:"Imagine que deseja acessar todos os websites exceto russos (.ru):"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT($filtros;0)\n\xa0ARRAY BOOLEAN($permitirRecusar;0)\n\xa0\n\xa0APPEND TO ARRAY($filtros;"*")\xa0//Selecionar tudo\n\xa0APPEND TO ARRAY($permitirRecusar;False)\xa0//Recusar tudo\n\xa0APPEND TO ARRAY($filtros;"www.*.ru")\xa0//Selecionar *.ru\n\xa0APPEND TO ARRAY($permitirRecusar;True)\xa0//Permitir\n\xa0WA SET URL FILTERS(MinhaWArea;$filtros;$permitirRecusar)\n'})}),"\n",(0,n.jsx)(r.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,n.jsx)(r.p,{children:"Voc\xea pode permitir acesso ao web site 4Ds (.com, .fr, .es, etc.):"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT($filtros;0)\n\xa0ARRAY BOOLEAN($permitirRecusar;0)\n\xa0\n\xa0APPEND TO ARRAY($filtros;"*")\xa0//Selecionar tudo\n\xa0APPEND TO ARRAY($permitirRecusar;False)\xa0//Recusar tudo\n\xa0APPEND TO ARRAY($filtros;"www.4D.*")\xa0//Selecionar 4d.fr, 4d.com...\n\xa0APPEND TO ARRAY($permitirRecusar;True)\xa0//Permitir\n\xa0WA SET URL FILTERS(MinhaWArea;$filtros;$permitirRecusar)\n'})}),"\n",(0,n.jsx)(r.h2,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,n.jsx)(r.p,{children:"Voc\xea quer autorizar o acesso local \xe0 documenta\xe7\xe3o apenas (que fica na pasta C://doc):"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:"\xa0ARRAY TEXT($filtros;0)ARRAY BOOLEAN($PermitirRecusar;0)\n\xa0\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0APPEND TO ARRAY($filtros;"*")\xa0//Selecionar tudo\n\xa0APPEND TO ARRAY($PermitirRecusar;False)\xa0//Negar tudo\n\xa0APPEND TO ARRAY($filtros;"file://C:/doc/*")\n\xa0\xa0//Selecionar a rota ao arquivo:// autorizado\n\xa0APPEND TO ARRAY($PermitirRecusar;True)\xa0//Autorizar\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:"\xa0WA SET URL FILTERS(MinhaWArea;$filtros;$PermitirRecusar)\n"})}),"\n",(0,n.jsx)(r.h2,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,n.jsx)(r.p,{children:"Imagine que deseja permitir acesso para todos os sites, exceto um, por exemplo o site Elcaro:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT($filtros;0)\n\xa0ARRAY BOOLEAN($permitirRecusar;0)\n\xa0APPEND TO ARRAY($filtros;"*")\n\xa0APPEND TO ARRAY($permitirRecusar;True)\xa0//Permitir tudo\n\xa0APPEND TO ARRAY($filtros;"*elcaro*")\xa0//Recusar todo o conte\xfado do elcaro\n\xa0APPEND TO ARRAY($permitirRecusar;False)\n\xa0WA SET URL FILTERS(MinhaWArea;$filtros;$permitirRecusar)\n'})}),"\n",(0,n.jsx)(r.h2,{id:"exemplo-6",children:"Exemplo 6"}),"\n",(0,n.jsx)(r.p,{children:"Imagine que deseja negar o acesso a endere\xe7os IP espec\xedficos:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT($filtros;0)\n\xa0ARRAY BOOLEAN($permitirRecusar;0)\n\xa0APPEND TO ARRAY($filtros;"*")\xa0//Selecionar tudo\n\xa0APPEND TO ARRAY($permitirRecusar;True)\xa0//Permitir tudo\n\xa0APPEND TO ARRAY($filtros;86.83.*") \xa0//Selecionar endere\xe7os IP que come\xe7am com 86.83.\n\xa0APPEND TO ARRAY($permitirRecusar;False)\xa0//Recusar\n\xa0APPEND TO ARRAY($filtros;86.1*") \xa0//Selecionar endere\xe7os IP que come\xe7am com 86.1 (86.10, 86.135 etc.)\n\xa0APPEND TO ARRAY($permitirRecusar;False)\xa0//Recusar\n\xa0WA SET URL FILTERS(MinhaWArea;$filtros;$permitirRecusar)\n\xa0\xa0//(Note que o endere\xe7o IP de um dom\xednio pode variar).\n'})}),"\n",(0,n.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/pt/commands/wa-get-url-filters",children:"WA GET URL FILTERS"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/pt/commands/wa-set-external-links-filters",children:"WA SET EXTERNAL LINKS FILTERS"})]}),"\n",(0,n.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"N\xfamero do comando"}),(0,n.jsx)(r.td,{children:"1030"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Thread-seguro"}),(0,n.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return t},a:function(){return o}});var i=s(667294);let n={},a=i.createContext(n);function o(e){let r=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:r},e.children)}}}]);