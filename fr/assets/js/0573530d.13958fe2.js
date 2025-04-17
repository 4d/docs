"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66477"],{617712:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/svg-get-attribute","title":"SVG GET ATTRIBUTE","description":"SVG GET ATTRIBUTE ( { ;} objetImage ; id_Element ; nomAttribut ; valeurAttribut* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/svg-get-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/svg-get-attribute","permalink":"/docs/fr/20-R8/commands/svg-get-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsvg-get-attribute.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"svg-get-attribute","title":"SVG GET ATTRIBUTE","slug":"/commands/svg-get-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SVG Find element IDs by rect","permalink":"/docs/fr/20-R8/commands/svg-find-element-ids-by-rect"},"next":{"title":"SVG SET ATTRIBUTE","permalink":"/docs/fr/20-R8/commands/svg-set-attribute"}}'),s=n("785893"),i=n("250065");let d={id:"svg-get-attribute",title:"SVG GET ATTRIBUTE",slug:"/commands/svg-get-attribute",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let t={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"SVG GET ATTRIBUTE"})," ( {* ;} ",(0,s.jsx)(t.em,{children:"objetImage"})," ; id_Element ; ",(0,s.jsx)(t.em,{children:"nomAttribut"})," ; ",(0,s.jsx)(t.em,{children:"valeurAttribut"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tre"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Op\xe9rateur"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsxs)(t.td,{children:["Si sp\xe9cifi\xe9, objetImage est un nom d'objet (cha\xeene) ",(0,s.jsx)(t.br,{}),"Si omis, objetImage est une variable ou un champ"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objetPicture"}),(0,s.jsx)(t.td,{children:"Picture"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Nom d\u2019objet (si * sp\xe9cifi\xe9) ou Variable ou champ (si * omis)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id_Element"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"ID de l'\xe9l\xe9ment dont vous souhaitez conna\xeetre une valeur d'attribut"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"nomAttribut"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Nom d\u2019attribut"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"valeurAttribut"}),(0,s.jsx)(t.td,{children:"Text, Integer"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Valeur courante de l'attribut"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["La commande ",(0,s.jsx)(t.strong,{children:"SVG GET ATTRIBUTE"})," permet de lire la valeur courante de l\u2019attribut ",(0,s.jsx)(t.em,{children:"nomAttribut"})," dans un objet ou une image SVG."]}),"\n",(0,s.jsxs)(t.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,s.jsx)(t.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,s.jsx)(t.em,{children:"objetImage"})," est un nom d\u2019objet (une cha\xeene). Dans ce cas, la commande retourne la valeur de l\u2019attribut pour l\u2019image de rendu attach\xe9e \xe0 l\u2019objet. Cette valeur peut avoir \xe9t\xe9 modifi\xe9e par ",(0,s.jsx)(t.a,{href:"/docs/fr/20-R8/commands/svg-set-attribute",children:"SVG SET ATTRIBUTE"})," par exemple.",(0,s.jsx)(t.br,{}),"\nSi vous ne passez pas le param\xe8tre ",(0,s.jsx)(t.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,s.jsx)(t.em,{children:"objetImage"})," est une variable ou un champ. Vous ne passez alors pas une cha\xeene mais une r\xe9f\xe9rence de variable (variable objet uniquement) ou de champ. Dans ce cas, la commande retourne la valeur de l\u2019attribut pour l\u2019image de rendu initiale (correspondant \xe0 la source de donn\xe9es de la variable)."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note :"})," Ce principe s\u2019applique \xe9galement \xe0 la commande ",(0,s.jsx)(t.a,{href:"/docs/fr/20-R8/commands/svg-find-element-id-by-coordinates",children:"SVG Find element ID by coordinates"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Le param\xe8tre ",(0,s.jsx)(t.em,{children:"id_Element"}),' permet de d\xe9finir l\'ID (attribut "id" ou "xml:id") de l\u2019\xe9l\xe9ment dont vous souhaitez lire la valeur d\u2019attribut.']}),"\n",(0,s.jsxs)(t.p,{children:["Pour plus d\u2019informations sur les attributs SVG, reportez-vous \xe0 la description de la commande ",(0,s.jsx)(t.a,{href:"/docs/fr/20-R8/commands/svg-set-attribute",children:"SVG SET ATTRIBUTE"}),". Voici la liste des attributs 4D r\xe9serv\xe9s et d\xe9di\xe9s \xe0 l\u2019animation :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Attributs"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Acc\xe8s"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Commentaire"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4D-text"}),(0,s.jsx)(t.td,{children:"lecture/\xe9criture"}),(0,s.jsx)(t.td,{children:"Remplace/lit le contenu du noeud de texte. Utilisable avec les \xe9l\xe9ments 'text', 'tspan' et 'textArea'"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4D-bringToFront"}),(0,s.jsx)(t.td,{children:"\xe9criture"}),(0,s.jsxs)(t.td,{children:["Si 'true', d\xe9placer le noeud devant les noeuds fr\xe8res. Utilisable uniquement avec la commande ",(0,s.jsx)(t.a,{href:"/docs/fr/20-R8/commands/svg-set-attribute",children:"SVG SET ATTRIBUTE"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4D-isOfClass-{IDENT [[S|COMMA] IDENT]*}"}),(0,s.jsx)(t.td,{children:"lecture"}),(0,s.jsx)(t.td,{children:"Si l\u2019attribut de la classe h\xe9rit\xe9e du noeud contient tous les noms de classes, retourne 'true' sinon retourne 'false'. Retourne par exemple true pour \"4D-isOfClass-land\" si la classe h\xe9rit\xe9e du noeud est \"land department01\")"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4D-enableD2D"}),(0,s.jsx)(t.td,{children:"lecture/\xe9criture"}),(0,s.jsxs)(t.td,{children:["Si 'false', inactive Direct2D pour le moteur de rendu SVG. En effet, les filtres SVG ne sont pas rendus en Direct2D mais ils le sont en GDI/GDIPlus. Cette option permet de b\xe9n\xe9ficier des filtres SVG m\xeame si la base est en Direct2D. A noter que cette option n'est prise en compte que si ",(0,s.jsx)(t.em,{children:"objetImage"})," contient d\xe9j\xe0 une image charg\xe9e. En revanche, elle n'a besoin d'\xeatre d\xe9finie qu'une seule fois par session (par exemple avec un SVG simple charg\xe9 en m\xe9moire depuis une variable texte au d\xe9marrage de la base) car elle est globale au moteur."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/fr/20-R8/commands/svg-set-attribute",children:"SVG SET ATTRIBUTE"})}),"\n",(0,s.jsx)(t.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(t.td,{children:"1056"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return d}});var r=n(667294);let s={},i=r.createContext(s);function d(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);