/*! For license information please see f78f3d33.520ab544.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69847],{9551:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>n,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var o=s(474848),d=s(28453);const i={id:"glossary",title:"Glossary"},r=void 0,t={id:"ORDA/glossary",title:"Glossary",description:"Principais conceitos em resumo",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ORDA/glossary.md",sourceDirName:"ORDA",slug:"/ORDA/glossary",permalink:"/docs/pt/20-R5/ORDA/glossary",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fglossary.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"glossary",title:"Glossary"},sidebar:"docs",previous:{title:"Client/Server Optimization",permalink:"/docs/pt/20-R5/ORDA/client-server-optimization"},next:{title:"Sobre a linguagem 4D",permalink:"/docs/pt/20-R5/Concepts/about"}},n={},l=[{value:"Principais conceitos em resumo",id:"principais-conceitos-em-resumo",level:2},{value:"A\xe7\xe3o",id:"a\xe7\xe3o",level:2},{value:"Atributo",id:"atributo",level:2},{value:"AttributePath",id:"attributepath",level:2},{value:"Class code",id:"class-code",level:2},{value:"Atributo calculado",id:"atributo-calculado",level:2},{value:"Data model class",id:"data-model-class",level:2},{value:"Data model object",id:"data-model-object",level:2},{value:"Data model function",id:"data-model-function",level:2},{value:"Dataclass",id:"dataclass",level:2},{value:"DataClass class",id:"dataclass-class",level:2},{value:"Datastore",id:"datastore",level:2},{value:"DataStore class",id:"datastore-class",level:2},{value:"DataStoreImplementation",id:"datastoreimplementation",level:2},{value:"C\xf3pia profunda",id:"c\xf3pia-profunda",level:2},{value:"ds",id:"ds",level:2},{value:"Entity",id:"entity",level:2},{value:"Sele\xe7\xe3o de entidades",id:"sele\xe7\xe3o-de-entidades",level:2},{value:"Generic class",id:"generic-class",level:2},{value:"Lazy loading",id:"lazy-loading",level:2},{value:"Datastore principal",id:"datastore-principal",level:2},{value:"M\xe9todos",id:"m\xe9todos",level:2},{value:"Tipo de dados misto",id:"tipo-de-dados-misto",level:2},{value:"Bloqueio optimista",id:"bloqueio-optimista",level:2},{value:"Bloqueio pessimista",id:"bloqueio-pessimista",level:2},{value:"Privil\xe9gio",id:"privil\xe9gio",level:2},{value:"Propriedade",id:"propriedade",level:2},{value:"PropertyPath",id:"propertypath",level:2},{value:"Regular class",id:"regular-class",level:2},{value:"Related dataclass",id:"related-dataclass",level:2},{value:"Atributo relacional",id:"atributo-relacional",level:2},{value:"Entidades relacionadas",id:"entidades-relacionadas",level:2},{value:"Remote datastore",id:"remote-datastore",level:2},{value:"Recurso",id:"recurso",level:2},{value:"Role",id:"role",level:2},{value:"Session",id:"session",level:2},{value:"C\xf3pia superficial (Shallow copy)",id:"c\xf3pia-superficial-shallow-copy",level:2},{value:"Stamp",id:"stamp",level:2},{value:"Atributo de armazenamento",id:"atributo-de-armazenamento",level:2}];function c(e){const a={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{id:"principais-conceitos-em-resumo",children:"Principais conceitos em resumo"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:s(555990).A+"",width:"478",height:"433"})}),"\n",(0,o.jsx)(a.h2,{id:"a\xe7\xe3o",children:"A\xe7\xe3o"}),"\n",(0,o.jsxs)(a.p,{children:["Todas las acciones que pueden realizarse en un ",(0,o.jsx)(a.a,{href:"#resource",children:"recurso"}),". As a\xe7\xf5es dispon\xedveis s\xe3o: criar, ler, atualizar, largar, executar, promover e descrever."]}),"\n",(0,o.jsx)(a.h2,{id:"atributo",children:"Atributo"}),"\n",(0,o.jsxs)(a.p,{children:["Un atributo es la celda de almacenamiento m\xe1s peque\xf1a de una base de datos relacional (ver tambi\xe9n ",(0,o.jsx)(a.a,{href:"#relaci%C3%B3n-atributo",children:"Atributo relacional"}),"). N\xe3o confundir atributos de dataclass com atributos de entidades:"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Num objeto dataclass, cada propriedade \xe9 um atributo de dataclass que corresponde a um campo na tabela correspondente (mesmo nome e tipo)."}),"\n",(0,o.jsx)(a.li,{children:"Num objeto entity, os atributos de entidades s\xe3o propriedades que cont\xeam os valores para os atributos do datastore correspondentes."}),"\n"]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:'Attributes and properties are similar concepts. "Atributo" \xe9 utilizado para designar as propriedades da dataclass que armazenam os dados, enquanto "propriedade" \xe9 mais gen\xe9rico e define um dado armazenado num objeto.'}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"attributepath",children:"AttributePath"}),"\n",(0,o.jsxs)(a.p,{children:["Um attributePath \xe9 o caminho de um atributo em uma determinada dataclass ou entidade. Ver tambi\xe9n ",(0,o.jsx)(a.a,{href:"#propertyPath",children:"PropertyPath"}),"."]}),"\n",(0,o.jsx)(a.h2,{id:"class-code",children:"Class code"}),"\n",(0,o.jsx)(a.p,{children:"C\xf3digo da(s) fun\xe7\xe3o(\xf5es) da classe usu\xe1rio."}),"\n",(0,o.jsx)(a.h2,{id:"atributo-calculado",children:"Atributo calculado"}),"\n",(0,o.jsx)(a.p,{children:'Um atributo calculado n\xe3o armazena efetivamente informa\xe7\xf5es. Em vez disso, determina o seu valor com base noutros valores da mesma entidade ou de outras entidades, atributos ou fun\xe7\xf5es. Quando \xe9 referir-se a um atributo calculado, o "c\xe1lculo" subjacente \xe9 avaliado para determinar o valor. Os atributos calculados podem at\xe9 ser atribu\xeddos a valores em que o c\xf3digo definido pelo usu\xe1rio determina o que fazer durante a atribui\xe7\xe3o.'}),"\n",(0,o.jsx)(a.h2,{id:"data-model-class",children:"Data model class"}),"\n",(0,o.jsx)(a.p,{children:"Classe estendida dispon\xedvel para um objeto modelo de dados."}),"\n",(0,o.jsx)(a.h2,{id:"data-model-object",children:"Data model object"}),"\n",(0,o.jsx)(a.p,{children:"Objetos de banco de dados dispon\xedveis atrav\xe9s do conceito ORDA, ou seja, datastore, dataclasses, entities e entity selections."}),"\n",(0,o.jsx)(a.h2,{id:"data-model-function",children:"Data model function"}),"\n",(0,o.jsx)(a.p,{children:"Fun\xe7\xe3o de uma classe de modelo de dados ORDA."}),"\n",(0,o.jsx)(a.h2,{id:"dataclass",children:"Dataclass"}),"\n",(0,o.jsx)(a.p,{children:"Uma dataclass \xe9 um objeto que descreve os dados. As tabelas da banco de dados fornecidas pelo datastore s\xe3o tratadas atrav\xe9s das dataclasses. Cada tabela do banco de dados fornecida pelo datastore tem uma dataclass correspondente com o mesmo nome. Cada campo da tabela \xe9 um atributo da dataclass."}),"\n",(0,o.jsx)(a.p,{children:"Uma dataclass est\xe1 relacionada com um \xfanico datastore."}),"\n",(0,o.jsx)(a.h2,{id:"dataclass-class",children:"DataClass class"}),"\n",(0,o.jsx)(a.p,{children:"Classe para objetos dataclass espec\xedficos, onde se podem adicionar fun\xe7\xf5es personalizadas."}),"\n",(0,o.jsx)(a.h2,{id:"datastore",children:"Datastore"}),"\n",(0,o.jsxs)(a.p,{children:["Um datastore \xe9 o objeto de interface fornecido pela ORDA para referenciar uma estrutura e aceder aos seus dados. La base de datos principal, devuelta por el comando ",(0,o.jsx)(a.code,{children:"ds"}),", est\xe1 disponible como datastore (el datastore principal)."]}),"\n",(0,o.jsx)(a.p,{children:"Um datastore fornece:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"uma liga\xe7\xe3o \xe0 base de dados 4D"}),"\n",(0,o.jsx)(a.li,{children:"um conjunto de classes de dados para trabalhar com a base de dados"}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"O banco de dados pode ser um banco de dados local 4D (o datastore principal), ou um banco de dados 4D Server exposto como recurso REST (um datastore remote)."}),"\n",(0,o.jsx)(a.p,{children:"Um datastore faz refer\xeancia apenas a uma \xfanica base de dados. \xc9, no entanto, poss\xedvel abrir v\xe1rios reposit\xf3rios de dados para aceder a v\xe1rios bancos de dados."}),"\n",(0,o.jsx)(a.h2,{id:"datastore-class",children:"DataStore class"}),"\n",(0,o.jsx)(a.p,{children:"Classe para objetos datastore, onde \xe9 poss\xedvel adicionar fun\xe7\xf5es personalizadas."}),"\n",(0,o.jsx)(a.h2,{id:"datastoreimplementation",children:"DataStoreImplementation"}),"\n",(0,o.jsxs)(a.p,{children:["Nombre interno de la clase gen\xe9rica DataStore en el class store ",(0,o.jsx)(a.code,{children:"4D"}),"."]}),"\n",(0,o.jsx)(a.h2,{id:"c\xf3pia-profunda",children:"C\xf3pia profunda"}),"\n",(0,o.jsx)(a.p,{children:"Uma c\xf3pia profunda (deep copy) duplica um objeto e todas as refer\xeancias que cont\xe9m. Ap\xf3s uma deep copy, uma cole\xe7\xe3o copiada cont\xe9m os elementos duplicados e, por conseguinte, novas refer\xeancias de todos os elementos originais. Ver tamb\xe9m C\xf3pia superficial."}),"\n",(0,o.jsx)(a.h2,{id:"ds",children:"ds"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"ds"})," es el comando del lenguaje 4D que devuelve una referencia de objeto ",(0,o.jsx)(a.a,{href:"/docs/pt/20-R5/ORDA/dsmapping#datastore",children:"datastore"}),". Corresponde ao datastore dispon\xedvel no banco de dados principal 4D."]}),"\n",(0,o.jsx)(a.h2,{id:"entity",children:"Entity"}),"\n",(0,o.jsx)(a.p,{children:"Uma entidade \xe9 um objeto que corresponde a um modelo de dataclass. Uma entidade cont\xe9m os mesmos atributos que a dataclass."}),"\n",(0,o.jsx)(a.p,{children:"Uma entidade pode ser vista como uma inst\xe2ncia da dataclass, como um registo da tabela que corresponde \xe0 dataclass no seu datastore associado. No entanto, uma entidade tamb\xe9m cont\xe9m dados relacionados. O objetivo da entidade \xe9 gerir dados (criar, atualizar, apagar)."}),"\n",(0,o.jsx)(a.p,{children:"Para mais informa\xe7\xf5es, consulte Entidades."}),"\n",(0,o.jsx)(a.h2,{id:"sele\xe7\xe3o-de-entidades",children:"Sele\xe7\xe3o de entidades"}),"\n",(0,o.jsx)(a.p,{children:"Uma sele\xe7\xe3o de entidades \xe9 um objeto. Quando uma solicita\xe7\xe3o \xe9 enviada ao datastore, uma sele\xe7\xe3o de entidades \xe9 retornada. Uma sele\xe7\xe3o de entidade \xe9 um conjunto de refer\xeancias a entidades relacionadas com a mesma dataclass."}),"\n",(0,o.jsx)(a.p,{children:"Uma sele\xe7\xe3o de entidade cont\xe9m:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"um conjunto de 0 a X refer\xeancias de entidades,"}),"\n",(0,o.jsx)(a.li,{children:"uma propriedade length (sempre),"}),"\n",(0,o.jsx)(a.li,{children:"propriedades queryPlan e queryPath (se solicitadas durante a consulta)."}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Uma sele\xe7\xe3o de entidade tamb\xe9m pode estar vazia."}),"\n",(0,o.jsx)(a.h2,{id:"generic-class",children:"Generic class"}),"\n",(0,o.jsxs)(a.p,{children:["Classe incorporada para objetos ORDA, tais como entidades ou dataclasses. Las funciones y propiedades de las clases gen\xe9ricas est\xe1n disponibles autom\xe1ticamente en las clases usuario extendidas, por ejemplo ",(0,o.jsx)(a.code,{children:"EmployeeEntity"}),"."]}),"\n",(0,o.jsx)(a.h2,{id:"lazy-loading",children:"Lazy loading"}),"\n",(0,o.jsx)(a.p,{children:"Uma vez que as entidades s\xe3o geridas como refer\xeancias, os dados s\xf3 s\xe3o carregados quando necess\xe1rio, ou seja, quando se acede a eles no c\xf3digo ou atrav\xe9s de widgets de interface. Este princ\xedpio de otimiza\xe7\xe3o \xe9 chamado lazy loading."}),"\n",(0,o.jsx)(a.h2,{id:"datastore-principal",children:"Datastore principal"}),"\n",(0,o.jsx)(a.p,{children:"O objeto Datastore que corresponde ao banco de dados 4D aberto (aut\xf4nomo ou cliente/servidor). O datastore principal \xe9 devolvido pelo comando ds."}),"\n",(0,o.jsx)(a.h2,{id:"m\xe9todos",children:"M\xe9todos"}),"\n",(0,o.jsx)(a.p,{children:"Os objetos ORDA, tais como datastores, dataclasses, entity selections, e entities, definem as classes de objetos. Fornecem m\xe9todos espec\xedficos para interagir diretamente com eles. Estes m\xe9todos s\xe3o tamb\xe9m designados por fun\xe7\xf5es membro. Estes m\xe9todos s\xe3o utilizados chamando-os a uma inst\xe2ncia do objeto."}),"\n",(0,o.jsxs)(a.p,{children:["Por ejemplo, el m\xe9todo ",(0,o.jsx)(a.code,{children:"query()"})," es una member function de dataclass. Si ha almacenado un objeto dataclass en la variable ",(0,o.jsx)(a.code,{children:"$myClass"}),", puede escribir:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-code4d",children:'$myClass.query("name = smith")\n'})}),"\n",(0,o.jsx)(a.h2,{id:"tipo-de-dados-misto",children:"Tipo de dados misto"}),"\n",(0,o.jsx)(a.p,{children:'Nesta documenta\xe7\xe3o, o tipo de dados "Misto" \xe9 utilizado para designar os v\xe1rios tipos de valores que podem ser armazenados nos atributos de uma dataclass. Inclui:'}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"number"}),"\n",(0,o.jsx)(a.li,{children:"text"}),"\n",(0,o.jsx)(a.li,{children:"null"}),"\n",(0,o.jsx)(a.li,{children:"boolean"}),"\n",(0,o.jsx)(a.li,{children:"date"}),"\n",(0,o.jsx)(a.li,{children:"object"}),"\n",(0,o.jsx)(a.li,{children:"collection"}),"\n",(0,o.jsx)(a.li,{children:"imagem(*)"}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.em,{children:"(*) el tipo Imagen no es soportado por los m\xe9todos estad\xedsticos tales como"})," ",(0,o.jsx)(a.code,{children:"entitySelection.max( )"}),"."]}),"\n",(0,o.jsx)(a.h2,{id:"bloqueio-optimista",children:"Bloqueio optimista"}),"\n",(0,o.jsx)(a.p,{children:'No modo "bloqueio otimista", as entidades n\xe3o s\xe3o bloqueadas explicitamente antes de serem atualizadas. Cada entidade tem um marcador interno que \xe9 automaticamente incrementado sempre que a entidade \xe9 guardada no disco. Os m\xe9todos entity.save( ) ou entity.drop( ) retornar\xe3o um erro se o marcador da entidade carregada e o marcador da entidade no disco n\xe3o coincidirem, ou se a entidade tiver sido exclu\xedda. O bloqueio otimista s\xf3 est\xe1 dispon\xedvel na implementa\xe7\xe3o ORDA. Ver tamb\xe9m "Bloqueio pessimista".'}),"\n",(0,o.jsx)(a.h2,{id:"bloqueio-pessimista",children:"Bloqueio pessimista"}),"\n",(0,o.jsx)(a.p,{children:'Um "bloqueio pessimista" significa que uma entidade \xe9 bloqueada antes de ser acedida, utilizando o m\xe9todo entity.lock( ). Outros processos n\xe3o podem atualizar nem eliminar a entidade at\xe9 esta ser desbloqueada. A linguagem 4D cl\xe1ssica s\xf3 permite bloqueios pessimistas. Ver "Bloqueio optimista".'}),"\n",(0,o.jsx)(a.h2,{id:"privil\xe9gio",children:"Privil\xe9gio"}),"\n",(0,o.jsxs)(a.p,{children:["La capacidad de ejecutar una o varias ",(0,o.jsx)(a.a,{href:"#actions",children:"acciones"})," en ",(0,o.jsx)(a.a,{href:"#resource",children:"recursos"}),". Se pueden reunir varios privilegios en un ",(0,o.jsx)(a.a,{href:"#role",children:"rol"})," seg\xfan la l\xf3gica empresarial."]}),"\n",(0,o.jsx)(a.h2,{id:"propriedade",children:"Propriedade"}),"\n",(0,o.jsxs)(a.p,{children:["Ver ",(0,o.jsx)(a.a,{href:"#attribute",children:"Atributo"}),"."]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:'> Attributes and properties are similar concepts. "Atributo" \xe9 utilizado para designar as propriedades da dataclass que armazenam os dados, enquanto "propriedade" \xe9 mais gen\xe9rico e define um dado armazenado num objeto.'}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"propertypath",children:"PropertyPath"}),"\n",(0,o.jsx)(a.p,{children:'Um propertyPath \xe9 o caminho para uma propriedade num objeto dado. Se a propriedade estiver aninhada em v\xe1rios n\xedveis, cada n\xedvel \xe9 separado por um ponto (".").'}),"\n",(0,o.jsx)(a.h2,{id:"regular-class",children:"Regular class"}),"\n",(0,o.jsx)(a.p,{children:"Classe usu\xe1rio n\xe3o relacionada com um objeto ORDA."}),"\n",(0,o.jsx)(a.h2,{id:"related-dataclass",children:"Related dataclass"}),"\n",(0,o.jsx)(a.p,{children:"Estas s\xe3o dataclasses ligadas pelos atributos de rela\xe7\xe3o."}),"\n",(0,o.jsx)(a.h2,{id:"atributo-relacional",children:"Atributo relacional"}),"\n",(0,o.jsx)(a.p,{children:"Os atributos de rela\xe7\xe3o s\xe3o utilizados para conceitualizar rela\xe7\xf5es entre as dataclasses (N a 1 e 1 a N)."}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Rela\xe7\xe3o N a 1 (a dataclassA referir-se a uma ocorr\xeancia da dataclassB): um atributo da rela\xe7\xe3o est\xe1 dispon\xedvel na dataclassA e referir-se a uma inst\xe2ncia da dataclassB."}),"\n",(0,o.jsx)(a.li,{children:"Rela\xe7\xe3o 1 a N (uma ocorr\xeancia de dataclassB referencia v\xe1rias ocorr\xeancias de dataclassA): um atributo de rela\xe7\xe3o est\xe1 dispon\xedvel na dataclassB e referencia v\xe1rias inst\xe2ncias de dataclassA."}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Um dataclass pode ter atributos de rela\xe7\xe3o recursivos."}),"\n",(0,o.jsx)(a.p,{children:"Numa entidade, o valor de um atributo de rela\xe7\xe3o pode ser uma entidade ou uma sele\xe7\xe3o de entidade."}),"\n",(0,o.jsx)(a.h2,{id:"entidades-relacionadas",children:"Entidades relacionadas"}),"\n",(0,o.jsx)(a.p,{children:"Uma entidade relacionada pode ser vista como a inst\xe2ncia de um atributo de rela\xe7\xe3o numa dataclass."}),"\n",(0,o.jsx)(a.p,{children:"As selec\xe7\xf5es de entidades podem referir-se a entidades relacionadas conforme os atributos de rela\xe7\xe3o definidos nas dataclasses correspondentes."}),"\n",(0,o.jsx)(a.h2,{id:"remote-datastore",children:"Remote datastore"}),"\n",(0,o.jsx)(a.p,{children:"Um banco de dados 4D aberto em 4D ou 4D Server (dispon\xedvel atrav\xe9s de HTTP) e exposto como um recurso REST. Este banco de dados pode ser referenciada localmente como um Datastore a partir de outras esta\xe7\xf5es de trabalho, onde lhe \xe9 atribu\xeddo um locaID. O datastore remoto pode ser utilizado atrav\xe9s de conceitos ORDA (datastore, dataclass, sele\xe7\xe3o de entidades...). Esta utiliza\xe7\xe3o \xe9 submetida a um sistema de licenciamento."}),"\n",(0,o.jsx)(a.h2,{id:"recurso",children:"Recurso"}),"\n",(0,o.jsxs)(a.p,{children:["Un elemento ORDA sobre el que se puede permitir o no cualquier",(0,o.jsx)(a.a,{href:"#action",children:"acci\xf3n"})," en funci\xf3n de un ",(0,o.jsx)(a.a,{href:"#privilege",children:"privilegio"}),". Os recursos dispon\xedveis s\xe3o: o datastore, a dataclass, um atributo dataclass, uma fun\xe7\xe3o do modelo de dados ORDA ou um m\xe9todo projeto."]}),"\n",(0,o.jsx)(a.h2,{id:"role",children:"Role"}),"\n",(0,o.jsxs)(a.p,{children:["Un rol es un ",(0,o.jsx)(a.a,{href:"#privilege",children:"privilegio"})," publicado destinado a ser utilizado por un administrador. Pode conter um ou mais privil\xe9gios."]}),"\n",(0,o.jsx)(a.h2,{id:"session",children:"Session"}),"\n",(0,o.jsx)(a.p,{children:"Quando a aplica\xe7\xe3o 4D se conecta a um datastore remoto, uma sess\xe3o \xe9 criada no 4D Server (HTTP). \xc9 gerado um cookie de sess\xe3o que \xe9 associado ao Id do datastore local."}),"\n",(0,o.jsx)(a.p,{children:"Cada vez que uma nova sess\xe3o \xe9 aberta, \xe9 utilizada uma licen\xe7a. Sempre que uma sess\xe3o \xe9 encerrada, a licen\xe7a \xe9 libertada."}),"\n",(0,o.jsx)(a.p,{children:"As sess\xf5es inativas s\xe3o automaticamente encerradas ap\xf3s um tempo limite. El tiempo de espera por defecto es de 48 horas, puede ser fijado por el desarrollador (debe ser >= 60 minutos)."}),"\n",(0,o.jsx)(a.h2,{id:"c\xf3pia-superficial-shallow-copy",children:"C\xf3pia superficial (Shallow copy)"}),"\n",(0,o.jsx)(a.p,{children:"Uma c\xf3pia superficial apenas duplica a estrutura dos elementos e mant\xe9m as mesmas refer\xeancias internas. Ap\xf3s uma c\xf3pia superficial, duas cole\xe7\xf5es partilhar\xe3o os elementos individuais. Ver tamb\xe9m Deep copy."}),"\n",(0,o.jsx)(a.h2,{id:"stamp",children:"Stamp"}),"\n",(0,o.jsx)(a.p,{children:'Utilizado na tecnologia de bloqueio "otimista". Todas as entidades t\xeam um contador interno, o marcador, incrementado sempre que a entidade \xe9 salva. Ao comparar automaticamente os marcadores entre uma entidade salva e sua vers\xe3o armazenada no disco, 4D pode evitar modifica\xe7\xf5es simult\xe2neas nas mesmas entidades.'}),"\n",(0,o.jsx)(a.h2,{id:"atributo-de-armazenamento",children:"Atributo de armazenamento"}),"\n",(0,o.jsx)(a.p,{children:"Um atributo de armazenamento (\xe0s vezes chamado atributo escalar) \xe9 o tipo mais b\xe1sico de atributo em uma classe de datastore e corresponde mais diretamente a um campo em um banco de dados relacional. Um atributo de armazenamento cont\xe9m um \xfanico valor para cada entidade da classe."})]})}function u(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},221020:(e,a,s)=>{var o=s(296540),d=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,t=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,s){var o,i={},l=null,c=null;for(o in void 0!==s&&(l=""+s),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(c=a.ref),a)r.call(a,o)&&!n.hasOwnProperty(o)&&(i[o]=a[o]);if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===i[o]&&(i[o]=a[o]);return{$$typeof:d,type:e,key:l,ref:c,props:i,_owner:t.current}}a.Fragment=i,a.jsx=l,a.jsxs=l},474848:(e,a,s)=>{e.exports=s(221020)},555990:(e,a,s)=>{s.d(a,{A:()=>o});const o=s.p+"assets/images/mainConcepts-f749b0303b2e0c0e718d1b7cb8374126.png"},28453:(e,a,s)=>{s.d(a,{R:()=>r,x:()=>t});var o=s(296540);const d={},i=o.createContext(d);function r(e){const a=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),o.createElement(i.Provider,{value:a},e.children)}}}]);