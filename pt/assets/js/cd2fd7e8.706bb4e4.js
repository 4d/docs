"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3318],{953650:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>n,metadata:()=>t,toc:()=>c});var s=o(474848),r=o(28453);const n={id:"rollback",title:"P\xe1gina Retrocesso",sidebar_label:"P\xe1gina Retrocesso"},d=void 0,t={id:"MSC/rollback",title:"P\xe1gina Retrocesso",description:"A p\xe1gina Rollback \xe9 utilizada para acessar \xe0 fun\xe7\xe3o de rollback entre as opera\xe7\xf5es executadas no arquivo de dados. Assemelha-se a uma fun\xe7\xe3o de reverter aplicada a v\xe1rios n\xedveis. \xc9 particularmente \xfatil quando um registo foi eliminado por engano numa base de dados.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/MSC/rollback.md",sourceDirName:"MSC",slug:"/MSC/rollback",permalink:"/docs/pt/19/MSC/rollback",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frollback.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"rollback",title:"P\xe1gina Retrocesso",sidebar_label:"P\xe1gina Retrocesso"},sidebar:"docs",previous:{title:"P\xe1gina compactado",permalink:"/docs/pt/19/MSC/compact"},next:{title:"P\xe1gina Restaura\xe7\xe3o",permalink:"/docs/pt/19/MSC/restore"}},i={},c=[];function l(e){const a={a:"a",blockquote:"blockquote",img:"img",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"A p\xe1gina Rollback \xe9 utilizada para acessar \xe0 fun\xe7\xe3o de rollback entre as opera\xe7\xf5es executadas no arquivo de dados. Assemelha-se a uma fun\xe7\xe3o de reverter aplicada a v\xe1rios n\xedveis. \xc9 particularmente \xfatil quando um registo foi eliminado por engano numa base de dados."}),"\n",(0,s.jsx)(a.p,{children:"Esta fun\xe7\xe3o s\xf3 est\xe1 dispon\xedvel quando o banco de dados funcionar com um arquivo de hist\xf3rico de dados."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:o(790034).A+"",width:"882",height:"666"})}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:["Se a base de dados estiver criptografada e n\xe3o tiver sido fornecida uma chave de dados v\xe1lida correspondente ao arquivo de hist\xf3rico aberto, os valores encriptados n\xe3o s\xe3o apresentados na coluna ",(0,s.jsx)(a.strong,{children:"Values"})," e \xe9 apresentada uma caixa de di\xe1logo a pedir a frase-chave ou a chave de criptografia se clicar no bot\xe3o ",(0,s.jsx)(a.strong,{children:"Rollback"})," ."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["O conte\xfado e o funcionamento da lista de opera\xe7\xf5es s\xe3o os mesmos que para a janela ",(0,s.jsx)(a.a,{href:"/docs/pt/19/MSC/analysis",children:"An\xe1lise de actividade"})," ."]}),"\n",(0,s.jsx)(a.p,{children:"Para executar uma revers\xe3o entre as opera\xe7\xf5es, selecionar a linha ap\xf3s a qual todas as opera\xe7\xf5es devem ser canceladas. A opera\xe7\xe3o da linha seleccionada ser\xe1 a \xfaltima a ser mantida. Se, por exemplo, desejar anular uma elimina\xe7\xe3o, seleccione a opera\xe7\xe3o situada imediatamente antes da mesma. A opera\xe7\xe3o de elimina\xe7\xe3o, assim como todas as opera\xe7\xf5es subsequentes, ser\xe3o anuladas."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:o(880745).A+"",width:"1008",height:"366"})}),"\n",(0,s.jsxs)(a.p,{children:["Em seguida, clique no bot\xe3o ",(0,s.jsx)(a.strong,{children:"Rollback"})," . 4D pede-lhe para confirmar a opera\xe7\xe3o. Se clicar em ",(0,s.jsx)(a.strong,{children:"OK"}),", os dados s\xe3o restaurados para o estado exato em que se encontravam no momento da a\xe7\xe3o selecionada."]}),"\n",(0,s.jsx)(a.p,{children:"Utilize o menu que se encontra na parte inferior da janela para selecionar um arquivo de registo de dados que vai ser utilizado quando aplicar a fun\xe7\xe3o de revers\xe3o a uma base de dados restaurada a partir de um arquivo. Neste caso, \xe9 necess\xe1rio especificar o arquivo de registo de dados correspondente ao arquivado."}),"\n",(0,s.jsxs)(a.p,{children:["Aqui est\xe1 como a fun\xe7\xe3o de rollback funciona: quando o usu\xe1rio clica no bot\xe3o ",(0,s.jsx)(a.strong,{children:"Rollback"})," , 4D fecha o banco de dados atual e restaura o \xfaltimo backup dos dados do banco de dados. A base de dados restaurada \xe9 ent\xe3o aberta e 4D integra as opera\xe7\xf5es do arquivo de registo de dados at\xe9 \xe0 opera\xe7\xe3o seleccionada. Se a base de dados ainda n\xe3o foi guardada, 4D come\xe7a com um arquivo de dados em branco."]})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},790034:(e,a,o)=>{o.d(a,{A:()=>s});const s=o.p+"assets/images/MSC_rollback1-b21c02b97be368379d88a7bdb43633bc.png"},880745:(e,a,o)=>{o.d(a,{A:()=>s});const s=o.p+"assets/images/MSC_rollback2-95de20fc9ee798b7396060a9a7ec5b1b.png"},28453:(e,a,o)=>{o.d(a,{R:()=>d,x:()=>t});var s=o(296540);const r={},n=s.createContext(r);function d(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);