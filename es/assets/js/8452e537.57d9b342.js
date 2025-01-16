"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79697"],{13525:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>r,metadata:()=>a,assets:()=>s,toc:()=>l,contentTitle:()=>i});var a=JSON.parse('{"id":"WritePro/commands-legacy/wp-new-text-box","title":"WP New text box","description":"WP New text box ( wpDoc ; numPag ) -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-new-text-box.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-new-text-box","permalink":"/docs/es/WritePro/commands/wp-new-text-box","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new-text-box.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-new-text-box","title":"WP New text box","slug":"/WritePro/commands/wp-new-text-box","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP New subsection","permalink":"/docs/es/WritePro/commands/wp-new-subsection"},"next":{"title":"WP Paragraph range","permalink":"/docs/es/WritePro/commands/wp-paragraph-range"}}'),d=t("785893"),o=t("250065");let r={id:"wp-new-text-box",title:"WP New text box",slug:"/WritePro/commands/wp-new-text-box",displayed_sidebar:"docs"},i=void 0,s={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"WP New text box"})," ( ",(0,d.jsx)(n.em,{children:"wpDoc"})," ; ",(0,d.jsx)(n.em,{children:"numPag"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"wpDoc"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Documento 4D Write Pro"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numPag"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de p\xe1gina donde anclar la caja de texto"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Objeto de caja de texto"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"WP New text box"})," crea y devuelve un nuevo objeto caja de texto en la p\xe1gina ",(0,d.jsx)(n.em,{children:"numPag"})," de ",(0,d.jsx)(n.em,{children:"wpDoc"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," para m\xe1s informaci\xf3n sobre las cajas de texto, consulte el p\xe1rrafo ",(0,d.jsx)(n.em,{children:"Gesti\xf3n de cajas de texto"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["En el par\xe1metro ",(0,d.jsx)(n.em,{children:"wpDoc"}),", pase un documento 4D Write Pro."]}),"\n",(0,d.jsxs)(n.p,{children:["En ",(0,d.jsx)(n.em,{children:"numPag"}),", pase el n\xfamero de p\xe1gina al que debe anclarse la caja de texto. Si ",(0,d.jsx)(n.em,{children:"numPag"})," < 0 se utiliza el n\xfamero de p\xe1gina ",(0,d.jsx)(n.strong,{children:"1"})," (no se genera ning\xfan error)."]}),"\n",(0,d.jsx)(n.p,{children:"El comando crea un nuevo elemento caja de texto con los siguientes atributos por defecto:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"ancho = 8 cm,"}),"\n",(0,d.jsx)(n.li,{children:"alto = auto,"}),"\n",(0,d.jsx)(n.li,{children:"borde negro s\xf3lido 1 pt,"}),"\n",(0,d.jsx)(n.li,{children:"relleno = 4 pt,"}),"\n",(0,d.jsx)(n.li,{children:"margen = 0 pt,"}),"\n",(0,d.jsx)(n.li,{children:"color de fondo = blanco,"}),"\n",(0,d.jsx)(n.li,{children:'id = "textBoxN" donde N es un n\xfamero,'}),"\n",(0,d.jsx)(n.li,{children:"anclado delante del cuerpo en la esquina superior izquierda del rect\xe1ngulo de la p\xe1gina (al igual que una imagen anclada, una caja de texto puede anclarse al modo anidado, o a una secci\xf3n, a todas las secciones o a una subsecci\xf3n en modo p\xe1gina, y a la capa de fondo o frontal)."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Consulte la secci\xf3n ",(0,d.jsx)(n.em,{children:"Atributos 4D Write Pro"})," para obtener una descripci\xf3n detallada de estos atributos."]}),"\n",(0,d.jsxs)(n.p,{children:["La nueva caja de texto se renderiza s\xf3lo en la p\xe1gina ",(0,d.jsx)(n.em,{children:"numPag"})," ",(0,d.jsx)(n.em,{children:","})," por lo que puede que no se renderice si:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"no hay ninguna p\xe1gina con el n\xfamero de p\xe1gina pasado"}),"\n",(0,d.jsx)(n.li,{children:"el modo de visualizaci\xf3n actual es anidado o borrador"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Sin embargo, la caja de texto sigue existiendo y es propiedad del documento aunque no se muestre."}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,d.jsx)(n.p,{children:"Desea crear una caja de texto vac\xeda por defecto:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0$textBox:=WP New text box(WParea;1)\n"})}),"\n",(0,d.jsx)(n.p,{children:"Resultado:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(216744).Z+"",width:"855",height:"154"})}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,d.jsx)(n.p,{children:"En una plantilla de una carta, desea a\xf1adir una caja de texto para mostrar la direcci\xf3n del destinatario (que se almacena en el contexto):"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// #1 crear la caja de texto\n\xa0$textBox:=WP New text box(WParea;1)\n\xa0\n\xa0\xa0// #2 definir algunos atributos de la caja de texto\n\xa0WP SET ATTRIBUTES($textBox;wk id;"AddressArea")\n\xa0WP SET ATTRIBUTES($textBox;wk anchor origin;wk paper box)\n\xa0WP SET ATTRIBUTES($textBox;wk anchor horizontal align;wk left;wk vertical align;wk top)\n\xa0WP SET ATTRIBUTES($textBox;wk anchor horizontal offset;$form.offsetX.values[$form.offsetX.index])\n\xa0WP SET ATTRIBUTES($textBox;wk anchor vertical offset;$form.offsetY.values[$form.offsetY.index])\n\xa0WP SET ATTRIBUTES($textBox;wk width;$form.width.values[$form.width.index])\n\xa0WP SET ATTRIBUTES($textBox;wk height;$form.height.values[$form.height.index])\n\xa0WP SET ATTRIBUTES($textBox;wk padding;$form.padding.values[$form.padding.index])\xa0// inside margins\n\xa0WP SET ATTRIBUTES($textBox;wk border style;wk dashed;wk border color;"Blue";wk border width;"1pt";wk border radius;"10pt")\n\xa0WP SET ATTRIBUTES($textBox;wk vertical align;wk center)\n\xa0\n\xa0\xa0// #3: definir las f\xf3rmulas dentro de la caja de texto\n\xa0WP INSERT FORMULA($textBox;Formula(This.data.fullName);wk append)\n\xa0WP INSERT BREAK($textBox;wk paragraph break;wk append)\n\xa0WP INSERT FORMULA($textBox;Formula(This.data.fullAddress);wk append)\n\xa0\n\xa0\xa0// #4: Dar estilo al contenido de la caja de texto\n\xa0WP SET ATTRIBUTES($textBox;wk font;"Arial";wk font bold;wk true;wk font size;"18pt")\n'})}),"\n",(0,d.jsx)(n.p,{children:"Resultado:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(36736).Z+"",width:"787",height:"349"})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-delete-text-box",children:"WP DELETE TEXT BOX"})})]})}function x(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},216744:function(e,n,t){t.d(n,{Z:function(){return a}});let a="data:image/png;base64,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"},36736:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/pict6196766.en-d5d2395be47707f47da410df890a3061.png"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var a=t(667294);let d={},o=a.createContext(d);function r(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);