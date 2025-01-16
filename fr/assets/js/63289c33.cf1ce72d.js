"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23976"],{818582:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>l,assets:()=>a,toc:()=>o,contentTitle:()=>i});var l=JSON.parse('{"id":"commands-legacy/is-field-value-null","title":"Is field value Null","description":"Is field value Null ( leChamp ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-field-value-null.md","sourceDirName":"commands-legacy","slug":"/commands/is-field-value-null","permalink":"/docs/fr/20-R7/commands/is-field-value-null","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-field-value-null.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-field-value-null","title":"Is field value Null","slug":"/commands/is-field-value-null","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"End SQL","permalink":"/docs/fr/20-R7/commands/end-sql"},"next":{"title":"QUERY BY SQL","permalink":"/docs/fr/20-R7/commands/query-by-sql"}}'),r=s("785893"),t=s("250065");let d={id:"is-field-value-null",title:"Is field value Null",slug:"/commands/is-field-value-null",displayed_sidebar:"docs"},i=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Is field value Null"})," ( ",(0,r.jsx)(n.em,{children:"leChamp"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"leField"}),(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Champ \xe0 \xe9valuer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Vrai = le champ est NULL, Faux = le champ n'est pas NULL"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Is field value Null"})," retourne Vrai si le champ d\xe9sign\xe9 par le param\xe8tre ",(0,r.jsx)(n.em,{children:"leChamp"})," contient la valeur NULL, et Faux sinon."]}),"\n",(0,r.jsx)(n.p,{children:"La valeur NULL est exploit\xe9e par le moteur SQL de 4D. Pour plus d\u2019informations, reportez-vous au Manuel de r\xe9f\xe9rence SQL 4D."}),"\n",(0,r.jsxs)(n.p,{children:["La valeur retourn\xe9e par cette commande n'a de sens que si l'option \"",(0,r.jsx)(n.em,{children:"Traduire les NULL en valeurs vides"}),"\" n'est pas coch\xe9e dans la d\xe9finition du champ en Structure. Dans le cas contraire, elle retourne toujours ",(0,r.jsx)(n.strong,{children:"Faux"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Cette commande ne peut pas \xeatre utilis\xe9e avec des objets et des propri\xe9t\xe9s d'objets. Les valeurs Null contenues dans les champs objet sont g\xe9r\xe9es \xe0 l'aide de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/null",children:"Null"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/null",children:"Null"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-field-value-null",children:"SET FIELD VALUE NULL"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"964"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var l=s(667294);let r={},t=l.createContext(r);function d(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);