"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90066"],{548128:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>m,assets:()=>o,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/object-move","title":"OBJECT MOVE","description":"OBJECT MOVE ( { ;} objet ; d\xe9pH ; d\xe9pV {; redimH {; redimV {; }}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-move.md","sourceDirName":"commands-legacy","slug":"/commands/object-move","permalink":"/docs/fr/commands/object-move","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-move.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-move","title":"OBJECT MOVE","slug":"/commands/object-move","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Is styled text","permalink":"/docs/fr/commands/object-is-styled-text"},"next":{"title":"OBJECT SET ACTION","permalink":"/docs/fr/commands/object-set-action"}}'),d=s("785893"),t=s("250065");let i={id:"object-move",title:"OBJECT MOVE",slug:"/commands/object-move",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"OBJECT MOVE"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"objet"})," ; ",(0,d.jsx)(n.em,{children:"d\xe9pH"})," ; ",(0,d.jsx)(n.em,{children:"d\xe9pV"})," {; ",(0,d.jsx)(n.em,{children:"redimH"})," {; ",(0,d.jsx)(n.em,{children:"redimV"})," {; *}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Op\xe9rateur"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Si sp\xe9cifi\xe9 = objet est un nom d\u2019objet (cha\xeene) Si omis = objet est une variable"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objet"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nom d\u2019objet (si * est sp\xe9cifi\xe9) ou Champ ou variable (si * est omis)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"d\xe9pH"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Valeur de d\xe9placement horizontal de l\u2019objet (>0 = vers la droite, <0 = vers la gauche)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"d\xe9pV"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Valeur de d\xe9placement vertical de l\u2019objet (>0 = vers le bas, <0 = vers le haut)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"redimH"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Valeur de redimensionnement horizontal de l\u2019objet"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"redimV"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Valeur de redimensionnement vertical de l\u2019objet"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Op\xe9rateur"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Si sp\xe9cifi\xe9 = coordonn\xe9es absolues Si omis = coordonn\xe9es relatives"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"OBJECT MOVE"})," permet de d\xe9placer le ou les objet(s) du formulaire courant, d\xe9fini(s) par les param\xe8tres ",(0,d.jsx)(n.em,{children:"*"})," et ",(0,d.jsx)(n.em,{children:"objet"}),", de ",(0,d.jsx)(n.em,{children:"d\xe9pH"})," pixels horizontalement et de ",(0,d.jsx)(n.em,{children:"d\xe9pV"})," pixels verticalement. Il est \xe9galement possible (optionnellement) de redimensionner le ou les objet(s) de ",(0,d.jsx)(n.em,{children:"redimH"})," pixels horizontalement et de ",(0,d.jsx)(n.em,{children:"redimV"})," pixels verticalement."]}),"\n",(0,d.jsxs)(n.p,{children:["Le sens du d\xe9placement ou du redimensionnement est d\xe9fini par le signe des valeurs pass\xe9es dans les param\xe8tres ",(0,d.jsx)(n.em,{children:"d\xe9pH"})," et ",(0,d.jsx)(n.em,{children:"d\xe9pV"})," :"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Si la valeur est positive, le d\xe9placement ou le redimensionnement s\u2019effectue respectivement vers la droite ou vers le bas."}),"\n",(0,d.jsx)(n.li,{children:"Si la valeur est n\xe9gative, le d\xe9placement ou le redimensionnement s\u2019effectue respectivement vers la gauche ou vers le haut."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Si vous passez le premier param\xe8tre optionnel ",(0,d.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,d.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene de caract\xe8res). Si vous ne passez pas le param\xe8tre ",(0,d.jsx)(n.em,{children:"*"}),", vous indiquez que ",(0,d.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable de type objet uniquement).",(0,d.jsx)(n.br,{}),"\nSi vous passez un nom d\u2019objet dans le param\xe8tre ",(0,d.jsx)(n.em,{children:"objet"})," et utilisez le caract\xe8re joker @ afin de s\xe9lectionner plusieurs objets, tous les objets s\xe9lectionn\xe9s seront d\xe9plac\xe9s ou redimensionn\xe9s."]}),"\n",(0,d.jsxs)(n.p,{children:["Par d\xe9faut, les valeurs de ",(0,d.jsx)(n.em,{children:"d\xe9pH"}),", ",(0,d.jsx)(n.em,{children:"d\xe9pV"}),", ",(0,d.jsx)(n.em,{children:"redimH"})," et ",(0,d.jsx)(n.em,{children:"redimV"})," modifient les coordonn\xe9es de l\u2019objet relativement \xe0 sa position pr\xe9c\xe9dente. Si vous souhaitez que ces param\xe8tres d\xe9finissent des coordonn\xe9es absolues, passez le dernier param\xe8tre optionnel ",(0,d.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"Cette commande fonctionne uniquement dans les contextes suivants :"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Formulaires entr\xe9e en mode saisie,"}),"\n",(0,d.jsxs)(n.li,{children:["Formulaires affich\xe9s via la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/dialog",children:"DIALOG"}),","]}),"\n",(0,d.jsxs)(n.li,{children:["En-t\xeates et pieds de page des formulaires sortie affich\xe9s par les commandes ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/modify-selection",children:"MODIFY SELECTION"})," ou ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/display-selection",children:"DISPLAY SELECTION"}),","]}),"\n",(0,d.jsx)(n.li,{children:"Formulaires en cours d'impression."}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,d.jsx)(n.p,{children:"L\u2019instruction suivante d\xe9place le bouton \u201CBouton_1\u201D de 10 pixels vers la droite et de 20 pixels vers le haut, et agrandit le bouton de 30 pixels en largeur et de 40 en hauteur :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT MOVE(*;"Bouton_1";10;-20;30;40)\n'})}),"\n",(0,d.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,d.jsx)(n.p,{children:"L\u2019instruction suivante place le bouton \u201CBouton_1\u201D aux coordonn\xe9es (10;20) (30;40) :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT MOVE(*;"Bouton_1";10;20;30;40;*)\n'})}),"\n",(0,d.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/fr/commands/object-duplicate",children:"OBJECT DUPLICATE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/object-get-coordinates",children:"OBJECT GET COORDINATES"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/object-set-coordinates",children:"OBJECT SET COORDINATES"})]}),"\n",(0,d.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"664"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var r=s(667294);let d={},t=r.createContext(d);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);