"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49346],{827227:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var n=a(474848),d=a(28453);const r={id:"validate-password",title:"Validate password",slug:"/commands/validate-password",displayed_sidebar:"docs"},o=void 0,t={id:"commands-legacy/validate-password",title:"Validate password",description:"Validate password ( refUsuario ; senha {; digest} ) -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/validate-password.md",sourceDirName:"commands-legacy",slug:"/commands/validate-password",permalink:"/docs/pt/commands/validate-password",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvalidate-password.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"validate-password",title:"Validate password",slug:"/commands/validate-password",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"USERS TO BLOB",permalink:"/docs/pt/commands/users-to-blob"},next:{title:"CLEAR VARIABLE",permalink:"/docs/pt/commands/clear-variable"}},i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Validate password"})," ( ",(0,n.jsx)(s.em,{children:"refUsuario"})," ; ",(0,n.jsx)(s.em,{children:"senha"})," {; ",(0,n.jsx)(s.em,{children:"digest"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Par\xe2metro"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"refUsuario"}),(0,n.jsx)(s.td,{children:"Integer, Text"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"ID de usu\xe1rio"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"senha"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Senha n\xe3o criptografada"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"digest"}),(0,n.jsx)(s.td,{children:"Boolean"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Senha digest = True, Senha texto plano (por padr\xe3o) = False"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Resultado"}),(0,n.jsx)(s.td,{children:"Boolean"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"TRUE= senha v\xe1lida; FALSE = senha inv\xe1lida"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,n.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(s.p,{children:["Validate password retorna True se a cadeia passada em ",(0,n.jsx)(s.em,{children:"senha"})," for a senha para a conta de usu\xe1rio cujo n\xfamero de refer\xeancia \xe9 passado em ",(0,n.jsx)(s.em,{children:"refUsuario"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["O par\xe2metro opcional ",(0,n.jsx)(s.em,{children:"digest"})," indica se o par\xe2metro ",(0,n.jsx)(s.em,{children:"senha"})," cont\xe9m uma senha em texto plano ou na senha em forma hash (modo digest):"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Se passar ",(0,n.jsx)(s.strong,{children:"True"}),", indica que o par\xe2metro ",(0,n.jsx)(s.em,{children:"senha"})," cont\xe9m uma senha em forma hash (modo digest),"]}),"\n",(0,n.jsxs)(s.li,{children:["Se passar ",(0,n.jsx)(s.strong,{children:"False"})," ou omite este par\xe2metro, indica que ",(0,n.jsx)(s.em,{children:"senha"})," cont\xe9m uma senha em texto plano."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Este par\xe2metro \xe9 particularmente \xfatil quando se utilizam m\xe9todos base de autentica\xe7\xe3o, em particular o ",(0,n.jsx)(s.a,{href:"on-4d-mobile-authentication-database-method.md",children:"On 4D Mobile Authentication database method"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"O comando \xe9 atrasado com o objetivo de evitar ataques de for\xe7a bruta (flooding), em outras palavras, tentativas de m\xfaltiplas combina\xe7\xf5es de nomes de usu\xe1rio/senha. Como resultado, depois da quarta chamada a este comando, n\xe3o se executa por um per\xedodo de 10 segundos. Este atraso \xe9 global a esta\xe7\xe3o de trabalho."}),"\n",(0,n.jsx)(s.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsx)(s.p,{children:"O exemplo verifica se a senha do usu\xe1rio \u201cHardy\u201d for \u201cLaurel\u201d:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0GET USER LIST(atNomeUsuario;aRefUsuario)\n\xa0$vlElem:=Find in array(atNomeUsuario;"Hardy")\n\xa0If($vlElem>0)\n\xa0\xa0\xa0\xa0If(Validate password(aRefUsuario{$vlElem};"Laurel"))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Sim")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Erro")\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Nome de usu\xe1rio desconhecido")\n\xa0End if\n'})}),"\n",(0,n.jsx)(s.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsxs)(s.p,{children:["No ",(0,n.jsx)(s.a,{href:"on-4d-mobile-authentication-database-method.md",children:"On 4D Mobile Authentication database method"}),", voc\xea pode provar um pedido de conex\xe3o (utilizando os usu\xe1rios 4D da base). Pode escrever:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"\xa0$0:=Validate password($1;$2;$3)\n"})}),"\n",(0,n.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/pt/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/commands/set-user-properties",children:"Set user properties"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/commands/web-validate-digest",children:"WEB Validate digest"})]})]})}function m(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>o,x:()=>t});var n=a(296540);const d={},r=n.createContext(d);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);