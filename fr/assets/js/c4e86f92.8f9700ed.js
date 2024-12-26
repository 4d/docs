"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41818"],{848333:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>i,default:()=>m,assets:()=>a,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/dom-set-xml-attribute","title":"DOM SET XML ATTRIBUTE","description":"DOM SET XML ATTRIBUTE ( refEl\xe9ment ; nomAttribut ; valeurAttribut {; nomAttribut2 ; valeurAttribut2 ; ... ; nomAttributN ; valeurAttributN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-set-xml-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/dom-set-xml-attribute","permalink":"/docs/fr/commands/dom-set-xml-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-set-xml-attribute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-set-xml-attribute","title":"DOM SET XML ATTRIBUTE","slug":"/commands/dom-set-xml-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM REMOVE XML ELEMENT","permalink":"/docs/fr/commands/dom-remove-xml-element"},"next":{"title":"DOM SET XML DECLARATION","permalink":"/docs/fr/commands/dom-set-xml-declaration"}}'),s=n("785893"),l=n("250065");let d={id:"dom-set-xml-attribute",title:"DOM SET XML ATTRIBUTE",slug:"/commands/dom-set-xml-attribute",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"DOM SET XML ATTRIBUTE"})," ( ",(0,s.jsx)(t.em,{children:"refEl\xe9ment"})," ; ",(0,s.jsx)(t.em,{children:"nomAttribut"})," ; ",(0,s.jsx)(t.em,{children:"valeurAttribut"})," {; ",(0,s.jsx)(t.em,{children:"nomAttribut2"})," ; ",(0,s.jsx)(t.em,{children:"valeurAttribut2"})," ; ... ; ",(0,s.jsx)(t.em,{children:"nomAttributN"})," ; ",(0,s.jsx)(t.em,{children:"valeurAttributN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tre"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"refEl\xe9ment"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"R\xe9f\xe9rence d\u2019\xe9l\xe9ment XML"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"nomAttribut"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Attribut \xe0 d\xe9finir"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"valeurAttribut"}),(0,s.jsx)(t.td,{children:"Text, Boolean, Integer, Real, Time, Date"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Nouvelle valeur d\u2019attribut"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["La commande ",(0,s.jsx)(t.strong,{children:"DOM SET XML ATTRIBUTE"})," permet d\u2019ajouter un ou plusieurs attribut(s) \xe0 l\u2019\xe9l\xe9ment XML dont la r\xe9f\xe9rence est pass\xe9e dans le param\xe8tre ",(0,s.jsx)(t.em,{children:"refEl\xe9ment"}),". Elle permet \xe9galement de d\xe9finir la valeur de chaque attribut d\xe9fini."]}),"\n",(0,s.jsxs)(t.p,{children:["Passez dans les param\xe8tres ",(0,s.jsx)(t.em,{children:"nomAttribut"})," et ",(0,s.jsx)(t.em,{children:"valeurAttribut"})," respectivement l\u2019attribut \xe0 \xe9crire et sa valeur (sous forme de variables, champs ou valeurs litt\xe9rales). Vous pouvez passer autant de couples attribut/valeur que vous voulez.",(0,s.jsx)(t.br,{}),"\nLe param\xe8tre ",(0,s.jsx)(t.em,{children:"valeurAttribut"})," peut \xeatre de type texte ou d'un autre type (bool\xe9en, entier, r\xe9el, heure ou date). Si vous passez une valeur d'un type autre que texte, 4D se charge de la conversion en texte, selon les principes suivants :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Type"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Exemple de valeur convertie"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Bool\xe9en"}),(0,s.jsx)(t.td,{children:'"true" ou "false" (non traduit)'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Entier"}),(0,s.jsx)(t.td,{children:'"123456"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"R\xe9el"}),(0,s.jsx)(t.td,{children:'"12.34" (le s\xe9parateur d\xe9cimal est toujours ".")'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Heure"}),(0,s.jsx)(t.td,{children:'"5233" (nombre de secondes)'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Date"}),(0,s.jsx)(t.td,{children:'"2006-12-04T00:00:00Z" (norme RFC 3339)'})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(t.p,{children:"Soit la source XML suivante :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-XML",children:"<Book>\n\xa0\xa0\xa0<Title>The Best Seller</Title>\n</Book>\n"})}),"\n",(0,s.jsx)(t.p,{children:"Si le code suivant est ex\xe9cut\xe9 :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0vAttrName:="Font"\n\xa0vAttrVal:="Verdana"\n\xa0DOM SET XML ATTRIBUTE(vRefElem;vAttrName;vAttrVal)\n'})}),"\n",(0,s.jsx)(t.p,{children:"Nous obtenons :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-XML",children:"<Book>\n\xa0\xa0\xa0<Title Font=Verdana>The Best Seller</Title>\n</Book>\n"})}),"\n",(0,s.jsx)(t.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,s.jsx)(t.p,{children:"Si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,s.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/fr/commands/dom-get-xml-attribute-by-index",children:"DOM GET XML ATTRIBUTE BY INDEX"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/commands/dom-get-xml-attribute-by-name",children:"DOM GET XML ATTRIBUTE BY NAME"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/commands/dom-remove-xml-attribute",children:"DOM REMOVE XML ATTRIBUTE"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n",(0,s.jsx)(t.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(t.td,{children:"866"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2713"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Modifie les variables"}),(0,s.jsx)(t.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var r=n(667294);let s={},l=r.createContext(s);function d(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);