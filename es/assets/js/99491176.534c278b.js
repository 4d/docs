"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60519"],{838079:function(e,n,s){s.r(n),s.d(n,{metadata:()=>a,contentTitle:()=>c,default:()=>m,assets:()=>d,toc:()=>l,frontMatter:()=>r});var a=JSON.parse('{"id":"commands-legacy/web-get-statistics","title":"WEB GET STATISTICS","description":"WEB GET STATISTICS ( paginas ; hits ; uso )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-get-statistics.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-statistics","permalink":"/docs/es/commands/web-get-statistics","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-statistics.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-get-statistics","title":"WEB GET STATISTICS","slug":"/commands/web-get-statistics","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB Get server info","permalink":"/docs/es/commands/web-get-server-info"},"next":{"title":"WEB GET VARIABLES","permalink":"/docs/es/commands/web-get-variables"}}'),t=s("785893"),i=s("250065");let r={id:"web-get-statistics",title:"WEB GET STATISTICS",slug:"/commands/web-get-statistics",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB GET STATISTICS"})," ( ",(0,t.jsx)(n.em,{children:"paginas"})," ; ",(0,t.jsx)(n.em,{children:"hits"})," ; ",(0,t.jsx)(n.em,{children:"uso"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paginas"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Nombres de las p\xe1ginas m\xe1s consultadas"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hits"}),(0,t.jsx)(n.td,{children:"Integer array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"N\xfamero de hits para cada p\xe1gina"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uso"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Porcentaje de la cach\xe9 utilizado"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"WEB GET STATISTICS"})," permite obtener la informaci\xf3n sobre las p\xe1ginas m\xe1s consultadas, cargadas en la cach\xe9 del servidor web. Por lo tanto, estas estad\xedsticas conciernen \xfanicamente las p\xe1ginas est\xe1ticas, las im\xe1genes GIF, las im\xe1genes JPEG <100 KB y las hojas de estilo (.css)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," para mayor informaci\xf3n sobre el par\xe1metro de la cach\xe9 del servidor web 4D, consulte la secci\xf3n ",(0,t.jsx)(n.em,{children:"Par\xe1metros del servidor web"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["El comando llena el array de texto ",(0,t.jsx)(n.em,{children:"p\xe1ginas"})," con los nombres de las p\xe1ginas m\xe1s consultadas. El array entero largo ",(0,t.jsx)(n.em,{children:"hits"})," recibe el n\xfamero de \u201Chits\u201D por cada p\xe1gina. La variable num\xe9rica ",(0,t.jsx)(n.em,{children:"uso"})," recibe el porcentaje de la cach\xe9 web utilizada por cada p\xe1gina."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Asumamos que quiere generar una p\xe1gina semidin\xe1mica que muestre las estad\xedsticas de utilizaci\xf3n de la cach\xe9 web. Para esto, en una p\xe1gina HTML est\xe1tica llamada \u201Cstats.shtm\u201D (las p\xe1ginas con sufijo .shtm son analizadas autom\xe1ticamente por el servidor web), ponga la etiqueta \x3c!--4DSCRIPT/STATS\u2013\u2013> as\xed como las referencias a las variables vPages y vUsage, por ejemplo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-HTML",children:"<html>\n<head><title>4D Web Stats</title></head>\n\x3c!--#4DSCRIPT/STATS--\x3e\n<body>\n<strong>Porcentaje de cach\xe9 utilizada: </strong>\n\x3c!--#4DTEXT vUsage--\x3e\n<hr>\n<strong>P\xe1ginas m\xe1s consultadas: </strong>\n\x3c!--#4DHTML vPages--\x3e\n</body>\n</html>\n"})}),"\n",(0,t.jsx)(n.p,{children:"En el m\xe9todo de proyecto STATS, escriba el siguiente c\xf3digo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $1 : Text\n\xa0var vPages : Text\n\xa0ARRAY TEXT(paginas;0)\n\xa0ARRAY LONGINT(hits;0)\n\xa0var vUsage : Integer\n\xa0WEB GET STATISTICS(paginas;hits;vUsage)\n\xa0\n\xa0For($i;1;Size of array(paginas))\n\xa0\xa0\xa0\xa0\\\\Para cada p\xe1gina presente en la cach\xe9\n\xa0\xa0\xa0\xa0vPaginas:=paginas{$i}+" "+String(hits{$i})+"\n\xa0\xa0\xa0\xa0" \\\\Inserte el nombre de la p\xe1gina y el c\xf3digo HTML\n\xa0End for\n'})}),"\n",(0,t.jsxs)(n.p,{children:['Puede enviar la p\xe1gina "stats.shtm" utilizando un enlace URL o utilizando el comando ',(0,t.jsx)(n.a,{href:"/docs/es/commands/web-send-file",children:"WEB SEND FILE"}),"."]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var a=s(667294);let t={},i=a.createContext(t);function r(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);