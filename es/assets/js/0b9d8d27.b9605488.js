"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29104"],{698385:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>o,assets:()=>t,toc:()=>i,contentTitle:()=>d});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-new-bookmark","title":"WP NEW BOOKMARK","description":"WP NEW BOOKMARK ( objRango ; nombk )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-new-bookmark.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-new-bookmark","permalink":"/docs/es/20-R7/WritePro/commands/wp-new-bookmark","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new-bookmark.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-new-bookmark","title":"WP NEW BOOKMARK","slug":"/WritePro/commands/wp-new-bookmark","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP New","permalink":"/docs/es/20-R7/WritePro/commands/wp-new"},"next":{"title":"WP New footer","permalink":"/docs/es/20-R7/WritePro/commands/wp-new-footer"}}'),a=r("785893"),s=r("250065");let c={id:"wp-new-bookmark",title:"WP NEW BOOKMARK",slug:"/WritePro/commands/wp-new-bookmark",displayed_sidebar:"docs"},d=void 0,t={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WP NEW BOOKMARK"})," ( ",(0,a.jsx)(n.em,{children:"objRango"})," ; ",(0,a.jsx)(n.em,{children:"nombk"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objRango"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Rango o elemento"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"nombk"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nombre de marcador a crear"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"WP NEW BOOKMARK"})," crea un nuevo marcador llamado ",(0,a.jsx)(n.em,{children:"nombk"})," basado en el ",(0,a.jsx)(n.em,{children:"objRango"})," 4D Write Pro del documento padre."]}),"\n",(0,a.jsxs)(n.p,{children:["Los marcadores son referencias con nombres a rangos o elementos, que le permiten acceder y reutilizar partes espec\xedficas del documento, por ejemplo para plantillas. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,a.jsx)(n.em,{children:"Comandos Marcadores"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["En ",(0,a.jsx)(n.em,{children:"targetObj"}),", puede pasar:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"un rango, o"}),"\n",(0,a.jsx)(n.li,{children:"un elemento (cuerpo / array / l\xednea / imagen en l\xednea / p\xe1rrafo)"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota"}),": si pas\xf3 un elemento en ",(0,a.jsx)(n.em,{children:"objRango"})," , el marcador contendr\xe1 solo el elemento especificado."]}),"\n",(0,a.jsxs)(n.p,{children:["En ",(0,a.jsx)(n.em,{children:"nombk"}),", pase el nombre para el nuevo marcador. Un nombre de marcador debe ser compatible con los nombres HTML/CSS, es decir, que s\xf3lo puede contener caracteres alfanum\xe9ricos (caracteres no v\xe1lidos, tales como los caracteres de espacio, se eliminan de forma autom\xe1tica). Los nombres de los marcadores deben ser \xfanicos dentro del documento. Si un marcador con el mismo nombre ya existe en el documento, se sobrescribe."]}),"\n",(0,a.jsx)(n.p,{children:"Puede crear tantos marcadores como desee dentro del mismo documento. Varios marcadores pueden ser creados usando el mismo rango exacto. Una vez creado, un marcador se almacena autom\xe1ticamente en el documento de nivel superior y se guarda con el documento en s\xed."}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsx)(n.p,{children:"Usted quiere crear un nuevo marcador referenciando el texto seleccionado actualmente en el documento. Puede escribir:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $range : Object\n\xa0$range:=WP Selection range(*;"WPDocument")\n\xa0WP NEW BOOKMARK($range;"my_bookmark")\n'})}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsx)(n.p,{children:"Usted quiere cambiar el nombre de un marcador existente. Para ello, es necesario crear un nuevo marcador con el mismo rango y luego, eliminar el anterior:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $bookmarkOldName : Text\n\xa0var $bookmarkNewName : Text\n\xa0var $p : Integer\n\xa0var $wpRange : Object\n\xa0\n\xa0$bookmarkOldName:="MyBookmark"\n\xa0$bookmarkNewName:="MyNewBookmark"\n\xa0\n\xa0ARRAY TEXT($_bookmarks;0)\n\xa0WP GET BOOKMARKS(WParea;$_bookmarks)\n\xa0\n\xa0$p:=Find in array($_bookmarks;$bookmarkOldName)\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0$wpRange:=WP Get bookmark range(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP DELETE BOOKMARK(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP NEW BOOKMARK($wpRange;$bookmarkNewName)\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-bookmark-range",children:"WP Bookmark range"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-delete-bookmark",children:"WP DELETE BOOKMARK"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-get-bookmarks",children:"WP GET BOOKMARKS"})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return c}});var o=r(667294);let a={},s=o.createContext(a);function c(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);