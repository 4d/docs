"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30332"],{503136:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/method-open-path","title":"METHOD OPEN PATH","description":"METHOD OPEN PATH ( chemin {; line}{; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/method-open-path.md","sourceDirName":"commands-legacy","slug":"/commands/method-open-path","permalink":"/docs/fr/20-R8/commands/method-open-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-open-path.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-open-path","title":"METHOD OPEN PATH","slug":"/commands/method-open-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET PATHS FORM","permalink":"/docs/fr/20-R8/commands/method-get-paths-form"},"next":{"title":"METHOD RESOLVE PATH","permalink":"/docs/fr/20-R8/commands/method-resolve-path"}}'),r=t("785893"),d=t("250065");let o={id:"method-open-path",title:"METHOD OPEN PATH",slug:"/commands/method-open-path",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"METHOD OPEN PATH"})," ( ",(0,r.jsx)(n.em,{children:"chemin"})," {; ",(0,r.jsx)(n.em,{children:"line"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"chemin"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Chemin de la m\xe9thode \xe0 ouvrir"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"line"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Line number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si pass\xe9 = la commande s\u2019applique \xe0 la base h\xf4te lorsqu\u2019elle est ex\xe9cut\xe9e depuis un composant (param\xe8tre ignor\xe9 hors de ce contexte)"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"METHOD OPEN PATH"})," ouvre, dans l\u2019\xe9diteur de m\xe9thodes de 4D, la m\xe9thode dont vous avez pass\xe9 le chemin d\u2019acc\xe8s interne dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"chemin"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Cette commande est asynchrone : elle retourne imm\xe9diatement \xe0 la m\xe9thode d'appel et n'attend pas l'ouverture de l'\xe9diteur de m\xe9thode."}),"\n",(0,r.jsxs)(n.p,{children:["Cette commande peut ouvrir tous les types de m\xe9thodes (objet, formulaire, trigger, projet ou base). La m\xe9thode doit d\xe9j\xe0 exister. Si le param\xe8tre ",(0,r.jsx)(n.em,{children:"chemin"}),' ne correspond pas \xe0 une m\xe9thode existante, l\u2019erreur -9801 "Impossible d\u2019ouvrir la m\xe9thode" est retourn\xe9e.']}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez ex\xe9cuter cette commande depuis un composant, mais dans ce cas vous devez passer le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"})," car l\u2019acc\xe8s en \xe9criture au code du composant n\u2019est pas possible. Si vous omettez le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"})," dans ce contexte, l\u2019erreur -9763 est g\xe9n\xe9r\xe9e."]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Commandes du th\xe8me Acc\xe8s objets d\xe9veloppement"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/method-get-path",children:"METHOD Get path"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1213"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var s=t(667294);let r={},d=s.createContext(r);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);