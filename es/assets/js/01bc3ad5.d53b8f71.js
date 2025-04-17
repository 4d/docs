"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50257"],{975701:function(e,n,A){A.r(n),A.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>a,assets:()=>r,toc:()=>c,contentTitle:()=>l});var a=JSON.parse('{"id":"commands-legacy/alert","title":"ALERT","description":"ALERT ( mensaje {; titulobotonOK} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/alert.md","sourceDirName":"commands-legacy","slug":"/commands/alert","permalink":"/docs/es/20-R8/commands/alert","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Falert.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"alert","title":"ALERT","slug":"/commands/alert","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Messages","permalink":"/docs/es/20-R8/commands/theme/Messages"},"next":{"title":"CONFIRM","permalink":"/docs/es/20-R8/commands/confirm"}}'),d=A("785893"),s=A("250065");let t={id:"alert",title:"ALERT",slug:"/commands/alert",displayed_sidebar:"docs"},l=void 0,r={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"ALERT"})," ( ",(0,d.jsx)(n.em,{children:"mensaje"})," {; ",(0,d.jsx)(n.em,{children:"titulobotonOK"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"mensaje"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Mensaje a mostrar en la caja de di\xe1logo de alerta"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"titulobotonOK"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"T\xedtulo del bot\xf3n OK"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"ALERT"})," muestra una caja de di\xe1logo de alerta compuesta de un icono, de un mensaje y de un bot\xf3n OK."]}),"\n",(0,d.jsxs)(n.p,{children:["Pase el mensaje a mostrar en el par\xe1metro ",(0,d.jsx)(n.em,{children:"mensaje"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Por defecto, el t\xedtulo del bot\xf3n OK es \u201CAceptar.\u201D Para cambiar el t\xedtulo del bot\xf3n OK, pase el nuevo t\xedtulo en el par\xe1metro opcional ",(0,d.jsx)(n.em,{children:"titulobotonOK"}),". Si es necesario, el ancho del bot\xf3n OK se redimensiona hacia la izquierda, de acuerdo al ancho del t\xedtulo personalizado que usted pase."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Consejo:"})," no llame al comando ",(0,d.jsx)(n.strong,{children:"ALERT"})," desde la secci\xf3n de un formulario o m\xe9todo objeto que maneja los eventos de formulario On Activate o On Deactivate; esto provocar\xe1 un bucle sin fin."]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,d.jsx)(n.p,{children:"Este ejemplo muestra una caja de di\xe1logo de alerta que muestra informaci\xf3n sobre una empresa. Note que el mensaje contiene retornos de carro, que hacen que el texto pase a la l\xednea siguiente:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0ALERT("Company: "+[Companies]Name+Char(13)+"Personas en la empresa: "+\\\n\xa0String(Records in selection([People]))+Char(13)+"N\xfamero de partes que suministran: "+\\\n\xa0String(Records in selection([Parts])))\n'})}),"\n",(0,d.jsx)(n.p,{children:"Esta l\xednea de c\xf3digo muestra la siguiente caja de di\xe1logo de alerta (en Windows):"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:A(978644).Z+"",width:"482",height:"187"})}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,d.jsx)(n.p,{children:"La l\xednea :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0ALERT("Lo siento David, no puedo hacer eso.";"\xa1Alas!")\n'})}),"\n",(0,d.jsx)(n.p,{children:"muestra la caja de di\xe1logo de alerta (en Windows):"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:A(162939).Z+"",width:"482",height:"202"})}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,d.jsx)(n.p,{children:"La l\xednea:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0ALERT("Ya no tiene los privilegios de acceso para eliminar estos registros. ";" Bueno, le juro que no sab\xeda eso")\n'})}),"\n",(0,d.jsx)(n.p,{children:"Muestra la siguiente caja de di\xe1logo de alerta (en Windows):"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:A(201608).Z+"",width:"482",height:"166"})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/confirm",children:"CONFIRM"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/display-notification",children:"DISPLAY NOTIFICATION"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/request",children:"Request"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"41"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},978644:function(e,n,A){A.d(n,{Z:function(){return a}});let a="data:image/png;base64,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"},162939:function(e,n,A){A.d(n,{Z:function(){return a}});let a="data:image/png;base64,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"},201608:function(e,n,A){A.d(n,{Z:function(){return a}});let a="data:image/png;base64,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"},250065:function(e,n,A){A.d(n,{Z:function(){return l},a:function(){return t}});var a=A(667294);let d={},s=a.createContext(d);function t(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);