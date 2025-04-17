"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41493"],{562413:function(e,n,o){o.r(n),o.d(n,{default:()=>c,frontMatter:()=>t,metadata:()=>d,assets:()=>i,toc:()=>m,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/dom-set-xml-element-name","title":"DOM SET XML ELEMENT NAME","description":"DOM SET XML ELEMENT NAME ( refElemento ; nomeElemento )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/dom-set-xml-element-name.md","sourceDirName":"commands-legacy","slug":"/commands/dom-set-xml-element-name","permalink":"/docs/pt/commands/dom-set-xml-element-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-set-xml-element-name.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"dom-set-xml-element-name","title":"DOM SET XML ELEMENT NAME","slug":"/commands/dom-set-xml-element-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM SET XML DECLARATION","permalink":"/docs/pt/commands/dom-set-xml-declaration"},"next":{"title":"DOM SET XML ELEMENT VALUE","permalink":"/docs/pt/commands/dom-set-xml-element-value"}}'),r=o("785893"),s=o("250065");let t={id:"dom-set-xml-element-name",title:"DOM SET XML ELEMENT NAME",slug:"/commands/dom-set-xml-element-name",displayed_sidebar:"docs"},l=void 0,i={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM SET XML ELEMENT NAME"})," ( ",(0,r.jsx)(n.em,{children:"refElemento"})," ; ",(0,r.jsx)(n.em,{children:"nomeElemento"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refElemento"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Refer\xeancia de elemento XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomeElemento"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Novo nome do elemento"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando DOM SET XML ELEMENT NAME permite modificar o nome do elemento designado por ",(0,r.jsx)(n.em,{children:"refElemento"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Passe em ",(0,r.jsx)(n.em,{children:"refElemento"})," a refer\xeancia do elemento a renomear e em ",(0,r.jsx)(n.em,{children:"nomeElemento"})," o novo nome do elemento. O comando tamb\xe9m cuida de atualizar as etiquetas de abertura e fechamento do elemento."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"No recurso abaixo XML:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-XML",children:"<Book>\n\xa0\xa0\xa0<Title>O melhor vendedor </Title>\n</Book>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Se o c\xf3digo abaixo for executado, suponndo que ",(0,r.jsx)(n.em,{children:"vRefElem"})," contenha a refer\xeancia do elemento \u2018Book\u2019:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0DOM SET XML ELEMENT NAME(vRefElem;"MelhorVendedor")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Obtemos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-XML",children:"<MelhorVendedor>\n\xa0\xa0\xa0<Title>O melhor vendedor</Title>\n</MelhorVendedor>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,r.jsx)(n.p,{children:"Se o comando tiver sido executado corretamente, a vari\xe1vel sistema Ok assume o valor 1. Se ocorrer um erro, assume o valor 0."}),"\n",(0,r.jsx)(n.h2,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,r.jsx)(n.p,{children:"Um erro \xe9 gerado quando:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A refer\xeancia do elemento n\xe3o for v\xe1lida"}),"\n",(0,r.jsx)(n.li,{children:"O novo nome do elemento a ser criado n\xe3o for v\xe1lido (por exemplo, se come\xe7a com um n\xfamero)."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/dom-get-xml-element-name",children:"DOM GET XML ELEMENT NAME"})}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"867"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return t}});var d=o(667294);let r={},s=d.createContext(r);function t(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);