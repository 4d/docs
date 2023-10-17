"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27653],{603905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>u});var r=t(667294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return r.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),u=o,v=c["".concat(l,".").concat(u)]||c[u]||m[u]||n;return t?r.createElement(v,i(i({ref:a},p),{},{components:t})):r.createElement(v,i({ref:a},p))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=c;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<n;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},142145:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});t(667294);var r=t(603905);function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function n(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={id:"variables",title:"Vari\xe1veis."},s=void 0,l={unversionedId:"Concepts/variables",id:"version-20-R3/Concepts/variables",title:"Vari\xe1veis.",description:"Os dados em 4D s\xe3o armazenados de duas formas fundamentalmente diferentes. Os campos armazenam os dados permanentemente no disco; as vari\xe1veis armazenam os dados na mem\xf3ria de forma temporal.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R3/Concepts/variables.md",sourceDirName:"Concepts",slug:"/Concepts/variables",permalink:"/docs/pt/Concepts/variables",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"variables",title:"Vari\xe1veis."},sidebar:"docs",previous:{title:"Diferente de",permalink:"/docs/pt/Concepts/variant"},next:{title:"Arrays",permalink:"/docs/pt/Concepts/arrays"}},d={},p=[{value:"Cria\xe7\xe3o de vari\xe1veis",id:"cria\xe7\xe3o-de-vari\xe1veis",level:2},{value:"Usando a palavra-chave <code>var</code>",id:"usando-a-palavra-chave-var",level:3},{value:"Exemplos",id:"exemplos",level:4},{value:"Initializing Variables in the Declaration Line",id:"initializing-variables-in-the-declaration-line",level:2},{value:"Atribui\xe7\xe3o de dados",id:"atribui\xe7\xe3o-de-dados",level:2},{value:"Vari\xe1veis locais, processo e inter-processo",id:"vari\xe1veis-locais-processo-e-inter-processo",level:2},{value:"Vari\xe1veis locais",id:"vari\xe1veis-locais",level:3},{value:"Vari\xe1veis processo",id:"vari\xe1veis-processo",level:3},{value:"Vari\xe1veis interprocesso",id:"vari\xe1veis-interprocesso",level:3}],m={toc:p};function c(e){var{components:a}=e,t=n(e,["components"]);return(0,r.kt)("wrapper",o({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Os dados em 4D s\xe3o armazenados de duas formas fundamentalmente diferentes. ",(0,r.kt)("strong",{parentName:"p"},"Os campos")," armazenam os dados permanentemente no disco; ",(0,r.kt)("strong",{parentName:"p"},"as vari\xe1veis")," armazenam os dados na mem\xf3ria de forma temporal."),(0,r.kt)("p",null,"Quando cria a sua base de dados 4D, especifica os nomes e tipos de campos que pretende utilizar. Com as vari\xe1veis \xe9 mais ou menos a mesma coisa, tamb\xe9m se lhes d\xe1 nomes e tipos diferentes (ver ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/pt/Concepts/data-types"}),"Tipos de dados"),")."),(0,r.kt)("p",null,"Ap\xf3s a cria\xe7\xe3o pode usar a vari\xe1vel onde quiser no seu banco de dados. Por exemplo, pode precisar armazenar a vari\xe1vel texto em um campo do mesmo tipo"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"})," [MyTable]MyField:=MyText\n")),(0,r.kt)("p",null,"As vari\xe1veis s\xe3o objetos da linguagem; pode criar e utilizar variables que nunca aparecer\xe3o na tela. Nos seus formul\xe1rios, pode exibir vari\xe1veis (exceto Pointer e BLOB) na tela, introduzir dados neles, e imprimi-los em relat\xf3rios. Desta forma, vari\xe1veis de \xe1rea edit\xe1veis ou n\xe3o edit\xe1veis atuam tal como os campos, e os mesmos controles incorporados est\xe3o dispon\xedveis ao serem criados. Vari\xe1veis formul\xe1rio podem controlar bot\xf5es, list boxes, ar\xe9as de rolagem, bot\xf5es de imagem, e assim por diante, ou exibir resultados de c\xe1lculos que n\xe3o precisam ser salvos."),(0,r.kt)("h2",o({},{id:"cria\xe7\xe3o-de-vari\xe1veis"}),"Cria\xe7\xe3o de vari\xe1veis"),(0,r.kt)("p",null,"Cria-se vari\xe1veis declarando-as. A linguagem 4D oferece duas maneiras de declarar vari\xe1veis:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"utilizando a palavra-chave ",(0,r.kt)("inlineCode",{parentName:"li"},"var")," (recomendado, especialmente se o seu c\xf3digo utilizar objectos e classes),"),(0,r.kt)("li",{parentName:"ul"},'Voc\xea cria as vari\xe1veis declarando-as mediante um dos comandos dos temas "Compilador" ou "Arrays".')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nota:")," apesar de n\xe3o recomendado, pode criar vari\xe1veis simplesmente usando-as; n\xe3o precisa definir as vari\xe1veis formalmente como se faz com os campos. Por exemplo, se quiser criar uma vari\xe1vel que contenha a data atual mais 30 dias, pode escrever:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"})," MyDate:=Current date+30 //MyDate \xe9 criada e obt\xe9m a data atual mais  30 d\xedas\n")),(0,r.kt)("p",null,"When variables are declared, they are initialized to the ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/pt/Concepts/data-types#default-values"}),(0,r.kt)("strong",{parentName:"a"},"default value corresponding to their type")),", which they will keep during the session as long as they have not been ",(0,r.kt)("a",o({parentName:"p"},{href:"#assigning-data"}),"assigned"),". Alternatively, when declaring variables, you can ",(0,r.kt)("a",o({parentName:"p"},{href:"#initializing-variables-in-the-declaration-line"}),"initialize")," their value along with their data type all within one line."),(0,r.kt)("h3",o({},{id:"usando-a-palavra-chave-var"}),"Usando a palavra-chave ",(0,r.kt)("inlineCode",{parentName:"h3"},"var")),(0,r.kt)("p",null,"Recomenda-se a declara\xe7\xe3o de vari\xe1veis utilizando a palavra-chave ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," , uma vez que esta sintaxe permite associar vari\xe1veis de objeto a classes. A utiliza\xe7\xe3o desta sintaxe melhora as sugest\xf5es do editor de c\xf3digo e as funcionalidades de antecipa\xe7\xe3o de escrita."),(0,r.kt)("p",null,"Para declarar uma vari\xe1vel de qualquer tipo com a palavra-chave ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," , utilize a seguinte sintaxe:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"var <varName>{; <varName2>;...}{ : <varType>}")),(0,r.kt)("p",null,"Por exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"var $myText : Text  //a text variable\nvar myDate1; myDate2 : Date  //several date variables\nvar $myFile : 4D. File  //a file class object variable\nvar $myVar //a variant variable\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"varName")," \xe9 o nome da vari\xe1vel, que deve estar em conformidade com as regras ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/pt/Concepts/identifiers"}),"4D")," sobre identificadores. Esta sintaxe apenas suporta ",(0,r.kt)("a",o({parentName:"p"},{href:"#local-process-and-interprocess-variables"}),"declara\xe7\xf5es de vari\xe1veis locais e de processo")," , excluindo assim ",(0,r.kt)("a",o({parentName:"p"},{href:"#interprocess-variables"}),"vari\xe1veis inter-processo")," e ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/pt/Concepts/arrays"}),"matrizes"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"varType")," pode ser:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"um ",(0,r.kt)("a",o({parentName:"li"},{href:"/docs/pt/Concepts/data-types"}),"tipo b\xe1sico"),", caso em que a vari\xe1vel cont\xe9m um valor do tipo declarado,"),(0,r.kt)("li",{parentName:"ul"},"uma refer\xeancia \xe0 classe ",(0,r.kt)("a",o({parentName:"li"},{href:"/docs/pt/Concepts/classes"}))," (classe 4D ou classe de utilizador), caso em que a vari\xe1vel cont\xe9m uma refer\xeancia a um objeto da classe definida.")),(0,r.kt)("p",null,"Se ",(0,r.kt)("inlineCode",{parentName:"p"},"varType")," for omitido, \xe9 criada uma vari\xe1vel do tipo ",(0,r.kt)("strong",{parentName:"p"},"variante")," ."),(0,r.kt)("p",null,"A tabela seguinte enumera todos os valores ",(0,r.kt)("inlineCode",{parentName:"p"},"varType")," suportados:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"varType"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Conte\xfados"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Text")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Valor texto")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Date")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Valor data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Hora")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Valor Hora")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Par\xe2metros")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Valor booleano")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Integer")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Valor inteiro longo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Real")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Valor real")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Ponteiro")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Valor ponteiro")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Imagem")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Valor imagem")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Blob")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Valor BLOB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Collection")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Valor colec\xe7\xe3o")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Diferente de")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Valor variant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Object with default class (4D.Object)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"4D.<className>")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Objecto do nome da classe 4D")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"cs.<className>")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Objeto do nome da classe usu\xe1rio")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"cs.<namespace><className>")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"For a class constructor function, the ",(0,r.kt)("inlineCode",{parentName:"td"},"Current method name")," command returns:  ",(0,r.kt)("inlineCode",{parentName:"td"},"<ClassName>:constructor"),', for example "MyClass:constructor".')))),(0,r.kt)("h4",o({},{id:"exemplos"}),"Exemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Para declarar vari\xe1veis b\xe1sicas locais e de processo:")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"var $myText; myText; $vt : Text\nvar myVar //variant\n\nvar $o : Object    \n//equivalent to:  \nvar $o : 4D. Object\n//also equivalent to C_OBJECT($o)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Para declarar vari\xe1veis objeto da classe 4D:")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"var $myFolder : 4D. Folder\nvar $myFile : 4D. File\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Para declarar as vari\xe1veis objeto da classe usu\xe1rio:")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"var $myClass : cs. MyClass\nvar $dataclass : cs. Employee\nvar $entity : cs. EmployeeEntity\n")),(0,r.kt)("h2",o({},{id:"initializing-variables-in-the-declaration-line"}),"Initializing Variables in the Declaration Line"),(0,r.kt)("p",null,"When declaring variables, you have the flexibility to specify their data type and provide an initial value in one statement. Aqui est\xe3o alguns exemplos:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'var $a : Text:="hello"\nvar $b : Date:=!2023-09-12!\nvar $c : Object:=New object()\nvar $d : cs.Customer:=cs.Customer.new()\n')),(0,r.kt)("p",null,"Variables can also be declared and initialized without explicitly mentioning their data type, in which case their type will be inferred by 4D. Aqui est\xe3o alguns exemplos:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'var $text:="hello"  // Inferred as Text \nvar $number:=20  // Inferred as Real \nvar $obj:={}  // Inferred as an Object \nvar $mycol:=[]  // Inferred as a Collection  \n\n')),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"The inferred type might be different between ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/pt/Concepts/interpreted-compiled"}),"interpreted and compiled mode")," if the evaluation of the value is too ambiguous. In this case, a warning is generated by the compiler and a variant type is used. For example, in the following $a type will be correctly inferred in interpreted mode (Text), but the syntax checking will generate a warning and $a will be typed as a variant for the compiled mode."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'var $class:={test: "a"}\nvar $a:=$class.test\n\n'))),(0,r.kt)("p",null,"4D tenta deduzir o tipo mais geral. For instance, it uses the Real type rather than the Integer type when a variable is initialized with an integer value (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"var $a:=10 //Real type is inferred"),"). In such cases, or when initializing a variable with a complex type such as class instantiation, it is recommended to pass the type explicitly."),(0,r.kt)("p",null,"In most cases, all variable types are automatically determined. The exception is when you assign a value to a process or interprocess variable, which then triggers a warning message."),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Multiple assignments in one line are not supported:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"var $a; $b : Integer:=15 //erro\n\n"))),(0,r.kt)("h2",o({},{id:"atribui\xe7\xe3o-de-dados"}),"Atribui\xe7\xe3o de dados"),(0,r.kt)("p",null,"Os dados podem ser colocados e copiados de vari\xe1veis e arrays. Colocar dados em uma vari\xe1vel \xe9 chamado ",(0,r.kt)("strong",{parentName:"p"},"atribuiindo os dados a uma vari\xe1vel")," e \xe9 feito com o operador de atribui\xe7\xe3o (:=). O operador de atribui\xe7\xe3o tamb\xe9m \xe9 usado para atribuir dados para elementos campos."),(0,r.kt)("p",null,"O operador de atribui\xe7\xe3o \xe9 a maneira mais importante de criar uma vari\xe1vel e jogar dados nela. Escreve-se o nome da vari\xe1vel que se pretende criar no lado esquerdo do operador de atribui\xe7\xe3o. Por exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"MyNumber:=3\n")),(0,r.kt)("p",null,"cria a vari\xe1vel ",(0,r.kt)("em",{parentName:"p"},"MyNumber")," e coloca o n\xfamero 3 na mesma. Se o MyNumber j\xe1 existe, ent\xe3o o n\xfamero 3 \xe9 apenas colocado nele."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Normalmente, n\xe3o se recomenda a cria\xe7\xe3o de vari\xe1veis sem ",(0,r.kt)("a",o({parentName:"p"},{href:"#declaring-variables"}),"declarar o seu tipo"),".")),(0,r.kt)("p",null,"Naturalmente, as vari\xe1veis n\xe3o seriam muito \xfateis se n\xe3o se conseguisse obter dados delas. Mais uma vez, utiliza-se o operador de atribui\xe7\xe3o. Se precisar  colocar o valor do MyNumber num campo chamado ","[Products]","Size, escreva ",(0,r.kt)("em",{parentName:"p"},"MyNumber")," no lado direito do operador de atribui\xe7\xe3o:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"[Products]Size:=MyNumber\n")),(0,r.kt)("p",null,"Neste caso, ",(0,r.kt)("em",{parentName:"p"},"[Products]","Tamanho")," seria igual a 3. Este exemplo \xe9 bastante simples, mas ilustra a forma fundamental como os dados s\xe3o transferidos de um local para outro utilizando a l\xedngua."),(0,r.kt)("p",null,"Atribui-se dados a elementos de matriz utilizando chaves ({...}):"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'atNames{1}:="Richard"\n')),(0,r.kt)("h2",o({},{id:"vari\xe1veis-locais-processo-e-inter-processo"}),"Vari\xe1veis locais, processo e inter-processo"),(0,r.kt)("p",null,"Pode criar tr\xeas tipos de vari\xe1veis: ",(0,r.kt)("strong",{parentName:"p"},"local"),", ",(0,r.kt)("strong",{parentName:"p"},"processo"),", e ",(0,r.kt)("strong",{parentName:"p"},"interprocesso"),". A diferen\xe7a entre os tr\xeas tipos de elementos \xe9 o seu alcance, ou os objectos para os quais est\xe3o dispon\xedveis."),(0,r.kt)("h3",o({},{id:"vari\xe1veis-locais"}),"Vari\xe1veis locais"),(0,r.kt)("p",null,'Uma vari\xe1vel local \xe9, como o seu nome indica, local para um m\xe9todo - apenas acess\xedvel dentro do m\xe9todo em que foi criada e n\xe3o acess\xedvel fora desse m\xe9todo. Ser local a um m\xe9todo \xe9 formalmente referido como sendo "de \xe2mbito local". As vari\xe1veis locais s\xe3o utilizadas para restringir uma vari\xe1vel de modo a que esta funcione apenas dentro do m\xe9todo.'),(0,r.kt)("p",null,"Poder\xe1 querer utilizar uma vari\xe1vel local para:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Evitar conflitos com os nomes de outras vari\xe1veis"),(0,r.kt)("li",{parentName:"ul"},"Utilizar dados temporariamente"),(0,r.kt)("li",{parentName:"ul"},"Reduzir o n\xfamero de vari\xe1veis do processo")),(0,r.kt)("p",null,"O nome de uma vari\xe1vel local come\xe7a sempre com um sinal de d\xf3lar ($) e pode conter at\xe9 31 caracteres adicionais. Se introduzir um nome mais longo, 4D trunca o nome com o comprimento apropriado."),(0,r.kt)("p",null,"Quando trabalhar em um banco de dados com muitos m\xe9todos e vari\xe1veis, geralmente s\xf3 precisa usar uma vari\xe1vel dentro do m\xe9todo no qual trabalha. Pode criar e utilizar uma vari\xe1vel local no m\xe9todo sem se preocupar se utilizou o mesmo nome de vari\xe1vel noutro lugar."),(0,r.kt)("p",null,"Frequentemente, em um banco de dados, pequenas peda\xe7os de informa\xe7\xe3o s\xe3o necess\xe1rios do usu\xe1rio. O comando ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," pode obter esta informa\xe7\xe3o. Apresenta uma caixa de di\xe1logo com uma mensagem que solicita ao utilizador uma resposta. Quando o utilizador introduz a resposta, o comando devolve a informa\xe7\xe3o que o utilizador introduziu. Normalmente n\xe3o precisa de manter esta informa\xe7\xe3o nos seus m\xe9todos durante muito tempo. Esta \xe9 uma forma t\xedpica de utilizar uma vari\xe1vel local. Aqui um exemplo simples:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $vsID:=Request("Por favor insira o seu ID:")\n If(OK=1)\n    QUERY([People];[People]ID =$vsID)\n End if\n')),(0,r.kt)("p",null,"Este m\xe9todo pede simplesmente ao utilizador que introduza uma identifica\xe7\xe3o. Coloca a resposta numa vari\xe1vel local, $vsID, e depois procura o ID que o utilizador introduziu. Quando este m\xe9todo termina, a vari\xe1vel local $vsID \xe9 apagada da mem\xf3ria. Isto \xe9 \xf3timo, porque a vari\xe1vel \xe9 necess\xe1ria apenas uma vez e apenas neste m\xe9todo."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nota:")," Os par\xe2metros $1, $2... passados para os m\xe9todos s\xe3o vari\xe1veis locais. Para mais informa\xe7\xf5es, consultar ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/pt/Concepts/parameters"}),"Par\xe2metros"),"."),(0,r.kt)("h3",o({},{id:"vari\xe1veis-processo"}),"Vari\xe1veis processo"),(0,r.kt)("p",null,"Uma vari\xe1vel de processo s\xf3 est\xe1 dispon\xedvel dentro de um processo. \xc9 acess\xedvel ao m\xe9todo do processo e a qualquer outro m\xe9todo chamado de dentro do processo."),(0,r.kt)("p",null,"Uma vari\xe1vel de processo n\xe3o tem um prefixo antes do seu nome. Um nome de vari\xe1vel de processo pode conter at\xe9 31 caracteres."),(0,r.kt)("p",null,'No modo interpretado, as vari\xe1veis s\xe3o mantidas dinamicamente; s\xe3o criadas e apagadas da mem\xf3ria "on the fly". No modo compilado, todos os processos que cria (processos de usu\xe1rio) partilham a mesma defini\xe7\xe3o de vari\xe1veis de processo, mas cada processo tem um exemplo diferente para cada vari\xe1vel. Por exemplo, a vari\xe1vel myVar \xe9 uma vari\xe1vel no processo P_1 e outra no processo P_2.'),(0,r.kt)("p",null,'Um processo pode "espiar e cutucar" vari\xe1veis de processo de outro processo usando os comandos ',(0,r.kt)("inlineCode",{parentName:"p"},"GET PROCESS VARIABLE")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"SET PROCESS VARIABLE"),". \xc9 boa pr\xe1tica de programa\xe7\xe3o restringir a utiliza\xe7\xe3o destes comandos \xe0 situa\xe7\xe3o para a qual foram adicionados \xe0 4D:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Comunica\xe7\xe3o interprocessada em locais espec\xedficos ou o seu c\xf3digo"),(0,r.kt)("li",{parentName:"ul"},"Gest\xe3o de arrastar e soltar entre processos"),(0,r.kt)("li",{parentName:"ul"},"Em Cliente/Servidor, comunica\xe7\xe3o entre os processos nas m\xe1quinas do cliente e os procedimentos armazenados a correr nas m\xe1quinas do servidor")),(0,r.kt)("p",null,"Para mais informa\xe7\xf5es, ver o cap\xedtulo ",(0,r.kt)("strong",{parentName:"p"},"Processos")," e a descri\xe7\xe3o destes comandos."),(0,r.kt)("h3",o({},{id:"vari\xe1veis-interprocesso"}),"Vari\xe1veis interprocesso"),(0,r.kt)("p",null,"As vari\xe1veis interprocessadas est\xe3o dispon\xedveis em toda a base de dados e s\xe3o partilhadas em todos os processos cooperativos. S\xe3o utilizados principalmente para partilhar informa\xe7\xe3o entre processos."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"O uso de vari\xe1veis interprocessadas n\xe3o \xe9 recomendado, uma vez que n\xe3o est\xe3o dispon\xedveis a partir de processos preventivos e tendem a tornar o c\xf3digo mais dif\xedcil para manuten\xe7\xe3o.")),(0,r.kt)("p",null,"O nome de uma vari\xe1vel interprocessada come\xe7a sempre com os s\xedmbolos (",(0,r.kt)("inlineCode",{parentName:"p"},"<>"),') - um sinal "menor que" seguido de um sinal "maior do que" - seguido de 31 caracteres.'),(0,r.kt)("p",null,"Em Cliente/Servidor, cada m\xe1quina (m\xe1quinas Cliente e m\xe1quina Servidor) partilham a mesma defini\xe7\xe3o de vari\xe1veis interprocessadas, mas cada m\xe1quina tem um exemplo diferente para cada vari\xe1vel."))}c.isMDXComponent=!0}}]);