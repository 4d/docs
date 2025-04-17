"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26496"],{125080:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>r,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/web-get-statistics","title":"WEB GET STATISTICS","description":"WEB GET STATISTICS ( paginas ; hits ; uso )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/web-get-statistics.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-statistics","permalink":"/docs/pt/commands/web-get-statistics","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-statistics.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"web-get-statistics","title":"WEB GET STATISTICS","slug":"/commands/web-get-statistics","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB Get server info","permalink":"/docs/pt/commands/web-get-server-info"},"next":{"title":"WEB GET VARIABLES","permalink":"/docs/pt/commands/web-get-variables"}}'),t=n("785893"),i=n("250065");let r={id:"web-get-statistics",title:"WEB GET STATISTICS",slug:"/commands/web-get-statistics",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let s={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"WEB GET STATISTICS"})," ( ",(0,t.jsx)(s.em,{children:"paginas"})," ; ",(0,t.jsx)(s.em,{children:"hits"})," ; ",(0,t.jsx)(s.em,{children:"uso"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Par\xe2metro"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"paginas"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Nomes das p\xe1ginas mais consultadas"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"hits"}),(0,t.jsx)(s.td,{children:"Integer array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Nomes de hits para cada p\xe1gina"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"uso"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Porcentagem de cache usado"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(s.p,{children:"O comando WEB GET STATISTICS permite obter a informa\xe7\xe3o sobre as p\xe1ginas mais consultadas, carregadas na cach\xe9 do servidor web. Portanto, estas estat\xedsticas s\xe3o referentes apenas as p\xe1ginas est\xe1ticas, as imagens GIF, as imagens JPEG <100 KB e as folhas de estilo (.css)."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Nota"}),": para maior informa\xe7\xe3o sobre o par\xe2metro da cach\xe9 do servidor web 4D, consulte a se\xe7\xe3o ",(0,t.jsx)(s.a,{href:"/docs/pt/commands/qr-delete-column",children:"QR DELETE COLUMN"}),". ."]}),"\n",(0,t.jsxs)(s.p,{children:["O comando preenche o array de texto p\xe1ginas com os nomes das p\xe1ginas mais consultadas. O array inteiro longo ",(0,t.jsx)(s.em,{children:"hits"})," recebe o n\xfamero de \u201Chits\u201D por cada p\xe1gina. A vari\xe1vel num\xe9rica ",(0,t.jsx)(s.em,{children:"uso"})," recebe a porcentagem da cach\xe9 web utilizada por cada p\xe1gina."]}),"\n",(0,t.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(s.p,{children:"Assumamos que deseja gerar uma p\xe1gina semidin\xe2mica que mostre as estat\xedsticas de utiliza\xe7\xe3o da cach\xe9 web. Para isso, em uma p\xe1gina HTML est\xe1tica chamada \u201Cstats.shtm\u201D (as p\xe1ginas com sufixo .shtm s\xe3o analizadas automaticamente pelo servidor web), ponha a etiqueta \x3c!--4DSCRIPT/STATS\u2013\u2013> assim como as refer\xeancias \xe0s vari\xe1veis vPages e vUsage, por exemplo:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-HTML",children:"<html> \n\n<head><title>4D Web Stats</title></head>\n\x3c!--#4DSCRIPT/STATS--\x3e\n<body>\n<strong>Porcentagem de cach\xe9 utilizada: </strong>\n\x3c!--#4DTEXT vUsage--\x3e\n<hr>\n<strong>P\xe1ginas mais consultadas: </strong>\n\x3c!--#4DHTML vPages--\x3e\n</body>\n</html>\n\n\n"})}),"\n",(0,t.jsx)(s.p,{children:"No m\xe9todo de projeto STATS, escreva o c\xf3digo abaixo:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0var vPages : Text\n\xa0ARRAY TEXT(paginas;0)\n\xa0ARRAY LONGINT(hits;0)\n\xa0var vUsage : Integer\n\xa0WEB GET STATISTICS(paginas;hits;vUsage)\n\xa0\n\xa0For($i;1;Size of array(paginas))\n\xa0\xa0\xa0\xa0\\\\Para cada p\xe1gina apresenta na cach\xe9\n\xa0\xa0\xa0\xa0vPaginas:=paginas{$i}+" "+String(hits{$i})+"\n\xa0\xa0\xa0\xa0" \\\\Insere o nome da p\xe1gina e o c\xf3digo HTML\n\xa0End for\n'})}),"\n",(0,t.jsxs)(s.p,{children:['Pode enviar a p\xe1gina "stats.shtm" utilizando um link URL ou utilizando o comando ',(0,t.jsx)(s.a,{href:"/docs/pt/commands/web-send-file",children:"WEB SEND FILE"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"N\xfamero do comando"}),(0,t.jsx)(s.td,{children:"658"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread-seguro"}),(0,t.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return r}});var a=n(667294);let t={},i=a.createContext(t);function r(e){let s=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);