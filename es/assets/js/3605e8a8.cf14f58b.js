"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60173],{652607:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var s=a(474848),i=a(28453);const l={id:"sdi",title:"Mode SDI bajo Windows"},d=void 0,o={id:"Menus/sdi",title:"Mode SDI bajo Windows",description:"En Windows, los desarrolladores 4D pueden configurar sus aplicaciones fusionadas 4D para que funcionen como aplicaciones SDI (Single-Document Interface). En las aplicaciones SDI, cada ventana es independiente de las dem\xe1s y puede tener su propia barra de men\xfas. Las aplicaciones SDI se oponen a las aplicaciones MDI (Multiple Documents Interface), en las que todas las ventanas est\xe1n contenidas y dependen de la ventana principal.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Menus/sdi.md",sourceDirName:"Menus",slug:"/Menus/sdi",permalink:"/docs/es/19/Menus/sdi",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Menus%2Fsdi.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"sdi",title:"Mode SDI bajo Windows"},sidebar:"docs",previous:{title:"Barras de men\xfas",permalink:"/docs/es/19/Menus/bars"},next:{title:"Generar un paquete proyecto",permalink:"/docs/es/19/Desktop/building"}},c={},r=[{value:"Disponibilidad del modo SDI",id:"disponibilidad-del-modo-sdi",level:2},{value:"Activaci\xf3n del modo SDI",id:"activaci\xf3n-del-modo-sdi",level:2},{value:"Gesti\xf3n de aplicaciones en modo SDI",id:"gesti\xf3n-de-aplicaciones-en-modo-sdi",level:2},{value:"Men\xfas en las ventanas",id:"men\xfas-en-las-ventanas",level:3},{value:"Sobre la pantalla de inicio",id:"sobre-la-pantalla-de-inicio",level:4},{value:"Salida autom\xe1tica",id:"salida-autom\xe1tica",level:3},{value:"Lenguaje",id:"lenguaje",level:2}];function t(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"En Windows, los desarrolladores 4D pueden configurar sus aplicaciones fusionadas 4D para que funcionen como aplicaciones SDI (Single-Document Interface). En las aplicaciones SDI, cada ventana es independiente de las dem\xe1s y puede tener su propia barra de men\xfas. Las aplicaciones SDI se oponen a las aplicaciones MDI (Multiple Documents Interface), en las que todas las ventanas est\xe1n contenidas y dependen de la ventana principal."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"El concepto de SDI/MDI no existe en macOS. Esta funcionalidad s\xf3lo afecta a las aplicaciones de Windows y las opciones relacionadas se ignoran en macOS."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"disponibilidad-del-modo-sdi",children:"Disponibilidad del modo SDI"}),"\n",(0,s.jsx)(n.p,{children:"El modo SDI s\xf3lo est\xe1 disponible en el siguiente entorno de ejecuci\xf3n:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Windows"}),"\n",(0,s.jsx)(n.li,{children:"Aplicaci\xf3n 4D fusionada, monopuesto o cliente"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"activaci\xf3n-del-modo-sdi",children:"Activaci\xf3n del modo SDI"}),"\n",(0,s.jsx)(n.p,{children:"La activaci\xf3n y el uso del modo SDI en su aplicaci\xf3n requieren los siguientes pasos:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Seleccione la opci\xf3n ",(0,s.jsx)(n.strong,{children:"Utilizar el modo SDI en Windows"}),' en la p\xe1gina "Interfaz" de la caja de di\xe1logo de las Propiedades.']}),"\n",(0,s.jsx)(n.li,{children:"Crear una aplicaci\xf3n fusionada (monopuesto y/o aplicaci\xf3n cliente)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Entonces, cuando se ejecute en un contexto soportado (ver arriba), la aplicaci\xf3n fusionada funcionar\xe1 autom\xe1ticamente en modo SDI."}),"\n",(0,s.jsx)(n.h2,{id:"gesti\xf3n-de-aplicaciones-en-modo-sdi",children:"Gesti\xf3n de aplicaciones en modo SDI"}),"\n",(0,s.jsx)(n.p,{children:"La ejecuci\xf3n de una aplicaci\xf3n 4D en modo SDI no requiere ninguna implementaci\xf3n espec\xedfica: las barras de men\xfa existentes se desplazan autom\xe1ticamente en las propias ventanas SDI. Sin embargo, debe prestar atenci\xf3n a los principios espec\xedficos que se enumeran a continuaci\xf3n."}),"\n",(0,s.jsx)(n.h3,{id:"men\xfas-en-las-ventanas",children:"Men\xfas en las ventanas"}),"\n",(0,s.jsx)(n.p,{children:"En modo SDI, la barra de men\xfa del proceso se muestra autom\xe1ticamente en cada ventana de tipo de documento abierta durante la vida del proceso (esto excluye, por ejemplo, las paletas flotantes). Sin embargo, cuando la barra de men\xfas del proceso no est\xe1 visible, los accesos directos a los elementos del men\xfa permanecen activos."}),"\n",(0,s.jsx)(n.p,{children:"Los men\xfas se a\xf1aden sobre las ventanas sin modificar el tama\xf1o de su contenido:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:a(726275).A+"",width:"600",height:"238"})}),"\n",(0,s.jsx)(n.p,{children:"As\xed, las ventanas pueden utilizarse en los modos MDI o SDI sin tener que recalcular la posici\xf3n de los objetos."}),"\n",(0,s.jsx)(n.h4,{id:"sobre-la-pantalla-de-inicio",children:"Sobre la pantalla de inicio"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si se seleccion\xf3 la opci\xf3n de interfaz ",(0,s.jsx)(n.strong,{children:"Pantalla de bienvenida"})," en las Propiedades, la ventana de bienvenida contendr\xe1 los men\xfas que se habr\xedan mostrado en la ventana MDI. Tenga en cuenta tambi\xe9n que al cerrar la ventana de la pantalla de inicio se saldr\xe1 de la aplicaci\xf3n, al igual que en el modo MDI."]}),"\n",(0,s.jsx)(n.li,{children:"Si no se ha seleccionado la opci\xf3n de pantalla de bienvenida, los men\xfas se mostrar\xe1n s\xf3lo en las ventanas abiertas, seg\xfan las elecciones del desarrollador."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"salida-autom\xe1tica",children:"Salida autom\xe1tica"}),"\n",(0,s.jsx)(n.p,{children:"Cuando se ejecuta en modo MDI, una aplicaci\xf3n 4D simplemente se cierra cuando el usuario cierra la ventana de la aplicaci\xf3n (ventana MDI). Sin embargo, cuando se ejecutan en modo SDI, las aplicaciones 4D no tienen una ventana de aplicaci\xf3n y, por otra parte, el cierre de la \xfaltima ventana abierta no significa necesariamente que el usuario quiera que la aplicaci\xf3n salga (pueden estar ejecut\xe1ndose procesos sin interfaz, por ejemplo) - aunque podr\xeda ser lo que se desea."}),"\n",(0,s.jsxs)(n.p,{children:["Para manejar este caso, las aplicaciones 4D ejecutadas en modo SDI incluyen un mecanismo para salir autom\xe1ticamente (llamando al comando ",(0,s.jsx)(n.code,{children:"QUIT 4D"}),") cuando se cumplen las siguientes condiciones:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"el usuario no puede seguir interactuando con la aplicaci\xf3n"}),"\n",(0,s.jsx)(n.li,{children:"no hay procesos de usuario en curso"}),"\n",(0,s.jsx)(n.li,{children:"Los procesos 4D o workers est\xe1n esperando un evento"}),"\n",(0,s.jsx)(n.li,{children:"el servidor web no se ha lanzado."}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Cuando se llama a un men\xfa con una acci\xf3n est\xe1ndar asociada ",(0,s.jsx)(n.em,{children:"salir"}),", la aplicaci\xf3n sale y se cierran todas las ventanas, sea cual sea el lugar desde el que se llam\xf3 al men\xfa."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"lenguaje",children:"Lenguaje"}),"\n",(0,s.jsx)(n.p,{children:"Aunque es manejado de forma transparente por 4D, el modo SDI introduce peque\xf1as variaciones en la gesti\xf3n de la interfaz de la aplicaci\xf3n. A continuaci\xf3n se enumeran las especificidades del lenguaje 4D."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Comando/funcionalidad"}),(0,s.jsx)(n.th,{children:"Especificidad en el modo SDI en Windows"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Open form window"})}),(0,s.jsxs)(n.td,{children:["Opciones para soportar las ventanas flotantes en SDI (",(0,s.jsx)(n.code,{children:"Controller form window"}),") y para eliminar la barra de men\xfa (",(0,s.jsx)(n.code,{children:"Form has no menu bar"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Menu bar height"})}),(0,s.jsx)(n.td,{children:"Devuelve la altura en p\xedxeles de una l\xednea de barra de men\xfa \xfanica, incluso si la barra de men\xfa se ha envuelto en dos o m\xe1s l\xedneas. Devuelve 0 cuando el comando es llamado desde un proceso sin ventana formulario"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"SHOW MENU BAR"})," / ",(0,s.jsx)(n.code,{children:"HIDE MENU BAR"})]}),(0,s.jsx)(n.td,{children:"Se aplica s\xf3lo a la ventana formulario actual (desde donde se ejecuta el c\xf3digo)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"MAXIMIZE WINDOW"})}),(0,s.jsx)(n.td,{children:"La ventana se maximiza al tama\xf1o de la pantalla"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CONVERT COORDINATES"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"XY Screen"})," es el sistema de coordenadas global donde la pantalla principal se sit\xfaa en (0,0). Las pantallas situadas a su izquierda o arriba pueden tener coordenadas negativas y las situadas a su derecha o debajo pueden tener coordenadas mayores que los valores devueltos por ",(0,s.jsx)(n.code,{children:"Screen height"})," o ",(0,s.jsx)(n.code,{children:"Screen width"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"GET MOUSE"})}),(0,s.jsx)(n.td,{children:"Las coordenadas globales son relativas a la pantalla"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"GET WINDOW RECT"})}),(0,s.jsx)(n.td,{children:"Cuando se pasa -1 en el par\xe1metro ventana, el comando devuelve 0;0;0;0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"On Drop database method"})}),(0,s.jsx)(n.td,{children:"No soportado"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},726275:(e,n,a)=>{a.d(n,{A:()=>s});const s="data:image/png;base64,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"},28453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>o});var s=a(296540);const i={},l=s.createContext(i);function d(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);