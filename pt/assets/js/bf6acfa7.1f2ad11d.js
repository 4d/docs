"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56482"],{843655:function(e,n,o){o.r(n),o.d(n,{metadata:()=>a,contentTitle:()=>d,default:()=>h,assets:()=>r,toc:()=>c,frontMatter:()=>s});var a=JSON.parse('{"id":"MSC/overview","title":"CSM","description":"The Maintenance and Security Center (MSC) window contains all the tools needed for verification, analysis, maintenance, backup, compacting, and encrypting of data files. The MSC window is available in all 4D applications: 4D single user, 4D Server or 4D Desktop.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/MSC/overview.md","sourceDirName":"MSC","slug":"/MSC/overview","permalink":"/docs/pt/20/MSC/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Foverview.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"overview","title":"CSM","sidebar_label":"CSM"},"sidebar":"docs","previous":{"title":"Managing 4D Licenses","permalink":"/docs/pt/20/Admin/licenses"},"next":{"title":"P\xe1gina de informa\xe7\xe3o","permalink":"/docs/pt/20/MSC/information"}}'),i=o("785893"),t=o("250065");let s={id:"overview",title:"CSM",sidebar_label:"CSM"},d=void 0,r={},c=[{value:"Acesso no modo de manuten\xe7\xe3o",id:"acesso-no-modo-de-manuten\xe7\xe3o",level:2},{value:"Acesso ao modo padr\xe3o",id:"acesso-ao-modo-padr\xe3o",level:2},{value:"Disponibilidade de funcionalidades",id:"disponibilidade-de-funcionalidades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The Maintenance and Security Center (MSC) window contains all the tools needed for verification, analysis, maintenance, backup, compacting, and encrypting of data files. The MSC window is available in all 4D applications: 4D single user, 4D Server or 4D Desktop."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," The MSC window is not available from a 4D remote connection."]}),"\n",(0,i.jsx)(n.p,{children:"Existem v\xe1rias maneiras de abrir a janela do CSM. The way it is accessed also determines the way the application project is opened: in \u201Cmaintenance\u201D mode or \u201Cstandard\u201D mode. In maintenance mode, the project is not opened by 4D, only its reference is provided to the MSC. No modo padr\xe3o, o projeto \xe9 aberto por 4D."}),"\n",(0,i.jsx)(n.h2,{id:"acesso-no-modo-de-manuten\xe7\xe3o",children:"Acesso no modo de manuten\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["In maintenance mode, only the MSC window is displayed (the project is not opened by the 4D application). This means that projects that are too damaged to be opened in standard mode by 4D can nevertheless be accessed. Moreover, certain operations (compacting, repair, and so on) require the project to be opened in maintenance mode (see ",(0,i.jsx)(n.a,{href:"#feature-availability",children:"Feature availability"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"\xc9 poss\xedvel abrir o CSM em modo de manuten\xe7\xe3o a partir de dois locais:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"From the standard project opening dialog box"})," The standard Open dialog includes the ",(0,i.jsx)(n.strong,{children:"Maintenance Security Center"})," option from the menu associated with the ",(0,i.jsx)(n.strong,{children:"Open"})," button: ",(0,i.jsx)(n.img,{src:o(235417).Z+"",width:"748",height:"505"})]}),"\n",(0,i.jsxs)(n.li,{children:["Menu ",(0,i.jsx)(n.strong,{children:"Ajuda/Centro de seguran\xe7a e de manuten\xe7\xe3o"})," ou bot\xe3o ",(0,i.jsx)(n.strong,{children:"CSM"})," da barra de ferramentas (projeto n\xe3o aberto)",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:o(581450).Z+"",width:"54",height:"53"}),(0,i.jsx)(n.br,{}),"\nQuando chamar esta fun\xe7\xe3o, aparece uma caixa de di\xe1logo padr\xe3o Abrir ficheiro para que possa selecionar o ficheiro ",(0,i.jsx)(n.em,{children:".4DProject"})," ou ",(0,i.jsx)(n.em,{children:".4dz"})," do projeto a ser examinado. O projeto n\xe3o ser\xe1 aberto por 4D."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"acesso-ao-modo-padr\xe3o",children:"Acesso ao modo padr\xe3o"}),"\n",(0,i.jsx)(n.p,{children:"No modo standard, est\xe1 aberto um projeto. Neste modo, algumas fun\xe7\xf5es de manuten\xe7\xe3o n\xe3o est\xe3o dispon\xedveis. Existem v\xe1rias possibilidades de acesso \xe0 janela do CSM:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use the ",(0,i.jsx)(n.strong,{children:"Help/Maintenance Security Center"})," menu or the ",(0,i.jsx)(n.strong,{children:"MSC"})," button in the 4D toolbar:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:o(581450).Z+"",width:"54",height:"53"})]}),"\n",(0,i.jsx)(n.li,{children:"Use the \u201Cmsc\u201D standard action that it is possible to associate with a menu command or a form object."}),"\n",(0,i.jsxs)(n.li,{children:["Utilizar o comando ",(0,i.jsx)(n.code,{children:"OPEN SECURITY CENTER"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"disponibilidade-de-funcionalidades",children:"Disponibilidade de funcionalidades"}),"\n",(0,i.jsx)(n.p,{children:"Certas fun\xe7\xf5es do CSM n\xe3o est\xe3o dispon\xedveis dependendo do modo de abertura do CSM:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Backup function is only available when the project is open (the MSC must have been opened in standard mode)."}),"\n",(0,i.jsx)(n.li,{children:"Data compacting, rollback, restore, repair, and encryption functions can only be used with data files that are not open (the MSC must have been opened in maintenance mode). If these functions are tried while the project is open in standard mode, a dialog warns you that it implies that the application be closed and restarted in maintenance mode."}),"\n",(0,i.jsxs)(n.li,{children:["In encrypted databases, access to encrypted data or to the .journal file requires that a valid encryption data key be provided (see ",(0,i.jsx)(n.a,{href:"/docs/pt/20/MSC/encrypt",children:"Encrypt page"}),"). Caso contr\xe1rio, os dados encriptados n\xe3o s\xe3o vis\xedveis."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},235417:function(e,n,o){o.d(n,{Z:function(){return a}});let a=o.p+"assets/images/MSC_standardOpen-ef15ff019a0992eb692c97fb75fb9800.png"},581450:function(e,n,o){o.d(n,{Z:function(){return a}});let a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA1CAYAAAAK0RhzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAR5SURBVGhD7ZgPSBtXHMe/0c6V4R901TkdrVmymKHVrnMt1lFrlDgdadfCZgsiw9HObgyHA1e6qQhSpSDoECsrbCKDMiky6MQ/aLoK6hhLR+mSxkZNY0cnyvxTRTD1z+6dv8ZYtULvnTQhHzh4v997HPe59+53907x2+DMMrwQUSzyJe9yG51TwI/aXodPzNPwiXkaXisma7l3zs/DMWjFoPW2cFjgdM7j5V27EL37dSQefBcRkdE0ki+s3HMVW15exr/37+Ge7Q5sd/7GP/cdUKvVSExMRHx8PGZmZjAwMACrVZAdHERISIggGgGVNh77k1PxQkAAnUkaXMX6r7ejp6sNYWFhokRCQgJiY2MR4Haxk5OTojxjcXERdrtdlGSyo6OjUGu0yPnkC7FfClzFyr/6FDU1NQgNDaXMetzFnmR2dhalpaX49mI9/PykPfpcvzwWFhaeKsVQKBTUWk9gYCCWlpaw8OgRZaThK/eexraKPW0p8mbbxGw2G4aHhymSH9nFWBWcmJhAa2srjEYjpqamNq2MPJFdrK+vDyUlJa4Zq66uhslkol75kF0sJSUFaWlpFAHJyclISkqiSD64ifn7+4vvoY1wOp1QqVSIiYkR25vBigs7Dw+4iUVFRWNkZISiteh0OhQVFaGgoECcwY0YHx9HUFAQ/HfsoIw0uIlp9+5Dd3c3RWuJjIykFhAeHk6ttfT39yPildVxUuEmdjA1E6abN8UisRmbvcfYbPX29iLd8BFlpMNN7MWdO/HByY9RV1eH6elpym4Ne+YaGxuRsP8dvPrabspKh5sYQ/3mXiQdSkVlZaX4tb4V7MOZSbF92Psf5lGWD1zFGCnp2dDEJaKiogJjY2OUXcF9Kc4Lu+uGhgY8FDafeZ9/TVl+cBdjHMk6jn0HUlBWVgaLxULZVdhOura2FotLy8gv/Eby/msjZP3ncdd8C79c+REGgwHZ2dmYm5sTvzqam5uhVGtwPPcMjeQL938eGzE18R9+/bkRiwtOsdSbzWboso7h7UNHaAR/tkXsMbdNv8NmuQX9sZMIDA6hrDxsq9h2wvWfx/OGT8zT8Il5Gj4xT0OiWCfKooKhLe6keBXH5QxoozLQZKeEsVCIhbHi4ZZnrOkLxqnLQ9Tx7PCZsZ9a0UPNFYZw49of1Baw1+NUrhnnex/C+oAdXchTUh+TygW+F/Mrx5XTKup8djiIHUCOcNGX3O+y8Tu0GaqQQ+EKcYh5LONiCE01TLgWhynDCy4zpjpbDM21Djgo7mk3IytDTZGA8jNUlZtxRlhmZUbKMewdaMMJpK4Tlg6n4qFHuvYcfmAXLSy7SyheXWrEntNdwjK7CuQKz9HRetdNkAtOYsDhs1W4294JR1cLNO/pKfskepQ/+AvnQTdBqYbmzxbccC8knOAmBmUmsqwXcc52Avk6ym2JHvnlwIVC9xnsRNNzUxVFVMj7Mg54IxN7KOOCVUVXOX8LF7RXUU7ybIl2GFqQ6epvRQyHqujbj3kaPjFPw2vFxOJBbS8C+B/aCLjWUUEFJgAAAABJRU5ErkJggg=="},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return s}});var a=o(667294);let i={},t=a.createContext(i);function s(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);