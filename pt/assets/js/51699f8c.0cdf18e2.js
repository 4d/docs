"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57685],{603905:(e,a,r)=>{r.d(a,{Zo:()=>m,kt:()=>u});var t=r(667294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),d=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},m=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(r),u=o,v=c["".concat(l,".").concat(u)]||c[u]||p[u]||n;return r?t.createElement(v,s(s({ref:a},m),{},{components:r})):t.createElement(v,s({ref:a},m))}));function u(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<n;d++)s[d]=r[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},542664:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>m});r(667294);var t=r(603905);function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function n(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={id:"variables",title:"Vari\xe1veis."},i=void 0,l={unversionedId:"Concepts/variables",id:"version-19/Concepts/variables",title:"Vari\xe1veis.",description:"Os dados em 4D s\xe3o armazenados de duas formas fundamentalmente diferentes. Os campos armazenam os dados permanentemente no disco; as vari\xe1veis armazenam os dados na mem\xf3ria de forma temporal.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/variables.md",sourceDirName:"Concepts",slug:"/Concepts/variables",permalink:"/docs/pt/19/Concepts/variables",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"variables",title:"Vari\xe1veis."},sidebar:"docs",previous:{title:"Diferente de",permalink:"/docs/pt/19/Concepts/variant"},next:{title:"Arrays",permalink:"/docs/pt/19/Concepts/arrays"}},d={},m=[{value:"Cria\xe7\xe3o de vari\xe1veis",id:"cria\xe7\xe3o-de-vari\xe1veis",level:2},{value:"Usando a palavra-chave <code>var</code>",id:"usando-a-palavra-chave-var",level:3},{value:"Exemplos",id:"exemplos",level:4},{value:"Usando uma directiva C_",id:"usando-uma-directiva-c_",level:3},{value:"Atribui\xe7\xe3o de dados",id:"atribui\xe7\xe3o-de-dados",level:2},{value:"Vari\xe1veis locais, processo e inter-processo",id:"vari\xe1veis-locais-processo-e-inter-processo",level:2},{value:"Vari\xe1veis locais",id:"vari\xe1veis-locais",level:3},{value:"Vari\xe1veis processo",id:"vari\xe1veis-processo",level:3},{value:"Vari\xe1veis interprocesso",id:"vari\xe1veis-interprocesso",level:3}],p={toc:m};function c(e){var{components:a}=e,r=n(e,["components"]);return(0,t.kt)("wrapper",o({},p,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Os dados em 4D s\xe3o armazenados de duas formas fundamentalmente diferentes. ",(0,t.kt)("strong",{parentName:"p"},"Os campos")," armazenam os dados permanentemente no disco; ",(0,t.kt)("strong",{parentName:"p"},"as vari\xe1veis")," armazenam os dados na mem\xf3ria de forma temporal."),(0,t.kt)("p",null,"Quando cria a sua base de dados 4D, especifica os nomes e tipos de campos que pretende utilizar. Com as vari\xe1veis \xe9 mais ou menos a mesma coisa, tamb\xe9m se lhes d\xe1 nomes e tipos diferentes (ver ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/pt/19/Concepts/data-types"}),"Tipos de dados"),")."),(0,t.kt)("p",null,"Ap\xf3s a cria\xe7\xe3o pode usar a vari\xe1vel onde quiser no seu banco de dados. Por exemplo, pode precisar armazenar a vari\xe1vel texto em um campo do mesmo tipo"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"})," [MyTable]MyField:=MyText\n")),(0,t.kt)("p",null,"As vari\xe1veis s\xe3o objetos da linguagem; pode criar e utilizar variables que nunca aparecer\xe3o na tela. Nos seus formul\xe1rios, pode exibir vari\xe1veis (exceto Pointer e BLOB) na tela, introduzir dados neles, e imprimi-los em relat\xf3rios. Desta forma, vari\xe1veis de \xe1rea edit\xe1veis ou n\xe3o edit\xe1veis atuam tal como os campos, e os mesmos controles incorporados est\xe3o dispon\xedveis ao serem criados. Vari\xe1veis formul\xe1rio podem controlar bot\xf5es, list boxes, ar\xe9as de rolagem, bot\xf5es de imagem, e assim por diante, ou exibir resultados de c\xe1lculos que n\xe3o precisam ser salvos."),(0,t.kt)("h2",o({},{id:"cria\xe7\xe3o-de-vari\xe1veis"}),"Cria\xe7\xe3o de vari\xe1veis"),(0,t.kt)("p",null,"You usually create variables by declaring them. A linguagem 4D oferece duas maneiras de declarar vari\xe1veis:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"utilizando a palavra-chave ",(0,t.kt)("inlineCode",{parentName:"li"},"var")," (recomendado, especialmente se o seu c\xf3digo utilizar objectos e classes),"),(0,t.kt)("li",{parentName:"ul"},'using one of the "Compiler" or "Arrays" theme 4D language commands (legacy syntax).')),(0,t.kt)("p",null,"Quando as vari\xe1veis s\xe3o declaradas, s\xe3o inicializadas com o valor predefinido ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/pt/19/Concepts/data-types#default-values"}),(0,t.kt)("strong",{parentName:"a"},"correspondente ao seu tipo")),", que manter\xe3o durante a sess\xe3o, desde que n\xe3o lhes tenha sido ",(0,t.kt)("a",o({parentName:"p"},{href:"#assigning-data"}),"atribu\xeddo"),"."),(0,t.kt)("admonition",o({},{type:"note"}),(0,t.kt)("p",{parentName:"admonition"},"Although it is not recommended, you can create variables simply by using them; you do not necessarily need to formally declare them. For example, to create a variable that will hold the current date plus 30 days, you can write:"),(0,t.kt)("pre",{parentName:"admonition"},(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"})," MyDate:=Current date+30 //MyDate \xe9 criada e obt\xe9m a data atual mais  30 d\xedas\n")),(0,t.kt)("p",{parentName:"admonition"},"When a variable is created before being declared, it is not initialized at the declaration step.")),(0,t.kt)("h3",o({},{id:"usando-a-palavra-chave-var"}),"Usando a palavra-chave ",(0,t.kt)("inlineCode",{parentName:"h3"},"var")),(0,t.kt)("p",null,"Recomenda-se a declara\xe7\xe3o de vari\xe1veis utilizando a palavra-chave ",(0,t.kt)("inlineCode",{parentName:"p"},"var")," , uma vez que esta sintaxe permite associar vari\xe1veis de objeto a classes. A utiliza\xe7\xe3o desta sintaxe melhora as sugest\xf5es do editor de c\xf3digo e as funcionalidades de antecipa\xe7\xe3o de escrita."),(0,t.kt)("p",null,"Para declarar uma vari\xe1vel de qualquer tipo com a palavra-chave ",(0,t.kt)("inlineCode",{parentName:"p"},"var")," , utilize a seguinte sintaxe:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"var <varName>{; <varName2>;...}{ : <varType>}")),(0,t.kt)("p",null,"Por exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"var $myText : Text  //a text variable\nvar myDate1; myDate2 : Date  //several date variables\nvar $myFile : 4D. File  //a file class object variable\nvar $myVar //a variant variable\n")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"varName")," is the variable name, it must comply with the ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/pt/19/Concepts/identifiers"}),"4D rules")," about identifiers.",(0,t.kt)("br",{parentName:"p"}),"\n","This syntax only supports ",(0,t.kt)("a",o({parentName:"p"},{href:"#local-process-and-interprocess-variables"}),"local and process variables")," declarations, thus excluding ",(0,t.kt)("a",o({parentName:"p"},{href:"#interprocess-variables"}),"interprocess variables")," and ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/pt/19/Concepts/arrays"}),"arrays"),"."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"varType")," pode ser:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"um ",(0,t.kt)("a",o({parentName:"li"},{href:"/docs/pt/19/Concepts/data-types"}),"tipo b\xe1sico"),", caso em que a vari\xe1vel cont\xe9m um valor do tipo declarado,"),(0,t.kt)("li",{parentName:"ul"},"uma refer\xeancia \xe0 classe ",(0,t.kt)("a",o({parentName:"li"},{href:"/docs/pt/19/Concepts/classes"}))," (classe 4D ou classe de utilizador), caso em que a vari\xe1vel cont\xe9m uma refer\xeancia a um objeto da classe definida.")),(0,t.kt)("p",null,"Se ",(0,t.kt)("inlineCode",{parentName:"p"},"varType")," for omitido, \xe9 criada uma vari\xe1vel do tipo ",(0,t.kt)("strong",{parentName:"p"},"variante")," ."),(0,t.kt)("p",null,"A tabela seguinte enumera todos os valores ",(0,t.kt)("inlineCode",{parentName:"p"},"varType")," suportados:"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",o({parentName:"tr"},{align:null}),"varType"),(0,t.kt)("th",o({parentName:"tr"},{align:null}),"Conte\xfados"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"Text")),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Valor texto")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"Date")),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Valor data")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"Hora")),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Valor Hora")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"Par\xe2metros")),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Valor booleano")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"Integer")),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Valor inteiro longo")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"Real")),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Valor real")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"Ponteiro")),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Valor ponteiro")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"Imagem")),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Valor imagem")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"Blob")),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Valor BLOB")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"Collection")),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Valor colec\xe7\xe3o")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"Diferente de")),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Valor variant")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"Object")),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Objeto com classe padr\xe3o (",(0,t.kt)("inlineCode",{parentName:"td"},"4D.Object"),")")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"4D.<className>")),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Objecto do nome da classe 4D")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",o({parentName:"tr"},{align:null}),(0,t.kt)("inlineCode",{parentName:"td"},"cs.<className>")),(0,t.kt)("td",o({parentName:"tr"},{align:null}),"Objeto do nome da classe usu\xe1rio")))),(0,t.kt)("h4",o({},{id:"exemplos"}),"Exemplos"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Para declarar vari\xe1veis b\xe1sicas locais e de processo:")),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"var $myText; myText; $vt : Text\nvar myVar //variant\n\nvar $o : Object    \n//equivalent to:  \n\nvar $o : 4D.Object\n//also equivalent to C_OBJECT($o)\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Para declarar vari\xe1veis objeto da classe 4D:")),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"var $myFolder : 4D. Folder\nvar $myFile : 4D. File\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Para declarar as vari\xe1veis objeto da classe usu\xe1rio:")),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"var $myClass : cs. MyClass\nvar $dataclass : cs. Employee\nvar $entity : cs. EmployeeEntity\n")),(0,t.kt)("h3",o({},{id:"usando-uma-directiva-c_"}),"Usando uma directiva C_"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"Nota:")," Os par\xe2metros $1, $2... passados aos m\xe9todos s\xe3o vari\xe1veis locais. Para mais informa\xe7\xf5es, consulte por favor ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/pt/19/Concepts/parameters"}),"Par\xe2metros"),".")),(0,t.kt)("p",null,'As directivas dos comandos do tema "Compilador" permitem-lhe declarar vari\xe1veis de tipos b\xe1sicos.'),(0,t.kt)("p",null,"Por exemplo, se quisermos definir uma vari\xe1vel de texto, escrevemos:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"})," C_TEXT(myText)\n")),(0,t.kt)("p",null,"Seguem-se algumas declara\xe7\xf5es de vari\xe1veis b\xe1sicas:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"})," C_BLOB(vxMyBlob) // A vari\xe1vel processo vxMyBlob se declara como uma vari\xe1vel de tipo BLOB\n C_DATE($vdCurDate) // A vari\xe1vel local $vdCurDate se declara como uma vari\xe1vel de tipo Data\n C_LONGINT(vg1;vg2;vg3) // As 3 vari\xe1veis de processo vg1, vg2 y vg3 se declaram como vari\xe1veis de tipo Inteiro longo\n C_OBJECT($vObj) // A vari\xe1vel local $vObj se declara como uma vari\xe1vel de tipo Objeto\n C_COLLECTION($vCol) // A vari\xe1vel local $vCol se declara como uma vari\xe1ve de tipo Cole\xe7\xe3o\n ARRAY LONGINT(alAnArray;10) //A vari\xe1vel do processo alAnArray se declara como um array Inteiro longo de 10 elementos\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Nota:"),"os arrays s\xe3o um tipo particular de vari\xe1veis. Um array \xe9 uma s\xe9rie ordenada de vari\xe1veis do mesmo tipo. Para mais informa\xe7\xf5es, consulte por favor ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/pt/19/Concepts/arrays"}),"Arrays"),"."),(0,t.kt)("h2",o({},{id:"atribui\xe7\xe3o-de-dados"}),"Atribui\xe7\xe3o de dados"),(0,t.kt)("p",null,"Os dados podem ser colocados e copiados de vari\xe1veis e arrays. Colocar dados em uma vari\xe1vel \xe9 chamado ",(0,t.kt)("strong",{parentName:"p"},"atribuiindo os dados a uma vari\xe1vel")," e \xe9 feito com o operador de atribui\xe7\xe3o (:=). O operador de atribui\xe7\xe3o tamb\xe9m \xe9 usado para atribuir dados para elementos campos."),(0,t.kt)("p",null,"O operador de atribui\xe7\xe3o \xe9 a maneira mais importante de criar uma vari\xe1vel e jogar dados nela. Escreve-se o nome da vari\xe1vel que se pretende criar no lado esquerdo do operador de atribui\xe7\xe3o. Por exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"MyNumber:=3\n")),(0,t.kt)("p",null,"cria a vari\xe1vel ",(0,t.kt)("em",{parentName:"p"},"MyNumber")," e coloca o n\xfamero 3 na mesma. Se o MyNumber j\xe1 existe, ent\xe3o o n\xfamero 3 \xe9 apenas colocado nele."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"It is usually not recommended to create variables without ",(0,t.kt)("a",o({parentName:"p"},{href:"#creating-variables"}),"declaring their type"),".")),(0,t.kt)("p",null,"Naturalmente, as vari\xe1veis n\xe3o seriam muito \xfateis se n\xe3o se conseguisse obter dados delas. Mais uma vez, utiliza-se o operador de atribui\xe7\xe3o. Se precisar  colocar o valor do MyNumber num campo chamado ","[Products]","Size, escreva ",(0,t.kt)("em",{parentName:"p"},"MyNumber")," no lado direito do operador de atribui\xe7\xe3o:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"[Products]Size:=MyNumber\n")),(0,t.kt)("p",null,"Neste caso, ",(0,t.kt)("em",{parentName:"p"},"[Products]","Tamanho")," seria igual a 3. Este exemplo \xe9 bastante simples, mas ilustra a forma fundamental como os dados s\xe3o transferidos de um local para outro utilizando a l\xedngua."),(0,t.kt)("p",null,"Atribui-se dados a elementos de matriz utilizando chaves ({...}):"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'atNames{1}:="Richard"\n')),(0,t.kt)("h2",o({},{id:"vari\xe1veis-locais-processo-e-inter-processo"}),"Vari\xe1veis locais, processo e inter-processo"),(0,t.kt)("p",null,"Pode criar tr\xeas tipos de vari\xe1veis: ",(0,t.kt)("strong",{parentName:"p"},"local"),", ",(0,t.kt)("strong",{parentName:"p"},"processo"),", e ",(0,t.kt)("strong",{parentName:"p"},"interprocesso"),". A diferen\xe7a entre os tr\xeas tipos de elementos \xe9 o seu alcance, ou os objectos para os quais est\xe3o dispon\xedveis."),(0,t.kt)("h3",o({},{id:"vari\xe1veis-locais"}),"Vari\xe1veis locais"),(0,t.kt)("p",null,'Uma vari\xe1vel local \xe9, como o seu nome indica, local para um m\xe9todo - apenas acess\xedvel dentro do m\xe9todo em que foi criada e n\xe3o acess\xedvel fora desse m\xe9todo. Ser local a um m\xe9todo \xe9 formalmente referido como sendo "de \xe2mbito local". As vari\xe1veis locais s\xe3o utilizadas para restringir uma vari\xe1vel de modo a que esta funcione apenas dentro do m\xe9todo.'),(0,t.kt)("p",null,"Poder\xe1 querer utilizar uma vari\xe1vel local para:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Evitar conflitos com os nomes de outras vari\xe1veis"),(0,t.kt)("li",{parentName:"ul"},"Utilizar dados temporariamente"),(0,t.kt)("li",{parentName:"ul"},"Reduzir o n\xfamero de vari\xe1veis do processo")),(0,t.kt)("p",null,"O nome de uma vari\xe1vel local come\xe7a sempre com um sinal de d\xf3lar ($) e pode conter at\xe9 31 caracteres adicionais. Se introduzir um nome mais longo, 4D trunca o nome com o comprimento apropriado."),(0,t.kt)("p",null,"Quando trabalhar em um banco de dados com muitos m\xe9todos e vari\xe1veis, geralmente s\xf3 precisa usar uma vari\xe1vel dentro do m\xe9todo no qual trabalha. Pode criar e utilizar uma vari\xe1vel local no m\xe9todo sem se preocupar se utilizou o mesmo nome de vari\xe1vel noutro lugar."),(0,t.kt)("p",null,"Frequentemente, em um banco de dados, pequenas peda\xe7os de informa\xe7\xe3o s\xe3o necess\xe1rios do usu\xe1rio. O comando ",(0,t.kt)("inlineCode",{parentName:"p"},"Request")," pode obter esta informa\xe7\xe3o. Apresenta uma caixa de di\xe1logo com uma mensagem que solicita ao utilizador uma resposta. Quando o utilizador introduz a resposta, o comando devolve a informa\xe7\xe3o que o utilizador introduziu. Normalmente n\xe3o precisa de manter esta informa\xe7\xe3o nos seus m\xe9todos durante muito tempo. Esta \xe9 uma forma t\xedpica de utilizar uma vari\xe1vel local. Aqui um exemplo simples:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $vsID:=Request("Por favor insira o seu ID:")\n If(OK=1)\n    QUERY([People];[People]ID =$vsID)\n End if\n')),(0,t.kt)("p",null,"Este m\xe9todo pede simplesmente ao utilizador que introduza uma identifica\xe7\xe3o. Coloca a resposta numa vari\xe1vel local, $vsID, e depois procura o ID que o utilizador introduziu. Quando este m\xe9todo termina, a vari\xe1vel local $vsID \xe9 apagada da mem\xf3ria. Isto \xe9 \xf3timo, porque a vari\xe1vel \xe9 necess\xe1ria apenas uma vez e apenas neste m\xe9todo."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Nota:")," Os par\xe2metros $1, $2... passados para os m\xe9todos s\xe3o vari\xe1veis locais. Para mais informa\xe7\xf5es, consultar ",(0,t.kt)("a",o({parentName:"p"},{href:"/docs/pt/19/Concepts/parameters"}),"Par\xe2metros"),"."),(0,t.kt)("h3",o({},{id:"vari\xe1veis-processo"}),"Vari\xe1veis processo"),(0,t.kt)("p",null,"Uma vari\xe1vel de processo s\xf3 est\xe1 dispon\xedvel dentro de um processo. \xc9 acess\xedvel ao m\xe9todo do processo e a qualquer outro m\xe9todo chamado de dentro do processo."),(0,t.kt)("p",null,"Uma vari\xe1vel de processo n\xe3o tem um prefixo antes do seu nome. Um nome de vari\xe1vel de processo pode conter at\xe9 31 caracteres."),(0,t.kt)("p",null,'No modo interpretado, as vari\xe1veis s\xe3o mantidas dinamicamente; s\xe3o criadas e apagadas da mem\xf3ria "on the fly". No modo compilado, todos os processos que cria (processos de usu\xe1rio) partilham a mesma defini\xe7\xe3o de vari\xe1veis de processo, mas cada processo tem um exemplo diferente para cada vari\xe1vel. Por exemplo, a vari\xe1vel myVar \xe9 uma vari\xe1vel no processo P_1 e outra no processo P_2.'),(0,t.kt)("p",null,'Um processo pode "espiar e cutucar" vari\xe1veis de processo de outro processo usando os comandos ',(0,t.kt)("inlineCode",{parentName:"p"},"GET PROCESS VARIABLE")," e ",(0,t.kt)("inlineCode",{parentName:"p"},"SET PROCESS VARIABLE"),". \xc9 boa pr\xe1tica de programa\xe7\xe3o restringir a utiliza\xe7\xe3o destes comandos \xe0 situa\xe7\xe3o para a qual foram adicionados \xe0 4D:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Comunica\xe7\xe3o interprocessada em locais espec\xedficos ou o seu c\xf3digo"),(0,t.kt)("li",{parentName:"ul"},"Gest\xe3o de arrastar e soltar entre processos"),(0,t.kt)("li",{parentName:"ul"},"Em Cliente/Servidor, comunica\xe7\xe3o entre os processos nas m\xe1quinas do cliente e os procedimentos armazenados a correr nas m\xe1quinas do servidor")),(0,t.kt)("p",null,"Para mais informa\xe7\xf5es, ver o cap\xedtulo ",(0,t.kt)("strong",{parentName:"p"},"Processos")," e a descri\xe7\xe3o destes comandos."),(0,t.kt)("h3",o({},{id:"vari\xe1veis-interprocesso"}),"Vari\xe1veis interprocesso"),(0,t.kt)("p",null,"As vari\xe1veis interprocessadas est\xe3o dispon\xedveis em toda a base de dados e s\xe3o partilhadas em todos os processos cooperativos. S\xe3o utilizados principalmente para partilhar informa\xe7\xe3o entre processos."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"O uso de vari\xe1veis interprocessadas n\xe3o \xe9 recomendado, uma vez que n\xe3o est\xe3o dispon\xedveis a partir de processos preventivos e tendem a tornar o c\xf3digo mais dif\xedcil para manuten\xe7\xe3o.")),(0,t.kt)("p",null,"O nome de uma vari\xe1vel interprocessada come\xe7a sempre com os s\xedmbolos (",(0,t.kt)("inlineCode",{parentName:"p"},"<>"),') - um sinal "menor que" seguido de um sinal "maior do que" - seguido de 31 caracteres.'),(0,t.kt)("p",null,"Em Cliente/Servidor, cada m\xe1quina (m\xe1quinas Cliente e m\xe1quina Servidor) partilham a mesma defini\xe7\xe3o de vari\xe1veis interprocessadas, mas cada m\xe1quina tem um exemplo diferente para cada vari\xe1vel."))}c.isMDXComponent=!0}}]);