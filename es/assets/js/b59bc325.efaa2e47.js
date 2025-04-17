"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78900"],{263476:function(e,n,r){r.r(n),r.d(n,{default:()=>c,frontMatter:()=>i,metadata:()=>A,assets:()=>s,toc:()=>m,contentTitle:()=>d});var A=JSON.parse('{"id":"commands-legacy/dom-remove-xml-attribute","title":"DOM REMOVE XML ATTRIBUTE","description":"DOM REMOVE XML ATTRIBUTE ( refElement ; nomAtrib )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-remove-xml-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/dom-remove-xml-attribute","permalink":"/docs/es/20-R8/commands/dom-remove-xml-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-remove-xml-attribute.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-remove-xml-attribute","title":"DOM REMOVE XML ATTRIBUTE","slug":"/commands/dom-remove-xml-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Parse XML variable","permalink":"/docs/es/20-R8/commands/dom-parse-xml-variable"},"next":{"title":"DOM REMOVE XML ELEMENT","permalink":"/docs/es/20-R8/commands/dom-remove-xml-element"}}'),t=r("785893"),l=r("250065");let i={id:"dom-remove-xml-attribute",title:"DOM REMOVE XML ATTRIBUTE",slug:"/commands/dom-remove-xml-attribute",displayed_sidebar:"docs"},d=void 0,s={},m=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DOM REMOVE XML ATTRIBUTE"})," ( ",(0,t.jsx)(n.em,{children:"refElement"})," ; ",(0,t.jsx)(n.em,{children:"nomAtrib"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"refElement"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Referencia del elemento XML"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomAtrib"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Atributo a borrar"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando DOM REMOVE XML ATTRIBUTE remueve, si existe, el atributo designado por ",(0,t.jsx)(n.em,{children:"nomAtrib"})," del elemento XML cuya referencia se pasa en el par\xe1metro ",(0,t.jsx)(n.em,{children:"refElement"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si atributo se suprime correctamente, la variable sistema ",(0,t.jsx)(n.em,{children:"OK"})," toma el valor 1. Si no existe ning\xfan atributo llamado ",(0,t.jsx)(n.em,{children:"nomAtrib"})," en ",(0,t.jsx)(n.em,{children:"refElement"}),", se devuelve un error y la variable sistema ",(0,t.jsx)(n.em,{children:"OK"})," toma el valor 0."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Dada la siguiente estructura:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(461961).Z+"",width:"510",height:"138"})}),"\n",(0,t.jsx)(n.p,{children:'El siguiente c\xf3digo permite remover el primer atributo "N=1":'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var myBlobVar : Blob\n\xa0var $xml_Parent_Ref;$xml_Child_Ref : Text\n\xa0var $LineNum : Integer\n\xa0\n\xa0$xml_Parent_Ref:=DOM Parse XML variable(myBlobVar)\n\xa0$xml_Child_Ref:=DOM Get first child XML element($xml_Parent_Ref)\n\xa0DOM REMOVE XML ATTRIBUTE($xml_Child_Ref;"N")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R8/commands/dom-get-xml-attribute-by-index",children:"DOM GET XML ATTRIBUTE BY INDEX"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/commands/dom-get-xml-attribute-by-name",children:"DOM GET XML ATTRIBUTE BY NAME"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/commands/dom-remove-xml-element",children:"DOM REMOVE XML ELEMENT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/commands/dom-set-xml-attribute",children:"DOM SET XML ATTRIBUTE"})]}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1084"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},461961:function(e,n,r){r.d(n,{Z:function(){return A}});let A="data:image/png;base64,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"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var A=r(667294);let t={},l=A.createContext(t);function i(e){let n=A.useContext(l);return A.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),A.createElement(l.Provider,{value:n},e.children)}}}]);