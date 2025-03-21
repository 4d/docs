"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48881"],{629923:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/method-get-names","title":"METHOD GET NAMES","description":"METHOD GET NAMES ( tabNoms {; filtre}{; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/method-get-names.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-names","permalink":"/docs/fr/commands/method-get-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-names.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-get-names","title":"METHOD GET NAMES","slug":"/commands/method-get-names","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET MODIFICATION DATE","permalink":"/docs/fr/commands/method-get-modification-date"},"next":{"title":"METHOD Get path","permalink":"/docs/fr/commands/method-get-path"}}'),d=t("785893"),r=t("250065");let o={id:"method-get-names",title:"METHOD GET NAMES",slug:"/commands/method-get-names",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD GET NAMES"})," ( ",(0,d.jsx)(n.em,{children:"tabNoms"})," {; ",(0,d.jsx)(n.em,{children:"filtre"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tabNoms"}),(0,d.jsx)(n.td,{children:"Text array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Tableau des noms de m\xe9thodes projet"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"filtre"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Filtrage des noms"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Op\xe9rateur"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Si pass\xe9 = la commande s\u2019applique \xe0 la base h\xf4te lorsqu\u2019elle est ex\xe9cut\xe9e depuis un composant (param\xe8tre ignor\xe9 hors de ce contexte)"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"METHOD GET NAMES"})," remplit le tableau ",(0,d.jsx)(n.em,{children:"tabNoms"})," avec les noms des m\xe9thodes projet cr\xe9\xe9es dans l\u2019application."]}),"\n",(0,d.jsxs)(n.p,{children:["Par d\xe9faut, toutes les m\xe9thodes sont list\xe9es. Vous pouvez restreindre cette liste en passant une cha\xeene de comparaison dans le param\xe8tre ",(0,d.jsx)(n.em,{children:"filtre"}),' : dans ce cas, seules les m\xe9thodes dont le nom correspond au filtre seront retourn\xe9es. Vous devez utiliser le caract\xe8re @ afin de d\xe9finir des filtres de type "commence par", "se termine par" ou "contient".']}),"\n",(0,d.jsxs)(n.p,{children:["Si la commande est ex\xe9cut\xe9e depuis un composant, elle retourne par d\xe9faut les noms des m\xe9thodes projet du composant. Si vous passez le param\xe8tre ",(0,d.jsx)(n.em,{children:"*"}),", le tableau contiendra les m\xe9thodes projet de la base h\xf4te."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note :"})," Les m\xe9thodes plac\xe9es dans la corbeille ne sont pas list\xe9es."]}),"\n",(0,d.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(n.p,{children:"Exemples d\u2019utilisations types :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Liste de toutes les m\xe9thodes projet de la base\n\xa0METHOD GET NAMES(t_Noms)\n\xa0\n\xa0\xa0// Liste des m\xe9thodes projet d\xe9butant par une cha\xeene sp\xe9cifique\n\xa0METHOD GET NAMES(t_Noms;"web_@")\n\xa0\n\xa0\xa0// Liste des m\xe9thodes projet de la base h\xf4te d\xe9butant par une cha\xeene sp\xe9cifique\n\xa0METHOD GET NAMES(t_Noms;"web_@";*)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"1166"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var s=t(667294);let d={},r=s.createContext(d);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);