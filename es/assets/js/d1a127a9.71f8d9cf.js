"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69097"],{941229:function(e,n,s){s.r(n),s.d(n,{metadata:()=>d,contentTitle:()=>i,default:()=>h,assets:()=>t,toc:()=>a,frontMatter:()=>l});var d=JSON.parse('{"id":"commands-legacy/bool","title":"Bool","description":"Bool ( expresion ) : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/bool.md","sourceDirName":"commands-legacy","slug":"/commands/bool","permalink":"/docs/es/commands/bool","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbool.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"bool","title":"Bool","slug":"/commands/bool","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Boolean","permalink":"/docs/es/category/boolean"},"next":{"title":"False","permalink":"/docs/es/commands/false"}}'),r=s("785893"),o=s("250065");let l={id:"bool",title:"Bool",slug:"/commands/bool",displayed_sidebar:"docs"},i=void 0,t={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Bool"})," ( ",(0,r.jsx)(n.em,{children:"expresion"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expresion"}),(0,r.jsx)(n.td,{children:"Expression"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Expresi\xf3n para la cual devolver la forma booleana"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Forma booleana de la expresi\xf3n"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"Bool"})," devuelve la forma booleana de la expresi\xf3n que se pas\xf3 en ",(0,r.jsx)(n.em,{children:"expresion"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["El comando puede devolver los siguientes valores, dependiendo del tipo de resultado de la ",(0,r.jsx)(n.em,{children:"expresion"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Tipo de la expresi\xf3n"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Retorno del comando Bool"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Indefinido"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Nulo"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Booleano"}),(0,r.jsx)(n.td,{children:"False si falso, de lo contrario True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero"}),(0,r.jsx)(n.td,{children:"False si 0, otro True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Otros tipos"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Este comando es \xfatil cuando se espera que el resultado de una expresi\xf3n sea un booleano, cualquiera que sea el resultado real de su evaluaci\xf3n (por ejemplo, si se eval\xfaa como ",(0,r.jsx)(n.strong,{children:"nulo"})," o ",(0,r.jsx)(n.strong,{children:"indefinido"}),")."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Selecciona un valor dependiendo del contenido de un atributo de campo de objeto, anticipando el caso en el que falta el atributo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $married : Text\n\xa0$married:=Choose(Bool([Person]data.married);"Married";"Single")\n\xa0\xa0//"Single" si el atributo "married" no se encuentra en el campo\n\xa0ALERT("This person is "+$married)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/date",children:"Date"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/num",children:"Num"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/string",children:"String"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/time",children:"Time"})]}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1537"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var d=s(667294);let r={},o=d.createContext(r);function l(e){let n=d.useContext(o);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);