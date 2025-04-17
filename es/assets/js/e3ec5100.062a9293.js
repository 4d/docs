"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45387"],{431883:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>l});var o=JSON.parse('{"id":"commands-legacy/set-help-menu","title":"SET HELP MENU","description":"SET HELP MENU ( menuCol )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/set-help-menu.md","sourceDirName":"commands-legacy","slug":"/commands/set-help-menu","permalink":"/docs/es/commands/set-help-menu","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-help-menu.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"set-help-menu","title":"SET HELP MENU","slug":"/commands/set-help-menu","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RELEASE MENU","permalink":"/docs/es/commands/release-menu"},"next":{"title":"SET MENU BAR","permalink":"/docs/es/commands/set-menu-bar"}}'),r=s("785893"),d=s("250065");let t={id:"set-help-menu",title:"SET HELP MENU",slug:"/commands/set-help-menu",displayed_sidebar:"docs"},l=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET HELP MENU"})," ( ",(0,r.jsx)(n.em,{children:"menuCol"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menuCol"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de objetos de men\xfa"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"SET HELP MENU"})," le permite reemplazar el men\xfa ",(0,r.jsx)(n.strong,{children:"Ayuda"})," por defecto de 4D por la colecci\xf3n de elementos del men\xf9 ",(0,r.jsx)(n.em,{children:"menuCol"})," del modo aplicaci\xf3n."]}),"\n",(0,r.jsxs)(n.p,{children:["Este comando reemplaza el men\xfa ",(0,r.jsx)(n.strong,{children:"Ayuda"})," por defecto del modo aplicaci\xf3n en todos los entornos 4D: interpretado, compilado, fusionado, monousuario y cliente/servidor."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'La propia etiqueta "Ayuda" es gestionada por el sistema y no puede personalizarse con este comando.'}),"\n",(0,r.jsx)(n.li,{children:"Los men\xfas de ayuda personalizados no soportan submen\xfas, marcas de verificaci\xf3n, estilos o iconos."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"menuCol"}),", pase una colecci\xf3n de objetos de men\xfa que definan todos los elementos del men\xfa de Ayuda personalizado. Cada objeto de men\xfa puede contener las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsxs)(n.strong,{children:["Propiedad ",(0,r.jsx)(n.br,{})]})}),(0,r.jsx)(n.th,{children:(0,r.jsxs)(n.strong,{children:["Tipo ",(0,r.jsx)(n.br,{})]})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"title"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Nombre del elemento de men\xfa"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"method"}),(0,r.jsxs)(n.td,{children:["Text | ",(0,r.jsx)(n.a,{href:"/docs/es/API/FunctionClass#about-4dfunction-objects",children:"4D.Function"})]}),(0,r.jsx)(n.td,{children:'Nombre del m\xe9todo proyecto u objeto f\xf3rmula 4D a ejecutar cuando se selecciona el elemento de men\xfa. Cuando se utiliza esta propiedad, no se debe pasar la propiedad "action" (de lo contrario se ignora "method").'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"worker"}),(0,r.jsx)(n.td,{children:"Text | Number"}),(0,r.jsxs)(n.td,{children:['Nombre del worker o N\xfamero del proceso que se encargar\xe1 de la ejecuci\xf3n del c\xf3digo del "m\xe9todo". Se soportan varias configuraciones, dependiendo del valor de la propiedad "worker":',(0,r.jsx)(n.br,{}),' si es un nombre de worker (Text), 4D utiliza o crea este worker para ejecutar el "m\xe9todo" (equivalente a ',(0,r.jsx)(n.a,{href:"/docs/es/commands/call-worker",children:"CALL WORKER"}),") si es un n\xfamero de proceso, 4D utiliza este proceso si existe, en caso contrario no hace nada (equivalente a ",(0,r.jsx)(n.a,{href:"/docs/es/commands/call-worker",children:"CALL WORKER"}),") si no est\xe1 definido y la aplicaci\xf3n muestra un di\xe1logo actual (frontmost dialog), 4D utiliza el proceso de este di\xe1logo (equivalente a ",(0,r.jsx)(n.a,{href:"/docs/es/commands/call-form",children:"CALL FORM"}),") si no est\xe1 definido y la aplicaci\xf3n no muestra un di\xe1logo actual, 4D llama y utiliza el worker1 (4D remoto/mono usuario) o el worker ",(0,r.jsx)(n.em,{children:"4D_server_interface"})," (4D Server)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"action"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"Acci\xf3n est\xe1ndar"}),' a ejecutar cuando el elemento de men\xfa es seleccionado. Cuando se utiliza esta propiedad, la propiedad "method" se ignora si se pasa.']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"shortcutKey"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Tecla de acceso directo del elemento (para llamar con la tecla Ctrl/Comando)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"shortcutShift"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["True para a\xf1adir la tecla ",(0,r.jsx)(n.strong,{children:"May\xfas"})," al acceso directo del elemento"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"shortcutAlt"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["True para a\xf1adir la tecla ",(0,r.jsx)(n.strong,{children:"Alt/Opci\xf3n"})," al acceso directo del elemento"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["El men\xfa ",(0,r.jsx)(n.strong,{children:"Ayuda"})," personalizado mostrar\xe1 los elementos en el mismo orden que la colecci\xf3n."]}),"\n",(0,r.jsxs)(n.p,{children:["Para insertar una l\xednea separadora, pase ",(0,r.jsx)(n.strong,{children:"null"})," o un objeto vac\xedo en la colecci\xf3n."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["Desea personalizar el men\xfa ",(0,r.jsx)(n.strong,{children:"Ayuda"})," de su aplicaci\xf3n:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $col : Collection\n\xa0$col:=New collection\n\xa0$col.push(New object("title";"Knowledge base";"worker";"workerHlp";"method";"methodHlp";"shortcutAlt";True;"shortcutKey";"Y"))\n\xa0$col.push(Null)\xa0//to add a separation line\n\xa0$col.push(New object("title";"Tools";"action";ak msc;"shortcutShift";True;"shortcutKey";"Y"))\n\xa0SET HELP MENU($col)\n\xa0SET ABOUT("About this application";"m_about")\xa0//para reemplazar \'About 4D\' en Windows\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(504325).Z+"",width:"276",height:"100"})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/set-about",children:"SET ABOUT"})}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1801"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},504325:function(e,n,s){s.d(n,{Z:function(){return o}});let o="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var o=s(667294);let r={},d=o.createContext(r);function t(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);