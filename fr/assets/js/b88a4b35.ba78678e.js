"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25777"],{215486:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>m,assets:()=>l,toc:()=>o,frontMatter:()=>a});var s=JSON.parse('{"id":"commands-legacy/execute-method","title":"EXECUTE METHOD","description":"EXECUTE METHOD ( nomM\xe9thode {; r\xe9sultat {; param}}{; param2 ; ... ; paramN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/execute-method.md","sourceDirName":"commands-legacy","slug":"/commands/execute-method","permalink":"/docs/fr/commands/execute-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexecute-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"execute-method","title":"EXECUTE METHOD","slug":"/commands/execute-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current method name","permalink":"/docs/fr/commands/current-method-name"},"next":{"title":"Get pointer","permalink":"/docs/fr/commands/get-pointer"}}'),r=t("785893"),d=t("250065");let a={id:"execute-method",title:"EXECUTE METHOD",slug:"/commands/execute-method",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"EXECUTE METHOD"})," ( ",(0,r.jsx)(n.em,{children:"nomM\xe9thode"})," {; ",(0,r.jsx)(n.em,{children:"r\xe9sultat"})," {; ",(0,r.jsx)(n.em,{children:"param"}),"}}{; ",(0,r.jsx)(n.em,{children:"param2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"paramN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomM\xe9thode"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom de m\xe9thode projet \xe0 ex\xe9cuter"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"r\xe9sultat"}),(0,r.jsx)(n.td,{children:"Variable, *"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Variable recevant le r\xe9sultat de la m\xe9thode ou * pour une m\xe9thode ne retournant pas de r\xe9sultat"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"param"}),(0,r.jsx)(n.td,{children:"Expression"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Param\xe8tre(s) de la m\xe9thode"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"EXECUTE METHOD"})," provoque l\u2019ex\xe9cution de la m\xe9thode projet ",(0,r.jsx)(n.em,{children:"nomM\xe9thode"})," en lui passant \xe9ventuellement les param\xe8tres ",(0,r.jsx)(n.em,{children:"param1...paramN"}),". Vous pouvez passer tout nom de m\xe9thode appelable depuis la base ou le composant ex\xe9cutant la commande."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans ",(0,r.jsx)(n.em,{children:"r\xe9sultat"})," une variable devant recevoir le r\xe9sultat de l\u2019ex\xe9cution de ",(0,r.jsx)(n.em,{children:"nomM\xe9thode"})," (valeur plac\xe9e dans $0 \xe0 l\u2019int\xe9rieur de ",(0,r.jsx)(n.em,{children:"nomM\xe9thode"}),"). Si la m\xe9thode ne retourne pas de r\xe9sultat, passez ",(0,r.jsx)(n.em,{children:"*"})," comme deuxi\xe8me param\xe8tre. Si la m\xe9thode ne retourne pas de r\xe9sultat et ne n\xe9cessite pas non plus le passage de param\xe8tre(s), passez uniquement le param\xe8tre ",(0,r.jsx)(n.em,{children:"nomM\xe9thode"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Le contexte d\u2019ex\xe9cution est pr\xe9serv\xe9 dans la m\xe9thode appel\xe9e, ce qui signifie que le formulaire courant et l\u2019\xe9ventuel \xe9v\xe9nement formulaire courant restent d\xe9finis."}),"\n",(0,r.jsxs)(n.p,{children:["Si vous appelez cette commande depuis un composant et passez dans ",(0,r.jsx)(n.em,{children:"nomM\xe9thode"})," un nom de m\xe9thode appartenant \xe0 la base h\xf4te (ou inversement), la m\xe9thode doit avoir \xe9t\xe9 partag\xe9e (option \u201CPartager entre composants et base h\xf4te\u201D dans les propri\xe9t\xe9s de la m\xe9thode)."]}),"\n",(0,r.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"Si cette commande est ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0."}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/execute-formula",children:"EXECUTE FORMULA"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1007"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var s=t(667294);let r={},d=s.createContext(r);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);