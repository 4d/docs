"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64328"],{251953:function(e,n,s){s.r(n),s.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>m,assets:()=>c,toc:()=>l,frontMatter:()=>d});var a=JSON.parse('{"id":"commands-legacy/cancel","title":"CANCEL","description":"CANCEL","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/cancel.md","sourceDirName":"commands-legacy","slug":"/commands/cancel","permalink":"/docs/es/commands/cancel","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcancel.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"cancel","title":"CANCEL","slug":"/commands/cancel","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ADD RECORD","permalink":"/docs/es/commands/add-record"},"next":{"title":"DIALOG","permalink":"/docs/es/commands/dialog"}}'),o=s("785893"),r=s("250065");let d={id:"cancel",title:"CANCEL",slug:"/commands/cancel",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Modo sin interfaz",id:"modo-sin-interfaz",level:5},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let n={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"CANCEL"})}),"\n\n\n\n\n\n\n\n",(0,o.jsx)(n.table,{children:(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Este comando no requiere par\xe1metros"}),(0,o.jsx)(n.th,{})]})})}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"CANCEL"})," se utiliza en m\xe9todos de objeto o de formulario (o en una subrutina) para:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["cancelar un registro nuevo o modificado, para el cual la entrada de datos ha sido inicializada utilizando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/add-record",children:"ADD RECORD"})," o ",(0,o.jsx)(n.a,{href:"/docs/es/commands/modify-record",children:"MODIFY RECORD"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["cancelar un formulario mostrado por intermedio del comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/dialog",children:"DIALOG"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["salir de un formulario que muestra una selecci\xf3n de registros, utilizando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/display-selection",children:"DISPLAY SELECTION"})," o ",(0,o.jsx)(n.a,{href:"/docs/es/commands/modify-selection",children:"MODIFY SELECTION"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["cancelar la impresi\xf3n de un formulario que est\xe1 a punto de ser impreso utilizando el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/print-form",children:"Print form"})," (ver a continuaci\xf3n)."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["En el contexto de entrada de datos, ",(0,o.jsx)(n.strong,{children:"CANCEL"})," efect\xfaa la misma acci\xf3n que si el usuario hubiera presionado la tecla de cancelaci\xf3n (",(0,o.jsx)(n.strong,{children:"Esc"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"CANCEL"})," se ejecuta con frecuencia como resultado de la selecci\xf3n de un comando de men\xfa. ",(0,o.jsx)(n.strong,{children:"CANCEL"})," tambi\xe9n se utiliza con frecuencia en el m\xe9todo de objeto de un bot\xf3n \u201Csin acci\xf3n\u201D."]}),"\n",(0,o.jsxs)(n.p,{children:["Este comando tambi\xe9n se usa en el met\xf3do de la caja de cierre opcional para el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/open-window",children:"Open window"}),". Si hay una ventana con caja de control de men\xfa, se puede llamar a ",(0,o.jsx)(n.a,{href:"/docs/es/commands/accept",children:"ACCEPT"})," o ",(0,o.jsx)(n.strong,{children:"CANCEL"}),", en el m\xe9todo a ejecutar, cuando se haga doble clic en en la caja de control de men\xfa o se seleccione el comando de men\xfa ",(0,o.jsx)(n.strong,{children:"Cerrar"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"CANCEL"})," no puede estar en la cola. Ejecutar dos comandos ",(0,o.jsx)(n.strong,{children:"CANCEL"})," en una fila desde dentro de un m\xe9todo en respuesta a un evento tendr\xeda el mismo efecto que ejecutar s\xf3lo uno."]}),"\n",(0,o.jsxs)(n.p,{children:["Finalmente, este comando puede ser utilizado en el evento de formulario On Printing Detail, cuando se utiliza el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/print-form",children:"Print form"}),". En este contexto, el comando ",(0,o.jsx)(n.strong,{children:"CANCEL"})," suspende la impresi\xf3n del formulario que est\xe1 a punto de imprimirse, luego retoma en la siguiente p\xe1gina. Este mecanismo puede utilizarse para administrar la impresi\xf3n de formularios cuando no hay suficiente espacio o en caso de que sea necesaria una ruptura de p\xe1gina."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," esta operaci\xf3n es diferente de la del comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/page-break",children:"PAGE BREAK"}),"(*) que cancela TODOS los formularios que est\xe1n en espera de impresi\xf3n."]}),"\n",(0,o.jsx)(n.h5,{id:"modo-sin-interfaz",children:"Modo sin interfaz"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"CANCEL"})," se permite en modo sin interfaz, en el contexto de las \xe1reas fuera de pantalla creadas por ",(0,o.jsx)(n.em,{children:"VP Run offscreen area"})," o ",(0,o.jsx)(n.a,{href:"/docs/es/commands/wa-run-offscreen-area",children:"WA Run offscreen area"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsxs)(n.p,{children:["Consulte el ejemplo del comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/set-print-marker",title:"SET PRINT MARKER",children:"SET PRINT MARKER"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,o.jsx)(n.p,{children:"Cuando el comando CANCEL se ejecuta (anulaci\xf3n de formulario o de impresi\xf3n), la variable sistema OK toma el valor 0."}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/accept",children:"ACCEPT"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/page-break",children:"PAGE BREAK"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/print-form",children:"Print form"})]}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"270"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modifica variables"}),(0,o.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var a=s(667294);let o={},r=a.createContext(o);function d(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);