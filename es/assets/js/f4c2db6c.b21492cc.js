"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51238"],{90017:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>t,assets:()=>r,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/get-field-titles","title":"GET FIELD TITLES","description":"GET FIELD TITLES ( tabla ; titulosCampos ; numCampos )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-field-titles.md","sourceDirName":"commands-legacy","slug":"/commands/get-field-titles","permalink":"/docs/es/20-R7/commands/get-field-titles","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-field-titles.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-field-titles","title":"GET FIELD TITLES","slug":"/commands/get-field-titles","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get Application color scheme","permalink":"/docs/es/20-R7/commands/get-application-color-scheme"},"next":{"title":"GET TABLE TITLES","permalink":"/docs/es/20-R7/commands/get-table-titles"}}'),d=s("785893"),i=s("250065");let l={id:"get-field-titles",title:"GET FIELD TITLES",slug:"/commands/get-field-titles",displayed_sidebar:"docs"},o=void 0,r={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"GET FIELD TITLES"})," ( ",(0,d.jsx)(n.em,{children:"tabla"})," ; ",(0,d.jsx)(n.em,{children:"titulosCampos"})," ; ",(0,d.jsx)(n.em,{children:"numCampos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tabla"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tabla de la cual quiere conocer los nombres de los campos"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"titulosCampos"}),(0,d.jsx)(n.td,{children:"Text array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Nombres actuales de los campos"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numCampos"}),(0,d.jsx)(n.td,{children:"Integer array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"N\xfameros de los campos"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando GET FIELD TITLES llena los arrays ",(0,d.jsx)(n.em,{children:"titulosCampos"})," y ",(0,d.jsx)(n.em,{children:"numCampos"})," con los nombres y los n\xfameros de los campos de la ",(0,d.jsx)(n.em,{children:"tabla"}),". Los contenidos de estos dos arrays est\xe1n sincronizados."]}),"\n",(0,d.jsxs)(n.p,{children:["Si el comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-field-titles",title:"SET FIELD TITLES",children:"SET FIELD TITLES"})," se llama durante la sesi\xf3n, GET FIELD TITLES retorna \xfanicamente los nombres \u201Cmodificados\u201D y los n\xfameros de los campos definidos utilizando este comando."]}),"\n",(0,d.jsx)(n.p,{children:"De lo contrario, GET FIELD TITLES devuelve los nombres de los campos de la base definidos en la ventana de Estructura."}),"\n",(0,d.jsx)(n.p,{children:"En ambos casos, el comando no devuelve campos invisibles."}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-table-titles",children:"GET TABLE TITLES"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-field-titles",children:"SET FIELD TITLES"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"804"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(667294);let d={},i=t.createContext(d);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);