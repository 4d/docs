"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13028"],{931342:function(e,n,r){r.r(n),r.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>m,assets:()=>a,toc:()=>l,frontMatter:()=>i});var o=JSON.parse('{"id":"commands-legacy/form-edit","title":"FORM EDIT","description":"FORM EDIT ( {tabla ;} form )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-edit.md","sourceDirName":"commands-legacy","slug":"/commands/form-edit","permalink":"/docs/es/commands/form-edit","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-edit.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-edit","title":"FORM EDIT","slug":"/commands/form-edit","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current method path","permalink":"/docs/es/commands/current-method-path"},"next":{"title":"FORM GET NAMES","permalink":"/docs/es/commands/form-get-names"}}'),t=r("785893"),s=r("250065");let i={id:"form-edit",title:"FORM EDIT",slug:"/commands/form-edit",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"FORM EDIT"})," ( {",(0,t.jsx)(n.em,{children:"tabla"})," ;} ",(0,t.jsx)(n.em,{children:"form"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabla"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tabla due\xf1a del formulario o Si se omite: tabla predeterminada o uso del formulario proyecto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"form"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre del formulario"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"FORM EDIT"})," abre el ",(0,t.jsx)(n.em,{children:"form"})," asociado a ",(0,t.jsx)(n.em,{children:"tabla"}),' en el editor de formularios 4D. Tenga en cuenta que debe tener acceso al entorno Dise\xf1o; de lo contrario, se genera el error -9804 ("No se puede abrir el formulario").']}),"\n",(0,t.jsx)(n.p,{children:"El comando es as\xedncrono: vuelve inmediatamente al m\xe9todo de llamada y no espera a que se abra el formulario."}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"tabla"}),", indica la tabla asociada con el ",(0,t.jsx)(n.em,{children:"form"}),". Si omite este par\xe1metro, indica que el ",(0,t.jsx)(n.em,{children:"form"})," es un formulario proyecto."]}),"\n",(0,t.jsxs)(n.p,{children:["En el par\xe1metro ",(0,t.jsx)(n.em,{children:"form"}),', pase el nombre del formulario para abrir en el editor de formularios 4D. Si pasa un nombre que no existe, se genera el error 81 ("Formulario no encontrado").']}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["Para abrir el formulario ",(0,t.jsx)(n.em,{children:"Contacts"})," table ",(0,t.jsx)(n.em,{children:"Address"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0FORM EDIT([Contacts];"Address")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Para abrir el formulario proyecto ",(0,t.jsx)(n.em,{children:"ContactList"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0FORM EDIT("ContactList")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Comandos del tema Acceso objetos dise\xf1o"})})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var o=r(667294);let t={},s=o.createContext(t);function i(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);