"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77030"],{710844:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>o});var i=JSON.parse('{"id":"commands-legacy/object-get-horizontal-alignment","title":"OBJECT Get horizontal alignment","description":"OBJECT Get horizontal alignment ( { ;} objeto* ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-horizontal-alignment.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-horizontal-alignment","permalink":"/docs/es/commands/object-get-horizontal-alignment","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-horizontal-alignment.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-horizontal-alignment","title":"OBJECT Get horizontal alignment","slug":"/commands/object-get-horizontal-alignment","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get help tip","permalink":"/docs/es/commands/object-get-help-tip"},"next":{"title":"OBJECT Get indicator type","permalink":"/docs/es/commands/object-get-indicator-type"}}'),s=t("785893"),l=t("250065");let o={id:"object-get-horizontal-alignment",title:"OBJECT Get horizontal alignment",slug:"/commands/object-get-horizontal-alignment",displayed_sidebar:"docs"},r=void 0,d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT Get horizontal alignment"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si se especifica, objeto es un nombre del objeto (cadena) Si se omite, objeto es un campo o una variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre de objeto (si se especifica *), o Campo o variable (si se omite *)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"C\xf3digo de alineaci\xf3n"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"OBJECT Get horizontal alignment"})," devuelve un c\xf3digo indicando el tipo de alineaci\xf3n horizontal aplicada al objeto designado por los par\xe1metros ",(0,s.jsx)(n.em,{children:"objeto"})," y ",(0,s.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," designa el nombre de un objeto (una cadena). Si no pasa el par\xe1metro *, indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," designa un campo o una variable. En este caso, usted no pasa una cadena sino la referencia de un campo o de una variable (campo o variable de tipo objeto \xfanicamente)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," si aplica el comando a un grupo de objetos, s\xf3lo devuelve el valor de alineaci\xf3n del \xfaltimo objeto."]}),"\n",(0,s.jsxs)(n.p,{children:["El c\xf3digo devuelto corresponde a una de las siguientes constantes, ubicadas en el tema ",(0,s.jsx)(n.em,{children:"Propiedades de los objetos"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Align center"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Align default"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Align left"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Align right"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk justify"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"Disponible para \xe1reas 4D Write Pro \xfanicamente"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"}),' la constante wk justify est\xe1 disponible en el tema "',(0,s.jsx)(n.em,{children:"4D Write Pro"}),'".']}),"\n",(0,s.jsx)(n.p,{children:"Los objetos de formulario a los cuales se puede aplicar alineaci\xf3n son los siguientes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\xc1reas de desplazamiento"}),"\n",(0,s.jsx)(n.li,{children:"Combo boxes"}),"\n",(0,s.jsx)(n.li,{children:"Botones"}),"\n",(0,s.jsx)(n.li,{children:"Botones radio"}),"\n",(0,s.jsx)(n.li,{children:"Casillas de selecci\xf3n"}),"\n",(0,s.jsx)(n.li,{children:"Textos est\xe1ticos"}),"\n",(0,s.jsx)(n.li,{children:"\xc1reas de grupos"}),"\n",(0,s.jsx)(n.li,{children:"Men\xfas desplegables/Listas desplegables"}),"\n",(0,s.jsx)(n.li,{children:"Campos"}),"\n",(0,s.jsx)(n.li,{children:"Variables"}),"\n",(0,s.jsx)(n.li,{children:"List boxes"}),"\n",(0,s.jsx)(n.li,{children:"Columnas de list box"}),"\n",(0,s.jsx)(n.li,{children:"Encabezados de list box"}),"\n",(0,s.jsx)(n.li,{children:"Pies de list box"}),"\n",(0,s.jsxs)(n.li,{children:["\xc1reas ",(0,s.jsx)(n.em,{children:"Referencia 4D Write Pro"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/object-get-vertical-alignment",children:"OBJECT Get vertical alignment"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/object-set-horizontal-alignment",children:"OBJECT SET HORIZONTAL ALIGNMENT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/object-set-vertical-alignment",children:"OBJECT SET VERTICAL ALIGNMENT"})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var i=t(667294);let s={},l=i.createContext(s);function o(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);