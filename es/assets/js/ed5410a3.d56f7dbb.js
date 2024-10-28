"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59876],{592374:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=o(474848),t=o(28453);const s={id:"spell-checking",title:"SPELL CHECKING",slug:"/commands/spell-checking",displayed_sidebar:"docs"},c=void 0,i={id:"commands-legacy/spell-checking",title:"SPELL CHECKING",description:"SPELL CHECKING",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/spell-checking.md",sourceDirName:"commands-legacy",slug:"/commands/spell-checking",permalink:"/docs/es/commands/spell-checking",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-checking.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"spell-checking",title:"SPELL CHECKING",slug:"/commands/spell-checking",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SPELL CHECK TEXT",permalink:"/docs/es/commands/spell-check-text"},next:{title:"SPELL Get current dictionary",permalink:"/docs/es/commands/spell-get-current-dictionary"}},r={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"SPELL CHECKING"})}),"\n\n\n\n\n\n\n\n",(0,a.jsx)(n.table,{children:(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Este comando no requiere par\xe1metros"}),(0,a.jsx)(n.th,{})]})})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"SPELL CHECKING"})," activa la revisi\xf3n ortogr\xe1fica del campo o variable que tiene el foco en el formulario en pantalla. El objeto verificado debe ser de tipo Alfa o Texto."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"}),' si desea activar el corrector ortogr\xe1fico haciendo clic en un bot\xf3n en el formulario, aseg\xfarese de que este bot\xf3n no tenga la propiedad "enfocable".']}),"\n",(0,a.jsxs)(n.p,{children:["La verificaci\xf3n ortogr\xe1fica comienza con la primera palabra del campo o variable. Si se detecta una palabra desconocida, aparece la caja de di\xe1logo de correcci\xf3n (para mayor informaci\xf3n, consulte el Manual de Dise\xf1o de 4D). 4D utiliza el diccionario actual (correspondiente al lenguaje de la aplicaci\xf3n) a menos que haya utilizado el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Atenci\xf3n:"})," el comando ",(0,a.jsx)(n.strong,{children:"SPELL CHECKING"})," afecta el texto que se est\xe1 introduciendo en el formulario, y no la fuente de datos asociada (campo o variable). Esto significa que si llama a este comando desde los eventos de formulario On Data Change u On Losing Focus (no recomendado), esto no afectar\xe1 el texto almacenado ya que 4D ya ha asignado el texto introducido a la fuente de datos en este punto. En este caso, es necesario asignar el resultado editado a la fuente de datos, usando el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/get-edited-text",children:"Get edited text"}),". Por ejemplo:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0If(Form event code=On Data Change)\n\xa0\xa0\xa0\xa0SPELL CHECKING\n\xa0\xa0\xa0\xa0theVariable:=Get edited text\n\xa0End if\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/spell-check-text",children:"SPELL CHECK TEXT"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>i});var a=o(296540);const t={},s=a.createContext(t);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);