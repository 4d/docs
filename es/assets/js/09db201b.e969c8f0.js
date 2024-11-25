"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50770"],{347486:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>m,assets:()=>t,toc:()=>c,frontMatter:()=>o});var r=JSON.parse('{"id":"commands-legacy/wa-open-url","title":"WA OPEN URL","description":"WA OPEN URL ( { ;} objeto ; url* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/wa-open-url.md","sourceDirName":"commands-legacy","slug":"/commands/wa-open-url","permalink":"/docs/es/commands/wa-open-url","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-open-url.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-open-url","title":"WA OPEN URL","slug":"/commands/wa-open-url","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA OPEN FORWARD URL","permalink":"/docs/es/commands/wa-open-forward-url"},"next":{"title":"WA OPEN WEB INSPECTOR","permalink":"/docs/es/commands/wa-open-web-inspector"}}'),a=s("785893"),i=s("250065");let o={id:"wa-open-url",title:"WA OPEN URL",slug:"/commands/wa-open-url",displayed_sidebar:"docs"},l=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WA OPEN URL"})," ( {* ;} ",(0,a.jsx)(n.em,{children:"objeto"})," ; ",(0,a.jsx)(n.em,{children:"url"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objeto"}),(0,a.jsx)(n.td,{children:"any"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nombre del objeto (si se especifica *) o Variable (si * se omite)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"url"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"URL a cargar en el \xe1rea Web"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"WA OPEN URL"})," carga en el \xe1rea web designada por los par\xe1metros ",(0,a.jsx)(n.em,{children:"*"})," y ",(0,a.jsx)(n.em,{children:"objeto"})," el URL pasado en el par\xe1metro ",(0,a.jsx)(n.em,{children:"url"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Si se pasa una cadena vac\xeda en ",(0,a.jsx)(n.em,{children:"url"}),', el comando WA OPEN URL no hace nada y no se genera ning\xfan error. Para cargar una p\xe1gina vac\xeda en el \xe1rea web, pase la cadena "about:blank" en ',(0,a.jsx)(n.em,{children:"url"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Como el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/open-url",children:"OPEN URL"}),", ",(0,a.jsx)(n.strong,{children:"WA OPEN URL"})," acepta varios tipos de sintaxis en el par\xe1metro ",(0,a.jsx)(n.em,{children:"url"})," para designar los archivos:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'sintaxis posix: "file:///c:/Mi%20Archivo"'}),"\n",(0,a.jsx)(n.li,{children:'sintaxis sistema: "c:\\MiCarpeta\\MiArchivo" (Windows) o "MiDisco:MiCarpeta:MiArchivo" (Mac OS).'}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"}),' por compatibilidad, la sintaxis "file://" (uso de dos "/") se acepta en 4D pero no cumple con el RFC. Recomendamos utilizar la sintaxis "file:///" (con tres "/") que cumple con el RFC.']}),"\n",(0,a.jsxs)(n.p,{children:["En Mac OS, cuando FileVault est\xe1 activo, debe utilizar la sintaxis Posix. Puede transformar las rutas del sistema utilizando el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/convert-path-system-to-posix",children:"Convert path system to POSIX"}),"."]}),"\n",(0,a.jsx)(n.p,{children:'Este comando tiene el mismo efecto que la modificaci\xf3n del valor de la variable "URL" asociada al \xe1rea. Por ejemplo, si la variable del \xe1rea se llama MiWArea_url:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0MyWArea_url:="http://www.4d.com/"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Es equivalente a:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0WA OPEN URL(MyWArea;"http://www.4d.com/")\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/open-url",children:"OPEN URL"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/wa-open-back-url",children:"WA OPEN BACK URL"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/wa-open-forward-url",children:"WA OPEN FORWARD URL"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var r=s(667294);let a={},i=r.createContext(a);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);