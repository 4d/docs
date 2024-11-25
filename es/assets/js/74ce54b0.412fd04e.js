"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42914"],{666421:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>m,assets:()=>d,toc:()=>a,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/volume-list","title":"VOLUME LIST","description":"VOLUME LIST ( volumenes )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/volume-list.md","sourceDirName":"commands-legacy","slug":"/commands/volume-list","permalink":"/docs/es/commands/volume-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvolume-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"volume-list","title":"VOLUME LIST","slug":"/commands/volume-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"VOLUME ATTRIBUTES","permalink":"/docs/es/commands/volume-attributes"},"next":{"title":"System Environment","permalink":"/docs/es/category/system-environment"}}'),o=s("785893"),l=s("250065");let i={id:"volume-list",title:"VOLUME LIST",slug:"/commands/volume-list",displayed_sidebar:"docs"},r=void 0,d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VOLUME LIST"})," ( ",(0,o.jsx)(n.em,{children:"volumenes"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"volumenes"}),(0,o.jsx)(n.td,{children:"Text array"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nombres de los vol\xfamenes montados actualmente"})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando VOLUME LIST llena el array ",(0,o.jsx)(n.em,{children:"volumenes"}),", de tipo texto, con los nombres de los vol\xfamenes definidos (Windows) o montados (Mac OS) en su equipo."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'En Macintosh, devuelve la lista de vol\xfamenes visibles al nivel del Finder. S\xf3lo se devuelven los nombres de los vol\xfamenes (por ejemplo "MacHD", "BootCamp", etc.).'}),"\n",(0,o.jsx)(n.li,{children:'En Windows, devuelve la lista de los vol\xfamenes actualmente definidos sin importar si el volumen est\xe1 presente f\xedsicamente presente (por ejemplo el volumen E:\\ se devolver\xe1 sin importar si hay un CD o DVD en el drive). Los nombres de los vol\xfamenes est\xe1n seguidos por el car\xe1cter separador de carpetas ("C:\\").'}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsxs)(n.p,{children:["Utilizando un \xe1rea de desplazamiento llamada ",(0,o.jsx)(n.em,{children:"atVolumenes,"})," usted quiere mostrar la lista de vol\xfamenes definidos o montados en su equipo, entonces escribe:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(atVolumes;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0VOLUME LIST(atVolumes)\n\xa0\n\xa0\xa0//...\n\xa0End case\n"})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/document-list",children:"DOCUMENT LIST"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/folder-list",children:"FOLDER LIST"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/volume-attributes",children:"VOLUME ATTRIBUTES"})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return i}});var t=s(667294);let o={},l=t.createContext(o);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);