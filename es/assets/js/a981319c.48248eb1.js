"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48276"],{118163:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>a,assets:()=>d,toc:()=>c,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/localized-string","title":"Localized string","description":"Localized string ( resNombre ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/localized-string.md","sourceDirName":"commands-legacy","slug":"/commands/localized-string","permalink":"/docs/es/20-R7/commands/localized-string","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flocalized-string.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"localized-string","title":"Localized string","slug":"/commands/localized-string","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Length","permalink":"/docs/es/20-R7/commands/length"},"next":{"title":"Lowercase","permalink":"/docs/es/20-R7/commands/lowercase"}}'),r=s("785893"),l=s("250065");let t={id:"localized-string",title:"Localized string",slug:"/commands/localized-string",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Localized string"})," ( ",(0,r.jsx)(n.em,{children:"resNombre"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resNombre"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre del atributo resNombre"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valor de la cadena designada por resNombre en el lenguaje actual"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando Localized string devuelve el valor de la cadena designada por el atributo ",(0,r.jsx)(n.em,{children:"resNombre"})," para el lenguaje actual."]}),"\n",(0,r.jsxs)(n.p,{children:["Este comando s\xf3lo funciona dentro de una arquitectura XLIFF. Para mayor informaci\xf3n sobre este tipo de arquitectura, por favor consulte la descripci\xf3n de soporte de XLIFF en el ",(0,r.jsx)(n.em,{children:"manual de Dise\xf1o"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-database-localization",title:"Get database localization",children:"Get database localization"})," puede utilizarse para buscar el lenguaje utilizado por la aplicaci\xf3n."]}),"\n",(0,r.jsxs)(n.p,{children:["Pase en ",(0,r.jsx)(n.em,{children:"resNombre"})," el nombre del recurso de la cadena en la cual quiere obtener la traducci\xf3n en el lenguaje objetivo actual."]}),"\n",(0,r.jsx)(n.p,{children:"Tenga encuenta que XLIFF es diacr\xedtica."}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Este es un extracto del archivo .xlf:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-XML",children:'<file source-language="en-US" target-language="es-ES">\n[...]\n\xa0\xa0\xa0<trans-unit resname="Show on disk">\n\xa0\xa0\xa0\xa0\xa0\xa0<source>Show on disk</source>\n\xa0\xa0\xa0\xa0\xa0\xa0<target>Mostrar en el disco</target>\n\xa0\xa0\xa0</trans-unit>\n'})}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de la ejecuci\xf3n de la siguiente instrucci\xf3n:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$valorES:=Localized string("Show on disk")\n'})}),"\n",(0,r.jsx)(n.p,{children:"... si el lenguaje actual es el Espa\xf1ol, $valorES contiene \u201CMostrar en el disco\u201D."}),"\n",(0,r.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsxs)(n.p,{children:["Si el comando se ejecuta correctamente, la variable OK toma el valor 1. Si ",(0,r.jsx)(n.em,{children:"resNombre"})," no se encuentra, el comando devuelve una cadena vac\xeda y la variable OK toma el valor 0."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-database-localization",children:"Get database localization"})}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"991"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var a=s(667294);let r={},l=a.createContext(r);function t(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);