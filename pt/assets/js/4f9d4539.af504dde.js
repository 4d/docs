"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95048"],{229845:function(e,a,o){o.r(a),o.d(a,{default:()=>u,frontMatter:()=>t,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"MSC/rollback","title":"P\xe1gina Retrocesso","description":"A p\xe1gina Rollback \xe9 utilizada para acessar \xe0 fun\xe7\xe3o de rollback entre as opera\xe7\xf5es executadas no arquivo de dados. Assemelha-se a uma fun\xe7\xe3o de reverter aplicada a v\xe1rios n\xedveis. \xc9 particularmente \xfatil quando um registo foi eliminado por engano numa base de dados.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/MSC/rollback.md","sourceDirName":"MSC","slug":"/MSC/rollback","permalink":"/docs/pt/MSC/rollback","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frollback.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"rollback","title":"P\xe1gina Retrocesso","sidebar_label":"P\xe1gina Retrocesso"},"sidebar":"docs","previous":{"title":"P\xe1gina compactado","permalink":"/docs/pt/MSC/compact"},"next":{"title":"P\xe1gina Restaura\xe7\xe3o","permalink":"/docs/pt/MSC/restore"}}'),s=o("785893"),r=o("250065");let t={id:"rollback",title:"P\xe1gina Retrocesso",sidebar_label:"P\xe1gina Retrocesso"},i=void 0,d={},c=[];function l(e){let a={a:"a",blockquote:"blockquote",img:"img",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"A p\xe1gina Rollback \xe9 utilizada para acessar \xe0 fun\xe7\xe3o de rollback entre as opera\xe7\xf5es executadas no arquivo de dados. Assemelha-se a uma fun\xe7\xe3o de reverter aplicada a v\xe1rios n\xedveis. \xc9 particularmente \xfatil quando um registo foi eliminado por engano numa base de dados."}),"\n",(0,s.jsx)(a.p,{children:"Esta fun\xe7\xe3o s\xf3 est\xe1 dispon\xedvel quando o banco de dados funcionar com um arquivo de hist\xf3rico de dados."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:o(932518).Z+"",width:"882",height:"666"})}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:["If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in the ",(0,s.jsx)(a.strong,{children:"Values"})," column and a dialog requesting the passphrase or the data key is displayed if you click the ",(0,s.jsx)(a.strong,{children:"Rollback"})," button."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["El contenido y el funcionamiento de la lista de operaciones es el mismo que el de la ventana ",(0,s.jsx)(a.a,{href:"/docs/pt/MSC/analysis",children:"An\xe1lisis de actividades"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"Para executar uma revers\xe3o entre as opera\xe7\xf5es, selecionar a linha ap\xf3s a qual todas as opera\xe7\xf5es devem ser canceladas. A opera\xe7\xe3o da linha seleccionada ser\xe1 a \xfaltima a ser mantida. Se, por exemplo, desejar anular uma elimina\xe7\xe3o, seleccione a opera\xe7\xe3o situada imediatamente antes da mesma. A opera\xe7\xe3o de elimina\xe7\xe3o, assim como todas as opera\xe7\xf5es subsequentes, ser\xe3o anuladas."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:o(90354).Z+"",width:"1008",height:"366"})}),"\n",(0,s.jsxs)(a.p,{children:["A continuaci\xf3n, haga clic en el bot\xf3n ",(0,s.jsx)(a.strong,{children:"Retroceso"}),". 4D pede-lhe para confirmar a opera\xe7\xe3o. Si hace clic en ",(0,s.jsx)(a.strong,{children:"Aceptar"}),", los datos se restauran al estado exacto en el que se encontraban en el momento de la acci\xf3n seleccionada."]}),"\n",(0,s.jsx)(a.p,{children:"Utilize o menu que se encontra na parte inferior da janela para selecionar um arquivo de registo de dados que vai ser utilizado quando aplicar a fun\xe7\xe3o de revers\xe3o a uma base de dados restaurada a partir de um arquivo. Neste caso, \xe9 necess\xe1rio especificar o arquivo de registo de dados correspondente ao arquivado."}),"\n",(0,s.jsxs)(a.p,{children:["As\xed es como funciona la funci\xf3n de retroceso: cuando el usuario hace clic en el bot\xf3n ",(0,s.jsx)(a.strong,{children:"Retroceso"}),", 4D cierra la base de datos actual y restaura la \xfaltima copia de seguridad de los datos de la base. A base de dados restaurada \xe9 ent\xe3o aberta e 4D integra as opera\xe7\xf5es do arquivo de registo de dados at\xe9 \xe0 opera\xe7\xe3o seleccionada. Se a base de dados ainda n\xe3o foi guardada, 4D come\xe7a com um arquivo de dados em branco."]})]})}function u(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},932518:function(e,a,o){o.d(a,{Z:function(){return n}});let n=o.p+"assets/images/MSC_rollback1-b21c02b97be368379d88a7bdb43633bc.png"},90354:function(e,a,o){o.d(a,{Z:function(){return n}});let n=o.p+"assets/images/MSC_rollback2-95de20fc9ee798b7396060a9a7ec5b1b.png"},250065:function(e,a,o){o.d(a,{Z:function(){return i},a:function(){return t}});var n=o(667294);let s={},r=n.createContext(s);function t(e){let a=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);