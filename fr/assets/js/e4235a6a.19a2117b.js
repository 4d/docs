"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6095"],{837319:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/goto-object","title":"GOTO OBJECT","description":"GOTO OBJECT ( { ;} objet* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/goto-object.md","sourceDirName":"commands-legacy","slug":"/commands/goto-object","permalink":"/docs/fr/20-R7/commands/goto-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgoto-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"goto-object","title":"GOTO OBJECT","slug":"/commands/goto-object","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET HIGHLIGHT","permalink":"/docs/fr/20-R7/commands/get-highlight"},"next":{"title":"HIGHLIGHT TEXT","permalink":"/docs/fr/20-R7/commands/highlight-text"}}'),r=s("785893"),o=s("250065");let i={id:"goto-object",title:"GOTO OBJECT",slug:"/commands/goto-object",displayed_sidebar:"docs"},l=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GOTO OBJECT"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si sp\xe9cifi\xe9 = objet est un nom d\u2019objet (cha\xeene) Si omis = objet est un champ ou une variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"Field, Variable"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom d\u2019objet (si * sp\xe9cifi\xe9) sinon Variable ou champ saisissable \xe0 s\xe9lectionner"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"GOTO OBJECT"})," permet de s\xe9lectionner l'objet saisissable ",(0,r.jsx)(n.em,{children:"objet"})," (variable ou champ) en tant que zone active du formulaire. C'est l'\xe9quivalent d'un clic de l'utilisateur dans la zone ou de l'utilisation de la touche ",(0,r.jsx)(n.strong,{children:"Tabulation"})," pour s\xe9lectionner le champ ou la variable."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le second param\xe8tre d\xe9signe le nom d'un objet (une cha\xeene). Si vous ne passez pas le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre d\xe9signe un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene de caract\xe8res mais la r\xe9f\xe9rence du champ ou de la variable (champs ou variables texte uniquement). Pour plus d'informations sur les noms d'objets, reportez-vous \xe0 la section ",(0,r.jsx)(n.em,{children:"Objets de formulaires"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Pour supprimer tout focus dans le formulaire courant, appelez la commande en passant un nom d'objet vide dans ",(0,r.jsx)(n.em,{children:"objet"})," (cf. exemple 2)."]}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"GOTO OBJECT"})," peut \xeatre utilis\xe9e dans le contexte d\u2019un sous-formulaire. Lorsqu\u2019elle est appel\xe9e depuis un sous-formulaire, elle recherche en premier lieu objet dans le sous-formulaire puis, si la recherche n\u2019aboutit pas, elle \xe9tend la recherche aux objets du formulaire parent."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsxs)(n.p,{children:["Voici les deux modes d'utilisation de la commande ",(0,r.jsx)(n.strong,{children:"GOTO OBJECT"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0GOTO OBJECT([Personnel]Nom)\xa0//R\xe9f\xe9rence de champ\n\xa0GOTO OBJECT(*;"ZonePr\xe9noms")\xa0//Nom d\'objet\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez que plus aucun objet du formulaire n'ait le focus :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0GOTO OBJECT(*;"")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/reject",children:"REJECT"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/call-subform-container",children:"CALL SUBFORM CONTAINER"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/reject",children:"REJECT"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"206"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let r={},o=t.createContext(r);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);