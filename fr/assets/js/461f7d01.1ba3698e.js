"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38910"],{903900:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>l,frontMatter:()=>t});var i=JSON.parse('{"id":"commands-legacy/set-document-properties","title":"SET DOCUMENT PROPERTIES","description":"SET DOCUMENT PROPERTIES ( nomFichier ; verrouill\xe9 ; invisible ; cr\xe9\xe9\xa0le ; cr\xe9\xe9\xa0\xe0\xa0 ; modifi\xe9\xa0le ; modifi\xe9\xa0\xe0 )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-document-properties.md","sourceDirName":"commands-legacy","slug":"/commands/set-document-properties","permalink":"/docs/fr/commands/set-document-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-document-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-document-properties","title":"SET DOCUMENT PROPERTIES","slug":"/commands/set-document-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET DOCUMENT POSITION","permalink":"/docs/fr/commands/set-document-position"},"next":{"title":"SET DOCUMENT SIZE","permalink":"/docs/fr/commands/set-document-size"}}'),s=r("785893"),d=r("250065");let t={id:"set-document-properties",title:"SET DOCUMENT PROPERTIES",slug:"/commands/set-document-properties",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET DOCUMENT PROPERTIES"})," ( ",(0,s.jsx)(n.em,{children:"nomFichier"})," ; ",(0,s.jsx)(n.em,{children:"verrouill\xe9"})," ; ",(0,s.jsx)(n.em,{children:"invisible"})," ; cr\xe9\xe9\xa0le ; cr\xe9\xe9\xa0\xe0\xa0 ; modifi\xe9\xa0le ; modifi\xe9\xa0\xe0 )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomFichier"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom du document ou Chemin d'acc\xe8s complet au document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"verrouill\xe9"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Verrouill\xe9 (Vrai) ou non verrouill\xe9 (Faux)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"invisible"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Invisible (Vrai) ou visible (Faux)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cr\xe9\xe9\xa0le"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Date de cr\xe9ation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cr\xe9\xe9\xa0\xe0"}),(0,s.jsx)(n.td,{children:"Heure"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Heure de cr\xe9ation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modifi\xe9\xa0le"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Date de derni\xe8re modification"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modifi\xe9\xa0\xe0"}),(0,s.jsx)(n.td,{children:"Heure"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Heure de derni\xe8re modification"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"SET DOCUMENT PROPERTIES"})," modifie certaines informations du document dont vous avez pass\xe9 le nom ou le chemin d'acc\xe8s dans ",(0,s.jsx)(n.em,{children:"document"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Avant l'appel :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Passez Vrai dans ",(0,s.jsx)(n.em,{children:"verrouill\xe9"})," pour verrouiller le document. Un document verrouill\xe9 ne peut \xeatre modifi\xe9. Passez Faux dans ",(0,s.jsx)(n.em,{children:"verrouill\xe9"})," pour d\xe9verrouiller un document."]}),"\n",(0,s.jsxs)(n.li,{children:["Passez Vrai dans ",(0,s.jsx)(n.em,{children:"invisible"})," pour cacher le document. Passez Faux dans ",(0,s.jsx)(n.em,{children:"invisible"})," pour rendre le document visible dans les fen\xeatres du bureau."]}),"\n",(0,s.jsxs)(n.li,{children:["Passez la date et l'heure de cr\xe9ation du document dans ",(0,s.jsx)(n.em,{children:"cr\xe9\xe9 le"})," et ",(0,s.jsx)(n.em,{children:"cr\xe9\xe9 \xe0"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Passez la date et l'heure de la derni\xe8re modification du document dans ",(0,s.jsx)(n.em,{children:"modifi\xe9 le"})," et ",(0,s.jsx)(n.em,{children:"modifi\xe9 \xe0"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["L'heure et la date de cr\xe9ation et de derni\xe8re modification sont g\xe9r\xe9es par le gestionnaire de fichiers de votre syst\xe8me, \xe0 chaque fois que vous cr\xe9ez ou modifiez un document. Cette commande vous permet de modifier ces propri\xe9t\xe9s, dans des buts particuliers. Reportez-vous \xe0 l'exemple de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/get-document-properties",children:"GET DOCUMENT PROPERTIES"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"_o_SET DOCUMENT CREATOR"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"_o_SET DOCUMENT TYPE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/get-document-properties",children:"GET DOCUMENT PROPERTIES"})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return t}});var i=r(667294);let s={},d=i.createContext(s);function t(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);