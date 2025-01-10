"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77584"],{227923:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/clear-variable","title":"CLEAR VARIABLE","description":"CLEAR VARIABLE ( variable )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/clear-variable.md","sourceDirName":"commands-legacy","slug":"/commands/clear-variable","permalink":"/docs/fr/commands/clear-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclear-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"clear-variable","title":"CLEAR VARIABLE","slug":"/commands/clear-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Variables","permalink":"/docs/fr/category/variables"},"next":{"title":"LOAD VARIABLES","permalink":"/docs/fr/commands/load-variables"}}'),a=s("785893"),l=s("250065");let t={id:"clear-variable",title:"CLEAR VARIABLE",slug:"/commands/clear-variable",displayed_sidebar:"docs"},i=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"CLEAR VARIABLE"})," ( ",(0,a.jsx)(n.em,{children:"variable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Param\xe8tre"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"variable"}),(0,a.jsx)(n.td,{children:"Variable"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nom de la variable \xe0 effacer"})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"CLEAR VARIABLE"})," r\xe9initialise ",(0,a.jsx)(n.em,{children:"variable"})," \xe0 la valeur par d\xe9faut de son type (par exemple cha\xeene vide pour les types Texte, 0 \u2014 z\xe9ro \u2014 pour les variables num\xe9riques, aucun \xe9l\xe9ment pour un tableau etc.). La variable existe toujours en m\xe9moire."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note :"})," Pour plus d'informations sur les valeurs par d\xe9faut du type, veuillez consulter le paragraphe ",(0,a.jsx)(n.em,{children:"Valeurs par d\xe9faut"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["La variable pass\xe9e dans ",(0,a.jsx)(n.em,{children:"variable"})," peut \xeatre une variable locale, process ou interprocess."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note :"})," Il n'est pas n\xe9cessaire d'effacer les variables process \xe0 la fin de l'ex\xe9cution d'un process, 4D s'en charge automatiquement. De m\xeame, chaque variable locale est automatiquement effac\xe9e \xe0 la fin de l'ex\xe9cution de la m\xe9thode dans laquelle elle a \xe9t\xe9 cr\xe9\xe9e."]}),"\n",(0,a.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,a.jsxs)(n.p,{children:["Dans un formulaire, vous utilisez une liste d\xe9roulante appel\xe9e ",(0,a.jsx)(n.em,{children:"asMalListeD"})," n'ayant qu'un r\xf4le d'interface utilisateur. Autrement dit, vous exploitez ce tableau lors de la saisie de donn\xe9es, mais une fois que le formulaire est referm\xe9, vous n'en avez plus besoin. Par cons\xe9quent, lors de l'\xe9v\xe9nement On Unload, vous effacez simplement le tableau :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode objet liste d\xe9roulante asMalListeD\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0// Initialiser le tableau comme vous le souhaitez...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(63;asMalListeD;...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=Sur lib\xe9ration)\n\xa0\xa0// Vous n'avez plus besoin du tableau\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(asMalListeD)\n\xa0\xa0// ...\n\xa0End case\n"})}),"\n",(0,a.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/fr/commands/undefined",children:"Undefined"})}),"\n",(0,a.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,a.jsx)(n.td,{children:"89"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var r=s(667294);let a={},l=r.createContext(a);function t(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);