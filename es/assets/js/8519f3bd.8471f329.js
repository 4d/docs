"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60372"],{351369:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>d,toc:()=>t,contentTitle:()=>l});var a=JSON.parse('{"id":"commands-legacy/web-get-variables","title":"WEB GET VARIABLES","description":"WEB GET VARIABLES ( arrayNoms ; arrayValores )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-get-variables.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-variables","permalink":"/docs/es/commands/web-get-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-variables.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-get-variables","title":"WEB GET VARIABLES","slug":"/commands/web-get-variables","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB GET STATISTICS","permalink":"/docs/es/commands/web-get-statistics"},"next":{"title":"WEB Is secured connection","permalink":"/docs/es/commands/web-is-secured-connection"}}'),r=s("785893"),o=s("250065");let i={id:"web-get-variables",title:"WEB GET VARIABLES",slug:"/commands/web-get-variables",displayed_sidebar:"docs"},l=void 0,d={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Acerca de los formularios Web y sus acciones asociadas",id:"acerca-de-los-formularios-web-y-sus-acciones-asociadas",level:5},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WEB GET VARIABLES"})," ( ",(0,r.jsx)(n.em,{children:"arrayNoms"})," ; ",(0,r.jsx)(n.em,{children:"arrayValores"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"arrayNoms"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nombres de las variables del formulario web"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"arrayValores"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valores de las variables del formulario web"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"WEB GET VARIABLES"})," llena los arrays texto ",(0,r.jsx)(n.em,{children:"arrayNoms"})," y ",(0,r.jsx)(n.em,{children:"arrayValores"})," con los nombres y los valores de las variables contenidas en el formulario web \u201Cenviado\u201D al servidor web."]}),"\n",(0,r.jsx)(n.p,{children:"Este comando obtiene el valor de todas las variables que pueden incluirse en p\xe1ginas HTML: \xe1reas de entrada, botones, casillas de selecci\xf3n, botones de radio, men\xfas pop up, listas de opciones..."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," en el caso de las casillas de selecci\xf3n, el nombre de la variable y su valor s\xf3lo se devuelven si la casilla de selecci\xf3n ha sido seleccionada."]}),"\n",(0,r.jsx)(n.p,{children:"Este comando es valido sin importar el tipo de URL o de formulario (m\xe9todo POST o GET) enviado al servidor web."}),"\n",(0,r.jsxs)(n.p,{children:["Este comando puede llamarse, si es necesario, en el ",(0,r.jsx)(n.em,{children:"M\xe9todo de base On Web Connection"})," o en cualquier otro m\xe9todo 4D que resulte del env\xedo de un formulario."]}),"\n",(0,r.jsx)(n.h5,{id:"acerca-de-los-formularios-web-y-sus-acciones-asociadas",children:"Acerca de los formularios Web y sus acciones asociadas"}),"\n",(0,r.jsxs)(n.p,{children:["Un formulario contiene \xe1reas de entrada (\xe1reas de texto, botones, casillas de selecci\xf3n), cada una con un nombre.",(0,r.jsx)(n.br,{}),'\nCuando un formulario se "env\xeda" al servidor web (una petici\xf3n se env\xeda al servidor web), la petici\xf3n contiene, entre otros, la lista de \xe1reas de entrada y sus valores respectivos.',(0,r.jsx)(n.br,{}),"\nHay dos m\xe9todos para enviar un formulario (ambos pueden utilizarse indiferentemente con 4D):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"POST, generalmente utilizado para a\xf1adir datos en el servidor web, a una base de datos,"}),"\n",(0,r.jsx)(n.li,{children:"GET, generalmente utilizado para la petici\xf3n del servidor web, datos que provienen de una base de de datos."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Un formulario contiene dos campos, vNombre y vCiudad que reciben los valores \u201CROBERTO\u201D y \u201CPARIS\u201D. La acci\xf3n asociada al formulario es \u201C/4DACTION/WEBFORM\u201D."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si el m\xe9todo de formulario es POST (el utilizado con m\xe1s frecuencia), los datos introducidos no ser\xe1n visible en el URL (",(0,r.jsx)(n.a,{href:"http://127.0.0.1/4DACTION/WEBFORM",children:"http://127.0.0.1/4DACTION/WEBFORM"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Si el m\xe9todo de formulario es GET, los datos ser\xe1n visibles en el URL (",(0,r.jsx)(n.a,{href:"http://127.0.0.1/4DACTION/WEBFORM?vNOMBRE=ROBERTO&vCIUDAD=PARIS",children:"http://127.0.0.1/4DACTION/WEBFORM?vNOMBRE=ROBERTO&vCIUDAD=PARIS"}),")."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"El m\xe9todo WEBFORM puede ser de esta forma:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($anombres;0)\n\xa0ARRAY TEXT($avalores;0)\n\xa0WEB GET VARIABLES($anombres;$avalores)\n"})}),"\n",(0,r.jsx)(n.p,{children:"El resultado ser\xe1:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$anombres{1}="vNOMBRE"\n\xa0$anombres{2}="vCIUDAD"\n\xa0$avalores{1}="ROBERTO"\n\xa0$avalores{2}="PARIS"\n'})}),"\n",(0,r.jsx)(n.p,{children:"La variable vNOMBRE contiene ROBERTO y vCIUDAD contiene PARIS."}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/web-get-body-part",children:"WEB GET BODY PART"})}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"683"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var a=s(667294);let r={},o=a.createContext(r);function i(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);