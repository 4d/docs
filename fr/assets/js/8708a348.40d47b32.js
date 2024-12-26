"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90650"],{209449:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>o,toc:()=>a,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/object-set-multiline","title":"OBJECT SET MULTILINE","description":"OBJECT SET MULTILINE ( { ;} objet ; multiLigne* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-multiline.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-multiline","permalink":"/docs/fr/commands/object-set-multiline","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-multiline.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-multiline","title":"OBJECT SET MULTILINE","slug":"/commands/object-set-multiline","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET MINIMUM VALUE","permalink":"/docs/fr/commands/object-set-minimum-value"},"next":{"title":"OBJECT SET PLACEHOLDER","permalink":"/docs/fr/commands/object-set-placeholder"}}'),i=s("785893"),r=s("250065");let l={id:"object-set-multiline",title:"OBJECT SET MULTILINE",slug:"/commands/object-set-multiline",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT SET MULTILINE"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objet"})," ; ",(0,i.jsx)(n.em,{children:"multiLigne"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,i.jsx)(n.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,i.jsx)(n.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"multiLigne"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Statut de la propri\xe9t\xe9 multiligne"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"OBJECT SET MULTILINE"}),' vous permet de modifier la propri\xe9t\xe9 "Multilignes" de l\u2019objet ou des objets d\xe9sign\xe9(s) par les param\xe8tres ',(0,i.jsx)(n.em,{children:"objet"})," et ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:['La propri\xe9t\xe9 "Multilignes" permet de contr\xf4ler deux param\xe8tres relatifs \xe0 l\u2019affichage et \xe0 l\u2019impression des zones de texte : l\u2019affichage des mots situ\xe9s en fin de ligne dans les zones mono-lignes et l\u2019insertion automatique de retours \xe0 la ligne. Pour plus d\u2019informations, reportez-vous au paragraphe ',(0,i.jsx)(n.em,{children:"Multilignes"})," du manuel ",(0,i.jsx)(n.em,{children:"Mode D\xe9veloppement"}),". Si vous appliquez cette commande \xe0 un objet ne prenant pas en charge cette propri\xe9t\xe9, la commande ne fait rien."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,i.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"multiLigne"}),' la nouvelle valeur de l\u2019option que vous souhaitez d\xe9finir. Vous pouvez utiliser les constantes suivantes, plac\xe9es dans le th\xe8me "',(0,i.jsx)(n.em,{children:"Objets de formulaire (Propri\xe9t\xe9s)"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Multiline Auto"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsxs)(n.td,{children:["Dans les zones mono-lignes, les mots situ\xe9s en fin de ligne sont tronqu\xe9s et il n\u2019y a pas de retours \xe0 la ligne. ",(0,i.jsx)(n.br,{}),"Dans les zones multi-lignes, 4D effectue des retours \xe0 la ligne automatiques"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Multiline No"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Il n\u2019y a aucun retour \xe0 la ligne : le texte est toujours affich\xe9 sur une seule ligne. Si le champ ou la variable alpha ou texte contient des retour chariots, le texte situ\xe9 apr\xe8s le premier retour chariot est effac\xe9 d\xe8s que la zone est modifi\xe9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Multiline Yes"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsxs)(n.td,{children:["Dans les zones mono-lignes, le texte est affich\xe9 jusqu\u2019au premier retour chariot ou au dernier mot affichable en entier. 4D ins\xe8re des retours \xe0 la ligne, il est possible de faire d\xe9filer le contenu de la zone en appuyant sur la touche fl\xe8che basse.",(0,i.jsx)(n.br,{}),"Dans les zones multi-lignes, 4D effectue des retours \xe0 la ligne automatiques"]})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"Vous souhaitez interdire le multiligne dans une zone de saisie :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET MULTILINE(*;"vSaisie";Multiline No)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/commands/object-get-multiline",children:"OBJECT Get multiline"})}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1253"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);