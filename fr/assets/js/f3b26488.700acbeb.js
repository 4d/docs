"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89460"],{944173:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>c,assets:()=>o,toc:()=>d,contentTitle:()=>r});var c=JSON.parse('{"id":"commands-legacy/contextual-click","title":"Contextual click","description":"Contextual click  : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/contextual-click.md","sourceDirName":"commands-legacy","slug":"/commands/contextual-click","permalink":"/docs/fr/20-R7/commands/contextual-click","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcontextual-click.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"contextual-click","title":"Contextual click","slug":"/commands/contextual-click","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Clickcount","permalink":"/docs/fr/20-R7/commands/clickcount"},"next":{"title":"Deactivated","permalink":"/docs/fr/20-R7/commands/deactivated"}}'),l=t("785893"),s=t("250065");let i={id:"contextual-click",title:"Contextual click",slug:"/commands/contextual-click",displayed_sidebar:"docs"},r=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Contextual click"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"R\xe9sultat"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Vrai si un clic contextuel a \xe9t\xe9 d\xe9tect\xe9, sinon Faux"})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"Contextual click"})," retourne Vrai si un clic de type contextuel a \xe9t\xe9 effectu\xe9 :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Sous Windows et Mac OS, les clics contextuels sont effectu\xe9s avec le bouton droit de la souris."}),"\n",(0,l.jsxs)(n.li,{children:["Sous Mac OS, des clics contexuels peuvent \xe9galement \xeatre g\xe9n\xe9r\xe9s \xe0 l\u2019aide de la combinaison ",(0,l.jsx)(n.strong,{children:"Control+clic"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Cette commande doit \xeatre appel\xe9e uniquement dans le cadre de l\u2019\xe9v\xe9nement formulaire On Clicked. Il est donc n\xe9cessaire de v\xe9rifier en mode D\xe9veloppement que cet \xe9v\xe9nement a bien \xe9t\xe9 coch\xe9 dans les Propri\xe9t\xe9s du formulaire et/ou de l\u2019objet."}),"\n",(0,l.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:"Cette m\xe9thode, associ\xe9e \xe0 une zone de d\xe9filement, permet de changer la valeur d\u2019un \xe9l\xe9ment de tableau \xe0 l\u2019aide d\u2019un menu contextuel :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0If(Contextual click)\n\xa0\xa0\xa0\xa0If(Pop up menu("Vrai;Faux")=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0monTableau{monTableau}:="Vrai"\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0monTableau{monTableau}:="Faux"\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,l.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/form-event-code",children:"Form event code"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R7/commands/right-click",children:"Right click"})]}),"\n",(0,l.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var c=t(667294);let l={},s=c.createContext(l);function i(e){let n=c.useContext(s);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);