"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36624"],{330154:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>t,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/sum-squares","title":"Sum squares","description":"Sum squares ( s\xe9ries ) : Real","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sum-squares.md","sourceDirName":"commands-legacy","slug":"/commands/sum-squares","permalink":"/docs/fr/commands/sum-squares","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsum-squares.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sum-squares","title":"Sum squares","slug":"/commands/sum-squares","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Sum","permalink":"/docs/fr/commands/sum"},"next":{"title":"Variance","permalink":"/docs/fr/commands/variance"}}'),a=n("785893"),d=n("250065");let t={id:"sum-squares",title:"Sum squares",slug:"/commands/sum-squares",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Sum squares"})," ( ",(0,a.jsx)(s.em,{children:"s\xe9ries"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Param\xe8tre"}),(0,a.jsx)(s.th,{children:"Type"}),(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"s\xe9ries"}),(0,a.jsx)(s.td,{children:"Field, Array"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"Valeurs dont vous voulez obtenir la somme des carr\xe9s"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"R\xe9sultat"}),(0,a.jsx)(s.td,{children:"Real"}),(0,a.jsx)(s.td,{children:"\u2190"}),(0,a.jsx)(s.td,{children:"Somme des carr\xe9s de s\xe9ries"})]})]})]}),"\n",(0,a.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Sum squares"})," retourne la somme des carr\xe9s de ",(0,a.jsx)(s.em,{children:"s\xe9ries"}),". Si ",(0,a.jsx)(s.em,{children:"s\xe9ries"})," est un champ index\xe9, l'index est utilis\xe9 pour le calcul."]}),"\n",(0,a.jsxs)(s.p,{children:["Vous pouvez passer dans ",(0,a.jsx)(s.em,{children:"s\xe9ries"})," un tableau (\xe0 une ou deux dimensions). Dans ce cas, le tableau doit \xeatre de type Entier, Entier long ou R\xe9el."]}),"\n",(0,a.jsx)(s.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,a.jsx)(s.p,{children:"L'exemple suivant est la m\xe9thode objet d'une variable appel\xe9e Carr\xe9s. La m\xe9thode assigne la somme des carr\xe9s d'une s\xe9rie de valeurs \xe0 Carr\xe9s. La m\xe9thode est imprim\xe9e dans la derni\xe8re rupture de l'\xe9tat :"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"\xa0Carr\xe9s:=Sum squares([Table1]S\xe9rieValeurs)\n"})}),"\n",(0,a.jsx)(s.p,{children:"La m\xe9thode suivante est appel\xe9e pour imprimer les enregistrements de la s\xe9lection et activer la phase de rupture :"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'\xa0ALL RECORDS([Table1])\n\xa0ORDER BY([Table1];[Table1]S\xe9rieValeurs;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Table1]S\xe9rieValeurs)\n\xa0OUTPUT FORM([Table1];"FormImpression")\n\xa0PRINT SELECTION([Table1])\n'})}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Note :"})," La valeur du param\xe8tre de la commande ",(0,a.jsx)(s.a,{href:"/docs/fr/commands/break-level",children:"BREAK LEVEL"})," doit \xeatre \xe9gale au nombre de ruptures que contient l'\xe9tat. Pour plus d'informations sur les ruptures, reportez-vous aux commandes du th\xe8me ",(0,a.jsx)(s.em,{children:"Impressions"}),"."]}),"\n",(0,a.jsx)(s.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,a.jsx)(s.p,{children:"Cet exemple vous permet d\u2019obtenir la somme des carr\xe9s des valeurs plac\xe9es dans un tableau :"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"\xa0ARRAY REAL($TabNote;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Note;$TabNote)\n\xa0vSommeCarres:=Sum squares($TabNote)\n"})}),"\n",(0,a.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/fr/commands/average",children:"Average"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/fr/commands/std-deviation",children:"Std deviation"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/fr/commands/sum",children:"Sum"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/fr/commands/variance",children:"Variance"})]}),"\n",(0,a.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,a.jsx)(s.td,{children:"28"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Thread safe"}),(0,a.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return t}});var r=n(667294);let a={},d=r.createContext(a);function t(e){let s=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);