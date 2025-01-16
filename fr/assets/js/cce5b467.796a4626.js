"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89230"],{337657:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/create-alias","title":"CREATE ALIAS","description":"CREATE ALIAS ( cheminCible ; cheminAlias )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-alias.md","sourceDirName":"commands-legacy","slug":"/commands/create-alias","permalink":"/docs/fr/20-R7/commands/create-alias","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-alias.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-alias","title":"CREATE ALIAS","slug":"/commands/create-alias","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COPY DOCUMENT","permalink":"/docs/fr/20-R7/commands/copy-document"},"next":{"title":"Create document","permalink":"/docs/fr/20-R7/commands/create-document"}}'),r=s("785893"),i=s("250065");let a={id:"create-alias",title:"CREATE ALIAS",slug:"/commands/create-alias",displayed_sidebar:"docs"},l=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CREATE ALIAS"})," ( ",(0,r.jsx)(n.em,{children:"cheminCible"})," ; ",(0,r.jsx)(n.em,{children:"cheminAlias"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cheminCible"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom ou chemin d\u2019acc\xe8s de la cible de l\u2019alias/du raccourci"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cheminAlias"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom ou chemin d\u2019acc\xe8s complet de l\u2019alias/du raccourci \xe0 cr\xe9er"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"CREATE ALIAS"})," cr\xe9e un alias (appel\xe9 \u201Craccourci\u201D sous Windows) du fichier ou dossier cible d\xe9sign\xe9 par le param\xe8tre ",(0,r.jsx)(n.em,{children:"cheminCible"}),", avec le nom et l\u2019emplacement d\xe9finis dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"cheminAlias"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez cr\xe9er un alias de tout type de document ou de dossier. L\u2019ic\xf4ne de l\u2019alias sera identique \xe0 celle de l\u2019\xe9l\xe9ment cible. Elle comportera en outre une petite fl\xe8che et, sous Mac OS, le libell\xe9 de l\u2019alias appara\xeetra en caract\xe8res italiques."}),"\n",(0,r.jsxs)(n.p,{children:["La commande n\u2019affecte pas de libell\xe9 par d\xe9faut \xe0 l\u2019alias, vous devez passer un nom dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"cheminAlias"}),". Si vous passez uniquement un nom dans ce param\xe8tre, l\u2019alias est cr\xe9\xe9 dans le dossier actif courant (g\xe9n\xe9ralement, le dossier contenant le fichier de structure de la base)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Sous Windows, les raccourcis sont des fichiers dont l\u2019extension est \u201C.LNK\u201D. Si vous ne passez pas cette extension, la commande l\u2019ajoute automatiquement."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez une cha\xeene vide dans ",(0,r.jsx)(n.em,{children:"cheminCible"}),", la commande ne fait rien."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Votre base g\xe9n\xe8re des fichiers texte intitul\xe9s \u201CRapportNum\xe9ro\u201D, stock\xe9s dans le dossier de la base. Vous souhaitez permettre \xe0 l\u2019utilisateur de cr\xe9er des raccourcis vers ces rapports et de les stocker o\xf9 il le souhaite :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode CREER_RAPPORT\n\xa0var $vtRapport : Text\n\xa0C_STRING(250;$vtChemin)\n\xa0C_STRING(80;$vaNom)\n\xa0var vDoc : Time\n\xa0C_INTEGER($NumRapport)\n\xa0\n\xa0$vTRapport:=...\xa0//Edition du rapport\n\xa0$NumRapport:=...\xa0//Calcul du num\xe9ro du rapport\n\xa0$vaNom:="Rapport"+String($NumRapport)+".txt"\xa0//Nom du fichier\n\xa0vDoc:=Create document($vaNom)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET(vDoc;$vTRapport)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vDoc)\n\xa0\xa0//Ajout de l\u2019alias\n\xa0\xa0\xa0\xa0CONFIRM("Cr\xe9er un alias pour ce rapport ?)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtChemin:=Select folder("O\xf9 souhaitez-vous cr\xe9er l\u2019alias ?")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE ALIAS($vaNom;$vtChemin+$vaNom)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SHOW ON DISK($vtChemin+$vaNom)\n\xa0\xa0//Visualisation de l\'emplacement de l\'alias\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"La variable syst\xe8me OK prend la valeur 1 si la commande a \xe9t\xe9 correctement ex\xe9cut\xe9e, sinon elle prend la valeur 0."}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/resolve-alias",children:"RESOLVE ALIAS"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"694"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var t=s(667294);let r={},i=t.createContext(r);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);