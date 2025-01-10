"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67335"],{779609:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"Events/onDisplayDetail","title":"On Display Detail","description":"| Code | Peut \xeatre appel\xe9 par                                     | D\xe9finition                                                                                                                                       |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Events/onDisplayDetail.md","sourceDirName":"Events","slug":"/Events/onDisplayDetail","permalink":"/docs/fr/20/Events/onDisplayDetail","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDisplayDetail.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"onDisplayDetail","title":"On Display Detail"},"sidebar":"docs","previous":{"title":"On Delete Action","permalink":"/docs/fr/20/Events/onDeleteAction"},"next":{"title":"On Double Clicked","permalink":"/docs/fr/20/Events/onDoubleClicked"}}'),s=t("785893"),l=t("250065");let r={id:"onDisplayDetail",title:"On Display Detail"},o=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Formulaire de sortie",id:"formulaire-de-sortie",level:3},{value:"Liste box s\xe9lection",id:"liste-box-s\xe9lection",level:3},{value:"Num\xe9ro de ligne affich\xe9",id:"num\xe9ro-de-ligne-affich\xe9",level:3}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,s.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"8"}),(0,s.jsxs)(n.td,{children:["Formulaire - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/listboxOverview",children:"List Box"})]}),(0,s.jsx)(n.td,{children:"Un enregistrement est sur le point d'\xeatre affich\xe9 dans un formulaire liste ou bien une ligne est sur le point d'\xeatre affich\xe9e dans une list box."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["L'\xe9v\xe9nement ",(0,s.jsx)(n.code,{children:"On Display Detail"})," peut \xeatre utilis\xe9 dans les contextes suivants :"]}),"\n",(0,s.jsx)(n.h3,{id:"formulaire-de-sortie",children:"Formulaire de sortie"}),"\n",(0,s.jsxs)(n.p,{children:["Un enregistrement est sur le point d'\xeatre affich\xe9 sous forme de liste affich\xe9e via ",(0,s.jsx)(n.code,{children:"DISPLAY SELECTION"})," et ",(0,s.jsx)(n.code,{children:"MODIFY SELECTION"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Cet \xe9v\xe9nement ne peut pas \xeatre s\xe9lectionn\xe9 pour les formulaires projet, il est uniquement disponible avec les ",(0,s.jsx)(n.strong,{children:"formulaires table"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Dans ce contexte, la s\xe9quence d'appels de m\xe9thodes et d'\xe9v\xe9nements de formulaire suivante est d\xe9clench\xe9e :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Pour chaque enregistrement :\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Pour chaque objet de la zone d\xe9taill\xe9e :\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["M\xe9thode objet avec l'\xe9v\xe9nement ",(0,s.jsx)(n.code,{children:"On Display Detail"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["M\xe9thode formulaire avec l'\xe9v\xe9nement ",(0,s.jsx)(n.code,{children:"On Display Detail"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["La zone d'en-t\xeate est g\xe9r\xe9e \xe0 l'aide de l'\xe9v\xe9nement ",(0,s.jsx)(n.a,{href:"/docs/fr/20/Events/onHeader",children:(0,s.jsx)(n.code,{children:"On Header"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["L'appel d'une commande 4D qui affiche une bo\xeete de dialogue \xe0 partir de l'\xe9v\xe9nement ",(0,s.jsx)(n.code,{children:"On Display Detail"})," n'est pas autoris\xe9 et g\xe9n\xe9rera une erreur de syntaxe. Plus particuli\xe8rement, les commandes concern\xe9es sont : ",(0,s.jsx)(n.code,{children:"ALERT"}),", ",(0,s.jsx)(n.code,{children:"DIALOG"}),", ",(0,s.jsx)(n.code,{children:"CONFIRM"}),", ",(0,s.jsx)(n.code,{children:"Request"}),", ",(0,s.jsx)(n.code,{children:"ADD RECORD"}),", ",(0,s.jsx)(n.code,{children:"MODIFY RECORD"}),", ",(0,s.jsx)(n.code,{children:"DISPLAY SELECTION"}),", et ",(0,s.jsx)(n.code,{children:"MODIFY SELECTION"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"liste-box-s\xe9lection",children:"Liste box s\xe9lection"}),"\n",(0,s.jsxs)(n.p,{children:["Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 lorsqu'une ligne de list box ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/listboxOverview#selection-list-boxes",children:(0,s.jsx)(n.strong,{children:"de type s\xe9lection"})})," est affich\xe9e."]}),"\n",(0,s.jsx)(n.h3,{id:"num\xe9ro-de-ligne-affich\xe9",children:"Num\xe9ro de ligne affich\xe9"}),"\n",(0,s.jsxs)(n.p,{children:["La commande 4D ",(0,s.jsx)(n.code,{children:"Displayed line number"})," fonctionne avec l'\xe9v\xe9nement formulaire ",(0,s.jsx)(n.code,{children:"On Display Detail"}),". Elle retourne le num\xe9ro de la ligne en cours de traitement tandis qu'une liste d'enregistrements ou de lignes de list box s'affiche \xe0 l'\xe9cran."]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var i=t(667294);let s={},l=i.createContext(s);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);