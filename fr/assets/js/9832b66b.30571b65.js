"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69135"],{427037:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>i,assets:()=>d,toc:()=>a,contentTitle:()=>c});var i=JSON.parse('{"id":"commands-legacy/is-license-available","title":"Is license available","description":"Is license available {( licence )} : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/is-license-available.md","sourceDirName":"commands-legacy","slug":"/commands/is-license-available","permalink":"/docs/fr/20-R8/commands/is-license-available","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-license-available.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"is-license-available","title":"Is license available","slug":"/commands/is-license-available","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Create deployment license","permalink":"/docs/fr/20-R8/commands/create-deployment-license"},"next":{"title":"License info","permalink":"/docs/fr/20-R8/commands/license-info"}}'),l=s("785893"),r=s("250065");let t={id:"is-license-available",title:"Is license available",slug:"/commands/is-license-available",displayed_sidebar:"docs"},c=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Is license available"})," {( ",(0,l.jsx)(n.em,{children:"licence"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"licence"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Plug-in duquel tester la validit\xe9 de la licence"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"R\xe9sultat"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Vrai si le plug-in est disponible, sinon Faux"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"Is license available"})," permet de conna\xeetre la disponibilit\xe9 d\u2019un plug-in. Elle est utile, par exemple, pour afficher ou masquer des fonctions n\xe9cessitant la pr\xe9sence d\u2019un plug-in."]}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"Is license available"})," peut \xeatre utilis\xe9e de trois mani\xe8res diff\xe9rentes :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Le param\xe8tre ",(0,l.jsx)(n.em,{children:"licence"})," est omis : dans ce cas, la commande retourne Faux si l\u2019application 4D est en mode d\xe9monstration."]}),"\n",(0,l.jsxs)(n.li,{children:["Vous passez dans le param\xe8tre ",(0,l.jsx)(n.em,{children:"licence"})," une des constantes suivantes du th\xe8me \u201C",(0,l.jsx)(n.em,{children:"Licence disponible"}),"\u201D :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Constante"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Valeur"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"4D Client SOAP license"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"808465465"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"4D Client Web license"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"808465209"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"4D for OCI license"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"808465208"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"4D ODBC Pro license"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"808464946"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"4D REST Test license"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"808465719"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"4D SOAP license"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"808465464"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"4D View license"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"808465207"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"4D Web license"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"808464945"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"4D Write license"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"808464697"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["Dans ce cas, la commande retourne Vrai si le plug-in correspondant dispose d\u2019une licence d\u2019utilisation. La commande tient compte des \xe9ventuelles attributions de licences effectu\xe9es en mode D\xe9veloppement ou via la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R8/commands/set-plugin-access",children:"SET PLUGIN ACCESS"}),".",(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.strong,{children:"Is license available"})," retourne Faux si le plug-in fonctionne en mode d\xe9monstration."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Vous passez directement dans le param\xe8tre ",(0,l.jsx)(n.em,{children:"licence"})," le num\xe9ro d\u2019ID de la ressource \u201C4BNX\u201D du plug-in. Le fonctionnement de la commande est dans ce cas identique \xe0 celui d\xe9crit ci-dessus."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/20-R8/commands/change-licenses",children:"CHANGE LICENSES"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R8/commands/license-info",children:"License info"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R8/commands/get-plugin-access",children:"Get plugin access"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R8/commands/plugin-list",children:"PLUGIN LIST"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R8/commands/set-plugin-access",children:"SET PLUGIN ACCESS"})]}),"\n",(0,l.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"714"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return t}});var i=s(667294);let l={},r=i.createContext(l);function t(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);