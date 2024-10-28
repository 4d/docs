"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41369],{783874:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=s(474848),t=s(28453);const o={id:"append-to-list",title:"APPEND TO LIST",slug:"/commands/append-to-list",displayed_sidebar:"docs"},l=void 0,r={id:"commands-legacy/append-to-list",title:"APPEND TO LIST",description:"APPEND TO LIST ( lista ; textoElem ; refElem {; sublista ; desplegada} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/append-to-list.md",sourceDirName:"commands-legacy",slug:"/commands/append-to-list",permalink:"/docs/es/commands/append-to-list",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fappend-to-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"append-to-list",title:"APPEND TO LIST",slug:"/commands/append-to-list",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"HTTP SET OPTION",permalink:"/docs/es/commands/http-set-option"},next:{title:"CLEAR LIST",permalink:"/docs/es/commands/clear-list"}},i={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"APPEND TO LIST"})," ( ",(0,a.jsx)(n.em,{children:"lista"})," ; ",(0,a.jsx)(n.em,{children:"textoElem"})," ; ",(0,a.jsx)(n.em,{children:"refElem"})," {; ",(0,a.jsx)(n.em,{children:"sublista"})," ; ",(0,a.jsx)(n.em,{children:"desplegada"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"lista"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de referencia de lista"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"textoElem"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Texto del nuevo elemento de lista (max. 255 caracteres)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"refElem"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de referencia \xfanico del nuevo elemento"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"sublista"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Sublista opcional para a\xf1adir al nuevo elemento"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"desplegada"}),(0,a.jsx)(n.td,{children:"Boolean"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Indica si las sublistas opcionales ser\xe1n desplegadas o contra\xeddas"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando APPEND TO LIST a\xf1ade un nuevo elemento a la lista jer\xe1rquica cuyo n\xfamero de referencia se pasa en ",(0,a.jsx)(n.em,{children:"lista"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["El texto del elemento se pasa en ",(0,a.jsx)(n.em,{children:"textoElem"}),". Puede pasar una expresi\xf3n de tipo Alfa o Texto de m\xe1ximo 2 000 000 caracteres. A partir de 4D v16 R4, si el elemento est\xe1 asociado con una acci\xf3n est\xe1ndar, puede pasar la constante ak standard action title en ",(0,a.jsx)(n.em,{children:"textoElem"})," para usar autom\xe1ticamente el nombre de la acci\xf3n localizado. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,a.jsx)(n.em,{children:"Acciones est\xe1ndar"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["El n\xfamero de referencia \xfanico del elemento (del tipo Entero largo) se pasa en ",(0,a.jsx)(n.em,{children:"refElem"}),". Aunque clasificamos este n\xfamero de referencia como \xfanico, en realidad puede pasar el valor que quiera. Consulte la secci\xf3n ",(0,a.jsx)(n.em,{children:"Gesti\xf3n de listas jer\xe1rquicas"})," para mayor informaci\xf3n sobre el par\xe1metro ",(0,a.jsx)(n.em,{children:"refElem."})]}),"\n",(0,a.jsxs)(n.p,{children:["Igualmente si quiere que un elemento tenga elementos hijos, pase un n\xfamero de referencia de lista v\xe1lido en el par\xe1metro ",(0,a.jsx)(n.em,{children:"sublista"}),". En este caso, tambi\xe9n debe pasar el par\xe1metro ",(0,a.jsx)(n.em,{children:"expandido"}),". Pase ",(0,a.jsx)(n.strong,{children:"True"})," o ",(0,a.jsx)(n.strong,{children:"False"})," en este par\xe1metro de manera que la sublista se muestre desplegada o contra\xedda respectivamente."]}),"\n",(0,a.jsxs)(n.p,{children:["La referencia de la lista que pasa en ",(0,a.jsx)(n.em,{children:"sublista"})," debe hacer referencia a una lista existente. La lista existente podr\xeda tener un solo nivel o tener sublistas. Si no quiere a\xf1adir una lista hija al nuevo elemento, omita el par\xe1metro o pase 0. Aunque ambos son opcionales, los par\xe1metros ",(0,a.jsx)(n.em,{children:"sublista"})," y ",(0,a.jsx)(n.em,{children:"desplegada"})," deben pasarse de forma conjunta."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Consejos:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Para insertar un nuevo elemento en una lista, utilice ",(0,a.jsx)(n.a,{href:"/docs/es/commands/insert-in-list",children:"INSERT IN LIST"}),". Para cambiar el texto de un elemento existente o modificar su lista hija al igual que su estado desplegado, utilice ",(0,a.jsx)(n.a,{href:"/docs/es/commands/set-list-item",children:"SET LIST ITEM"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Para cambiar la apariencia del nuevo elemento a\xf1adido utilice ",(0,a.jsx)(n.a,{href:"/docs/es/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Esta es una vista parcial de la estructura de una base:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(226503).A+"",width:"364",height:"188"})}),"\n",(0,a.jsx)(n.p,{children:"Las tablas [Departamentos] y [Empleados] contienen los siguientes registros:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(892845).A+"",width:"446",height:"89"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(608635).A+"",width:"420",height:"173"})}),"\n",(0,a.jsxs)(n.p,{children:["Usted quiere mostrar una lista jer\xe1rquica, llamada ",(0,a.jsx)(n.em,{children:"hlList"}),", que muestre los departamentos y para cada departamento, un lista hija que muestre los empleados que trabajan en ese departamento. El m\xe9todo de objeto de ",(0,a.jsx)(n.em,{children:"hlList"})," es:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto de lista jer\xe1rquica hlList\n\xa0\n\xa0Case of\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var hlList;$hSubList;$vlDepartament;$vlEmpleado;$v1DepartmentID : Integer\n\xa0\xa0// Crear una nueva lista jer\xe1rquica vac\xeda\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0hlList:=New list\n\xa0\xa0// Seleccionar todos los registros de la tabla [Departamentos]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALL RECORDS([Departamentos])\n\xa0\xa0// Para cada departamento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlDepartament;1;Records in selection([Departamentos]))\n\xa0\xa0// Seleccionar los empleados de ese departamento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RELATE MANY([Departamentos]Nombre)\n\xa0\xa0// \xbfCu\xe1ntos hay?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbEmpleados:=Records in selection([Empleados])\n\xa0\xa0// \xbfHay por lo menos un empleado en este departamento?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbEmpleados>0)\n\xa0\xa0// Crear una lista hija para el elemento Departamento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$hSubList:=New list\n\xa0\xa0// Para cada Empleado\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlEmpleado;1;Records in selection([Empleados]))\n\xa0\xa0// A\xf1adir el elemento Empleado a la sublista\n\xa0\xa0// Note que el campo ID del registro [Empleados]\n\xa0\xa0// se pasa como n\xfamero de referencia del elemento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0APPEND TO LIST($hSubList;[Empleados]Apellido+", "+[Empleados]Nombre;[Empleados]ID))\n\xa0\xa0// Ir al siguiente registro [Empleados]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([Empleados])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// No Empleados, no lista hija para el elemento Departamento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$hSubList:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// A\xf1adir el elemento Departamento a la lista principal\n\xa0\xa0// Note que el n\xfamero del registro [Departamentos]\n\xa0\xa0// se pasa como n\xfamero de referencia del elemento. El bit #31\n\xa0\xa0// del n\xfamero de referencia del elemento es forzado a uno de manera que podamos\n\xa0\xa0// distinguir entre los elementos Departamentos y Empleados. Ver nota sobre por qu\xe9\n\xa0\xa0// podemos utilizar este bit como informaci\xf3n suplementaria sobre el elemento.\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0APPEND TO LIST(hlList;[Departamentos]Nombre;[Departamentos]ID?+31;$hSublist;$hSubList #0)\n\xa0\xa0// Asignar el elemento Departamento en negrita para enfatizar la jerarqu\xeda de la lista\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET LIST ITEM PROPERTIES(hlList;0;False;Bold;0)\n\xa0\xa0// Ir al siguiente Departamento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([Departamentos])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Ordenar toda la lista en orden ascendente\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SORT LIST(hlList;>)\xa0// Mostrar la lista utilizando el estilo Windows\n\xa0\xa0// y forzar la altura de l\xednea m\xednima a 14 Pts\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET LIST PROPERTIES(hlList;Ala Windows;Windows node;14)\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0// La lista ya no es necesaria; \xa1No olvide borrarla!\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR LIST(hlList;*)\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Double Clicked)\n\xa0\xa0// Hay un doble clic\n\xa0\xa0// Obtener la posici\xf3n del elemento seleccionado\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlItemPos:=Selected list items(hlList)\n\xa0\xa0// Verificar la posici\xf3n\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlItemPos #0)\n\xa0\xa0// Obtener la informaci\xf3n del elemento de la lista\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET LIST ITEM(hlList;$vlItemPos;$vlItemRef;$vsItemText;$vlItemSubList;$vbItemSubExpanded)\n\xa0\xa0// \xbfEste elemento es elemento de un Departamento?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlItemRef ?? 31)\n\xa0\xa0// Si es as\xed, es un doble clic en un elemento Departamento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Usted hizo doble clic en el elemento Departamento "+Char(34)+$vsItemText+Char(34)+".")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Si no, es un doble clic en un elemento Empleado\n\xa0\xa0// Utilizando el n\xfamero de referencia del elemento padre encontrar el registro [Departamentos]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$v1DepartmentID:=List item parent(hlList;$vlItemRef)?-31)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Departamentos];[Departmentos]ID=$vlDepartmentID)\n\xa0\xa0// Informar donde trabaja el Empleado y a qui\xe9n le reporta\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Usted hizo doble clic en el elemento Empleado "+Char(34)+$vsItemText+Char(34)+" que trabaja en el Departamento "+Char(34)+\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Departamentos]Nombre+Char(34)+" cuyo gerente es "+Char(34)+[Departamentos]Gerente+Char(34)+".")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0End case\n\xa0\n\xa0\xa0// Nota: 4D puede almacenar hasta 1 000 millones de registros por tabla.\n\xa0\xa0// En nuestro ejemplo, utilizamos el bit #31 del byte superior no utilizado para\n\xa0\xa0// diferenciar los elementos de Empleados y Departamentos.\n'})}),"\n",(0,a.jsx)(n.p,{children:"En este ejemplo, s\xf3lo hay una raz\xf3n para establecer una diferencia entre los elementos [Departamentos] y [Empleados]:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Almacenamos n\xfameros de registros en los n\xfameros de referencia de los elementos; por lo tanto, probablemente terminaremos con elementos [Departamentos] cuyo n\xfamero de referencia de elemento son los mismos que los de los elementos [Empleados]."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Utilizamos el comando List parent item para recuperar el padre del elemento seleccionado. Si hacemos clic en un elemento [Empleados] cuyo n\xfamero de registro asociado es 10, y si existe tambi\xe9n un elemento [Departamentos] que tiene el n\xfamero 10, el elemento [Departamentos] ser\xe1 encontrado primero por List parent item cuando esta funci\xf3n analice la lista para ubicar el elemento con el n\xfamero de referencia del elemento que pasamos. El comando devolver\xe1 el padre del elemento [Departamentos] y no el padre del elemento [Empleados]."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Por lo tanto, hemos hecho que los n\xfameros de referencia de los elementos sean \xfanicos, no porque queramos n\xfamero \xfanicos, si no por que necesitamos diferenciar los elementos de [Departamentos] y [Empleados]."}),"\n",(0,a.jsx)(n.p,{children:"Cuando el formulario se ejecuta, la lista se ver\xe1 de esta forma:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(196157).A+"",width:"410",height:"343"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," este ejemplo es \xfatil para prop\xf3sitos de interfaz de usuario si trabaja con un n\xfamero limitado de registros. Recuerde que las listas se conservan en memoria, no construya interfaces de usuario con listas jer\xe1rquicas que contengan millones de elementos."]}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/insert-in-list",children:"INSERT IN LIST"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/set-list-item",children:"SET LIST ITEM"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},226503:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/pict334094.es-584b0c15af6ef7067bd413b8ed13a268.png"},892845:(e,n,s)=>{s.d(n,{A:()=>a});const a="data:image/png;base64,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"},608635:(e,n,s)=>{s.d(n,{A:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAACtCAIAAABwVpweAAAZlUlEQVR42u2dX4wd113HT3jgBeUpT5TESwyWrWQJeYlkGpzGLoF6uZaAWFEqqtiFSG1sRREk3q5RI4pcEeMkqqIodkOB7lpIjcwGkNbZpITGqRdKpL6EZBNtMdi5axOe8hTxwgNwZ+78OX9+c+bfmXPnd+b7kWXdO3Nm5t7znd9vzpy5+/ve9Nprr91yyy0CMOeTTz6BjoyAXv65CckuDBA8vIBe/omS3a5du2b9MUBbrly5Ah0ZAb38EyW7+fn5WX8M0JbNzU3oyAjo5Z8o2d11112z/higLe+99x50ZAT08k+U7O68885ZfwzQlg8++GCWOn68+ntfF9/8q8OfmXU/cGE2ek1l+qb4OilW6CI6TXaTzvrsU2+l7479zUeL97j9tN7U4Cd7k+CJ9RLP/Sj5ntHbq481E41fh82YFslOk63mplmyM1Ne6CI6fUDxX3/3lc9de/Tf/vCe5PXXxJ/98OXf/ll3n3ay02+Ibzjd5YwP5IwmE96RRm+I/bsffTmTLJWvLvw6bMY0f0ARdfUb4pL4QoPYmso0/WduHbqIUbK744473Ozs49Xfv/faV6+dSKLlx8/e/pC4kLyN1p2IRn0Hnv3nv4yuHZMFT4uDe06cOJsvzBopi5JmBw4ceOutbNx44NkLB19/yGx877WDz26diJcfu3Dt/rdvf0jaf7WPIX8Kc1m2K4Xou26Razzx4Ycf1tZxqtcF8e3x72a9l8hnfl973wpCTalvj8WngdH5PetDnzTRKybu1FNfvXbvt29Pu4oKpbQtcbafOiWezv7XznczUAISK0p2d999t5udfXzhkXuuHvvPpb3J+3dO/9zZnT8+/9BnqFdR4z+449WodfTy4iheLe8qXiTyZvHSJXFabkc0Ft9KD/Tgi49PN0wPum39GNKn1A4kfbG8jUJ0tA+/ZS73xrvvvltbx+RrPbL9yPkd55f25t+S+r4fW/v2tFgy1ZT7lj4b+tWHPmmiV0R6ZgrpDC0IJTroJltNxMr+P/+r/5RpnZ/1DE74BkTJbu/eve13FHHjew//8r8/8cnTv6K//5dTt/zjryXLJ69f+MV/feWL4nsPPyWee+WLt8oLb5X3Fa9Wmt2Q36gHNhrfMF///HftHyPfRD3QDftH7QXvvPNObR0lfR7+6Muv7NtI3pLf1963z4mn5CX0fozO71kf+qSJXqLgFKXPz+Kgm4qV/Z/FbLYfDid8A6Jkd//997vZ2Y2/fnD3lSf/+08+m7z/0R//zPO7fvLql8Rk+VfeyNt94eXpwifEC69+6Va55a3xPpK2ZrMb8pvkgEWNbxivXxBP2D9Gvol6oPzTEV+yJ7z99tu1dcy/yuTVd3a+sOv56Vvy++4o61tFze//xmQ/WjOz8/nHT2Oa6GX0YtKJN6hQsgTdVKzp/09e2Z1pne2HwwnfgC6T3aTLHhBvRm/Ts19rrERCGmbJJulqS7KzNzYD8tWd3yn9GGSyU76XciL0h3bJLvpaD35fiOfEk9MkZX7f0guJqaYehEbnD5hGyc44LafvyFCyBJ2c7DThsh32/oRvQJTsHnjgATc7u37+t37hypP/c2pf8vrRX/rB9I3YePqnn9/1H3//yG3x62h2dN+kwePixXhRtl2+g+jV3/7OZAuRN5vu5x9+PdlnSePrxOuPrB9D3kQ+kPLF5G8iMVn8+ff/wlzujTfffLO2jrJeU8HWv/aDtEP173vd2rcviselrvu8SHejaqd3fs/60CcN9ZL6M+9RQYSSsATdVKxEstv/PG2VhdFtHE74BkTJ7uDBg252dn3l0NyXX0vfLf3wf/90H7XuN787Xjtym9x4uiR6tfFHP/W509GSpSXx/u6za0fEyqFj4myyVtpNtMnOc5bG18nX1Mco2iQ/kPxp1a+VEn3u97NvMQNef/312jpGX+oni9nXib6DSL6d+X2vW/v2rDhmqnld1c7s/J71oU8a6KXJJeIeO7N7vHbgLSqUhCg62ydiZf9PFhoxp5z/fT3hGxAlu4WFhRkceXvl0HHx0tqRHbPugjBYX1+fjY6gES71QihVA8kuEJDseIFk55/ZJTvgFCQ7XkAv/yDZBQKChxfQyz9Rsvv0009n/TFAW26++WboyAjo5R+M7AIBIwVeQC//INkFAoKHF9DLP0h2gYDg4QX08g+SXSAgeHgBvfyDZBcICB5eQC//INkFAoKHF9DLPzNNdvjltzsQPLxwr9c0ml4SxxFTBThNdpPunjt6MX23dPn/ntlnzWh1k13XyZFz8m0SPKReVbZi20v9oYFekVyrh8dSz2+cvOnMnvHa/kt5mkOyK8Z5sttanIbMRIf7REn4IGzc0TTZpXrFiU8sj6GGH9rqFZHkukQxjOzK6CzZZa+zjJaPI0ZJTFlWRUT58nSy63i5iNovHl69Lx2OjMzgjI97eHnzaNxmMlpZWJ/uJWo7uQTOadvGn+Hw/NGjp5cuj/ecSU+XeInSas5y0B7gIHjS69PcSoVeKlQNVKLRbawqWJbr5DQX/18SI0Olq2SXv0wyWpRnknWaSOQqZcyeLhXqSNAc1gt1hBJny+TuTL0K5tuKqP28fMc9OV2yJdpWRQftAe5HCvZeolUDVWk2Z6cNJ5JoMJJdSYwMFV9zdooGavIqWpXHYUGyI2+D5WVFr+V2wmgjfx7iCD2993aR7PT3VXsJ2a4+DR9QGIOI/A6JnrPr6ek6Ezq9jU0HBZPeXtyay8MhbTdXvErI4aMnO5EnVWOQXpbs9G0rJ7tty0F7gNuR3XZpL5GqVXm+AWKaPo1VY8c8b9OzV/T7dJ0JnSU7TZXo3rBgpGZZRSa7SZgljz7qj+zMbSsmu/x5S08vlQ7n7PaZX5bsJVO1nvVJn2n805OpaNnEabJIS3b2GBkqvkZ2tefspKe56q6iyddsIE/O2RUnO2LbaslOyHcPvZwEcfI0dj6Nj7nSXsKcXTua/84u6v+tebG5J0th5AOKfp+uM6G7OTvLI9f0F12WVUJ6GDsajS7OSw92d55Lnq8uLcmSZ5/BdhtrbFv1Njb9NORBe4DT39kZX1ZQvUqqBqrR4kfFxq+EiNtYa4wMFQ5/LoaReAXwFxS8gF7+6W+yk35lh4FDOQgeXkAv//Q32YFaIHh4Ab38g2QXCAgeXkAv/yDZBQKChxfQyz9IdoGA4OEF9PIPkl0gIHh4Ab38g2QXCAgeXkAv/yDZBQKChxfQyz9IdoGA4OEF9PIPkl0gIHh4Ab38g2QXCAgeXkAv/7BKdg28eyr+XS3/P7/tafDw79iO6EAvqXANoHCf7FrYNZRFBrneVqYVya4cpfSJ879C5t+xHdG6So0uFQqoluI42akXl42Th64+VuNEb5Ts7KuQ7Mq+tzwY2Dh5UjzjNFz4d2xHtKw/iDp1DXCb7AqqOBb4iqkOXmpxtdHyZdMhidiqYGRnDC8FOd7sv2lYZRolO4vfZdY1pmRLy6l5myDtx6aVB82OhRuZhItiq0pV8CKxsnqscoNuh/N9pbuy7NRSuUYx4eBVMAygPK7yKxuR7KQiuuYulS2Lm3HDhQdFjlIx2pTM7EzZfkyQHUudBrPutBniMNmVikU0IPYYPk6THXkSK3mEspjQLeGK70W1rWRfWjnZyfYIFnswsXLI1owZTYKHMNiZXuUnK9YXSqzdKkgj1LLGcCOTaJnspDF5qVhUg0H6JLlOduZdEdm9c5WSnc3jKpOQdBvJjmixBxtLH2yYyU472eXrhzSjQHW+VZoNqmMHHWUEbR9QEJMD0gr92mM02DFEEbqfs1P6tM7IrtTjyjKyq2IPRn8GrjiYs8uVkscCko5yOqvYmYphBdzIctxNO5SJRTYYpAYensZafMX02JBlsXtc6eGmu41It2fZnJLut6TexTF/tuXgaWzBrFryiFYbI1vsxwTZsZizU3A4x2oXi24wSAm6/Z3dUu6FWOArZr7OnxpRTmDkMN4c0xFeYJQ9WN8tw2rg5Hd20lNSwxNcHywU24+Jgo6FG5mE0wdKdrEEOYWTGrwMSA1Wf0EBiunpX1CAAqCXf5DsAgHBwwvo5R8ku0BA8PACevkHyS4QEDy8gF7+QbILBAQPL6CXf5DsAgHBwwvo5R8ku0BA8PACevkHyS4QEDy8gF7+QbILBAQPL6CXf5DsAgHBwwvo5R8ku0BA8PACevkHyS4QEDy8gF7+QbILBAQPL6CXf1wmO7NQUv1CMvwLy80I7+5iUKoVrqvUgHI69aBoUDQLIdQQ7+5iUKoVLvSq6943dNzexqrZzqjEXWCAJGoYjOWl0nBZU3DpLlZcWjXteVkZUilBnwkwGEtpqpc+eiAHenKMRI4sCKKYDioVUyY2JQZI1Q3GcuOIjZWVuSOD0akUl8UgyWS3ofW8KFcqrTotFeNHseIEt25w6VprjAw+iFw/oFAqdsu5zmqAVN1gbDz0ICnCpbtYSbKbUmpLnoleZHk1aCHb6UVSGiNDDyLnT2ML/MNKDZAqGoztQG1vGsfuYrQ0cs+XKpVe4kQaWjAYk2iY7ApmHewxgiCa0o0HxdbieM8Z1fHDaoBU3WDMGJIP7epUhEt3saLJiKxV1PP7L5UqFcs+ORPO7VxLrUhgMJbgas6uPEYWt+YQRDEd/M4u6tKtedXApsQAqbLB2P5LJy/tf0ZvB9y6i0lBEIXS5nQgrvd8iRVcOlW7OZpfXNNbDT7XOXsau3B49T5rjEwuNgiiKV38qDhWRCwXPjUyDZCqG4zltkiDGoCX4/Z3W/kc3vLy5qpi2KZYxFmUylzI5Buvgd4/ETjRK+5Ew8lNj5HSBkMBf0ERCPhFPi+gl3+Q7AIBwcML6OUfJLtAQPDwAnr5B8kuEBA8vIBe/kGyCwQEDy+gl3+Q7AIBwcML6OUfJLtAQPDwAnr5B8kuEBA8vIBe/kGyCwQEDy+gl3+Q7AIBwcML6OUfJLtAQPDwAnr5B8kuEBA8vIBe/mGV7Cy2B6WlJBvvmQnug2faJy+J48x7pp/MINnxP8lb0k09u4buR2VqkOvlmDQjE8muDMJdzN6lVffKvEM7ZgbuYoPXpAMPiubuR42SnX0Vkl3Z9y50F2s1suPfoR0zA3exwWviNtkVlGQ0PaWaWYsRWxWM7IzLnyCvhwF5cLp3F5O6VO9zpe9MTUej0cWLkpTwFTPp0F0sFyKtn2879S0hWW5dxkvITn1jjaUtrcVEvlVeEJdIdvsvZUc0d6lsWdyMG+7dxbIuNfu81C5O71DUKNbp0F1MkOWn9Xrg1dz+jJ1zdiZzmuzI83ib8pRqZi2mbSW7w8jJLorPQgsFZW+2Zsxw7y5mztnlgVNmF6d1KHkO8O1rF3ToLkaGiZBVqO72Z+ycszOZ62Rn3hWRnlJzlZKdXspd9+KLBTMjc3FrLjuitEt9b7Jsw0x2dncx4gGF1Od2uzjTOAm+YioduovJQmxQJ3kNt7+gnMm6n7MjPaWqjOxM26TqIzvS9tS+twEmO4u7WI2RnSS0ZWQHXzGVDt3Fik5semSXUmQWHJAzmYensdIMmjxBUN9aTFZRV0GJzJ3n5NuzbB5Dt79S7+K4Kafh2F2MSnZyaiyxi9ONqzBnp9Odu1iRGTk95Wp1+zOjhrUzWbe/s0sGuubIt5m1GPlIlYxMw1BphyAWkcuY4vJ3W8YDCuqBtdUuTmhSsr776YQO3cWEKgR9kld0+wvKmYzVX1CAYvDnR7yAXv5BsgsEBA8voJd/kOwCAcHDC+jlHyS7QEDw8AJ6+QfJLhAQPLyAXv5BsgsEBA8voJd/kOwCAcHDC+jlHyS7QEDw8AJ6+QfJLhAQPLyAXv5BsgsEBA8voJd/kOwCAcHDC+jlHyS7QEDw8AJ6+WemyY5/YaX+4DJ4oEv3INn5x3lZ9rwoYF7ypK5LjmX/nQYh5yBvETyxbEK1l2DbD1xoqFdArin+6cyDoqCqqt4eQeWI5skuUmFVXBR5PT/o0j3ti60qVnCgAp0lO60SJOkvZVkVkdkYCbly9KLpOmZ8hsPLm0dTS4WF9aQi1/I4riNqsWIa7zlT4KfV/wtqm/poWin7eNHWvDgtsuLpcbFHq9+bZmTVz07qEc4Md4qKbtqVMtzFCPvg4Ogq2Sl1hjXHL71eMbWKrKsqzPKQRn1h+Z4szpZLpGESacWUFa2sYrPUs0humuyKa3lP8l9ailbvhlIjK5QjLqPxyG5Tu4xsW90FaKUodzFpg1AdQnzN2em+LVLyKlpld65Ijmfcbm2XFuBX25lBTlpY0AfoEc3ngEwDkOTlznNJ4W0y5dt9PJDtSmg/Z0fMidu99EzjpOT1UMyQOr2NlSri67dJkscYuUrIEujJTuglpdXPYE12+raVk9225aA9oIWnQe4zpZRlj0twRzEhaVHVyCrwqHFA26ex2SCvoiuYblZluIvtCF+07kyy1Ywme7maI7uSQZy6cJIcCxyPksNakp25bcVkV2yz1BMaBU+Bu6v8rdcXxnvOnNu5ltycVvF7kyXrWS/1h9Y/PZHiy3SGtStVYJYTvGa+Rna15+ykB0/qrhZNO6XKyW7RbsVUnOwoc7JZS6fScMJbydvmlSZasjmaX1wz5mEJIyvM2dWgmW9s5NaXd3Y2GZeckPJoz6oU5S42AMm6m7OzPHI1PMZI66nsYexoNLo4Lz3YNVzHatzGUo5llW5j+25E1iB4zLuW5ISfXH0o+0TCqIp4ZAQLsUo0fkCh/D5BNQpbWl7eXC04XYn5bt0yPtt1qOpx+HOxnt449gv8Ip8X0Ms//U120lUs0AuNUxA8vIBe/ulvsgO1QPDwAnr5B8kuEBA8vIBe/kGyCwQEDy+gl3+Q7AIBwcML6OUfJLtAQPDwAnr5B8kuEBA8vIBe/kGyCwQEDy+gl3+Q7AIBwcML6OUfJLtAQPDwAnr5B8kuEBA8vIBe/kGyCwRPwYO/U3ZEL5LdwNR0mezM6kf1y8YMrPvd0dTTwCzdWbZJRX2gpJXmeumFgVr85bhZwdDWaNZd1pruineKRlXNwulZzzgzcCndBPq4oKleqyItL5jWynCR7Fo3YoHb21g1eow63bKbkWR3lC1URxqj5cuUkVhe5q6HxdFnh7tkZygl1DEgUUjN1DS1atOMq3Sdh6thY70OL29upYWjD60LyQOuSogJpaGQFNHFqhGSXHA8Z7dN1YgWpJvRtmR3pJiKUZeR7A55nO9oZWXuCKu+7hRXyY7ynVJd46S6njZNJSML1UAYBY0jmuuVXkXGJw9dXchKb9cKMUNNSSxKfWtI8hHP9QMKw0IxzXWGmxFtFFI0ZjbVAAoO5uyi+yFBK0VcwSpqmlmUSQeFCVmri9NjV6d2KsevPpb7t1QOMXI8QoilmycUhiQf7Zw/jVV9dixuRtWSneUWCCU9ZdyM7Eil5AsMUUlfaknWuKdLvw/dhKyNXlFsrQpxWLJvqR5iGwVqpo7JhutYaUjOuisr4/6nJ+pYO/P3MNyMtisku2JPL4aD6G5xdBtbXalqLc1kBxOymFZ6KW475shOak+O7AoXGsNwfS+2kOw/HfzOLuqErXnVlYZwMypwxpFFM+2s9l86eWn/M3o70MWcXaaUNt+TXmOqaRqNPXIneu2ow811DkfiRF9aQ4xSk5olStUvCUlG4nXxo+J4nCu0ES51P1pkA5Y/DjLMwHITJNzFKnTwNJZ4BK56q1XU1HCxx1REB8muRoiZapJiZerbQ3LYyQ7MgF78Ih9UBnr5B8kuEBA8vIBe/kGyCwQEDy+gl3+Q7AIBwcML6OUfJLtAQPDwAnr5B8kuEBA8vIBe/kGyCwQEDy+gl3+Q7AIBwcML6OUfJLtAQPDwAnr5B8kuEBA8vIBe/kGyCwQEDy+gl3+Q7AIBwcML6OWfmSY7fkVi+ou/4IFqLkCy849zw528+N/SZb2QN9G+Vth0HWacw7h1peLKBUg491J/8Osupmo2VAU7cxfb0K0H6PaD7PQuaFkyqEZ1MqjmAr/uYtAsorNkJ1dV1Qt5K+5H9KqIzEdMyGWmF+3+RqkD09G4zeREWFhP6m8tj6eVJNVtTUOsl8Rxw5OJdtfqE23ro9GV0cotqZKuUyqD97OH+oVbd7G5FcuJPRqNLl6UHMLG8RlOnufZYWT1m90A9JCukp1hvJNVyzetPKhVZE1coV6fyNGIXDlUHuVrRXGVwtaqIVZciX/+ckEp3b4WaHWY7KoajMnmVag/XBPn7mJSG+PEJm9jC85zSn358Hxznbc5u+nFRPOUEtZVplOBMI0ojMG5pQAyuS3pEVO4lejtHUHLZCfNOmxUNRgr7F5ku3Jcu4vJjYwTuyjZlViLhOaN1OltbHqFiaWZM/ttrniVkPtZT3bC4m9Uluz0bSsnu56bKrV9QGHW4BbSinGxJZVuDCyCiIvOcewuZp6fzZIdqf6OQCTtLNlpGU25BBkju5JBnLpwkhwt/kb2ZGduWzHZ9d5UyZ0HRVOfKniG1cGxu5h5fjoY2eWEoaivkV3tOTvpvkrd1WI2TVE0Z1ec7IhtqyU7sdJ3UyV3ya6ywdi2Fk6Ys6uBW8OdOfP8VOd8lBxmvYMh1A9F0O7m7CyPXJcum7M/pt1U9jA2epo0Lz3YtfobldzGGttWvY2l/bX6g8NkV9VgTBvjwjOsDq7dxQx5RIE66tNYaspVV38s/SqCtbYc/lyspzeO/QK/yOcF9PJPf5Od9Cs7zlcTXyB4eAG9/NPfZAdqgeDhBfTyD5JdICB4eAG9/INkFwgIHl5AL//8P4yMyUcrzoZPAAAAAElFTkSuQmCC"},196157:(e,n,s)=>{s.d(n,{A:()=>a});const a="data:image/png;base64,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"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var a=s(296540);const t={},o=a.createContext(t);function l(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);