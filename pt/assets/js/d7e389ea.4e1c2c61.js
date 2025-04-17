"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70043"],{642205:function(e,o,r){r.r(o),r.d(o,{default:()=>l,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>s});var t=JSON.parse('{"id":"commands-legacy/abort","title":"ABORT","description":"ABORT","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/abort.md","sourceDirName":"commands-legacy","slug":"/commands/abort","permalink":"/docs/pt/20-R8/commands/abort","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fabort.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"abort","title":"ABORT","slug":"/commands/abort","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Interruptions","permalink":"/docs/pt/20-R8/commands/theme/Interruptions"},"next":{"title":"ASSERT","permalink":"/docs/pt/20-R8/commands/assert"}}'),d=r("785893"),n=r("250065");let a={id:"abort",title:"ABORT",slug:"/commands/abort",displayed_sidebar:"docs"},s=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Nota hist\xf3rica",id:"nota-hist\xf3rica",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let o={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.p,{children:(0,d.jsx)(o.strong,{children:"ABORT"})}),"\n\n\n\n\n\n\n\n",(0,d.jsx)(o.table,{children:(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,d.jsx)(o.th,{})]})})}),"\n",(0,d.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(o.p,{children:["O comando ABORT \xe9 utilizado em um m\xe9todo de projeto de gest\xe3o de erros instalado pelo comando ",(0,d.jsx)(o.a,{href:"/docs/pt/20-R8/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,d.jsx)(o.p,{children:"Se n\xe3o instala um m\xe9todo de projeto de tratamento de ocorr\xeancias, quando ocorra um erro (por exemplo, um erro do banco de dados) 4D mostrar\xe1 sua caixa de di\xe1logo de erro padr\xe3o e depois interromper\xe1 a execu\xe7\xe3o de seu c\xf3digo. Se o c\xf3digo em execu\xe7\xe3o \xe9:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"Um m\xe9todo de objeto, m\xe9todo de formul\xe1rio (ou um m\xe9todo de projeto chamado por um m\xe9todo de formul\xe1rio ou de objeto), o controle retorna ao formul\xe1rio que seja mostrado atualmente."}),"\n",(0,d.jsx)(o.li,{children:"Um m\xe9todo chamado desde um menu, o controle volta \xe0 barra de menus ou formul\xe1rio que se mostra atualmente."}),"\n",(0,d.jsx)(o.li,{children:"O m\xe9todo mestre de um processo, ent\xe3o o processo termina."}),"\n",(0,d.jsx)(o.li,{children:"Um m\xe9todo chamado direta ou indiretamente por uma opera\xe7\xe3o de importa\xe7\xe3o ou exporta\xe7\xe3o, a opera\xe7\xe3o p\xe1ra. A mesma coisa para as pesquisas sequenciais ou ordena\xe7\xf5es."}),"\n",(0,d.jsx)(o.li,{children:"Etc."}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:"Se utiliza um m\xe9todo de projeto de tratamento de ocorr\xeancias, 4D n\xe3o mostra mais sua caixa de di\xe1logo de erros padr\xe3o e n\xe3o interrompe a execu\xe7\xe3o de seu c\xf3digo. Ao inv\xe9s disso, 4D chama a seu m\xe9todo de projeto de gest\xe3o de erros (que pode ver como um manejador de exce\xe7\xf5es), e reassume a execu\xe7\xe3o da linha de c\xf3digo seguinte no m\xe9todo que disparou o erro."}),"\n",(0,d.jsx)(o.p,{children:"H\xe1 erros que pode tratar por programa\xe7\xe3o; por exemplo, durante uma opera\xe7\xe3o de importa\xe7\xe3o, um erro de banco de dados que assinala um valor duplicado pode \u201Ccobrir\u201D o erro e seguir com a importa\xe7\xe3o. Entretanto, h\xe1 erros que n\xe3o podem ser processados e erros que n\xe3o deve \u201Ccobrir.\u201D Nestes casos, necessita parar a execu\xe7\xe3o chamando ABORT desde o m\xe9todo de projeto de gest\xe3o de erros."}),"\n",(0,d.jsx)(o.h2,{id:"nota-hist\xf3rica",children:"Nota hist\xf3rica"}),"\n",(0,d.jsx)(o.p,{children:"Apesar do comando ABORT est\xe1 destinado a ser utilizado apenas a partir de um m\xe9todo de projeto de gest\xe3o de erros, alguns membros da comunidade 4D tamb\xe9m o utilizam em outros m\xe9todos para interromper sua execu\xe7\xe3o. O fato de que funcione \xe9 apenas um efeito secund\xe1rio. N\xe3o recomendamos usar esse comando em m\xe9todos diferentes aos m\xe9todos de projeto de gest\xe3o de erros."}),"\n",(0,d.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.a,{href:"/docs/pt/20-R8/commands/on-err-call",children:"ON ERR CALL"})}),"\n",(0,d.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{}),(0,d.jsx)(o.th,{})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"N\xfamero do comando"}),(0,d.jsx)(o.td,{children:"156"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"Thread-seguro"}),(0,d.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function l(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(m,{...e})}):m(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return s},a:function(){return a}});var t=r(667294);let d={},n=t.createContext(d);function a(e){let o=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);