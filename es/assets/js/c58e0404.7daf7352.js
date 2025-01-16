"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20267"],{64818:function(e,n,d){d.r(n),d.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>r});var o=JSON.parse('{"id":"commands-legacy/modified","title":"Modified","description":"Modified ( campo ) : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/modified.md","sourceDirName":"commands-legacy","slug":"/commands/modified","permalink":"/docs/es/commands/modified","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmodified.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"modified","title":"Modified","slug":"/commands/modified","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DIALOG","permalink":"/docs/es/commands/dialog"},"next":{"title":"MODIFY RECORD","permalink":"/docs/es/commands/modify-record"}}'),i=d("785893"),a=d("250065");let s={id:"modified",title:"Modified",slug:"/commands/modified",displayed_sidebar:"docs"},r=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Modified"})," ( ",(0,i.jsx)(n.em,{children:"campo"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"campo"}),(0,i.jsx)(n.td,{children:"Field"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Campo a probar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Verdadero si se ha asignado un nuevo valor al campo, de lo contrario Falso"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Modified"})," devuelve ",(0,i.jsx)(n.strong,{children:"True"})," si un valor ha sido asignado por programaci\xf3n a ",(0,i.jsx)(n.em,{children:"campo"})," o si ha sido modificado durante la entrada de datos. El comando ",(0,i.jsx)(n.strong,{children:"Modified"}),"debe utilizarse \xfanicamente en un m\xe9todo de formulario (o una subrutina llamada por un m\xe9todo de formulario)."]}),"\n",(0,i.jsxs)(n.p,{children:["Atenci\xf3n, este comando s\xf3lo devuelve un valor significativo dentro del mismo ciclo de ejecuci\xf3n. Particularmente devuelve ",(0,i.jsx)(n.strong,{children:"Falso"})," para todos los eventos de formulario que correspondan al antiguo ciclo de ejecuci\xf3n ",(0,i.jsx)(n.em,{children:"_o_During"})," (On Clicked, On After Keystroke, etc.)."]}),"\n",(0,i.jsxs)(n.p,{children:["Durante la entrada de datos, un campo se considera modificado si el usuario edita el campo (sin importar si cambia el valor original) y luego pasa a otro campo o hace clic en un control. Note que el hecho de salir de un campo con la ayuda de la tecla Tab no significa que ",(0,i.jsx)(n.strong,{children:"Modified"})," devuelva ",(0,i.jsx)(n.strong,{children:"True"}),". El campo debe editarse para que ",(0,i.jsx)(n.strong,{children:"Modified"})," sea ",(0,i.jsx)(n.strong,{children:"True"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Cuando se ejecuta un m\xe9todo, se considera que un campo ha sido modificado si se le asigna un valor (diferente o no)."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," ",(0,i.jsx)(n.strong,{children:"Modified"})," siempre devuelve ",(0,i.jsx)(n.strong,{children:"True"})," despu\xe9s de la ejecuci\xf3n de los comandos ",(0,i.jsx)(n.a,{href:"/docs/es/commands/push-record",children:"PUSH RECORD"})," y ",(0,i.jsx)(n.a,{href:"/docs/es/commands/pop-record",children:"POP RECORD"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["En todos los casos, utilice el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/old",children:"Old"})," apara detectar si el valor del campo en realidad ha sido modificado."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," aunque ",(0,i.jsx)(n.strong,{children:"Modified"})," puede aplicarse a todo tipo de campo, si lo utiliza con el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/old",children:"Old"}),", debe tener en cuenta las restricciones que aplican al comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/old",children:"Old"}),". Para m\xe1s detalles, ver la descripci\xf3n del comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/old",children:"Old"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Durante la entrada de datos, generalmente es m\xe1s f\xe1cil realizar operaciones en m\xe9todos objeto con ayuda del comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/form-event-code",children:"Form event code"})," que utilizar la funci\xf3n ",(0,i.jsx)(n.strong,{children:"Modified"})," en los m\xe9todos formulario. Como un m\xe9todo de objeto recibe el evento On Data Change cuando se modifica un campo, el uso de un m\xe9todo de objeto es equivalente a utilizar ",(0,i.jsx)(n.strong,{children:"Modified"})," en un m\xe9todo de formulario."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," para funcionar correctamente, el comando ",(0,i.jsx)(n.strong,{children:"Modified"})," debe utilizarse \xfanicamente en un m\xe9todo de formulario o en un m\xe9todo llamado por un m\xe9todo de formulario."]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsxs)(n.p,{children:["El siguiente ejemplo prueba si el campo ",(0,i.jsx)(n.em,{children:"[Ordenes]Cantidad"})," o el campo ",(0,i.jsx)(n.em,{children:"[Ordenes]Precio"})," ha sido modificado. Si alguno de los dos ha cambiado, entonces el campo ",(0,i.jsx)(n.em,{children:"[Ordenes]Total"})," se calcula nuevamente."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0If((Modified([Ordenes]Cantidad)|(Modified([Ordenes]Precio))\n\xa0\xa0\xa0\xa0[Orders]Total :=[Ordenes]Cantidad*[Ordenes]Precio\n\xa0End if\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note que el mismo resultado puede obtenerse utilizando la segunda l\xednea como una subrutina llamada por los m\xe9todos de objeto de los campos ",(0,i.jsx)(n.em,{children:"[Ordenes]Cantidad"})," y ",(0,i.jsx)(n.em,{children:"[Ordenes]Precio"})," en el evento de formulario On Data Change."]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsxs)(n.p,{children:["Selecciona un registro para la tabla ",(0,i.jsx)(n.em,{children:"[unaTabla]"}),", luego llama m\xfaltiples subrutinas que pueden modificar el campo ",(0,i.jsx)(n.em,{children:"[unaTabla]CampoImportante,"})," pero no guarda el registro. Al final del m\xe9todo principal, puede utilizar el comando Modified para determinar si debe guardar el registro:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// El registro ha sido seleccionado como registro actual\n\xa0\xa0// Luego realiza acciones utilizando subrutinas\n\xa0HACER ALGO\n\xa0HACER ALGO M\xc1S\n\xa0NO OLVIDAR HACER ESTO\n\xa0\xa0// ...\n\xa0\xa0// Y luego usted prueba el campo para determinar si el registro debe guardarse\n\xa0If(Modified([unaTabla]CampoImportante))\n\xa0\xa0\xa0\xa0SAVE RECORD([unaTabla])\n\xa0End if\n"})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/form-event-code",children:"Form event code"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/old",children:"Old"})]}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"32"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return r},a:function(){return s}});var o=d(667294);let i={},a=o.createContext(i);function s(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);