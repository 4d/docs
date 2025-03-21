"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22430"],{146452:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>l,assets:()=>r,toc:()=>c,contentTitle:()=>i});var l=JSON.parse('{"id":"commands-legacy/volume-list","title":"VOLUME LIST","description":"VOLUME LIST ( volumenes )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/volume-list.md","sourceDirName":"commands-legacy","slug":"/commands/volume-list","permalink":"/docs/es/commands/volume-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvolume-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"volume-list","title":"VOLUME LIST","slug":"/commands/volume-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"VOLUME ATTRIBUTES","permalink":"/docs/es/commands/volume-attributes"},"next":{"title":"System Environment","permalink":"/docs/es/commands/theme/System-Environment"}}'),t=s("785893"),o=s("250065");let d={id:"volume-list",title:"VOLUME LIST",slug:"/commands/volume-list",displayed_sidebar:"docs"},i=void 0,r={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VOLUME LIST"})," ( ",(0,t.jsx)(n.em,{children:"volumenes"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"volumenes"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Nombres de los vol\xfamenes montados actualmente"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando VOLUME LIST llena el array ",(0,t.jsx)(n.em,{children:"volumenes"}),", de tipo texto, con los nombres de los vol\xfamenes definidos (Windows) o montados (Mac OS) en su equipo."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'En Macintosh, devuelve la lista de vol\xfamenes visibles al nivel del Finder. S\xf3lo se devuelven los nombres de los vol\xfamenes (por ejemplo "MacHD", "BootCamp", etc.).'}),"\n",(0,t.jsx)(n.li,{children:'En Windows, devuelve la lista de los vol\xfamenes actualmente definidos sin importar si el volumen est\xe1 presente f\xedsicamente presente (por ejemplo el volumen E:\\ se devolver\xe1 sin importar si hay un CD o DVD en el drive). Los nombres de los vol\xfamenes est\xe1n seguidos por el car\xe1cter separador de carpetas ("C:\\").'}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["Utilizando un \xe1rea de desplazamiento llamada ",(0,t.jsx)(n.em,{children:"atVolumenes,"})," usted quiere mostrar la lista de vol\xfamenes definidos o montados en su equipo, entonces escribe:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(atVolumes;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0VOLUME LIST(atVolumes)\n\xa0\n\xa0\xa0//...\n\xa0End case\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/document-list",children:"DOCUMENT LIST"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/folder-list",children:"FOLDER LIST"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/volume-attributes",children:"VOLUME ATTRIBUTES"})]}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"471"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var l=s(667294);let t={},o=l.createContext(t);function d(e){let n=l.useContext(o);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);