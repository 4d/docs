"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75898"],{641746:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>m,assets:()=>c,toc:()=>i,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/sax-get-xml-cdata","title":"SAX GET XML CDATA","description":"SAX GET XML CDATA ( document ; valeur )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-get-xml-cdata.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-cdata","permalink":"/docs/fr/commands/sax-get-xml-cdata","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-cdata.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-get-xml-cdata","title":"SAX GET XML CDATA","slug":"/commands/sax-get-xml-cdata","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX CLOSE XML ELEMENT","permalink":"/docs/fr/commands/sax-close-xml-element"},"next":{"title":"SAX GET XML COMMENT","permalink":"/docs/fr/commands/sax-get-xml-comment"}}'),d=s("785893"),r=s("250065");let l={id:"sax-get-xml-cdata",title:"SAX GET XML CDATA",slug:"/commands/sax-get-xml-cdata",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SAX GET XML CDATA"})," ( ",(0,d.jsx)(n.em,{children:"document"})," ; ",(0,d.jsx)(n.em,{children:"valeur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"document"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"R\xe9f\xe9rence du document ouvert"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"valeur"}),(0,d.jsx)(n.td,{children:"Text, Blob"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Valeur de l\u2019\xe9l\xe9ment"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"SAX GET XML CDATA"})," permet de r\xe9cup\xe9rer la ",(0,d.jsx)(n.em,{children:"valeur"})," CDATA d\u2019un \xe9l\xe9ment XML existant dans le document XML r\xe9f\xe9renc\xe9 par ",(0,d.jsx)(n.em,{children:"document"}),". Elle doit \xeatre appel\xe9e dans le contexte d\u2019un \xe9v\xe9nement SAX XML CDATA. Pour plus d'informations sur les \xe9v\xe9nements SAX, reportez-vous \xe0 la description de la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/sax-get-xml-node",children:"SAX Get XML node"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Passez une variable ",(0,d.jsx)(n.em,{children:"valeur"})," de type Texte si vous souhaitez r\xe9cup\xe9rer des donn\xe9es de taille sup\xe9rieure \xe0 32 Ko (la base doit fonctionner en mode Unicode)."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note de compatibilit\xe9 :"})," A compter de 4D v12, les contenus CDATA encod\xe9s en base64 sont automatiquement d\xe9cod\xe9s par la commande ",(0,d.jsx)(n.strong,{children:"SAX GET XML CDATA"}),", il est donc inutile d'appeler la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/base64-decode",children:"BASE64 DECODE"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(n.p,{children:"Consid\xe9rons l\u2019extrait de code XML suivant :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-XML",children:"<RootElement>\n\xa0\xa0\xa0<Child>MonTexte<![CDATA[MonCData]]</Child>\n</RootElement>\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Le code 4D suivant retournera \u201CMonCData\u201D dans ",(0,d.jsx)(n.em,{children:"vDonn\xe9esTexte"})," :"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0var vDonn\xe9es : Blob\n\xa0var vDonn\xe9esTexte : Text\n\xa0SAX GET XML CDATA(RefDoc;vDonn\xe9es)\n\xa0vDonn\xe9esTexte:=BLOB to text(vDonn\xe9es;UTF8 C string)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,d.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,d.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/fr/commands/sax-add-xml-cdata",children:"SAX ADD XML CDATA"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/sax-get-xml-node",children:"SAX Get XML node"})]}),"\n",(0,d.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"878"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifie les variables"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var t=s(667294);let d={},r=t.createContext(d);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);