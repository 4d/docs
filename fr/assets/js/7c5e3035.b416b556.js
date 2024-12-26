"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98006"],{950317:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/convert-to-text","title":"Convert to text","description":"Convert to text ( blob ; jeuCaract\xe8res ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/convert-to-text.md","sourceDirName":"commands-legacy","slug":"/commands/convert-to-text","permalink":"/docs/fr/commands/convert-to-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-to-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"convert-to-text","title":"Convert to text","slug":"/commands/convert-to-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CONVERT FROM TEXT","permalink":"/docs/fr/commands/convert-from-text"},"next":{"title":"Delete string","permalink":"/docs/fr/commands/delete-string"}}'),s=n("785893"),d=n("250065");let i={id:"convert-to-text",title:"Convert to text",slug:"/commands/convert-to-text",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let t={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Convert to text"})," ( ",(0,s.jsx)(t.em,{children:"blob"})," ; ",(0,s.jsx)(t.em,{children:"jeuCaract\xe8res"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tre"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"blob"}),(0,s.jsx)(t.td,{children:"Blob"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"BLOB contenant un texte exprim\xe9 dans un jeu de caract\xe8res sp\xe9cifique"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"jeuCaract\xe8res"}),(0,s.jsx)(t.td,{children:"Text, Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Nom ou Num\xe9ro du jeu de caract\xe8res de blob"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"R\xe9sultat"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Contenu de blob exprim\xe9 dans le jeu de caract\xe8res 4D"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["La commande ",(0,s.jsx)(t.strong,{children:"Convert to text"})," convertit le texte contenu dans le param\xe8tre ",(0,s.jsx)(t.em,{children:"blob"})," et le retourne en texte exprim\xe9 dans le jeu de caract\xe8res de 4D. 4D utilise le jeu de caract\xe8res UTF-16 par d\xe9faut."]}),"\n",(0,s.jsxs)(t.p,{children:["Passez dans ",(0,s.jsx)(t.em,{children:"jeuCaract\xe8res"})," le jeu de caract\xe8res dans lequel est exprim\xe9 le texte contenu dans ",(0,s.jsx)(t.em,{children:"blob"}),", et qui doit \xeatre utilis\xe9 pour la conversion. Si le conteneur de donn\xe9es contient du texte copi\xe9 depuis 4D, le jeu de caract\xe8res du BLOB sera probablement UTF-16. Vous pouvez passer une cha\xeene fournissant le nom standard du jeu ou l'un de ses alias (par exemple \u201CISO-8859-1\u201D ou \u201CUTF-8\u201D), ou encore son identifiant (entier long). Pour plus d\u2019informations, reportez-vous \xe0 la description de la commande ",(0,s.jsx)(t.a,{href:"/docs/fr/commands/convert-from-text",children:"CONVERT FROM TEXT"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Convert to text"})," prend en charge les BOM (Byte Order Mark). Si le jeu de caract\xe8res sp\xe9cifi\xe9 est de type Unicode (UTF-8, UTF-16 ou UTF-32), 4D tente d\u2019identifier une BOM parmi les premiers octets re\xe7us. Si elle est d\xe9tect\xe9e, elle est filtr\xe9e du r\xe9sultat et 4D utilise le jeu de caract\xe8res qu\u2019elle d\xe9finit au lieu du jeu de caract\xe8res sp\xe9cifi\xe9."]}),"\n",(0,s.jsx)(t.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,s.jsx)(t.p,{children:"Si la commande a \xe9t\xe9 correctement ex\xe9cut\xe9e, la variable OK prend la valeur 1. Sinon, elle prend la valeur 0."}),"\n",(0,s.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/fr/commands/convert-from-text",children:"CONVERT FROM TEXT"})}),"\n",(0,s.jsx)(t.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(t.td,{children:"1012"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2713"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Modifie les variables"}),(0,s.jsx)(t.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var r=n(667294);let s={},d=r.createContext(s);function i(e){let t=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);