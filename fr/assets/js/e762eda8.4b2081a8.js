"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34113"],{193567:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/object-set-coordinates","title":"OBJECT SET COORDINATES","description":"OBJECT SET COORDINATES ( { ;} objet ; gauche ; haut {; droite ; bas*} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/object-set-coordinates.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-coordinates","permalink":"/docs/fr/commands/object-set-coordinates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-coordinates.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-set-coordinates","title":"OBJECT SET COORDINATES","slug":"/commands/object-set-coordinates","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET CONTEXT MENU","permalink":"/docs/fr/commands/object-set-context-menu"},"next":{"title":"OBJECT SET CORNER RADIUS","permalink":"/docs/fr/commands/object-set-corner-radius"}}'),d=s("785893"),r=s("250065");let i={id:"object-set-coordinates",title:"OBJECT SET COORDINATES",slug:"/commands/object-set-coordinates",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"OBJECT SET COORDINATES"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"objet"})," ; ",(0,d.jsx)(n.em,{children:"gauche"})," ; ",(0,d.jsx)(n.em,{children:"haut"})," {; ",(0,d.jsx)(n.em,{children:"droite"})," ; ",(0,d.jsx)(n.em,{children:"bas"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Op\xe9rateur"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,d.jsx)(n.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objet"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,d.jsx)(n.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"gauche"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Coordonn\xe9e gauche de l\u2019objet en pixels"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"haut"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Coordonn\xe9e sup\xe9rieure de l\u2019objet en pixels"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"droite"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Coordonn\xe9e droite de l\u2019objet en pixels"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"bas"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Coordonn\xe9e inf\xe9rieure de l\u2019objet en pixels"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"OBJECT SET COORDINATES"})," permet de modifier l\u2019emplacement et, optionnellement, la taille de l\u2019objet ou des objets d\xe9sign\xe9(s) par les param\xe8tres ",(0,d.jsx)(n.em,{children:"objet"})," et ",(0,d.jsx)(n.em,{children:"*"})," pour le process courant."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note :"})," Cette commande \xe9quivaut \xe0 utiliser la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/object-move",children:"OBJECT MOVE"})," en passant le 2e param\xe8tre ",(0,d.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,d.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,d.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,d.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,d.jsxs)(n.p,{children:["Passez dans les param\xe8tres ",(0,d.jsx)(n.em,{children:"gauche"})," et ",(0,d.jsx)(n.em,{children:"haut"})," les nouvelles coordonn\xe9es absolues de l\u2019objet dans le formulaire. Ces coordonn\xe9es doivent \xeatre exprim\xe9es en pixels par rapport \xe0 l\u2019angle sup\xe9rieur gauche du formulaire."]}),"\n",(0,d.jsxs)(n.p,{children:["Vous pouvez \xe9galement passer des valeurs de coordonn\xe9es absolues dans les param\xe8tres ",(0,d.jsx)(n.em,{children:"droite"})," et ",(0,d.jsx)(n.em,{children:"bas"}),", indiquant l\u2019angle inf\xe9rieur droit de l\u2019objet. Si cet angle ne correspond pas \xe0 celui de l\u2019objet apr\xe8s application des param\xe8tres ",(0,d.jsx)(n.em,{children:"gauche"})," et ",(0,d.jsx)(n.em,{children:"haut"}),", l\u2019objet est redimensionn\xe9 en cons\xe9quence."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note :"})," Si vous souhaitez d\xe9placer un objet relativement \xe0 sa position initiale, il est pr\xe9f\xe9rable d\u2019utiliser la commande existante ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/object-move",children:"OBJECT MOVE"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"Cette commande fonctionne uniquement dans les contextes suivants :"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Formulaires entr\xe9e en mode saisie,"}),"\n",(0,d.jsxs)(n.li,{children:["Formulaires affich\xe9s via la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/dialog",children:"DIALOG"}),","]}),"\n",(0,d.jsxs)(n.li,{children:["En-t\xeates et pieds de page des formulaires sortie affich\xe9s par la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/modify-selection",children:"MODIFY SELECTION"})," ou ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/display-selection",children:"DISPLAY SELECTION"}),","]}),"\n",(0,d.jsx)(n.li,{children:"Formulaires en cours d'impression."}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(n.p,{children:'L\u2019instruction suivante place l\u2019objet "bouton_1" aux coordonn\xe9es (10,20) (30,40) :'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET COORDINATES(*;"bouton_1";10;20;30;40)\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(77600).Z+"",width:"219",height:"186"})}),"\n",(0,d.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/fr/commands/convert-coordinates",children:"CONVERT COORDINATES"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/object-get-coordinates",children:"OBJECT GET COORDINATES"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/object-move",children:"OBJECT MOVE"})]}),"\n",(0,d.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"1248"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},77600:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);