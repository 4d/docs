"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92988"],{337378:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>s,toc:()=>a,contentTitle:()=>A});var r=JSON.parse('{"id":"commands-legacy/dom-get-xml-attribute-by-name","title":"DOM GET XML ATTRIBUTE BY NAME","description":"DOM GET XML ATTRIBUTE BY NAME ( refElemento ; nomeAtrib ; valorAtrib )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-get-xml-attribute-by-name.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-attribute-by-name","permalink":"/docs/pt/20-R8/commands/dom-get-xml-attribute-by-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-attribute-by-name.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-get-xml-attribute-by-name","title":"DOM GET XML ATTRIBUTE BY NAME","slug":"/commands/dom-get-xml-attribute-by-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM GET XML ATTRIBUTE BY INDEX","permalink":"/docs/pt/20-R8/commands/dom-get-xml-attribute-by-index"},"next":{"title":"DOM GET XML CHILD NODES","permalink":"/docs/pt/20-R8/commands/dom-get-xml-child-nodes"}}'),o=t("785893"),i=t("250065");let d={id:"dom-get-xml-attribute-by-name",title:"DOM GET XML ATTRIBUTE BY NAME",slug:"/commands/dom-get-xml-attribute-by-name",displayed_sidebar:"docs"},A=void 0,s={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"DOM GET XML ATTRIBUTE BY NAME"})," ( ",(0,o.jsx)(n.em,{children:"refElemento"})," ; ",(0,o.jsx)(n.em,{children:"nomeAtrib"})," ; ",(0,o.jsx)(n.em,{children:"valorAtrib"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"refElemento"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Refer\xeancia de elemento XML"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nomeAtrib"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nome de atributo"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"valorAtrib"}),(0,o.jsx)(n.td,{children:"Variable"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Valor atributo"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(n.p,{children:"O comando DOM GET XML ATTRIBUTE BY NAME permite conhecer o valor de um atributo especificado por seu nome."}),"\n",(0,o.jsxs)(n.p,{children:["Passe em ",(0,o.jsx)(n.em,{children:"refElemento"})," a refer\xeancia de um elemento XML e em ",(0,o.jsx)(n.em,{children:"nomeAtrib"})," o nome do atributo do que deseja conhecer seu valor. O valor se retorna no par\xe2metro ",(0,o.jsx)(n.em,{children:"valorAtrib"}),". 4D tentar\xe1 converter o valor obtido no tipo da vari\xe1vel passada como par\xe2metro. Se o tipo de vari\xe1vel n\xe3o for definido, o valor \xe9 retornado em tipo texto como padr\xe3o."]}),"\n",(0,o.jsxs)(n.p,{children:["Se n\xe3o existir nenhum atributo ",(0,o.jsx)(n.em,{children:"nomeAtrib"})," no elemento XML, um erro \xe9 retornado. Se v\xe1rios atributos do elemento XML tiverem o mesmo nome, apenas se retornar o valor do primeiro atributo."]}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Este m\xe9todo se utiliza para recuperar um valor de atributo XML utilizando seu nome:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var minhaVarBlob : Blob\n\xa0var $ref_XML_Pai;$ref_XML_Filho : Text\n\xa0var $NumLinha : Integer\n\xa0\n\xa0$ref_XML_Pai:=DOM Parse XML variable(minhaVarBlob)\n\xa0$ref_XML_Filho:=DOM Get first child XML element($ref_XML_Pai)\n\xa0DOM GET XML ATTRIBUTE BY NAME($ref_XML_Filho;"N";$NumLinha)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Se este m\xe9todo for aplicado ao exemplo a seguir, $NumLinha cont\xe9m o valor 1:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(403634).Z+"",width:"510",height:"138"})}),"\n",(0,o.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,o.jsx)(n.p,{children:"Se o comando tiver sido executado corretamente, a vari\xe1vel sistema OK assume o valor 1. Se ocorrer um erro, assume o valor 0."}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/dom-get-xml-attribute-by-index",children:"DOM GET XML ATTRIBUTE BY INDEX"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/dom-remove-xml-attribute",children:"DOM REMOVE XML ATTRIBUTE"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"728"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},403634:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return A},a:function(){return d}});var r=t(667294);let o={},i=r.createContext(o);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function A(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);