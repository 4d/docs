"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18686"],{906096:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/query-by-example","title":"QUERY BY EXAMPLE","description":"QUERY BY EXAMPLE ( {;}{*} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/query-by-example.md","sourceDirName":"commands-legacy","slug":"/commands/query-by-example","permalink":"/docs/fr/20-R7/commands/query-by-example","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-by-example.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"query-by-example","title":"QUERY BY EXAMPLE","slug":"/commands/query-by-example","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY BY ATTRIBUTE","permalink":"/docs/fr/20-R7/commands/query-by-attribute"},"next":{"title":"QUERY BY FORMULA","permalink":"/docs/fr/20-R7/commands/query-by-formula"}}'),t=r("785893"),l=r("250065");let i={id:"query-by-example",title:"QUERY BY EXAMPLE",slug:"/commands/query-by-example",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QUERY BY EXAMPLE"})," ( {",(0,t.jsx)(n.em,{children:"laTable"}),"}{;}{*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table de laquelle une s\xe9lection d'enregistrements doit \xeatre retourn\xe9e ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Masquer les barres de d\xe9filement"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"QUERY BY EXAMPLE"})," effectue la m\xeame action que la commande de menu ",(0,t.jsx)(n.strong,{children:"Recherche par formulaire"}),"... en mode D\xe9veloppement. Cette commande affiche le formulaire entr\xe9e courant comme fen\xeatre de recherche. ",(0,t.jsx)(n.strong,{children:"QUERY BY EXAMPLE"})," cherche dans ",(0,t.jsx)(n.em,{children:"laTable"})," les donn\xe9es que l'utilisateur a saisies dans cette fen\xeatre. Le formulaire doit contenir les champs sur lesquels vous voulez que l'utilisateur puisse effectuer la recherche. La recherche est optimis\xe9e : les champs index\xe9s sont automatiquement utilis\xe9s.",(0,t.jsx)(n.br,{}),"\nSi vous passez le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"*"}),", les barres de d\xe9filement du formulaire sont masqu\xe9es."]}),"\n",(0,t.jsxs)(n.p,{children:["Reportez-vous au manuel Mode D\xe9veloppement de 4D pour plus d'informations sur l'utilisation de la commande de menu ",(0,t.jsx)(n.strong,{children:"Recherche par formulaire..."})," du mode D\xe9veloppement."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["La m\xe9thode dans l'exemple suivant affiche le formulaire ",(0,t.jsx)(n.em,{children:"maRecherche"}),". Si l'utilisateur valide le formulaire et ex\xe9cute la recherche (c'est-\xe0-dire si la variable syst\xe8me OK prend la valeur 1), les enregistrements trouv\xe9s sont affich\xe9s :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Personnes];"maRecherche")\xa0// Ce formulaire devient le formulaire entr\xe9e\n\xa0QUERY BY EXAMPLE([Personnes])\xa0// Afficher le formulaire pour la recherche\n\xa0If(OK=1)\xa0// Si l\'utilisateur valide la recherche\n\xa0\xa0\xa0\xa0DISPLAY SELECTION([Personnes])\xa0// Visualiser les enregistrements trouv\xe9s\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(n.p,{children:"Si l'utilisateur clique sur le bouton Valider ou appuie sur la touche Entr\xe9e, la variable syst\xe8me OK prend la valeur 1 et la recherche est effectu\xe9e. Si l'utilisateur clique sur le bouton Annuler ou utilise la touche d'annulation, la variable syst\xe8me OK prend la valeur 0 et la recherche est annul\xe9e."}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/order-by",children:"ORDER BY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/query",children:"QUERY"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"292"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"OK"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change l'enregistrement courant"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Change la s\xe9lection courante"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Interdite sur le serveur"}),(0,t.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var s=r(667294);let t={},l=s.createContext(t);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);