"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61008"],{327894:function(e,a,s){s.r(a),s.d(a,{default:()=>m,frontMatter:()=>d,metadata:()=>l,assets:()=>o,toc:()=>t,contentTitle:()=>i});var l=JSON.parse('{"id":"commands-legacy/edit-formula","title":"EDIT FORMULA","description":"EDIT FORMULA ( tabla ; formula )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/edit-formula.md","sourceDirName":"commands-legacy","slug":"/commands/edit-formula","permalink":"/docs/es/commands/edit-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fedit-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"edit-formula","title":"EDIT FORMULA","slug":"/commands/edit-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Formulas","permalink":"/docs/es/category/formulas"},"next":{"title":"EXECUTE FORMULA","permalink":"/docs/es/commands/execute-formula"}}'),n=s("785893"),r=s("250065");let d={id:"edit-formula",title:"EDIT FORMULA",slug:"/commands/edit-formula",displayed_sidebar:"docs"},i=void 0,o={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"EDIT FORMULA"})," ( ",(0,n.jsx)(a.em,{children:"tabla"})," ; ",(0,n.jsx)(a.em,{children:"formula"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Par\xe1metro"}),(0,n.jsx)(a.th,{children:"Tipo"}),(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"tabla"}),(0,n.jsx)(a.td,{children:"Table"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Tabla a mostrar por defecto en el editor de f\xf3rmulas"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"formula"}),(0,n.jsx)(a.td,{children:"Text"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:'Variable que contiene la f\xf3rmula a mostrar en el editor de f\xf3rmulas o "" para mostrar s\xf3lo el editor'})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"\u2190"}),(0,n.jsx)(a.td,{children:"F\xf3rmula validada por el usuario"}),(0,n.jsx)(a.td,{}),(0,n.jsx)(a.td,{})]})]})]}),"\n",(0,n.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsx)(a.p,{children:"El comando EDIT FORMULA muestra el editor de f\xf3rmulas con el fin de permitir al usuario escribir o modificar una f\xf3rmula. El editor contiene al abrir:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["en la lista de la izquierda, los campos de la tabla pasados en el par\xe1metro ",(0,n.jsx)(a.em,{children:"tabla"}),","]}),"\n",(0,n.jsxs)(a.li,{children:["en el \xe1rea de f\xf3rmula, la f\xf3rmula contenida en la variable ",(0,n.jsx)(a.em,{children:"formula"}),". Si pasa una cadena vac\xeda en ",(0,n.jsx)(a.em,{children:"formula"}),", el editor es mostrado sin f\xf3rmula."]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["El usuario puede modificar y guardar la ",(0,n.jsx)(a.em,{children:"formula"})," mostrada. Tambi\xe9n es posible escribir o cargar una nueva f\xf3rmula. Sin embargo, si el usuario valida la caja de di\xe1logo, la variable de sistema OK toma el valor 1 y la variable ",(0,n.jsx)(a.em,{children:"formula"})," contiene la f\xf3rmula definida por el usuario. Si el usuario cancela la f\xf3rmula, la variable sistema OK toma el valor 0 y la variable ",(0,n.jsx)(a.em,{children:"formula"})," no cambia."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Notas:"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Por defecto, el acceso a los m\xe9todos y a los comandos est\xe1 restringido para todos los usuarios (excepto para el Dise\xf1ador y Administrador, en bases de datos creadas con 4D 2004.4 y posteriores). Cuando este mecanismo est\xe1 activado, usted debe designar expl\xedcitamente los elementos accesibles a los usuarios utilizando el comando ",(0,n.jsx)(a.a,{href:"/docs/es/commands/set-allowed-methods",children:"SET ALLOWED METHODS"}),". Si la ",(0,n.jsx)(a.em,{children:"formula"})," llama m\xe9todos que no han sido autorizados previamente en el editor de f\xf3rmulas utilizando el comando ",(0,n.jsx)(a.a,{href:"/docs/es/commands/set-allowed-methods",children:"SET ALLOWED METHODS"}),", se genera un error de sintaxis y no podr\xe1 validar la caja de di\xe1logo."]}),"\n",(0,n.jsxs)(a.li,{children:["El editor de f\xf3rmulas no est\xe1 asociado a ninguna barra de men\xfas de forma predeterminada. Debe instalar un men\xfa ",(0,n.jsx)(a.strong,{children:"Editar"})," est\xe1ndar en el proceso de llamada si desea que los usuarios puedan beneficiarse de los accesos directos cortar/copiar/pegar en el editor de f\xf3rmulas."]}),"\n",(0,n.jsxs)(a.li,{children:["La estructura virtual definida por los comandos ",(0,n.jsx)(a.a,{href:"/docs/es/commands/set-table-titles",children:"SET TABLE TITLES"})," y ",(0,n.jsx)(a.a,{href:"/docs/es/commands/set-field-titles",children:"SET FIELD TITLES"})," (si existe) no debe ser utilizada en la variable ",(0,n.jsx)(a.em,{children:"formula"}),", ni ser\xe1 utilizada por 4D en la variable devuelta. La estructura virtual s\xf3lo se utiliza en la caja de di\xe1logo del editor de f\xf3rmulas."]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Recuerde que cuando se valida la caja de di\xe1logo, el comando no ejecuta la ",(0,n.jsx)(a.em,{children:"formula"}),"; s\xf3lo valida y actualiza el contenido de la variable. Si quiere ejecutar la ",(0,n.jsx)(a.em,{children:"formula"}),", debe utilizar el comando ",(0,n.jsx)(a.a,{href:"/docs/es/commands/execute-formula",children:"EXECUTE FORMULA"}),"."]}),"\n",(0,n.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,n.jsx)(a.p,{children:"Visualizaci\xf3n del editor de f\xf3rmulas con la tabla [Empleados] y sin una f\xf3rmula introducida previamente:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0$miFormula:=""\n\xa0EDIT FORMULA([Empleados];$miFormula)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0APPLY TO SELECTION([Empleados];EXECUTE FORMULA($miFormula))\n\xa0End if\n'})}),"\n",(0,n.jsx)(a.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,n.jsx)(a.p,{children:"Si el usuario valida la caja de di\xe1logo, la variable sistema OK toma el valor 1. Si el usuario anula la caja de di\xe1logo, la variable sistema OK toma el valor 0."}),"\n",(0,n.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/docs/es/commands/apply-to-selection",children:"APPLY TO SELECTION"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/es/commands/execute-formula",children:"EXECUTE FORMULA"}),(0,n.jsx)(a.br,{}),"\n",(0,n.jsx)(a.a,{href:"/docs/es/commands/set-allowed-methods",children:"SET ALLOWED METHODS"})]}),"\n",(0,n.jsx)(a.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"N\xfamero de comando"}),(0,n.jsx)(a.td,{children:"806"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Hilo seguro"}),(0,n.jsx)(a.td,{children:"\u2717"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Modifica variables"}),(0,n.jsx)(a.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,a,s){s.d(a,{Z:function(){return i},a:function(){return d}});var l=s(667294);let n={},r=l.createContext(n);function d(e){let a=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),l.createElement(r.Provider,{value:a},e.children)}}}]);