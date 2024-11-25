"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28799"],{43659:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>l,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/get-pasteboard-data-type","title":"GET PASTEBOARD DATA TYPE","description":"GET PASTEBOARD DATA TYPE ( signatures4D ; typesNatifs {; nomsFormats} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-pasteboard-data-type.md","sourceDirName":"commands-legacy","slug":"/commands/get-pasteboard-data-type","permalink":"/docs/fr/commands/get-pasteboard-data-type","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-pasteboard-data-type.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-pasteboard-data-type","title":"GET PASTEBOARD DATA TYPE","slug":"/commands/get-pasteboard-data-type","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PASTEBOARD DATA","permalink":"/docs/fr/commands/get-pasteboard-data"},"next":{"title":"GET PICTURE FROM PASTEBOARD","permalink":"/docs/fr/commands/get-picture-from-pasteboard"}}'),r=n("785893"),d=n("250065");let i={id:"get-pasteboard-data-type",title:"GET PASTEBOARD DATA TYPE",slug:"/commands/get-pasteboard-data-type",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let s={br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"GET PASTEBOARD DATA TYPE"})," ( ",(0,r.jsx)(s.em,{children:"signatures4D"})," ; ",(0,r.jsx)(s.em,{children:"typesNatifs"})," {; ",(0,r.jsx)(s.em,{children:"nomsFormats"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"signatures4D"}),(0,r.jsx)(s.td,{children:"Text array"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Signatures 4D des types de donn\xe9es"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"typesNatifs"}),(0,r.jsx)(s.td,{children:"Text array"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Types de donn\xe9es natifs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"nomsFormats"}),(0,r.jsx)(s.td,{children:"Text array"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Noms des formats (Windows uniquement), cha\xeenes vides sous Mac OS"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"GET PASTEBOARD DATA TYPE"})," permet d\u2019obtenir la liste des types de donn\xe9es pr\xe9sents dans le conteneur. Cette commande doit g\xe9n\xe9ralement \xeatre utilis\xe9e dans le contexte d'un glisser-d\xe9poser, dans le cadre des \xe9v\xe9nements formulaire On Drop ou On Drag Over de l\u2019objet de destination. Elle permet notamment de v\xe9rifier la pr\xe9sence d\u2019un type de donn\xe9es sp\xe9cifique dans le conteneur."]}),"\n",(0,r.jsx)(s.p,{children:"Cette commande retourne les types de donn\xe9es sous plusieurs formes diff\xe9rentes via deux (ou trois) tableaux :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["le tableau ",(0,r.jsx)(s.em,{children:"signatures4D"})," contient les types de donn\xe9es exprim\xe9s \xe0 l\u2019aide de leur signature 4D interne (par exemple \u201Ccom.4d.private.picture.gif\u201D). Si un type de donn\xe9es pr\xe9sent n\u2019est pas reconnu par 4D, une cha\xeene vide (\u201C\u201D) est retourn\xe9e dans le tableau."]}),"\n",(0,r.jsxs)(s.li,{children:["le tableau ",(0,r.jsx)(s.em,{children:"typesNatifs"})," contient les types de donn\xe9es exprim\xe9s \xe0 l\u2019aide de leur type natif. Le format des types natifs diff\xe8re entre Mac OS et Windows :\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Sous Mac OS, les types natifs sont exprim\xe9s sous forme d\u2019UTI (UniformType Identifier)."}),"\n",(0,r.jsxs)(s.li,{children:["Sous Windows, les types natifs sont exprim\xe9s sous forme de num\xe9ros, chaque num\xe9ro \xe9tant associ\xe9 \xe0 un nom de format. Le tableau ",(0,r.jsx)(s.em,{children:"typesNatifs"})," contient ces num\xe9ros sous forme de cha\xeene (\u201C3\u201D, \u201C12\u201D, etc.). Si vous souhaitez utiliser des libell\xe9s plus explicites, il est recommand\xe9 d\u2019utiliser le tableau facultatif ",(0,r.jsx)(s.em,{children:"nomsFormats"}),", qui contient le nom de format des types natifs sous Windows.",(0,r.jsx)(s.br,{}),"\nLe tableau ",(0,r.jsx)(s.em,{children:"typesNatifs"})," permet de prendre en charge tout type de donn\xe9es pr\xe9sent dans le conteneur, y compris des donn\xe9es dont le type n\u2019est pas r\xe9f\xe9renc\xe9 par 4D."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Sous Windows, vous pouvez \xe9galement passer le tableau ",(0,r.jsx)(s.em,{children:"nomsFormats"}),", qui re\xe7oit les noms des types de donn\xe9es pr\xe9sents dans le conteneur. Les valeurs retourn\xe9es dans ce tableau peuvent \xeatre utilis\xe9es par exemple pour construire un pop up menu de s\xe9lection de format. Sous Mac OS, le tableau ",(0,r.jsx)(s.em,{children:"nomsFormats"})," retourne des cha\xeenes vides."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Pour plus d\u2019informations sur les types de donn\xe9es pris en charge, reportez-vous \xe0 la section ",(0,r.jsx)(s.em,{children:"Gestion du conteneur de donn\xe9es"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Gestion du conteneur de donn\xe9es"})})]})}function u(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return i}});var t=n(667294);let r={},d=t.createContext(r);function i(e){let s=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);