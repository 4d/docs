"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59470"],{964480:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"ViewPro/commands/vp-flush-commands","title":"VP FLUSH COMMANDS","description":"VP FLUSH COMMANDS (  vpAreaName : Text )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-flush-commands.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-flush-commands","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-flush-commands","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-flush-commands.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-flush-commands","title":"VP FLUSH COMMANDS"},"sidebar":"docs","previous":{"title":"VP Find table","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-find-table"},"next":{"title":"VP Font to object","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-font-to-object"}}'),s=t("785893"),o=t("250065");let d={id:"vp-flush-commands",title:"VP FLUSH COMMANDS"},i=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function l(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP FLUSH COMMANDS"})," (  ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,s.jsx)(n.td,{})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP FLUSH COMMANDS"})," command immediately executes stored commands and clears the command buffer."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["Afin d'am\xe9liorer la performance et de r\xe9duire le nombre de requ\xeates envoy\xe9es, les commandes 4D View Pro appel\xe9es par le d\xe9veloppeur sont stock\xe9es temporairement dans un buffer de commandes. When called, ",(0,s.jsx)(n.code,{children:"VP FLUSH COMMANDS"})," executes the commands as a batch when leaving the method and empties the contents of the command buffer."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez tracer l'ex\xe9cution des commandes et vider le buffer :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\n VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")\n VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")\n VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")\n \n VP FLUSH COMMANDS("ViewProArea1")\n TRACE\n'})})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var r=t(667294);let s={},o=r.createContext(s);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);