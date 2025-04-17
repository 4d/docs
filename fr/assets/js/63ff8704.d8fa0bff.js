"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14414"],{578360:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/describe-query-execution","title":"DESCRIBE QUERY EXECUTION","description":"DESCRIBE QUERY EXECUTION ( statut )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/describe-query-execution.md","sourceDirName":"commands-legacy","slug":"/commands/describe-query-execution","permalink":"/docs/fr/20-R8/commands/describe-query-execution","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdescribe-query-execution.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"describe-query-execution","title":"DESCRIBE QUERY EXECUTION","slug":"/commands/describe-query-execution","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Recherches et tris","permalink":"/docs/fr/20-R8/commands/theme/Queries"},"next":{"title":"Find in field","permalink":"/docs/fr/20-R8/commands/find-in-field"}}'),t=s("785893"),i=s("250065");let l={id:"describe-query-execution",title:"DESCRIBE QUERY EXECUTION",slug:"/commands/describe-query-execution",displayed_sidebar:"docs"},c=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DESCRIBE QUERY EXECUTION"})," ( ",(0,t.jsx)(n.em,{children:"statut"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"statut"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Vrai=Enregistrer la description des requ\xeates, Faux=Stopper l'enregistrement"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"DESCRIBE QUERY EXECUTION"})," permet d\u2019activer ou d\u2019inactiver le mode d\u2019analyse de l\u2019ex\xe9cution des recherches pour le process courant. La commande fonctionne uniquement dans le contexte des commandes de recherche du langage 4D telles que ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/query",children:"QUERY"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["L\u2019appel de la commande avec le param\xe8tre ",(0,t.jsx)(n.em,{children:"statut"})," \xe0 ",(0,t.jsx)(n.strong,{children:"Vrai"})," active le mode d\u2019analyse des recherches. Dans ce mode, le moteur de 4D enregistrera en interne deux s\xe9ries d\u2019informations sp\xe9cifiques lors de chaque requ\xeate effectu\xe9e par la suite sur les donn\xe9es :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"la description d\xe9taill\xe9e de la recherche juste avant son ex\xe9cution, c\u2019est-\xe0-dire la recherche pr\xe9vue (le plan de recherche),"}),"\n",(0,t.jsx)(n.li,{children:"la description d\xe9taill\xe9e de la recherche telle qu\u2019elle a r\xe9ellement \xe9t\xe9 ex\xe9cut\xe9e (le chemin de recherche)."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Les informations enregistr\xe9es incluent le type de recherche (index\xe9e, s\xe9quentielle), le nombre d\u2019enregistrements trouv\xe9s et le temps n\xe9cessaire \xe0 l\u2019ex\xe9cution de chaque crit\xe8re de recherche. Vous pouvez ensuite lire ces informations \xe0 l\u2019aide des commandes ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/last-query-plan",children:"Last query plan"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/last-query-path",children:"Last query path"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"En g\xe9n\xe9ral, la description du plan d\u2019une recherche et celle de son chemin sont identiques, mais elles peuvent toutefois diff\xe9rer car 4D peut mettre en oeuvre des optimisations dynamiques au cours de l\u2019ex\xe9cution de la recherche, dans le but d\u2019am\xe9liorer les performances. Par exemple, une recherche index\xe9e peut \xeatre convertie dynamiquement en recherche s\xe9quentielle si le moteur de 4D estime qu\u2019elle sera plus rapide \u2014 c\u2019est le cas notamment lorsque le nombre d\u2019enregistrements parmi lesquels effectuer la recherche est faible."}),"\n",(0,t.jsxs)(n.p,{children:["Passez ",(0,t.jsx)(n.strong,{children:"Faux"})," dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"statut"})," lorsque vous n\u2019avez plus besoin d\u2019analyser les recherches. Le mode d\u2019analyse de l\u2019ex\xe9cution des recherches peut ralentir l\u2019application."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"L\u2019exemple suivant illustre le type d\u2019information obtenue via ces commandes :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $vResultPlan;$vResultPath : Text\n\xa0DESCRIBE QUERY EXECUTION(True)\xa0\xa0//mode analyse\n\xa0QUERY([Employ\xe9s];[Employ\xe9s]Nom="T@";*)\xa0\xa0// Chercher les employ\xe9s dont le nom d\xe9bute par T...\n\xa0QUERY([Employ\xe9s];&;[Soci\xe9t\xe9s]Nom="H@";*)\xa0// travaillant pour une soci\xe9t\xe9 dont le nom d\xe9bute par H\n\xa0QUERY([Employ\xe9s];&;[Employ\xe9s]Salaire>2500;*)\xa0// dont le salaire est > 2500\n\xa0QUERY([Employ\xe9s];&;[Villes]nbHab<50000)\xa0\xa0// habitant dans une ville de moins de 50000 habitants\n\xa0$vResultPlan:=Last query plan(Description in text format)\n\xa0$vResultPath:=Last query path(Description in text format)\n\xa0DESCRIBE QUERY EXECUTION(False)\xa0\xa0//Fin du mode analyse\n'})}),"\n",(0,t.jsxs)(n.p,{children:["A l\u2019issue de l\u2019ex\xe9cution de ce code, ",(0,t.jsx)(n.em,{children:"$vResultPlan"})," et ",(0,t.jsx)(n.em,{children:"$vResultPath"})," contiennent les descriptions des recherches effectu\xe9es, par exemple :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-RAW",children:"$vResultPlan : \xa0\xa0\xa0Employ\xe9s.Nom == T@ And  Employ\xe9s.Salaire > 2500 And Join on Table : Soci\xe9t\xe9s\xa0 :\xa0  Employ\xe9s.Soci\xe9t\xe9 = Soci\xe9t\xe9s.Nom [index : Soci\xe9t\xe9s.Nom ] LIKE H@ And Join  on Table : Villes\xa0 :\xa0 Employ\xe9s.Ville = Villes.Nom [index : Villes.nbHab  ] < 50000$vResultPath : (Employ\xe9s.Nom == T@ And  Employ\xe9s.Salaire > 2500) And (Join on Table : Soci\xe9t\xe9s\xa0 :\xa0  Employ\xe9s.Soci\xe9t\xe9 = Soci\xe9t\xe9s.Nom with filter {[index : Soci\xe9t\xe9s.Nom ]  LIKE H@}) And (Join on Table : Villes\xa0 :\xa0 Employ\xe9s.Ville = Villes.Nom  with filter {[index : Villes.nbHab ] < 50000})\xa0\xa0 (3 records found in 1  ms)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Si la constante Description in XML format est pass\xe9e \xe0 la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/last-query-path",children:"Last query path"}),", ",(0,t.jsx)(n.em,{children:"$vResultPath"})," contient la description de la recherche exprim\xe9e en XML :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-XML",children:'$vResultPath : \n\xa0\xa0\xa0<QueryExecution>\n\xa0\xa0\xa0\xa0\xa0\xa0<steps description="And" time="0" recordsfounds="1227">\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<steps description="[Merge] : ACTORS with CITIES" time="13" recordsfounds="1227">\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<steps  description="[Join] : ACTORS.Birth_City_ID =CITIES.City_ID" time="13"  recordsfounds="1227"/>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</steps>\n\xa0\xa0\xa0\xa0\xa0\xa0</steps>\n\xa0\xa0\xa0</QueryExecution>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/last-query-path",children:"Last query path"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/last-query-plan",children:"Last query plan"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1044"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);