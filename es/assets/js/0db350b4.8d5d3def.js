"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33065"],{955315:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>d,assets:()=>t,toc:()=>c,contentTitle:()=>a});var d=JSON.parse('{"id":"commands-legacy/json-validate","title":"JSON Validate","description":"JSON Validate ( vJson ; vSchema ) : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/json-validate.md","sourceDirName":"commands-legacy","slug":"/commands/json-validate","permalink":"/docs/es/commands/json-validate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-validate.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"json-validate","title":"JSON Validate","slug":"/commands/json-validate","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON TO SELECTION","permalink":"/docs/es/commands/json-to-selection"},"next":{"title":"Selection to JSON","permalink":"/docs/es/commands/selection-to-json"}}'),r=s("785893"),i=s("250065");let l={id:"json-validate",title:"JSON Validate",slug:"/commands/json-validate",displayed_sidebar:"docs"},a=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:5},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"JSON Validate"})," ( ",(0,r.jsx)(n.em,{children:"vJson"})," ; ",(0,r.jsx)(n.em,{children:"vSchema"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vJson"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Objeto JSON a validar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vSchema"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Esquema JSON utilizado para validar objetos JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Estado de validaci\xf3n y errores (si los hay)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"JSON Validate"})," verifica la conformidad del contenido JSON ",(0,r.jsx)(n.em,{children:"vJson"})," con las reglas definidas en el esquema JSON ",(0,r.jsx)(n.em,{children:"vSchema"}),". Si el JSON no es v\xe1lido, el comando devuelve una descripci\xf3n detallada de los errores."]}),"\n",(0,r.jsxs)(n.p,{children:["Pase en ",(0,r.jsx)(n.em,{children:"vJson"})," un objeto JSON que contiene el contenido JSON a validar."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," la validaci\xf3n de una cadena JSON consiste en comprobar que sigue las reglas definidas en un esquema JSON. Esto es diferente a comprobar que el JSON est\xe1 bien formado, lo cual hace el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/json-parse",children:"JSON Parse"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Pase en ",(0,r.jsx)(n.em,{children:"vSchema"})," el esquema JSON a utilizar para la validaci\xf3n. Para mayor informaci\xf3n sobre c\xf3mo crear un esquema JSON, puede consultar el sitio web ",(0,r.jsx)(n.a,{href:"http://json-schema.org/",children:"json-schema.org"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," para validar un objeto JSON, 4D utiliza la norma descrita en el documento ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/draft-wright-json-schema-validation-00",children:"JSON Schema Validation"})," (este borrador a\xfan se est\xe1 escribiendo y puede evolucionar en el futuro). La implementaci\xf3n de 4D se basa en la versi\xf3n 4 de este documento."]}),"\n",(0,r.jsxs)(n.p,{children:["Si el esquema JSON no es v\xe1lido, 4D devuelve un objeto ",(0,r.jsx)(n.a,{href:"/docs/es/commands/null",children:"Null"})," y genera un error que puede detectarse por un m\xe9todo de llamada de error."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"JSON Validate"})," devuelve un objeto que ofrece el estado de la validaci\xf3n. Este objeto puede contener las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Nombre de propiedad"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Tipo"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"success"})}),(0,r.jsx)(n.td,{children:"Booleano"}),(0,r.jsxs)(n.td,{children:["True si ",(0,r.jsx)(n.em,{children:"vJson"})," est\xe1 validado, false en caso contrario. Si es false, la propiedad errors tambi\xe9n se devuelve"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"errors"})}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de objetos"}),(0,r.jsxs)(n.td,{children:["Lista de objetos de error en caso de que ",(0,r.jsx)(n.em,{children:"vJson"})," no est\xe9 validado (ver abajo)"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Cada objeto de error de la colecci\xf3n ",(0,r.jsx)(n.em,{children:"errors"})," contiene las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Nombre de propiedad"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Tipo"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"code"})}),(0,r.jsx)(n.td,{children:"N\xfamero"}),(0,r.jsx)(n.td,{children:"C\xf3digo de error"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"jsonPath"})}),(0,r.jsx)(n.td,{children:"Cadena"}),(0,r.jsxs)(n.td,{children:["Ruta JSON que no se puede validar en ",(0,r.jsx)(n.em,{children:"vJson"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"line"})}),(0,r.jsx)(n.td,{children:"N\xfamero"}),(0,r.jsxs)(n.td,{children:["N\xfamero de l\xednea del error en el archivo JSON. Esta propiedad se llena si el JSON ha sido analizado por ",(0,r.jsx)(n.a,{href:"/docs/es/commands/json-parse",children:"JSON Parse"})," con el par\xe1metro ",(0,r.jsx)(n.em,{children:"*"}),". De lo contrario, la propiedad se omite."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"message"})}),(0,r.jsx)(n.td,{children:"Cadena"}),(0,r.jsx)(n.td,{children:"Mensaje de error"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"offset"})}),(0,r.jsx)(n.td,{children:"N\xfamero"}),(0,r.jsxs)(n.td,{children:["Desplazamiento de l\xednea del error en el archivo JSON. Esta propiedad se llena si el JSON ha sido analizado por ",(0,r.jsx)(n.a,{href:"/docs/es/commands/json-parse",children:"JSON Parse"})," con el par\xe1metro ",(0,r.jsx)(n.em,{children:"*"}),". De lo contrario, la propiedad se omite."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"schemaPaths"})}),(0,r.jsx)(n.td,{children:"Cadena"}),(0,r.jsx)(n.td,{children:"Ruta JSON en el esquema que causa el error de validaci\xf3n"})]})]})]}),"\n",(0,r.jsx)(n.h5,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,r.jsx)(n.p,{children:"Se pueden devolver los siguientes errores:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"C\xf3digo"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Palabra clave JSON"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Mensaje[#table]"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"multipleOf"}),(0,r.jsx)(n.td,{children:"Error al validar contra la llave'multipleOf'."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"maximum"}),(0,r.jsx)(n.td,{children:'El valor dado no debe ser mayor que el especificado en el esquema ("{s1}").'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"exclusiveMaximum"}),(0,r.jsx)(n.td,{children:'El valor dado debe ser menor que el especificado en el esquema ("{s1}").'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"minimum"}),(0,r.jsx)(n.td,{children:'El valor dado no debe ser menor que el especificado en el esquema ("{s1}").'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"exclusiveMinimum"}),(0,r.jsx)(n.td,{children:'El valor dado debe ser mayor que el especificado en el esquema ("{s1}").'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:"maxLength"}),(0,r.jsx)(n.td,{children:"La cadena es m\xe1s larga que la especificada en el esquema."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:"minLength"}),(0,r.jsx)(n.td,{children:"La cadena es m\xe1s corta que la especificada en el esquema."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"9"}),(0,r.jsx)(n.td,{children:"pattern"}),(0,r.jsx)(n.td,{children:'La cadena "{s1}" no coincide con el patr\xf3n del esquema: {s2}.'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:"additionalItems"}),(0,r.jsx)(n.td,{children:"Error al validar un array. JSON contiene m\xe1s elementos que los especificados en el esquema."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11"}),(0,r.jsx)(n.td,{children:"maxItems"}),(0,r.jsx)(n.td,{children:"El array contiene m\xe1s elementos que los especificados en el esquema."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"12"}),(0,r.jsx)(n.td,{children:"minItems"}),(0,r.jsx)(n.td,{children:"El array contiene menos elementos que los especificados en el esquema."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"13"}),(0,r.jsx)(n.td,{children:"uniqueItems"}),(0,r.jsx)(n.td,{children:'Error al validar un array. Los elementos no son \xfanicos. Otra instancia de "{s1}" ya est\xe1 en el array.'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"14"}),(0,r.jsx)(n.td,{children:"maxProperties"}),(0,r.jsx)(n.td,{children:"El n\xfamero de propiedades es mayor que el especificado en el esquema."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"15"}),(0,r.jsx)(n.td,{children:"minProperties"}),(0,r.jsx)(n.td,{children:"El n\xfamero de propiedades es menor que el especificado en el esquema."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"16"}),(0,r.jsx)(n.td,{children:"required"}),(0,r.jsx)(n.td,{children:'Falta la propiedad requerida "{s1}".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17"}),(0,r.jsx)(n.td,{children:"additionalProperties"}),(0,r.jsx)(n.td,{children:"No hay propiedades adicionales permitidas por el esquema. La(s) propiedad(es) {s1} debe(n) ser eliminada(s)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18"}),(0,r.jsx)(n.td,{children:"dependencies"}),(0,r.jsx)(n.td,{children:'La propiedad "{s1}" requiere la propiedad "{s2}".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19"}),(0,r.jsx)(n.td,{children:"enum"}),(0,r.jsx)(n.td,{children:"Error al validar contra la llave 'enum'. \"{s1}\" no coincide con ning\xfan elemento enum del esquema."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20"}),(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:"Tipo incorrecto. El tipo esperado es: {s1}"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"21"}),(0,r.jsx)(n.td,{children:"oneOf"}),(0,r.jsx)(n.td,{children:"El JSON coincide con m\xe1s de un valor."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"22"}),(0,r.jsx)(n.td,{children:"oneOf"}),(0,r.jsx)(n.td,{children:"El JSON no coincide con ning\xfan valor."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"23"}),(0,r.jsx)(n.td,{children:"not"}),(0,r.jsx)(n.td,{children:"El JSON es v\xe1lido contra el valor de 'not'."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"24"}),(0,r.jsx)(n.td,{children:"format."}),(0,r.jsx)(n.td,{children:'La cadena no coincide ("{s1}")'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Usted desea validar un objeto JSON con un esquema y obtener la lista de errores de validaci\xf3n, si los hay, y guardar l\xedneas de error y mensajes en una variable texto:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $oResult : Object\n\xa0$oResult:=JSON Validate(JSON Parse(myJson;*);mySchema)\n\xa0If($oResult.success)\xa0//validaci\xf3n exitosa\n\xa0\xa0\xa0\xa0...\n\xa0Else\xa0//Validaci\xf3n fallida\n\xa0\xa0\xa0\xa0var $vLNbErr : Integer\n\xa0\xa0\xa0\xa0var $vTerrLine : Text\n\xa0\xa0\xa0\xa0$vLNbErr:=$oResult.errors.length\xa0///obtener el n\xfamero de error(es)\n\xa0\xa0\xa0\xa0ALERT(String($vLNbErr)+" validation error(s) found.")\n\xa0\xa0\xa0\xa0For($i;0;$vLNbErr)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vTerrLine:=$vTerrLine+$oResult.errors[$i].message+" "+String($oResult.errors[$i].line)+Carriage return\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," este ejemplo requiere que la notaci\xf3n de objeto est\xe9 activada (ver el p\xe1rrafo ",(0,r.jsx)(n.em,{children:"P\xe1gina Compatibilidad"}),")."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/json-parse",children:"JSON Parse"})}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1456"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var d=s(667294);let r={},i=d.createContext(r);function l(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);