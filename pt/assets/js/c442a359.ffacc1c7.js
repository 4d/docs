"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19836"],{176397:function(e,t,s){s.r(t),s.d(t,{metadata:()=>o,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>i});var o=JSON.parse('{"id":"ORDA/client-server-optimization","title":"Otimiza\xe7\xe3o cliente/servidor","description":"4D provides optimizations for ORDA requests that use entity selections or load entities in client/server architectures. Essas otimiza\xe7\xf5es aceleram a execu\xe7\xe3o de seu aplicativo 4D ao reduzir drasticamente o volume de informa\xe7\xf5es transmitidas pela rede. Estes incluem:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ORDA/client-server-optimization.md","sourceDirName":"ORDA","slug":"/ORDA/client-server-optimization","permalink":"/docs/pt/20-R6/ORDA/client-server-optimization","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fclient-server-optimization.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"client-server-optimization","title":"Otimiza\xe7\xe3o cliente/servidor"},"sidebar":"docs","previous":{"title":"Privil\xe9gios","permalink":"/docs/pt/20-R6/ORDA/privileges"},"next":{"title":"Glossary","permalink":"/docs/pt/20-R6/ORDA/glossary"}}'),n=s("785893"),a=s("250065");let i={id:"client-server-optimization",title:"Otimiza\xe7\xe3o cliente/servidor"},r=void 0,d={},c=[{value:"Arquiteturas suportadas",id:"arquiteturas-suportadas",level:2},{value:"Contexto de otimiza\xe7\xe3o",id:"contexto-de-otimiza\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:3},{value:"Reutilizando a propriedade <code>context</code>",id:"reutilizando-a-propriedade-context",level:3},{value:"List box baseado em uma sele\xe7\xe3o de entidades",id:"list-box-baseado-em-uma-sele\xe7\xe3o-de-entidades",level:3},{value:"Pr\xe9-configura\xe7\xe3o de contextos",id:"pr\xe9-configura\xe7\xe3o-de-contextos",level:3},{value:"Cache ORDA",id:"cache-orda",level:2}];function l(e){let t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"4D provides optimizations for ORDA requests that use entity selections or load entities in client/server architectures. Essas otimiza\xe7\xf5es aceleram a execu\xe7\xe3o de seu aplicativo 4D ao reduzir drasticamente o volume de informa\xe7\xf5es transmitidas pela rede. Estes incluem:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["o ",(0,n.jsx)(t.strong,{children:"contexto de otimiza\xe7\xe3o"})]}),"\n",(0,n.jsxs)(t.li,{children:["o ",(0,n.jsx)(t.strong,{children:"Cache ORDA"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"arquiteturas-suportadas",children:"Arquiteturas suportadas"}),"\n",(0,n.jsx)(t.p,{children:"ORDA client/server architectures that support the optimization are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Server datastores accessed by 4D remote desktop applications through ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataStoreClass#ds",children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"ds"})})}),","]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/ORDA/datastores",children:"Remote datastores"}),", accessed via ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataStoreClass#open-datastore",children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Open datastore"})})})," (client REST requests)."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"contexto-de-otimiza\xe7\xe3o",children:"Contexto de otimiza\xe7\xe3o"}),"\n",(0,n.jsx)(t.p,{children:"O contexto de otimiza\xe7\xe3o \xe9 baseado nas seguintes implementa\xe7\xf5es:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'Quando um cliente solicita uma sele\xe7\xe3o de entidade do servidor, 4D "aprende" automaticamente quais atributos da sele\xe7\xe3o de entidade s\xe3o realmente usados no lado do cliente durante a execu\xe7\xe3o do c\xf3digo e constr\xf3i um "contexto de otimiza\xe7\xe3o" correspondente. Esse contexto \xe9 anexado \xe0 sele\xe7\xe3o da entidade e armazena os atributos usados. Ser\xe1 atualizado dinamicamente se outros atributos forem usados depois. Os seguintes m\xe9todos e fun\xe7\xf5es accionam a fase de aprendizagem:'}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/EntitySelectionClass#create-entity-selection",children:(0,n.jsx)(t.code,{children:"Create entity selection"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataClassClass#fromcollection",children:(0,n.jsx)(t.code,{children:"dataClass.fromCollection()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataClassClass#all",children:(0,n.jsx)(t.code,{children:"dataClass.all()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataClassClass#get",children:(0,n.jsx)(t.code,{children:"dataClass.get()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataClassClass#query",children:(0,n.jsx)(t.code,{children:"dataClass.query()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/EntitySelectionClass#query",children:(0,n.jsx)(t.code,{children:"entitySelection.query()"})})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["As solicita\xe7\xf5es subsequentes enviadas ao servidor sobre a mesma sele\xe7\xe3o de entidade reutilizam automaticamente o contexto de otimiza\xe7\xe3o e obt\xeam apenas os atributos necess\xe1rios do servidor, o que acelera o processamento. For example, in an ",(0,n.jsx)(t.a,{href:"#entity-selection-based-list-box",children:"entity selection-based list box"}),", the learning phase takes place during the display of the first row. a visualiza\xe7\xe3o das linhas seguintes \xe9 optimizada. As fun\xe7\xf5es a seguir associam automaticamente o contexto de otimiza\xe7\xe3o da sele\xe7\xe3o da entidade de origem \xe0 sele\xe7\xe3o da entidade retornada:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/EntitySelectionClass#and",children:(0,n.jsx)(t.code,{children:"entitySelection.and()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/EntitySelectionClass#minus",children:(0,n.jsx)(t.code,{children:"entitySelection.minus()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/EntitySelectionClass#or",children:(0,n.jsx)(t.code,{children:"entitySelection.or()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/EntitySelectionClass#orderBy",children:(0,n.jsx)(t.code,{children:"entitySelection.orderBy()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/EntitySelectionClass#slice",children:(0,n.jsx)(t.code,{children:"entitySelection.slice()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/EntitySelectionClass#drop",children:(0,n.jsx)(t.code,{children:"entitySelection.drop()"})})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see ",(0,n.jsx)(t.a,{href:"#reusing-the-context-property",children:"Reusing the context property"})," below)."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["You can build optimization contexts manually using the ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataStoreClass#setremotecontextinfo",children:(0,n.jsx)(t.code,{children:"dataStore.setRemoteContextInfo()"})})," function (see ",(0,n.jsx)(t.a,{href:"#preconfiguring-contexts",children:"Preconfiguring contexts"}),")."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(430557).Z+"",width:"3439",height:"2018"})}),"\n",(0,n.jsx)(t.admonition,{title:"Nota de compatibilidade",type:"note",children:(0,n.jsxs)(t.p,{children:["Contexts handled in connections established through ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataStoreClass#open-datastore",children:(0,n.jsx)(t.code,{children:"Open datastore"})})," can only be used between similar main versions of 4D. For example, a 4D 20.x remote application can only use contexts of a 4D Server 20.x datastore."]})}),"\n",(0,n.jsx)(t.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(t.p,{children:"Dado o seguinte c\xf3digo:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:' $sel:=$ds. Employee.query("firstname = ab@")\n For each($e;$sel)\n    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refers to Company table\n End for each\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in ",(0,n.jsx)(t.em,{children:"$sel"})," from the second iteration of the loop."]}),"\n",(0,n.jsxs)(t.h3,{id:"reutilizando-a-propriedade-context",children:["Reutilizando a propriedade ",(0,n.jsx)(t.code,{children:"context"})]}),"\n",(0,n.jsxs)(t.p,{children:["Voc\xea pode aumentar os benef\xedcios da otimiza\xe7\xe3o usando a propriedade ",(0,n.jsx)(t.strong,{children:"context"}),'. Essa propriedade faz refer\xeancia a um contexto de otimiza\xe7\xe3o "aprendido" para uma sele\xe7\xe3o de entidade. Ele pode ser passado como par\xe2metro para fun\xe7\xf5es ORDA que retornam novas sele\xe7\xf5es de entidades, de modo que as sele\xe7\xf5es de entidades solicitem diretamente os atributos usados ao servidor e ignorem a fase de aprendizado.']}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["You can also create contexts using the ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataStoreClass#setremotecontextinfo",children:(0,n.jsx)(t.code,{children:".setRemoteContextInfo()"})})," function."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["A mesma propriedade de contexto de otimiza\xe7\xe3o pode ser passada para um n\xfamero ilimitado de sele\xe7\xf5es de entidades na mesma classe de dados. All ORDA functions that handle entity selections support the ",(0,n.jsx)(t.strong,{children:"context"})," property (for example ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataClassClass#query",children:(0,n.jsx)(t.code,{children:"dataClass.query()"})})," or ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataClassClass#all",children:(0,n.jsx)(t.code,{children:"dataClass.all()"})}),"). No entanto, lembre-se de que um contexto \xe9 atualizado automaticamente quando novos atributos s\xe3o usados em outras partes do c\xf3digo. A reutiliza\xe7\xe3o do mesmo contexto em c\xf3digos diferentes pode resultar em sobrecarga do contexto e, portanto, reduzir sua efici\xeancia."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataClassClass#get",children:(0,n.jsx)(t.code,{children:"dataClass.get()"})})," function)."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["Exemplo com ",(0,n.jsx)(t.code,{children:"dataClass.query()"}),":"]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:' var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object\n var $data : Collection\n $querysettings:=New object("context";"shortList")\n $querysettings2:=New object("context";"longList")\n\n $sel1:=ds.Employee.query("lastname = S@";$querysettings)\n $data:=extractData($sel1) // In extractData method an optimization is triggered   \n // and associated to context "shortList"\n\n $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)\n $data:=extractData($sel2) // In extractData method the optimization associated   \n // to context "shortList" is applied\n\n $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)\n $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization  \n // is triggered and associated to context "longList"\n\n $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)\n $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization  \n // associated to context "longList" is applied\n'})}),"\n",(0,n.jsx)(t.h3,{id:"list-box-baseado-em-uma-sele\xe7\xe3o-de-entidades",children:"List box baseado em uma sele\xe7\xe3o de entidades"}),"\n",(0,n.jsx)(t.p,{children:"Entity selection optimization is automatically applied to entity selection-based list boxes in 4D client/server desktop applications, when displaying and scrolling a list box content: only the attributes displayed in the list box are requested from the server."}),"\n",(0,n.jsxs)(t.p,{children:['A specific "page mode" context is also provided when loading the current entity through the ',(0,n.jsx)(t.strong,{children:"Current item"})," property expression of the list box (see ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/FormObjects/listboxOverview#list-box-types",children:"Collection or entity selection type list boxes"}),'). Esse recurso permite que voc\xea n\xe3o sobrecarregue o contexto inicial da caixa de lista neste caso, especialmente se a "p\xe1gina" solicitar atributos adicionais. Note that only the use of ',(0,n.jsx)(t.strong,{children:"Current item"})," expression will create/use the page context (access through ",(0,n.jsx)(t.code,{children:"entitySelection\\[index]"})," will alter the entity selection context)."]}),"\n",(0,n.jsx)(t.p,{children:"As solicita\xe7\xf5es subsequentes ao servidor enviadas pelas fun\xe7\xf5es de navega\xe7\xe3o da entidade tamb\xe9m dar\xe3o suporte a essa otimiza\xe7\xe3o. As fun\xe7\xf5es a seguir associam automaticamente o contexto de otimiza\xe7\xe3o da entidade de origem \xe0 entidade retornada:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/EntityClass#next",children:(0,n.jsx)(t.code,{children:"entity.next()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/EntityClass#first",children:(0,n.jsx)(t.code,{children:"entity.first()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/EntityClass#last",children:(0,n.jsx)(t.code,{children:"entity.last()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/EntityClass#previous",children:(0,n.jsx)(t.code,{children:"entity.previous()"})})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Por exemplo, o c\xf3digo a seguir carrega a entidade selecionada e permite a navega\xe7\xe3o na sele\xe7\xe3o da entidade. As entidades s\xe3o carregadas em um contexto separado e o contexto inicial da caixa de listagem n\xe3o \xe9 alterado:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:" $myEntity:=Form.currentElement //current item expression\n  //... do something\n $myEntity:=$myEntity.next() //loads the next entity using the same context\n"})}),"\n",(0,n.jsx)(t.h3,{id:"pr\xe9-configura\xe7\xe3o-de-contextos",children:"Pr\xe9-configura\xe7\xe3o de contextos"}),"\n",(0,n.jsx)(t.p,{children:"Um contexto de otimiza\xe7\xe3o deve ser definido para cada recurso ou algoritmo do seu aplicativo, a fim de obter os melhores desempenhos. Por exemplo, um contexto pode ser usado para consultas sobre clientes, outro contexto para consultas sobre produtos, etc."}),"\n",(0,n.jsx)(t.p,{children:"Se quiser fornecer aplicativos finais com o mais alto n\xedvel de otimiza\xe7\xe3o, voc\xea pode pr\xe9-configurar seus contextos e, assim, economizar fases de aprendizado, seguindo estas etapas:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Projete seus algoritmos."}),"\n",(0,n.jsx)(t.li,{children:"Execute seu aplicativo e deixe que o mecanismo de aprendizado autom\xe1tico preencha os contextos de otimiza\xe7\xe3o."}),"\n",(0,n.jsxs)(t.li,{children:["Call the ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataStoreClass#getremotecontextinfo",children:(0,n.jsx)(t.code,{children:"dataStore.getRemoteContextInfo()"})})," or ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataStoreClass#getallremotecontexts",children:(0,n.jsx)(t.code,{children:"dataStore.getAllRemoteContexts()"})})," function to collect  contexts. You can use the ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/EntitySelectionClass#getremotecontextattributes",children:(0,n.jsx)(t.code,{children:"entitySelection.getRemoteContextAttributes()"})})," and ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/EntityClass#getremotecontextattributes",children:(0,n.jsx)(t.code,{children:"entity.getRemoteContextAttributes()"})})," functions to analyse how your algorithms use attributes."]}),"\n",(0,n.jsxs)(t.li,{children:["In the final step, call the ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataStoreClass#setremotecontextinfo",children:(0,n.jsx)(t.code,{children:"dataStore.setRemoteContextInfo()"})})," function to build contexts at application startup and ",(0,n.jsx)(t.a,{href:"#reusing-the-context-property",children:"use them"})," in your algorithms."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"cache-orda",children:"Cache ORDA"}),"\n",(0,n.jsx)(t.p,{children:"Por motivos de otimiza\xe7\xe3o, os dados solicitados do servidor por meio do ORDA s\xe3o carregados no cache remoto do ORDA (que \xe9 diferente do cache 4D). O cache do ORDA \xe9 organizado por classe de dados e expira ap\xf3s 30 segundos."}),"\n",(0,n.jsx)(t.p,{children:"Os dados contidos no cache s\xe3o considerados expirados quando o tempo limite \xe9 atingido. Qualquer acesso a dados expirados enviar\xe1 um pedido ao servidor. Os dados expirados permanecem na cache at\xe9 que seja necess\xe1rio espa\xe7o."}),"\n",(0,n.jsxs)(t.p,{children:["You can force entity selection data in the ORDA cache to expire at any moment by using the ",(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/EntitySelectionClass#refresh",children:(0,n.jsx)(t.code,{children:"refresh()"})})," function."]}),"\n",(0,n.jsx)(t.p,{children:"Por padr\xe3o, o cache ORDA \xe9 tratado de forma transparente pelo 4D. No entanto, voc\xea pode controlar seu conte\xfado usando as seguintes fun\xe7\xf5es da classe ORDA:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataClassClass#setremotecachesettings",children:"dataClass.setRemoteCacheSettings()"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataClassClass#getremotecache",children:"dataClass.getRemoteCache()"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/pt/20-R6/API/DataClassClass#clearremotecache",children:"dataClass.clearRemoteCache()"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},430557:function(e,t,s){s.d(t,{Z:function(){return o}});let o=s.p+"assets/images/cs-optimization-process-0810df7e186eabd072bc04a037744fb1.png"},250065:function(e,t,s){s.d(t,{Z:function(){return r},a:function(){return i}});var o=s(667294);let n={},a=o.createContext(n);function i(e){let t=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);