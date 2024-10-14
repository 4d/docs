"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37217],{58608:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=o(474848),i=o(28453);const s={id:"overview",title:"CSM",sidebar_label:"CSM"},t=void 0,d={id:"MSC/overview",title:"CSM",description:"The Maintenance and Security Center (MSC) window contains all the tools needed for verification, analysis, maintenance, backup, compacting, and encrypting of data files. The MSC window is available in all 4D applications: 4D single user, 4D Server or 4D Desktop.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/MSC/overview.md",sourceDirName:"MSC",slug:"/MSC/overview",permalink:"/docs/pt/MSC/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Foverview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"overview",title:"CSM",sidebar_label:"CSM"},sidebar:"docs",previous:{title:"Managing 4D Licenses",permalink:"/docs/pt/Admin/licenses"},next:{title:"P\xe1gina de informa\xe7\xe3o",permalink:"/docs/pt/MSC/information"}},r={},c=[{value:"Acesso no modo de manuten\xe7\xe3o",id:"acesso-no-modo-de-manuten\xe7\xe3o",level:2},{value:"Acesso ao modo padr\xe3o",id:"acesso-ao-modo-padr\xe3o",level:2},{value:"Disponibilidade de funcionalidades",id:"disponibilidade-de-funcionalidades",level:2}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The Maintenance and Security Center (MSC) window contains all the tools needed for verification, analysis, maintenance, backup, compacting, and encrypting of data files. The MSC window is available in all 4D applications: 4D single user, 4D Server or 4D Desktop."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," la ventana del CSM no est\xe1 disponible desde una conexi\xf3n remota 4D."]}),"\n",(0,a.jsx)(n.p,{children:"Existem v\xe1rias maneiras de abrir a janela do CSM. The way it is accessed also determines the way the application project is opened: in \u201cmaintenance\u201d mode or \u201cstandard\u201d mode. In maintenance mode, the project is not opened by 4D, only its reference is provided to the MSC. No modo padr\xe3o, o projeto \xe9 aberto por 4D."}),"\n",(0,a.jsx)(n.h2,{id:"acesso-no-modo-de-manuten\xe7\xe3o",children:"Acesso no modo de manuten\xe7\xe3o"}),"\n",(0,a.jsxs)(n.p,{children:["In maintenance mode, only the MSC window is displayed (the project is not opened by the 4D application). This means that projects that are too damaged to be opened in standard mode by 4D can nevertheless be accessed. Adem\xe1s, algunas operaciones (compactaci\xf3n, reparaci\xf3n, etc.) requieren que el proyecto se abra en modo mantenimiento (ver ",(0,a.jsx)(n.a,{href:"#feature-availability",children:"Disponibilidad de las funcionalidades"}),")."]}),"\n",(0,a.jsx)(n.p,{children:"\xc9 poss\xedvel abrir o CSM em modo de manuten\xe7\xe3o a partir de dois locais:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"From the standard project opening dialog box"}),"\nThe standard Open dialog includes the ",(0,a.jsx)(n.strong,{children:"Maintenance Security Center"})," option from the menu associated with the ",(0,a.jsx)(n.strong,{children:"Open"})," button:\n",(0,a.jsx)(n.img,{src:o(357305).A+"",width:"748",height:"505"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Help/Maintenance Security Center"})," menu or ",(0,a.jsx)(n.strong,{children:"MSC"})," button in the tool bar (project not open)",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.img,{src:o(190134).A+"",width:"54",height:"53"}),(0,a.jsx)(n.br,{}),"\nWhen you call this function, a standard Open file dialog appears so that you can select the ",(0,a.jsx)(n.em,{children:".4DProject"})," or ",(0,a.jsx)(n.em,{children:".4dz"})," file of the to be examined. O projeto n\xe3o ser\xe1 aberto por 4D."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"acesso-ao-modo-padr\xe3o",children:"Acesso ao modo padr\xe3o"}),"\n",(0,a.jsx)(n.p,{children:"No modo standard, est\xe1 aberto um projeto. Neste modo, algumas fun\xe7\xf5es de manuten\xe7\xe3o n\xe3o est\xe3o dispon\xedveis. Existem v\xe1rias possibilidades de acesso \xe0 janela do CSM:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Use o menu **Centro de seguran\xe7a e manuten\xe7\xe3o ** ou o bot\xe3o ",(0,a.jsx)(n.strong,{children:"MSC"})," na barra de ferramentas 4D:",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.img,{src:o(190134).A+"",width:"54",height:"53"})]}),"\n",(0,a.jsx)(n.li,{children:"Use the \u201cmsc\u201d standard action that it is possible to associate with a menu command or a form object."}),"\n",(0,a.jsxs)(n.li,{children:["Utilice el comando ",(0,a.jsx)(n.code,{children:"OPEN SECURITY CENTER"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"disponibilidade-de-funcionalidades",children:"Disponibilidade de funcionalidades"}),"\n",(0,a.jsx)(n.p,{children:"Certas fun\xe7\xf5es do CSM n\xe3o est\xe3o dispon\xedveis dependendo do modo de abertura do CSM:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Backup function is only available when the project is open (the MSC must have been opened in standard mode)."}),"\n",(0,a.jsx)(n.li,{children:"Data compacting, rollback, restore, repair, and encryption functions can only be used with data files that are not open (the MSC must have been opened in maintenance mode). If these functions are tried while the project is open in standard mode, a dialog warns you that it implies that the application be closed and restarted in maintenance mode."}),"\n",(0,a.jsxs)(n.li,{children:["En las bases encriptadas, el acceso a los datos encriptados o al archivo .journal requiere que se proporcione una clave de datos de encriptaci\xf3n v\xe1lida (ver ",(0,a.jsx)(n.a,{href:"/docs/pt/MSC/encrypt",children:"P\xe1gina cifrado"}),"). Caso contr\xe1rio, os dados encriptados n\xe3o s\xe3o vis\xedveis."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},357305:(e,n,o)=>{o.d(n,{A:()=>a});const a=o.p+"assets/images/MSC_standardOpen-ef15ff019a0992eb692c97fb75fb9800.png"},190134:(e,n,o)=>{o.d(n,{A:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA1CAYAAAAK0RhzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAR5SURBVGhD7ZgPSBtXHMe/0c6V4R901TkdrVmymKHVrnMt1lFrlDgdadfCZgsiw9HObgyHA1e6qQhSpSDoECsrbCKDMiky6MQ/aLoK6hhLR+mSxkZNY0cnyvxTRTD1z+6dv8ZYtULvnTQhHzh4v997HPe59+53907x2+DMMrwQUSzyJe9yG51TwI/aXodPzNPwiXkaXisma7l3zs/DMWjFoPW2cFjgdM7j5V27EL37dSQefBcRkdE0ki+s3HMVW15exr/37+Ge7Q5sd/7GP/cdUKvVSExMRHx8PGZmZjAwMACrVZAdHERISIggGgGVNh77k1PxQkAAnUkaXMX6r7ejp6sNYWFhokRCQgJiY2MR4Haxk5OTojxjcXERdrtdlGSyo6OjUGu0yPnkC7FfClzFyr/6FDU1NQgNDaXMetzFnmR2dhalpaX49mI9/PykPfpcvzwWFhaeKsVQKBTUWk9gYCCWlpaw8OgRZaThK/eexraKPW0p8mbbxGw2G4aHhymSH9nFWBWcmJhAa2srjEYjpqamNq2MPJFdrK+vDyUlJa4Zq66uhslkol75kF0sJSUFaWlpFAHJyclISkqiSD64ifn7+4vvoY1wOp1QqVSIiYkR25vBigs7Dw+4iUVFRWNkZISiteh0OhQVFaGgoECcwY0YHx9HUFAQ/HfsoIw0uIlp9+5Dd3c3RWuJjIykFhAeHk6ttfT39yPildVxUuEmdjA1E6abN8UisRmbvcfYbPX29iLd8BFlpMNN7MWdO/HByY9RV1eH6elpym4Ne+YaGxuRsP8dvPrabspKh5sYQ/3mXiQdSkVlZaX4tb4V7MOZSbF92Psf5lGWD1zFGCnp2dDEJaKiogJjY2OUXcF9Kc4Lu+uGhgY8FDafeZ9/TVl+cBdjHMk6jn0HUlBWVgaLxULZVdhOura2FotLy8gv/Eby/msjZP3ncdd8C79c+REGgwHZ2dmYm5sTvzqam5uhVGtwPPcMjeQL938eGzE18R9+/bkRiwtOsdSbzWboso7h7UNHaAR/tkXsMbdNv8NmuQX9sZMIDA6hrDxsq9h2wvWfx/OGT8zT8Il5Gj4xT0OiWCfKooKhLe6keBXH5QxoozLQZKeEsVCIhbHi4ZZnrOkLxqnLQ9Tx7PCZsZ9a0UPNFYZw49of1Baw1+NUrhnnex/C+oAdXchTUh+TygW+F/Mrx5XTKup8djiIHUCOcNGX3O+y8Tu0GaqQQ+EKcYh5LONiCE01TLgWhynDCy4zpjpbDM21Djgo7mk3IytDTZGA8jNUlZtxRlhmZUbKMewdaMMJpK4Tlg6n4qFHuvYcfmAXLSy7SyheXWrEntNdwjK7CuQKz9HRetdNkAtOYsDhs1W4294JR1cLNO/pKfskepQ/+AvnQTdBqYbmzxbccC8knOAmBmUmsqwXcc52Avk6ym2JHvnlwIVC9xnsRNNzUxVFVMj7Mg54IxN7KOOCVUVXOX8LF7RXUU7ybIl2GFqQ6epvRQyHqujbj3kaPjFPw2vFxOJBbS8C+B/aCLjWUUEFJgAAAABJRU5ErkJggg=="},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>d});var a=o(296540);const i={},s=a.createContext(i);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);