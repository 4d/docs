"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57934"],{964813:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/screen-depth","title":"SCREEN DEPTH","description":"SCREEN DEPTH ( profondeur ; couleur {; \xe9cran} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/screen-depth.md","sourceDirName":"commands-legacy","slug":"/commands/screen-depth","permalink":"/docs/fr/commands/screen-depth","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fscreen-depth.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"screen-depth","title":"SCREEN DEPTH","slug":"/commands/screen-depth","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SCREEN COORDINATES","permalink":"/docs/fr/commands/screen-coordinates"},"next":{"title":"Screen height","permalink":"/docs/fr/commands/screen-height"}}'),t=r("785893"),d=r("250065");let i={id:"screen-depth",title:"SCREEN DEPTH",slug:"/commands/screen-depth",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SCREEN DEPTH"})," ( ",(0,t.jsx)(n.em,{children:"profondeur"})," ; ",(0,t.jsx)(n.em,{children:"couleur"})," {; \xe9cran} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"profondeur"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Profondeur de l'\xe9cran (nombre de couleurs = 2 ^ profondeur)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"couleur"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"1 = \xe9cran couleur 0 = \xe9cran noir et blanc ou niveaux de gris"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\xe9cran"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de l'\xe9cran ou \xe9cran principal si omis"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SCREEN DEPTH"})," retourne dans les param\xe8tres ",(0,t.jsx)(n.em,{children:"profondeur"})," et ",(0,t.jsx)(n.em,{children:"couleur"})," les caract\xe9ristiques du moniteur utilis\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:["La profondeur de l'\xe9cran est retourn\xe9e dans ",(0,t.jsx)(n.em,{children:"profondeur"}),". La profondeur \xe9lev\xe9e en tant que puissance de 2 vous permet de conna\xeetre le nombre de couleurs que votre moniteur affiche. Si par exemple votre moniteur est param\xe9tr\xe9 en 256 couleurs (2^8), la profondeur de votre \xe9cran est de 8. 4D fournit les constantes pr\xe9d\xe9finies suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Black and white"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Four colors"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Millions of colors 24 bit"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"24"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Millions of colors 32 bit"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"32"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sixteen colors"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thousands of colors"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"16"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Two fifty six colors"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"8"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Si le moniteur est configur\xe9 pour afficher des couleurs, le param\xe8tre ",(0,t.jsx)(n.em,{children:"couleur"})," vaut 1. Si le moniteur est configur\xe9 pour afficher des niveaux de gris, ",(0,t.jsx)(n.em,{children:"couleur"})," vaut 0 (z\xe9ro). Notez que cette valeur n'a de signification que sous Mac OS. Les constantes pr\xe9d\xe9finies suivantes sont fournies par 4D :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is color"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is gray scale"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"\xe9cran"})," vous permet de sp\xe9cifier le num\xe9ro du moniteur sur lequel vous souhaitez obtenir des informations. Si vous omettez ce param\xe8tre, la commande retourne la profondeur de l'\xe9cran principal."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Votre application affiche de nombreux graphiques en couleurs. Vous pouvez \xe9crire, quelque part dans votre base :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SCREEN DEPTH($vlProf;$vlCouleur)\n\xa0If($vlProf<16)\n\xa0\xa0\xa0\xa0ALERT("Les formulaires seraient plus beaux si l\'\xe9cran"+" \xe9tait configur\xe9 en millions de couleurs.")\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/count-screens",children:"Count screens"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"439"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var s=r(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);