"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99762"],{47473:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/object-get-scrollbar","title":"OBJECT GET SCROLLBAR","description":"OBJECT GET SCROLLBAR ( { ;} objet ; horizontale ; verticale* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-scrollbar.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-scrollbar","permalink":"/docs/fr/commands/object-get-scrollbar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-scrollbar.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-scrollbar","title":"OBJECT GET SCROLLBAR","slug":"/commands/object-get-scrollbar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET SCROLL POSITION","permalink":"/docs/fr/commands/object-get-scroll-position"},"next":{"title":"OBJECT GET SHORTCUT","permalink":"/docs/fr/commands/object-get-shortcut"}}'),t=r("785893"),i=r("250065");let l={id:"object-get-scrollbar",title:"OBJECT GET SCROLLBAR",slug:"/commands/object-get-scrollbar",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT GET SCROLLBAR"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objet"})," ; ",(0,t.jsx)(n.em,{children:"horizontale"})," ; ",(0,t.jsx)(n.em,{children:"verticale"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) ",(0,t.jsx)(n.br,{}),"Si omis, objet est une variable ou un champ"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom d'objet (si * sp\xe9cifi\xe9) ou Variable ou champ (si * omis)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"horizontale"}),(0,t.jsx)(n.td,{children:"Boolean, Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Visibilit\xe9 de la barre horizontale"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"verticale"}),(0,t.jsx)(n.td,{children:"Boolean, Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Visibilit\xe9 de la barre verticale"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"OBJECT GET SCROLLBAR"})," permet de conna\xeetre le statut affich\xe9/masqu\xe9 des barres de d\xe9filement horizontale et verticale de l'objet ou du groupe d'objets d\xe9sign\xe9 par ",(0,t.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est un nom d'objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,t.jsx)(n.em,{children:"horizontale"})," et ",(0,t.jsx)(n.em,{children:"verticale"})," des variables de type bool\xe9en ou entier long :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["si vous passez des variables bool\xe9ennes, la valeur retourn\xe9e refl\xe8tera le statut ",(0,t.jsx)(n.strong,{children:"courant"})," de la barre de d\xe9filement :\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"si la barre de d\xe9filement a \xe9t\xe9 d\xe9finie comme masqu\xe9e, le param\xe8tre re\xe7oit Faux,"}),"\n",(0,t.jsx)(n.li,{children:"si la barre de d\xe9filement a \xe9t\xe9 d\xe9finie comme affich\xe9e, le param\xe8tre re\xe7oit Vrai,"}),"\n",(0,t.jsx)(n.li,{children:"si la barre de d\xe9filement a \xe9t\xe9 d\xe9finie en mode automatique, le param\xe8tre re\xe7oit Vrai ou Faux en fonction de l'affichage courant de l'objet."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["si vous passez des variables entier long, la valeur retourn\xe9e refl\xe8tera la visibilit\xe9 d\xe9finie pour la barre de d\xe9filement :\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"si la barre de d\xe9filement a \xe9t\xe9 d\xe9finie comme masqu\xe9e, le param\xe8tre re\xe7oit 0,"}),"\n",(0,t.jsx)(n.li,{children:"si la barre de d\xe9filement a \xe9t\xe9 d\xe9finie comme affich\xe9e, le param\xe8tre re\xe7oit 1,"}),"\n",(0,t.jsx)(n.li,{children:"si la barre de d\xe9filement a \xe9t\xe9 d\xe9finie en mode automatique, le param\xe8tre re\xe7oit 2."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Cette commande est utilisable avec les objets de formulaire suivants :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Champs et variables objet texte ou image,"}),"\n",(0,t.jsx)(n.li,{children:"List box,"}),"\n",(0,t.jsx)(n.li,{children:"Listes hi\xe9rarchiques,"}),"\n",(0,t.jsx)(n.li,{children:"Sous-formulaires."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/object-set-scrollbar",children:"OBJECT SET SCROLLBAR"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/object-set-scrollbar",children:"OBJECT SET SCROLLBAR"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1076"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return l}});var s=r(667294);let t={},i=s.createContext(t);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);