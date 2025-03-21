"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18988"],{631488:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/qr-on-command","title":"QR ON COMMAND","description":"QR ON COMMAND ( area ; nomMetodo )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-on-command.md","sourceDirName":"commands-legacy","slug":"/commands/qr-on-command","permalink":"/docs/es/commands/qr-on-command","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-on-command.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-on-command","title":"QR ON COMMAND","slug":"/commands/qr-on-command","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR New offscreen area","permalink":"/docs/es/commands/qr-new-offscreen-area"},"next":{"title":"QR REPORT","permalink":"/docs/es/commands/qr-report"}}'),d=r("785893"),o=r("250065");let t={id:"qr-on-command",title:"QR ON COMMAND",slug:"/commands/qr-on-command",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"QR ON COMMAND"})," ( ",(0,d.jsx)(n.em,{children:"area"})," ; ",(0,d.jsx)(n.em,{children:"nomMetodo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"area"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nomMetodo"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nombre del m\xe9todo a llamar"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando QR ON COMMAND ejecuta el m\xe9todo proyecto 4D pasado en el par\xe1metro ",(0,d.jsx)(n.em,{children:"nomMetodo"})," cuando un comando del editor de informes r\xe1pidos es llamado por el usuario, seleccionando un comando de men\xfa o haciendo clic en un bot\xf3n."]}),"\n",(0,d.jsxs)(n.p,{children:["Si ",(0,d.jsx)(n.em,{children:"area"})," es igual a cero, ",(0,d.jsx)(n.em,{children:"nomMetodo"}),' se aplicar\xe1 a todas las \xe1reas del editor de informes r\xe1pidos hasta que se cierre la base o se ejecute la siguiente instrucci\xf3n: QR ON COMMAND(0;"").']}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"nomMetodo"})," recibe dos par\xe1metros:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"$1"})," es la referencia del \xe1rea (Entero largo)."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"$2"})," es el n\xfamero del comando seleccionado (Entero largo). Puede comparar este valor con las constantes del tema ",(0,d.jsx)(n.em,{children:"QR Comandos"}),":"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Comentario"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr cmd generate"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"2008"}),(0,d.jsxs)(n.td,{children:["Compatible editor 64 bits (uso del comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/qr-run",children:"QR RUN"})," recomendado)"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr cmd page setup"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"2006"}),(0,d.jsx)(n.td,{children:"Compatible editor 64 bits"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr cmd print preview"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"2007"}),(0,d.jsx)(n.td,{children:"Compatible editor 64 bits"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," si planea compilar la base, es necesario declarar expl\xedcitamente los par\xe1metros ",(0,d.jsx)(n.em,{children:"$1"})," y ",(0,d.jsx)(n.em,{children:"$2"})," como Enteros largos, incluso si no los utiliza."]}),"\n",(0,d.jsxs)(n.p,{children:["Si quiere que el comando inicial se ejecute, debe incluir la siguiente instrucci\xf3n en el m\xe9todo: ",(0,d.jsx)(n.a,{href:"/docs/es/commands/qr-execute-command",children:"QR EXECUTE COMMAND"}),"($1;$2)."]}),"\n",(0,d.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,d.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850."]}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"QR Comandos"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/qr-execute-command",children:"QR EXECUTE COMMAND"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/qr-get-command-status",children:"QR Get command status"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"790"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifica variables"}),(0,d.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return t}});var s=r(667294);let d={},o=s.createContext(d);function t(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);