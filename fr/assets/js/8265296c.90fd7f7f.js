"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49130"],{181931:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>l,toc:()=>o,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/std-deviation","title":"Std deviation","description":"Std deviation ( s\xe9ries ) : Real","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/std-deviation.md","sourceDirName":"commands-legacy","slug":"/commands/std-deviation","permalink":"/docs/fr/commands/std-deviation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstd-deviation.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"std-deviation","title":"Std deviation","slug":"/commands/std-deviation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Min","permalink":"/docs/fr/commands/min"},"next":{"title":"Sum","permalink":"/docs/fr/commands/sum"}}'),r=s("785893"),d=s("250065");let i={id:"std-deviation",title:"Std deviation",slug:"/commands/std-deviation",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Std deviation"})," ( ",(0,r.jsx)(n.em,{children:"s\xe9ries"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"s\xe9ries"}),(0,r.jsx)(n.td,{children:"Field, Array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valeurs dont vous voulez obtenir l'\xe9cart type"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Ecart type de s\xe9ries"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Std deviation"})," retourne l'\xe9cart type (c.-\xe0-d. la racine carr\xe9e de la variance) de ",(0,r.jsx)(n.em,{children:"s\xe9ries"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si ",(0,r.jsx)(n.em,{children:"s\xe9ries"})," est un champ index\xe9, l'index sera utilis\xe9 pour le calcul."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,r.jsx)(n.em,{children:"s\xe9ries"})," un tableau (\xe0 une ou deux dimensions). Dans ce cas, le tableau doit \xeatre de type Entier, Entier long ou R\xe9el."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant est la m\xe9thode objet d'une variable appel\xe9e EcartT. La m\xe9thode assigne l'\xe9cart type d'une s\xe9rie \xe0 EcartT :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0EcartT:=Std deviation([Table1]S\xe9rieValeurs)\n"})}),"\n",(0,r.jsx)(n.p,{children:"La m\xe9thode suivante est appel\xe9e pour imprimer les enregistrements de la s\xe9lection et activer la phase de rupture :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Table1])\n\xa0ORDER BY([Table1];[Table1]S\xe9rieValeurs;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Table1]S\xe9rieValeurs)\n\xa0OUTPUT FORM([Table1];"FormImpression")\n\xa0PRINT SELECTION([Table1])\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," La valeur du param\xe8tre de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/break-level",children:"BREAK LEVEL"})," doit \xeatre \xe9gale au nombre de ruptures que contient l'\xe9tat. Pour plus d'informations sur les ruptures, reportez-vous aux commandes du th\xe8me ",(0,r.jsx)(n.em,{children:"Impressions"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Cet exemple vous permet d\u2019obtenir l\u2019\xe9cart type d\u2019une s\xe9rie de valeurs plac\xe9es dans un tableau :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL($TabNote;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Note;$TabNote)\n\xa0vEcartT:=Std deviation($TabNote)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/average",children:"Average"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/sum",children:"Sum"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/sum-squares",children:"Sum squares"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/variance",children:"Variance"})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);