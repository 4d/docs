"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78936"],{198703:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/wa-set-preference","title":"WA SET PREFERENCE","description":"WA SET PREFERENCE ( { ;} objeto ; selector ; valor* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/wa-set-preference.md","sourceDirName":"commands-legacy","slug":"/commands/wa-set-preference","permalink":"/docs/es/commands/wa-set-preference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-set-preference.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wa-set-preference","title":"WA SET PREFERENCE","slug":"/commands/wa-set-preference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA SET PAGE CONTENT","permalink":"/docs/es/commands/wa-set-page-content"},"next":{"title":"WA SET URL FILTERS","permalink":"/docs/es/commands/wa-set-url-filters"}}'),d=r("785893"),t=r("250065");let i={id:"wa-set-preference",title:"WA SET PREFERENCE",slug:"/commands/wa-set-preference",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"WA SET PREFERENCE"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"objeto"})," ; ",(0,d.jsx)(n.em,{children:"selector"})," ; ",(0,d.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objeto"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"selector"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Preferencia a modificar"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"valor"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Valor de la preferencia (True = permitido,  False = no autorizado)"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando WA SET PREFERENCE permite fijar diferentes preferencias para el \xe1rea web designada por los par\xe1metros ",(0,d.jsx)(n.em,{children:"*"})," y ",(0,d.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,d.jsx)(n.em,{children:"selector"})," la preferencia a modificar y en ",(0,d.jsx)(n.em,{children:"valor"})," el valor a atribuirle. Puede pasar en ",(0,d.jsx)(n.em,{children:"selector"}),", una de las siguientes constantes, que se encuentran en el tema ",(0,d.jsx)(n.em,{children:"Web Area"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Comentario"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"WA enable contextual menu"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:"Autoriza la visualizaci\xf3n del men\xfa contextual est\xe1ndar en el \xe1rea web. Por defecto (cualquier m\xe1quina) = False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"WA enable URL drop"}),(0,d.jsx)(n.td,{children:"101"}),(0,d.jsxs)(n.td,{children:["Cambia el icono de soltar y llama al evento ",(0,d.jsx)(n.em,{children:"On Window Opening Denied"})," cuando se sueltan las URLs o los archivos en el \xe1rea web. Por defecto (toda m\xe1quina) = False"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"WA enable Web inspector"}),(0,d.jsx)(n.td,{children:"100"}),(0,d.jsx)(n.td,{children:"Permite la visualizaci\xf3n del inspector web en el \xe1rea. Por defecto (todo m\xe1quina) = False."})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Para cada preferencia, pase ",(0,d.jsx)(n.strong,{children:"True"})," en ",(0,d.jsx)(n.em,{children:"valor"})," para activarla y ",(0,d.jsx)(n.strong,{children:"False"})," para desactivarla."]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"Para activar la URL su\xe9ltela en el \xe1rea web 'myarea':"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//en el m\xe9todo del formulario\n\xa0WA SET PREFERENCE(*;"myarea";WA enable URL drop;True)\n'})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//en el m\xe9todo de objetos del \xe1rea web\n\xa0If(FORM Event.code=On Window Opening Denied)\n\xa0\xa0\xa0\xa0WA OPEN URL(*;"myarea";WA Get last filtered URL(*;"WebArea"))\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/commands/wa-get-preference",children:"WA GET PREFERENCE"})}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"1041"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var s=r(667294);let d={},t=s.createContext(d);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);