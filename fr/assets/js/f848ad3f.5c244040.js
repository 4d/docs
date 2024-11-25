"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21439"],{99665:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>u,assets:()=>i,toc:()=>d,frontMatter:()=>t});var r=JSON.parse('{"id":"commands-legacy/variable-to-blob","title":"VARIABLE TO BLOB","description":"VARIABLE TO BLOB ( variable ; blob {; offset\xa0|\xa0*} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/variable-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/variable-to-blob","permalink":"/docs/fr/commands/variable-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvariable-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"variable-to-blob","title":"VARIABLE TO BLOB","slug":"/commands/variable-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"TEXT TO BLOB","permalink":"/docs/fr/commands/text-to-blob"},"next":{"title":"Boolean","permalink":"/docs/fr/category/boolean"}}'),a=s("785893"),l=s("250065");let t={id:"variable-to-blob",title:"VARIABLE TO BLOB",slug:"/commands/variable-to-blob",displayed_sidebar:"docs"},o=void 0,i={},d=[{value:"Description",id:"description",level:4},{value:"Note",id:"note",level:5},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"VARIABLE TO BLOB"})," ( ",(0,a.jsx)(n.em,{children:"variable"})," ; ",(0,a.jsx)(n.em,{children:"blob"})," {; offset\xa0|\xa0*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Param\xe8tre"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"variable"}),(0,a.jsx)(n.td,{children:"Variable"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Variable \xe0 stocker dans le BLOB"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"blob"}),(0,a.jsx)(n.td,{children:"Blob"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"BLOB devant recevoir la variable"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"offset\xa0|\xa0*"}),(0,a.jsx)(n.td,{children:"Variable, Op\xe9rateur"}),(0,a.jsx)(n.td,{children:"\u2194"}),(0,a.jsx)(n.td,{children:"Offset de la variable (en octets) dans BLOB ou * pour ajouter la variable \xe0 la fin du BLOB"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:"Nouvel offset apr\xe8s \xe9criture si * omis"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"VARIABLE TO BLOB"})," stocke la variable ",(0,a.jsx)(n.em,{children:"variable"})," dans le BLOB ",(0,a.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel *, la ",(0,a.jsx)(n.em,{children:"variable"})," est ajout\xe9e \xe0 la fin de ",(0,a.jsx)(n.em,{children:"blob"})," et la taille du BLOB est redimensionn\xe9e en cons\xe9quence. A l'aide du param\xe8tre optionnel *, vous pouvez stocker les unes derri\xe8re les autres autant de variables ou de listes (cf. les autres commandes BLOB) que vous voulez dans un BLOB, la seule limite \xe9tant celle de la m\xe9moire disponible."]}),"\n",(0,a.jsxs)(n.p,{children:["Si vous ne passez pas le param\xe8tre optionnel ",(0,a.jsx)(n.em,{children:"*"})," ni de variable dans le param\xe8tre ",(0,a.jsx)(n.em,{children:"offset"}),", ",(0,a.jsx)(n.em,{children:"variable"})," est stock\xe9e \xe0 partir du d\xe9but du BLOB en \xe9crasant son contenu pr\xe9c\xe9dent. La taille du BLOB est redimensionn\xe9e en cons\xe9quence."]}),"\n",(0,a.jsxs)(n.p,{children:["Si vous passez la variable ",(0,a.jsx)(n.em,{children:"offset"})," en param\xe8tre, la ",(0,a.jsx)(n.em,{children:"variable"})," est \xe9crite dans le BLOB \xe0 l'offset (\xe0 partir de z\xe9ro) sp\xe9cifi\xe9 par ",(0,a.jsx)(n.em,{children:"offset"}),". Quel que soit l'endroit o\xf9 vous placez la variable, la taille du BLOB sera augment\xe9e si n\xe9cessaire en fonction de l'emplacement que vous avez d\xe9fini (ainsi que de la taille de la variable). Les octets red\xe9finis (autres que ceux que vous venez d'\xe9crire) sont initialis\xe9s \xe0 la valeur z\xe9ro."]}),"\n",(0,a.jsxs)(n.p,{children:["Apr\xe8s l'ex\xe9cution de la commande, la variable du param\xe8tre ",(0,a.jsx)(n.em,{children:"offset"})," est incr\xe9ment\xe9e du nombre d'octets ayant \xe9t\xe9 \xe9crits. Vous pouvez par cons\xe9quent r\xe9utiliser la m\xeame variable avec une autre commande d'\xe9criture de BLOB afin de placer une autre variable ou liste juste apr\xe8s celle que vous venez d'\xe9crire."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"VARIABLE TO BLOB"})," accepte tous les types de variables (y compris d'autres BLOBs), \xe0 l'exception des types suivants :"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Pointeurs"}),"\n",(0,a.jsx)(n.li,{children:"Tableaux de pointeurs"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"A noter que :"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["si vous stockez une variable de type Entier long qui est une r\xe9f\xe9rence \xe0 une liste hi\xe9rarchique (ListRef), ",(0,a.jsx)(n.strong,{children:"VARIABLE TO BLOB"})," stockera la variable Entier long, pas la liste. Pour stocker et r\xe9cup\xe9rer des listes hi\xe9rarchiques dans un BLOB, utilisez les commandes ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/list-to-blob",children:"LIST TO BLOB"})," et ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/blob-to-list",children:"BLOB to list"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["si vous passez dans le param\xe8tre ",(0,a.jsx)(n.em,{children:"variable"})," un objet ou une collection, la commande en place une copie (et non une r\xe9f\xe9rence) dans le BLOB. Si l\u2019objet ou la collection contient des pointeurs, leur valeurs d\xe9point\xe9es sont stock\xe9es dans le BLOB, pas les pointeurs eux-m\xeames."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ATTENTION :"})," Si vous utilisez un BLOB pour stocker les variables, utilisez par la suite la commande ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/blob-to-variable",children:"BLOB TO VARIABLE"})," pour r\xe9cup\xe9rer le contenu du BLOB car les variables sont stock\xe9es dans les BLOBs avec un format interne \xe0 4D."]}),"\n",(0,a.jsx)(n.p,{children:"La variable OK prend la valeur 1 si la variable a \xe9t\xe9 correctement stock\xe9e. Si l'op\xe9ration n'a pas pu \xeatre effectu\xe9e \xe0 cause d'un manque de m\xe9moire, la variable OK prend la valeur 0."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note sur l'ind\xe9pendance de plate-forme :"})," ",(0,a.jsx)(n.strong,{children:"VARIABLE TO BLOB"})," et ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/blob-to-variable",children:"BLOB TO VARIABLE"})," utilisent un format interne \xe0 4D pour g\xe9rer les variables stock\xe9es dans les BLOBs. Vous n'avez donc pas besoin de vous pr\xe9occuper de la conversion des octets (\"byte swapping\") entre les diff\xe9rentes plates-formes lors de l'utilisation de ces deux commandes. Un BLOB cr\xe9\xe9 sous Windows \xe0 l'aide de ces deux commandes peut \xeatre r\xe9utilis\xe9 sans la moindre manipulation sous Mac OS et vice-versa."]}),"\n",(0,a.jsx)(n.h5,{id:"note",children:"Note"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note de compatibilit\xe9 :"})," Etant donn\xe9 que cette commande modifie le blob pass\xe9 comme param\xe8tre, elle ne prend pas en charge les objets blob (de type 4D.Blob). Reportez-vous \xe0 la page ",(0,a.jsx)(n.em,{children:"Passer des blobs et objets blobs \xe0 des commandes 4D"})," sur developer.4d.com."]}),"\n",(0,a.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,a.jsx)(n.p,{children:"La variable OK prend la valeur 1 si la variable a \xe9t\xe9 correctement stock\xe9e, sinon elle prend la valeur 0."}),"\n",(0,a.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,a.jsx)(n.p,{children:"Les deux m\xe9thodes projet suivantes vous permettent de stocker et de r\xe9cup\xe9rer des variables dans un BLOB :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode projet STOCKER VARIABLES DANS BLOB\n\xa0\xa0// STOCKER VARIABLES DANS BLOB ( Pointeur { ; Pointeur ... { ; Pointeur } } )\n\xa0\xa0// STOCKER VARIABLES DANS BLOB ( BLOB { ; Var1 ... { ; Var2 } } )\n\xa0var ${1} : Pointer\n\xa0var $vlParam : Integer\n\xa0\n\xa0SET BLOB SIZE($1->;0)\n\xa0For($vlParam;2;Count parameters)\n\xa0\xa0\xa0\xa0VARIABLE TO BLOB(${$vlParam}->;$1->;*)\n\xa0End for\n\xa0\n\xa0\n\xa0\xa0// M\xe9thode projet RECUPERER VARIABLES DANS BLOB\n\xa0\xa0// RECUPERER VARIABLES DANS BLOB ( Pointeur { ; Pointeur ... { ; Pointeur } } )\n\xa0\xa0// RECUPERER VARIABLES DANS BLOB ( BLOB { ; Var1 ... { ; Var2 } } )\n\xa0var ${1} : Pointer\n\xa0var $vlParam;$vlOffset : Integer\n\xa0\n\xa0$vlOffset:=0\n\xa0For($vlParam;2;Count parameters)\n\xa0\xa0\xa0\xa0BLOB TO VARIABLE($1->;${$vlParam}->;$vlOffset)\n\xa0End for\n"})}),"\n",(0,a.jsx)(n.p,{children:"Lorsque ces m\xe9thodes ont \xe9t\xe9 ajout\xe9es \xe0 votre application, vous pouvez \xe9crire :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0STOCKER VARIABLES DANS BLOB(->vxBLOB;->vgImage;->taTableau1;->taTableau2)\n\xa0\xa0// ...\n\xa0RECUPERER VARIABLES DANS BLOB(->vxBLOB;->vgImage;->taTableau1;->taTableau2)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,a.jsx)(n.p,{children:"Les m\xe9thodes projet suivantes vous permettent de stocker et de r\xe9cup\xe9rer rapidement des variables dans les documents sur disque :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode projet STOCKER VARIABLES\n\xa0\xa0// STOCKER VARIABLES ( Texte ; Pointeur )\n\xa0\xa0// STOCKER VARIABLES ( Document ; -> Tableau )\n\xa0var $1 : Text\n\xa0var $2 : Pointer\n\xa0var $vxDonn\xe9esTableau : Blob\n\xa0VARIABLE TO BLOB($2->;$vxDonn\xe9esTableau)\xa0// Stocker le tableau dans le BLOB\n\xa0COMPRESS BLOB($vxDonn\xe9esTableau)\xa0// Compresser le BLOB\n\xa0BLOB TO DOCUMENT($1;$vxDonn\xe9esTableau)\xa0// Enregistrer le BLOB sur disque\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode projet CHARGER VARIABLES\n\xa0\xa0// CHARGER VARIABLES ( Texte ; Pointeur )\n\xa0\xa0// CHARGER VARIABLES ( Document ; -> Tableau )\n\xa0var $1 : Text\n\xa0var $2 : Pointer\n\xa0var $vxDonn\xe9esTableau : Blob\n\xa0DOCUMENT TO BLOB($1;$vxDonn\xe9esTableau)\xa0// Charger le BLOB du disque\n\xa0EXPAND BLOB($vxDonn\xe9esTableau)\xa0// D\xe9compresser le BLOB\n\xa0BLOB TO VARIABLE($vxDonn\xe9esTableau;$2->)\xa0// R\xe9cup\xe9rer le tableau du BLOB\n"})}),"\n",(0,a.jsx)(n.p,{children:"Lorsque ces m\xe9thodes ont \xe9t\xe9 ajout\xe9es \xe0 votre application, vous pouvez \xe9crire :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(...;taToutTableau;...)\n\xa0\xa0//\xa0 ...\n\xa0STOCKER VARIABLES($vaNomDoc;->taToutTableau)\n\xa0\xa0//\xa0 ...\n\xa0CHARGER VARIABLES($vaNomDoc;->taToutTableau)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/fr/commands/blob-to-list",children:"BLOB to list"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/fr/commands/blob-to-variable",children:"BLOB TO VARIABLE"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/fr/commands/list-to-blob",children:"LIST TO BLOB"})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return t}});var r=s(667294);let a={},l=r.createContext(a);function t(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);