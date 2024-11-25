"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32745"],{624242:function(e,r,n){n.r(r),n.d(r,{metadata:()=>a,contentTitle:()=>d,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>s});var a=JSON.parse('{"id":"commands-legacy/count-parameters","title":"Count parameters","description":"Count parameters  : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/count-parameters.md","sourceDirName":"commands-legacy","slug":"/commands/count-parameters","permalink":"/docs/es/commands/count-parameters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcount-parameters.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"count-parameters","title":"Count parameters","slug":"/commands/count-parameters","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Copy parameters","permalink":"/docs/es/commands/copy-parameters"},"next":{"title":"cs","permalink":"/docs/es/commands/cs"}}'),o=n("785893"),t=n("250065");let s={id:"count-parameters",title:"Count parameters",slug:"/commands/count-parameters",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Count parameters"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe1metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Resultado"}),(0,o.jsx)(r.td,{children:"Integer"}),(0,o.jsx)(r.td,{children:"\u2190"}),(0,o.jsx)(r.td,{children:"N\xfamero de par\xe1metros efectivamente pasados"})]})})]}),"\n",(0,o.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsx)(r.p,{children:"El comando Count parameters devuelve el n\xfamero de par\xe1metros pasados a un m\xe9todo de proyecto."}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Advertencia:"})," Count parameters es significativo s\xf3lo en un m\xe9todo de proyecto que haya sido llamado por otro m\xe9todo (m\xe9todo de proyecto u otro). Si el m\xe9todo de proyecto que llama Count parameters est\xe1 asociado a un men\xfa, Count parameters devuelve 0."]}),"\n",(0,o.jsx)(r.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsxs)(r.p,{children:["Los m\xe9todos de proyecto de 4D aceptan par\xe1metros opcionales, a partir de la derecha.",(0,o.jsx)(r.br,{}),"\nPor ejemplo, puede llamar al m\xe9todo MiMetodo(a;b;c;d) de las siguientes formas:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:"\xa0MiMetodo(a;b;c;d)\xa0// Todos los par\xe1metros se pasan\n\xa0MiMetodo(a;b;c)\xa0// El \xfaltimo par\xe1metro no se pasa\n\xa0MiMetodo(a;b)\xa0// Los dos \xfaltimos par\xe1metros no se pasan\n\xa0MiMetodo(a)\xa0// S\xf3lo se pasa el primer par\xe1metro\n\xa0MiMetodo\xa0// No se pasa ning\xfan par\xe1metro\n"})}),"\n",(0,o.jsx)(r.p,{children:"Utilizando Count parameters desde MiMetodo, puede detectar el n\xfamero de par\xe1metros pasados y efectuar diferentes operaciones dependiendo de lo que haya recibido. El siguiente ejemplo muestra un mensaje de texto y puede insertar el texto en un \xe1rea 4D Write o enviar el texto a un documento en disco:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de proyecto AGREGAR TEXTO\n\xa0\xa0// AGREGAR TEXTO ( Texto { ; Entero largo { ; Hora } } )\n\xa0\xa0// AGREGAR TEXT ( Texto { ; \xc1rea 4D Write { ; RefDoc } } )\n\xa0\n\xa0var $1 : Text\n\xa0var $2 : Time\n\xa0var $3 : Integer\n\xa0\n\xa0MESSAGE($1)\n\xa0If(Count parameters>=3)\n\xa0\xa0\xa0\xa0SEND PACKET($3;$1)\n\xa0Else\n\xa0\xa0\xa0\xa0If(Count parameters>=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WR INSERT TEXT($2;$1)\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,o.jsx)(r.p,{children:"Despu\xe9s de a\xf1adir este m\xe9todo de proyecto a su aplicaci\xf3n, puede escribir:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:"\xa0AGREGAR TEXTO(vtText)\xa0// Mostrar s\xf3lo el mensaje de texto\n\xa0AGREGAR TEXTO(vtText;$wrArea)\xa0// Mostrar el mensaje de texto y a\xf1adir el texto a $wrArea\n\xa0AGREGAR TEXTO(vtText;0;$vhRefDoc)\xa0// Mostrar el mensaje de texto y escribirlo en $vhDocRef\n"})}),"\n",(0,o.jsx)(r.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsxs)(r.p,{children:["Los m\xe9todos de proyecto de 4D aceptan un n\xfamero variable de par\xe1metros del mismo tipo, a partir de la derecha. Para declarar estos par\xe1metros, utilice las directivas de compilaci\xf3n a las cuales usted pasa ",(0,o.jsx)(r.em,{children:"${N}"})," como una variable, donde N especifica el primer par\xe1metro. Utilizando Count parameters puede referenciar estos par\xe1metros con un bucle For y la sintaxis de indirecci\xf3n de par\xe1metro. Este ejemplo es una funci\xf3n que devuelve el n\xfamero m\xe1s grande recibido como par\xe1metro:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de proyecto Max de\n\xa0\xa0// Max de ( Real { ; Real2... ; RealN } ) -> Real\n\xa0\xa0// Max de ( Valor { ; Valor2... ; ValorN } ) -> Valor m\xe1ximo\n\xa0\n\xa0var $0;${1} : Real\xa0// Todos los par\xe1metros son de tipo REAL as\xed como el resultado de la funci\xf3n\n\xa0$0:=${1}\n\xa0For($vlParam;2;Count parameters)\n\xa0\xa0\xa0\xa0If(${$vlParam}>$0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=${$vlParam}\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,o.jsx)(r.p,{children:"Despu\xe9s de a\xf1adir este m\xe9todo de proyecto a su aplicaci\xf3n, puede escribir:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'\xa0vrResult:=Max of(Records in set("Operaci\xf3n A");Records in set("Operaci\xf3n B"))\n'})}),"\n",(0,o.jsx)(r.p,{children:"o:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:"\xa0vrResult:=Max of(r1;r2;r3;r4;r5;r6)\n"})}),"\n",(0,o.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.em,{children:"Comandos del Compilador"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/es/commands/copy-parameters",children:"Copy parameters"})]})]})}function m(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return s}});var a=n(667294);let o={},t=a.createContext(o);function s(e){let r=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);