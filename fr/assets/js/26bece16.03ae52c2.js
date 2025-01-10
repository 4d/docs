"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6963"],{730344:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"FormObjects/propertiesPrint","title":"Impression","description":"Impression cadre","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/FormObjects/properties_Print.md","sourceDirName":"FormObjects","slug":"/FormObjects/propertiesPrint","permalink":"/docs/fr/FormObjects/propertiesPrint","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Print.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"propertiesPrint","title":"Impression"},"sidebar":"docs","previous":{"title":"Plug-ins","permalink":"/docs/fr/FormObjects/propertiesPlugIns"},"next":{"title":"Plage de valeurs","permalink":"/docs/fr/FormObjects/propertiesRangeOfValues"}}'),s=n("785893"),i=n("250065");let o={id:"propertiesPrint",title:"Impression"},l=void 0,a={},d=[{value:"Impression cadre",id:"impression-cadre",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge",level:4}];function c(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"impression-cadre",children:"Impression cadre"}),"\n",(0,s.jsx)(r.p,{children:"Cette propri\xe9t\xe9 permet de g\xe9rer le mode d'impression des objets dont la taille peut varier d'un enregistrement \xe0 l'autre en fonction de leur contenu. Ces objets peuvent \xeatre imprim\xe9s sur une hauteur de taille fixe ou variable. Un cadre de taille fixe provoque l\u2019impression de l\u2019objet dans les limites d\xe9finies lors de la cr\xe9ation de l\u2019objet dans le formulaire. Un cadre de taille variable s\u2019\xe9tend si n\xe9cessaire lors de l\u2019impression afin d\u2019imprimer l\u2019int\xe9gralit\xe9 de l\u2019objet. A noter que la largeur des objets imprim\xe9s en taille variable n'est pas affect\xe9e par cette option; seule la hauteur varie automatiquement en fonction du contenu de l'objet."}),"\n",(0,s.jsx)(r.p,{children:"Vous ne pouvez pas placer deux objets (ou plus) avec une taille variable c\xf4te \xe0 c\xf4te dans un formulaire. Vous pouvez placer des objets de taille fixe \xe0 c\xf4t\xe9 d\u2019un objet qui sera imprim\xe9 avec une taille variable si l\u2019objet de taille variable est plus long d\u2019au moins une ligne que l\u2019objet plac\xe9 \xe0 son c\xf4t\xe9 et que leurs limites sup\xe9rieures sont align\xe9es. Si cette condition n\u2019est pas respect\xe9e, le contenu des autres champs sera r\xe9p\xe9t\xe9 pour toute tranche horizontale de l\u2019objet de taille variable."}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["Les commandes ",(0,s.jsx)(r.code,{children:"Print object"})," et ",(0,s.jsx)(r.code,{children:"Print form"})," ne sont pas compatibles avec cette option."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Les options d'impression sont les suivantes :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["L'option ",(0,s.jsx)(r.strong,{children:"Variable"})," / ",(0,s.jsx)(r.strong,{children:"Impression taille variable"})," coch\xe9e : 4D agrandit ou r\xe9duit la zone de l'objet du formulaire afin d'imprimer tous les sous-enregistrements."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["L'option ",(0,s.jsx)(r.strong,{children:"Fixe (Tronqu\xe9)"})," / ",(0,s.jsx)(r.strong,{children:"Impression taille variable"})," non coch\xe9e : 4D imprime uniquement le contenu qui appara\xeet dans la zone de l'objet. Le formulaire n'est imprim\xe9 qu'une seule fois et le contenu non imprim\xe9 est ignor\xe9."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Fixe (Enregistrements multiples)"})," (sous-formulaires uniquement) : la taille initiale de la zone de sous-formulaire est conserv\xe9e mais 4D imprime le formulaire plusieurs fois afin d'imprimer tous les enregistrements."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["Cette propri\xe9t\xe9 peut \xeatre d\xe9finie par programmation \xe0 l'aide de la commande ",(0,s.jsx)(r.code,{children:"OBJECT SET PRINT VARIABLE FRAME"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"grammaire-json",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{style:{textAlign:"center"},children:"Nom"}),(0,s.jsx)(r.th,{style:{textAlign:"center"},children:"Type de donn\xe9es"}),(0,s.jsx)(r.th,{children:"Valeurs possibles"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"printFrame"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(r.td,{children:'"fixed", "variable", (sous-formulaire uniquement) "fixedMultiple"'})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"objets-pris-en-charge",children:"Objets pris en charge"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/inputOverview",children:"Zone de saisie"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/subformOverview",children:"Sous-formulaires"})," (sous-formulaires liste uniquement) - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/writeProAreaOverview",children:"Zones 4D Write Pro"})]})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return o}});var t=n(667294);let s={},i=t.createContext(s);function o(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);