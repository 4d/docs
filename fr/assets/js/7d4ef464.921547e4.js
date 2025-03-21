"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15936"],{796021:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/volume-list","title":"VOLUME LIST","description":"VOLUME LIST ( volumes )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/volume-list.md","sourceDirName":"commands-legacy","slug":"/commands/volume-list","permalink":"/docs/fr/20-R7/commands/volume-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvolume-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"volume-list","title":"VOLUME LIST","slug":"/commands/volume-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"VOLUME ATTRIBUTES","permalink":"/docs/fr/20-R7/commands/volume-attributes"},"next":{"title":"Environnement syst\xe8me","permalink":"/docs/fr/20-R7/commands/theme/System-Environment"}}'),l=n("785893"),r=n("250065");let i={id:"volume-list",title:"VOLUME LIST",slug:"/commands/volume-list",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"VOLUME LIST"})," ( ",(0,l.jsx)(s.em,{children:"volumes"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Param\xe8tre"}),(0,l.jsx)(s.th,{children:"Type"}),(0,l.jsx)(s.th,{}),(0,l.jsx)(s.th,{children:"Description"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"volumes"}),(0,l.jsx)(s.td,{children:"Text array"}),(0,l.jsx)(s.td,{children:"\u2190"}),(0,l.jsx)(s.td,{children:"Noms des volumes actuellement mont\xe9s"})]})})]}),"\n",(0,l.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"VOLUME LIST"})," remplit le tableau ",(0,l.jsx)(s.em,{children:"volumes"}),", de type texte, avec les noms des volumes d\xe9finis (Windows) ou mont\xe9s (Mac OS) sur votre machine."]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:'Sous Mac OS, elle retourne la liste des volumes visibles au niveau du Finder. Seuls les noms des volumes sont retourn\xe9s (par exemple "MacHD", "BootCamp"...).'}),"\n",(0,l.jsx)(s.li,{children:'Sous Windows, elle retourne la liste des volumes couramment d\xe9finis, m\xeame si le volume n\'est pas physiquement pr\xe9sent (par exemple un volume "E:\\" sera retourn\xe9 m\xeame s\'il n\'y a pas de CD ou de DVD dans le lecteur). Les noms des volumes sont suivis du caract\xe8re s\xe9parateur de dossiers ("C:\\").'}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsxs)(s.p,{children:["A l'aide de la zone de d\xe9filement ",(0,l.jsx)(s.em,{children:"ttVolumes"}),", vous voulez afficher la liste des volumes d\xe9finis ou mont\xe9s sur votre machine :"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(ttVolumes;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0VOLUME LIST(ttVolumes)\n\xa0\n\xa0\xa0// ...\n\xa0End case\n"})}),"\n",(0,l.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.a,{href:"/docs/fr/20-R7/commands/document-list",children:"DOCUMENT LIST"}),(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.a,{href:"/docs/fr/20-R7/commands/folder-list",children:"FOLDER LIST"}),(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.a,{href:"/docs/fr/20-R7/commands/volume-attributes",children:"VOLUME ATTRIBUTES"})]}),"\n",(0,l.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{}),(0,l.jsx)(s.th,{})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(s.td,{children:"471"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Thread safe"}),(0,l.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return i}});var t=n(667294);let l={},r=t.createContext(l);function i(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);