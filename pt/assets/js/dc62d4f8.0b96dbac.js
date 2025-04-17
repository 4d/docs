"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1256"],{944796:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"ViewPro/commands/vp-import-from-blob","title":"VP IMPORT FROM BLOB","description":"VP IMPORT FROM BLOB ( vpAreaName 4D.blob { ; paramObj : Object} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-import-from-blob.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-import-from-blob","permalink":"/docs/pt/ViewPro/commands/vp-import-from-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-import-from-blob.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-import-from-blob","title":"VP IMPORT FROM BLOB"},"sidebar":"docs","previous":{"title":"VP IMPORT DOCUMENT","permalink":"/docs/pt/ViewPro/commands/vp-import-document"},"next":{"title":"VP IMPORT FROM OBJECT","permalink":"/docs/pt/ViewPro/commands/vp-import-from-object"}}'),s=t("785893"),d=t("250065");let o={id:"vp-import-from-blob",title:"VP IMPORT FROM BLOB"},l=void 0,i={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function c(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP IMPORT FROM BLOB"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"vpBlob"})," : 4D.blob { ; ",(0,s.jsx)(n.em,{children:"paramObj"})," : Object} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpBlob"}),(0,s.jsx)(n.td,{children:"4D. Blob"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Blob contendo um documento 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"paramObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Op\xe7\xf5es de importa\xe7\xe3o"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP IMPORT FROM BLOB"})," command imports the ",(0,s.jsx)(n.em,{children:"vpBlob"})," in the 4D View Pro area ",(0,s.jsx)(n.em,{children:"vpAreaName"})," and replaces its contents. ",(0,s.jsx)(n.em,{children:"vpBlob"})," must contain a 4D View Pro document previously saved as Blob either by using the ",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-export-to-blob",children:"VP EXPORT TO BLOB"})," command or via the 4D View Pro interface."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"paramObj"}),", voc\xea pode passar v\xe1rias propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propriedade"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formula"}),(0,s.jsx)(n.td,{children:"4D. Function"}),(0,s.jsxs)(n.td,{children:["M\xe9todo de retorno de chamada a ser iniciado quando a importa\xe7\xe3o for conclu\xedda. Veja ",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-export-document#passing-a-callback-method-formula",children:"Passando um m\xe9todo de callback (f\xf3rmula)"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"calcOnDemand"}),(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsx)(n.td,{children:"Se as f\xf3rmulas devem ser calculadas somente quando forem exigidas; padr\xe3o=falso."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dynamicReferences"}),(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsx)(n.td,{children:"Se deve calcular fun\xe7\xf5es com refer\xeancia din\xe2mica; padr\xe3o = true."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fullRecalc"}),(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsx)(n.td,{children:"Para decidir se calcula depois do carregamento do dado json, falso por padr\xe3o"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeFormulas"}),(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsx)(n.td,{children:"Se deve incluir a f\xf3rmula ao carregar, padr\xe3o=true."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeStyles"}),(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsx)(n.td,{children:"Se deve incluir o estilo ao carregar, padr\xe3o = true."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"includeUnusedStyles"}),(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsx)(n.td,{children:"Se deve incluir o estilo de nome n\xe3o utilizado ao converter o xml do Excel para o json, default=true."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"openMode"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsxs)(n.td,{children:["pode ser: ",(0,s.jsx)(n.br,{}),"0: modo aberto normal, sem lazy e incremental. Ao abrir o documento, a interface do usu\xe1rio e o evento da interface do usu\xe1rio podem ser atualizados e responsivos em momentos espec\xedficos. ",(0,s.jsx)(n.br,{}),"1: modo aberto pregui\xe7oso. Quando abrir o documento, s\xf3 a folha ativa ser\xe1 carregada diretamente. Outras folhas ser\xe3o carregadas somente quando estiverem sendo usadas. ",(0,s.jsx)(n.br,{}),"2: incremental open mode. Quando abrir o documento, UI e evento UI poderiam ser recarregados e diretamente responsivos."]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Os seguintes par\xe2metros podem ser usados no m\xe9todo de retorno de chamada:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Par\xe2metro"}),(0,s.jsx)(n.th,{style:{textAlign:"left"}}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Tipo"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"param1"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"text"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"O nome do objeto de \xe1rea 4D View Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"param2"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"4D. Blob"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"O blob importado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"param3"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"object"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Uma refer\xeancia ao par\xe2metro ",(0,s.jsx)(n.em,{children:"paramObj"})," do comando"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"param4"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"object"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Um objeto devolvido pelo m\xe9todo com uma mensagem de estado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"}}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:".success"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"boolean"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"True se a importa\xe7\xe3o for bem-sucedida, False caso contr\xe1rio."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"}}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:".errorCode"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"integer"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"C\xf3digo de erro."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"}}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:".errorMessage"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"text"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Mensagem de erro."})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The callback function specified in the ",(0,s.jsx)(n.code,{children:"formula"})," attribute is triggered after all ",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/formulas#4d-functions",children:"4D custom functions"})," within the imported content have completed their calculations. This ensures that any dependent processes, such as document modifications or exports, are performed only after all formula-based computations are fully resolved."]})}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:'Voc\xea deseja importar para a "ViewProArea" um documento 4D View Pro salvo anteriormente como Blob na primeira entidade da classe de dados Table.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $myBlobDocument : 4D.Blob :=ds.Table.all().first().blob\nVP IMPORT FROM BLOB("ViewProArea"; $myBlobDocument)\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-export-to-blob",children:"VP EXPORT TO BLOB"})})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(667294);let s={},d=r.createContext(s);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);