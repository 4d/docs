"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19599"],{118274:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>d,contentTitle:()=>r});var t=JSON.parse('{"id":"commands-legacy/spell-checking","title":"SPELL CHECKING","description":"SPELL CHECKING","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/spell-checking.md","sourceDirName":"commands-legacy","slug":"/commands/spell-checking","permalink":"/docs/es/commands/spell-checking","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-checking.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"spell-checking","title":"SPELL CHECKING","slug":"/commands/spell-checking","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SPELL CHECK TEXT","permalink":"/docs/es/commands/spell-check-text"},"next":{"title":"SPELL Get current dictionary","permalink":"/docs/es/commands/spell-get-current-dictionary"}}'),s=a("785893"),o=a("250065");let c={id:"spell-checking",title:"SPELL CHECKING",slug:"/commands/spell-checking",displayed_sidebar:"docs"},r=void 0,i={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"SPELL CHECKING"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Este comando no requiere par\xe1metros"}),(0,s.jsx)(n.th,{})]})})}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"SPELL CHECKING"})," activa la revisi\xf3n ortogr\xe1fica del campo o variable que tiene el foco en el formulario en pantalla. El objeto verificado debe ser de tipo Alfa o Texto."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"}),' si desea activar el corrector ortogr\xe1fico haciendo clic en un bot\xf3n en el formulario, aseg\xfarese de que este bot\xf3n no tenga la propiedad "enfocable".']}),"\n",(0,s.jsxs)(n.p,{children:["La verificaci\xf3n ortogr\xe1fica comienza con la primera palabra del campo o variable. Si se detecta una palabra desconocida, aparece la caja de di\xe1logo de correcci\xf3n (para mayor informaci\xf3n, consulte el Manual de Dise\xf1o de 4D). 4D utiliza el diccionario actual (correspondiente al lenguaje de la aplicaci\xf3n) a menos que haya utilizado el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Atenci\xf3n:"})," el comando ",(0,s.jsx)(n.strong,{children:"SPELL CHECKING"})," afecta el texto que se est\xe1 introduciendo en el formulario, y no la fuente de datos asociada (campo o variable). Esto significa que si llama a este comando desde los eventos de formulario On Data Change u On Losing Focus (no recomendado), esto no afectar\xe1 el texto almacenado ya que 4D ya ha asignado el texto introducido a la fuente de datos en este punto. En este caso, es necesario asignar el resultado editado a la fuente de datos, usando el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/get-edited-text",children:"Get edited text"}),". Por ejemplo:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If(Form event code=On Data Change)\n\xa0\xa0\xa0\xa0SPELL CHECKING\n\xa0\xa0\xa0\xa0theVariable:=Get edited text\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/spell-check-text",children:"SPELL CHECK TEXT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"})]}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"900"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return c}});var t=a(667294);let s={},o=t.createContext(s);function c(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);