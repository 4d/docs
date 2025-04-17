"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63823"],{166423:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/method-get-attribute","title":"METHOD Get attribute","description":"METHOD Get attribute ( rota ; tipoAtributo {; *} ) : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/method-get-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-attribute","permalink":"/docs/pt/20-R8/commands/method-get-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-attribute.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-get-attribute","title":"METHOD Get attribute","slug":"/commands/method-get-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM GET NAMES","permalink":"/docs/pt/20-R8/commands/form-get-names"},"next":{"title":"METHOD GET ATTRIBUTES","permalink":"/docs/pt/20-R8/commands/method-get-attributes"}}'),o=t("785893"),d=t("250065");let s={id:"method-get-attribute",title:"METHOD Get attribute",slug:"/commands/method-get-attribute",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"METHOD Get attribute"})," ( ",(0,o.jsx)(n.em,{children:"rota"})," ; ",(0,o.jsx)(n.em,{children:"tipoAtributo"})," {; *} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"rota"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Rota do m\xe9todo projeto"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tipoAtributo"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Tipo de atributo a obter"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Se passado = o comando aplica ao banco de dados local quando \xe9 executado desde um componente (par\xe2metro ignorado fora deste contexto)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"True = Atributo selecionado, do contr\xe1rio False"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando",(0,o.jsx)(n.strong,{children:"METHOD Get attribute"}),"retorna o valor do atributo ",(0,o.jsx)(n.em,{children:"tipoAtributo"})," para o m\xe9todo projeto designado pelo par\xe2metro ",(0,o.jsx)(n.em,{children:"rota"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Este comando somente funciona com m\xe9todos projeto. Se passar uma ",(0,o.jsx)(n.em,{children:"rota"})," n\xe3o v\xe1lida, \xe9 gerado um erro."]}),"\n",(0,o.jsxs)(n.p,{children:["No par\xe2metro ",(0,o.jsx)(n.em,{children:"tipoAtributo"}),", passe um valor indicando o tipo de atributo a obter. Pode usar as seguintes constantes do tema ",(0,o.jsx)(n.em,{children:"Design Object Access"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Valor"}),(0,o.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Attribute executed on server"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"8"}),(0,o.jsx)(n.td,{children:'Corresponde a op\xe7\xe3o "Executar no servidor"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Attribute invisible"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:'Corresponde a op\xe7\xe3o "Invis\xedvel"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Attribute published SOAP"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"3"}),(0,o.jsx)(n.td,{children:'Corresponde \xe0 op\xe7\xe3o "Oferecido como servi\xe7o web"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Attribute published SQL"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"7"}),(0,o.jsx)(n.td,{children:'Corresponde \xe0 op\xe7\xe3o "Dispon\xedvel via SQL"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Attribute published Web"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"2"}),(0,o.jsx)(n.td,{children:'Corresponde \xe0 op\xe7\xe3o "Dispon\xedvel via as etiquetas HTML e os URLs 4D (4DACTION...)"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Attribute published WSDL"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"4"}),(0,o.jsx)(n.td,{children:'Corresponde \xe0 op\xe7\xe3o "Publicado em WSDL"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Attribute shared"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"5"}),(0,o.jsx)(n.td,{children:'Corresponde \xe0 op\xe7\xe3o "Compartilhado entre componentes e base local"'})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["Se o comando for executado desde uma componente, \xe9 aplicado por padr\xe3o aos m\xe9todos do componente. Se passar o par\xe2metro ",(0,o.jsx)(n.em,{children:"*"}),", ir\xe1 acessar aos m\xe9todos do banco local."]}),"\n",(0,o.jsxs)(n.p,{children:["O comando retorna ",(0,o.jsx)(n.strong,{children:"True"})," se for selecionado um atributo e ",(0,o.jsx)(n.strong,{children:"False"})," se for desse-lecionado."]}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/method-set-attribute",children:"METHOD SET ATTRIBUTE"})}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"1169"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return s}});var r=t(667294);let o={},d=r.createContext(o);function s(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);