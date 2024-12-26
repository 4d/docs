"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23673"],{319441:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/method-get-attribute","title":"METHOD Get attribute","description":"METHOD Get attribute ( chemin ; typeAttribut {; *} ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-get-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-attribute","permalink":"/docs/fr/commands/method-get-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-attribute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-get-attribute","title":"METHOD Get attribute","slug":"/commands/method-get-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM GET NAMES","permalink":"/docs/fr/commands/form-get-names"},"next":{"title":"METHOD GET ATTRIBUTES","permalink":"/docs/fr/commands/method-get-attributes"}}'),s=n("785893"),i=n("250065");let d={id:"method-get-attribute",title:"METHOD Get attribute",slug:"/commands/method-get-attribute",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let t={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"METHOD Get attribute"})," ( ",(0,s.jsx)(t.em,{children:"chemin"})," ; ",(0,s.jsx)(t.em,{children:"typeAttribut"})," {; *} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tre"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"chemin"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Chemin de m\xe9thode projet"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"typeAttribut"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Type d\u2019attribut \xe0 obtenir"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Op\xe9rateur"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Si pass\xe9 = la commande s\u2019applique \xe0 la base h\xf4te lorsqu\u2019elle est ex\xe9cut\xe9e depuis un composant (param\xe8tre ignor\xe9 hors de ce contexte)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"R\xe9sultat"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Vrai = attribut s\xe9lectionn\xe9, sinon Faux"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["La commande ",(0,s.jsx)(t.strong,{children:"METHOD Get attribute"})," retourne la valeur de l\u2019attribut ",(0,s.jsx)(t.em,{children:"typeAttribut"})," pour la m\xe9thode projet d\xe9sign\xe9e par le param\xe8tre ",(0,s.jsx)(t.em,{children:"chemin"}),". Cette commande ne fonctionne qu\u2019avec les m\xe9thodes projet. Si vous passez un ",(0,s.jsx)(t.em,{children:"chemin"})," invalide, une erreur est g\xe9n\xe9r\xe9e."]}),"\n",(0,s.jsxs)(t.p,{children:["Passez dans le param\xe8tre ",(0,s.jsx)(t.em,{children:"typeAttribut"})," une valeur indiquant le type d\u2019attribut \xe0 lire. Vous pouvez utiliser les constantes suivantes, plac\xe9es dans le th\xe8me ",(0,s.jsx)(t.em,{children:"Acc\xe8s objets d\xe9veloppement"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constante"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Valeur"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute executed on server"}),(0,s.jsx)(t.td,{children:"Entier long"}),(0,s.jsx)(t.td,{children:"8"}),(0,s.jsx)(t.td,{children:'Correspond \xe0 l\u2019option "Ex\xe9cuter sur serveur"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute invisible"}),(0,s.jsx)(t.td,{children:"Entier long"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:'Correspond \xe0 l\u2019option "Invisible"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute published SOAP"}),(0,s.jsx)(t.td,{children:"Entier long"}),(0,s.jsx)(t.td,{children:"3"}),(0,s.jsx)(t.td,{children:'Correspond \xe0 l\u2019option "Offerte comme Web Service"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute published SQL"}),(0,s.jsx)(t.td,{children:"Entier long"}),(0,s.jsx)(t.td,{children:"7"}),(0,s.jsx)(t.td,{children:'Correspond \xe0 l\u2019option "Disponible via SQL"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute published Web"}),(0,s.jsx)(t.td,{children:"Entier long"}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:'Correspond \xe0 l\u2019option "Disponible via les balises HTML et les URLs 4D (4DACTION...)"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute published WSDL"}),(0,s.jsx)(t.td,{children:"Entier long"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:'Correspond \xe0 l\u2019option "Publi\xe9e dans WSDL". N\'est prise en compte que si l\u2019option "Offerte comme Web Service" est activ\xe9e.'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Attribute shared"}),(0,s.jsx)(t.td,{children:"Entier long"}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:'Correspond \xe0 l\u2019option "Partag\xe9e entre composants et base h\xf4te"'})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Si la commande est ex\xe9cut\xe9e depuis un composant, elle s\u2019applique par d\xe9faut aux m\xe9thodes du composant. Si vous passez le param\xe8tre ",(0,s.jsx)(t.em,{children:"*"}),", elle acc\xe8de aux m\xe9thodes de la base h\xf4te."]}),"\n",(0,s.jsxs)(t.p,{children:["La commande retourne ",(0,s.jsx)(t.strong,{children:"Vrai"})," si un attribut est s\xe9lectionn\xe9 et ",(0,s.jsx)(t.strong,{children:"Faux"})," s\u2019il est d\xe9s\xe9lectionn\xe9."]}),"\n",(0,s.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/fr/commands/method-set-attribute",children:"METHOD SET ATTRIBUTE"})}),"\n",(0,s.jsx)(t.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(t.td,{children:"1169"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return d}});var r=n(667294);let s={},i=r.createContext(s);function d(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);