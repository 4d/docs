"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97698"],{574369:function(e,s,l){l.r(s),l.d(s,{default:()=>c,frontMatter:()=>t,metadata:()=>n,assets:()=>d,toc:()=>o,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/edit-formula","title":"EDIT FORMULA","description":"EDIT FORMULA ( laTable ; formule )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/edit-formula.md","sourceDirName":"commands-legacy","slug":"/commands/edit-formula","permalink":"/docs/fr/commands/edit-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fedit-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"edit-formula","title":"EDIT FORMULA","slug":"/commands/edit-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Formulas","permalink":"/docs/fr/category/formulas"},"next":{"title":"EXECUTE FORMULA","permalink":"/docs/fr/commands/execute-formula"}}'),r=l("785893"),a=l("250065");let t={id:"edit-formula",title:"EDIT FORMULA",slug:"/commands/edit-formula",displayed_sidebar:"docs"},i=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function u(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"EDIT FORMULA"})," ( ",(0,r.jsx)(s.em,{children:"laTable"})," ; ",(0,r.jsx)(s.em,{children:"formule"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"laTable"}),(0,r.jsx)(s.td,{children:"Table"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Table \xe0 afficher par d\xe9faut dans l\u2019\xe9diteur de formules"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"formule"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:'Variable contenant la formule \xe0 afficher dans l\u2019\xe9diteur de formules ou "" pour uniquement afficher l\u2019\xe9diteur'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Formule valid\xe9e par l\u2019utilisateur"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"EDIT FORMULA"})," affiche l\u2019\xe9diteur de formules afin de permettre \xe0 l\u2019utilisateur d\u2019\xe9crire ou de modifier une formule. L\u2019\xe9diteur contient \xe0 l'ouverture :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["dans la liste de gauche, les champs de la table d\xe9sign\xe9e par le param\xe8tre ",(0,r.jsx)(s.em,{children:"laTable"}),","]}),"\n",(0,r.jsxs)(s.li,{children:["dans la zone de formule, la formule contenue dans la variable ",(0,r.jsx)(s.em,{children:"formule"}),". Si vous avez pass\xe9 une cha\xeene vide dans ",(0,r.jsx)(s.em,{children:"formule"}),", l\u2019\xe9diteur est affich\xe9 sans formule."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["L\u2019utilisateur peut modifier la ",(0,r.jsx)(s.em,{children:"formule"})," affich\xe9e et la sauvegarder. Il peut \xe9galement en \xe9crire ou en charger une nouvelle. Dans tous les cas, lorsque l\u2019utilisateur valide la bo\xeete de dialogue, la variable syst\xe8me OK prend la valeur 1 et la variable ",(0,r.jsx)(s.em,{children:"formule"})," contient la formule d\xe9finie. Si l\u2019utilisateur annule la bo\xeete de dialogue, la variable syst\xe8me OK prend la valeur 0 et ",(0,r.jsx)(s.em,{children:"formule"})," est inchang\xe9e."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Notes :"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Par d\xe9faut, l'acc\xe8s aux m\xe9thodes et aux commandes est restreint dans l'\xe9diteur de formules pour tous les utilisateurs (sauf, dans les bases de donn\xe9es cr\xe9\xe9es avec 4D 2004.4 et suivantes, pour le Super_Utilisateur et l\u2019Administrateur). Lorsque ce m\xe9canisme est actif, vous devez explicitement d\xe9signer les \xe9l\xe9ments accessibles aux utilisateurs \xe0 l\u2019aide de la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-allowed-methods",children:"SET ALLOWED METHODS"}),". Si la formule fait appel \xe0 des m\xe9thodes qui n\u2019ont pas \xe9t\xe9 pr\xe9alablement autoris\xe9es, une erreur de syntaxe est g\xe9n\xe9r\xe9e et il n\u2019est pas possible de valider la bo\xeete de dialogue."]}),"\n",(0,r.jsxs)(s.li,{children:["L'\xe9diteur de formules n'est associ\xe9 \xe0 aucune barre de menus par d\xe9faut. L'\xe9quivalent d'un menu ",(0,r.jsx)(s.strong,{children:"Edition"})," standard doit \xeatre install\xe9 dans le process appelant si vous souhaitez que l'utilisateur b\xe9n\xe9ficie des raccourcis couper / copier / coller dans l'\xe9diteur de formules."]}),"\n",(0,r.jsxs)(s.li,{children:["La structure virtuelle \xe9ventuellement d\xe9finie par les commandes ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-table-titles",children:"FIXER TITRES TABLES"})," et FIXER TITRES CHAMPS(set-field-titles.md) ne doit pas \xeatre utilis\xe9e dans la variable ",(0,r.jsx)(s.em,{children:"formule"})," - elle ne sera pas non plus utilis\xe9e par 4D dans la variable retourn\xe9e. La structure virtuelle n'est utilis\xe9e que dans la bo\xeete de dialogue de l'\xe9diteur de formules."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["A noter qu\u2019au moment de la validation de la bo\xeete de dialogue, la commande n\u2019ex\xe9cute pas la ",(0,r.jsx)(s.em,{children:"formule"}),", seul le contenu de la variable est valid\xe9 et mis \xe0 jour. Si vous voulez ex\xe9cuter la ",(0,r.jsx)(s.em,{children:"formule"}),", vous devez utiliser la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/execute-formula",children:"EXECUTE FORMULA"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(s.p,{children:"Affichage de l\u2019\xe9diteur avec la table [Salaires] et sans formule pr\xe9-saisie puis ex\xe9cution de la formule sur la s\xe9lection courante :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0$maFormule:=""\n\xa0EDIT FORMULA([Salaires];$maFormule)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0APPLY TO SELECTION([Salaires];EXECUTE FORMULA($maFormule))\n\xa0End if\n'})}),"\n",(0,r.jsx)(s.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(s.p,{children:"Si l\u2019utilisateur valide la bo\xeete de dialogue, la variable syst\xe8me OK prend la valeur 1. Si l\u2019utilisateur annule la bo\xeete de dialogue, la variable syst\xe8me OK prend la valeur 0."}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/commands/apply-to-selection",children:"APPLY TO SELECTION"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/execute-formula",children:"EXECUTE FORMULA"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-allowed-methods",children:"SET ALLOWED METHODS"})]}),"\n",(0,r.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"806"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2717"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Modifie les variables"}),(0,r.jsx)(s.td,{children:"OK"})]})]})]})]})}function c(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,s,l){l.d(s,{Z:function(){return i},a:function(){return t}});var n=l(667294);let r={},a=n.createContext(r);function t(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);