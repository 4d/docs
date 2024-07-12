/*! For license information please see efd47a22.89bf4245.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87578],{838866:(a,e,o)=>{o.r(e),o.d(e,{assets:()=>t,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>n,toc:()=>c});var s=o(474848),r=o(28453);const d={id:"compact",title:"P\xe1gina compactado",sidebar_label:"P\xe1gina compactado"},i=void 0,n={id:"MSC/compact",title:"P\xe1gina compactado",description:"Esta p\xe1gina \xe9 utilizada para aceder \xe0s fun\xe7\xf5es de compacta\xe7\xe3o de arquivos de dados.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/MSC/compact.md",sourceDirName:"MSC",slug:"/MSC/compact",permalink:"/docs/pt/MSC/compact",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fcompact.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"compact",title:"P\xe1gina compactado",sidebar_label:"P\xe1gina compactado"},sidebar:"docs",previous:{title:"P\xe1gina de Backup",permalink:"/docs/pt/MSC/backup"},next:{title:"P\xe1gina Retrocesso",permalink:"/docs/pt/MSC/rollback"}},t={},c=[{value:"Porqu\xea compactar seus arquivos?",id:"porqu\xea-compactar-seus-arquivos",level:2},{value:"Compacta\xe7\xe3o standard",id:"compacta\xe7\xe3o-standard",level:2},{value:"Abrir arquivo de registo",id:"abrir-arquivo-de-registo",level:2},{value:"Modo avan\xe7ado",id:"modo-avan\xe7ado",level:2},{value:"Compacta\xe7\xe3o de registros e \xedndices",id:"compacta\xe7\xe3o-de-registros-e-\xedndices",level:3},{value:"For\xe7ar a atualiza\xe7\xe3o dos registos",id:"for\xe7ar-a-atualiza\xe7\xe3o-dos-registos",level:3},{value:"Compactar a tabela de endere\xe7os",id:"compactar-a-tabela-de-endere\xe7os",level:3}];function l(a){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Esta p\xe1gina \xe9 utilizada para aceder \xe0s fun\xe7\xf5es de compacta\xe7\xe3o de arquivos de dados."}),"\n",(0,s.jsx)(e.h2,{id:"porqu\xea-compactar-seus-arquivos",children:"Porqu\xea compactar seus arquivos?"}),"\n",(0,s.jsx)(e.p,{children:"A compacta\xe7\xe3o de ficheiros responde a dois tipos de necessidades:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Reducci\xf3n del tama\xf1o y optimizaci\xf3n de los archivos"}),': los archivos pueden contener espacios no utilizados ("huecos"). De fato, quando se eliminam registos, o espa\xe7o que estes ocupavam anteriormente no arquivo fica vazio. 4D reutiliza esses espa\xe7os vazios sempre que poss\xedvel, mas como o tamanho dos dados \xe9 vari\xe1vel, elimina\xe7\xf5es ou modifica\xe7\xf5es sucessivas inevitavelmente geram espa\xe7o inutiliz\xe1vel para o programa. O mesmo acontece quando uma grande quantidade de dados acaba de ser eliminada: os espa\xe7os vazios ficam por atribuir no arquivo.\nA rela\xe7\xe3o entre o tamanho do arquivo de dados e o espa\xe7o efetivamente utilizado para os dados \xe9 a taxa de ocupa\xe7\xe3o dos dados. Uma taxa demasiado baixa pode levar, para al\xe9m de um desperd\xedcio de espa\xe7o, \xe0 deteriora\xe7\xe3o do desempenho da base de dados. A compacta\xe7\xe3o pode ser utilizada para reorganizar e otimizar o armazenamento dos dados, de modo a eliminar os "buracos".\nA \xe1rea "Informa\xe7\xe3o" resume os dados relativos \xe0 fragmenta\xe7\xe3o do arquivo e sugere opera\xe7\xf5es a realizar. La pesta\xf1a ',(0,s.jsx)(e.a,{href:"/docs/pt/MSC/information#data",children:"Datos"}),' de la p\xe1gina "Informaci\xf3n" del CSM indica la fragmentaci\xf3n del archivo de datos actual.']}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Actualizaci\xf3n completa de los datos"})," aplicando el formato actual definido en el archivo de estructura. Isto \xe9 \xfatil quando os dados da mesma tabela foram armazenados em formatos diferentes, por exemplo, ap\xf3s uma altera\xe7\xe3o na estrutura da base de dados."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["A compacta\xe7\xe3o s\xf3 est\xe1 dispon\xedvel no modo de manuten\xe7\xe3o. Se tentar realizar essa opera\xe7\xe3o em modo padr\xe3o, uma caixa de di\xe1logo de aviso informar\xe1 que o banco de dados ser\xe1 fechado e reiniciado em modo manuten\xe7\xe3o. Puede compactar un archivo de datos que no est\xe9 abierto por la aplicaci\xf3n (ver ",(0,s.jsx)(e.a,{href:"#compact-records-and-indexes",children:"Compactar los registros y los \xedndices"})," abajo)."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"compacta\xe7\xe3o-standard",children:"Compacta\xe7\xe3o standard"}),"\n",(0,s.jsx)(e.p,{children:"Para iniciar diretamente a compacta\xe7\xe3o do arquivo de dados, clique no bot\xe3o de compacta\xe7\xe3o na janela MSC."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:o(813011).A+"",width:"158",height:"88"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"J\xe1 que a compacta\xe7\xe3o envolve a duplica\xe7\xe3o do arquivo original, o bot\xe3o \xe9 desativado quando n\xe3o existir espa\xe7o suficiente dispon\xedvel no disco que cont\xe9m o arquivo."}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["Esta opera\xe7\xe3o compacta o arquivo principal, bem como quaisquer arquivos de \xedndice. 4D copia los archivos originales y los coloca en una carpeta llamada ",(0,s.jsx)(e.strong,{children:"Archivos Reemplazados (Compactando)"}),', que se crea junto al archivo original. Se tiver efetuado v\xe1rias opera\xe7\xf5es de compacta\xe7\xe3o, \xe9 criada uma nova pasta de cada vez. Ser\xe1 denominado "arquivos substitu\xeddos (compacta\xe7\xe3o)_1", "arquivos substitu\xeddos (compacta\xe7\xe3o)_2", e assim por diante. Pode modificar a pasta onde os arquivos originais s\xe3o guardados utilizando o modo avan\xe7ado.']}),"\n",(0,s.jsx)(e.p,{children:"Quando a opera\xe7\xe3o estiver conclu\xedda, os arquivos compactados substituem automaticamente os arquivos originais. O banco de dados fica operacional imediatamente sem outras manipula\xe7\xf5es."}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"Quando a base de dados est\xe1 encriptada, a compacta\xe7\xe3o inclui passos de desencripta\xe7\xe3o e encripta\xe7\xe3o e, por isso, requer a chave de encripta\xe7\xe3o de dados atual. Se ainda n\xe3o tiver sido fornecida uma chave de dados v\xe1lida, \xe9 apresentada uma caixa de di\xe1logo que pede a frase-chave ou a chave de dados."}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Atenci\xf3n:"})," cada operaci\xf3n de compactaci\xf3n implica la duplicaci\xf3n del archivo original, lo que aumenta el tama\xf1o de la carpeta de la aplicaci\xf3n. \xc9 importante ter isto em conta (especialmente em macOS onde as aplica\xe7\xf5es 4D aparecem como pacotes) para que o tamanho da aplica\xe7\xe3o n\xe3o aumente excessivamente. A remo\xe7\xe3o manual das c\xf3pias do arquivo original dentro do pacote pode ser \xfatil para manter o tamanho do pacote reduzido."]}),"\n",(0,s.jsx)(e.h2,{id:"abrir-arquivo-de-registo",children:"Abrir arquivo de registo"}),"\n",(0,s.jsxs)(e.p,{children:["Depois que a compacta\xe7\xe3o terminar, 4D gera um arquivo de hist\xf3rico na pasta Logs do banco de dados. Este arquivo permite visualizar todas as opera\xe7\xf5es efectuadas. \xc9 criada no formato XML e se chama  ",(0,s.jsx)(e.em,{children:"DatabaseName**_Compact_Log_yyyy-mm-dd hh-mm-ss.xml"}),'" onde:']}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"ApplicationName"}),' es el nombre del archivo del proyecto sin ninguna extensi\xf3n, por ejemplo "Facturas",']}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"yyyy-mm-dd hh-mm-ss"}),' es la marca de tiempo del archivo, basada en la hora del sistema local cuando se inici\xf3 la operaci\xf3n de mantenimiento, por ejemplo "2019-02-11 15-20-45".']}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["Al presionar el bot\xf3n ",(0,s.jsx)(e.strong,{children:"Abrir archivo de historial"}),", 4D muestra el archivo de historial m\xe1s reciente en el navegador por defecto de la m\xe1quina."]}),"\n",(0,s.jsx)(e.h2,{id:"modo-avan\xe7ado",children:"Modo avan\xe7ado"}),"\n",(0,s.jsxs)(e.p,{children:["La p\xe1gina Compactar contiene un bot\xf3n ",(0,s.jsx)(e.strong,{children:"Avanzado>"}),", con el que se puede acceder a una p\xe1gina de opciones para compactar el archivo de datos."]}),"\n",(0,s.jsx)(e.h3,{id:"compacta\xe7\xe3o-de-registros-e-\xedndices",children:"Compacta\xe7\xe3o de registros e \xedndices"}),"\n",(0,s.jsxs)(e.p,{children:["El \xe1rea ",(0,s.jsx)(e.strong,{children:"Compactar los registros y los \xedndices"})," muestra el nombre de la ruta del archivo de datos actual, as\xed como un bot\xf3n ",(0,s.jsx)(e.strong,{children:"[...]"})," que puede utilizarse para especificar otro archivo de datos. Quando se clica neste bot\xe3o, \xe9 apresentada uma caixa de di\xe1logo padr\xe3o Abrir documento para que se possa designar o arquivo de dados a compactar. \xc9 necess\xe1rio selecionar um arquivo de dados que seja compat\xedvel com o arquivo de estrutura aberta. Uma vez validada esta caixa de di\xe1logo, o nome do caminho do arquivo a compactar \xe9 indicado na janela."]}),"\n",(0,s.jsxs)(e.p,{children:["El segundo bot\xf3n ",(0,s.jsx)(e.strong,{children:"[...]"})," se puede utilizar para especificar otra ubicaci\xf3n para guardar los archivos originales antes de la operaci\xf3n de compactaci\xf3n. Esta op\xe7\xe3o pode ser utilizada mais particularmente para compactar ficheiros volumosos enquanto utiliza discos diferentes."]}),"\n",(0,s.jsx)(e.h3,{id:"for\xe7ar-a-atualiza\xe7\xe3o-dos-registos",children:"For\xe7ar a atualiza\xe7\xe3o dos registos"}),"\n",(0,s.jsx)(e.p,{children:"Quando esta op\xe7\xe3o estiver marcada, 4D reescreve cada registo para cada tabela durante a opera\xe7\xe3o de compacta\xe7\xe3o, de acordo com a sua descri\xe7\xe3o na estrutura. Se esta op\xe7\xe3o n\xe3o estiver marcada, 4D apenas reorganiza o armazenamento de dados no disco. Esta op\xe7\xe3o \xe9 \xfatil nos seguintes casos:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Quando os tipos de campo s\xe3o alterados na estrutura da aplica\xe7\xe3o depois de os dados terem sido introduzidos. Por exemplo, pode ter alterado um campo Longint para um tipo Real. 4D at\xe9 permite mudan\xe7as entre dois tipos muito diferentes (com riscos de perda de dados), por exemplo, um campo Real pode ser mudado para Texto e vice-versa.\nNeste caso, 4D n\xe3o converte dados j\xe1 introduzidos retroativamente; os dados s\xe3o convertidos apenas quando os registos s\xe3o carregados e depois guardados. Esta op\xe7\xe3o for\xe7a a convers\xe3o de todos os dados."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Quando uma op\xe7\xe3o de armazenamento externo para dados de Texto, Imagem ou BLOB tiver sido alterada ap\xf3s a introdu\xe7\xe3o dos dados. Isto pode acontecer quando as bases de dados s\xe3o convertidas a partir de uma vers\xe3o anterior \xe0 v13. Como \xe9 o caso da redigita\xe7\xe3o descrita acima, 4D n\xe3o converte dados j\xe1 inseridos retroativamente. Para isso, \xe9 poss\xedvel for\xe7ar a atualiza\xe7\xe3o dos registros para aplicar o novo modo de armazenamento aos registros que j\xe1 foram entrados."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Quando as tabelas ou campos foram eliminados. Neste caso, a compacta\xe7\xe3o com atualiza\xe7\xe3o de registos recupera o espa\xe7o destes dados removidos, reduzindo assim o tamanho do arquivo."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"Todos os \xedndices s\xe3o atualizados quando esta op\xe7\xe3o \xe9 selecionada."}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"compactar-a-tabela-de-endere\xe7os",children:"Compactar a tabela de endere\xe7os"}),"\n",(0,s.jsx)(e.p,{children:"(op\xe7\xe3o apenas ativa quando a op\xe7\xe3o anterior est\xe1 marcada)"}),"\n",(0,s.jsx)(e.p,{children:"Esta op\xe7\xe3o reconstr\xf3i completamente a tabela de endere\xe7os para os registos durante a compacta\xe7\xe3o. Isto optimiza o tamanho da tabela de endere\xe7os e \xe9 utilizado principalmente para bases de dados onde foram criados e depois eliminados grandes volumes de dados. Noutros casos, a otimiza\xe7\xe3o n\xe3o \xe9 um fator decisivo."}),"\n",(0,s.jsxs)(e.p,{children:["Tenga en cuenta que esta opci\xf3n ralentiza sustancialmente la compactaci\xf3n e invalida cualquier conjunto guardado mediante el comando ",(0,s.jsx)(e.code,{children:"SAVE SET"}),". Al\xe9m disso, recomendamos vivamente a elimina\xe7\xe3o dos conjuntos guardados neste caso, porque a sua utiliza\xe7\xe3o pode levar a selec\xe7\xf5es de dados incorrectos."]}),"\n",(0,s.jsx)(e.admonition,{title:"Notas",type:"note",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"A compacta\xe7\xe3o tem em conta os registos das tabelas que foram colocadas no Lixo. Se houver um grande n\xfamero de registos no Lixo, este pode ser um fator adicional que pode tornar a opera\xe7\xe3o mais lenta."}),"\n",(0,s.jsx)(e.li,{children:"A utiliza\xe7\xe3o desta op\xe7\xe3o torna a tabela de endere\xe7os e, consequentemente, a base de dados, incompat\xedvel com o arquivo de di\xe1rio atual (se existir). Ser\xe1 salvado automaticamente e um novo arquivo de hist\xf3rico ser\xe1 criado na pr\xf3xima vez que o banco for lan\xe7ado."}),"\n",(0,s.jsxs)(e.li,{children:["Puede decidir si la tabla de direcciones necesita ser compactada comparando el n\xfamero total de registros y el tama\xf1o de la tabla de direcciones en la p\xe1gina ",(0,s.jsx)(e.a,{href:"/docs/pt/MSC/information",children:"Informaci\xf3n"})," del CSM."]}),"\n",(0,s.jsxs)(e.li,{children:["The ",(0,s.jsx)(e.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1051.html",children:(0,s.jsx)(e.code,{children:"TRUNCATE TABLE"})})," command automatically resets the address table for the specified table."]}),"\n"]})})]})}function m(a={}){const{wrapper:e}={...(0,r.R)(),...a.components};return e?(0,s.jsx)(e,{...a,children:(0,s.jsx)(l,{...a})}):l(a)}},221020:(a,e,o)=>{var s=o(296540),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,n=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function c(a,e,o){var s,d={},c=null,l=null;for(s in void 0!==o&&(c=""+o),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(l=e.ref),e)i.call(e,s)&&!t.hasOwnProperty(s)&&(d[s]=e[s]);if(a&&a.defaultProps)for(s in e=a.defaultProps)void 0===d[s]&&(d[s]=e[s]);return{$$typeof:r,type:a,key:c,ref:l,props:d,_owner:n.current}}e.Fragment=d,e.jsx=c,e.jsxs=c},474848:(a,e,o)=>{a.exports=o(221020)},813011:(a,e,o)=>{o.d(e,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAABYCAIAAACLVtmFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAS+SURBVHhe7ZrLSitbEIbP2x40UdRgFBGNg4iKiCByQPE2EiLqSCcOoqIEnIjXiIrJeQOfwHN+U3+ys3vbScftbrsq9Q2aXrUuheuje61l+q9dxyjvav91zOFqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqf3B2dra+vp7L5TKZTG9vL664RwRxtlCFq33n5ORkcnLy73BQizZsrYRuV1utVtfW1sRfNpvd2to6Pz+/v7+vVCq44h4RxKUBWqI9eyaerlYLT/Pz83CWSqUKhcLLy4vEt7e3EcRVioijFm0QRHstdrtarTyvQ0NDpVKJoRoBtQLaoCXi6MVQsuletVg74QnPYrPXy8vLhYWFjY0NVOGKe0RYV7Mrz66Kdbd71cq+CW9almtMT08jiO1x44oI62qgPYLoy3KC6VK1OM/AEPZHjfVVuL29HR0dRZWAe0RYVwPtZVeV/BNRl6rFaRV6sPtluQm4HBkZEa83NzeMNoFeqMUILCeVLlWby+WgB2cbln/m+voa7+HA89oAvdAXI7CcVOyoxV/xT2RkN4STKzt3AnqhbyaTYTmp2FELYa+vr/9FQ9RWKhV2roPgr7CuDnohiE0Wy0nFlFp6i4Bshfyp1UFHauWQE7bWYvfka22C6Ejtzs4O9PgOWQcBtSi24OnpCXr8XKsDCKPVaOTzeRjy/0YpoFO15XIZkvx/yAoIqH1/7bZjfHwcntLpdLNd4L/8JAuootXIvL29LS8vwxaeRbxpG+tuQC3iqJXn1X+v/QY+oRbAriyfAPsj7H5xtsHJ1b+ySAqY8YDa9xduZObm5mRXFYZ/G/Vt7O3twRCtfhaciHDexZYY715sj/2Lxu8HR8/+/v7fV9sAQ2HAsP9GacGCWrxO8c4MqEUxOuxTBxEMiGGZQCfq1R4eHtZWw6Da30HUAgzONArRrfbh4WFwcFA0/Am1GBwpmEwbutUuLS2JA9x8rdrmkZlMG4rVFotFmX1seXAG/Vq1GBDDyvhIxJSq0KoWB5Xh4WGZ+v39fUa/FAwr4yMR0jGqB61qV1dXZd6npqaq1WqhUMCj9oVgQAyLwSUL0jGxHlSqLZVKPT09mHFcLy4uGP0DYPBGosBPCMlHpVr5CuJDUqnUzMwMH70OmZ2dFZEfks1mmV4JKtVyskPo6+u7urpi08g8Pj5mMhkOEQKbKsGgWoDzKJ/EyIyNjbFzOEyvBN1qWa6DpVG+egGbm5uMRuD09FR6gaOjI0brsMLVxgBn+qO5lk8VAVbNg4MDRltyd3fX+NRtcXGR0SakCrCsBGtqgfxa8AkGBgbK5TJHaYLVrjYGONMhcw09ExMTbBEZbL6Oj485xM+whauNAc50+Fw/Pz+vrKxE2RmBdDqdz+dbHFvZztXGAGc6rrlmMlcbA5xpV9sSV9seJnO1McCZdrUtcbXtYTJXGwOcaVfbElfbHiZztTHAmXa1LXG17WEyVxsDnOnYYXolqFTb+OAtTpCU6ZWgUm2xWIzZLtKp+2RVpVonCq7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLFTrGGR393+ISMRFHIYADQAAAABJRU5ErkJggg=="},28453:(a,e,o)=>{o.d(e,{R:()=>i,x:()=>n});var s=o(296540);const r={},d=s.createContext(r);function i(a){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function n(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(r):a.components||r:i(a.components),s.createElement(d.Provider,{value:e},a.children)}}}]);