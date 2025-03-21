"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56225"],{288105:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>t,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/play","title":"PLAY","description":"PLAY ( nomObjeto {; canal} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/play.md","sourceDirName":"commands-legacy","slug":"/commands/play","permalink":"/docs/es/20-R7/commands/play","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fplay.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"play","title":"PLAY","slug":"/commands/play","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MOUSE POSITION","permalink":"/docs/es/20-R7/commands/mouse-position"},"next":{"title":"Pop up menu","permalink":"/docs/es/20-R7/commands/pop-up-menu"}}'),i=s("785893"),o=s("250065");let d={id:"play",title:"PLAY",slug:"/commands/play",displayed_sidebar:"docs"},c=void 0,a={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"PLAY"})," ( ",(0,i.jsx)(n.em,{children:"nomObjeto"})," {; ",(0,i.jsx)(n.em,{children:"canal"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nomObjeto"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre de archivo de sonido o sonido sistemaCadena vac\xeda para detener un sonido asincr\xf3nico"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"canal"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se pasa, canal de salida y ejecuci\xf3n asincr\xf3nico Si se omite, ejecuci\xf3n sincr\xf3nica"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"PLAY"})," permite reproducir archivos de sonido o multimedia. Pase la ruta de acceso completa del archivo que quiere reproducir en ",(0,i.jsx)(n.em,{children:"nombreObjeto"}),". En macOS, el comando tambi\xe9n puede utilizarse para reproducir un sonido sistema."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Para reproducir un archivo, pase su nombre y ruta de acceso en ",(0,i.jsx)(n.em,{children:"nomObjeto"}),". Puede pasar una ruta de acceso completa o relativa al archivo de estructura de la base.",(0,i.jsx)(n.br,{}),"\nSe soportan los principales formatos de archivos sonido y multimedia: .WAV, .MP3, .AVI, .AIFF (macOS), etc. Bajo macOS, el comando soporta particularmente formatos Core Audio."]}),"\n",(0,i.jsxs)(n.li,{children:["(macOS \xfanicamente) para reproducir un sonido sistema, pase directamente su nombre en el par\xe1metro ",(0,i.jsx)(n.em,{children:"nomObjeto"})," ",(0,i.jsx)(n.strong,{children:"."})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota"}),": los recursos 'snd', utilizados en Mac OS 9 y superiores, ya no se soportan."]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro ",(0,i.jsx)(n.em,{children:"asincrono"})," permite reproducir de forma as\xedncrona en Windows. S\xedncrono significa que todo el procesamiento se detiene hasta que el sonido haya terminado de reproducirse, as\xedncrono significa que la reproducci\xf3n no se detiene y el sonido se reproduce de fondo. Si se pasa ",(0,i.jsx)(n.em,{children:"asincrono"})," y contiene 0 (o cualquier valor entero largo), el sonido se reproduce de forma as\xedncrona. Si se omite, el sonido se reproduce de forma sincr\xf3nica."]}),"\n",(0,i.jsx)(n.p,{children:"Para detener un sonido asincr\xf3nico, utilice la siguiente instrucci\xf3n:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0PLAY("";0)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"El siguiente ejemplo muestra c\xf3mo reproducir un archivo WAV en Windows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$DocRef :=Open document("";"WAV";Read Mode)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($DocRef)\n\xa0\xa0\xa0\xa0PLAY(Document;0)\xa0//reproducir as\xedncronamente\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsx)(n.p,{children:"El siguiente c\xf3digo de ejemplo reproduce un sonido del sistema en macOS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0PLAY("Submarine.aiff")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/beep",children:"BEEP"})}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"290"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let i={},o=r.createContext(i);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);