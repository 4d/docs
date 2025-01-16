"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42495"],{51856:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>r,toc:()=>c,contentTitle:()=>l});var a=JSON.parse('{"id":"commands-legacy/set-automatic-relations","title":"SET AUTOMATIC RELATIONS","description":"SET AUTOMATIC RELATIONS ( uno {; muchos} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-automatic-relations.md","sourceDirName":"commands-legacy","slug":"/commands/set-automatic-relations","permalink":"/docs/es/commands/set-automatic-relations","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-automatic-relations.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-automatic-relations","title":"SET AUTOMATIC RELATIONS","slug":"/commands/set-automatic-relations","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAVE RELATED ONE","permalink":"/docs/es/commands/save-related-one"},"next":{"title":"SET FIELD RELATION","permalink":"/docs/es/commands/set-field-relation"}}'),o=n("785893"),t=n("250065");let i={id:"set-automatic-relations",title:"SET AUTOMATIC RELATIONS",slug:"/commands/set-automatic-relations",displayed_sidebar:"docs"},l=void 0,r={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function d(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"SET AUTOMATIC RELATIONS"})," ( ",(0,o.jsx)(s.em,{children:"uno"})," {; ",(0,o.jsx)(s.em,{children:"muchos"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe1metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"uno"}),(0,o.jsx)(s.td,{children:"Boolean"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Estado de todas las relaciones Muchos a Uno"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"muchos"}),(0,o.jsx)(s.td,{children:"Boolean"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Estado de todas las relaciones de Uno a Muchos"})]})]})]}),"\n",(0,o.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsx)(s.p,{children:"SET AUTOMATIC RELATIONS cambia temporalmente todas las relaciones manuales en relaciones autom\xe1ticas para toda la base en el proceso actual. Las relaciones permanecen autom\xe1ticas a menos que se realice una llamada posterior a SET AUTOMATIC RELATIONS."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Si ",(0,o.jsx)(s.em,{children:"uno"})," es true, entonces todas las relaciones Muchos a Uno se vuelven autom\xe1ticas. Si ",(0,o.jsx)(s.em,{children:"uno"})," es false, todas las relaciones Muchos a Uno se vuelven manuales."]}),"\n",(0,o.jsxs)(s.li,{children:["Si ",(0,o.jsx)(s.em,{children:"muchos"})," es true, entonces todas las relaciones Uno a Muchos se vuelven autom\xe1ticas. Si ",(0,o.jsx)(s.em,{children:"muchos"})," es false, todas las relaciones Uno a Muchos se vuelven manuales."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Este comando cambia relaciones definidas como manuales en modo Dise\xf1o a autom\xe1ticas, justo antes de ejecutar operaciones que requieran que sean autom\xe1ticas (tales como b\xfasquedas relacionales y ordenaciones). Una vez termina la operaci\xf3n, las relaciones pueden cambiarse a manuales llamando nuevamente a ",(0,o.jsx)(s.strong,{children:"SET AUTOMATIC RELATIONS"}),". La relaciones definidas como autom\xe1ticas en el entorno Dise\xf1o no son afectadas por este comando."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Notas:"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Cuando pase ",(0,o.jsx)(s.a,{href:"/docs/es/commands/true",title:"True",children:"True"})," al comando ",(0,o.jsx)(s.strong,{children:"SET AUTOMATIC RELATIONS"}),', el modo autom\xe1tico se "bloquea" para todas las relaciones manuales durante la sesi\xf3n. En este caso, todas las llamadas al comando ',(0,o.jsx)(s.a,{href:"/docs/es/commands/set-field-relation",children:"SET FIELD RELATION"})," durante la misma sesi\xf3n se ignoran, sin importar si estaban antes o despu\xe9s de ",(0,o.jsx)(s.strong,{children:"SET AUTOMATIC RELATIONS"}),'. Para "desbloquear" el modo autom\xe1tico y tener en cuenta las llamadas a ',(0,o.jsx)(s.a,{href:"/docs/es/commands/set-field-relation",children:"SET FIELD RELATION"}),", pase ",(0,o.jsx)(s.a,{href:"/docs/es/commands/false",title:"False",children:"False"})," a ",(0,o.jsx)(s.strong,{children:"SET AUTOMATIC RELATIONS"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["Las funcionalidades autom\xe1ticas se desactivan cuando las tablas relacionadas se visualizan en un formulario listado mostrado utilizando ",(0,o.jsx)(s.a,{href:"/docs/es/commands/display-selection",children:"DISPLAY SELECTION"}),", ",(0,o.jsx)(s.a,{href:"/docs/es/commands/modify-selection",children:"MODIFY SELECTION"}),", o un subformulario. Ver ",(0,o.jsx)(s.em,{children:"Relaciones manuales y autom\xe1ticas"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(s.p,{children:"El siguiente ejemplo vuelve autom\xe1ticas todas las relaciones Muchos a Uno y restablece a manual todas las relaciones Uno a Muchos cambiadas previamente:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"\xa0SET AUTOMATIC RELATIONS(True;False)\n"})}),"\n",(0,o.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/es/commands/get-automatic-relations",children:"GET AUTOMATIC RELATIONS"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/es/commands/get-relation-properties",children:"GET RELATION PROPERTIES"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.em,{children:"Relaciones"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/es/commands/selection-range-to-array",children:"SELECTION RANGE TO ARRAY"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/es/commands/selection-to-array",children:"SELECTION TO ARRAY"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/es/commands/set-field-relation",children:"SET FIELD RELATION"})]}),"\n",(0,o.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero de comando"}),(0,o.jsx)(s.td,{children:"310"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Hilo seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return i}});var a=n(667294);let o={},t=a.createContext(o);function i(e){let s=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);