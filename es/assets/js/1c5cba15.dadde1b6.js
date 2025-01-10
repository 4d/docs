"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81721"],{75113:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/set-group-access","title":"SET GROUP ACCESS","description":"SET GROUP ACCESS {( grupos )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-group-access.md","sourceDirName":"commands-legacy","slug":"/commands/set-group-access","permalink":"/docs/es/commands/set-group-access","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-group-access.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-group-access","title":"SET GROUP ACCESS","slug":"/commands/set-group-access","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is user deleted","permalink":"/docs/es/commands/is-user-deleted"},"next":{"title":"Set group properties","permalink":"/docs/es/commands/set-group-properties"}}'),a=n("785893"),c=n("250065");let o={id:"set-group-access",title:"SET GROUP ACCESS",slug:"/commands/set-group-access",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"SET GROUP ACCESS"})," {( ",(0,a.jsx)(s.em,{children:"grupos"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Par\xe1metro"}),(0,a.jsx)(s.th,{children:"Tipo"}),(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,a.jsx)(s.tbody,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"grupos"}),(0,a.jsx)(s.td,{children:"Collection"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"Nombre de los grupos a los que debe pertenecer la cuenta de usuario 4D durante la sesi\xf3n"})]})})]}),"\n",(0,a.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(s.p,{children:["El comando ",(0,a.jsx)(s.strong,{children:"SET GROUP ACCESS"})," modifica las membres\xedas de la cuenta de usuario 4D para la sesi\xf3n actual. Restablece toda membres\xeda a un grupo anterior y define las nuevas membres\xedas a los ",(0,a.jsx)(s.em,{children:"grupos"})," listados."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Notas:"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["El alcance de este comando es la sesi\xf3n actual. Llamar a ",(0,a.jsx)(s.a,{href:"/docs/es/commands/change-current-user",children:"CHANGE CURRENT USER"})," despu\xe9s, por ejemplo, restablecer\xeda las membres\xedas definidas."]}),"\n",(0,a.jsx)(s.li,{children:"Este comando solo se puede invocar desde aplicaciones 4D remotas o 4D mono usuario. No est\xe1 permitido en 4D Server."}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Pase en el par\xe1metro ",(0,a.jsx)(s.em,{children:"grupos"})," una colecci\xf3n de nombres de grupo existentes a los que debe pertenecer la cuenta de usuario 4D (si no existe un nombre de grupo, se ignora). Si pasa una colecci\xf3n vac\xeda, la cuenta de usuario 4D ya no pertenecer\xe1 a ning\xfan grupo."]}),"\n",(0,a.jsxs)(s.p,{children:["Si omite el par\xe1metro ",(0,a.jsx)(s.em,{children:"grupos"}),", las membres\xedas de la cuenta de usuario 4D se restablecen a las membres\xedas de grupo almacenadas en el disco."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Nota:"}),(0,a.jsx)(s.br,{}),'\ncuando una membres\xeda grupal ofrece acceso a una funcionalidad "serializada" (por ejemplo, un plug-in), se utiliza una licencia correspondiente y permanecer\xe1 adjunta a la cuenta de usuario 4D hasta el final de la sesi\xf3n, incluso si se llama el comando ',(0,a.jsx)(s.strong,{children:"SET GROUP ACCESS"})," y se cancela la se llama al grupo."]}),"\n",(0,a.jsx)(s.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(s.p,{children:'Desea promocionar al usuario actual a los grupos "admin" y "plugins" para la sesi\xf3n:'}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'\xa0$groups:=New collection("admin";"plugins")\n\xa0SET GROUP ACCESS($groups)\n'})}),"\n",(0,a.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/es/commands/get-group-access",children:"Get group access"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/es/commands/get-plugin-access",children:"Get plugin access"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/es/commands/set-plugin-access",children:"SET PLUGIN ACCESS"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/es/commands/set-user-alias",children:"SET USER ALIAS"})]}),"\n",(0,a.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"N\xfamero de comando"}),(0,a.jsx)(s.td,{children:"1737"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Hilo seguro"}),(0,a.jsx)(s.td,{children:"\u2713"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Prohibido en el servidor"}),(0,a.jsx)(s.td,{})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return o}});var r=n(667294);let a={},c=r.createContext(a);function o(e){let s=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);