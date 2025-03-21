"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41502"],{575306:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/screen-depth","title":"SCREEN DEPTH","description":"SCREEN DEPTH ( profundidad ; color {; pantalla} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/screen-depth.md","sourceDirName":"commands-legacy","slug":"/commands/screen-depth","permalink":"/docs/es/20-R7/commands/screen-depth","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fscreen-depth.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"screen-depth","title":"SCREEN DEPTH","slug":"/commands/screen-depth","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SCREEN COORDINATES","permalink":"/docs/es/20-R7/commands/screen-coordinates"},"next":{"title":"Screen height","permalink":"/docs/es/20-R7/commands/screen-height"}}'),d=r("785893"),l=r("250065");let i={id:"screen-depth",title:"SCREEN DEPTH",slug:"/commands/screen-depth",displayed_sidebar:"docs"},t=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SCREEN DEPTH"})," ( ",(0,d.jsx)(n.em,{children:"profundidad"})," ; ",(0,d.jsx)(n.em,{children:"color"})," {; ",(0,d.jsx)(n.em,{children:"pantalla"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"profundidad"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Profundidad de la pantalla (n\xfamero de colores = 2 ^ profundidad)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"color"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"1 = Pantalla color 0 = Pantalla blanco y negro o escala de grises"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"pantalla"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de la pantalla, o pantalla principal si se omite"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando SCREEN DEPTH devuelve en los par\xe1metros ",(0,d.jsx)(n.em,{children:"profundidad"})," y ",(0,d.jsx)(n.em,{children:"color"})," la informaci\xf3n sobre el monitor."]}),"\n",(0,d.jsx)(n.p,{children:"Despu\xe9s de la llamada:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Se devuelve la profundidad de la pantalla en ",(0,d.jsx)(n.em,{children:"profundidad"}),". La profundidad de la pantalla elevada como potencia de 2 permite conocer el n\xfamero de colores mostrados en su monitor. Por ejemplo, si su monitor est\xe1 definido para 256 colores (2^8), la profundidad de su pantalla es 8. Las siguientes son constantes predefinidas ofrecidas por 4D:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Black and white"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Four colors"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Sixteen colors"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Two fifty six colors"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"8"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thousands of colors"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"16"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Millions of colors 24 bit"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"24"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Millions of colors 32 bit"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"32"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Si el monitor est\xe1 configurado para mostrar colores, se devuelve ",(0,d.jsx)(n.em,{children:"1"})," en ",(0,d.jsx)(n.em,{children:"color"}),". Si el monitor est\xe1 configurado para mostrar escala de grises, se devuelve ",(0,d.jsx)(n.em,{children:"0"})," en ",(0,d.jsx)(n.em,{children:"color"}),". Note que este valor es significativo en la plataforma Macintosh. Las siguientes son constantes predefinidas ofrecidas por 4D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Is gray scale"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Is color"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["El par\xe1metro opcional ",(0,d.jsx)(n.em,{children:"pantalla"})," especifica el monitor para el cual quiere obtener la informaci\xf3n. Si omite el par\xe1metro ",(0,d.jsx)(n.em,{children:"pantalla"}),", el comando devuelve la profundidad de la pantalla principal."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"Su aplicaci\xf3n muestra varios gr\xe1ficos a color. Puede escribir en alguna parte en su base:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0SCREEN DEPTH($vlProf;$vlColor)\n\xa0If($vlProf<8)\n\xa0\xa0\xa0\xa0ALERT("Los formularios se ver\xedan mejor si el monitor"+" estuviera configurado para mostrar 256 colores o m\xe1s.")\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/count-screens",children:"Count screens"})}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"439"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return i}});var s=r(667294);let d={},l=s.createContext(d);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);