"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63451"],{202254:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>t,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-print","title":"WP PRINT","description":"WP PRINT ( wpDoc {; opcImpr} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-print.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-print","permalink":"/docs/es/20-R7/WritePro/commands/wp-print","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-print.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-print","title":"WP PRINT","slug":"/WritePro/commands/wp-print","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Picture range","permalink":"/docs/es/20-R7/WritePro/commands/wp-picture-range"},"next":{"title":"WP RESET ATTRIBUTES","permalink":"/docs/es/20-R7/WritePro/commands/wp-reset-attributes"}}'),i=r("785893"),o=r("250065");let t={id:"wp-print",title:"WP PRINT",slug:"/WritePro/commands/wp-print",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP PRINT"})," ( ",(0,i.jsx)(n.em,{children:"wpDoc"})," {; ",(0,i.jsx)(n.em,{children:"opcImpr"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wpDoc"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Documento 4D Write Pro"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"opcImpr"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Opciones de impresi\xf3n para el documento 4D Write Pro"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"WP PRINT"})," lanza una tarea de impresi\xf3n para el documento 4D Write Pro especificado en ",(0,i.jsx)(n.em,{children:"wpDoc"}),", o agrega el documento al trabajo de impresi\xf3n actual si se llama entre los comandos ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/open-printing-job",children:"OPEN PRINTING JOB"})," y ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/close-printing-job",children:"CLOSE PRINTING JOB"}),". ",(0,i.jsx)(n.strong,{children:"WP PRINT"})," utiliza la configuraci\xf3n de impresi\xf3n definida por los comandos 4D ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/print-settings",children:"PRINT SETTINGS"})," o ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-print-option",children:"SET PRINT OPTION"}),", excepto para los m\xe1rgenes de las p\xe1ginas que siempre se basan en la configuraci\xf3n de la p\xe1gina del documento 4D Write Pro. ",(0,i.jsx)(n.strong,{children:"WP PRINT"})," utiliza las opciones actuales de configuraci\xf3n de p\xe1gina (como el tama\xf1o y orientaci\xf3n de p\xe1gina), o los del documento si ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-use-page-setup",children:"WP USE PAGE SETUP"})," se llam\xf3 anteriormente."]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"opcImpr"}),' se puede utilizar para establecer la vista WYSIWYG HTML para las salidas de impresi\xf3n, as\xed como tambi\xe9n para los c\xe1lculos de f\xf3rmulas. Puede pasar una de las siguientes constantes del tema "4D Write Pro":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk 4D Write Pro layout"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Formato 4D Write Pro est\xe1ndar, puede incluir algunos atributos de estilo espec\xedficos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk do not recompute expressions"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Especifica que todas las extpresiones en el documento no se vuelvan a calcular para imprimir o congelar."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk html wysiwyg"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"En este formato, los atributos avanzados 4D Write Pro que no son compatibles con todos los navegadores se eliminan"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk recompute expressions"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Indica que todas las expresiones en el documento se vuelvan a calcular antes de imprimir o congelar. (valor por defecto)"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Si se omite ",(0,i.jsx)(n.em,{children:"opcImpr"}),", por defecto se utiliza el formato 4D Write Pro y las expresiones se vuelven a calcular (si es que hay alguna)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," cuando se imprime con ",(0,i.jsx)(n.strong,{children:"WP PRINT"}),", los documentos 4D Write Pro siempre se imprimen como en modo de vista P\xe1gina, sea cual sea la configuraci\xf3n de la propiedad Vista para el \xe1rea (ver ",(0,i.jsx)(n.em,{children:"Configurar propiedades Vista"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota de compatibilidad"}),": la capa de impresi\xf3n heredada basada en GDI (que puede definirse utilizando el comando ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-print-option",children:"SET PRINT OPTION"}),") ",(0,i.jsx)(n.strong,{children:"es obsoleta"})," y no debe utilizarse con ",(0,i.jsx)(n.strong,{children:"WP PRINT"}),", ya que puede provocar artefactos de renderizado. Se recomienda utilizar \xfanicamente la capa de impresi\xf3n por defecto con este comando."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Usted desea imprimir un documento 4D Write Pro en formato est\xe1ndar o wysiwyg HTML en funci\xf3n del valor de una variable:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// impresi\xf3n en modo wysiwyg HTML o 4D Write Pro est\xe1ndar\n\xa0If(rb_htmlwysiwyg=1)\n\xa0\xa0\xa0\xa0WP PRINT(writeProDoc;wk html wysiwyg)\n\xa0Else\n\xa0\xa0\xa0\xa0WP PRINT(writeProDoc;wk 4D Write Pro layout)\n\xa0End if\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-get-position",children:"WP Get position"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-use-page-setup",children:"WP USE PAGE SETUP"})]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return t}});var s=r(667294);let i={},o=s.createContext(i);function t(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);