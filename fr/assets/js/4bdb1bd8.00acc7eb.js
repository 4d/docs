"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84225"],{740619:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/object-set-font-size","title":"OBJECT SET FONT SIZE","description":"OBJECT SET FONT SIZE ( { ;} objet ; taille* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-set-font-size.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-font-size","permalink":"/docs/fr/20-R8/commands/object-set-font-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-font-size.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-font-size","title":"OBJECT SET FONT SIZE","slug":"/commands/object-set-font-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET FONT","permalink":"/docs/fr/20-R8/commands/object-set-font"},"next":{"title":"OBJECT SET FONT STYLE","permalink":"/docs/fr/20-R8/commands/object-set-font-style"}}'),i=s("785893"),r=s("250065");let l={id:"object-set-font-size",title:"OBJECT SET FONT SIZE",slug:"/commands/object-set-font-size",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT SET FONT SIZE"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objet"})," ; ",(0,i.jsx)(n.em,{children:"taille"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si sp\xe9cifi\xe9 = objet est un nom d'objet (cha\xeene) Si omis = objet est un champ ou une variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Champ ou variable (si * est omis)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"taille"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Taille de police en points"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT SET FONT SIZE"})," d\xe9finit la taille de la police du ou des objet(s) de formulaire sp\xe9cifi\xe9(s) par ",(0,i.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel *, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est un nom d'objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement). Pour plus d'informations sur les noms d'objets, reportez-vous \xe0 la section ",(0,i.jsx)(n.em,{children:"Objets de formulaires"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["La ",(0,i.jsx)(n.em,{children:"taille"})," peut \xeatre tout Entier compris entre 1 et 255. Si la taille exacte n'existe pas, les caract\xe8res sont proportionnellement redimensionn\xe9s."]}),"\n",(0,i.jsx)(n.p,{children:"La zone de l'objet, telle qu'elle a \xe9t\xe9 d\xe9finie dans le formulaire, doit \xeatre suffisamment grande pour afficher les donn\xe9es dans la nouvelle taille. Autrement, le texte peut \xeatre tronqu\xe9 ou pas du tout affich\xe9."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Remarque"})," : Si vous utilisez cette commande sur un objet qui utilise une feuille de style, la r\xe9f\xe9rence \xe0 la feuille de style est automatiquement supprim\xe9e de l'objet -- m\xeame si vous assignez les m\xeames attributs que ceux de la feuille de style."]}),"\n",(0,i.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsxs)(n.p,{children:["L'exemple suivant d\xe9finit la taille de police de la variable appel\xe9e ",(0,i.jsx)(n.em,{children:"vInfo"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0OBJECT SET FONT SIZE(vInfo;14)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsx)(n.p,{children:'L\'exemple suivant d\xe9finit la taille de police de tous les objets de formulaire dont le nom d\xe9bute par "hl" :'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FONT SIZE(*;"hl@";14)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Notes de programmation"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/object-get-font-size",children:"OBJECT Get font size"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/object-set-font",children:"OBJECT SET FONT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/object-set-font-style",children:"OBJECT SET FONT STYLE"})]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"165"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);