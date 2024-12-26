"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9134"],{303186:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>m,assets:()=>c,toc:()=>o,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/delete-document","title":"DELETE DOCUMENT","description":"DELETE DOCUMENT ( nomFichier )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delete-document.md","sourceDirName":"commands-legacy","slug":"/commands/delete-document","permalink":"/docs/fr/commands/delete-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delete-document","title":"DELETE DOCUMENT","slug":"/commands/delete-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE FOLDER","permalink":"/docs/fr/commands/create-folder"},"next":{"title":"DELETE FOLDER","permalink":"/docs/fr/commands/delete-folder"}}'),r=s("785893"),d=s("250065");let i={id:"delete-document",title:"DELETE DOCUMENT",slug:"/commands/delete-document",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DELETE DOCUMENT"})," ( ",(0,r.jsx)(n.em,{children:"nomFichier"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomFichier"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom de document ou Chemin d'acc\xe8s complet au document"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DELETE DOCUMENT"})," supprime le document dont vous avez pass\xe9 le nom dans ",(0,r.jsx)(n.em,{children:"document"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Si le nom du document ou le chemin d'acc\xe8s saisi est incorrect, une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,r.jsx)(n.p,{children:"Si le document est ouvert lorsque la commande est appel\xe9e, le r\xe9sultat d\xe9pend du syst\xe8me d'exploitation :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"sur Windows, une erreur est g\xe9n\xe9r\xe9e,"}),"\n",(0,r.jsx)(n.li,{children:"sur macOS, aucune erreur n'est g\xe9n\xe9r\xe9e et le document est supprim\xe9."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DELETE DOCUMENT"})," n'accepte pas de cha\xeene vide dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"document"}),". Si vous passez une cha\xeene vide, la bo\xeete de dialogue standard d'ouverture de fichiers ne s'affiche pas et une erreur est g\xe9n\xe9r\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Attention :"})," ",(0,r.jsx)(n.strong,{children:"DELETE DOCUMENT"})," peut supprimer tout fichier disque, y compris des fichiers cr\xe9\xe9s par d'autres applications ou les applications elles-m\xeames. La commande ",(0,r.jsx)(n.strong,{children:"DELETE DOCUMENT"})," doit donc \xeatre utilis\xe9e avec pr\xe9caution. La suppression d'un document est une op\xe9ration d\xe9finitive et irr\xe9versible."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant supprime le document appel\xe9 Note :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0DELETE DOCUMENT("Note")\xa0// Suppression du document\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsxs)(n.p,{children:["La suppression d'un document met la variable syst\xe8me OK \xe0 1. Si ",(0,r.jsx)(n.strong,{children:"DELETE DOCUMENT"})," ne peut pas supprimer le document, la variable syst\xe8me OK prend la valeur 0."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/test-path-name",children:"Test path name"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"159"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);