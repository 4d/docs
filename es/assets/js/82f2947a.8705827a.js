"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56646"],{7520:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>t,metadata:()=>l,assets:()=>i,toc:()=>o,contentTitle:()=>r});var l=JSON.parse('{"id":"commands-legacy/listbox-set-row-font-style","title":"LISTBOX SET ROW FONT STYLE","description":"LISTBOX SET ROW FONT STYLE ( { ;} objeto ; fila ; estilo* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-set-row-font-style.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-row-font-style","permalink":"/docs/es/commands/listbox-set-row-font-style","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-row-font-style.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-row-font-style","title":"LISTBOX SET ROW FONT STYLE","slug":"/commands/listbox-set-row-font-style","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET ROW COLOR","permalink":"/docs/es/commands/listbox-set-row-color"},"next":{"title":"LISTBOX SET ROW HEIGHT","permalink":"/docs/es/commands/listbox-set-row-height"}}'),d=s("785893"),a=s("250065");let t={id:"listbox-set-row-font-style",title:"LISTBOX SET ROW FONT STYLE",slug:"/commands/listbox-set-row-font-style",displayed_sidebar:"docs"},r=void 0,i={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"LISTBOX SET ROW FONT STYLE"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"objeto"})," ; ",(0,d.jsx)(n.em,{children:"fila"})," ; ",(0,d.jsx)(n.em,{children:"estilo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objeto"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsxs)(n.td,{children:["Nombre de objeto (si * se especifica) o ",(0,d.jsx)(n.br,{}),"Variable (si * se omite)"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fila"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de fila"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"estilo"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Estilo de fuente"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," este comando s\xf3lo funciona con los list boxes de tipo array."]}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"LISTBOX SET ROW FONT STYLE"})," establece un estilo de fuente para una fila o una celda en el list box tipo array designado por los par\xe1metros ",(0,d.jsx)(n.em,{children:"objeto"})," y ",(0,d.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,d.jsxs)(n.p,{children:["Al pasar el par\xe1metro opcional ",(0,d.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,d.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no se pasa este par\xe1metro, indica que el par\xe1metro objeto es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena."]}),"\n",(0,d.jsxs)(n.p,{children:["Puede designar un list box o una columna de list box en el par\xe1metro de ",(0,d.jsx)(n.em,{children:"objeto"}),":"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Cuando el ",(0,d.jsx)(n.em,{children:"objeto"})," designa un list box, el comando se aplica a la fila."]}),"\n",(0,d.jsxs)(n.li,{children:["Cuando el ",(0,d.jsx)(n.em,{children:"objeto"})," designa una columna de list box, el comando se aplica a la celda ubicada en la intersecci\xf3n de la columna/fila."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["En ",(0,d.jsx)(n.em,{children:"fila"}),", pase el n\xfamero de la fila en la que desea aplicar el nuevo estilo."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," el comando no tiene en cuenta ning\xfan estado oculto/visible de las filas del list box."]}),"\n",(0,d.jsxs)(n.p,{children:["En ",(0,d.jsx)(n.em,{children:"estilo"}),", se pasa un valor de estilo. Debe utilizar uno (o una combinaci\xf3n) de las constantes que se encuentran en el tema ",(0,d.jsx)(n.em,{children:"Estilos de fuente"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bold"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Italic"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Plain"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Underline"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Si un array de estilos de fuente se ha asociado con el list box o columna, s\xf3lo el elemento correspondiente a la fila se modifica. En otras palabras, la ejecuci\xf3n del comando tiene el mismo efecto, en este caso, como modificaci\xf3n de un elemento del array estilo de fuente.",(0,d.jsx)(n.br,{}),"\nSi no hay un array estilo de fuente asociado con el list box o columna, se crear\xe1 de forma din\xe1mica cuando se llama a este comando. Se puede acceder a ellos usando el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/listbox-get-array",children:"LISTBOX Get array"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Si las propiedades de estilo en conflicto se establecen para la columna o el list box, se aplica un orden de prioridad. Para obtener m\xe1s informaci\xf3n, consulte el manual de ",(0,d.jsx)(n.em,{children:"Dise\xf1o"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," dado que los estilos de array para las columnas tienen prioridad sobre los de los list boxes, al aplicar este comando a un list box, s\xf3lo tendr\xe1 efecto si no hay estilo de array asignado a las columnas."]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"Dado un array de tipo list box con las siguientes caracter\xedsticas:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"un array de estilo de fuente asociado con el list box (ArrGlobalStyle)"}),"\n",(0,d.jsx)(n.li,{children:"un array de estilo de fuente asociado con la columna 5 (ArrCol5Style)"}),"\n",(0,d.jsx)(n.li,{children:"las otras columnas no tienen arrays de estilo."}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET ROW FONT STYLE(*;"Col5";3;Bold)\n\xa0\xa0// equivalente a ArrCol5Style{3}:=Bold\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(947149).Z+"",width:"361",height:"122"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET ROW FONT STYLE(*;"List Box";3;Italic+Underline)\n\xa0\xa0// equivalente a ArrGlobalStyle{3}:=Italic+Underline\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(495513).Z+"",width:"361",height:"122"})}),"\n",(0,d.jsx)(n.p,{children:"Despu\xe9s de la segunda declaraci\xf3n, todas las celdas de la tercera fila cambian de fila a subrayadas en cursiva, a excepci\xf3n de la celda de la quinta columna que queda s\xf3lo en negrilla (los arrays de estilo de columna tienen prioridad sobre los arrays de list box)."}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/listbox-get-row-font-style",children:"LISTBOX Get row font style"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/listbox-set-row-color",children:"LISTBOX SET ROW COLOR"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"1268"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},947149:function(e,n,s){s.d(n,{Z:function(){return l}});let l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWkAAAB6CAIAAADyLDWYAAAEbklEQVR42u3cz04bVxTAYU/Fk1SAqqhP4D5BXAllQ7fZwTJ+iO66gWXYZYsVKVIk+wnKE3TVsGPpBygsKjozdjEmf9p71My91/0+KZFtsPRjJI7GY3ya2dv3z777dgSQYq/9d3h4mDsjzf39fdM0uSs0l0jzYLrZsbe3lzsjzWw2Oz4+zl2huUSaB3B3d7dcLr/JnQFUyewAIswOIMLsACLMDiDi8exYnDY/nF//yycmffPXo1mz5jycdwAhs7fv73snDw+dzLv7H87Gm/vdnfHZh+7x+cloPB4/+eZhXV5eatasOVfz7e3tzc3NZnasilZtW7fnJ/2t9pG2cfX/k2/Odqw1a9Y8vNXs+MxflF7//tvo6uKgma4H24vR6Pnr+bummbTVz3OdI32ZZs2aB/SFv0ZvC1+XkJhCs2bNA/nMtdL9w+9HFz9vXcNdnE5G7fnSaHK6yB2tWbPm/B5d7+heP3WeXqdpHzl7uE7zcMVm65uzvT7UrFlz/mul1Xh8rGuhWfPONK9mh7/vACLMDiDC7AAizA4goumulf75R+4MoBpHR0fL5dL7LJo1a07jfRYgzuwAIswOIMLsACLMDiDCvlLNmjVHOO8AQuwr1axZcxL7SjVr1hxhX2kBNGuuttm+0uw0a66y2b5SzZqLVH6zfaWaNWtOYl+pZs1FqK7Z52iBOLMDiDA7gAizA4iwrxRIY1+pZs1FqK7Z+yxAnNkBRJgdQITZAUSYHUCEfaWad7W5D2mayGdOw0/8D4qrOc7OO9hZi3cXAz/x/8W+Us072TzfRH/qI+198fqB/qsPtz/xRMd5m32lmne7eT0+/v7N6u89/p3sbq9utbX9Vzc/1qC/ktUdZ/tKC6B5MKvXIReTZuvlyP6rN2eXB9PpwaSbHG9e7efO3Cj+ONtXmp3mIXS/if2Jxa8lzYd/UvRxtq9U8842HzzbXBPY//Gn9s7V9Jd14eK8/wmuz19Or9qRMm9fu1xNX65/qsdPzKb842xfqeZdbd5cMP04uw9dfXkTv2nefqLjvM2+Us2ai1Bds8/RAnFmBxBhdgARZgcQYV8pkMa+Us2ai1Bds/dZgDizA4gwO4AIswOIMDuACPtKNWvWHOG8Awixr1SzZs1J7CvVrFlzhH2lBdCsudpm+0qz06y5ymb7SjVrLlL5zfaVatasOYl9pZo1F6G6Zp+jBeLMDiDC7AAizA4gwr5SII19pZo1F6G6Zu+zAHFmBxBhdgARZgcQYXYAEfaVatasOcJ5BxBiX6lmzZqT2FeqWbPmCPtKC6BZc7XN9pVmp1lzlc32lWrWXKTym+0r1axZcxL7SjVrLkJ1zT5HC8SZHUCE2QFEmB1AhH2lQBr7SjVrLkJ1zd5nAeLMDiDC7AAizA4gwuwAIuwr1axZc4TzDiDEvlLNmjUnsa9Us2bNEfaVFkCz5mqb7SvNTrPmKpvtK9WsuUjlN9tXqlmz5iT2lWrWXITqmn2OFogzO4AIswOIMDuACPtKgTSrfaV/AYrZWz8jO3dFAAAAAElFTkSuQmCC"},495513:function(e,n,s){s.d(n,{Z:function(){return l}});let l="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return t}});var l=s(667294);let d={},a=l.createContext(d);function t(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);