"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63511"],{847258:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/object-set-data-source","title":"OBJECT SET DATA SOURCE","description":"OBJECT SET DATA SOURCE ( { ;} objet ; sourceDonn\xe9es* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-set-data-source.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-data-source","permalink":"/docs/fr/20-R8/commands/object-set-data-source","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-data-source.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-data-source","title":"OBJECT SET DATA SOURCE","slug":"/commands/object-set-data-source","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET CORNER RADIUS","permalink":"/docs/fr/20-R8/commands/object-set-corner-radius"},"next":{"title":"OBJECT SET DRAG AND DROP OPTIONS","permalink":"/docs/fr/20-R8/commands/object-set-drag-and-drop-options"}}'),r=s("785893"),o=s("250065");let d={id:"object-set-data-source",title:"OBJECT SET DATA SOURCE",slug:"/commands/object-set-data-source",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET DATA SOURCE"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," ; ",(0,r.jsx)(n.em,{children:"sourceDonn\xe9es"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,r.jsx)(n.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(n.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sourceDonn\xe9es"}),(0,r.jsx)(n.td,{children:"Pointer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Pointeur vers la nouvelle source de donn\xe9es de l\u2019objet"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"OBJECT SET DATA SOURCE"})," vous permet de modifier la source de donn\xe9es de l\u2019objet ou des objets d\xe9sign\xe9(s) par les param\xe8tres ",(0,r.jsx)(n.em,{children:"objet"})," et ",(0,r.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,r.jsx)(n.p,{children:"La source de donn\xe9es est le champ ou la variable dont la valeur est repr\xe9sent\xe9e par l\u2019objet lors de l\u2019ex\xe9cution du formulaire. En mode D\xe9veloppement, la source de donn\xe9es est d\xe9finie dans la Liste de propri\xe9t\xe9s, g\xe9n\xe9ralement via les lignes Source et Champ source (champs) ou Nom de la variable (variables) :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(499130).Z+"",width:"543",height:"230"})}),"\n",(0,r.jsx)(n.p,{children:"Hormis pour les list box (cf. ci-dessous), toutes les sources de donn\xe9es du formulaire peuvent \xeatre modifi\xe9es par cette commande. Il appartient au d\xe9veloppeur de s\u2019assurer de la coh\xe9rence des modifications effectu\xe9es."}),"\n",(0,r.jsx)(n.p,{children:"Dans le cas des list box, les points suivants sont \xe0 consid\xe9rer :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"les modifications de sources de donn\xe9es doivent tenir compte du type de list box : par exemple, il n\u2019est pas possible d\u2019utiliser un champ comme source de donn\xe9es de colonne d\u2019une list box de type tableau."}),"\n",(0,r.jsx)(n.li,{children:"pour les list box de type s\xe9lection, il n\u2019est pas possible de modifier ou de lire la source de donn\xe9es de l\u2019objet list box lui-m\xeame : il s\u2019agit dans ce cas d\u2019une r\xe9f\xe9rence interne et non d\u2019une source de donn\xe9es."}),"\n",(0,r.jsxs)(n.li,{children:["cette commande est utile principalement dans le contexte des list box de type tableau. Pour les list box de type s\xe9lection, vous pouvez plut\xf4t utiliser la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/listbox-set-column-formula",children:"LISTBOX SET COLUMN FORMULA"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Si la commande est appliqu\xe9e \xe0 une source de donn\xe9es non modifiable, elle ne fait rien."}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Modification de la source de donn\xe9es d\u2019une zone de saisie :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $ptrChp : Pointer\n\xa0$ptrChp:=Field(3;2)\n\xa0OBJECT SET DATA SOURCE(*;"Input";$ptrChp)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/listbox-set-column-formula",children:"LISTBOX SET COLUMN FORMULA"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/object-get-data-source",children:"OBJECT Get data source"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1264"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},499130:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict1208291.fr-9f94c224ea4b040147c84f30e4ecea2d.png"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let r={},o=t.createContext(r);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);