"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81062"],{78438:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/std-deviation","title":"Std deviation","description":"Std deviation ( s\xe9ries ) : Real","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/std-deviation.md","sourceDirName":"commands-legacy","slug":"/commands/std-deviation","permalink":"/docs/fr/20-R8/commands/std-deviation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstd-deviation.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"std-deviation","title":"Std deviation","slug":"/commands/std-deviation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Min","permalink":"/docs/fr/20-R8/commands/min"},"next":{"title":"Sum","permalink":"/docs/fr/20-R8/commands/sum"}}'),t=s("785893"),d=s("250065");let i={id:"std-deviation",title:"Std deviation",slug:"/commands/std-deviation",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Std deviation"})," ( ",(0,t.jsx)(n.em,{children:"s\xe9ries"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"s\xe9ries"}),(0,t.jsx)(n.td,{children:"Field, Array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeurs dont vous voulez obtenir l'\xe9cart type"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Ecart type de s\xe9ries"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Std deviation"})," retourne l'\xe9cart type (c.-\xe0-d. la racine carr\xe9e de la variance) de ",(0,t.jsx)(n.em,{children:"s\xe9ries"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"s\xe9ries"})," est un champ index\xe9, l'index sera utilis\xe9 pour le calcul."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,t.jsx)(n.em,{children:"s\xe9ries"})," un tableau (\xe0 une ou deux dimensions). Dans ce cas, le tableau doit \xeatre de type Entier, Entier long ou R\xe9el."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant est la m\xe9thode objet d'une variable appel\xe9e EcartT. La m\xe9thode assigne l'\xe9cart type d'une s\xe9rie \xe0 EcartT :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0EcartT:=Std deviation([Table1]S\xe9rieValeurs)\n"})}),"\n",(0,t.jsx)(n.p,{children:"La m\xe9thode suivante est appel\xe9e pour imprimer les enregistrements de la s\xe9lection et activer la phase de rupture :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Table1])\n\xa0ORDER BY([Table1];[Table1]S\xe9rieValeurs;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Table1]S\xe9rieValeurs)\n\xa0OUTPUT FORM([Table1];"FormImpression")\n\xa0PRINT SELECTION([Table1])\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," La valeur du param\xe8tre de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/break-level",children:"BREAK LEVEL"})," doit \xeatre \xe9gale au nombre de ruptures que contient l'\xe9tat. Pour plus d'informations sur les ruptures, reportez-vous aux commandes du th\xe8me ",(0,t.jsx)(n.em,{children:"Impressions"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple vous permet d\u2019obtenir l\u2019\xe9cart type d\u2019une s\xe9rie de valeurs plac\xe9es dans un tableau :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL($TabNote;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Note;$TabNote)\n\xa0vEcartT:=Std deviation($TabNote)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/average",children:"Average"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/sum",children:"Sum"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/sum-squares",children:"Sum squares"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/variance",children:"Variance"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"26"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);