"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99928"],{90311:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/get-subrecord-key","title":"Get subrecord key","description":"Get subrecord key ( idField ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-subrecord-key.md","sourceDirName":"commands-legacy","slug":"/commands/get-subrecord-key","permalink":"/docs/pt/20-R7/commands/get-subrecord-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-subrecord-key.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-subrecord-key","title":"Get subrecord key","slug":"/commands/get-subrecord-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Sub-registros","permalink":"/docs/pt/20-R7/commands/theme/Subrecords"},"next":{"title":"System Documents","permalink":"/docs/pt/20-R7/commands/theme/System-Documents"}}'),r=a("785893"),o=a("250065");let i={id:"get-subrecord-key",title:"Get subrecord key",slug:"/commands/get-subrecord-key",displayed_sidebar:"docs"},t=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Atribuir o campo id_added_by_converter",id:"atribuir-o-campo-id_added_by_converter",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Get subrecord key"})," ( ",(0,r.jsx)(n.em,{children:"idField"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idField"}),(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:'"Subtable Relation" or "Longint" type field of a former subtable relation'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Internal key of relation"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-subrecord-key",children:"Get subrecord key"}),' facilita la migraci\xf3n del c\xf3digo 4D utilizando subtablas convertidas al c\xf3digo est\xe1ndar de manipulaci\xf3n de tablas.a partir de la versi\xf3n 11 de 4D, no se soportan subtablas. Cuando se convierte una base antigua, las subtablas existentes se transforman autom\xe1ticamente en tablas est\xe1ndar relacionadas con las tablas originales por una relaci\xf3n autom\xe1tica. La subtabla anterior se convierte en la tabla Muchos y la tabla original es la tabla Uno. En la tabla Uno, el campo subtabla anterior se transforma en un campo especial de tipo "Relaci\xf3n subtabla" y en la tabla Muchos, se a\xf1ade un campo especial, de tipo "Relaci\xf3n subtabla", llamado "id_anadido_por_convertidor".']}),"\n",(0,r.jsx)(n.p,{children:"Esto permite preservar el funcionamiento de bases de datos convertidas, pero le recomendamos que sustituya los mecanismos de subtablas en sus bases por los que se utilizan para las tablas est\xe1ndar."}),"\n",(0,r.jsxs)(n.p,{children:["El primer paso en este proceso consiste en eliminar las relaciones autom\xe1ticas especiales, lo que desactiva de forma permanente los mecanismos heredados de subtablas. Despu\xe9s debe volver a escribir el c\xf3digo asociado. El comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-subrecord-key",children:"Get subrecord key"})," acompa\xf1a a esta reescritura, devolviendo el identificador interno utilizado por la relaci\xf3n. Esta identificaci\xf3n interna hace que la relaci\xf3n real innecesaria y a continuaci\xf3n puede trabajar con la selecci\xf3n de la subtabla anterior incluso cuando la relaci\xf3n ya no est\xe1 presente."]}),"\n",(0,r.jsx)(n.p,{children:"Veamos por ejemplo la siguiente estructura convertida:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:a(169796).Z+"",width:"440",height:"360"})}),"\n",(0,r.jsx)(n.p,{children:"En 4D, el siguiente c\xf3digo a\xfan funciona, pero debe actualizarse:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ALL SUBRECORDS([Empleados]Hijos)\n\xa0$total:=Records in subselection([Empleados]Hijos)\n\xa0vNombres:=""\n\xa0For($i;1;$total)\n\xa0\xa0\xa0\xa0vNombre:=vNombres+[Empleados]Hijos\'Nombre+" "\n\xa0\xa0\xa0\xa0NEXT SUBRECORD([Empleados]Hijos)\n\xa0End for\n'})}),"\n",(0,r.jsx)(n.p,{children:"Ahora puede reemplazar este c\xf3digo por:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Empleados_Hijos];[Empleados_Hijos]id_anadido_por_convertidor=Get subrecord key([Empleados]Hijos))\n\xa0$total:=Records in selection([Empleados_Hijos])\n\xa0vNombres:=""\n\xa0For($i;1;$total)\n\xa0\xa0\xa0\xa0vNombres:=vNombres+[Empleados_Hijos]Nombre+" "\n\xa0\xa0\xa0\xa0NEXT RECORD([Empleados_Hijos])\n\xa0End for\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-subrecord-key",children:"Get subrecord key"})," devuelve 0 si no hay registro actual cargado durante su ejecuci\xf3n."]}),"\n",(0,r.jsx)(n.p,{children:"La segunda parte de c\xf3digo tiene la ventaja de usar comandos est\xe1ndar de 4D y funciona de la misma manera si la relaci\xf3n est\xe1 presente o no. Cuando elimina la relaci\xf3n, el comando devuelve simplemente el valor de la llave almacenada en el campo Entero largo."}),"\n",(0,r.jsxs)(n.p,{children:["En el par\xe1metro ",(0,r.jsx)(n.em,{children:"campoID"}),", el comando acepta un campo de tipo Relaci\xf3n subtabla (si la relaci\xf3n sigue existiendo) o del tipo Entero largo (si la relaci\xf3n se ha eliminado). En todos los dem\xe1s casos, se genera un error."]}),"\n",(0,r.jsx)(n.p,{children:"Esto le permite escribir el c\xf3digo de transici\xf3n. Durante la fase final de actualizaci\xf3n de la aplicaci\xf3n, puede eliminar las llamadas a este comando."}),"\n",(0,r.jsx)(n.h2,{id:"atribuir-o-campo-id_added_by_converter",children:"Atribuir o campo id_added_by_converter"}),"\n",(0,r.jsxs)(n.p,{children:['A partir de 4D v14 R3, puede asignar un valor al campo "id_added_by_converter". Anteriormente, este valor s\xf3lo pod\xeda ser asignado por 4D, lo que obligaba a los desarrolladores a utilizar comandos obsoletos como ',(0,r.jsx)(n.em,{children:"_o_CREATE SUBRECORD"})," para poder a\xf1adir registros en subtablas convertidas."]}),"\n",(0,r.jsx)(n.p,{children:'Gracias a esta posibilidad, puede convertir bases anteriores que contengan subtablas progresivamente: en un primer momento, puede mantener la "relaci\xf3n Subtabla" especial, mientras a\xf1ade o modifica registros relacionados, como si fueran est\xe1ndar. Luego, una vez que todos sus m\xe9todos est\xe9n actualizados, puede sustituir esta relaci\xf3n especial con una normal, sin tener que cambiar el c\xf3digo.'}),"\n",(0,r.jsx)(n.p,{children:"Por ejemplo, con la estructura anterior puede escribir:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE RECORD([Employees])\n\xa0[Employees]LastName:="Jones"\n\xa0CREATE RECORD([Employees_Children])\n\xa0[Employees_Children]FirstName:="Natacha"\n\xa0[Employees_Children]BirthDate:=!12/24/2013!\n\xa0[Employees_Children]id_added_by_converter:=Get subrecord key([Employees]Children)\n\xa0SAVE RECORD([Employees_Children])\n\xa0SAVE RECORD([Employees]\n'})}),"\n",(0,r.jsx)(n.p,{children:"Este c\xf3digo funcionar\xe1 tanto con una relaci\xf3n especial como con una est\xe1ndar."}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1137"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},169796:function(e,n,a){a.d(n,{Z:function(){return s}});let s=a.p+"assets/images/pict473713.pt-a08eee8e9d2820c5ac071a522974824f.png"},250065:function(e,n,a){a.d(n,{Z:function(){return t},a:function(){return i}});var s=a(667294);let r={},o=s.createContext(r);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);