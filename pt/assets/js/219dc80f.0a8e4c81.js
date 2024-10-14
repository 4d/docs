"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58136],{832352:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var t=o(474848),s=o(28453);const d={id:"onCloseBox",title:"On Close Box"},r=void 0,i={id:"Events/onCloseBox",title:"On Close Box",description:"| Code | Pode ser chamado por | Defini\xe7\xe3o                              |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Events/onCloseBox.md",sourceDirName:"Events",slug:"/Events/onCloseBox",permalink:"/docs/pt/20/Events/onCloseBox",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonCloseBox.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onCloseBox",title:"On Close Box"},sidebar:"docs",previous:{title:"On Clicked",permalink:"/docs/pt/20/Events/onClicked"},next:{title:"On Close Detail",permalink:"/docs/pt/20/Events/onCloseDetail"}},l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Code"}),(0,t.jsx)(n.th,{children:"Pode ser chamado por"}),(0,t.jsx)(n.th,{children:"Defini\xe7\xe3o"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"22"}),(0,t.jsx)(n.td,{children:"Formul\xe1rio"}),(0,t.jsx)(n.td,{children:"A caixa de fecho da janela foi clicada"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O evento ",(0,t.jsx)(n.code,{children:"On Close Box"})," \xe9 gerado quando o utilizador clica na caixa de fecho da janela."]}),"\n",(0,t.jsx)(n.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Este exemplo mostra como responder a um evento de fecho de janela com um formul\xe1rio utilizado para a introdu\xe7\xe3o de dados de registo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'  //M\xe9todo para um formul\xe1rio de entrada\n $vpFormTable:=Current form table\n Case of\n  //...\n    :(Form event code=On Close Box)\n       If(Modified record($vpFormTable->))\n          CONFIRM("Este registo foi modificado. Save Changes?")\n          Save Changes?")\n          Save Changes?")\n          If(OK=1)\n             ACCEPT\n          Else\n             CANCEL\n          End if\n       Else\n          CANCEL\n       End if\n  //...\n //statement(s)\n End case\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>i});var t=o(296540);const s={},d=t.createContext(s);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);