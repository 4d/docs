"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97282"],{329979:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>x,assets:()=>l,toc:()=>j,frontMatter:()=>c});var r=JSON.parse('{"id":"commands-legacy/object-get-type","title":"OBJECT Get type","description":"OBJECT Get type ( { ;} object* ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-type.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-type","permalink":"/docs/pt/commands/object-get-type","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-type.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-type","title":"OBJECT Get type","slug":"/commands/object-get-type","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get title","permalink":"/docs/pt/commands/object-get-title"},"next":{"title":"OBJECT Get value","permalink":"/docs/pt/commands/object-get-value"}}'),d=t("785893"),s=t("250065");let c={id:"object-get-type",title:"OBJECT Get type",slug:"/commands/object-get-type",displayed_sidebar:"docs"},i=void 0,l={},j=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"OBJECT Get type"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"object"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"object"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nome de objeto (se especificado *) ou Vari\xe1vel (se omitido *)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Tipo de objeto"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"OBJECT Get type"})," command returns the type of the object designated by the ",(0,d.jsx)(n.em,{children:"object"})," and ",(0,d.jsx)(n.em,{children:"*"})," parameters in the current form."]}),"\n",(0,d.jsxs)(n.p,{children:["Passing the optional ",(0,d.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,d.jsx)(n.em,{children:"object"})," parameter is an object name (string). This syntax is mandatory if you are processing static objects such as lines or rectangles.",(0,d.jsx)(n.br,{}),"\nIf you do not pass this parameter, it indicates that the ",(0,d.jsx)(n.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," If you apply this command to a set of objects, the type of the last object is returned."]}),"\n",(0,d.jsxs)(n.p,{children:['The value returned corresponds to one of the following constants, available in the "',(0,d.jsx)(n.em,{children:"Form Object Types"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constant"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type 3D button"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"16"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type 3D checkbox"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"26"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type 3D radio button"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"23"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type button grid"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"20"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type checkbox"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"25"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type combobox"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"11"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type dial"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"28"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type group"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"21"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type groupbox"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"30"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type hierarchical list"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"6"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type hierarchical popup menu"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"13"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type highlight button"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"17"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type invisible button"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"18"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type line"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"32"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type listbox"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"7"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type listbox column"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"9"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type listbox footer"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"10"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type listbox header"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"8"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type matrix"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"35"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type oval"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"34"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type picture button"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"19"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type picture input"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type picture popup menu"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"14"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type picture radio button"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"24"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type plugin area"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"38"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type popup dropdown list"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"12"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type progress indicator"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"27"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type push button"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"15"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type radio button"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"22"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type radio button field"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type rectangle"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"31"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type rounded rectangle"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"33"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type ruler"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"29"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type splitter"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"36"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type static picture"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type static text"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type subform"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"39"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type tab control"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"37"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type text input"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type unknown"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type view pro area"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"42"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type web area"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"40"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object type write pro area"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"41"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"Voc\xea quer carregar um formul\xe1rio e obter a lista de todos os objetos dos list boxes que cont\xe9m."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0FORM LOAD("MyForm")\n\xa0ARRAY TEXT(arrObjects;0)\n\xa0FORM GET OBJECTS(arrObjects)\n\xa0ARRAY LONGINT(ar_type;Size of array(arrObjects))\n\xa0For($i;1;Size of array(arrObjects))\n\xa0\xa0\xa0\xa0ar_type{$i}:=OBJECT Get type(*;arrObjects{$i})\n\xa0\xa0\xa0\xa0If(ar_type{$i}=Object type listbox)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(arrLBObjects;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX GET OBJECTS(*;arrObjects{$i};arrLBObjects)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0FORM UNLOAD\n'})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/commands/form-load",children:"FORM LOAD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/listbox-get-objects",children:"LISTBOX GET OBJECTS"})]}),"\n",(0,d.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1300"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var r=t(667294);let d={},s=r.createContext(d);function c(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);