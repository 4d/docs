"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["733"],{527149:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>u,assets:()=>l,toc:()=>a,frontMatter:()=>d});var t=JSON.parse('{"id":"Events/onCloseBox","title":"On Close Box","description":"| Code | Pode ser chamado por | Defini\xe7\xe3o                              |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Events/onCloseBox.md","sourceDirName":"Events","slug":"/Events/onCloseBox","permalink":"/docs/pt/20/Events/onCloseBox","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonCloseBox.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"onCloseBox","title":"On Close Box"},"sidebar":"docs","previous":{"title":"On Clicked","permalink":"/docs/pt/20/Events/onClicked"},"next":{"title":"On Close Detail","permalink":"/docs/pt/20/Events/onCloseDetail"}}'),s=o("785893"),r=o("250065");let d={id:"onCloseBox",title:"On Close Box"},i=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Pode ser chamado por"}),(0,s.jsx)(n.th,{children:"Defini\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"22"}),(0,s.jsx)(n.td,{children:"Formul\xe1rio"}),(0,s.jsx)(n.td,{children:"A caixa de fecho da janela foi clicada"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O evento ",(0,s.jsx)(n.code,{children:"On Close Box"})," \xe9 gerado quando o utilizador clica na caixa de fecho da janela."]}),"\n",(0,s.jsx)(n.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Este exemplo mostra como responder a um evento de fecho de janela com um formul\xe1rio utilizado para a introdu\xe7\xe3o de dados de registo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'  //M\xe9todo para um formul\xe1rio de entrada\n $vpFormTable:=Current form table\n Case of\n  //...\n    :(Form event code=On Close Box)\n       If(Modified record($vpFormTable->))\n          CONFIRM("Este registo foi modificado. Save Changes?")\n          Save Changes?")\n          Save Changes?")\n          If(OK=1)\n             ACCEPT\n          Else\n             CANCEL\n          End if\n       Else\n          CANCEL\n       End if\n  //...\n //statement(s)\n End case\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return d}});var t=o(667294);let s={},r=t.createContext(s);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);