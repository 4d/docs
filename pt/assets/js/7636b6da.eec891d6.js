/*! For license information please see 7636b6da.eec891d6.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58382],{514018:(a,o,e)=>{e.r(o),e.d(o,{assets:()=>n,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var s=e(474848),d=e(28453);const r={id:"compact",title:"P\xe1gina compactado",sidebar_label:"P\xe1gina compactado"},i=void 0,t={id:"MSC/compact",title:"P\xe1gina compactado",description:"Esta p\xe1gina \xe9 utilizada para aceder \xe0s fun\xe7\xf5es de compacta\xe7\xe3o de arquivos de dados.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/MSC/compact.md",sourceDirName:"MSC",slug:"/MSC/compact",permalink:"/docs/pt/18/MSC/compact",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fcompact.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"compact",title:"P\xe1gina compactado",sidebar_label:"P\xe1gina compactado"},sidebar:"docs",previous:{title:"P\xe1gina de Backup",permalink:"/docs/pt/18/MSC/backup"},next:{title:"P\xe1gina Retrocesso",permalink:"/docs/pt/18/MSC/rollback"}},n={},c=[{value:"Porqu\xea compactar seus arquivos?",id:"Porqu\xea-compactar-seus-arquivos",level:2},{value:"Compacta\xe7\xe3o standard",id:"Compacta\xe7\xe3o-standard",level:2},{value:"Abrir arquivo de registo",id:"Abrir-arquivo-de-registo",level:2},{value:"Modo avan\xe7ado",id:"Modo-avan\xe7ado",level:2},{value:"Compacta\xe7\xe3o de registros e \xedndices",id:"Compacta\xe7\xe3o-de-registros-e-\xedndices",level:3},{value:"For\xe7ar a atualiza\xe7\xe3o dos registos",id:"For\xe7ar-a-atualiza\xe7\xe3o-dos-registos",level:3},{value:"Compactar a tabela de endere\xe7os",id:"Compactar-a-tabela-de-endere\xe7os",level:3}];function m(a){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"Esta p\xe1gina \xe9 utilizada para aceder \xe0s fun\xe7\xf5es de compacta\xe7\xe3o de arquivos de dados."}),"\n",(0,s.jsx)(o.h2,{id:"Porqu\xea-compactar-seus-arquivos",children:"Porqu\xea compactar seus arquivos?"}),"\n",(0,s.jsx)(o.p,{children:"A compacta\xe7\xe3o de ficheiros responde a dois tipos de necessidades:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Redu\xe7\xe3o do tamanho e otimiza\xe7\xe3o dos arquivos"}),': os arquivos podem conter espa\xe7os n\xe3o utilizados ("ocos"). De fato, quando se eliminam registos, o espa\xe7o que estes ocupavam anteriormente no arquivo fica vazio. 4D reutiliza esses espa\xe7os vazios sempre que poss\xedvel, mas como o tamanho dos dados \xe9 vari\xe1vel, elimina\xe7\xf5es ou modifica\xe7\xf5es sucessivas inevitavelmente geram espa\xe7o inutiliz\xe1vel para o programa. O mesmo acontece quando uma grande quantidade de dados acaba de ser eliminada: os espa\xe7os vazios ficam por atribuir no arquivo. A rela\xe7\xe3o entre o tamanho do arquivo de dados e o espa\xe7o efetivamente utilizado para os dados \xe9 a taxa de ocupa\xe7\xe3o dos dados. Uma taxa demasiado baixa pode levar, para al\xe9m de um desperd\xedcio de espa\xe7o, \xe0 deteriora\xe7\xe3o do desempenho da base de dados. A compacta\xe7\xe3o pode ser utilizada para reorganizar e otimizar o armazenamento dos dados, de modo a eliminar os "buracos". A \xe1rea "Informa\xe7\xe3o" resume os dados relativos \xe0 fragmenta\xe7\xe3o do arquivo e sugere opera\xe7\xf5es a realizar. O separador ',(0,s.jsx)(o.a,{href:"/docs/pt/18/MSC/information#data",children:"Data"}),' na p\xe1gina "Information" (Informa\xe7\xf5es) do MSC indica a fragmenta\xe7\xe3o do arquivo de dados atual.']}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Atualiza\xe7\xe3o completa dos dados"})," aplicando a formata\xe7\xe3o atual definida no arquivo de estrutura. Isto \xe9 \xfatil quando os dados da mesma tabela foram armazenados em formatos diferentes, por exemplo, ap\xf3s uma altera\xe7\xe3o na estrutura da base de dados."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["A compacta\xe7\xe3o s\xf3 est\xe1 dispon\xedvel no modo de manuten\xe7\xe3o. If you attempt to carry out this operation in standard mode, a warning dialog box will inform you that the database will be closed and restarted in maintenance mode. You can compact a data file that is not opened by the database (see ",(0,s.jsx)(o.a,{href:"#compact-records-and-indexes",children:"Compact records and indexes"})," below)."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"Compacta\xe7\xe3o-standard",children:"Compacta\xe7\xe3o standard"}),"\n",(0,s.jsx)(o.p,{children:"Para iniciar diretamente a compacta\xe7\xe3o do arquivo de dados, clique no bot\xe3o de compacta\xe7\xe3o na janela MSC."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:e(832073).A+"",width:"158",height:"88"})}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"J\xe1 que a compacta\xe7\xe3o envolve a duplica\xe7\xe3o do arquivo original, o bot\xe3o \xe9 desativado quando n\xe3o existir espa\xe7o suficiente dispon\xedvel no disco que cont\xe9m o arquivo."}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Esta opera\xe7\xe3o compacta o arquivo principal, bem como quaisquer arquivos de \xedndice. 4D copia os arquivos originais e os coloca em uma pasta chamada ",(0,s.jsx)(o.strong,{children:"Replaced Files (Compacting)"}),', que \xe9 criada ao lado do arquivo original. Se tiver efetuado v\xe1rias opera\xe7\xf5es de compacta\xe7\xe3o, \xe9 criada uma nova pasta de cada vez. Ser\xe1 denominado "arquivos substitu\xeddos (compacta\xe7\xe3o)_1", "arquivos substitu\xeddos (compacta\xe7\xe3o)_2", e assim por diante. Pode modificar a pasta onde os arquivos originais s\xe3o guardados utilizando o modo avan\xe7ado.']}),"\n",(0,s.jsx)(o.p,{children:"Quando a opera\xe7\xe3o estiver conclu\xedda, os arquivos compactados substituem automaticamente os arquivos originais. The database is immediately operational without any further manipulation."}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Quando a base de dados est\xe1 encriptada, a compacta\xe7\xe3o inclui passos de desencripta\xe7\xe3o e encripta\xe7\xe3o e, por isso, requer a chave de encripta\xe7\xe3o de dados atual. Se ainda n\xe3o tiver sido fornecida uma chave de dados v\xe1lida, \xe9 apresentada uma caixa de di\xe1logo que pede a frase-chave ou a chave de dados."}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Aviso:"})," Cada opera\xe7\xe3o de compacta\xe7\xe3o envolve a duplica\xe7\xe3o do arquivo original, o que aumenta o tamanho da pasta da aplica\xe7\xe3o. \xc9 importante ter isto em conta (especialmente em macOS onde as aplica\xe7\xf5es 4D aparecem como pacotes) para que o tamanho da aplica\xe7\xe3o n\xe3o aumente excessivamente. A remo\xe7\xe3o manual das c\xf3pias do arquivo original dentro do pacote pode ser \xfatil para manter o tamanho do pacote reduzido."]}),"\n",(0,s.jsx)(o.h2,{id:"Abrir-arquivo-de-registo",children:"Abrir arquivo de registo"}),"\n",(0,s.jsxs)(o.p,{children:["Depois que a compacta\xe7\xe3o \xe9 completada, 4D gera um arquivo de log na pasta Logs da base de dados. Este arquivo permite visualizar todas as opera\xe7\xf5es efectuadas. It is created in XML format and named:  ",(0,s.jsx)(o.em,{children:"DatabaseName**_Compact_Log_yyyy-mm-dd hh-mm-ss.xml"}),'" where:']}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.em,{children:"DatabaseName"}),' is the name of the project file without any extension, for example "Invoices",']}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.em,{children:"yyyy-mm-dd hh-mm-ss"}),' \xe9 o carimbo de data/hora do arquivo, com base na hora do sistema local quando a opera\xe7\xe3o de manuten\xe7\xe3o foi iniciada, por exemplo "2019-02-11 15-20-45".']}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Quando clica no bot\xe3o ",(0,s.jsx)(o.strong,{children:"Abrir arquivo de registo"})," , 4D mostra o arquivo de registo mais recente no navegador predefinido da m\xe1quina."]}),"\n",(0,s.jsx)(o.h2,{id:"Modo-avan\xe7ado",children:"Modo avan\xe7ado"}),"\n",(0,s.jsxs)(o.p,{children:["A p\xe1gina Compactar cont\xe9m um bot\xe3o ",(0,s.jsx)(o.strong,{children:"Advanced>"})," , que pode ser utilizado para acessar uma p\xe1gina de op\xe7\xf5es para compactar o arquivo de dados."]}),"\n",(0,s.jsx)(o.h3,{id:"Compacta\xe7\xe3o-de-registros-e-\xedndices",children:"Compacta\xe7\xe3o de registros e \xedndices"}),"\n",(0,s.jsxs)(o.p,{children:["A \xe1rea ",(0,s.jsx)(o.strong,{children:"Compact records and indexes"})," apresenta o nome do caminho do arquivo de dados atual, bem como um bot\xe3o ",(0,s.jsx)(o.strong,{children:"[...]"})," que pode ser utilizado para especificar outro arquivo de dados. Quando se clica neste bot\xe3o, \xe9 apresentada uma caixa de di\xe1logo padr\xe3o Abrir documento para que se possa designar o arquivo de dados a compactar. \xc9 necess\xe1rio selecionar um arquivo de dados que seja compat\xedvel com o arquivo de estrutura aberta. Uma vez validada esta caixa de di\xe1logo, o nome do caminho do arquivo a compactar \xe9 indicado na janela."]}),"\n",(0,s.jsxs)(o.p,{children:["O segundo bot\xe3o ",(0,s.jsx)(o.strong,{children:"[...]"})," pode ser utilizado para especificar outra localiza\xe7\xe3o para os arquivos originais a serem guardados antes da opera\xe7\xe3o de compacta\xe7\xe3o. Esta op\xe7\xe3o pode ser utilizada mais particularmente para compactar ficheiros volumosos enquanto utiliza discos diferentes."]}),"\n",(0,s.jsx)(o.h3,{id:"For\xe7ar-a-atualiza\xe7\xe3o-dos-registos",children:"For\xe7ar a atualiza\xe7\xe3o dos registos"}),"\n",(0,s.jsx)(o.p,{children:"Quando esta op\xe7\xe3o estiver marcada, 4D reescreve cada registo para cada tabela durante a opera\xe7\xe3o de compacta\xe7\xe3o, de acordo com a sua descri\xe7\xe3o na estrutura. Se esta op\xe7\xe3o n\xe3o estiver marcada, 4D apenas reorganiza o armazenamento de dados no disco. Esta op\xe7\xe3o \xe9 \xfatil nos seguintes casos:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:"Quando os tipos de campo s\xe3o alterados na estrutura da aplica\xe7\xe3o depois de os dados terem sido introduzidos. Por exemplo, pode ter alterado um campo Longint para um tipo Real. 4D at\xe9 permite mudan\xe7as entre dois tipos muito diferentes (com riscos de perda de dados), por exemplo, um campo Real pode ser mudado para Texto e vice-versa. Neste caso, 4D n\xe3o converte dados j\xe1 introduzidos retroativamente; os dados s\xe3o convertidos apenas quando os registos s\xe3o carregados e depois guardados. Esta op\xe7\xe3o for\xe7a a convers\xe3o de todos os dados."}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:"Quando uma op\xe7\xe3o de armazenamento externo para dados de Texto, Imagem ou BLOB tiver sido alterada ap\xf3s a introdu\xe7\xe3o dos dados. Isto pode acontecer quando as bases de dados s\xe3o convertidas a partir de uma vers\xe3o anterior \xe0 v13. Como \xe9 o caso da redigita\xe7\xe3o descrita acima, 4D n\xe3o converte dados j\xe1 inseridos retroativamente. Para isso, \xe9 poss\xedvel for\xe7ar a atualiza\xe7\xe3o dos registros para aplicar o novo modo de armazenamento aos registros que j\xe1 foram entrados."}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:"Quando as tabelas ou campos foram eliminados. Neste caso, a compacta\xe7\xe3o com atualiza\xe7\xe3o de registos recupera o espa\xe7o destes dados removidos, reduzindo assim o tamanho do arquivo."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Todos os \xedndices s\xe3o atualizados quando esta op\xe7\xe3o \xe9 selecionada."}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"Compactar-a-tabela-de-endere\xe7os",children:"Compactar a tabela de endere\xe7os"}),"\n",(0,s.jsx)(o.p,{children:"(op\xe7\xe3o apenas ativa quando a op\xe7\xe3o anterior est\xe1 marcada)"}),"\n",(0,s.jsx)(o.p,{children:"Esta op\xe7\xe3o reconstr\xf3i completamente a tabela de endere\xe7os para os registos durante a compacta\xe7\xe3o. Isto optimiza o tamanho da tabela de endere\xe7os e \xe9 utilizado principalmente para bases de dados onde foram criados e depois eliminados grandes volumes de dados. Noutros casos, a otimiza\xe7\xe3o n\xe3o \xe9 um fator decisivo."}),"\n",(0,s.jsxs)(o.p,{children:["Note que esta op\xe7\xe3o atrasa substancialmente a compacta\xe7\xe3o e invalida quaisquer conjuntos guardados com o comando ",(0,s.jsx)(o.code,{children:"SAVE SET"})," . Al\xe9m disso, recomendamos vivamente a elimina\xe7\xe3o dos conjuntos guardados neste caso, porque a sua utiliza\xe7\xe3o pode levar a selec\xe7\xf5es de dados incorrectos."]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"A compacta\xe7\xe3o tem em conta os registos das tabelas que foram colocadas no Lixo. Se houver um grande n\xfamero de registos no Lixo, este pode ser um fator adicional que pode tornar a opera\xe7\xe3o mais lenta."}),"\n",(0,s.jsx)(o.li,{children:"A utiliza\xe7\xe3o desta op\xe7\xe3o torna a tabela de endere\xe7os e, consequentemente, a base de dados, incompat\xedvel com o arquivo de di\xe1rio atual (se existir). It will be saved automatically and a new journal file will have to be created the next time the database is launched."}),"\n",(0,s.jsxs)(o.li,{children:["Pode decidir se a tabela de endere\xe7os precisa de ser compactada, comparando o n\xfamero total de registos e o tamanho da tabela de endere\xe7os na p\xe1gina ",(0,s.jsx)(o.a,{href:"/docs/pt/18/MSC/information",children:"Information"})," do MSC."]}),"\n"]}),"\n"]})]})}function l(a={}){const{wrapper:o}={...(0,d.R)(),...a.components};return o?(0,s.jsx)(o,{...a,children:(0,s.jsx)(m,{...a})}):m(a)}},221020:(a,o,e)=>{var s=e(296540),d=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,t=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function c(a,o,e){var s,r={},c=null,m=null;for(s in void 0!==e&&(c=""+e),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(m=o.ref),o)i.call(o,s)&&!n.hasOwnProperty(s)&&(r[s]=o[s]);if(a&&a.defaultProps)for(s in o=a.defaultProps)void 0===r[s]&&(r[s]=o[s]);return{$$typeof:d,type:a,key:c,ref:m,props:r,_owner:t.current}}o.Fragment=r,o.jsx=c,o.jsxs=c},474848:(a,o,e)=>{a.exports=e(221020)},832073:(a,o,e)=>{e.d(o,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAABYCAIAAACLVtmFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAS+SURBVHhe7ZrLSitbEIbP2x40UdRgFBGNg4iKiCByQPE2EiLqSCcOoqIEnIjXiIrJeQOfwHN+U3+ys3vbScftbrsq9Q2aXrUuheuje61l+q9dxyjvav91zOFqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqf3B2dra+vp7L5TKZTG9vL664RwRxtlCFq33n5ORkcnLy73BQizZsrYRuV1utVtfW1sRfNpvd2to6Pz+/v7+vVCq44h4RxKUBWqI9eyaerlYLT/Pz83CWSqUKhcLLy4vEt7e3EcRVioijFm0QRHstdrtarTyvQ0NDpVKJoRoBtQLaoCXi6MVQsuletVg74QnPYrPXy8vLhYWFjY0NVOGKe0RYV7Mrz66Kdbd71cq+CW9almtMT08jiO1x44oI62qgPYLoy3KC6VK1OM/AEPZHjfVVuL29HR0dRZWAe0RYVwPtZVeV/BNRl6rFaRV6sPtluQm4HBkZEa83NzeMNoFeqMUILCeVLlWby+WgB2cbln/m+voa7+HA89oAvdAXI7CcVOyoxV/xT2RkN4STKzt3AnqhbyaTYTmp2FELYa+vr/9FQ9RWKhV2roPgr7CuDnohiE0Wy0nFlFp6i4Bshfyp1UFHauWQE7bWYvfka22C6Ejtzs4O9PgOWQcBtSi24OnpCXr8XKsDCKPVaOTzeRjy/0YpoFO15XIZkvx/yAoIqH1/7bZjfHwcntLpdLNd4L/8JAuootXIvL29LS8vwxaeRbxpG+tuQC3iqJXn1X+v/QY+oRbAriyfAPsj7H5xtsHJ1b+ySAqY8YDa9xduZObm5mRXFYZ/G/Vt7O3twRCtfhaciHDexZYY715sj/2Lxu8HR8/+/v7fV9sAQ2HAsP9GacGCWrxO8c4MqEUxOuxTBxEMiGGZQCfq1R4eHtZWw6Da30HUAgzONArRrfbh4WFwcFA0/Am1GBwpmEwbutUuLS2JA9x8rdrmkZlMG4rVFotFmX1seXAG/Vq1GBDDyvhIxJSq0KoWB5Xh4WGZ+v39fUa/FAwr4yMR0jGqB61qV1dXZd6npqaq1WqhUMCj9oVgQAyLwSUL0jGxHlSqLZVKPT09mHFcLy4uGP0DYPBGosBPCMlHpVr5CuJDUqnUzMwMH70OmZ2dFZEfks1mmV4JKtVyskPo6+u7urpi08g8Pj5mMhkOEQKbKsGgWoDzKJ/EyIyNjbFzOEyvBN1qWa6DpVG+egGbm5uMRuD09FR6gaOjI0brsMLVxgBn+qO5lk8VAVbNg4MDRltyd3fX+NRtcXGR0SakCrCsBGtqgfxa8AkGBgbK5TJHaYLVrjYGONMhcw09ExMTbBEZbL6Oj485xM+whauNAc50+Fw/Pz+vrKxE2RmBdDqdz+dbHFvZztXGAGc6rrlmMlcbA5xpV9sSV9seJnO1McCZdrUtcbXtYTJXGwOcaVfbElfbHiZztTHAmXa1LXG17WEyVxsDnOnYYXolqFTb+OAtTpCU6ZWgUm2xWIzZLtKp+2RVpVonCq7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLFTrGGR393+ISMRFHIYADQAAAABJRU5ErkJggg=="},28453:(a,o,e)=>{e.d(o,{R:()=>i,x:()=>t});var s=e(296540);const d={},r=s.createContext(d);function i(a){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof a?a(o):{...o,...a}}),[o,a])}function t(a){let o;return o=a.disableParentContext?"function"==typeof a.components?a.components(d):a.components||d:i(a.components),s.createElement(r.Provider,{value:o},a.children)}}}]);