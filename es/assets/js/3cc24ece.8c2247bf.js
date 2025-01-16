"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84499"],{809293:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-find-previous","title":"WP Find previous","description":"WP Find previous  ( objTarget ; buscarAntes ; buscarValor ; buscarCondicion {; remplazarValor} ) -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-find-previous.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-find-previous","permalink":"/docs/es/20-R7/WritePro/commands/wp-find-previous","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-find-previous.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-find-previous","title":"WP Find previous","slug":"/WritePro/commands/wp-find-previous","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Find next","permalink":"/docs/es/20-R7/WritePro/commands/wp-find-next"},"next":{"title":"WP FREEZE FORMULAS","permalink":"/docs/es/20-R7/WritePro/commands/wp-freeze-formulas"}}'),a=s("785893"),i=s("250065");let d={id:"wp-find-previous",title:"WP Find previous",slug:"/WritePro/commands/wp-find-previous",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WP Find previous"}),"  ( ",(0,a.jsx)(n.em,{children:"objTarget"})," ; ",(0,a.jsx)(n.em,{children:"buscarAntes"})," ; ",(0,a.jsx)(n.em,{children:"buscarValor"})," ; ",(0,a.jsx)(n.em,{children:"buscarCondicion"})," {; ",(0,a.jsx)(n.em,{children:"remplazarValor"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objTarget"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Rango o elemento o documento 4D Write Pro"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"buscarAntes"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Rango antes del cual comenzar la b\xfasqueda"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"buscarValor"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Buscar valor"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"buscarCondicion"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Regla(s) de b\xfasqueda"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"remplazarValor"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Cadena de reemplazo"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Rango del valor encontrado/reemplazado"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"WP Find previous"}),"  busca el ",(0,a.jsx)(n.em,{children:"objTarget"}),", antes del rango ",(0,a.jsx)(n.em,{children:"buscarAntes"}),", para ",(0,a.jsx)(n.em,{children:"buscarValor"})," basado en ",(0,a.jsx)(n.em,{children:"condicionBusq"}),". Se puede utilizar un par\xe1metro opcional para reemplazar los resultados encontrados."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota"}),": ",(0,a.jsx)(n.strong,{children:"WP Find previous"})," no busca ni reemplaza el texto en f\xf3rmulas. Utilice el comando ",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-get-formulas",children:"WP Get formulas"})," en este caso."]}),"\n",(0,a.jsxs)(n.p,{children:["En el par\xe1metro ",(0,a.jsx)(n.em,{children:"objTarget"}),", pase un objeto que contenga:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"un rango, o"}),"\n",(0,a.jsx)(n.li,{children:"un elemento (tabla / fila / celda(s) / p\xe1rrafo / cuerpo / cabecera / pie de p\xe1gina / secci\xf3n / subsecci\xf3n), o"}),"\n",(0,a.jsx)(n.li,{children:"un documento de 4D Write Pro."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Pase un rango en el par\xe1metro ",(0,a.jsx)(n.em,{children:"buscarAntes"}),". La b\xfasqueda comenzar\xe1 inmediatamente antes del rango definido."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota"}),": si ",(0,a.jsx)(n.em,{children:"objTarget"})," es el documento 4D Write Pro y ",(0,a.jsx)(n.em,{children:"buscarAntes"})," est\xe1 en una caja de texto, el comando busca primero en la caja de texto padre y despu\xe9s en la(s) caja(s) de texto anterior(es), pie(s) de p\xe1gina, encabezado(s), y finalmente en el cuerpo en orden descendente (de acuerdo con la ordenaci\xf3n de abajo)."]}),"\n",(0,a.jsxs)(n.p,{children:["El par\xe1metro ",(0,a.jsx)(n.em,{children:"buscarValor"})," permite pasar el texto a buscar dentro del ",(0,a.jsx)(n.em,{children:"objTarget"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Puede especificar c\xf3mo se realiza la b\xfasqueda con el par\xe1metro ",(0,a.jsx)(n.em,{children:"buscarCondicion"}),". Puede utilizar una (o una combinaci\xf3n) de las siguientes constantes:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Constante"}),(0,a.jsx)(n.th,{children:"Comentario"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"wk case insensitive"}),(0,a.jsx)(n.td,{children:'Las cadenas se comparan sin tener en cuenta las diferencias de may\xfasculas y min\xfasculas. Tenga en cuenta que se tienen en cuenta los signos diacr\xedticos. Por ejemplo, "A" se considera igual que "a", pero "a" no se considera igual que "\xe0".'})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"wk diacritic insensitive"}),(0,a.jsx)(n.td,{children:'Las cadenas se comparan, pero la marca diacr\xedtica (por ejemplo, el acento o el s\xedmbolo) de las letras se ignora. Por ejemplo, "a" se considera igual que "\xe0".'})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"wk find reverse"}),(0,a.jsx)(n.td,{children:"La b\xfasqueda se realiza en orden inverso."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"wk kana insensitive"}),(0,a.jsxs)(n.td,{children:['Para el idioma japon\xe9s. Las cadenas se comparan seg\xfan el significado (no el estilo de escritura). Por ejemplo, "\u3042" se considera igual que "\u30A2". ',(0,a.jsx)(n.br,{}),(0,a.jsx)(n.br,{})," Cuando se define esta opci\xf3n, wk width insensitive  est\xe1 impl\xedcito (se considera definido), sin embargo, lo contrario no es cierto."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"wk keep character style"}),(0,a.jsx)(n.td,{children:"Al reemplazar el texto, se mantiene el estilo de caracteres existente (si es posible)."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"wk override protected"}),(0,a.jsx)(n.td,{children:"La protecci\xf3n de lectura/escritura se ignora y las cadenas en \xe1reas protegidas pueden ser reemplazadas."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"wk use keyboard language"}),(0,a.jsxs)(n.td,{children:["Para la comparaci\xf3n de cadenas, utilice la propiedad de idioma del teclado del objeto formulario que se est\xe1 editando en lugar del idioma de los datos actuales (por defecto). ",(0,a.jsx)(n.strong,{children:"Nota"}),": se ignora si el documento est\xe1 fuera de la pantalla."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"wk whole word"}),(0,a.jsx)(n.td,{children:'S\xf3lo se consideran las cadenas que son palabras completas. No se tienen en cuenta las cadenas que coinciden con otras cadenas. Por ejemplo, "where" no se considera cuando se encuentra dentro de "somewhere".'})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"wk width insensitive"}),(0,a.jsx)(n.td,{children:'Para el idioma japon\xe9s. Las cadenas se comparan por la anchura de los caracteres. Por ejemplo, "\uFF71" se considera igual que "\u30A2".'})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota"}),": las cadenas se comparan con el lenguaje de datos actual a menos que se utilice wk use keyboard language."]}),"\n",(0,a.jsxs)(n.p,{children:["En el par\xe1metro opcional ",(0,a.jsx)(n.em,{children:"remplazarValor"}),", se puede pasar un texto para que ocupe el lugar de cualquier instancia del texto en ",(0,a.jsx)(n.em,{children:"buscarValor"})," que se encuentre en el ",(0,a.jsx)(n.em,{children:"objTarget"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Rango devuelto"})}),"\n",(0,a.jsx)(n.p,{children:"La funci\xf3n devuelve un rango del valor encontrado o reemplazado:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"operaciones de b\xfasqueda - los rangos coinciden con las posiciones de las cadenas encontradas"}),"\n",(0,a.jsx)(n.li,{children:"operaciones de reemplazo - los rangos coinciden con las posiciones de las cadenas reemplazadas"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Si ",(0,a.jsx)(n.em,{children:"objTarget"})," es un rango o elemento, los valores encontrados se devuelven en el orden en que se encuentran. Si ",(0,a.jsx)(n.em,{children:"objTarget"})," es un documento 4D Write Pro, los valores encontrados se devuelven en el siguiente orden:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"cuerpo"}),"\n",(0,a.jsx)(n.li,{children:"encabezado de la primera p\xe1gina de la secci\xf3n 1 (si existe)"}),"\n",(0,a.jsx)(n.li,{children:"pie de p\xe1gina de la secci\xf3n 1 (si lo hay)"}),"\n",(0,a.jsx)(n.li,{children:"encabezado de la p\xe1gina izquierda de la secci\xf3n 1 (si lo hay)"}),"\n",(0,a.jsx)(n.li,{children:"pie de p\xe1gina izquierdo de la secci\xf3n 1 (si lo hay)"}),"\n",(0,a.jsx)(n.li,{children:"encabezado de la p\xe1gina derecha para la secci\xf3n (si lo hay)"}),"\n",(0,a.jsx)(n.li,{children:"pie de p\xe1gina derecho para la secci\xf3n 1 (si lo hay)"}),"\n",(0,a.jsx)(n.li,{children:"encabezado principal de la secci\xf3n 1 (si lo hay)"}),"\n",(0,a.jsx)(n.li,{children:"pie de p\xe1gina principal para la secci\xf3n 1 (si la hay)"}),"\n",(0,a.jsx)(n.li,{children:"repetir con la secci\xf3n 2, la secci\xf3n 3, y as\xed sucesivamente."}),"\n",(0,a.jsx)(n.li,{children:"cajas de texto"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Se devuelve un rango vac\xedo si no se encuentran resultados."}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $userSel ;$target ;$alphaRanges ;$previousRanges: object\n\xa0var $options : Integer\n\xa0\n\xa0\xa0// definir las opciones de b\xfasqueda\n\xa0$options:=wk case insensitive+wk diacritic insensitive\n\xa0\n\xa0\xa0// obtener la posici\xf3n actual del usuario\n\xa0$userSel:=WP Selection range(*;"WParea")\n\xa0\n\xa0\xa0// definir el objetivo\n\xa0$target:=WP Get body(WParea)\xa0// buscar s\xf3lo dentro del cuerpo\n\xa0\n\xa0\xa0// lanzar la B\xdaSQUEDA de ocurrencias ANTERIORES de la cadena "alpha" (basada en la selecci\xf3n actual)\n\xa0$previousRanges:=WP Find previous($target;"alpha";$options)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-find-all",children:"WP Find all"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-find-next",children:"WP Find next"})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var r=s(667294);let a={},i=r.createContext(a);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);