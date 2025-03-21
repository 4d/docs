"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69065"],{945185:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>a,assets:()=>c,toc:()=>o,contentTitle:()=>d});var a=JSON.parse('{"id":"WritePro/commands-legacy/wp-find-all","title":"WP Find all","description":"WP Find all ( objTarget ; buscarValor ; condicionBusq {; valorReempl} )  -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-find-all.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-find-all","permalink":"/docs/es/20-R7/WritePro/commands/wp-find-all","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-find-all.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-find-all","title":"WP Find all","slug":"/WritePro/commands/wp-find-all","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP EXPORT VARIABLE","permalink":"/docs/es/20-R7/WritePro/commands/wp-export-variable"},"next":{"title":"WP Find next","permalink":"/docs/es/20-R7/WritePro/commands/wp-find-next"}}'),r=s("785893"),i=s("250065");let l={id:"wp-find-all",title:"WP Find all",slug:"/WritePro/commands/wp-find-all",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP Find all"})," ( ",(0,r.jsx)(n.em,{children:"objTarget"})," ; ",(0,r.jsx)(n.em,{children:"buscarValor"})," ; ",(0,r.jsx)(n.em,{children:"condicionBusq"})," {; ",(0,r.jsx)(n.em,{children:"valorReempl"}),"} )  -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objTarget"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Rango o elemento o documento 4D Write Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"buscarValor"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor a buscar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"condicionBusq"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Regla(s) de b\xfasqueda"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valorReempl"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Cadena a reemplazar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de objetos de rango"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"WP Find all"})," busca en ",(0,r.jsx)(n.em,{children:"objTarget"})," despu\xe9s del rango ",(0,r.jsx)(n.em,{children:"buscarValor"})," basado en la ",(0,r.jsx)(n.em,{children:"condicionBusq"}),". Se puede utilizar un par\xe1metro opcional para reemplazar los resultados encontrados."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": ",(0,r.jsx)(n.strong,{children:"WP Find all"})," no busca ni reemplaza texto en f\xf3rmulas. Utilice el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-get-formulas",children:"WP Get formulas"})," en este caso."]}),"\n",(0,r.jsxs)(n.p,{children:["En el par\xe1metro ",(0,r.jsx)(n.em,{children:"objTarget"}),", pase un objeto que contenga:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"un rango, o"}),"\n",(0,r.jsx)(n.li,{children:"un elemento (tabla / fila / celda(s) / p\xe1rrafo / cuerpo / encabezado / pie de p\xe1gina / secci\xf3n / subsecci\xf3n / caja de texto), o"}),"\n",(0,r.jsx)(n.li,{children:"un documento de 4D Write Pro."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro ",(0,r.jsx)(n.em,{children:"buscarValor"})," permite pasar el texto a buscar dentro del ",(0,r.jsx)(n.em,{children:"objTarget"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Puede especificar c\xf3mo se realiza la b\xfasqueda con el par\xe1metro ",(0,r.jsx)(n.em,{children:"condicionBusq"}),". Puede utilizar una (o una combinaci\xf3n) de las siguientes constantes:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk case insensitive"}),(0,r.jsx)(n.td,{children:'Las cadenas se comparan sin tener en cuenta las diferencias de may\xfasculas y min\xfasculas. Tenga en cuenta que se tienen en cuenta los signos diacr\xedticos. Por ejemplo, "A" se considera igual que "a", pero "a" no se considera igual que "\xe0".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk diacritic insensitive"}),(0,r.jsx)(n.td,{children:'Las cadenas se comparan, pero la marca diacr\xedtica (por ejemplo, el acento o el s\xedmbolo) de las letras se ignora. Por ejemplo, "a" se considera igual que "\xe0".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk find reverse"}),(0,r.jsx)(n.td,{children:"La b\xfasqueda se realiza en orden inverso."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk kana insensitive"}),(0,r.jsxs)(n.td,{children:['Para el idioma japon\xe9s. Las cadenas se comparan seg\xfan el significado (no el estilo de escritura). Por ejemplo, "\u3042" se considera igual que "\u30A2". ',(0,r.jsx)(n.br,{}),(0,r.jsx)(n.br,{})," Cuando se define esta opci\xf3n, wk width insensitive  est\xe1 impl\xedcito (se considera definido), sin embargo, lo contrario no es cierto."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk keep character style"}),(0,r.jsx)(n.td,{children:"Al reemplazar el texto, se mantiene el estilo de caracteres existente (si es posible)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk override protected"}),(0,r.jsx)(n.td,{children:"La protecci\xf3n de lectura/escritura se ignora y las cadenas en \xe1reas protegidas pueden ser reemplazadas."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk use keyboard language"}),(0,r.jsxs)(n.td,{children:["Para la comparaci\xf3n de cadenas, utilice la propiedad de idioma del teclado del objeto formulario que se est\xe1 editando en lugar del idioma de los datos actuales (por defecto). ",(0,r.jsx)(n.strong,{children:"Nota"}),": se ignora si el documento est\xe1 fuera de la pantalla."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk whole word"}),(0,r.jsx)(n.td,{children:'S\xf3lo se consideran las cadenas que son palabras completas. No se tienen en cuenta las cadenas que coinciden con otras cadenas. Por ejemplo, "where" no se considera cuando se encuentra dentro de "somewhere".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wk width insensitive"}),(0,r.jsx)(n.td,{children:'Para el idioma japon\xe9s. Las cadenas se comparan por la anchura de los caracteres. Por ejemplo, "\uFF71" se considera igual que "\u30A2".'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": las cadenas se comparan con el lenguaje de datos actual a menos que se utilice wk use keyboard language."]}),"\n",(0,r.jsxs)(n.p,{children:["En el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"remplazarValor"})," puede pasar un texto para que tome el lugar de toda instancia de texto en ",(0,r.jsx)(n.em,{children:"buscarValor"})," que se encuentre en el ",(0,r.jsx)(n.em,{children:"objTarget"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Colecci\xf3n devuelta"})}),"\n",(0,r.jsx)(n.p,{children:"La funci\xf3n devuelve una colecci\xf3n de rango de objetos que describen cada valor encontrado o reemplazado:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"operaciones de b\xfasqueda - los rangos coinciden con las posiciones de las cadenas encontradas"}),"\n",(0,r.jsx)(n.li,{children:"operaciones de reemplazo - los rangos coinciden con las posiciones de las cadenas reemplazadas"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si ",(0,r.jsx)(n.em,{children:"objTarget"})," es un rango o elemento, los valores encontrados se devuelven en el orden en que se encuentran. Si ",(0,r.jsx)(n.em,{children:"objTarget"})," es un documento 4D Write Pro, los valores encontrados se devuelven en el siguiente orden:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"cuerpo"}),"\n",(0,r.jsx)(n.li,{children:"encabezado de la primera p\xe1gina de la secci\xf3n 1 (si la hay)"}),"\n",(0,r.jsx)(n.li,{children:"pie de p\xe1gina de la secci\xf3n 1 (si lo hay)"}),"\n",(0,r.jsx)(n.li,{children:"encabezado de la p\xe1gina izquierda de la secci\xf3n 1 (si lo hay)"}),"\n",(0,r.jsx)(n.li,{children:"pie de p\xe1gina izquierdo de la secci\xf3n 1 (si lo hay)"}),"\n",(0,r.jsx)(n.li,{children:"encabezado de la p\xe1gina derecha para la secci\xf3n (si la hay)"}),"\n",(0,r.jsx)(n.li,{children:"pie de p\xe1gina derecho para la secci\xf3n 1 (si lo hay)"}),"\n",(0,r.jsx)(n.li,{children:"encabezado principal de la secci\xf3n 1 (si lo hay)"}),"\n",(0,r.jsx)(n.li,{children:"pie de p\xe1gina principal para la secci\xf3n 1 (si la hay)"}),"\n",(0,r.jsx)(n.li,{children:"repetir con la secci\xf3n 2, la secci\xf3n 3, y as\xed sucesivamente."}),"\n",(0,r.jsx)(n.li,{children:"cajas de texto."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"El orden se invierte si se utiliza wk find reverse."}),"\n",(0,r.jsx)(n.p,{children:"Se devuelve una colecci\xf3n vac\xeda si no se encuentran resultados."}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $userSel ;$target ;$alphaRanges : Object\n\xa0var $bravoRanges: &NBSP;Collection\n\xa0var $options : Integer\n\xa0\n\xa0\xa0// definir opciones de b\xfasqueda\n\xa0$options:=wk case insensitive+wk diacritic insensitive\n\xa0\n\xa0\xa0// obtener la posici\xf3n actual del usuario\n\xa0$userSel:=WP Selection range(*;"WParea")\n\xa0\n\xa0\xa0//\xa0 definir el objetivo\n\xa0$target:=WP Get body(WParea)\xa0// buscar s\xf3lo dentro del cuerpo\n\xa0\n\xa0\xa0//lanzar la B\xdaSQUEDA de TODAS las ocurrencias de "alpha" por "bravo" en el cuerpo\n\xa0$bravoRanges:=WP Find all($target;"alpha";$options;"bravo")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-find-next",children:"WP Find next"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-find-previous",children:"WP Find previous "})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var a=s(667294);let r={},i=a.createContext(r);function l(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);