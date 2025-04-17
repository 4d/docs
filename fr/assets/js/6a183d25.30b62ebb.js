"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25442"],{855217:function(e,n,r){r.r(n),r.d(n,{default:()=>d,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>u,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/current-form-table","title":"Current form table","description":"Current form table  : Pointer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/current-form-table.md","sourceDirName":"commands-legacy","slug":"/commands/current-form-table","permalink":"/docs/fr/20-R8/commands/current-form-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcurrent-form-table.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"current-form-table","title":"Current form table","slug":"/commands/current-form-table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current default table","permalink":"/docs/fr/20-R8/commands/current-default-table"},"next":{"title":"DEFAULT TABLE","permalink":"/docs/fr/20-R8/commands/default-table"}}'),s=r("785893"),l=r("250065");let i={id:"current-form-table",title:"Current form table",slug:"/commands/current-form-table",displayed_sidebar:"docs"},a=void 0,o={},u=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Current form table"}),"  : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Pointeur vers la table \xe0 laquelle appartient le formulaire actuellement affich\xe9"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La fonction ",(0,s.jsx)(n.strong,{children:"Current form table"})," retourne un pointeur vers la table \xe0 laquelle appartient le formulaire affich\xe9 \xe0 l'\xe9cran ou imprim\xe9 dans le process courant."]}),"\n",(0,s.jsx)(n.p,{children:"La fonction retourne Nil dans les cas suivants :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"il n'y a pas de formulaire affich\xe9 ou en cours d'impression dans le process courant,"}),"\n",(0,s.jsx)(n.li,{children:"le formulaire courant est un formulaire projet."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Si plusieurs fen\xeatres sont ouvertes simultan\xe9ment dans le process courant (ce qui signifie que la derni\xe8re fen\xeatre ouverte est la fen\xeatre courante active), la fonction retourne un pointeur vers la table du formulaire affich\xe9 dans la fen\xeatre active."}),"\n",(0,s.jsx)(n.p,{children:"Si le formulaire affich\xe9 est le formulaire d\xe9taill\xe9 d'une zone de sous-formulaire (c'est-\xe0-dire que pendant la saisie de donn\xe9es, l'utilisateur a double-cliqu\xe9 sur un enregistrement ou un sous-enregistrement dans une zone de sous-formulaire \"double-cliquable\"), la fonction retourne :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"un pointeur vers la table de la zone de sous-formulaire, si cette derni\xe8re affiche une table."}),"\n",(0,s.jsx)(n.li,{children:"un pointeur non significatif si la zone de sous-formulaire affiche une sous-table."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsxs)(n.p,{children:["Dans votre application, vous utilisez la convention suivante : au moment de l'affichage d'un enregistrement, la variable ",(0,s.jsx)(n.em,{children:"vsEnrCourant"}),', si elle est pr\xe9sente dans un formulaire, affiche "Nouvel enregistrement" si vous cr\xe9ez un nouvel enregistrement, ou par exemple "56 parmi 5200" si vous ouvrez le 56e enregistrement d\'une s\xe9lection en comportant 5200. Pour cela, vous pouvez cr\xe9er une fois la variable ',(0,s.jsx)(n.em,{children:"vsEnrCourant"})," et lui associer la m\xe9thode objet d\xe9crite ci-dessous, puis la copier et la coller dans tous les formulaires que vous voulez :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode objet de la variable non saisissable vsEnrCourant\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0C_STRING(31;vsEnrCourant)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $vpTableParente : Pointer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $vlNumEnr : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpTableParente:=Current form table\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNumEnr:=Record number($vpTableParente->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNumEnr=-3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsEnrCourant:="Nouvel enregistrement"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNumEnr=-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsEnrCourant:="Pas d\'enregistrement"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNumEnr>=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsEnrCourant:=String(Numero dans selection($vpTableParente->))+" parmi "+Chaine(Enregistrements trouves($vpTableParente->))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/dialog",children:"DIALOG"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/form-set-input",children:"FORM SET INPUT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/form-set-output",children:"FORM SET OUTPUT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/print-selection",children:"PRINT SELECTION"})]}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"627"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var t=r(667294);let s={},l=t.createContext(s);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);