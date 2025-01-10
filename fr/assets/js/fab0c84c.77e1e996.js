"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84617"],{542594:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>o,metadata:()=>d,assets:()=>i,toc:()=>l,contentTitle:()=>r});var d=JSON.parse('{"id":"commands-legacy/move-document","title":"MOVE DOCUMENT","description":"MOVE DOCUMENT ( cheminSource ; cheminDest )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/move-document.md","sourceDirName":"commands-legacy","slug":"/commands/move-document","permalink":"/docs/fr/commands/move-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmove-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"move-document","title":"MOVE DOCUMENT","slug":"/commands/move-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Localized document path","permalink":"/docs/fr/commands/localized-document-path"},"next":{"title":"Object to path","permalink":"/docs/fr/commands/object-to-path"}}'),t=s("785893"),c=s("250065");let o={id:"move-document",title:"MOVE DOCUMENT",slug:"/commands/move-document",displayed_sidebar:"docs"},r=void 0,i={},l=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function m(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"MOVE DOCUMENT"})," ( ",(0,t.jsx)(n.em,{children:"cheminSource"})," ; ",(0,t.jsx)(n.em,{children:"cheminDest"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cheminSource"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Chemin d'acc\xe8s complet au document existant"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cheminDest"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Chemin d'acc\xe8s de destination"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"MOVE DOCUMENT"})," d\xe9place ou renomme un document."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous passez le chemin d'acc\xe8s complet au document existant dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"cheminSource"})," et le nouveau nom et/ou emplacement du document dans ",(0,t.jsx)(n.em,{children:"cheminDest"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Attention :"})," Avec ",(0,t.jsx)(n.strong,{children:"MOVE DOCUMENT"}),", vous pouvez d\xe9placer un document depuis et vers tous les dossiers du m\xeame volume. Si vous souhaitez d\xe9placer un document entre deux volumes diff\xe9rents, utilisez la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/copy-document",children:"COPY DOCUMENT"})," pour \u201Cd\xe9placer\u201D le document puis effacez le document original avec la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/delete-document",children:"DELETE DOCUMENT"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant renomme le document DocNom :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0MOVE DOCUMENT("C:\\\\DOSSIER\\\\DocNom";"C:\\\\DOSSIER\\\\NouveauDocNom")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant d\xe9place et renomme le document DocNom :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0MOVE DOCUMENT("C:\\\\DOSSIER1\\\\DocNom";"C:\\\\DOSSIER2\\\\NouveauDocNom")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant d\xe9place le document DocNom :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0MOVE DOCUMENT("C:\\\\DOSSIER1\\\\DocNom";"C:\\\\DOSSIER2\\\\DocNom")\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Dans les deux derniers exemples, le dossier de destination ",(0,t.jsx)(n.em,{children:'"C:\\\\DOSSIER2"'})," doit d\xe9j\xe0 exister. En effet, la commande ",(0,t.jsx)(n.strong,{children:"MOVE DOCUMENT"})," d\xe9place uniquement un document, elle ne peut cr\xe9er de dossiers."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/copy-document",children:"COPY DOCUMENT"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"540"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return o}});var d=s(667294);let t={},c=d.createContext(t);function o(e){let n=d.useContext(c);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);