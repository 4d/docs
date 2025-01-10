"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["558"],{906141:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/dom-count-xml-attributes","title":"DOM Count XML attributes","description":"DOM Count XML attributes ( refElemento ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-count-xml-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/dom-count-xml-attributes","permalink":"/docs/pt/commands/dom-count-xml-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-count-xml-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-count-xml-attributes","title":"DOM Count XML attributes","slug":"/commands/dom-count-xml-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM CLOSE XML","permalink":"/docs/pt/commands/dom-close-xml"},"next":{"title":"DOM Count XML elements","permalink":"/docs/pt/commands/dom-count-xml-elements"}}'),o=n("785893"),s=n("250065");let i={id:"dom-count-xml-attributes",title:"DOM Count XML attributes",slug:"/commands/dom-count-xml-attributes",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let t={a:"a",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"DOM Count XML attributes"})," ( ",(0,o.jsx)(t.em,{children:"refElemento"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Par\xe2metro"}),(0,o.jsx)(t.th,{children:"Tipo"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"refElemento"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"Refer\xeancia de elemento XML"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Resultado"}),(0,o.jsx)(t.td,{children:"Integer"}),(0,o.jsx)(t.td,{children:"\u2190"}),(0,o.jsx)(t.td,{children:"N\xfamero de atributos"})]})]})]}),"\n",(0,o.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(t.p,{children:["O comando DOM Count XML attributes devolve o n\xfamero dos atributos XML presentes no elemento XML determinado por ",(0,o.jsx)(t.em,{children:"refElemento"}),". Para maior informa\xe7\xe3o sobre os atributos XML, consulte a se\xe7\xe3o ",(0,o.jsx)(t.em,{children:"Vis\xe3o Geral dos comandos XML DOM"})," ."]}),"\n",(0,o.jsx)(t.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(t.p,{children:"Antes de recuperar os valores dos elementos em um array, caso voc\xea queira conhecer o n\xfamero de atributos no elemento abaixo:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(302782).Z+"",width:"485",height:"107"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:"\xa0var minhaVarBlob : Blob\n\xa0var $ref_xml_Pai;$ref_xml_filho : Text\n\xa0var meuResultado : Text\n\xa0var $numAtributos : Integer\n\xa0\n\xa0$ref_xml_Pai:=DOM Parse XML variable(miVarBlob)\n\xa0$ref_xml_filho:=DOM Get first child XML element($ref_xml_Pai)\n\xa0\n\xa0$numAtributos:=DOM Count XML attributes($ref_xml_filho)\n\xa0ARRAY TEXT(tAtrib;$numAtributos)\n\xa0ARRAY TEXT(tValAtrib;$numAtributos)\n\xa0For($i;1;$numAtributos)\n\xa0\xa0\xa0\xa0DOM GET XML ATTRIBUTE BY INDEX($ref_xml_filho;$i;tAtrib{$i};tValAtrib{$i})\n\xa0End for\n"})}),"\n",(0,o.jsx)(t.p,{children:'No exemplo anterior, $numAtributos \xe9 igual a 3, tAtrib{1} cont\xe9m \u201CFont,\u201D tAtrib{2} cont\xe9m \u201CN\u201D e tAtrib{3} cont\xe9m \u201Csize\u201D e tValAtrib cont\xe9m "Verdana", "1" e "10".'}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Nota:"})," O n\xfamero de \xedndice n\xe3o corresponde \xe0 localiza\xe7\xe3o do atributo no arquivo XML mostrado na forma de texto. Em XML, o \xedndice de um atributo indica sua posi\xe7\xe3o entre os atributos classificados por ordem alfab\xe9tica (dependendo de seu nome)."]}),"\n",(0,o.jsx)(t.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,o.jsx)(t.p,{children:"Se o comando tiver sido executado corretamente, a vari\xe1vel sistema OK assume o valor 1. Se ocorre um erro, assume o valor 0."}),"\n",(0,o.jsx)(t.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/pt/commands/dom-count-xml-elements",children:"DOM Count XML elements"})}),"\n",(0,o.jsx)(t.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"N\xfamero do comando"}),(0,o.jsx)(t.td,{children:"727"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Thread-seguro"}),(0,o.jsx)(t.td,{children:"\u2713"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(t.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},302782:function(e,t,n){n.d(t,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return i}});var r=n(667294);let o={},s=r.createContext(o);function i(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);