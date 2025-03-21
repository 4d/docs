"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17973"],{187862:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/variance","title":"Variance","description":"Variance ( s\xe9ries ) : Real","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/variance.md","sourceDirName":"commands-legacy","slug":"/commands/variance","permalink":"/docs/fr/commands/variance","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvariance.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"variance","title":"Variance","slug":"/commands/variance","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Sum squares","permalink":"/docs/fr/commands/sum-squares"},"next":{"title":"PHP","permalink":"/docs/fr/commands/theme/PHP"}}'),a=s("785893"),i=s("250065");let t={id:"variance",title:"Variance",slug:"/commands/variance",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Variance"})," ( ",(0,a.jsx)(n.em,{children:"s\xe9ries"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Param\xe8tre"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"s\xe9ries"}),(0,a.jsx)(n.td,{children:"Field, Array"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Valeurs dont vous voulez obtenir la variance"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"R\xe9sultat"}),(0,a.jsx)(n.td,{children:"Real"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Variance de s\xe9ries"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Variance"})," retourne la variance de ",(0,a.jsx)(n.em,{children:"s\xe9ries"}),". Si ",(0,a.jsx)(n.em,{children:"s\xe9ries"})," est un champ index\xe9, l'index est utilis\xe9 pour le calcul."]}),"\n",(0,a.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,a.jsx)(n.em,{children:"s\xe9ries"})," un tableau (\xe0 une ou deux dimensions). Dans ce cas, le tableau doit \xeatre de type Entier, Entier long ou R\xe9el."]}),"\n",(0,a.jsx)(n.p,{children:"La variance d'un ensemble de valeurs est la moyenne des carr\xe9s des \xe9carts par rapport \xe0 la moyenne. C'est une valeur de dispersion autour de la moyenne. 4D utilise la formule de variance suivante :"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Variance(x) = Somme (x-m)*(x-m)/(n-1)"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"m = Moyenne"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"n = Nombre de valeurs"})]}),"\n",(0,a.jsxs)(n.p,{children:["Si les valeurs consid\xe9r\xe9es ne constituent pas un \xe9chantillon, multipliez la valeur retourn\xe9e par ",(0,a.jsx)(n.strong,{children:"Variance"})," par (n-1)/n."]}),"\n",(0,a.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,a.jsx)(n.p,{children:"L'exemple suivant est la m\xe9thode objet d'une variable appel\xe9e Var. La m\xe9thode assigne la variance de la s\xe9rie \xe0 Var:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0Var:=Variance([Etudiants]Notes)\n"})}),"\n",(0,a.jsx)(n.p,{children:"La m\xe9thode suivante est appel\xe9e pour imprimer les enregistrements de la s\xe9lection et activer la phase de rupture :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Etudiants])\n\xa0ORDER BY([Etudiants];[Etudiants]Classe;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Etudiants]Notes)\n\xa0OUTPUT FORM([Etudiants];"FormImpression")\n\xa0PRINT SELECTION([Etudiants])\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note :"})," La valeur du param\xe8tre de la commande ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/break-level",children:"BREAK LEVEL"})," doit \xeatre \xe9gale au nombre de ruptures que contient l'\xe9tat. Pour plus d'informations sur les ruptures, reportez-vous aux commandes du th\xe8me ",(0,a.jsx)(n.em,{children:"Impressions"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,a.jsx)(n.p,{children:"Cet exemple vous permet d\u2019obtenir la variance des valeurs plac\xe9es dans un tableau :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL($TabNote;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Note;$TabNote)\n\xa0vVariance:=Variance($TabNote)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/fr/commands/average",children:"Average"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/fr/commands/std-deviation",children:"Std deviation"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/fr/commands/sum",children:"Sum"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/fr/commands/sum-squares",children:"Sum squares"})]}),"\n",(0,a.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,a.jsx)(n.td,{children:"27"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return t}});var r=s(667294);let a={},i=r.createContext(a);function t(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);