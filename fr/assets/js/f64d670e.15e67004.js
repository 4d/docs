"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99701"],{652110:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>d,default:()=>u,assets:()=>l,toc:()=>o,frontMatter:()=>a});var n=JSON.parse('{"id":"commands-legacy/method-set-attributes","title":"METHOD SET ATTRIBUTES","description":"METHOD SET ATTRIBUTES ( chemin ; attributs {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-set-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/method-set-attributes","permalink":"/docs/fr/commands/method-set-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-set-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-set-attributes","title":"METHOD SET ATTRIBUTES","slug":"/commands/method-set-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD SET ATTRIBUTE","permalink":"/docs/fr/commands/method-set-attribute"},"next":{"title":"METHOD SET CODE","permalink":"/docs/fr/commands/method-set-code"}}'),r=s("785893"),i=s("250065");let a={id:"method-set-attributes",title:"METHOD SET ATTRIBUTES",slug:"/commands/method-set-attributes",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"METHOD SET ATTRIBUTES"})," ( ",(0,r.jsx)(t.em,{children:"chemin"})," ; ",(0,r.jsx)(t.em,{children:"attributs"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param\xe8tre"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"chemin"}),(0,r.jsx)(t.td,{children:"Text, Text array"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Chemin(s) de m\xe9thode(s)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attributs"}),(0,r.jsx)(t.td,{children:"Object, Object array"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Attribut(s) de m\xe9thode(s) \xe0 d\xe9finir"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Op\xe9rateur"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Si pass\xe9 = la commande s\u2019applique \xe0 la base h\xf4te lorsqu\u2019elle est ex\xe9cut\xe9e depuis un composant (param\xe8tre ignor\xe9 hors de ce contexte)"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["La commande ",(0,r.jsx)(t.strong,{children:"METHOD SET ATTRIBUTES"})," vous permet de d\xe9finir les valeurs des ",(0,r.jsx)(t.em,{children:"attributs"})," pour la ou les m\xe9thode(s) sp\xe9cifi\xe9e(s) dans le param\xe8tre ",(0,r.jsx)(t.em,{children:"chemin"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Dans le param\xe8tre ",(0,r.jsx)(t.em,{children:"chemin"}),", vous pouvez passer soit un texte contenant un chemin de m\xe9thode, soit un tableau texte contenant un tableau de chemins. Vous devrez passer le m\xeame type de param\xe8tre (variable simple ou tableau) dans le param\xe8tre ",(0,r.jsx)(t.em,{children:"attributs"})," afin de d\xe9finir les valeurs ad\xe9quates. Cette commande ne fonctionne qu\u2019avec les m\xe9thodes projet. Si vous passez un ",(0,r.jsx)(t.em,{children:"chemin"})," invalide, une erreur est g\xe9n\xe9r\xe9e."]}),"\n",(0,r.jsxs)(t.p,{children:["Dans le param\xe8tre ",(0,r.jsx)(t.em,{children:"attributs"}),", vous pouvez passer un objet ou un tableau d'objets, selon le type de param\xe8tre pass\xe9 dans ",(0,r.jsx)(t.em,{children:"chemin"}),", contenant tous les attributs \xe0 fixer pour la ou les m\xe9thode(s)."]}),"\n",(0,r.jsxs)(t.p,{children:["Les attributs de m\xe9thodes doivent \xeatre d\xe9finis \xe0 l'aide des commandes ",(0,r.jsx)(t.a,{href:"/docs/fr/commands/ob-set",children:"OB SET"})," ou ",(0,r.jsx)(t.a,{href:"/docs/fr/commands/ob-set-array",children:"OB SET ARRAY"}),", avec les valeurs Vrai or Faux pour les attributs bool\xe9ens, ou des valeurs sp\xe9cifiques pour les attributs \xe9tendus. Seuls les attributs pr\xe9sents dans le param\xe8tre ",(0,r.jsx)(t.em,{children:"attributs"})," seront mis \xe0 jour dans les attributs des m\xe9thodes."]}),"\n",(0,r.jsxs)(t.p,{children:["Si la commande est ex\xe9cut\xe9e depuis un composant, elle s\u2019applique par d\xe9faut aux m\xe9thodes du composant. Si vous passez le param\xe8tre ",(0,r.jsx)(t.em,{children:"*"}),", elle acc\xe8de aux m\xe9thodes de la base h\xf4te."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note :"})," La commande existante ",(0,r.jsx)(t.a,{href:"/docs/fr/commands/method-set-attribute",children:"METHOD SET ATTRIBUTE"})," reste prise en charge, toutefois comme elle ne peut retourner que des valeurs bool\xe9ennes, elle ne peut pas \xeatre utilis\xe9e pour les attributs \xe9tendus tels que les propri\xe9t\xe9s 4D Mobile."]}),"\n",(0,r.jsx)(t.h5,{id:""}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "invisible" : false, // true si visible\n\xa0\xa0\xa0 "preemptive" : "capable" // ou bien "incapable" ou "indifferent"\n\xa0\xa0\xa0 "publishedWeb" : false,\xa0 // true si disponible via les balised et URLs 4D\n\xa0\xa0\xa0 "publishedSoap": false,\xa0 // true si offerte comme Web Service\n\xa0\xa0\xa0 "publishedWsdl": false,\xa0 // true si publi\xe9e dans WSDL\n\xa0\xa0\xa0 "shared" : false,\xa0 // true si partag\xe9e entre composants et base h\xf4te\n\xa0\xa0\xa0 "publishedSql" : false,\xa0 // true si disponible via SQL\n\xa0\xa0\xa0 "executedOnServer" : false, // true si ex\xe9cut\xe9e sur le serveur\n\xa0\xa0\xa0 "published4DMobile" : {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "scope": "table",\xa0 // "none" ou "table" ou "currentRecord" ou "currentSelection" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "table": "nomTable"\xa0 // pr\xe9sent si scope est diff\xe9rent de "none" \n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,r.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(t.p,{children:"Vous souhaiter modifier un seul attribut :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $attributes : Object\n\xa0OB SET($attributes;"executedOnServer";True)\n\xa0METHOD SET ATTRIBUTES("aMethod";$attributes)\xa0//seul l\'attribut "executedOnServer" est modifi\xe9\n'})}),"\n",(0,r.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/fr/commands/method-get-attributes",children:"METHOD GET ATTRIBUTES"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/commands/method-set-attribute",children:"METHOD SET ATTRIBUTE"})]})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return a}});var n=s(667294);let r={},i=n.createContext(r);function a(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);