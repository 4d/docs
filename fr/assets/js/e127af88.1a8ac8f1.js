"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48417"],{384912:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/set-automatic-relations","title":"SET AUTOMATIC RELATIONS","description":"SET AUTOMATIC RELATIONS ( aller {; retour} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-automatic-relations.md","sourceDirName":"commands-legacy","slug":"/commands/set-automatic-relations","permalink":"/docs/fr/commands/set-automatic-relations","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-automatic-relations.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-automatic-relations","title":"SET AUTOMATIC RELATIONS","slug":"/commands/set-automatic-relations","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAVE RELATED ONE","permalink":"/docs/fr/commands/save-related-one"},"next":{"title":"SET FIELD RELATION","permalink":"/docs/fr/commands/set-field-relation"}}'),r=n("785893"),i=n("250065");let l={id:"set-automatic-relations",title:"SET AUTOMATIC RELATIONS",slug:"/commands/set-automatic-relations",displayed_sidebar:"docs"},a=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SET AUTOMATIC RELATIONS"})," ( ",(0,r.jsx)(s.em,{children:"aller"})," {; ",(0,r.jsx)(s.em,{children:"retour"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aller"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Statut de tous les liens de N vers 1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"retour"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Statut de tous les liens de 1 vers N"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"SET AUTOMATIC RELATIONS"})," transforme tous les liens manuels en liens automatiques pour toute la base dans le process courant. Cette modification est temporaire et peut \xe0 tout moment \xeatre remise en cause par un nouvel appel \xe0 ",(0,r.jsx)(s.strong,{children:"SET AUTOMATIC RELATIONS"}),"."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Si ",(0,r.jsx)(s.em,{children:"aller"})," est Vrai, tous les liens N vers 1 deviennent automatiques. Si ",(0,r.jsx)(s.em,{children:"aller"})," est Faux, tous les liens N vers 1 deviennent manuels."]}),"\n",(0,r.jsxs)(s.li,{children:["Si ",(0,r.jsx)(s.em,{children:"retour"})," est Vrai, tous les liens 1 vers N deviennent automatiques. Si ",(0,r.jsx)(s.em,{children:"retour"})," est Faux, tous les liens 1 vers N deviennent manuels."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Les liens d\xe9finis comme automatiques en mode D\xe9veloppement ne sont pas affect\xe9s par cette commande. Elle permet de rendre automatiques les liens d\xe9clar\xe9s manuels en mode D\xe9veloppement, avant d'ex\xe9cuter des op\xe9rations n\xe9cessitant qu'ils soient automatiques (par exemple, des recherches et tri relationnels). A l'issue de l'op\xe9ration, le lien peut redevenir manuel via un nouvel appel \xe0 ",(0,r.jsx)(s.strong,{children:"SET AUTOMATIC RELATIONS"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Notes :"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Lorsque vous passez Vrai \xe0 la commande ",(0,r.jsx)(s.strong,{children:"SET AUTOMATIC RELATIONS"}),', le mode automatique est "verrouill\xe9" pour tous les liens manuels au cours de la session. Dans ce cas, les \xe9ventuels appels \xe0 la commande ',(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-field-relation",children:"SET FIELD RELATION"})," dans la m\xeame session sont ignor\xe9s, qu'ils soient plac\xe9s avant ou apr\xe8s ",(0,r.jsx)(s.strong,{children:"SET AUTOMATIC RELATIONS"}),'. Pour "d\xe9verrouiller" le mode automatique et prendre en compte les appels \xe0 ',(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-field-relation",children:"SET FIELD RELATION"}),", passez Faux \xe0 ",(0,r.jsx)(s.strong,{children:"SET AUTOMATIC RELATIONS"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Les automatismes sont d\xe9sactiv\xe9s lorsque les tables li\xe9es sont visualis\xe9es dans un formulaire liste affich\xe9 \xe0 l'aide de ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/display-selection",children:"DISPLAY SELECTION"}),", ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/modify-selection",children:"MODIFY SELECTION"})," ou d'un sous-formulaire. Voir ",(0,r.jsx)(s.em,{children:"Liens manuels et automatiques"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(s.p,{children:"L'exemple suivant rend tous les liens N vers 1 automatiques et r\xe9tablit en manuel tous les liens 1 vers N qui \xe9taient pr\xe9c\xe9demment modifi\xe9s :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0SET AUTOMATIC RELATIONS(True;False)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/commands/get-automatic-relations",children:"GET AUTOMATIC RELATIONS"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/get-relation-properties",children:"GET RELATION PROPERTIES"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.em,{children:"Pr\xe9sentation des liens"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/selection-range-to-array",children:"SELECTION RANGE TO ARRAY"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/selection-to-array",children:"SELECTION TO ARRAY"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-field-relation",children:"SET FIELD RELATION"})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return l}});var t=n(667294);let r={},i=t.createContext(r);function l(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);