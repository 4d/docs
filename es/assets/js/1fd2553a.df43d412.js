"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96349"],{308221:function(e,n,o){o.r(n),o.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>r,toc:()=>l,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/is-waiting-mouse-up","title":"Is waiting mouse up","description":"Is waiting mouse up  : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-waiting-mouse-up.md","sourceDirName":"commands-legacy","slug":"/commands/is-waiting-mouse-up","permalink":"/docs/es/20-R7/commands/is-waiting-mouse-up","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-waiting-mouse-up.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-waiting-mouse-up","title":"Is waiting mouse up","slug":"/commands/is-waiting-mouse-up","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"In header","permalink":"/docs/es/20-R7/commands/in-header"},"next":{"title":"Outside call","permalink":"/docs/es/20-R7/commands/outside-call"}}'),s=o("785893"),t=o("250065");let a={id:"is-waiting-mouse-up",title:"Is waiting mouse up",slug:"/commands/is-waiting-mouse-up",displayed_sidebar:"docs"},d=void 0,r={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Is waiting mouse up"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"True si el objeto est\xe1 esperando por un evento mouse up, de lo contrario False"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tema:"})," Eventos formulario"]}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"Is waiting mouse up"})," devuelve ",(0,s.jsx)(n.strong,{children:"True"})," despu\xe9s de que el objeto actual haya hecho clic y el bot\xf3n del rat\xf3n no se ha liberado, y cuando el di\xe1logo a\xfan tiene el foco. Debe llamarse desde el m\xe9todo de objeto del objeto actual."]}),"\n",(0,s.jsxs)(n.p,{children:["El comando devuelve ",(0,s.jsx)(n.strong,{children:"False"})," en los siguientes casos:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"no se llama a partir de un m\xe9todo de objeto"}),"\n",(0,s.jsx)(n.li,{children:"o no se dispar\xf3 el evento On Clicked en el objeto"}),"\n",(0,s.jsx)(n.li,{children:"o la caja de di\xe1logo ha perdido el foco."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Este comando debe ser utilizado junto con . Le permite sincronizar el estado interno del objeto de formulario con la aplicaci\xf3n global. B\xe1sicamente, permite a su c\xf3digo manejar el caso donde el usuario hizo clic y empez\xf3 a mover algo dentro de una imagen objeto de formulario, y esta acci\xf3n es interrumpida por un evento externo, como un cuadro de di\xe1logo de alerta. En este caso, el estado interno del objeto puede ser suspendido de forma indefinida debido a que se espera un evento mouse up que no ocurrir\xe1. Para abordar este problema, debe proteger el c\xf3digo de movimiento del rat\xf3n con un comando ",(0,s.jsx)(n.strong,{children:"Is waiting mouse up"})," lo que le asegura que es ejecutado en un contexto v\xe1lido."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente c\xf3digo se puede utilizar para administrar una funci\xf3n de seguimiento del rat\xf3n en un objeto imagen:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//M\xe9todo de objeto del objeto imagen\n\xa0var vLtracking : Integer\xa0//indicador para el modo de seguimiento \n\nCase of\n:(Form event code=On Clicked)\n\xa0If(Is waiting mouse up)\xa0//el bot\xf3n del rat\xf3n a\xfan no se suelta\n\xa0\xa0\xa0\xa0vLtracking:=1\xa0//estamos en modo de seguimiento\n\xa0\xa0//... Escriba aqu\xed el c\xf3digo de inicializaci\xf3n para la funci\xf3n de seguimiento\n\xa0End if\n:(Form event code=On Mouse Move)\n\xa0If(vLtracking=1)\xa0//estamos en modo de seguimiento\n\xa0\xa0\xa0\xa0If(Not(Is waiting mouse up))\xa0//nunca tendremos el rat\xf3n hacia arriba\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLtracking:=0\xa0//detiene el modo de seguimiento\n\xa0\xa0//... Escriba aqu\xed el c\xf3digo para manejar o cancelar la acci\xf3n de seguimiento del usuario\n\xa0\xa0\xa0\xa0Else\xa0//el objeto todav\xeda est\xe1 esperando un rat\xf3n hacia arriba\n\xa0\xa0//... Escriba aqu\xed el c\xf3digo para el seguimiento\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n:(Form event code=On Mouse Up)\xa0//se solt\xf3 el bot\xf3n del rat\xf3n\n\xa0\xa0//... Escriba aqu\xed el c\xf3digo para completar la acci\xf3n de seguimiento\n\xa0vLtracking:=0\xa0//fin del modo de seguimiento\nEnd case\n\n\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/form-event-code",children:"Form event code"})}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1422"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return a}});var i=o(667294);let s={},t=i.createContext(s);function a(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);