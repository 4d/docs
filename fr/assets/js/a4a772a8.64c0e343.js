"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46733"],{530550:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/object-set-font","title":"OBJECT SET FONT","description":"OBJECT SET FONT ( { ;} objet ; police* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/object-set-font.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-font","permalink":"/docs/fr/commands/object-set-font","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-font.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-set-font","title":"OBJECT SET FONT","slug":"/commands/object-set-font","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET FOCUS RECTANGLE INVISIBLE","permalink":"/docs/fr/commands/object-set-focus-rectangle-invisible"},"next":{"title":"OBJECT SET FONT SIZE","permalink":"/docs/fr/commands/object-set-font-size"}}'),i=s("785893"),r=s("250065");let o={id:"object-set-font",title:"OBJECT SET FONT",slug:"/commands/object-set-font",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT SET FONT"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objet"})," ; ",(0,i.jsx)(n.em,{children:"police"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si sp\xe9cifi\xe9 = objet est un nom d'objet (cha\xeene) Si omis = objet est un champ ou une variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom d'objet (si * sp\xe9cifi\xe9) ou Champ ou Variable (si * omis)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"police"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom de police de caract\xe8res"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT SET FONT"})," affiche ",(0,i.jsx)(n.em,{children:"objet"})," avec la police d\xe9finie dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"police"}),". Le param\xe8tre ",(0,i.jsx)(n.em,{children:"police"})," doit contenir un nom de police valide."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel *, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est un nom d'objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"})," : Si vous utilisez cette commande sur un objet qui utilisait une feuille de style, la r\xe9f\xe9rence \xe0 la feuille de style est automatiquement supprim\xe9e de l'objet -- m\xeame si vous attribuez les m\xeames attributs que ceux de la feuille de style."]}),"\n",(0,i.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsxs)(n.p,{children:["L'exemple suivant d\xe9finit la police d'un bouton nomm\xe9 ",(0,i.jsx)(n.em,{children:"bOK"}),". La police est Arial, une police syst\xe8me sous Windows :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FONT(bOK;"Arial")\xa0// Modification de la police de MonBouton\n'})}),"\n",(0,i.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsx)(n.p,{children:"L'exemple suivant d\xe9finit la police de tous les objets d'un formulaire dont le nom contient \"info\"."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FONT(*;"@info@";"Times")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,i.jsxs)(n.p,{children:["L'exemple suivant utilise l'option sp\xe9ciale ",(0,i.jsx)(n.em,{children:"%password"}),', destin\xe9e \xe0 la saisie et l\'affichage des champs de type \u201Cmots de passe\u201D. Lorsque vous passez "%password" dans le param\xe8tre ',(0,i.jsx)(n.em,{children:"police"})," pour un ",(0,i.jsx)(n.em,{children:"objet"})," :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"chaque caract\xe8re saisi dans l'objet est repr\xe9sent\xe9 par un m\xeame symbole,"}),"\n",(0,i.jsx)(n.li,{children:'les actions "copier" et "couper" sont d\xe9sactiv\xe9es dans l\'objet.'}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," L'option ",(0,i.jsx)(n.em,{children:"%password"})," est utilisable avec les objets de type champ, variable et combo box."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FONT([Utilisateurs]MotPasse;"%password")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/font-file",children:"Font file"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/font-list",children:"FONT LIST"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"Notes de programmation"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/object-get-font",children:"OBJECT Get font"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/object-set-font-size",children:"OBJECT SET FONT SIZE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/object-set-font-style",children:"OBJECT SET FONT STYLE"})]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"164"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var t=s(667294);let i={},r=t.createContext(i);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);