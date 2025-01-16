"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11125"],{645031:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>o,assets:()=>d,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"Events/onCloseBox","title":"On Close Box","description":"| Code | Peut \xeatre appel\xe9 par | D\xe9finition                                       |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/Events/onCloseBox.md","sourceDirName":"Events","slug":"/Events/onCloseBox","permalink":"/docs/fr/20-R7/Events/onCloseBox","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonCloseBox.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onCloseBox","title":"On Close Box"},"sidebar":"docs","previous":{"title":"On Clicked","permalink":"/docs/fr/20-R7/Events/onClicked"},"next":{"title":"On Close Detail","permalink":"/docs/fr/20-R7/Events/onCloseDetail"}}'),r=t("785893"),s=t("250065");let l={id:"onCloseBox",title:"On Close Box"},i=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,r.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"22"}),(0,r.jsx)(n.td,{children:"Formulaire"}),(0,r.jsx)(n.td,{children:"La case de fermeture de la fen\xeatre a \xe9t\xe9 cliqu\xe9e"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["L'\xe9v\xe9nement ",(0,r.jsx)(n.code,{children:"On Close Box"})," est g\xe9n\xe9r\xe9 lorsque l'utilisateur clique sur la case fermeture de la fen\xeatre."]}),"\n",(0,r.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Cet exemple illustre comment vous pouvez r\xe9pondre \xe0 un \xe9v\xe9nement de fermeture de fen\xeatre \xe0 l'aide d'un formulaire utilis\xe9 pour la saisie de donn\xe9es d'enregistrement :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'  //M\xe9thode d\'un formulaire entr\xe9e\n $vpFormTable:=Current form table\n Case of\n  //...\n    :(Form event code=On Close Box)\n       If(Modified record($vpFormTable->))\n          CONFIRM("This record has been modified. Save Changes?")\n          If(OK=1)\n             ACCEPT\n          Else\n             CANCEL\n          End if\n       Else\n          CANCEL\n       End if\n  //...\n End case\n'})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var o=t(667294);let r={},s=o.createContext(r);function l(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);