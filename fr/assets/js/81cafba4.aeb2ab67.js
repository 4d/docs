"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31463"],{723482:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/max","title":"Max","description":"Max ( s\xe9ries {; cheminAttribut} ) : any","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/max.md","sourceDirName":"commands-legacy","slug":"/commands/max","permalink":"/docs/fr/commands/max","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmax.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"max","title":"Max","slug":"/commands/max","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Average","permalink":"/docs/fr/commands/average"},"next":{"title":"Min","permalink":"/docs/fr/commands/min"}}'),t=s("785893"),l=s("250065");let i={id:"max",title:"Max",slug:"/commands/max",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Max"})," ( ",(0,t.jsx)(n.em,{children:"s\xe9ries"})," {; ",(0,t.jsx)(n.em,{children:"cheminAttribut"}),"} ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"s\xe9ries"}),(0,t.jsx)(n.td,{children:"Field, Array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeurs desquelles dont vous voulez obtenir la plus \xe9lev\xe9e"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cheminAttribut"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Chemin d'attribut duquel calculer la valeur maximale"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Date, Number"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valeur la plus \xe9lev\xe9e de s\xe9ries"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Max"})," retourne la valeur la plus \xe9lev\xe9e contenue dans ",(0,t.jsx)(n.em,{children:"s\xe9ries"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"s\xe9ries"})," est un champ index\xe9, l'index est utilis\xe9 pour la recherche de cette valeur."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,t.jsx)(n.em,{children:"s\xe9ries"})," un tableau (\xe0 une ou deux dimensions). Dans ce cas, le tableau doit \xeatre de type Entier, Entier long, R\xe9el ou Date."]}),"\n",(0,t.jsxs)(n.p,{children:["Si la s\xe9lection de ",(0,t.jsx)(n.em,{children:"s\xe9ries"})," est vide, ",(0,t.jsx)(n.strong,{children:"Max"})," retourne 0."]}),"\n",(0,t.jsxs)(n.p,{children:["La commande accepte un param\xe8tre optionnel de type texte, ",(0,t.jsx)(n.em,{children:"cheminAttribut"}),", que vous pouvez utiliser si ",(0,t.jsx)(n.em,{children:"s\xe9ries"})," est un champ de type Objet. Il vous permet de d\xe9finir le chemin de l'attribut dont le contenu doit \xeatre utilis\xe9 pour le calcul de la valeur maximale. Utilisez la notation \xe0 points standard pour d\xe9finir le chemin dans l'objet jusqu'\xe0 l'attribut, par exemple \"Clients.enfants.age\". Attention, gardez \xe0 l'esprit que les noms d'attributs d'objets tiennent compte de la casse des caract\xe8res.",(0,t.jsx)(n.br,{}),"\nSeules les valeurs num\xe9riques des attributs sont utilis\xe9es pour le calcul. Si l'attribut contient des valeurs non num\xe9riques, elles sont ignor\xe9es."]}),"\n",(0,t.jsxs)(n.p,{children:["Si la commande est correctement ex\xe9cut\xe9e, la variable syst\xe8me OK prend la valeur 1. Si elle est interrompue (par exemple si l'utilisateur clique sur le bouton ",(0,t.jsx)(n.strong,{children:"Arr\xeat"})," dans le thermom\xe8tre de progression), la variable OK prend la valeur 0."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple ci-dessous est la m\xe9thode objet d'une variable, ",(0,t.jsx)(n.em,{children:"vMax"}),", plac\xe9e dans la zone de rupture R0 d'un formulaire sortie. La variable est imprim\xe9e \xe0 la fin de l'\xe9tat. La m\xe9thode objet assigne la valeur la plus \xe9lev\xe9e du champ \xe0 la variable, qui est alors imprim\xe9e dans la derni\xe8re rupture de l'\xe9tat."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0vMax:=Max([Employ\xe9s]Salaire)\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"}),' Assurez-vous que l\'\xe9v\xe9nement formulaire "Sur impression sous total" est bien coch\xe9 pour la variable.']}),"\n",(0,t.jsx)(n.p,{children:"La m\xe9thode suivante est appel\xe9e pour imprimer les enregistrements de la s\xe9lection courante et activer la phase de rupture :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Employ\xe9s])\n\xa0ORDER BY([Employ\xe9s];[Employ\xe9s]Soci\xe9t\xe9;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Employ\xe9s]Salaire)\n\xa0FORM SET OUTPUT([Employ\xe9s];"FormImpression")\n\xa0PRINT SELECTION([Employ\xe9s])\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," La valeur du param\xe8tre de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/break-level",children:"BREAK LEVEL"})," doit \xeatre \xe9gale au nombre de ruptures que contient l'\xe9tat. Pour plus d'informations sur les ruptures, reportez-vous aux commandes du th\xe8me ",(0,t.jsx)(n.em,{children:"Impressions"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple vous permet d\u2019obtenir la valeur la plus \xe9lev\xe9e d\u2019un tableau :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL($TabNote;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Note;$TabNote)\n\xa0vMax:=Max($TabNote)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsxs)(n.p,{children:["Pour un exemple de calcul utilisant un attribut de champ objet, veuillez vous reporter \xe0 l'exemple 3 de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/average",children:"Average"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/min",children:"Min"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var r=s(667294);let t={},l=r.createContext(t);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);