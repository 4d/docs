"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12343],{603905:(e,a,o)=>{o.d(a,{Zo:()=>p,kt:()=>c});var t=o(667294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var m=t.createContext({}),i=function(e){var a=t.useContext(m),o=a;return e&&(o="function"==typeof e?e(a):l(l({},a),e)),o},p=function(e){var a=i(e.components);return t.createElement(m.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},b=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,n=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=i(o),c=r,u=b["".concat(m,".").concat(c)]||b[c]||d[c]||n;return o?t.createElement(u,l(l({ref:a},p),{},{components:o})):t.createElement(u,l({ref:a},p))}));function c(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=o.length,l=new Array(n);l[0]=b;var s={};for(var m in a)hasOwnProperty.call(a,m)&&(s[m]=a[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<n;i++)l[i]=o[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}b.displayName="MDXCreateElement"},177439:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>m,toc:()=>p});o(667294);var t=o(603905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},r.apply(this,arguments)}function n(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const l={id:"blob",title:"BLOB"},s=void 0,m={unversionedId:"Concepts/blob",id:"version-20/Concepts/blob",title:"BLOB",description:"Para passar um BLOB a seus pr\xf3prios m\xe9todos, pode tamb\xe9m definir um ponteiro ao BLOB e passar o ponteiro como um par\xe2metro.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Concepts/dt_blob.md",sourceDirName:"Concepts",slug:"/Concepts/blob",permalink:"/docs/pt/20/Concepts/blob",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_blob.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"blob",title:"BLOB"},sidebar:"docs",previous:{title:"Tipos de dados",permalink:"/docs/pt/20/Concepts/data-types"},next:{title:"Par\xe2metros",permalink:"/docs/pt/20/Concepts/boolean"}},i={},p=[{value:"Tipos de Blob",id:"tipos-de-blob",level:2},{value:"Verificar se uma vari\xe1vel cont\xe9m um blob escalar ou um <code>4D. Blob</code>",id:"verificar-se-uma-vari\xe1vel-cont\xe9m-um-blob-escalar-ou-um-4d-blob",level:2},{value:"Passagem de blobs como par\xe2metros",id:"passagem-de-blobs-como-par\xe2metros",level:2},{value:"Passagem de blobs e objectos blob para comandos 4D",id:"passagem-de-blobs-e-objectos-blob-para-comandos-4d",level:3},{value:"Passagem de blobs e objectos blob para m\xe9todos",id:"passagem-de-blobs-e-objectos-blob-para-m\xe9todos",level:3},{value:"Passar um blob escalar por refer\xeancia usando um ponteiro",id:"passar-um-blob-escalar-por-refer\xeancia-usando-um-ponteiro",level:3},{value:"Atribui\xe7\xe3o de uma vari\xe1vel blob a outra",id:"atribui\xe7\xe3o-de-uma-vari\xe1vel-blob-a-outra",level:2},{value:"Convers\xe3o autom\xe1tica do tipo blob",id:"convers\xe3o-autom\xe1tica-do-tipo-blob",level:2},{value:"Modifica\xe7\xe3o de um blob escalar",id:"modifica\xe7\xe3o-de-um-blob-escalar",level:2},{value:"Acesso individual a bytes num blob",id:"acesso-individual-a-bytes-num-blob",level:2},{value:"Acesso aos bytes de um blob escalar",id:"acesso-aos-bytes-de-um-blob-escalar",level:4},{value:"Acesso a um <code>4D. Blob</code>&#39;s bytes",id:"acesso-a-um-4d-blobs-bytes",level:4}],d={toc:p};function b(e){var{components:a}=e,o=n(e,["components"]);return(0,t.kt)("wrapper",r({},d,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Para passar um BLOB a seus pr\xf3prios m\xe9todos, pode tamb\xe9m definir um ponteiro ao BLOB e passar o ponteiro como um par\xe2metro."),(0,t.kt)("p",null,"Um BLOB \xe9 carregado totalmente na mem\xf3ria. Uma vari\xe1vel BLOB \xe9 mantida e existe apenas na mem\xf3ria. Um campo BLOB \xe9 carregado na mem\xf3ria desde o disco, como o resto do registro ao que pertence."),(0,t.kt)("p",null,"Como os outros tipos de campo que podem reter uma grande quantidade de dados (tais como tipo de campo Imagem), os campos BLOB n\xe3o s\xe3o duplicados na mem\xf3ria quando um registro for modificado. Consequentemente o resultado devolvido pelos comandos ",(0,t.kt)("inlineCode",{parentName:"p"},"Old")," e ",(0,t.kt)("inlineCode",{parentName:"p"},"Modified")," n\xe3o \xe9 significativo quando for aplicado a um campo BLOB."),(0,t.kt)("h2",r({},{id:"tipos-de-blob"}),"Tipos de Blob"),(0,t.kt)("p",null,"Usando a linguagem 4D, h\xe1 duas maneiras de lidar com um blob:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"como um valor escalar"),": um blob pode ser armazenado numa vari\xe1vel ou campo Blob e alterado."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"as an object (",(0,t.kt)("inlineCode",{parentName:"strong"},"4D. Blob"),")"),": a ",(0,t.kt)("inlineCode",{parentName:"li"},"4D. Blob")," is a blob object. Pode encapsular um blob ou parte dele num ",(0,t.kt)("inlineCode",{parentName:"li"},"4D. Blob")," sem alterar o blob original. Este m\xe9todo chama-se ",(0,t.kt)("a",r({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Object_type_(object-oriented_programming)#Boxing"}),"boxing"),". Para mais informa\xe7\xf5es sobre como instanciar um ",(0,t.kt)("inlineCode",{parentName:"li"},"4D. Blob"),", ver ",(0,t.kt)("a",r({parentName:"li"},{href:"/docs/pt/20/API/BlobClass"}),"Blob Class"),".")),(0,t.kt)("p",null,"Cada tipo de blob tem as suas vantagens. Utilize a tabela seguinte para determinar qual se adequa \xe0s suas necessidades:"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",r({parentName:"tr"},{align:null})),(0,t.kt)("th",r({parentName:"tr"},{align:"center"}),"Blob"),(0,t.kt)("th",r({parentName:"tr"},{align:"center"}),"4D. Blob"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",r({parentName:"tr"},{align:null}),"Edit\xe1vel"),(0,t.kt)("td",r({parentName:"tr"},{align:"center"}),"Sim"),(0,t.kt)("td",r({parentName:"tr"},{align:"center"}),"N\xe3o")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",r({parentName:"tr"},{align:null}),"Partilh\xe1vel em objectos e colec\xe7\xf5es"),(0,t.kt)("td",r({parentName:"tr"},{align:"center"}),"N\xe3o"),(0,t.kt)("td",r({parentName:"tr"},{align:"center"}),"Sim")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",r({parentName:"tr"},{align:null}),"Passado por refer\xeancia","*"),(0,t.kt)("td",r({parentName:"tr"},{align:"center"}),"N\xe3o"),(0,t.kt)("td",r({parentName:"tr"},{align:"center"}),"Sim")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",r({parentName:"tr"},{align:null}),"Desempenho ao acessar aos bytes"),(0,t.kt)("td",r({parentName:"tr"},{align:"center"}),"+"),(0,t.kt)("td",r({parentName:"tr"},{align:"center"}),"-")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",r({parentName:"tr"},{align:null}),"Tamanho m\xe1ximo"),(0,t.kt)("td",r({parentName:"tr"},{align:"center"}),"2GB"),(0,t.kt)("td",r({parentName:"tr"},{align:"center"}),"Mem\xf3ria")))),(0,t.kt)("p",null,"*","Diferente dos comandos 4D concebidos para tomar uma bolha escalar como par\xe2metro, passar um blob escalar para um m\xe9todo duplica-o na mem\xf3ria. Ao trabalhar com m\xe9todos, a utiliza\xe7\xe3o de objectos blob (",(0,t.kt)("inlineCode",{parentName:"p"},"4D. Blob"),") \xe9 mais eficiente, uma vez que s\xe3o passados por refer\xeancia."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Como padr\xe3o, 4D estabelece o tamanho blob m\xe1ximo para 2GB mas esse limite de tamanho pode ser menor dependendo de seu SO e de quanto espa\xe7o est\xe1 dispon\xedvel.")),(0,t.kt)("p",null,"Entretanto, nenhum operador pode ser aplicado aos BLOBs."),(0,t.kt)("h2",r({},{id:"verificar-se-uma-vari\xe1vel-cont\xe9m-um-blob-escalar-ou-um-4d-blob"}),"Verificar se uma vari\xe1vel cont\xe9m um blob escalar ou um ",(0,t.kt)("inlineCode",{parentName:"h2"},"4D. Blob")),(0,t.kt)("p",null,"Utilizar o comando ",(0,t.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1509.html"}),"Value type")," para determinar se um valor \xe9 do tipo Blob ou Objeto. To check that an object is a blob object (",(0,t.kt)("inlineCode",{parentName:"p"},"4D. Blob"),"), use ",(0,t.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1731.html"}),"OB instance of"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"` Declare a variable of type BLOB\n C_BLOB(anyBlobVar)\n  ` The BLOB is passed as parameter to a 4D command\n SET BLOB SIZE(anyBlobVar;1024*1024)\n  ` The BLOB is passed as parameter to an external routine\n $errCode:=Do Something With This BLOB(anyBlobVar)\n  ` The BLOB is passed as a parameter to a method that returns a BLOB\n C_BLOB(retrieveBlob)\n retrieveBlob:=Fill_Blob(anyBlobVar)\n  ` A pointer to the BLOB is passed as parameter to a user method\n COMPUTE BLOB(->anyBlobVar)\n")),(0,t.kt)("h2",r({},{id:"passagem-de-blobs-como-par\xe2metros"}),"Passagem de blobs como par\xe2metros"),(0,t.kt)("p",null,"Os BLOBs em 4D podem ser passados como par\xe2metros aos comandos 4D ou \xe0s rotinas dos plugins que esperam par\xe2metros BLOB."),(0,t.kt)("h3",r({},{id:"passagem-de-blobs-e-objectos-blob-para-comandos-4d"}),"Passagem de blobs e objectos blob para comandos 4D"),(0,t.kt)("p",null,"You can pass a scalar blob or a ",(0,t.kt)("inlineCode",{parentName:"p"},"4D. Blob")," to any 4D command that takes a blob as a parameter:"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $myBlob: 4D. Blob CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text( $myBlob ; UTF8 text without length )\n')),(0,t.kt)("p",null,"Some 4D commands alter the original blob, and thus do not support the ",(0,t.kt)("inlineCode",{parentName:"p"},"4D. Blob")," type:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page560.html"}),"DELETE FROM BLOB")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page559.html"}),"INSERT IN BLOB")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page548.html"}),"INTEGER TO BLOB")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page550.html"}),"LONGINT TO BLOB")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page552.html"}),"REAL TO BLOB")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page606.html"}),"SET BLOB SIZE")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page554.html"}),"TEXT TO BLOB")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page532.html"}),"VARIABLE TO BLOB")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page556.html"}),"LIST TO BLOB")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page782.html"}),"SOAP DECLARATION")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page777.html"}),"WEB SERVICE SET PARAMETER"))),(0,t.kt)("h3",r({},{id:"passagem-de-blobs-e-objectos-blob-para-m\xe9todos"}),"Passagem de blobs e objectos blob para m\xe9todos"),(0,t.kt)("p",null,"You can pass blobs and blob objects (",(0,t.kt)("inlineCode",{parentName:"p"},"4D. Blob"),") to methods. Tenha em mente que, ao contr\xe1rio dos objectos blob, que s\xe3o passados por refer\xeancia, as blobs escalares s\xe3o duplicadas na mem\xf3ria quando s\xe3o passadas para m\xe9todos."),(0,t.kt)("h3",r({},{id:"passar-um-blob-escalar-por-refer\xeancia-usando-um-ponteiro"}),"Passar um blob escalar por refer\xeancia usando um ponteiro"),(0,t.kt)("p",null,"Para passar um blob escalar aos seus pr\xf3prios m\xe9todos sem  duplicar na mem\xf3ria, defina um ponteiro para a vari\xe1vel que o armazena e passe o ponteiro como um par\xe2metro."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Exemplos:")),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"` Declarar uma vari\xe1vel de tipo BLOB\n C_BLOB(vBlob)\n  ` Estabelece o tamanho do BLOB para 256 bytes\n SET BLOB SIZE(vBlob;256)\n  ` O loop abaixo inicia os 256 bytes do BLOB para zero\n For(vByte;0;BLOB size(vBlob)-1)\n    vBlob{vByte}:=0\n End for\n")),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"// Passar o blob como par\xe2metro para uma rotina externa\n $errCode:=Fazer algo com este blob($myBlobVar)\n")),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"// Passe o blob como par\xe2metro para um m\xe9todo que devolve um blob\n var $retrieveBlob: Blob\n retrieveBlob:=Fill_Blob($myBlobVar)\n")),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"// Passe um ponteiro para o blob como par\xe2metro do seu pr\xf3prio m\xe9todo, COMPUTE BLOB(->$myBlobVar)\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Nota para  desenvolvedores de plugins:"),' um par\xe2metro BLOB se declara como "&O" (a letra "O", n\xe3o o n\xfamero "0").'),(0,t.kt)("h2",r({},{id:"atribui\xe7\xe3o-de-uma-vari\xe1vel-blob-a-outra"}),"Atribui\xe7\xe3o de uma vari\xe1vel blob a outra"),(0,t.kt)("p",null,"\xc9 poss\xedvel atribuir uma vari\xe1vel Blob a outra:"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Exemplo:")),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"` Declara duas vari\xe1veis de tipo BLOB\n C_BLOB(vBlobA;vBlobB)\n  ` Estabelece o tamanho do primeiro  BLOB a 10K\n SET BLOB SIZE(vBlobA;10*1024)\n  ` Atribui o primeiro BLOB ao segundo\n vBlobB:=vBlobA\n")),(0,t.kt)("h2",r({},{id:"convers\xe3o-autom\xe1tica-do-tipo-blob"}),"Convers\xe3o autom\xe1tica do tipo blob"),(0,t.kt)("p",null,"4D converte automaticamente as bolhas escalares em objectos de bolhas, e vice-versa, quando s\xe3o atribu\xeddas umas \xe0s outras. Por exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'// Create a variable of type Blob and an object variable\nvar $myBlob: Blob\nvar $myObject : Object\n\n// Assign that blob to a property of $myObject named "blob"\n$myObject:=New object("blob"; $myBlob)\n\n// The blob stored in $myBlob is automatically converted to a 4D. Blob\n$type:= OB Instance of($myObject.blob; 4D. Blob)  //True\n\n// Conversion from 4D. Blob to Blob\n$myBlob:= $myObject.blob\n$type:= Value type($myBlob) // Blob\n')),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"When converting a ",(0,t.kt)("inlineCode",{parentName:"p"},"4D. Blob")," to a scalar blob, if the size of the ",(0,t.kt)("inlineCode",{parentName:"p"},"4D. Blob")," exceeds the maximum size for scalar blobs, the resulting scalar blob is empty. For example, when the maximum size for scalar blobs is 2GB, if you convert a ",(0,t.kt)("inlineCode",{parentName:"p"},"4D. Blob")," of 2.5GB to a scalar blob, you obtain an empty blob.")),(0,t.kt)("h2",r({},{id:"modifica\xe7\xe3o-de-um-blob-escalar"}),"Modifica\xe7\xe3o de um blob escalar"),(0,t.kt)("p",null,"Ao contr\xe1rio dos objectos com blobs, as blobs escalares podem ser alteradas. Por exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $myBlob : Blob SET BLOB SIZE ($myBlob ; 16*1024)\n")),(0,t.kt)("h2",r({},{id:"acesso-individual-a-bytes-num-blob"}),"Acesso individual a bytes num blob"),(0,t.kt)("h4",r({},{id:"acesso-aos-bytes-de-um-blob-escalar"}),"Acesso aos bytes de um blob escalar"),(0,t.kt)("p",null,"Cada byte de um BLOB pode ser dirigido individualmente utilizando os s\xedmbolos de colchetes {...}. Dentro de um BLOB, os bytes s\xe3o numerados de 0 a N-1, onde N \xe9 o tamanho do BLOB."),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"  Pode atribuir BLOBS um para o outro.\n")),(0,t.kt)("p",null,"Como todos os bytes de um BLOB podem ser direcionados de forma individual, \xe9 poss\xedvel armazenar o que quiser em um campo ou vari\xe1vel BLOB."),(0,t.kt)("h4",r({},{id:"acesso-a-um-4d-blobs-bytes"}),"Acesso a um ",(0,t.kt)("inlineCode",{parentName:"h4"},"4D. Blob"),"'s bytes"),(0,t.kt)("p",null,"Utilizar par\xeanteses rectos ",(0,t.kt)("inlineCode",{parentName:"p"},"[]")," para aceder directamente a um byte espec\xedfico num ",(0,t.kt)("inlineCode",{parentName:"p"},"4D. Blob")),(0,t.kt)("pre",null,(0,t.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $myBlob: 4D. Blob CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text ( $myBlob ; UTF8 text without length )\n$byte:=$myBlob[5]\n')),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"4D.Blob")," n\xe3o pode ser alterado, pode-se ler os bytes de um ",(0,t.kt)("inlineCode",{parentName:"p"},"4D.Blob")," usando esta sintaxe, mas n\xe3o modific\xe1-los."))}b.isMDXComponent=!0}}]);