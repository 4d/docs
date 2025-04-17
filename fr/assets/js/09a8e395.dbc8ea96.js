"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42615"],{388986:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/object-get-border-style","title":"OBJECT Get border style","description":"OBJECT Get border style ( { ;} objet* ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-get-border-style.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-border-style","permalink":"/docs/fr/20-R8/commands/object-get-border-style","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-border-style.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-border-style","title":"OBJECT Get border style","slug":"/commands/object-get-border-style","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET BEST SIZE","permalink":"/docs/fr/20-R8/commands/object-get-best-size"},"next":{"title":"OBJECT Get context menu","permalink":"/docs/fr/20-R8/commands/object-get-context-menu"}}'),r=s("785893"),d=s("250065");let i={id:"object-get-border-style",title:"OBJECT Get border style",slug:"/commands/object-get-border-style",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT Get border style"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,r.jsx)(n.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(n.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Style de la ligne de bordure"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"OBJECT Get border style"})," retourne le style de ligne de bordure de l\u2019objet ou des objets d\xe9sign\xe9(s) par les param\xe8tres ",(0,r.jsx)(n.em,{children:"objet"})," et ",(0,r.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Le style de bordure d\u2019un objet peut avoir \xe9t\xe9 d\xe9fini en mode D\xe9veloppement via la Liste des propri\xe9t\xe9s, ou \xe0 l\u2019aide de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/object-set-border-style",children:"OBJECT SET BORDER STYLE"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,r.jsxs)(n.p,{children:['La commande retourne une valeur correspondant au style de la bordure. Vous pouvez comparer la valeur re\xe7ue aux constantes suivantes, plac\xe9es dans le th\xe8me "',(0,r.jsx)(n.em,{children:"Objets de formulaire (Propri\xe9t\xe9s)"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Border Dotted"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"Les objets apparaissent dans un cadre pointill\xe9 de 1 pt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Border Double"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"Les objets apparaissent encadr\xe9s par une double ligne, c\u2019est-\xe0-dire deux lignes continues de 1 pt s\xe9par\xe9es par un pixel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Border None"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Les objets apparaissent sans encadrement"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Border Plain"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Les objets apparaissent dans un cadre continu de 1 pt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Border Raised"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"Les objets apparaissent avec un effet 3D (relief)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Border Sunken"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"Les objets apparaissent avec un effet 3D en creux (relief invers\xe9)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Border System"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"Le cadre est dessin\xe9 en fonction des sp\xe9cifications graphiques du syst\xe8me"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/object-set-border-style",children:"OBJECT SET BORDER STYLE"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1263"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);