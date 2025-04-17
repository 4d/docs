"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36115"],{436241:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>l,assets:()=>t,toc:()=>d,contentTitle:()=>i});var l=JSON.parse('{"id":"commands-legacy/volume-attributes","title":"VOLUME ATTRIBUTES","description":"VOLUME ATTRIBUTES ( volumen ; tama\xf1o ; utilizado ; libre )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/volume-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/volume-attributes","permalink":"/docs/es/commands/volume-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvolume-attributes.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"volume-attributes","title":"VOLUME ATTRIBUTES","slug":"/commands/volume-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"TEXT TO DOCUMENT","permalink":"/docs/es/commands/text-to-document"},"next":{"title":"VOLUME LIST","permalink":"/docs/es/commands/volume-list"}}'),o=s("785893"),r=s("250065");let a={id:"volume-attributes",title:"VOLUME ATTRIBUTES",slug:"/commands/volume-attributes",displayed_sidebar:"docs"},i=void 0,t={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VOLUME ATTRIBUTES"})," ( ",(0,o.jsx)(n.em,{children:"volumen"})," ; ",(0,o.jsx)(n.em,{children:"tama\xf1o"})," ; ",(0,o.jsx)(n.em,{children:"utilizado"})," ; ",(0,o.jsx)(n.em,{children:"libre"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"volumen"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nombre del volumen"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tama\xf1o"}),(0,o.jsx)(n.td,{children:"Real"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Tama\xf1o del volumen expresado en bytes"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"utilizado"}),(0,o.jsx)(n.td,{children:"Real"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Espacio utilizado expresado en bytes"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"libre"}),(0,o.jsx)(n.td,{children:"Real"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Espacio libre expresado en bytes"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando VOLUME ATTRIBUTES devuelve en bytes el tama\xf1o, el espacio utilizado y el espacio libre del volumen cuyo nombre se pasa en ",(0,o.jsx)(n.em,{children:"volumen"}),".si ",(0,o.jsx)(n.em,{children:"volumen"})," indica un volumen remoto no montado, la variable OK toma el valor 0 y los tres par\xe1metros devuelven -1."]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"Su aplicaci\xf3n incluye algunas operaciones por lotes que se ejecutan en la noche o los fines de semana para almacenar archivos temporales grandes en disco. Para que este proceso sea tan autom\xe1tico y flexible como sea posible, usted escribe una rutina que buscar\xe1 autom\xe1ticamente el primer volumen cuyo espacio libre sea suficiente para sus archivos temporales. He aqu\xed el m\xe9todo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de proyecto Buscar volumen para espacio\n\xa0\xa0// Buscar volumen para espacio ( Real ) -> Alfa\n\xa0\xa0// Buscar volumen para espacio ( Espacio necesario en bytes ) -> Nombre del volumen o cadena vac\xeda\n\xa0\n\xa0#DECLARE($space : Real) -> $result : Text\n\xa0C_STRING(255;$vsDocNombre)\n\xa0var $vlNbVolumenes;$vlVolumenes : Integer\n\xa0var $vlTama\xf1o;$vlUtilizado;$vlLibre : Real\n\xa0var $vhDocRef : Time\n\xa0\n\xa0\xa0// Inicializar el resultado de la funci\xf3n\n\xa0$result:=""\n\xa0\xa0// Proteger todas las operaciones de entrada/salida con un m\xe9todo de interrupci\xf3n de errores\n\xa0ON ERR CALL("ERROR METHOD")\n\xa0\xa0// Obtener la lista de los vol\xfamenes\n\xa0ARRAY STRING(31;$asVolumenes;0)\n\xa0gError:=0\n\xa0VOLUME LIST($asVolumenes)\n\xa0If(gError=0)\n\xa0\xa0// Si se corre en Windows, ignorar los dos lectores de diskettes\n\xa0\xa0\xa0\xa0If(On Windows)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlVolumen:=Find in array($asVolumenes;"A:\\\\")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlVolumen>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY($asVolumenes;$vlVolumen)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlVolumen:=Find in array($asVolumenes;"B:\\\\")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlVolumen>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FORM ARRAY($asVolumenes;$vlVolumen)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0$vlNbVolumenes:=Size of array($asVolumenes)\n\xa0\xa0// Para cada volumen\n\xa0\xa0\xa0\xa0For($vlVolumen;1;$vlNbVolumenes)\n\xa0\xa0// Obtener el tama\xf1o, el espacio utilizado y el espacio libre\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0gError:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0VOLUME ATTRIBUTES($asVolumenes{$vlVolumen};$vlTama\xf1o;$vlUtilizado;$vlLibre)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(gError=0)\n\xa0\xa0// \xbfEl espacio libre es suficiente (m\xe1s de 32K extra) ?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlLibre>=($space+32768))\n\xa0\xa0// Si es as\xed, verificar si el volumen no est\xe1 bloqueado..\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsDocNombre:=$asVolumenes{$vlVolumen}+Char(Directory symbol)+"XYZ"+String(Random)+".TXT"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhDocRef:=Create document($vsDocNombre)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocNombre)\n\xa0\xa0// Si todo est\xe1 bien, devolver el nombre del volumen\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$result:=$asVolumenes{$vlVolumen}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlVolumen:=$vlNbVolumenes+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n\xa0ON ERR CALL("")\n'})}),"\n",(0,o.jsx)(n.p,{children:"Una vez se a\xf1ade este m\xe9todo de proyecto a su aplicaci\xf3n, puede escribir:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0$vsVolumen:=Buscar volumen para espacio(100*1024*1024)\n\xa0If($vsVolumen#"")\n\xa0\xa0// Continuar\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("\xa1Es necesario un volumen con por lo menos 100 MB de espacio libre!")\n\xa0End if\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/volume-list",children:"VOLUME LIST"})}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"472"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modifica variables"}),(0,o.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var l=s(667294);let o={},r=l.createContext(o);function a(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);