"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19845"],{979612:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/null","title":"Null","description":"Null  : Null","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/null.md","sourceDirName":"commands-legacy","slug":"/commands/null","permalink":"/docs/fr/commands/null","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnull.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"null","title":"Null","slug":"/commands/null","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is nil pointer","permalink":"/docs/fr/commands/is-nil-pointer"},"next":{"title":"RESOLVE POINTER","permalink":"/docs/fr/commands/resolve-pointer"}}'),r=l("785893"),d=l("250065");let i={id:"null",title:"Null",slug:"/commands/null",displayed_sidebar:"docs"},t=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Null"}),"  : Null"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Null"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeur Null"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Null"})," retourne la valeur ",(0,r.jsx)(n.strong,{children:"null"}),", de type Null."]}),"\n",(0,r.jsxs)(n.p,{children:["Cette fonction vous permet d'affecter ou de comparer la valeur ",(0,r.jsx)(n.strong,{children:"null"})," aux \xe9lements du langage 4D suivants :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"El\xe9ments du langage 4D"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Commentaire"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Valeurs de propri\xe9t\xe9s d'objets"}),(0,r.jsxs)(n.td,{children:["La comparaison de ",(0,r.jsx)(n.strong,{children:"Null"})," avec une propri\xe9t\xe9 d'objet vaut Vrai si la valeur de la propri\xe9t\xe9 est null et Faux dans les autres cas. Par soucis de simplicit\xe9, comparer ",(0,r.jsx)(n.strong,{children:"Null"})," sera \xe9galement Vrai si la propri\xe9t\xe9 n'existe pas dans l'objet (i.e. est ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/undefined",children:"Undefined"}),"), voir exemple 4."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"El\xe9ments de collections"}),(0,r.jsxs)(n.td,{children:["Lorsqu'une collection est \xe9tendue automatiquement par l'ajout d'\xe9l\xe9ments non adjacents, tous les \xe9l\xe9ments interm\xe9diaires ajout\xe9s prennent la valeur ",(0,r.jsx)(n.strong,{children:"null"})," par d\xe9faut."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Variables de type objet (",(0,r.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"}),")"]}),(0,r.jsx)(n.td,{children:"Voir (*) ci-dessous"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Variables de type collection (",(0,r.jsx)(n.a,{href:"c-collection.md",children:"C_COLLECTION"}),")"]}),(0,r.jsx)(n.td,{children:"Voir (*) ci-dessous"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Variables de type pointeur (",(0,r.jsx)(n.a,{href:"c-pointer.md",children:"C_POINTER"}),")"]}),(0,r.jsx)(n.td,{children:"Voir (*) ci-dessous"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Variables de type image (",(0,r.jsx)(n.a,{href:"c-picture.md",children:"C_PICTURE"}),")"]}),(0,r.jsxs)(n.td,{children:["(*) Affecter la valeur ",(0,r.jsx)(n.strong,{children:"null"})," \xe0 une variable de ce type efface son contenu. Cela a le m\xeame effet qu'appeler la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/clear-variable",children:"CLEAR VARIABLE"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["variables variant (",(0,r.jsx)(n.a,{href:"c-variant.md",children:"C_VARIANT"}),")"]}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Cette commande ne peut pas \xeatre utilis\xe9e avec les champs scalaires de la base de donn\xe9es. Les valeurs Null dans les champs de la base sont prises en charge par le moteur SQL, et sont g\xe9r\xe9s via les commandes ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/is-field-value-null",children:"Is field value Null"})," et ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-field-value-null",children:"SET FIELD VALUE NULL"}),","]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsxs)(n.p,{children:["Exemples d'affectation et de test de la valeur ",(0,r.jsx)(n.strong,{children:"null"})," avec des propri\xe9t\xe9s d'objets :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var vEmp : Object\n\xa0vEmp:=New object\n\xa0vEmp.name:="Smith"\n\xa0vEmp.children:=Null\n\xa0\n\xa0If(vEmp.children=Null)\xa0//vrai\n\xa0End if\n\xa0If(vEmp.name=Null)\xa0//faux\n\xa0End if\n\xa0If(vEmp.parent=Null)\xa0//vrai\n\xa0End if\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Cet exemple requiert que la notation objet soit activ\xe9e dans la base."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsxs)(n.p,{children:["Exemple d'affectation et de test de la valeur ",(0,r.jsx)(n.strong,{children:"null"})," avec une collection d'\xe9l\xe9ments :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var myCol : Collection\n\xa0myCol:=New collection(10;20;Null)\n\xa0...\n\xa0If(myCol[2]=Null)\n\xa0\xa0// si le 3e \xe9l\xe9ment est null\n\xa0\xa0\xa0\xa0...\n\xa0End if\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Cet exemple requiert que la notation objet soit activ\xe9e dans la base."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsxs)(n.p,{children:["Ces exemples illustrent les diverses mani\xe8res d'affecter ou de comparer la valeur ",(0,r.jsx)(n.strong,{children:"null"})," \xe0 des variables :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Variable objet\n\xa0var $o : Object\n\xa0$o:=New object\n\xa0$o:=Null\xa0//\xe9quivaut \xe0 EFFACER VARIABLE($o)\n\xa0If($o#Null)\xa0//\xe9quivaut \xe0 If(OB Est defini($o))\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Variable collection\n\xa0var $c : Collection\n\xa0$c:=New collection\n\xa0$c:=Null\xa0//\xe9quivaut \xe0 EFFACER VARIABLE($c)\n\xa0If($c#Null)\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Variable pointeur\n\xa0var $p : Pointer\n\xa0$p:=->$v\n\xa0$p:=Null\xa0//\xe9quivaut \xe0 EFFACER VARIABLE($p)\n\xa0If($p=Null)\xa0//\xe9quivaut \xe0 If(Pointeur nil($p))\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Variable image\n\xa0var $i : Picture\n\xa0$i:=$vpicture\n\xa0$i:=Null\xa0//\xe9quivaut \xe0 EFFACER VARIABLE($i)\n\xa0If($i#Null)\xa0//\xe9quivaut \xe0 If(Taille image($i)#0)\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,r.jsxs)(n.p,{children:["Cet exemple compare les diff\xe9rents r\xe9sultats de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/undefined",children:"Undefined"})," et de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/null",children:"Null"})," appliqu\xe9es aux propri\xe9t\xe9s d'objets, en fonction du contexte :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var vEmp : Object\n\xa0vEmp:=New object\n\xa0vEmp.name:="Smith"\n\xa0vEmp.children:=Null\n\xa0\n\xa0$undefined:=Undefined(vEmp.name)\xa0// Faux\n\xa0$null:=(vEmp.name=Null)\xa0// Faux\n\xa0\n\xa0$undefined:=Undefined(vEmp.children)\xa0// Faux\n\xa0$null:=(vEmp.children=Null)\xa0// Vrai\n\xa0\n\xa0$undefined:=Undefined(vEmp.parent)\xa0// Vrai\n\xa0$null:=(vEmp.parent=Null)\xa0// Vrai\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/is-field-value-null",children:"Is field value Null"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/ob-set-null",children:"OB SET NULL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-field-value-null",children:"SET FIELD VALUE NULL"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1517"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return t},a:function(){return i}});var s=l(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);