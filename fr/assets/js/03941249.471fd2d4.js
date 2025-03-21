"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20189"],{631542:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/sax-add-xml-cdata","title":"SAX ADD XML CDATA","description":"SAX ADD XML CDATA ( document ; donn\xe9es )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sax-add-xml-cdata.md","sourceDirName":"commands-legacy","slug":"/commands/sax-add-xml-cdata","permalink":"/docs/fr/commands/sax-add-xml-cdata","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-add-xml-cdata.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sax-add-xml-cdata","title":"SAX ADD XML CDATA","slug":"/commands/sax-add-xml-cdata","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX ADD PROCESSING INSTRUCTION","permalink":"/docs/fr/commands/sax-add-processing-instruction"},"next":{"title":"SAX ADD XML COMMENT","permalink":"/docs/fr/commands/sax-add-xml-comment"}}'),d=s("785893"),r=s("250065");let a={id:"sax-add-xml-cdata",title:"SAX ADD XML CDATA",slug:"/commands/sax-add-xml-cdata",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SAX ADD XML CDATA"})," ( ",(0,d.jsx)(n.em,{children:"document"})," ; ",(0,d.jsx)(n.em,{children:"donn\xe9es"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"document"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"R\xe9f\xe9rence du document ouvert"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"donn\xe9es"}),(0,d.jsx)(n.td,{children:"Blob, Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Texte ou BLOB \xe0 ins\xe9rer dans le document entre balises CData"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"SAX ADD XML CDATA"})," ajoute dans le document XML r\xe9f\xe9renc\xe9 par ",(0,d.jsx)(n.em,{children:"document"})," des ",(0,d.jsx)(n.em,{children:"donn\xe9es"})," de type texte ou BLOB. Ces donn\xe9es seront automatiquement encadr\xe9es par les balises ",(0,d.jsx)(n.em,{children:"<![CDATA["})," et ",(0,d.jsx)(n.em,{children:"]]>"}),".",(0,d.jsx)(n.br,{}),"\nLe texte compris dans une section CData est ignor\xe9 par l\u2019interpr\xe9teur XML."]}),"\n",(0,d.jsxs)(n.p,{children:["Si vous souhaitez encoder le contenu de ",(0,d.jsx)(n.em,{children:"donn\xe9es"}),", vous devez utiliser la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/base64-encode",children:"BASE64 ENCODE"}),". Dans ce cas bien entendu, vous devez passer un BLOB dans ",(0,d.jsx)(n.em,{children:"donn\xe9es"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"Pour que cette commande fonctionne, un \xe9l\xe9ment doit \xeatre ouvert. Dans le cas contraire, une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,d.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(n.p,{children:"Vous souhaitez ins\xe9rer les lignes suivantes dans votre document XML :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-XML",children:"function matchwo(a,b)\n{\nif (a < b && a < 0) then\n\xa0\xa0\xa0\xa0\xa0\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0return 1\n\xa0\xa0\xa0\xa0\xa0\xa0}\nelse\n\xa0\xa0\xa0\xa0\xa0\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0return 0\n\xa0\xa0\xa0\xa0\xa0\xa0}\n}\n"})}),"\n",(0,d.jsx)(n.p,{children:"Pour cela, il vous suffit d\u2019ex\xe9cuter le code suivant :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0var vtMontexte : Text\n\xa0...\xa0// placez ici le texte dans la variable vtMontexte\n\xa0SAX ADD XML CDATA($RefDoc;vtMontexte)\n"})}),"\n",(0,d.jsx)(n.p,{children:"Le r\xe9sultat sera alors :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-XML",children:"<![CDATA[\nfunction matchwo(a,b)\n{\nif (a < b && a < 0) then\n\xa0\xa0\xa0{\n\xa0\xa0\xa0return 1\n\xa0\xa0\xa0}\nelse\n\xa0\xa0\xa0{\n\xa0\xa0\xa0return 0\n\xa0\xa0\xa0}\n}\n]]>\n"})}),"\n",(0,d.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,d.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0."}),"\n",(0,d.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/fr/commands/sax-get-xml-cdata",children:"SAX GET XML CDATA"})}),"\n",(0,d.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"856"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifie les variables"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return a}});var t=s(667294);let d={},r=t.createContext(d);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);