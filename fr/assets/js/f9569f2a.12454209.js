"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14101"],{314478:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/document-to-blob","title":"DOCUMENT TO BLOB","description":"DOCUMENT TO BLOB ( document ; blob )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/document-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/document-to-blob","permalink":"/docs/fr/commands/document-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdocument-to-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"document-to-blob","title":"DOCUMENT TO BLOB","slug":"/commands/document-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE FROM BLOB","permalink":"/docs/fr/commands/delete-from-blob"},"next":{"title":"ENCRYPT BLOB","permalink":"/docs/fr/commands/encrypt-blob"}}'),t=s("785893"),d=s("250065");let o={id:"document-to-blob",title:"DOCUMENT TO BLOB",slug:"/commands/document-to-blob",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function u(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DOCUMENT TO BLOB"})," ( ",(0,t.jsx)(n.em,{children:"document"})," ; ",(0,t.jsx)(n.em,{children:"blob"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"document"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom du document"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"blob"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2194"}),(0,t.jsx)(n.td,{children:"Champ ou variable de type BLOB devant recevoir le document"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Contenu du document"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DOCUMENT TO BLOB"})," charge le contenu de ",(0,t.jsx)(n.em,{children:"document"})," dans ",(0,t.jsx)(n.em,{children:"blob"}),". Vous devez passer un nom de document valide, c'est-\xe0-dire qui d\xe9signe un document existant qui n'est pas d\xe9j\xe0 ouvert, sinon une erreur sera g\xe9n\xe9r\xe9e. Si vous voulez que l'utilisateur choisisse le document, utilisez la routine ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/open-document",children:"Open document"})," et la variable syst\xe8me Document (cf. l'exemple ci-dessous)."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Notre exemple est une base qui vous permet de stocker et chercher rapidement des documents. Dans un formulaire entr\xe9e, vous cr\xe9ez un bouton qui vous permet de charger un document de votre choix dans un champ de type BLOB. La m\xe9thode pour ce bouton peut \xeatre la suivante :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0$vhRefDoc:=Open document(\"\")\xa0// S\xe9lectionner un document\n\xa0If(OK=1)\xa0// Si un document a \xe9t\xe9 choisi\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhRefDoc)\xa0// Nous voulons pas qu'il reste ouvert\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;[VotreTable]VotreChampBLOB)\xa0// Charger le document\n\xa0\xa0\xa0\xa0If(OK=0)\n\xa0\xa0// G\xe9rer l'erreur\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(n.p,{children:"La variable syst\xe8me OK prend la valeur 1 si le document est correctement lu. Sinon, elle prend la valeur 0 et une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,t.jsx)(n.h4,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si vous essayez de charger dans un BLOB un document qui n'existe pas ou qui est d\xe9j\xe0 ouvert par un(e) autre process ou application, une des Erreurs du gestionnaire de fichiers du syst\xe8me sera g\xe9n\xe9r\xe9e."}),"\n",(0,t.jsx)(n.li,{children:"Une erreur d'Entr\xe9e/Sortie peut survenir si le document est verrouill\xe9, s'il se trouve sur un volume verrouill\xe9 ou si un probl\xe8me survient pendant la lecture du document."}),"\n",(0,t.jsx)(n.li,{children:"S'il n'y a pas assez de m\xe9moire pour charger le document, une erreur -108 est g\xe9n\xe9r\xe9e."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Dans tous les cas, vous pouvez g\xe9rer les erreurs en utilisant la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/blob-to-document",children:"BLOB TO DOCUMENT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/open-document",children:"Open document"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"525"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var r=s(667294);let t={},d=r.createContext(t);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);