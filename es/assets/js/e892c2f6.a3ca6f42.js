"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87928"],{216276:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/dom-count-xml-attributes","title":"DOM Count XML attributes","description":"DOM Count XML attributes ( elementRef ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-count-xml-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/dom-count-xml-attributes","permalink":"/docs/es/commands/dom-count-xml-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-count-xml-attributes.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-count-xml-attributes","title":"DOM Count XML attributes","slug":"/commands/dom-count-xml-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM CLOSE XML","permalink":"/docs/es/commands/dom-close-xml"},"next":{"title":"DOM Count XML elements","permalink":"/docs/es/commands/dom-count-xml-elements"}}'),s=n("785893"),A=n("250065");let d={id:"dom-count-xml-attributes",title:"DOM Count XML attributes",slug:"/commands/dom-count-xml-attributes",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let t={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,A.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"DOM Count XML attributes"})," ( ",(0,s.jsx)(t.em,{children:"elementRef"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Par\xe1metro"}),(0,s.jsx)(t.th,{children:"Tipo"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"elementRef"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Referencia del elemento XML"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Resultado"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"N\xfamero de atributos"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(t.p,{children:["El comando DOM Count XML attributes devuelve el n\xfamero de los atributos XML presentes en el elemento XML designado por ",(0,s.jsx)(t.em,{children:"refElement"}),". Para mayor informaci\xf3n sobre los atributos XML, consulte la secci\xf3n ",(0,s.jsx)(t.em,{children:"Presentaci\xf3n de los comandos XML DOM"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(t.p,{children:"Antes de recuperar los valores de los elementos en un array, usted quiere conocer el n\xfamero de atributos en el siguiente elemento:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(167050).Z+"",width:"562",height:"107"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0var myBlobVar : Blob\n\xa0var $xml_Parent_Ref;$xml_Child_Ref : Text\n\xa0var myResult : Text\n\xa0var $numAttributes : Integer\n\xa0\n\xa0$xml_Parent_Ref:=DOM Parse XML variable(myBlobVar)\n\xa0$xml_Child_Ref:=DOM Get first child XML element($xml_Parent_Ref)\n\xa0\n\xa0$numAttributes:=DOM Count XML attributes($xml_Child_Ref)\n\xa0ARRAY TEXT(tAttrib;$numAttributes)\n\xa0ARRAY TEXT(tValAttrib;$numAttributes)\n\xa0For($i;1;$numAttributes)\n\xa0\xa0\xa0\xa0DOM GET XML ATTRIBUTE BY INDEX($xml_Child_Ref;$i;tAttrib{$i};tValAttrib{$i})\n\xa0End for\n"})}),"\n",(0,s.jsx)(t.p,{children:"En el ejemplo anterior, $numAttributes es igual a 3, tAttrib{1} contiene \u201CFont\u201D, tAttrib{2} contiene \u201CN\u201D, tAttrib{3} contiene \u201Csize\u201D y tValAttrib contiene \u201CVerdana\u201D, \u201C1\u201D y \u201C10\u201D."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Nota:"})," el n\xfamero de \xedndice no corresponde a la ubicaci\xf3n del atributo en el archivo XML mostrado en forma de texto. En XML, el \xedndice de un atributo indica su posici\xf3n entre los atributos clasificados por orden alfab\xe9tico (en funci\xf3n de su nombre)."]}),"\n",(0,s.jsx)(t.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(t.p,{children:"Si el comando se ha ejecutado correctamente, la variable sistema OK toma el valor 1. Si ocurre un error, toma el valor 0."}),"\n",(0,s.jsx)(t.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/es/commands/dom-count-xml-elements",children:"DOM Count XML elements"})}),"\n",(0,s.jsx)(t.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"N\xfamero de comando"}),(0,s.jsx)(t.td,{children:"727"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Hilo seguro"}),(0,s.jsx)(t.td,{children:"\u2713"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Modifica variables"}),(0,s.jsx)(t.td,{children:"OK"})]})]})]})]})}function c(e={}){let{wrapper:t}={...(0,A.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},167050:function(e,t,n){n.d(t,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var r=n(667294);let s={},A=r.createContext(s);function d(e){let t=r.useContext(A);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(A.Provider,{value:t},e.children)}}}]);