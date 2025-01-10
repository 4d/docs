"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8828"],{697239:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>i,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/wa-get-current-url","title":"WA Get current URL","description":"WA Get current URL ( { ;} objeto* ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/wa-get-current-url.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-current-url","permalink":"/docs/es/commands/wa-get-current-url","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-current-url.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-get-current-url","title":"WA Get current URL","slug":"/commands/wa-get-current-url","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Forward URL available","permalink":"/docs/es/commands/wa-forward-url-available"},"next":{"title":"WA GET EXTERNAL LINKS FILTERS","permalink":"/docs/es/commands/wa-get-external-links-filters"}}'),s=r("785893"),a=r("250065");let d={id:"wa-get-current-url",title:"WA Get current URL",slug:"/commands/wa-get-current-url",displayed_sidebar:"docs"},c=void 0,l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WA Get current URL"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre del objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"URL actualmente cargada en el \xe1rea Web"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando WA Get current URL devuelve la direcci\xf3n URL de la p\xe1gina mostrada en el \xe1rea web designada por los par\xe1metros ",(0,s.jsx)(n.em,{children:"*"})," y ",(0,s.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Si el URL actual no est\xe1 disponible, el comando devuelve una cadena vac\xeda."}),"\n",(0,s.jsx)(n.p,{children:'Si la p\xe1gina web est\xe1 cargada completamente, el valor devuelto por la funci\xf3n es id\xe9ntico al de la variable "URL" asociada con el \xe1rea web. Si la p\xe1gina est\xe1 en el proceso de ser cargada, los dos valores ser\xe1n diferentes: la funci\xf3n devuelve el URL completamente cargado y la variable contiene el URL en proceso de ser cargado.'}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsxs)(n.p,{children:['La p\xe1gina mostrada es el URL "',(0,s.jsx)(n.a,{href:"http://www.apple.com",children:"www.apple.com"}),'" y la p\xe1gina "',(0,s.jsx)(n.a,{href:"http://www.4dhispano.com",children:"www.4dhispano.com"}),'" est\xe1 en proceso de ser cargada:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$url:=WA Get current URL(MyWArea)\xa0//devuelve "http://www.apple.com"\n\xa0\xa0//La variable URL asociada contiene "http://www.4dhispano.com"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/wa-open-url",children:"WA OPEN URL"})}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1025"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var t=r(667294);let s={},a=t.createContext(s);function d(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);