"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86597"],{179699:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/append-menu-item","title":"APPEND MENU ITEM","description":"APPEND MENU ITEM ( menu ; itemText {; subMenu {; proceso {; *}}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/append-menu-item.md","sourceDirName":"commands-legacy","slug":"/commands/append-menu-item","permalink":"/docs/es/commands/append-menu-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fappend-menu-item.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"append-menu-item","title":"APPEND MENU ITEM","slug":"/commands/append-menu-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Menus","permalink":"/docs/es/category/menus"},"next":{"title":"Count menu items","permalink":"/docs/es/commands/count-menu-items"}}'),a=s("785893"),d=s("250065");let t={id:"append-menu-item",title:"APPEND MENU ITEM",slug:"/commands/append-menu-item",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",previous:"previous",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"APPEND MENU ITEM"})," ( ",(0,a.jsx)(n.em,{children:"menu"})," ; ",(0,a.jsx)(n.em,{children:"itemText"})," {; ",(0,a.jsx)(n.em,{children:"subMenu"})," {; ",(0,a.jsx)(n.em,{children:"proceso"})," {; *}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"menu"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de men\xfa o referencia de men\xfa"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"itemText"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Texto para los nuevos elementos de men\xfa"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"subMenu"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Referencia del submen\xfa asociado al elemento"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"proceso"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de referencia del proceso"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Si se pasa: considerar metacaracteres como caracteres est\xe1ndar"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"APPEND MENU ITEM"})," a\xf1ade nueva l\xedneas de men\xfa al men\xfa cuyo n\xfamero o referencia se pasa en ",(0,a.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Si omite el par\xe1metro ",(0,a.jsx)(n.em,{children:"proceso"}),", ",(0,a.jsx)(n.strong,{children:"APPEND MENU ITEM"})," se aplica a la barra de men\xfas del proceso actual. De lo contrario, ",(0,a.jsx)(n.strong,{children:"APPEND MENU ITEM"})," se aplica a la barra de men\xfas del proceso actual cuyo n\xfamero de referencia se pasa en ",(0,a.jsx)(n.em,{children:"proceso"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," si pasa un ",(0,a.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," en ",(0,a.jsx)(n.em,{children:"menu"}),", el par\xe1metro ",(0,a.jsx)(n.em,{children:"proceso"})," es in\xfatil y se ignorar\xe1."]}),"\n",(0,a.jsxs)(n.p,{children:["Si no pasa el par\xe1metro ",(0,a.jsx)(n.em,{children:"*"}),", ",(0,a.jsx)(n.strong,{children:"APPEND MENU ITEM"})," le permite a\xf1adir una o varias l\xedneas de men\xfa en una sola llamada."]}),"\n",(0,a.jsxs)(n.p,{children:["Las l\xedneas a a\xf1adir se definen con el par\xe1metro ",(0,a.jsx)(n.em,{children:"itemText"})," de la siguiente manera:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Separe cada elemento del siguiente con un punto y coma (",(0,a.jsx)(n.em,{children:";"}),"). Por ejemplo,",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:'"ItemText1;ItemText2;ItemText3".'})]}),"\n",(0,a.jsxs)(n.li,{children:["Para desactivar una l\xednea: Coloque un par\xe9ntesis abierto (",(0,a.jsx)(n.em,{children:"("}),") en el texto de la l\xednea."]}),"\n",(0,a.jsx)(n.li,{children:'Para definir una l\xednea de separaci\xf3n: Pase "-" o "(-" como texto de la l\xednea.'}),"\n",(0,a.jsxs)(n.li,{children:["Para especificar un estilo de fuente para una l\xednea: en el texto de la l\xednea, ponga un signo menor que (",(0,a.jsx)(n.em,{children:"<"}),") seguido por uno de los siguientes caracteres:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"<B"}),(0,a.jsx)(n.th,{children:"Negrita"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"<I"}),(0,a.jsx)(n.td,{children:"Cursiva"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"<U"}),(0,a.jsx)(n.td,{children:"Subrayado"})]})]})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Para a\xf1adir una marca de selecci\xf3n a una l\xednea: en el texto de la l\xednea, ponga un signo de admiraci\xf3n (",(0,a.jsx)(n.em,{children:"!"}),") seguido por el car\xe1cter que quiere como marca de selecci\xf3n. En Macintosh, el car\xe1cter se muestra; en Windows, se muestra una marca de selecci\xf3n sin importar que car\xe1cter pase."]}),"\n",(0,a.jsx)(n.li,{children:"Para a\xf1adir un icono a una l\xednea: en el texto de la l\xednea, ponga un acento circunflejo (^) seguido por un car\xe1cter cuyo c\xf3digo m\xe1s 208 es el n\xfamero del recurso del icono Mac OS."}),"\n",(0,a.jsxs)(n.li,{children:["Para a\xf1adir un atajo a una l\xednea: en el texto de la l\xednea, ponga una barra oblicua (",(0,a.jsx)(n.em,{children:"/"}),") seguida por el car\xe1cter de atajo para el elemento."]}),"\n",(0,a.jsxs)(n.li,{children:["(",(0,a.jsx)(n.strong,{children:"A partir de 4D v16 R3"}),") si el elemento est\xe1 asociado con una acci\xf3n est\xe1ndar, pase la constante ak standard action title en ",(0,a.jsx)(n.em,{children:"itemText"}),' para utilizar autom\xe1ticamente el nombre de la acci\xf3n localizada y la informaci\xf3n de contexto (si la hay), por ejemplo "Undo ',(0,a.jsx)(n.previous,{action:"",children:'".'})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," utilice men\xfas que tengan un n\xfamero razonable de l\xedneas. Por ejemplo, si quiere mostrar m\xe1s de 50 elementos, considere utilizar un \xe1rea de desplazamiento en un formulario en lugar de un men\xfa."]}),"\n",(0,a.jsxs)(n.p,{children:["Si pasa el par\xe1metro ",(0,a.jsx)(n.em,{children:"*"}),', los caracteres "especiales" (',(0,a.jsx)(n.em,{children:"; ( !"}),'...) incluidos en el texto del elemento se considerar\xe1n como caracteres est\xe1ndar y no como metacaracteres. Esto permite crear elementos de men\xfa tales como "Copiar (especial)..." o "Buscar/Reemplazar...". Note que cuando se pasa el par\xe1metro ',(0,a.jsx)(n.em,{children:"*"}),', no puede crear varios elementos en una sola llamada ya que el car\xe1cter ";" es considerado como un car\xe1cter est\xe1ndar.']}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," los comandos ",(0,a.jsx)(n.a,{href:"/docs/es/commands/get-menu-items",children:"GET MENU ITEMS"})," y ",(0,a.jsx)(n.a,{href:"/docs/es/commands/get-menu-item",children:"Get menu item"})," devolver\xe1n o no los metacaracteres en el texto de un elemento de men\xfa dependiendo de c\xf3mo fue creado: si fue creado con la opci\xf3n ",(0,a.jsx)(n.em,{children:"*"}),", los metacaracteres ser\xe1n devueltos como caracteres est\xe1ndar."]}),"\n",(0,a.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,a.jsx)(n.em,{children:"subMenu"})," permite designar un men\xfa como elemento a\xf1adido y por lo tanto definir un submen\xfa jer\xe1rquico. Debe pasar en este par\xe1metro una referencia de men\xfa (cadena de tipo ",(0,a.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") especificando un men\xfa creado por ejemplo, utilizando el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/create-menu",children:"Create menu"}),". Si el comando a\xf1ade m\xe1s de un elemento de men\xfa, el submen\xfa se asocia a la primera l\xednea."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Importante:"})," las nuevas l\xedneas no tienen m\xe9todos o acciones asociados. Estos deben asociarse con los elementos utilizando los comandos ",(0,a.jsx)(n.a,{href:"/docs/es/commands/set-menu-item-property",children:"SET MENU ITEM PROPERTY"})," o ",(0,a.jsx)(n.a,{href:"/docs/es/commands/set-menu-item-method",children:"SET MENU ITEM METHOD"}),", o los elementos tambi\xe9n pueden ser administradas por un m\xe9todo de formulario utilizando el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/menu-selected",children:"Menu selected"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Este ejemplo a\xf1ade los nombres de las fuentes disponibles en un men\xfa Fuentes, el cual en este ejemplo es el sexto men\xfa de la barra de men\xfas actual:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// En el m\xe9todo base On Startup\n\xa0\xa0// La lista de fuentes se carga y el texto de la l\xednea de men\xfa se construye\n\xa0FONT LIST(\u25CAasFuenteDisp)\n\xa0\u25CAatFuenteMenuItems:=""\n\xa0For($vlFont;1;Size of array(\u25CAasFuenteDisp))\n\xa0\xa0\xa0\xa0\u25CAatFuenteMenuItems:=\u25CAatFuenteMenuItems+";"+\u25CAasFuenteDisp{$vlFont}\n\xa0End for\n'})}),"\n",(0,a.jsx)(n.p,{children:"Entonces, en todo m\xe9todo de formulario o de proyecto, puede escribir:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0APPEND MENU ITEM(6;\u25CAatFuenteMenuItems)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/delete-menu-item",children:"DELETE MENU ITEM"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/insert-menu-item",children:"INSERT MENU ITEM"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/set-menu-item-parameter",children:"SET MENU ITEM PARAMETER"})]}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"411"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Prohibido en el servidor"}),(0,a.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var r=s(667294);let a={},d=r.createContext(a);function t(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);