"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91077"],{486539:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/insert-in-blob","title":"INSERT IN BLOB","description":"INSERT IN BLOB ( BLOB ; offset ; numero {; relleno} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/insert-in-blob.md","sourceDirName":"commands-legacy","slug":"/commands/insert-in-blob","permalink":"/docs/es/20-R7/commands/insert-in-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finsert-in-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"insert-in-blob","title":"INSERT IN BLOB","slug":"/commands/insert-in-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXPAND BLOB","permalink":"/docs/es/20-R7/commands/expand-blob"},"next":{"title":"INTEGER TO BLOB","permalink":"/docs/es/20-R7/commands/integer-to-blob"}}'),t=s("785893"),i=s("250065");let d={id:"insert-in-blob",title:"INSERT IN BLOB",slug:"/commands/insert-in-blob",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Nota",id:"nota",level:3},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"INSERT IN BLOB"})," ( ",(0,t.jsx)(n.em,{children:"BLOB"})," ; ",(0,t.jsx)(n.em,{children:"offset"})," ; ",(0,t.jsx)(n.em,{children:"numero"})," {; ",(0,t.jsx)(n.em,{children:"relleno"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"BLOB en el cual insertar los bytes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"offset"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Posici\xf3n de inicio de inserci\xf3n de los bytes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numero"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de bytes a insertar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"relleno"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valor de byte por defecto (0x00..0xFF) 0x00 si se omite"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando INSERT IN BLOB inserta el n\xfamero de bytes especificado por ",(0,t.jsx)(n.em,{children:"numero"})," en el BLOB ",(0,t.jsx)(n.em,{children:"blob"})," en la posici\xf3n especificada por ",(0,t.jsx)(n.em,{children:"offset"}),". El BLOB se vuelve ",(0,t.jsx)(n.em,{children:"numero"})," bytes m\xe1s grande."]}),"\n",(0,t.jsxs)(n.p,{children:["Si no especifica el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"relleno"}),", los bytes insertados en el BLOB se fijan para ",(0,t.jsx)(n.em,{children:"0x00"}),". De lo contrario, los bytes se definen para el valor pasado en ",(0,t.jsx)(n.em,{children:"defecto"})," (modulo 256 \u2014 0..255)."]}),"\n",(0,t.jsxs)(n.p,{children:["Antes de llamar el comando, pase en la variable del par\xe1metro ",(0,t.jsx)(n.em,{children:"offset"})," la posici\xf3n de la inserci\xf3n relativa al comienzo del BLOB."]}),"\n",(0,t.jsx)(n.h3,{id:"nota",children:"Nota"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota de compatibilidad"}),": como este comando altera el blob pasado como par\xe1metro, no soporta objetos blob (tipo 4D.Blob). Ver ",(0,t.jsx)(n.em,{children:"Pasar blobs y objetos blob a comandos 4D"})," en developer.4d.com."]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/delete-from-blob",children:"DELETE FROM BLOB"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"559"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);