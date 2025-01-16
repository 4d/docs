"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41152"],{724436:function(e,n,o){o.r(n),o.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"Events/onCloseBox","title":"On Close Box","description":"| Code | Puede ser llamado por | Definici\xf3n                                       |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/Events/onCloseBox.md","sourceDirName":"Events","slug":"/Events/onCloseBox","permalink":"/docs/es/Events/onCloseBox","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonCloseBox.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onCloseBox","title":"On Close Box"},"sidebar":"docs","previous":{"title":"On Clicked","permalink":"/docs/es/Events/onClicked"},"next":{"title":"On Close Detail","permalink":"/docs/es/Events/onCloseDetail"}}'),s=o("785893"),r=o("250065");let i={id:"onCloseBox",title:"On Close Box"},d=void 0,l={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Puede ser llamado por"}),(0,s.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"22"}),(0,s.jsx)(n.td,{children:"Formulario"}),(0,s.jsx)(n.td,{children:"Se ha presionado la caja de cierre de la ventana"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El evento ",(0,s.jsx)(n.code,{children:"On Close Box"})," se genera cuando el usuario hace clic en una caja de cierre de la ventana."]}),"\n",(0,s.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Este ejemplo muestra c\xf3mo responder a un evento de cierre de ventana con un formulario utilizado para la entrada de datos de registro:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'  //M\xe9todo para un formulario de entrada\n $vpFormTable:=Current form table\n Case of\n  //...\n    :(Form event code=On Close Box)\n       If(Modified record($vpFormTable->))\n          CONFIRM("Este registro ha sido modificado. \xbfGuardar cambios?")\n          If(OK=1)\n             ACCEPT\n          Else\n             CANCEL\n          End if\n       Else\n          CANCEL\n       End if\n  //...\n End case\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return i}});var t=o(667294);let s={},r=t.createContext(s);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);