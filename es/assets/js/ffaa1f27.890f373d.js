"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69984"],{832038:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>i,contentTitle:()=>o});var t=JSON.parse('{"id":"WebServer/from-qodlyscript-to-4d","title":"De QodlyScript al lenguaje 4D","description":"Los desarrolladores 4D utilizan la documentaci\xf3n de Qodly Studio para aprender a dise\xf1ar sus formularioss Qodly en Qodly Studio.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/WebServer/from-qodlyscript-to-4d.md","sourceDirName":"WebServer","slug":"/WebServer/from-qodlyscript-to-4d","permalink":"/docs/es/20-R6/WebServer/from-qodlyscript-to-4d","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Ffrom-qodlyscript-to-4d.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"from-qodlyscript-to-4d","title":"De QodlyScript al lenguaje 4D"},"sidebar":"docs","previous":{"title":"Qodly Studio for 4D","permalink":"/docs/es/20-R6/WebServer/qodly-studio"},"next":{"title":"REST API","permalink":"/docs/es/20-R6/category/rest-api"}}'),r=s("785893"),d=s("250065");let l={id:"from-qodlyscript-to-4d",title:"De QodlyScript al lenguaje 4D"},o=void 0,a={},i=[{value:"Nombres de variables",id:"nombres-de-variables",level:2},{value:"S\xedmbolos y palabras clave",id:"s\xedmbolos-y-palabras-clave",level:2},{value:"Nombres de comandos y constantes",id:"nombres-de-comandos-y-constantes",level:2},{value:"Ejemplo",id:"ejemplo",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Los desarrolladores 4D utilizan la ",(0,r.jsx)(n.a,{href:"https://developer.qodly.com/docs/studio/overview",children:"documentaci\xf3n de Qodly Studio"})," para aprender a dise\xf1ar sus formularioss Qodly en Qodly Studio."]}),"\n",(0,r.jsxs)(n.p,{children:["Se ofrecen ejemplos de c\xf3digo en ",(0,r.jsx)(n.a,{href:"https://developer.qodly.com/docs/category/qodlyscript",children:"QodlyScript"}),", pero como QodlyScript hereda del Lenguaje 4D, no se sentir\xe1 perdido. Convertir c\xf3digo QodlyScript a lenguaje 4D es f\xe1cil, s\xf3lo requiere algunas adaptaciones."]}),"\n",(0,r.jsx)(n.h2,{id:"nombres-de-variables",children:"Nombres de variables"}),"\n",(0,r.jsxs)(n.p,{children:["QodlyScript solo admite variables locales, por lo que las variables en los ejemplos de QodlyScript no llevan el prefijo ",(0,r.jsx)(n.code,{children:"$"}),". En el c\xf3digo 4D, aseg\xfarese de ",(0,r.jsx)(n.strong,{children:"prefijar los nombres de las variables con $"})," para que sean identificadas como variables locales por 4D."]}),"\n",(0,r.jsx)(n.h2,{id:"s\xedmbolos-y-palabras-clave",children:"S\xedmbolos y palabras clave"}),"\n",(0,r.jsx)(n.p,{children:"Algunos s\xedmbolos b\xe1sicos, operadores y palabras clave difieren en QodlyScript y deben adaptarse al Lenguaje 4D. Estas se listan a continuaci\xf3n:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"QodlyScript"}),(0,r.jsx)(n.th,{children:"Lenguaje 4D"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:","}),(0,r.jsx)(n.td,{children:";"}),(0,r.jsx)(n.td,{children:"separador de argumentos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"="}),(0,r.jsx)(n.td,{children:":="}),(0,r.jsx)(n.td,{children:"operador de asignaci\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"=="}),(0,r.jsx)(n.td,{children:"="}),(0,r.jsx)(n.td,{children:"operador de comparaci\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"declare"}),(0,r.jsx)(n.td,{children:"#Declare"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"switch"}),(0,r.jsx)(n.td,{children:"Case of"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"constructor"}),(0,r.jsx)(n.td,{children:"Class constructor"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"extends"}),(0,r.jsx)(n.td,{children:"Class extends"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"end"}),(0,r.jsx)(n.td,{children:"End for, End For each, End if, End case, End use, End while"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"forEach"}),(0,r.jsx)(n.td,{children:"For each"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"tipo de variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"tipo de variable"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Algunos otros elementos tienen una capitalizaci\xf3n diferente (por ejemplo: ",(0,r.jsx)(n.code,{children:"this"})," vs ",(0,r.jsx)(n.code,{children:"This"}),"), pero se pueden pegar directamente en c\xf3digo de 4D."]}),"\n",(0,r.jsx)(n.h2,{id:"nombres-de-comandos-y-constantes",children:"Nombres de comandos y constantes"}),"\n",(0,r.jsxs)(n.p,{children:["Los nombres de comandos y constantes de QodlyScript se escriben en may\xfasculas y sin espacios. Adem\xe1s, los nombres de las constantes de QodlyScript comienzan con la letra ",(0,r.jsx)(n.code,{children:"k"}),". Puede que necesite adaptar estos elementos de QodlyScript al lenguaje 4D."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Normalmente, s\xf3lo tendr\xe1 que convertir los nombres. Por ejemplo, ",(0,r.jsx)(n.code,{children:"newCollection"})," en QodlyScript es ",(0,r.jsx)(n.code,{children:"New collection"})," en lenguaje 4D."]}),"\n",(0,r.jsxs)(n.li,{children:["Sin embargo, algunos comandos han sido renombrados para un mejor cumplimiento, por ejemplo ",(0,r.jsx)(n.code,{children:"atan"})," y ",(0,r.jsx)(n.code,{children:"sqrt"})," son nombres de QodlyScript para los comandos ",(0,r.jsx)(n.code,{children:"Arctan"})," y ",(0,r.jsx)(n.code,{children:"Square root"})," en Lenguaje 4D."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"C\xf3digo QodlyScript:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-qs",children:" declare(entitySelection : 4D.EntitySelection)  \n var dataClass : 4D.DataClass\n var entity, duplicate : 4D.Entity\n var status : object\n dataClass=entitySelection.getDataClass()\n forEach(entity,entitySelection)\n    duplicate=dataClass.new()\n    duplicate.fromObject(entity.toObject())\n    duplicate[dataClass.getInfo().primaryKey]=null\n    status=duplicate.save()\n end\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"C\xf3digo 4D equivalente:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" #DECLARE ( $entitySelection : 4D.EntitySelection )  \n var $dataClass : 4D.DataClass\n var $entity; $duplicate : 4D.Entity\n var $status : Object\n $dataClass:=$entitySelection.getDataClass()\n For each($entity;$entitySelection)\n    $duplicate:=$dataClass.new()\n    $duplicate.fromObject($entity.toObject())\n    $duplicate[$dataClass.getInfo().primaryKey]:=Null\n    $status:=$duplicate.save()\n End for each\n\n"})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(667294);let r={},d=t.createContext(r);function l(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);