"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47976"],{70156:function(e,r,n){n.r(r),n.d(r,{metadata:()=>a,contentTitle:()=>d,default:()=>u,assets:()=>i,toc:()=>c,frontMatter:()=>o});var a=JSON.parse('{"id":"commands-legacy/import-structure","title":"IMPORT STRUCTURE","description":"IMPORT STRUCTURE ( estruturaXML )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/import-structure.md","sourceDirName":"commands-legacy","slug":"/commands/import-structure","permalink":"/docs/pt/commands/import-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fimport-structure.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"import-structure","title":"IMPORT STRUCTURE","slug":"/commands/import-structure","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET TABLE PROPERTIES","permalink":"/docs/pt/commands/get-table-properties"},"next":{"title":"Is field number valid","permalink":"/docs/pt/commands/is-field-number-valid"}}'),t=n("785893"),s=n("250065");let o={id:"import-structure",title:"IMPORT STRUCTURE",slug:"/commands/import-structure",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Nota para lan\xe7amento",id:"nota-para-lan\xe7amento",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let r={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"IMPORT STRUCTURE"})," ( ",(0,t.jsx)(r.em,{children:"estruturaXML"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe2metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"estruturaXML"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Defini\xe7\xe3o XML da estrutura da base 4D"})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,t.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(r.p,{children:["O comando ",(0,t.jsx)(r.strong,{children:"IMPORT STRUCTURE"})," importa, na base atual, a defini\xe7\xe3o XML da estrutura da base 4D passada no par\xe2metro ",(0,t.jsx)(r.em,{children:"estruturaXML"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["El par\xe1metro ",(0,t.jsx)(r.em,{children:"estructuraXML"})," debe contener una definici\xf3n v\xe1lida de estructura 4D en formato XML. Hay varias maneras de obtener una definici\xf3n de estructura v\xe1lida:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Ejecutar el comando ",(0,t.jsx)(r.a,{href:"/docs/pt/commands/export-structure",children:"EXPORT STRUCTURE"}),","]}),"\n",(0,t.jsxs)(r.li,{children:["Seleccionar el comando de men\xfa ",(0,t.jsx)(r.strong,{children:"Exportar >"})," ",(0,t.jsx)(r.strong,{children:"Definici\xf3n de estructura al archivo XML..."})," disponible en la interfaz del modo Dise\xf1o de 4D (ver ",(0,t.jsx)(r.em,{children:"Exportar e importar defini\xe7\xf5es de estrutura"}),"),"]}),"\n",(0,t.jsx)(r.li,{children:'Crear o modificar un archivo XML personalizado basado en los DTD p\xfablicos que se encuentran en la carpeta "DTD" de la aplicaci\xf3n 4D.'}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"La definici\xf3n de estructura importada se agrega a la estructura que ya est\xe1 abierta y se muestra en el editor de estructura est\xe1ndar de 4D entre las tablas existentes (si las hubiera). Si una tabla importada tiene el mismo nombre que una local, se genera un error y la operaci\xf3n de importaci\xf3n se cancela."}),"\n",(0,t.jsx)(r.p,{children:"Puede crear una nueva base mediante la importaci\xf3n de una definici\xf3n de estructura en una base vac\xeda."}),"\n",(0,t.jsx)(r.p,{children:"Se genera un error si la estructura est\xe1 en modo compilado y/o de s\xf3lo lectura."}),"\n",(0,t.jsx)(r.p,{children:"Este comando no se puede llamar desde una aplicaci\xf3n 4D que funciona en modo remoto."}),"\n",(0,t.jsx)(r.h4,{id:"nota-para-lan\xe7amento",children:"Nota para lan\xe7amento"}),"\n",(0,t.jsxs)(r.p,{children:["Dado que este comando modifica a estrutura do banco de dados, n\xe3o pode ser utilizado no contexto de uma aplica\xe7\xe3o empacotada de apenas leitura (arquivo .4dc instalado na pasta ",(0,t.jsx)(r.em,{children:"Arquivos de programa"})," ou arquivo .4dz)."]}),"\n",(0,t.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(r.p,{children:"Voc\xea deseja importar uma defini\xe7\xe3o de estrutura guardada na base de dados atual:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0$struc:=Document to text("c:\\\\4DStructures\\\\Employee.xml")\n\xa0IMPORT STRUCTURE($struc)\n'})}),"\n",(0,t.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/pt/commands/export-structure",children:"EXPORT STRUCTURE"})})]})}function u(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return o}});var a=n(667294);let t={},s=a.createContext(t);function o(e){let r=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);