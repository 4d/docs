"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26856"],{533493:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>i,toc:()=>a,frontMatter:()=>l});var r=JSON.parse('{"id":"ViewPro/commands/vp-add-stylesheet","title":"VP ADD STYLESHEET","description":"VP ADD STYLESHEET ( vpAreaName Text ; styleObj Integer } )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-add-stylesheet.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-add-stylesheet","permalink":"/docs/es/20-R6/ViewPro/commands/vp-add-stylesheet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-stylesheet.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-add-stylesheet","title":"VP ADD STYLESHEET"},"sidebar":"docs","previous":{"title":"VP ADD SPAN","permalink":"/docs/es/20-R6/ViewPro/commands/vp-add-span"},"next":{"title":"VP All","permalink":"/docs/es/20-R6/ViewPro/commands/vp-all"}}'),t=s("785893"),o=s("250065");let l={id:"vp-add-stylesheet",title:"VP ADD STYLESHEET"},d=void 0,i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP ADD STYLESHEET"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,t.jsx)(n.em,{children:"styleName"})," : Text ; ",(0,t.jsx)(n.em,{children:"styleObj"})," : Object { ; ",(0,t.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"styleName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nombre del estilo"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"styleObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objeto definiendo las propiedades del atributo"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheet"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"\xcdndice de la hoja (hoja actual si se omite)"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.code,{children:"VP ADD STYLESHEET"})," crea o modifica la hoja de estilo ",(0,t.jsx)(n.em,{children:"styleName"})," bas\xe1ndose en la combinaci\xf3n de las propiedades especificadas en ",(0,t.jsx)(n.em,{children:"styleObj"})," en el documento abierto. Si ya existe una hoja de estilo con el mismo nombre e \xedndice en el documento, este comando la sobrescribir\xe1 con los nuevos valores."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Las hojas de estilo creadas por este comando se guardan con el documento."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro ",(0,t.jsx)(n.em,{children:"styleName"})," permite asignar un nombre a la hoja de estilo. Si el nombre ya se utiliza dentro del mismo alcance, la nueva hoja de estilo sustituye a la existente. Tenga en cuenta que puede utilizar el mismo nombre para diferentes alcances (ver m\xe1s adelante)."]}),"\n",(0,t.jsxs)(n.p,{children:["Dentro del ",(0,t.jsx)(n.em,{children:"styleObj"}),", designe la configuraci\xf3n de la hoja de estilo (por ejemplo, fuente, decoraci\xf3n del texto, alineaci\xf3n, bordes, etc.). Para ver la lista completa de propiedades de estilo, consulte ",(0,t.jsx)(n.a,{href:"configuring.md#style-object-properties",children:"../Propiedades de los objetos de estilo"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Puede designar d\xf3nde definir la hoja de estilo en el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"sheet"})," utilizando el \xedndice de la hoja (la indexaci\xf3n comienza en 0) o con las siguientes constantes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Si una hoja de estilo ",(0,t.jsx)(n.em,{children:"styleName"})," est\xe1 definida al nivel del libro de trabajo y de la hoja, el nivel de hoja tiene prioridad sobre el nivel del libro de trabajo cuando se define la hoja de estilo."]}),"\n",(0,t.jsxs)(n.p,{children:["Para aplicar la hoja de estilo, utilice los comandos ",(0,t.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})," o ",(0,t.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"El c\xf3digo siguiente:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$styles:=New object\n$styles.backColor:="green"\n\n//Line Border Object\n$borders:=New object("color";"green";"style";vk line style medium dash dot)\n \n$styles.borderBottom:=$borders\n$styles.borderLeft:=$borders\n$styles.borderRight:=$borders\n$styles.borderTop:=$borders\n \nVP ADD STYLESHEET("ViewProArea";"GreenDashDotStyle";$styles)\n\n//Para aplicar el estiloVP SET CELL STYLE(VP Cells("ViewProArea";1;1;2;2);New object("name";"GreenDashDotStyle"))\n'})}),"\n",(0,t.jsxs)(n.p,{children:["crear\xe1 y aplicar\xe1 el siguiente objeto estilo llamado ",(0,t.jsx)(n.em,{children:"GreenDashDotStyle"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"{\n backColor:green,\n borderBottom:{color:green,style:10},\n borderLeft:{color:green,style:10},\n borderRight:{color:green,style:10},\n borderTop:{color:green,style:10}\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/configuring#style-objects--style-sheets",children:"Objetos de Estilo y Hojas de Estilo 4D View Pro"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-get-stylesheets",children:"VP Get stylesheet"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-get-stylesheet",children:"VP Get stylesheets"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-remove-stylesheet",children:"VP REMOVE STYLESHEET"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var r=s(667294);let t={},o=r.createContext(t);function l(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);