"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4419],{710726:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>r});var s=o(474848),i=o(28453);const t={id:"set-default-century",title:"SET DEFAULT CENTURY",slug:"/commands/set-default-century",displayed_sidebar:"docs"},d=void 0,c={id:"commands-legacy/set-default-century",title:"SET DEFAULT CENTURY",description:"SET DEFAULT CENTURY ( siglo {; a\xf1oPivote} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-default-century.md",sourceDirName:"commands-legacy",slug:"/commands/set-default-century",permalink:"/docs/es/commands/set-default-century",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-default-century.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-default-century",title:"SET DEFAULT CENTURY",slug:"/commands/set-default-century",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Month of",permalink:"/docs/es/commands/month-of"},next:{title:"Tickcount",permalink:"/docs/es/commands/tickcount"}},l={},r=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4}];function a(e){const n={code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET DEFAULT CENTURY"})," ( ",(0,s.jsx)(n.em,{children:"siglo"})," {; ",(0,s.jsx)(n.em,{children:"a\xf1oPivote"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"siglo"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Siglo por defecto (menos uno) para la entrada de a\xf1os con dos d\xedgitos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"a\xf1oPivote"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"A\xf1o pivote para la entrada de a\xf1os con dos d\xedgitos"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"El comando SET DEFAULT CENTURY permite especificar el siglo por defecto y el a\xf1o pivote utilizado por 4D cuando introduce una fecha con s\xf3lo dos d\xedgitos para el a\xf1o."}),"\n",(0,s.jsx)(n.p,{children:"El valor del a\xf1o pivote define la forma como 4D interpretar\xe1 la entrada de datos de una fecha con un a\xf1o de dos d\xedgitos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si el a\xf1o es mayor o igual al a\xf1o pivote, 4D utiliza el siglo actual por defecto."}),"\n",(0,s.jsx)(n.li,{children:"Si el a\xf1o es menor que el a\xf1o pivote, 4D utiliza el siguiente siglo (relativo al siglo actual por defecto)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Por defecto, 4D establece el siglo 20 como el siglo por defecto y utiliza 30 como a\xf1o pivote. Por ejemplo:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"25/01/97 significa 25 de enero de 1997."}),"\n",(0,s.jsx)(n.li,{children:"25/01/30 significa 25 de enero de 1930."}),"\n",(0,s.jsx)(n.li,{children:"25/01/29 significa 25 de enero de 2029."}),"\n",(0,s.jsx)(n.li,{children:"25/01/07 significa 25 de enero de 2007."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Para cambiar este comportamiento por defecto, ejecute el comando SET DEFAULT CENTURY. El efecto del comando es inmediato. Puede pasar \xfanicamente un nuevo siglo por defecto, o un nuevo siglo por defecto y un a\xf1o pivote."}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa s\xf3lo un nuevo siglo por defecto menos uno en ",(0,s.jsx)(n.em,{children:"siglo"}),", 4D interpretar\xe1 todos los a\xf1os introducidos con dos d\xedgitos como que pertenecen a este siglo."]}),"\n",(0,s.jsx)(n.p,{children:"Por ejemplo, despu\xe9s de llamar:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET DEFAULT CENTURY(20)\xa0// Fijar el siglo 21 como siglo por defecto\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"25/01/97 significa 25 de enero de 2097"}),"\n",(0,s.jsx)(n.li,{children:"25/01/07 significa 25 de enero de 2007"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Adicionalmente, puede especificar el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"a\xf1oPivote"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Por ejemplo, despu\xe9s de este llamado, en el cual el a\xf1o pivote es 1995:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET DEFAULT CENTURY(19;95)\xa0// Fijar el siglo 21 como siglo por defecto si el a\xf1o es menor que 95\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"25/01/97 significa 25 de enero de 1997"}),"\n",(0,s.jsx)(n.li,{children:"25/01/07 significa 25 de enero de, 2007"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," este comando afecta \xfanicamente c\xf3mo 4D interpreta las fechas introducidas con a\xf1os de dos d\xedgitos."]}),"\n",(0,s.jsx)(n.p,{children:"En todos los casos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"25/01/1997 significa enero 25, 1997"}),"\n",(0,s.jsx)(n.li,{children:"25/01/2097 significa enero 25, 2097"}),"\n",(0,s.jsx)(n.li,{children:"25/01/1907 significa enero 25, 1907"}),"\n",(0,s.jsx)(n.li,{children:"25/01/2007 significa enero 25, 2007"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Este comando afecta s\xf3lo la entrada de datos. No tiene ning\xfan efecto en el almacenamiento de datos, c\xe1lculos, etc."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>c});var s=o(296540);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);