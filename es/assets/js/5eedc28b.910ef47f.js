"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18073"],{221507:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>t,assets:()=>r,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/application-file","title":"Application file","description":"Application file  : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/application-file.md","sourceDirName":"commands-legacy","slug":"/commands/application-file","permalink":"/docs/es/20-R7/commands/application-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fapplication-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"application-file","title":"Application file","slug":"/commands/application-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Entorno 4D","permalink":"/docs/es/20-R7/commands/theme/4D-Environment"},"next":{"title":"Application info","permalink":"/docs/es/20-R7/commands/application-info"}}'),a=i("785893"),l=i("250065");let s={id:"application-file",title:"Application file",slug:"/commands/application-file",displayed_sidebar:"docs"},c=void 0,r={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Application file"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Nombre largo del archivo 4D ejecutable o  de la aplicaci\xf3n 4D"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"El comando Application file devuelve el nombre largo del archivo ejecutable o de la aplicaci\xf3n 4D que est\xe1 utilizando."}),"\n",(0,a.jsxs)(n.p,{children:["En Windows",(0,a.jsx)(n.br,{}),"\nSi est\xe1 utilizando por ejemplo 4D ubicado en \\PROGRAMS\\4D en el disco E, el comando devuelve E:\\PROGRAMS\\4D\\4D.exe."]}),"\n",(0,a.jsxs)(n.p,{children:["En Macintosh",(0,a.jsx)(n.br,{}),"\nSi est\xe1 corriendo por ejemplo 4D en la carpeta Programas del disco Macintosh HD, el comando devuelve Macintosh HD:Programs:4D.app."]}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Al iniciar su base de datos en Windows, necesita verificar si una librer\xeda DLL se encuentra ubicada en el mismo nivel del archivo ejecutable 4D. En el de su aplicaci\xf3n puede escribir:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0If(Is Windows&(Application type#4D Server))\n\xa0\xa0\xa0\xa0var $appPath : Object\n\xa0\xa0\xa0\xa0$appPath:=Path to object(Application file)\n\xa0\xa0\xa0\xa0If(Test path name(($appPath.parentFolder)+"XRAYCAPT.DLL")#Is a document)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("XRAYCAPT.DLL is missing. The X-ray capture capability will not be available.")\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/data-file",children:"Data file"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/structure-file",children:"Structure file"})]}),"\n",(0,a.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"491"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return s}});var t=i(667294);let a={},l=t.createContext(a);function s(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);