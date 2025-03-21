"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14416"],{657348:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/sax-get-xml-element","title":"SAX GET XML ELEMENT","description":"SAX GET XML ELEMENT ( document ; nom ; pr\xe9fixe ; nomsAttributs ; valeursAttributs )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-get-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-element","permalink":"/docs/fr/20-R7/commands/sax-get-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-get-xml-element","title":"SAX GET XML ELEMENT","slug":"/commands/sax-get-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX GET XML DOCUMENT VALUES","permalink":"/docs/fr/20-R7/commands/sax-get-xml-document-values"},"next":{"title":"SAX GET XML ELEMENT VALUE","permalink":"/docs/fr/20-R7/commands/sax-get-xml-element-value"}}'),r=t("785893"),l=t("250065");let d={id:"sax-get-xml-element",title:"SAX GET XML ELEMENT",slug:"/commands/sax-get-xml-element",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function m(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SAX GET XML ELEMENT"})," ( ",(0,r.jsx)(n.em,{children:"document"})," ; ",(0,r.jsx)(n.em,{children:"nom"})," ; ",(0,r.jsx)(n.em,{children:"pr\xe9fixe"})," ; ",(0,r.jsx)(n.em,{children:"nomsAttributs"})," ; ",(0,r.jsx)(n.em,{children:"valeursAttributs"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"document"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence du document ouvert"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nom"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nom de l\u2019\xe9l\xe9ment"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pr\xe9fixe"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Espace de nommage"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomsAttributs"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Noms des attributs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valeursAttributs"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeurs des attributs"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"SAX GET XML ELEMENT"})," retourne diverses informations relatives \xe0 l\u2019\xe9l\xe9ment ",(0,r.jsx)(n.em,{children:"nom"})," pr\xe9sent dans le document XML r\xe9f\xe9renc\xe9 par ",(0,r.jsx)(n.em,{children:"document"}),". Elle doit \xeatre appel\xe9e dans le contexte d\u2019un \xe9v\xe9nement SAX XML start element ou XML end element. Dans le cas particulier d\u2019un XML end element, les param\xe8tres d\u2019attributs ne sont pas g\xe9r\xe9s. Pour plus d'informations sur les \xe9v\xe9nements SAX, reportez-vous \xe0 la description de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/sax-get-xml-node",children:"SAX Get XML node"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"nom"})," contient le nom de l\u2019\xe9l\xe9ment."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"pr\xe9fixe"})," retourne l\u2019espace de nommage (namespace) de l\u2019\xe9l\xe9ment. Ce param\xe8tre est vide si aucun espace de nommage n\u2019est associ\xe9 \xe0 l\u2019\xe9l\xe9ment."]}),"\n",(0,r.jsxs)(n.p,{children:["La commande remplit le tableau ",(0,r.jsx)(n.em,{children:"nomsAttributs"})," avec les noms des attributs de l\u2019\xe9l\xe9ment cible. Si n\xe9cessaire, la commande cr\xe9e et dimensionne automatiquement le tableau."]}),"\n",(0,r.jsxs)(n.p,{children:["La commande remplit \xe9galement le tableau ",(0,r.jsx)(n.em,{children:"valeursAttributs"})," avec les valeurs des attributs de l\u2019\xe9l\xe9ment cible. Si n\xe9cessaire, la commande cr\xe9e et dimensionne automatiquement le tableau."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Consid\xe9rons l\u2019extrait de code XML suivant :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\n\xa0MonTexte\n\xa0\n"})}),"\n",(0,r.jsx)(n.p,{children:"Une fois l\u2019instruction suivante ex\xe9cut\xe9e :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SAX GET XML ELEMENT(RefDoc;vNom;vPr\xe9fixe;tAttrNoms;tAttrValeurs)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["...",(0,r.jsx)(n.em,{children:"vNom"})," contiendra \u201CChild\u201D",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"vPr\xe9fixe"})," contiendra \u201C\u201D",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"tAttrNoms{1}"})," contiendra \u201CAtt1\u201D, ",(0,r.jsx)(n.em,{children:"tAttrNoms{2}"})," contiendra \u201CAtt2\u201D, ",(0,r.jsx)(n.em,{children:"tAttrNoms{3}"})," contiendra \u201CAtt3\u201D",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"tAttrValeurs{1}"})," contiendra \u201C111\u201D, ",(0,r.jsx)(n.em,{children:"tAttrValeurs{2}"})," contiendra \u201C222\u201D, ",(0,r.jsx)(n.em,{children:"tAttrValeurs{3}"})," contiendra \u201C333\u201D"]}),"\n",(0,r.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/sax-get-xml-node",children:"SAX Get XML node"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"876"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let r={},l=s.createContext(r);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);