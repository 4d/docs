"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99065"],{222813:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>o,toc:()=>i,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/change-password","title":"CHANGE PASSWORD","description":"CHANGE PASSWORD ( contrase\xf1a )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/change-password.md","sourceDirName":"commands-legacy","slug":"/commands/change-password","permalink":"/docs/es/commands/change-password","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fchange-password.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"change-password","title":"CHANGE PASSWORD","slug":"/commands/change-password","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CHANGE CURRENT USER","permalink":"/docs/es/commands/change-current-user"},"next":{"title":"Current user","permalink":"/docs/es/commands/current-user"}}'),a=s("785893"),t=s("250065");let c={id:"change-password",title:"CHANGE PASSWORD",slug:"/commands/change-password",displayed_sidebar:"docs"},d=void 0,o={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"CHANGE PASSWORD"})," ( ",(0,a.jsx)(n.em,{children:"contrase\xf1a"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"contrase\xf1a"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nueva contrase\xf1a"})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["CHANGE PASSWORD cambia la contrase\xf1a del usuario actual. Este comando reemplaza la contrase\xf1a actual con la nueva contrase\xf1a que se pasa en ",(0,a.jsx)(n.em,{children:"contrase\xf1a"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Advertencia:"})," las contrase\xf1as diferencian los caracteres en may\xfasculas y min\xfasculas."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"El siguiente ejemplo permite al usuario cambiar su contrase\xf1a."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0CHANGE CURRENT USER\xa0// Mostrar la caja de di\xe1logo de contrase\xf1as\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$pw1:=Request("Introduzca la nueva contrase\xf1a para "+Current user)\n\xa0\xa0// La contrase\xf1a debe tener al menos cinco caracteres\n\xa0\xa0\xa0\xa0If(((OK=1)&($pw1#""))&(Length($pw1)>5))\n\xa0\xa0// Aseg\xfarese de que la contrase\xf1a haya sido introducida correctamente\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$pw2:=Request("Introduzca de nuevo la contrase\xf1a")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If((OK=1)&($pw1=$pw2))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CHANGE PASSWORD($pw2)\xa0// Cambiar la contrase\xf1a\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/change-current-user",children:"CHANGE CURRENT USER"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/object-set-font",children:"OBJECT SET FONT"})]}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"186"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var r=s(667294);let a={},t=r.createContext(a);function c(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);