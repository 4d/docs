"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49276"],{708315:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>l,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/svg-set-attribute","title":"SVG SET ATTRIBUTE","description":"SVG SET ATTRIBUTE ( { ;} objetoImagen ; id_Element ; nomAtrib ; valorAtrib {; nomAtrib2 ; valorAtrib2 ; ... ; nomAtribN ; valorAtribN} {; })","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/svg-set-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/svg-set-attribute","permalink":"/docs/es/20-R7/commands/svg-set-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsvg-set-attribute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"svg-set-attribute","title":"SVG SET ATTRIBUTE","slug":"/commands/svg-set-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SVG GET ATTRIBUTE","permalink":"/docs/es/20-R7/commands/svg-get-attribute"},"next":{"title":"SVG SHOW ELEMENT","permalink":"/docs/es/20-R7/commands/svg-show-element"}}'),t=s("785893"),r=s("250065");let o={id:"svg-set-attribute",title:"SVG SET ATTRIBUTE",slug:"/commands/svg-set-attribute",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SVG SET ATTRIBUTE"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objetoImagen"})," ; id_Element ; ",(0,t.jsx)(n.em,{children:"nomAtrib"})," ; ",(0,t.jsx)(n.em,{children:"valorAtrib"})," {; ",(0,t.jsx)(n.em,{children:"nomAtrib2"})," ; ",(0,t.jsx)(n.em,{children:"valorAtrib2"})," ; ... ; ",(0,t.jsx)(n.em,{children:"nomAtribN"})," ; ",(0,t.jsx)(n.em,{children:"valorAtribN"}),"} {; *})"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se especifica, objetoImagen es un nombre de objeto (cadena). Si se omite, objetoImagen es una variable o un campo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objetoPicture"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre del objeto (si se especifica *) o variable o campo (si se omite *)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"id_Element"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"ID del elemento donde uno o m\xe1s atributos se definen"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomAtrib"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Atributo a definir"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valorAtrib"}),(0,t.jsx)(n.td,{children:"Text, Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nuevo valor del atributo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se pasa = modificar el \xe1rbol DOM interno de la imagen SVG (variable \xfanicamente)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"SVG SET ATTRIBUTE"})," se utiliza para modificar el valor de un atributo existente en el \xe1rbol de renderizaci\xf3n SVG de una imagen mostrada o en el \xe1rbol DOM interno de una imagen."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objetoImagen"})," es un nombre de objeto (cadena). En este caso, el comando aplica a los par\xe1metros de la imagen renderizada adjunta al objeto (tenga en cuenta que los par\xe1metros y por lo tanto la imagen renderizada del objeto s\xf3lo se crean si el comando ",(0,t.jsx)(n.strong,{children:"SVG SET ATTRIBUTE"})," se llama al menos una vez).",(0,t.jsx)(n.br,{}),"\nSi no pasa el par\xe1metro ",(0,t.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objetoImagen"})," es una variable o un campo. Por lo tanto, se pasa una referencia de variable (variable objeto \xfanicamente) o de campo en lugar de una cadena. En este caso, el comando aplica a las im\xe1genes renderizadas de todos los objetos que utilizan la variable o el campo."]}),"\n",(0,t.jsxs)(n.p,{children:["Por defecto, las modificaciones realizadas por este comando aplican \xfanicamente a las im\xe1genes renderizadas en los objetos formulario que corresponden con ",(0,t.jsx)(n.em,{children:"objetoImagen"})," en el contexto de formulario, y no hace nada si ning\xfan objeto lo utiliza. En este caso, todos los objetos formulario existentes o futuros que utilizan la imagen SVG ser\xe1n modificados, en todos los contextos."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Notas"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["El \xfaltimo ",(0,t.jsx)(n.em,{children:"*"})," es in\xfatil si el par\xe1metro ",(0,t.jsx)(n.em,{children:"objetoImagen"})," es un nombre de objeto, se tiene en cuenta solo si ",(0,t.jsx)(n.em,{children:"objetoImagen"})," es una variable o campo."]}),"\n",(0,t.jsxs)(n.li,{children:["Para modificar la fuente de datos de una imagen SVG, puede tambi\xe9n utilizar los comandos ",(0,t.jsx)(n.em,{children:"XML DOM"})," o el componente ",(0,t.jsx)(n.strong,{children:"4D SVG"})," de 4D."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro ",(0,t.jsx)(n.em,{children:"id_Element"}),' se utiliza para definir el identificador (atributo "id" o "xml: id") del elemento cuyo(s) atributo(s) desea modificar.']}),"\n",(0,t.jsxs)(n.p,{children:["En los par\xe1metro ",(0,t.jsx)(n.em,{children:"nomAtrib"})," y ",(0,t.jsx)(n.em,{children:"valorAtrib"}),", pase respectivamente, el atributo a escribir y su valor (como variables, campos o valores literales). Puede pasar tantos pares de atributos/valores como quiera."]}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"SVG SET ATTRIBUTE"})," se utiliza para modificar (pero no para a\xf1adir o eliminar) la mayor\xeda de los atributos SVG, como por ejemplo, 'fill', 'opacity', 'font-family', etc. Para una definici\xf3n completa de los atributos SVG, consulte los documentos de referencia disponibles en la Internet, por ejemplo: ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"http://www.w3.org/TR/SVG11/attindex.html",children:"http://www.w3.org/TR/SVG11/attindex.html"})}),". La imagen renderizada se actualiza inmediatamente, las modificaciones se transfieren a los elementos hijos para los estilos heredados."]}),"\n",(0,t.jsx)(n.p,{children:"Tenga en cuenta que por razones t\xe9cnicas, los atributos de ciertos elementos, as\xed como ciertos atributos no pueden modificarse. La siguiente tabla muestra los elementos modificables y no modificables, as\xed como los atributos no modificables:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Elementos cuyos atributos son modificables"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"svg"}),(0,t.jsx)(n.th,{children:"Restricciones:"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'- "width" y "height" no son modificables (1)'}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'- "viewBox" s\xf3lo puede modificarse si "width" y "height" se especifican en el documento original'}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"g"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"defs"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"use"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"filter"}),(0,t.jsx)(n.td,{children:"Restricci\xf3n: los elementos hijos fe_xxx child no son modificables"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"circle"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ellipse"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"line"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"polyline"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"polygon"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"path"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rect"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"text, tspan, textArea"}),(0,t.jsx)(n.td,{children:'El atributo especifico "4d-text" se utiliza para modificar el texto de un elemento "text", "tspan" o "textArea" (ver el ejemplo)'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Image"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Elementos cuyos atributos no pueden modificarse"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"linearGradient, radialGradient, Stop, solidColor, marker, symbol, clipPath, filter y los elementos que comienzan por fe, style, pattern"}),(0,t.jsx)(n.th,{children:"Este grupo designa todos los elementos referenciables o contenidos en un elemento referenciable. Esto significa que no es posible, por ejemplo, redefinir los atributos de un gradiente (pero es posible cambiar el gradiente utilizado). Del mismo modo, para cambiar un marcador de color negro por un marcador rojo, es necesario definir ambos marcadores en el documento SVG (uno negro y uno rojo) y seleccionar uno de ellos. No es posible por ejemplo modificar el color de un rect\xe1ngulo si su padre es un elemento s\xedmbolo o marcador"})]})})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Atributos no modificables"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"id o xml:id"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lang o xml:lang"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"class o xml:class"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"width, height"}),(0,t.jsx)(n.td,{children:"Concierne los atributos del elemento 'svg' \xfanicamente (1)"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["(1) Estos atributos no pueden modificarse porque definen y estructuran la imagen resultante. Los atributos de width y height del elemento svg se utilizan para definir las dimensiones iniciales de la imagen en 4D y estas dimensiones debe permanecer constantes despu\xe9s de la creaci\xf3n de la imagen (sin embargo es posible modificar las dimensiones de la imagen resultante con el comando ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/svg-get-attribute",children:"SVG GET ATTRIBUTE"})," de 4D)."]}),"\n",(0,t.jsxs)(n.p,{children:["Consulte tambi\xe9n la descripci\xf3n del comando ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/svg-get-attribute",children:"SVG GET ATTRIBUTE"})," para ver la lista de los atributos 4D reservados y dedicados a la animaci\xf3n."]}),"\n",(0,t.jsx)(n.p,{children:"Si intenta modificar el atributo de un elemento que no es compatible o uno de sus elementos hijos, el comando no hace nada y no se genera error."}),"\n",(0,t.jsxs)(n.p,{children:["Si el comando no se ejecuta en el contexto de un formulario o si se pasa un ",(0,t.jsx)(n.em,{children:"objetoImagen"})," inv\xe1lido, la variable OK toma el valor 0. Si el comando se ha ejecutado correctamente, toma el valor 1."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Modificaci\xf3n del contenido de un elemento de tipo texto:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SVG SET ATTRIBUTE(*;picture_object_name;text_element_ID;"4d-text";"Este es un texto")\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," no hay no namespace para que el atributo pueda utilizarse en una hoja de estilo CSS sin riesgo de conflicto."]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/svg-get-attribute",children:"SVG GET ATTRIBUTE"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1055"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var i=s(667294);let t={},r=i.createContext(t);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);