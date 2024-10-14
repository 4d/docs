"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74405],{893696:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(474848),s=t(28453);const r={id:"onCloseBox",title:"On Close Box"},i=void 0,l={id:"Events/onCloseBox",title:"On Close Box",description:"| Code | Peut \xeatre appel\xe9 par | D\xe9finition                                       |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Events/onCloseBox.md",sourceDirName:"Events",slug:"/Events/onCloseBox",permalink:"/docs/fr/19/Events/onCloseBox",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonCloseBox.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onCloseBox",title:"On Close Box"},sidebar:"docs",previous:{title:"On Clicked",permalink:"/docs/fr/19/Events/onClicked"},next:{title:"On Close Detail",permalink:"/docs/fr/19/Events/onCloseDetail"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Code"}),(0,o.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,o.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"22"}),(0,o.jsx)(n.td,{children:"Formulaire"}),(0,o.jsx)(n.td,{children:"La case de fermeture de la fen\xeatre a \xe9t\xe9 cliqu\xe9e"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["L'\xe9v\xe9nement ",(0,o.jsx)(n.code,{children:"On Close Box"})," est g\xe9n\xe9r\xe9 lorsque l'utilisateur clique sur la case fermeture de la fen\xeatre."]}),"\n",(0,o.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,o.jsx)(n.p,{children:"Cet exemple illustre comment vous pouvez r\xe9pondre \xe0 un \xe9v\xe9nement de fermeture de fen\xeatre \xe0 l'aide d'un formulaire utilis\xe9 pour la saisie de donn\xe9es d'enregistrement :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'  //M\xe9thode pour un formulaire d\'entr\xe9e\n $vpFormTable:=Current form table\n Case of\n  //...\n    :(Form event code=On Close Box)\n       If(Modified record($vpFormTable->))\n          CONFIRM("This record has been modified. Save Changes?")\n          Save Changes?")\n          If(OK=1)\n             ACCEPT\n          Else\n             CANCEL\n          End if\n       Else\n          CANCEL\n       End if\n  //...\n //statement(s)\n End case\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(296540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);