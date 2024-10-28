"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1859],{396885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=t(474848),i=t(28453);const r={id:"svg-set-attribute",title:"SVG SET ATTRIBUTE",slug:"/commands/svg-set-attribute",displayed_sidebar:"docs"},d=void 0,l={id:"commands-legacy/svg-set-attribute",title:"SVG SET ATTRIBUTE",description:"SVG SET ATTRIBUTE ( { ;} objetImage ; id_Element ; nomAttribut ; valeurAttribut {; nomAttribut2 ; valeurAttribut2 ; ... ; nomAttributN ; valeurAttributN} {; })",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/svg-set-attribute.md",sourceDirName:"commands-legacy",slug:"/commands/svg-set-attribute",permalink:"/docs/fr/commands/svg-set-attribute",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsvg-set-attribute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"svg-set-attribute",title:"SVG SET ATTRIBUTE",slug:"/commands/svg-set-attribute",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SVG GET ATTRIBUTE",permalink:"/docs/fr/commands/svg-get-attribute"},next:{title:"SVG SHOW ELEMENT",permalink:"/docs/fr/commands/svg-show-element"}},a={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SVG SET ATTRIBUTE"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objetImage"})," ; id_Element ; ",(0,s.jsx)(n.em,{children:"nomAttribut"})," ; ",(0,s.jsx)(n.em,{children:"valeurAttribut"})," {; ",(0,s.jsx)(n.em,{children:"nomAttribut2"})," ; ",(0,s.jsx)(n.em,{children:"valeurAttribut2"})," ; ... ; ",(0,s.jsx)(n.em,{children:"nomAttributN"})," ; ",(0,s.jsx)(n.em,{children:"valeurAttributN"}),"} {; *})"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objetImage est un nom d'objet (cha\xeene) ",(0,s.jsx)(n.br,{}),"Si omis, objetImage est une variable ou un champ"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objetPicture"}),(0,s.jsx)(n.td,{children:"Picture"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom d\u2019objet (si * sp\xe9cifi\xe9) ou Variable ou champ (si * omis)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"id_Element"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"ID de l'\xe9l\xe9ment dont un ou plusieurs attribut(s) sont \xe0 d\xe9finir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomAttribut"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Attribut \xe0 d\xe9finir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valeurAttribut"}),(0,s.jsx)(n.td,{children:"Text, Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nouvelle valeur d\u2019attribut"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si pass\xe9 = modifier l'arbre DOM interne de l'image SVG (variable uniquement)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"SVG SET ATTRIBUTE"})," permet de modifier la valeur d\u2019un attribut existant dans l\u2019arbre de rendu SVG d\u2019une image affich\xe9e ou dans l'arbre DOM interne d'une image."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous passez le premier param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,s.jsx)(n.em,{children:"objetImage"})," est un nom d\u2019objet (une cha\xeene). Dans ce cas, la commande s\u2019applique aux param\xe8tres de l\u2019image de rendu attach\xe9e \xe0 l\u2019objet (\xe0 noter que les param\xe8tres et donc l\u2019image de rendu de l\u2019objet ne sont cr\xe9\xe9s que si la commande ",(0,s.jsx)(n.strong,{children:"SVG SET ATTRIBUTE"})," est appel\xe9e au moins une fois).",(0,s.jsx)(n.br,{}),"\nSi vous ne passez pas le premier param\xe8tre ",(0,s.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,s.jsx)(n.em,{children:"objetImage"})," est une variable ou un champ. Vous ne passez alors pas une cha\xeene mais une r\xe9f\xe9rence de variable (variable objet uniquement) ou de champ. Dans ce cas, la commande s\u2019applique aux images de rendu de tous les objets qui utilisent la variable ou le champ."]}),"\n",(0,s.jsxs)(n.p,{children:["Par d\xe9faut, cette commande modifie uniquement l'image de rendu dans les objets formulaires correspondant \xe0 ",(0,s.jsx)(n.em,{children:"objetImage"})," dans le contexte du formulaire, et ne fait rien si aucun objet ne l'utilise. Si vous passez le deuxi\xe8me ",(0,s.jsx)(n.em,{children:"*"})," en dernier param\xe8tre, la commande modifie elle-m\xeame l'image SVG, m\xeame si aucun objet formulaire ne l'utilise. Dans ce cas, tous les objets formulaires existants ou futurs qui utilisent l'image SVG seront modifi\xe9s, dans tous les contextes."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Le dernier * est inutile si le param\xe8tre ",(0,s.jsx)(n.em,{children:"objetImage"})," est un nom d'objet, il est pris en compte uniquement si ",(0,s.jsx)(n.em,{children:"objetImage"})," est une variable ou un champ."]}),"\n",(0,s.jsxs)(n.li,{children:["Pour modifier la source de donn\xe9es d'une image SVG, vous pouvez \xe9galement utiliser les commandes ",(0,s.jsx)(n.em,{children:"XML DOM"})," ou le composant ",(0,s.jsx)(n.strong,{children:"4D SVG"})," fourni par 4D."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"id_Element"}),' permet de d\xe9finir l\'ID (attribut "id" ou "xml:id") de l\u2019\xe9l\xe9ment dont vous souhaitez modifier un ou plusieurs attribut(s).']}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans les param\xe8tres ",(0,s.jsx)(n.em,{children:"nomAttribut"})," et ",(0,s.jsx)(n.em,{children:"valeurAttribut"})," respectivement l'attribut \xe0 \xe9crire et sa valeur (sous forme de variables, champs ou valeurs litt\xe9rales). Vous pouvez passer autant de couples attribut/valeur que vous voulez."]}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"SVG SET ATTRIBUTE"})," vous permet de modifier (mais pas d\u2019ajouter ou de supprimer) la plupart des attributs SVG, comme par exemple 'fill', 'opacity', 'font-family', etc. Pour une d\xe9finition compl\xe8te des attributs SVG, reportez-vous aux documents de r\xe9f\xe9rence disponibles sur Internet, par exemple ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.a,{href:"http://www.w3.org/TR/SVG11/attindex.html",children:"http://www.w3.org/TR/SVG11/attindex.html"})}),". La mise \xe0 jour de l\u2019image de rendu est imm\xe9diate, les modifications sont report\xe9es en cascade sur les \xe9l\xe9ments enfants pour les styles h\xe9ritables."]}),"\n",(0,s.jsx)(n.p,{children:"A noter que pour des raisons techniques, les attributs de certains \xe9l\xe9ments ainsi que certains attributs ne sont pas modifiables. Le tableau suivant liste les \xe9l\xe9ments modifiables, les \xe9l\xe9ments non modifiables ainsi que les attributs non modifiables :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"El\xe9ments dont les attributs sont modifiables"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"svg"}),(0,s.jsx)(n.th,{children:"Restrictions :"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'- "width" et "height" ne sont pas modifiables (1)'}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'- "viewBox" n\'est modifiable que si "width" et "height" sont d\xe9finis dans le document d\u2019origine'}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"g"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"defs"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"use"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filter"}),(0,s.jsx)(n.td,{children:"Restriction : les \xe9l\xe9ments enfants fe_xxx ne sont pas modifiables"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"circle"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ellipse"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"line"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"polyline"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"polygon"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rect"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"text, tspan, textArea"}),(0,s.jsx)(n.td,{children:'L\u2019attribut sp\xe9cifique "4d-text" vous permet de modifier le texte d\u2019un \xe9l\xe9ment "text", "tspan" ou "textArea" (cf. exemple)'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Image"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"El\xe9ments dont les attributs ne sont pas modifiables"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"linearGradient, radialGradient, Stop, solidColor, marker, symbol, clipPath, filter et les \xe9l\xe9ments commen\xe7ant par fe, style, pattern"}),(0,s.jsx)(n.th,{children:"Cet ensemble d\xe9signe tous les \xe9l\xe9ments r\xe9f\xe9ren\xe7ables ou contenus dans un \xe9l\xe9ment r\xe9f\xe9ren\xe7able. Cela signifie qu\u2019il n\u2019est pas possible par exemple de red\xe9finir les attributs d\u2019un gradient (mais il est possible de changer le gradient utilis\xe9). De m\xeame, pour changer un marqueur de couleur noire en marqueur rouge, il faudra d\xe9finir deux marqueurs dans le document SVG (un noir et un rouge) et s\xe9lectionner l\u2019un ou l\u2019autre. Il n\u2019est pas possible non plus par exemple de modifier la couleur d'un rectangle s\u2019il a pour parent un \xe9l\xe9ment symbol ou marker"})]})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Attributs non modifiables"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"id ou xml:id"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lang ou xml:lang"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"class ou xml:class"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"width, height"}),(0,s.jsx)(n.td,{children:"Concerne les attributs de l\u2019\xe9l\xe9ment 'svg' uniquement (1)"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["(1) Ces attributs ne peuvent \xeatre modifi\xe9s car ils d\xe9finissent et structurent l\u2019image r\xe9sultante. Les attributs ",(0,s.jsx)(n.em,{children:"width"})," et ",(0,s.jsx)(n.em,{children:"height"})," de l\u2019\xe9l\xe9ment ",(0,s.jsx)(n.em,{children:"svg"})," servent \xe0 d\xe9finir les dimensions initiales de l\u2019image dans 4D et ces dimensions doivent rester constantes apr\xe8s la cr\xe9ation de l\u2019image (il est toutefois possible de modifier les dimensions de l\u2019image r\xe9sultante avec la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/transform-picture",children:"TRANSFORM PICTURE"})," de 4D)."]}),"\n",(0,s.jsxs)(n.p,{children:["Reportez-vous \xe9galement \xe0 la description de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/svg-get-attribute",children:"SVG GET ATTRIBUTE"})," pour obtenir la liste des attributs 4D r\xe9serv\xe9s et d\xe9di\xe9s \xe0 l\u2019animation."]}),"\n",(0,s.jsx)(n.p,{children:"Si vous tentez de modifier un attribut d\u2019un \xe9l\xe9ment non pris en charge ou l\u2019un de ses enfants, la commande ne fait rien et aucune erreur n\u2019est g\xe9n\xe9r\xe9e."}),"\n",(0,s.jsxs)(n.p,{children:["Si la commande est ex\xe9cut\xe9e en-dehors du contexte d'un formulaire ou si un ",(0,s.jsx)(n.em,{children:"objetImage"})," invalide est pass\xe9, la variable OK prend la valeur 0. Si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, elle prend la valeur 1."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Modification du contenu d\u2019un \xe9l\xe9ment de type texte :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0SVG SET ATTRIBUTE(*;nom_objet_image;text_element_ID;"4d-text";"Ceci est un texte")\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Il n\u2019y a pas de ",(0,s.jsx)(n.em,{children:"namespace"})," pour que l\u2019attribut puisse \xeatre utilis\xe9 dans une feuille de style CSS sans risque de conflit."]}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/svg-get-attribute",children:"SVG GET ATTRIBUTE"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var s=t(296540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);