"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95369],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>m});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),u=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=u(e.components);return t.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,g=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return a?t.createElement(g,i(i({ref:n},s),{},{components:a})):t.createElement(g,i({ref:n},s))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},34069:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>s});a(67294);var t=a(3905);function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},r.apply(this,arguments)}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"breakpoints",title:"Puntos de interrupci\xf3n y punto de interrupci\xf3n en comandos"},l=void 0,d={unversionedId:"Debugging/breakpoints",id:"version-20-R2/Debugging/breakpoints",title:"Puntos de interrupci\xf3n y punto de interrupci\xf3n en comandos",description:"Generalidades",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/Debugging/breakpoints.md",sourceDirName:"Debugging",slug:"/Debugging/breakpoints",permalink:"/docs/es/Debugging/breakpoints",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fbreakpoints.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"breakpoints",title:"Puntos de interrupci\xf3n y punto de interrupci\xf3n en comandos"},sidebar:"docs",previous:{title:"Debugger",permalink:"/docs/es/Debugging/debugger"},next:{title:"Depuraci\xf3n desde m\xe1quinas remotas",permalink:"/docs/es/Debugging/debugging-remote"}},u={},s=[{value:"Generalidades",id:"generalidades",level:2},{value:"Puntos de interrupci\xf3n",id:"puntos-de-interrupci\xf3n",level:2},{value:"Propiedades de los puntos de interrupci\xf3n",id:"propiedades-de-los-puntos-de-interrupci\xf3n",level:3},{value:"Puntos de interrupci\xf3n en la depuraci\xf3n remota",id:"puntos-de-interrupci\xf3n-en-la-depuraci\xf3n-remota",level:3},{value:"Lista de rupturas",id:"lista-de-rupturas",level:3},{value:"Puntos de interrupci\xf3n en comandos",id:"puntos-de-interrupci\xf3n-en-comandos",level:2},{value:"Definir una condici\xf3n para un punto de interrupci\xf3n en un comando",id:"definir-una-condici\xf3n-para-un-punto-de-interrupci\xf3n-en-un-comando",level:3}],c={toc:s};function p(e){var{components:n}=e,i=o(e,["components"]);return(0,t.kt)("wrapper",r({},c,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",r({},{id:"generalidades"}),"Generalidades"),(0,t.kt)("p",null,"Los puntos de interrupci\xf3n y los comandos de captura son t\xe9cnicas de depuraci\xf3n muy eficaces. Ambas tienen el mismo efecto: detienen la ejecuci\xf3n del c\xf3digo (y muestran la ventana del depurador si no est\xe1 ya visible) en una etapa deseada."),(0,t.kt)("p",null,"Se definenen los puntos de interrupci\xf3n en cualquier l\xednea de c\xf3digo en la que se desee detener la ejecuci\xf3n. Puede asociar una condici\xf3n al punto de ruptura."),(0,t.kt)("p",null,"Los puntos de interrupci\xf3n de comandos le permiten comenzar a rastrear la ejecuci\xf3n de un proceso tan pronto como un comando es llamado por ese proceso."),(0,t.kt)("h2",r({},{id:"puntos-de-interrupci\xf3n"}),"Puntos de interrupci\xf3n"),(0,t.kt)("p",null,"Para crear un punto de interrupci\xf3n, haga clic en el margen izquierdo de la ventana de evaluaci\xf3n del c\xf3digo fuente en el depurador o en el editor de c\xf3digo."),(0,t.kt)("p",null,"En el siguiente ejemplo, se ha definido un punto de ruptura (la vi\xf1eta roja), en el depurador, en la l\xednea ",(0,t.kt)("inlineCode",{parentName:"p"},"If ($in.dataClass#Null)"),":"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"punto de ruptura",src:a(95170).Z,width:"672",height:"227"})),(0,t.kt)("p",null,"En el ejemplo anterior, al hacer clic en el bot\xf3n ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/Debugging/debugger/#no-trace"}),(0,t.kt)("strong",{parentName:"a"},"No Trace"))," se reanuda la ejecuci\xf3n normal hasta la l\xednea marcada con el punto de interrupci\xf3n. Esa l\xednea no se ejecuta por s\xed misma, sino que se vuelve al modo de rastreo. Definir un punto de interrupci\xf3n m\xe1s all\xe1 del contador del programa y hacer clic en el bot\xf3n ",(0,t.kt)("strong",{parentName:"p"},"No Trace")," le permite saltar las partes del m\xe9todo que se est\xe1 rastreando."),(0,t.kt)("p",null,"Para eliminar un punto de ruptura, haga clic en la vi\xf1eta correspondiente."),(0,t.kt)("h3",r({},{id:"propiedades-de-los-puntos-de-interrupci\xf3n"}),"Propiedades de los puntos de interrupci\xf3n"),(0,t.kt)("p",null,"Puede modificar el comportamiento de un punto de interrupci\xf3n utilizando la ventana Propiedades de puntos de interrupci\xf3n:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"breakpoint-properties",src:a(80999).Z,width:"457",height:"337"})),(0,t.kt)("p",null,"Esta ventana est\xe1 disponible en el Editor de C\xf3digo o en la ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/Debugging/debugger#source-code-pane"}),"ventana de c\xf3digo fuente"),". Puede:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"haga clic derecho en una l\xednea y seleccione ",(0,t.kt)("strong",{parentName:"li"},"Modificar el punto de interrupci\xf3n")," en el men\xfa contextual, o"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Alt+clic")," (Windows) o ",(0,t.kt)("inlineCode",{parentName:"li"},"Opci\xf3n+clic")," (macOS) en el margen izquierdo.")),(0,t.kt)("p",null,"Si ya existe un punto de interrupci\xf3n, la ventana se muestra para ese punto de interrupci\xf3n. En caso contrario, se crea un punto de ruptura y se muestra la ventana para el punto de ruptura reci\xe9n creado."),(0,t.kt)("p",null,"A continuaci\xf3n se describen las propiedades:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Ubicaci\xf3n"),": indica el nombre del m\xe9todo y el n\xfamero de l\xednea que se adjunta al punto de interrupci\xf3n."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Interrumpir cuando la siguiente expresi\xf3n es true"),": puede crear los ",(0,t.kt)("strong",{parentName:"li"},"puntos de interrupci\xf3n condicionales")," introduciendo una f\xf3rmula 4D que devuelva ",(0,t.kt)("inlineCode",{parentName:"li"},"True")," o ",(0,t.kt)("inlineCode",{parentName:"li"},"False"),". Por ejemplo, inserte ",(0,t.kt)("inlineCode",{parentName:"li"},"Records in selection(\\[aTable])=0")," para asegurarse de que la ruptura se produce s\xf3lo si no hay ning\xfan registro seleccionado para la tabla ","[","aTable]. Las condiciones de los puntos de interrupci\xf3n est\xe1n disponibles en la columna ",(0,t.kt)("strong",{parentName:"li"},"Condici\xf3n")," de la ",(0,t.kt)("a",r({parentName:"li"},{href:"#break-list"}),"lista de interrupciones"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"N\xfamero de veces que hay que saltar antes de romper"),": puede asociar un punto de ruptura a una l\xednea situada en una estructura de bucle (While, Repeat o For) o situada en una subrutina o funci\xf3n llamada desde dentro de un bucle."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Punto de ruptura desactivado"),": si actualmente no necesita un punto de ruptura, pero podr\xeda necesitarlo m\xe1s adelante, puede desactivarlo temporalmente. Un punto de interrupci\xf3n desactivado aparece como un gui\xf3n (-) en lugar de una vi\xf1eta (-)|")),(0,t.kt)("h3",r({},{id:"puntos-de-interrupci\xf3n-en-la-depuraci\xf3n-remota"}),"Puntos de interrupci\xf3n en la depuraci\xf3n remota"),(0,t.kt)("p",null,"La lista de puntos de interrupci\xf3n se almacena localmente. En el modo de depuraci\xf3n remota, si el depurador conectado es un 4D remoto, la lista de puntos de interrupci\xf3n remota sustituye temporalmente a la lista de puntos de interrupci\xf3n del servidor durante la sesi\xf3n de depuraci\xf3n."),(0,t.kt)("p",null,"La lista de puntos de interrupci\xf3n del servidor se restablece autom\xe1ticamente si vuelve a ser el depurador asociado."),(0,t.kt)("h3",r({},{id:"lista-de-rupturas"}),"Lista de rupturas"),(0,t.kt)("p",null,"La lista de puntos de ruptura es una p\xe1gina del Explorador de ejecuci\xf3n que le permite gestionar los puntos de ruptura creados en la ventana del depurador o en el editor de c\xf3digo. Para m\xe1s informaci\xf3n sobre el Explorador de ejecuci\xf3n, consulte su p\xe1gina dedicada en ",(0,t.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Runtime-Explorer.200-5416614.en.html"}),"el manual de Dise\xf1o"),"."),(0,t.kt)("p",null,"Para abrir la p\xe1gina de la lista de puntos de ruptura:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"En el ",(0,t.kt)("strong",{parentName:"p"},"men\xfa Ejecutar"),", haga clic en el ",(0,t.kt)("strong",{parentName:"p"},"Explorador de ejecuci\xf3n..."))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Haga clic en la pesta\xf1a ",(0,t.kt)("strong",{parentName:"p"},"Break")," para mostrar la lista de pausas:"))),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"break-list-runtime-explorer",src:a(6714).Z,width:"1928",height:"1160"})),(0,t.kt)("p",null,"Utilizando esta ventana, puede:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Definir las condiciones para los puntos de interrupci\xf3n en la columna ",(0,t.kt)("strong",{parentName:"li"},"Condiciones")),(0,t.kt)("li",{parentName:"ul"},"Activar o desactivar los puntos de interrupci\xf3n haciendo clic en las vi\xf1etas del margen. Los puntos de interrupci\xf3n desactivados muestran balas transparentes"),(0,t.kt)("li",{parentName:"ul"},"Elimine los puntos de interrupci\xf3n presionando la tecla ",(0,t.kt)("inlineCode",{parentName:"li"},"Delete")," o ",(0,t.kt)("inlineCode",{parentName:"li"},"Backspace"),", o haciendo clic en el bot\xf3n ",(0,t.kt)("strong",{parentName:"li"},"Delete")," bajo la lista."),(0,t.kt)("li",{parentName:"ul"},"Abra los m\xe9todos donde se encuentran los puntos de interrupci\xf3n haciendo doble clic en cualquier l\xednea de la lista")),(0,t.kt)("p",null,"No puede a\xf1adir nuevos puntos de interrupci\xf3n desde esta ventana. Los puntos de interrupci\xf3n s\xf3lo pueden crearse desde la ventana del depurador o del editor de c\xf3digo."),(0,t.kt)("h2",r({},{id:"puntos-de-interrupci\xf3n-en-comandos"}),"Puntos de interrupci\xf3n en comandos"),(0,t.kt)("p",null,"La pesta\xf1a ",(0,t.kt)("strong",{parentName:"p"},"Catch")," del Explorador de ejecuci\xf3n le permite a\xf1adir pausas adicionales a su c\xf3digo mediante la captura de llamadas a comandos 4D. A diferencia de un punto de interrupci\xf3n, que se encuentra en un m\xe9todo particular del proyecto (y por lo tanto desencadena una excepci\xf3n de rastreo s\xf3lo cuando se alcanza), el alcance de la captura de un comando incluye todos los procesos que ejecutan c\xf3digo 4D y llaman a ese comando."),(0,t.kt)("p",null,"Los puntos de interrupci\xf3n en un comando son una forma conveniente de rastrear grandes porciones de c\xf3digo sin tener que definir puntos de interrupci\xf3n en lugares arbitrarios. Por ejemplo, si un registro que no deber\xeda ser eliminado se borra despu\xe9s de haber ejecutado uno o varios procesos, puede intentar reducir el campo de su investigaci\xf3n v\xeda puntos de interrupci\xf3n en los comandos como ",(0,t.kt)("inlineCode",{parentName:"p"},"DELETE RECORD")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"DELETE SELECTION"),". Cada vez que se llama a estos comandos, se puede verificar si el registro en cuesti\xf3n ha sido eliminado, y as\xed aislar la parte defectuosa del c\xf3digo."),(0,t.kt)("p",null,"Los puntos de interrupci\xf3n y los comandos de captura se pueden utilizar combinados."),(0,t.kt)("p",null,"Para abrir la p\xe1gina de los puntos de interrupci\xf3n en comandos:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Elija ",(0,t.kt)("strong",{parentName:"p"},"Ejecutar")," > ",(0,t.kt)("strong",{parentName:"p"},"Explorador de ejecuci\xf3n...")," para abrir el Explorador de ejecuci\xf3n.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Haga clic en ",(0,t.kt)("strong",{parentName:"p"},"Catch")," para mostrar la lista de puntos de interrupci\xf3n en los comandos:"))),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"runtime-explorer-window",src:a(23342).Z,width:"868",height:"479"})),(0,t.kt)("p",null,"Esta p\xe1gina lista los puntos de interrupci\xf3n en el comando durante la ejecuci\xf3n. Se compone de dos columnas:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"La columna de la izquierda muestra el estado de activaci\xf3n/desactivaci\xf3n del punto de interrupci\xf3n en el comando, seguido del nombre del comando"),(0,t.kt)("li",{parentName:"ul"},"La columna de la derecha muestra la condici\xf3n asociada a punto de interrupci\xf3n en el comando, si lo hay")),(0,t.kt)("p",null,"Para a\xf1adir un punto de interrupci\xf3n en el comando:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Haga clic en el bot\xf3n ",(0,t.kt)("strong",{parentName:"li"},"Add New Catch")," (en forma de +) situado debajo de la lista. Se a\xf1ade una nueva entrada a la lista con el comando ",(0,t.kt)("inlineCode",{parentName:"li"},"ALERT")," por defecto"),(0,t.kt)("li",{parentName:"ol"},"Haga clic en la etiqueta ",(0,t.kt)("strong",{parentName:"li"},"ALERT"),", escriba el nombre del comando en el cual desea poner un punto de interrupci\xf3n y pulse ",(0,t.kt)("strong",{parentName:"li"},"Enter"),".")),(0,t.kt)("p",null,"Para activar o desactivar un punto de interrupci\xf3n en un comando, haga clic en la vi\xf1eta (-) delante de la etiqueta del comando. La bala es transparente cuando el comando est\xe1 desactivado."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"La desactivaci\xf3n de un punto de interrupci\xf3n de un comando tiene casi el mismo efecto que suprimirlo. Durante la ejecuci\xf3n, el depurador no pasa casi nada de tiempo en la entrada. La ventaja de desactivar una entrada es que no tiene que volver a crearla cuando la necesite de nuevo.")),(0,t.kt)("p",null,"Para eliminar un punto de interrupci\xf3n en el comando:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Seleccione un comando en la lista."),(0,t.kt)("li",{parentName:"ol"},"Presione la tecla ",(0,t.kt)("strong",{parentName:"li"},"Backspace")," o ",(0,t.kt)("strong",{parentName:"li"},"Delete")," en su teclado o haga clic en el bot\xf3n ",(0,t.kt)("strong",{parentName:"li"},"Delete")," bajo la lista (",(0,t.kt)("strong",{parentName:"li"},"Delete All")," elimina todos los comandos en la lista).")),(0,t.kt)("h3",r({},{id:"definir-una-condici\xf3n-para-un-punto-de-interrupci\xf3n-en-un-comando"}),"Definir una condici\xf3n para un punto de interrupci\xf3n en un comando"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Haga clic en la entrada en la columna derecha"),(0,t.kt)("li",{parentName:"ol"},"Introduzca una f\xf3rmula 4D (expresi\xf3n, llamada de comando o m\xe9todo de proyecto) que devuelva un valor booleano.")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Para eliminar una condici\xf3n, borre su f\xf3rmula.")),(0,t.kt)("p",null,"La adici\xf3n de condiciones le permite detener la ejecuci\xf3n cuando el comando es invocado s\xf3lo si la condici\xf3n se cumple. Por ejemplo, si asocia la condici\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"Records in selection(\\[Emp]>10)")," con el punto de interrupci\xf3n en el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"DELETE SELECTION"),", el c\xf3digo no se detendr\xe1 durante la ejecuci\xf3n del comando ",(0,t.kt)("inlineCode",{parentName:"p"},"DELETE SELECTION")," si la selecci\xf3n actual de la tabla ","[","Emp] s\xf3lo contiene 9 registros (o menos)."),(0,t.kt)("p",null,"La adici\xf3n de condiciones a los puntos de interrupci\xf3n de los comandos ralentiza la ejecuci\xf3n, porque la condici\xf3n tiene que ser evaluada cada vez que se produce una excepci\xf3n. Por otra parte, a\xf1adir condiciones acelera el proceso de depuraci\xf3n, ya que 4D omite autom\xe1ticamente las ocurrencias que no coinciden con las condiciones."))}p.isMDXComponent=!0},6714:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/break-list-b89efee46224eee9896fd3573d311ece.png"},95170:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/break-dac3aff61c89edd51b1dc219bcce2aaa.png"},80999:(e,n,a)=>{a.d(n,{Z:()=>t});const t="data:image/png;base64,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"},23342:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/catch-command-fd399840ad542aad76ae489a5e9de658.png"}}]);