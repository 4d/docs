"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25262"],{81318:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/sax-add-processing-instruction","title":"SAX ADD PROCESSING INSTRUCTION","description":"SAX ADD PROCESSING INSTRUCTION ( documento ; instru\xe7ao )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-add-processing-instruction.md","sourceDirName":"commands-legacy","slug":"/commands/sax-add-processing-instruction","permalink":"/docs/pt/20-R7/commands/sax-add-processing-instruction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-add-processing-instruction.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-add-processing-instruction","title":"SAX ADD PROCESSING INSTRUCTION","slug":"/commands/sax-add-processing-instruction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"XML SAX","permalink":"/docs/pt/20-R7/category/xml-sax"},"next":{"title":"SAX ADD XML CDATA","permalink":"/docs/pt/20-R7/commands/sax-add-xml-cdata"}}'),r=s("785893"),d=s("250065");let o={id:"sax-add-processing-instruction",title:"SAX ADD PROCESSING INSTRUCTION",slug:"/commands/sax-add-processing-instruction",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SAX ADD PROCESSING INSTRUCTION"})," ( ",(0,r.jsx)(n.em,{children:"documento"})," ; ",(0,r.jsx)(n.em,{children:"instru\xe7ao"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"documento"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Refer\xeancia do documento aberto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"instru\xe7ao"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Instru\xe7\xe3o a inserir no documento"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando SAX ADD PROCESSING INSTRUCTION adiciona no ",(0,r.jsx)(n.em,{children:"documento"})," XML referenciado por documento, uma ",(0,r.jsx)(n.em,{children:"instru\xe7ao"})," de processamento XML."]}),"\n",(0,r.jsx)(n.p,{children:"Uma instru\xe7\xe3o de processamento permite indicar o tipo de aplica\xe7\xe3o e quando seja necess\xe1rio os par\xe2metros adicionais que lhe permitem processar uma entidade externa n\xe3o analis\xe1vel."}),"\n",(0,r.jsx)(n.p,{children:"O comando d\xe1 formato aos dados da instru\xe7\xe3o em conformidade com XML. Entretanto, as instru\xe7\xf5es em si n\xe3o s\xe3o analisadas e depende do desenvolvedor garantir que sejam v\xe1lidas."}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"O c\xf3digo abaixo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vtInstruccion:="xml-stylesheet type="+Char(Quotes)+"text/xsl"+Char(Quotes)+\n\xa0"href="+Char(Quotes)+"style.xsl"+Char(Quotes)\n\xa0SAX ADD PROCESSING INSTRUCTION($DocRef;vtInstruccion)\n'})}),"\n",(0,r.jsx)(n.p,{children:"... escrever\xe1 a seguinte linha no documento:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\n"})}),"\n",(0,r.jsx)(n.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,r.jsx)(n.p,{children:"Se ou comando tiver sido executado corretamente, a vari\xe1vel sistema Ok assume ou valor 1. Se ocorrer um erro, assume ou valor 0."}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/sax-get-xml-processing-instruction",children:"SAX GET XML PROCESSING INSTRUCTION"})}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"857"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var t=s(667294);let r={},d=t.createContext(r);function o(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);