"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94120"],{212136:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/locked-by","title":"LOCKED BY","description":"LOCKED BY ( {tabla ;} proceso ; usuario4D ; sesionUsuario ; nombreProceso )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/locked-by.md","sourceDirName":"commands-legacy","slug":"/commands/locked-by","permalink":"/docs/es/20-R7/commands/locked-by","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flocked-by.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"locked-by","title":"LOCKED BY","slug":"/commands/locked-by","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Locked","permalink":"/docs/es/20-R7/commands/locked"},"next":{"title":"Locked records info","permalink":"/docs/es/20-R7/commands/locked-records-info"}}'),o=s("785893"),d=s("250065");let i={id:"locked-by",title:"LOCKED BY",slug:"/commands/locked-by",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LOCKED BY"})," ( {",(0,o.jsx)(n.em,{children:"tabla"})," ;} ",(0,o.jsx)(n.em,{children:"proceso"})," ; ",(0,o.jsx)(n.em,{children:"usuario4D"})," ; ",(0,o.jsx)(n.em,{children:"sesionUsuario"})," ; ",(0,o.jsx)(n.em,{children:"nombreProceso"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tabla"}),(0,o.jsx)(n.td,{children:"Table"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Tabla a verificar si el registro est\xe1 bloqueado o Tabla por defecto, si se omite"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"proceso"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"N\xfamero de referencia del proceso"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"usuario4D"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nombre del usuario 4D"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sesionUsuario"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nombre del usuario que inici\xf3 la sesion de trabajo"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nombreProceso"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nombre del proceso"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["LOCKED BY devuelve la informaci\xf3n sobre el usuario y el proceso que tiene bloqueado un registro. El n\xfamero del proceso (*), el nombre de usuario en la aplicaci\xf3n 4D y en el sistema as\xed como el nombre del proceso son devueltos en las variables ",(0,o.jsx)(n.em,{children:"proceso"}),", ",(0,o.jsx)(n.em,{children:"usuario4D"}),", ",(0,o.jsx)(n.em,{children:"sesionUsuario"}),", y ",(0,o.jsx)(n.em,{children:"nombreProceso"}),". Puede utilizar esta informaci\xf3n en una caja de di\xe1logo personalizada para advertir al usuario cuando un registro est\xe1 bloqueado."]}),"\n",(0,o.jsx)(n.p,{children:'(*) Este es el n\xfamero del proceso en la m\xe1quina donde se ejecuta el c\xf3digo que origina el bloqueo del registro. En el caso de un trigger o un m\xe9todo que se ejecuta en el servidor, se devuelve el n\xfamero del proceso "gemelo" en la m\xe1quina servidor. En el caso de un m\xe9todo que se ejecuta en una aplicaci\xf3n remota, se devuelve el n\xfamero del proceso en la m\xe1quina remota.'}),"\n",(0,o.jsxs)(n.p,{children:["Si el registro no est\xe1 bloqueado, ",(0,o.jsx)(n.em,{children:"proceso"})," devuelve 0 y ",(0,o.jsx)(n.em,{children:"usuario"}),", ",(0,o.jsx)(n.em,{children:"equipo"}),", y ",(0,o.jsx)(n.em,{children:"nombreProceso"})," devuelven cadenas vac\xedas. Si trata de cargar en modo lectura/escritura un registro que ha sido borrado, ",(0,o.jsx)(n.em,{children:"proceso"})," devuelve -1 y ",(0,o.jsx)(n.em,{children:"usuario"}),", ",(0,o.jsx)(n.em,{children:"equipo"}),", y ",(0,o.jsx)(n.em,{children:"nombreProceso"})," devuelven cadenas vac\xedas."]}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro ",(0,o.jsx)(n.em,{children:"usuario4D"}),"  devuelto corresponde al nombre del usuario definido en el editor de contrase\xf1as de 4D o el alias de usuario definido con ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-user-alias",children:"SET USER ALIAS"})," (si lo hay). Si no hay sistema de contrase\xf1as, devuelve \u201CDise\xf1ador\u201D."]}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro ",(0,o.jsx)(n.em,{children:"sesionUsuario"})," devuelto corresponde al nombre del usuario que abri\xf3 la sesi\xf3n en el equipo cliente (este nombre aparece en la ventana de administraci\xf3n de 4D Server para cada proceso abierto)."]}),"\n",(0,o.jsxs)(n.p,{children:["Si el registro ha sido bloqueado por una ",(0,o.jsx)(n.em,{children:"petici\xf3n $lock REST"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"proceso"})," devuelve -2"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"usuario4D"}),' devuelve ""']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"sesionUsuario"}),' devuelve ""']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"nombreProceso"}),' devuelve la direcci\xf3n IP del locker, p. ej. "127.0.0.1"']}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/locked",children:"Locked"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:"Record Locking"})]}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"353"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var r=s(667294);let o={},d=r.createContext(o);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);