"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69696"],{750602:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/set-blob-size","title":"SET BLOB SIZE","description":"SET BLOB SIZE ( BLOB ; tama\xf1o {; relleno} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-blob-size.md","sourceDirName":"commands-legacy","slug":"/commands/set-blob-size","permalink":"/docs/es/20-R7/commands/set-blob-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-blob-size.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-blob-size","title":"SET BLOB SIZE","slug":"/commands/set-blob-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REAL TO BLOB","permalink":"/docs/es/20-R7/commands/real-to-blob"},"next":{"title":"TEXT TO BLOB","permalink":"/docs/es/20-R7/commands/text-to-blob"}}'),o=s("785893"),d=s("250065");let l={id:"set-blob-size",title:"SET BLOB SIZE",slug:"/commands/set-blob-size",displayed_sidebar:"docs"},t=void 0,i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Nota",id:"nota",level:5},{value:"Manejo de errores",id:"manejo-de-errores",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SET BLOB SIZE"})," ( ",(0,o.jsx)(n.em,{children:"BLOB"})," ; ",(0,o.jsx)(n.em,{children:"tama\xf1o"})," {; ",(0,o.jsx)(n.em,{children:"relleno"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Blob"}),(0,o.jsx)(n.td,{children:"Blob"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Campo o variable de tipo BLOB"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tama\xf1o"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nuevo tama\xf1o del BLOB"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"relleno"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"C\xf3digo ASCII del caracter de relleno"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["SET BLOB SIZE redimensiona el BLOB ",(0,o.jsx)(n.em,{children:"blob"})," de acuerdo al valor pasado en ",(0,o.jsx)(n.em,{children:"tama\xf1o"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si quiere asignar nuevos bytes a un BLOB y quiere inicializar estos bytes en un valor especifico, pase este valor (0..255) en el par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"relleno"}),"."]}),"\n",(0,o.jsx)(n.h5,{id:"nota",children:"Nota"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota de compatibilidad"}),": como este comando altera el blob pasado como par\xe1metro, no soporta objetos blob (tipo 4D.Blob). Ver ",(0,o.jsx)(n.em,{children:"Pasar blobs y objetos blob a comandos 4D"})," en developer.4d.com."]}),"\n",(0,o.jsx)(n.h4,{id:"manejo-de-errores",children:"Manejo de errores"}),"\n",(0,o.jsxs)(n.p,{children:["Si no puede redimensionar un BLOB por memoria insuficiente, se genera el error -108. Puede interceptar este error utilizando el m\xe9todo de interrupci\xf3n ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"Cuando usted ha terminado con un gran BLOB proceso o interproceso, es buena idea liberar la memoria que ocupa. Para hacer esto, escriba:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(aProcessBLOB;0)\n\xa0SET BLOB SIZE(\u25CAanInterprocessBLOB;0)\n"})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"El siguiente ejemplo crea un BLOB de 16K lleno de 0xFF:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0var vxData : Blob\n\xa0SET BLOB SIZE(vxData;16*1024;0xFF)\n"})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/blob-size",children:"BLOB size"})}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"606"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return l}});var r=s(667294);let o={},d=r.createContext(o);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);