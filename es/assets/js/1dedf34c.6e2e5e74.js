"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67153"],{149870:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-new-style-sheet","title":"WP New style sheet","description":"WP New style sheet ( wpDoc ; tipoHojaEstilo ; nomHojaEstilo ) -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-new-style-sheet.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-new-style-sheet","permalink":"/docs/es/20-R7/WritePro/commands/wp-new-style-sheet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new-style-sheet.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-new-style-sheet","title":"WP New style sheet","slug":"/WritePro/commands/wp-new-style-sheet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP New header","permalink":"/docs/es/20-R7/WritePro/commands/wp-new-header"},"next":{"title":"WP New subsection","permalink":"/docs/es/20-R7/WritePro/commands/wp-new-subsection"}}'),r=n("785893"),o=n("250065");let i={id:"wp-new-style-sheet",title:"WP New style sheet",slug:"/WritePro/commands/wp-new-style-sheet",displayed_sidebar:"docs"},l=void 0,a={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"WP New style sheet"})," ( ",(0,r.jsx)(s.em,{children:"wpDoc"})," ; ",(0,r.jsx)(s.em,{children:"tipoHojaEstilo"})," ; ",(0,r.jsx)(s.em,{children:"nomHojaEstilo"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe1metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"wpDoc"}),(0,r.jsx)(s.td,{children:"Object"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Documento 4D Write Pro"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tipoHojaEstilo"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Tipo de hoja de estilo"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"nomHojaEstilo"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Nombre de hoja de estilo"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Resultado"}),(0,r.jsx)(s.td,{children:"Object"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Objeto hoja de estilo"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(s.p,{children:["El comando ",(0,r.jsx)(s.strong,{children:"WP New style sheet"})," crea un nuevo objeto de hoja de estilo (vac\xedo) para el ",(0,r.jsx)(s.em,{children:"wpDoc"})," designado."]}),"\n",(0,r.jsxs)(s.p,{children:["En el par\xe1metro ",(0,r.jsx)(s.em,{children:"wpDoc"}),", pase un documento 4D Write Pro."]}),"\n",(0,r.jsxs)(s.p,{children:["El par\xe1metro ",(0,r.jsx)(s.em,{children:"tipoHojaEstilo"})," le permite designar el tipo de hoja de estilo, es decir, la parte de ",(0,r.jsx)(s.em,{children:"wpDoc"})," que se ver\xe1 afectada por la hoja de estilo. Hay dos tipos disponibles:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"wk type character: aplica atributos de estilo a los caracteres."}),"\n",(0,r.jsx)(s.li,{children:"wk type paragraph: aplica atributos de estilo a los p\xe1rrafos."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Pase un nombre para la hoja de estilo en el par\xe1metro ",(0,r.jsx)(s.em,{children:"nomHojaEstilo"}),". El nombre de la hoja de estilo se almacena con el documento y facilita reutilizar o modificar el estilo. Tambi\xe9n se puede utilizar con los comandos ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/WritePro/commands/wp-get-style-sheet",children:"WP Get style sheet"})," y ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/WritePro/commands/wp-delete-style-sheet",children:"WP DELETE STYLE SHEET"}),". El nombre de la hoja de estilo debe cumplir las siguientes reglas:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"debe empezar por una letra"}),"\n",(0,r.jsx)(s.li,{children:'a continuaci\xf3n, puede contener caracteres alfanum\xe9ricos, espacios en blanco, caracteres "-" o caracteres unicode >= 128'}),"\n",(0,r.jsx)(s.li,{children:"debe ser \xfanico en el documento, independientemente de su tipo"}),"\n",(0,r.jsx)(s.li,{children:'no debe empezar por "section", que est\xe1 reservado'}),"\n",(0,r.jsx)(s.li,{children:'el car\xe1cter "_" se sustituye por un espacio y se eliminan los espacios finales.'}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Puede especificar los atributos de la hoja de estilo utilizando el comando ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," o la notaci\xf3n de objetos (consulte ",(0,r.jsx)(s.em,{children:"Atributos 4D Write Pro"}),"). Para ver la lista de atributos disponibles, consulte la secci\xf3n ",(0,r.jsx)(s.em,{children:"Style sheet attributes"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Notas"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Una hoja de estilo solo modifica la visualizaci\xf3n de un caracter o p\xe1rrafo, no c\xf3mo se almacena en el documento. Si se elimina una hoja de estilo, el texto volver\xe1 al estilo predeterminado."}),"\n",(0,r.jsxs)(s.li,{children:["Todo atributo de estilo no definido en la nueva hoja de estilo utilizar\xe1 autom\xe1ticamente el estilo Normal. Para m\xe1s informaci\xf3n, consulte ",(0,r.jsx)(s.em,{children:"Comandos hoja de estilo"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(s.p,{children:"El siguiente c\xf3digo crea y define una hoja de estilo de p\xe1rrafo:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0var $styleSheet : Object\n\xa0$styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")\n\xa0\n\xa0\xa0//define la configuraci\xf3n de la hoja de estilo\n\xa0WP SET ATTRIBUTES($styleSheet;wk font family;"Papyrus")\n\xa0WP SET ATTRIBUTES($styleSheet;wk font size;"48pt")\n\xa0WP SET ATTRIBUTES($styleSheet;wk text color;"red")\n\xa0WP SET ATTRIBUTES($styleSheet;wk text align;wk left)\n\xa0\n\xa0\xa0//Aplica la hoja de estilo al primer p\xe1rrafo\n\xa0var $Paragraphs : Collection\n\xa0$Paragraphs:=WP Get elements(wpArea;wk type paragraph)\n\xa0If($Paragraphs.length>0)\n\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($Paragraphs[0];wk style sheet;$styleSheet)\n\xa0End if\n'})}),"\n",(0,r.jsx)(s.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Acceder a contenidos de documentos por programaci\xf3n"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/WritePro/commands/wp-delete-style-sheet",children:"WP DELETE STYLE SHEET"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/WritePro/commands/wp-get-style-sheet",children:"WP Get style sheet"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/WritePro/commands/wp-get-style-sheets",children:"WP Get style sheets"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/WritePro/commands/wp-import-style-sheets",children:"WP IMPORT STYLE SHEETS"})]})]})}function h(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return i}});var t=n(667294);let r={},o=t.createContext(r);function i(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);