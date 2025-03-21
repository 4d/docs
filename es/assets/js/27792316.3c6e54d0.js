"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64250"],{268280:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>s,assets:()=>r,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/object-get-help-tip","title":"OBJECT Get help tip","description":"OBJECT Get help tip ( { ;} objeto* ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-help-tip.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-help-tip","permalink":"/docs/es/20-R7/commands/object-get-help-tip","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-help-tip.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-help-tip","title":"OBJECT Get help tip","slug":"/commands/object-get-help-tip","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get format","permalink":"/docs/es/20-R7/commands/object-get-format"},"next":{"title":"OBJECT Get horizontal alignment","permalink":"/docs/es/20-R7/commands/object-get-horizontal-alignment"}}'),o=t("785893"),i=t("250065");let d={id:"object-get-help-tip",title:"OBJECT Get help tip",slug:"/commands/object-get-help-tip",displayed_sidebar:"docs"},a=void 0,r={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OBJECT Get help tip"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objeto"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Mensaje de ayuda del objeto"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"OBJECT Get help tip"})," devuelve el mensaje de ayuda asociado al objeto o a los objetos designados por los par\xe1metros ",(0,o.jsx)(n.em,{children:"objeto"})," y ",(0,o.jsx)(n.em,{children:"*"})," en el proceso actual."]}),"\n",(0,o.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (una cadena). Si no pasa este par\xe1metro, esto indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena."]}),"\n",(0,o.jsxs)(n.p,{children:["El comando devuelve el mensaje de ayuda actual asociado al objeto, tal como est\xe1 definido en el modo Dise\xf1o o para el proceso utilizando el comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/object-set-help-tip",children:"OBJECT SET HELP TIP"}),". La cadena devuelta muestra el mensaje como aparece cuando se ejecuta el formulario. Si contiene elementos variables (",(0,o.jsx)(n.em,{children:"resname"})," xliff o referencias 4D), se interpretan en funci\xf3n del contexto."]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"El t\xedtulo de un bot\xf3n imagen se guarda en forma de mensaje de ayuda. Este t\xedtulo se guarda en un archivo xliff y difiere en funci\xf3n del lenguaje actual de la aplicaci\xf3n:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET HELP TIP(*;"button1";":xliff:btn_discover")\n\xa0$helpmessage:=OBJECT Get help tip(*;"button1")\n\xa0\xa0// $helpmessage contiene por ejemplo "D\xe9couvrir" con un 4D franc\xe9s y "Discover" con un 4D ingl\xe9s.\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/object-set-help-tip",children:"OBJECT SET HELP TIP"})}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"1182"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var s=t(667294);let o={},i=s.createContext(o);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);