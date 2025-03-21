"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48900"],{391834:function(e,a,n){n.r(a),n.d(a,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/set-table-titles","title":"SET TABLE TITLES","description":"SET TABLE TITLES {( titulosTablas ; numTablas {; *})}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-table-titles.md","sourceDirName":"commands-legacy","slug":"/commands/set-table-titles","permalink":"/docs/es/commands/set-table-titles","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-table-titles.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-table-titles","title":"SET TABLE TITLES","slug":"/commands/set-table-titles","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET FIELD TITLES","permalink":"/docs/es/commands/set-field-titles"},"next":{"title":"Shift down","permalink":"/docs/es/commands/shift-down"}}'),r=n("785893"),i=n("250065");let o={id:"set-table-titles",title:"SET TABLE TITLES",slug:"/commands/set-table-titles",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function t(e){let a={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"SET TABLE TITLES"})," {( ",(0,r.jsx)(a.em,{children:"titulosTablas"})," ; ",(0,r.jsx)(a.em,{children:"numTablas"})," {; *})}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe1metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"titulosTablas"}),(0,r.jsx)(a.td,{children:"Text array"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Nombres de las tablas tal como deben aparecer"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"numTablas"}),(0,r.jsx)(a.td,{children:"Integer array"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"N\xfameros de las tablas"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"*"}),(0,r.jsx)(a.td,{children:"Operador"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Utilizar los nombres personalizados en el editor de f\xf3rmulas"})]})]})]}),"\n",(0,r.jsx)(a.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(a.p,{children:["SET TABLE TITLES permite ocultar, renombrar y reordenar las tablas de su base cuando aparecen en las cajas de di\xe1logo est\xe1ndar de 4D en el entorno Aplicaci\xf3n(es decir, cuando el modo de inicio es ",(0,r.jsx)(a.strong,{children:"Aplicaci\xf3n"}),", o despu\xe9s de seleccionar ",(0,r.jsx)(a.strong,{children:"Probar aplicaci\xf3n"})," en el men\xfa ",(0,r.jsx)(a.strong,{children:"Ejecutar"}),"). Por ejemplo, este comando puede modificar la visualizaci\xf3n de tablas en el editor b\xfasquedas en modo Aplicaci\xf3n."]}),"\n",(0,r.jsxs)(a.p,{children:["Utilizando este comando, tambi\xe9n puede renombrar instant\xe1neamente las etiquetas de las tablas en sus formularios, si utiliz\xf3 nombres din\xe1micos. Para mayor informaci\xf3n sobre la inserci\xf3n de etiquetas de tablas y de campos din\xe1micos en formularios, consulte la secci\xf3n ",(0,r.jsx)(a.em,{children:"Utilizar las referencias en los textos est\xe1ticos"})," en el manual de ",(0,r.jsx)(a.em,{children:"Dise\xf1o"})," de 4D."]}),"\n",(0,r.jsxs)(a.p,{children:["Los arrays ",(0,r.jsx)(a.em,{children:"titulosTablas"})," y ",(0,r.jsx)(a.em,{children:"numTablas"})," deben estar sincronizados. En el array ",(0,r.jsx)(a.em,{children:"titulosTablas"}),", pase los nombres de las tablas como quiere que aparezcan. Si no quiere mostrar una tabla en particular, no incluya su nombre o nuevo t\xedtulo en el array. Las tablas aparecer\xe1n en el orden que especific\xf3 en este array. En cada elemento del array ",(0,r.jsx)(a.em,{children:"numTablas"}),", pase el n\xfamero de la tabla que corresponde al nombre, nuevo o antiguo, de la tabla, pasado en el mismo n\xfamero de elemento en el array ",(0,r.jsx)(a.em,{children:"titulosTablas"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:["Por ejemplo, usted tiene una base compuesta por las tablas A, B, y C, creadas en este orden. Usted quiere que estas tablas aparezcan como X, Y, y Z. Adem\xe1s no quiere mostrar la tabla B. Por \xfaltimo, quiere mostrar Z y X, en este orden. Para hacer esto, pase en el par\xe1metro ",(0,r.jsx)(a.em,{children:"titulosTablas"})," un array de dos elementos, Z y X, y pase en el par\xe1metro ",(0,r.jsx)(a.em,{children:"numTablas"})," un array de dos elementos, 3 y 1."]}),"\n",(0,r.jsxs)(a.p,{children:["El par\xe1metro opcional ",(0,r.jsx)(a.em,{children:"*"}),' le permite indicar si los nombres personalizados (estructuras"virtuales" ) definidos utilizando este comando son utilizados o no en las f\xf3rmulas de 4D. Por defecto, cuando se omite este par\xe1metro, las f\xf3rmulas ejecutadas en 4D no pueden utilizar estos nombres personalizados; es necesario utilizar los nombres verdaderos de las tablas. Debe pasar este par\xe1metro si quiere controlar la informaci\xf3n suministradas a los usuarios y asegurar la consistencia de interfaz donde se utilicen f\xf3rmulas o expresiones, es decir:']}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"si su aplicaci\xf3n da acceso al editor de f\xf3rmulas (por ejemplo por el editor de Informes r\xe1pidos),"}),"\n",(0,r.jsx)(a.li,{children:"si su aplicaci\xf3n muestra referencias de expresi\xf3n, como en los documentos 4D Write Pro."}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"})," cuando se pasa el par\xe1metro ",(0,r.jsx)(a.em,{children:"*"}),", los nombres definidos por este comando se usan en las f\xf3rmulas ejecutadas por 4D. ",(0,r.jsx)(a.strong,{children:"Tenga cuidado en este caso"}),', los nombres personalizados no deben contener caracteres "prohibidos" por el int\xe9rprete de lenguaje 4D, como -?*%! Por ejemplo, el nombre "Rate_in_%" no se pudo utilizar en una f\xf3rmula (para m\xe1s informaci\xf3n, consulte la secci\xf3n ',(0,r.jsx)(a.em,{children:"Convenciones"}),")."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"SET TABLE TITLES"})," NO cambia la estructura actual de su base. Est\xe1 dise\xf1ado para afectar los usos posteriores de los editores est\xe1ndar de 4D y formularios que utilizan nombres din\xe1micos cuando se utilizan en el entorno Aplicaci\xf3n. El alcance del comando ",(0,r.jsx)(a.strong,{children:"SET TABLE TITLES"})," es la sesi\xf3n de trabajo. El beneficio en Cliente/Servidor es que varias estaciones 4D Client pueden \u201Cver\u201D simult\xe1neamente su base de diferentes formas. Puede llamar ",(0,r.jsx)(a.strong,{children:"SET TABLE TITLES"})," tantas veces como lo considere necesario."]}),"\n",(0,r.jsxs)(a.p,{children:["Utilice el comando ",(0,r.jsx)(a.strong,{children:"SET TABLE TITLES"})," para:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Traducci\xf3n din\xe1mica de su base."}),"\n",(0,r.jsx)(a.li,{children:"Visualizaci\xf3n de las tablas en el orden que quiera, independientemente del la definici\xf3n actual de su base."}),"\n",(0,r.jsx)(a.li,{children:"Visualizaci\xf3n de tablas que dependa de la identidad o de los privilegios de un usuario."}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"ATENCI\xd3N:"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"SET TABLE TITLES"})," NO anula el efecto de la propiedad invisible de una tabla. Cuando una tabla est\xe1 definida como invisible a nivel de la estructura de su base, aunque se incluya en una llamada a ",(0,r.jsx)(a.strong,{children:"SET TABLE TITLES"}),", no aparecer\xe1 en modo Aplicaci\xf3n."]}),"\n",(0,r.jsx)(a.li,{children:'Los plug-ins siempre acceden a la estructura "virtual" como se especifica por este comando.'}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Ejecutar ",(0,r.jsx)(a.strong,{children:"SET TABLE TITLES"})," sin par\xe1metros reiniciar\xe1 toda la estructura virtual de la base para la sesi\xf3n (tabla personalizada y nombres de campos)."]}),"\n",(0,r.jsx)(a.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Usted desarrolla una aplicaci\xf3n 4D que piensa vender internacionalmente. Por lo tanto, usted debe tener en cuenta las necesidades de traducci\xf3n. Para los editores est\xe1ndar de 4D que aparecen en modo Aplicaci\xf3n y sus formularios que utilizan nombres din\xe1micos, puede utilizar una tabla ",(0,r.jsx)(a.em,{children:"[Traducciones]"})," y algunos m\xe9todos de proyecto para crear y utilizar las traducciones para cada idioma."]}),"\n",(0,r.jsx)(a.li,{children:"En su base, cree la siguiente tabla:"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:n(919375).Z+"",width:"151",height:"131"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Luego, cree el m\xe9todo de proyecto TRADUCIR_TABLAS_Y_CAMPOS. Este m\xe9todo analiza la estructura de su base en la tabla ",(0,r.jsx)(a.em,{children:"[Traducciones]"})," y crea los registros correspondientes al idioma pasado como par\xe1metro."]}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de proyecto TRADUCIR_TABLAS_Y_CAMPOS\n\xa0\xa0// TRADUCIR_TABLAS_Y_CAMPOS (Text)\n\xa0\xa0// TRADUCIR_TABLAS_Y_CAMPOS (LanguageCode)\n\xa0\n\xa0var $1 : Text\xa0//c\xf3digo del idioma\n\xa0var $vlTabla;$vlCampo : Integer\n\xa0var $Idioma : Text\n\xa0$Idioma:=$1\n\xa0\n\xa0For($vlTabla;1;Last table number)\xa0//Pasar por cada tabla\n\xa0\xa0\xa0\xa0If($vlTabla#(Table(->[Traducciones])))\xa0//No traducir la tabla de traducciones\n\xa0\xa0//Verificar si existe una traducci\xf3n de nombre de la tabla para el idioma especificado\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traducciones];[Traducciones]Codigo_Idioma=$Idioma;*)\xa0//idioma deseado\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traducciones];&;[Traducciones]Tabla_ID=$vlTabla;*)\xa0//N\xfamero de tabla\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traducciones];&;[Traducciones]Campo_ID=0)\xa0//n\xfamero de campo = 0 significa que es un nombre de tabla\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is table number valid($vlTabla))\xa0//verificar que la tabla a\xfan existe\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Records in selection([Traducciones])=0)\n\xa0\xa0//De lo contrario, crear el registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([Traducciones])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Traducciones]Codigo_Idioma:=$Idioma\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Traducciones]Tabla_ID:=$vlTabla\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Traducciones]Campo_ID:=0\n\xa0\xa0//El nombre de la tabla traducida deber\xe1 introducirse\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Traducciones]Traduccion:=Table name($vlTabla)+" en "+$Idioma\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([Traducciones])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlCampo;1;Obtener n\xfamero del \xfaltimo campo($vlTabla))\n\xa0\xa0//Verificar si exise una traducci\xf3n para el nombre del campo en el idioma especificado\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traducciones];[Traducciones]Codigo_Idioma=$Idioma;*)\xa0//idioma deseado\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traducciones];&;[Traducciones]Tabla_ID=$vlTabla;*)\xa0//n\xfamero de tabla\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traducciones];&;[Traducciones]Campo_ID=$vlCampo)\xa0//n\xfamero de campo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is field number valid($vlTabla;$vlCampo))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Records in selection([Traducciones])=0)\n\xa0\xa0//De lo contrario, crear el registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([Traducciones])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Traducciones]Codigo_Idioma:=$Idioma\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Traducciones]Tabla_ID:=$vlTabla\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Traducciones]Campo_ID:=$vlCampo\n\xa0\xa0//El nombre del campo traducido debe introducirse\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Traducciones]Traduccion:=Field name($vlTabla;$vlCampo)+"en "+$Idioma\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([Traducciones])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Records in selection([Traducciones])#0)\n\xa0\xa0// Si el campo no existe, eliminar la traducci\xf3n\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE RECORD([Traducciones])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Records in selection([Traducciones])#0)\n\xa0\xa0//Si la tabla no existe, eliminar la traducci\xf3n\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE RECORD([Traducciones])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n'})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"En este punto, si ejecuta la siguiente l\xednea, puede crear tantos registros como necesite para la traducci\xf3n al Espa\xf1ol de sus tablas y campos."}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0TRANSLATE TABLES AND FIELDS("Espa\xf1ol")\n'})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Una vez ejecutada esta llamada, puede introducir una traducci\xf3n en el campo ",(0,r.jsx)(a.em,{children:"[Traducciones]Nombre traducido"})," para cada uno de los nuevos registros."]}),"\n",(0,r.jsx)(a.li,{children:"Por \xfaltimo, cada vez que quiera mostrar en espa\xf1ol los editores est\xe1ndar 4D o los formularios con etiquetas din\xe1micas, ejecute la siguiente l\xednea:"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0LOCALIZED TABLES AND FIELDS("Espa\xf1ol")\n'})}),"\n",(0,r.jsx)(a.p,{children:"con el m\xe9todo de proyecto TABLAS_Y_CAMPOS_LOCALIZADOS:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0\xa0//M\xe9todo objeto TABLAS_Y_CAMPOS_LOCALIZADOS\n\xa0\xa0// TABLAS_Y_CAMPOS_LOCALIZADOS (Text)\n\xa0\xa0// TABLAS_Y_CAMPOS_LOCALIZADOS (LanguageCode)\n\xa0\n\xa0var $1 : Text\xa0//C\xf3digo del idioma\n\xa0var $vlTabla;$vlCampo : Integer\n\xa0var $Idioma : Text\n\xa0var $vlNumTabla;$vlNumCampo : Integer\n\xa0$Idioma:=$1\n\xa0\n\xa0\xa0//Actualizaci\xf3n de los nombres de tablas\n\xa0ARRAY TEXT($asNombres;0)\xa0//Inicializar los arrays para SET TABLE TITLES y SET FIELD TITLES\n\xa0ARRAY INTEGER($aiNumeros;0)\n\xa0QUERY([Traducciones];[Traducciones]Codigo_Idioma=$Idioma;*)\n\xa0QUERY([Traducciones];&;[Traducciones]Campo_ID=0)\xa0//nombres de tablas\n\xa0SELECTION TO ARRAY([Traducciones]Traduccion;$asNombres;[Traducciones]Tabla_ID;$aiNumeros)\n\xa0SET TABLE TITLES($asNombres;$aiNumeros)\n\xa0\n\xa0\xa0//Actualizaci\xf3n de los nombres de campos\n\xa0$vlNumTabla:=Last table number\xa0//Obtener el n\xfamero de tablas en la base\n\xa0For($vlTabla;1;$vlNumTabla)\xa0//Pasar por cada tabla\n\xa0\xa0\xa0\xa0If(Is table number valid($vlTabla))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traducciones];[Traducciones]Codigo_Idioma=$Idioma;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traducciones];&;[Traducciones]Tabla_ID=$vlTabla;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Traducciones];&;[Traducciones]Campo_ID#0)\xa0//evite que el cero sea nombre de tabla\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECTION TO ARRAY([Traducciones]Traduccion;$asNombres;[Traducciones]Campo_ID;$aiNumeros)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET FIELD TITLES(Tabla($vlTabla)->;$asNombres;$aiNumeros)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Note que las nuevas localizaciones pueden a\xf1adirse a la base sin modificar el c\xf3digo o recompilarlo."}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(a.p,{children:"Desea eliminar todos los nombres de tablas y campos personalizados definidos:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0SET TABLE TITLES\xa0//elimina todos los nombres personalizados\n"})}),"\n",(0,r.jsx)(a.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/es/commands/last-table-number",children:"Last table number"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/get-table-titles",children:"GET TABLE TITLES"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/parse-formula",children:"Parse formula"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/set-field-titles",children:"SET FIELD TITLES"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/table-name",children:"Table name"})]}),"\n",(0,r.jsx)(a.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"N\xfamero de comando"}),(0,r.jsx)(a.td,{children:"601"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Hilo seguro"}),(0,r.jsx)(a.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},919375:function(e,a,n){n.d(a,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,a,n){n.d(a,{Z:function(){return l},a:function(){return o}});var s=n(667294);let r={},i=s.createContext(r);function o(e){let a=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);