"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56882],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(667294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=l,m=d["".concat(i,".").concat(c)]||d[c]||b[c]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},397935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});n(667294);var a=n(603905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const r={id:"blob",title:"BLOB"},s=void 0,i={unversionedId:"Concepts/blob",id:"version-20-R3/Concepts/blob",title:"BLOB",description:"Un champ, une variable ou une expression de type BLOB (Binary Large OBject) est une s\xe9rie contigu\xeb d'octets qui peut \xeatre trait\xe9e comme un seul objet ou dont les octets peuvent \xeatre adress\xe9s individuellement.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R3/Concepts/dt_blob.md",sourceDirName:"Concepts",slug:"/Concepts/blob",permalink:"/docs/fr/Concepts/blob",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_blob.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"blob",title:"BLOB"},sidebar:"docs",previous:{title:"Types de donn\xe9es",permalink:"/docs/fr/Concepts/data-types"},next:{title:"Boolean",permalink:"/docs/fr/Concepts/boolean"}},u={},p=[{value:"Types de Blob",id:"types-de-blob",level:2},{value:"V\xe9rifier si une variable contient un blob scalaire ou un <code>4D.Blob</code>",id:"v\xe9rifier-si-une-variable-contient-un-blob-scalaire-ou-un-4dblob",level:2},{value:"Passer des blobs en tant que param\xe8tres",id:"passer-des-blobs-en-tant-que-param\xe8tres",level:2},{value:"Passer des blobs et des objets blob aux commandes 4D",id:"passer-des-blobs-et-des-objets-blob-aux-commandes-4d",level:3},{value:"Passer des blobs et des objets blob aux m\xe9thodes",id:"passer-des-blobs-et-des-objets-blob-aux-m\xe9thodes",level:3},{value:"Passer un blob scalaire par r\xe9f\xe9rence en utilisant un pointeur",id:"passer-un-blob-scalaire-par-r\xe9f\xe9rence-en-utilisant-un-pointeur",level:3},{value:"Assigner une variable Blob \xe0 une autre",id:"assigner-une-variable-blob-\xe0-une-autre",level:2},{value:"Conversion automatique du type blob",id:"conversion-automatique-du-type-blob",level:2},{value:"Modification d&#39;un blob scalaire",id:"modification-dun-blob-scalaire",level:2},{value:"Acc\xe9der individuellement aux octets d&#39;un blob",id:"acc\xe9der-individuellement-aux-octets-dun-blob",level:2},{value:"Acc\xe9der aux octets d&#39;un blob scalaire",id:"acc\xe9der-aux-octets-dun-blob-scalaire",level:4},{value:"Acc\xe9der aux octets d&#39;un <code>4D.Blob</code>",id:"acc\xe9der-aux-octets-dun-4dblob",level:4}],b={toc:p};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",l({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Un champ, une variable ou une expression de type BLOB (Binary Large OBject) est une s\xe9rie contigu\xeb d'octets qui peut \xeatre trait\xe9e comme un seul objet ou dont les octets peuvent \xeatre adress\xe9s individuellement."),(0,a.kt)("p",null,"Lorsque vous travaillez avec un blob, il est stock\xe9 enti\xe8rement en m\xe9moire. Si vous travaillez avec une variable, le blob n'existe qu'en m\xe9moire. Si vous travaillez avec un champ de type blob, il est charg\xe9 en m\xe9moire \xe0 partir du disque, comme le reste de l'enregistrement auquel il appartient."),(0,a.kt)("p",null,"A l'instar d'autres types de champs pouvant contenir une grande quantit\xe9 de donn\xe9es (comme les champs de type Image), les champs de type blob ne sont pas dupliqu\xe9s en m\xe9moire lorsque vous modifiez un enregistrement. Par cons\xe9quent, les r\xe9sultats renvoy\xe9s par ",(0,a.kt)("inlineCode",{parentName:"p"},"Ancien")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"Modifie")," ne sont pas significatifs lorsque ces fonctions sont appliqu\xe9es \xe0 des champs de type blob."),(0,a.kt)("h2",l({},{id:"types-de-blob"}),"Types de Blob"),(0,a.kt)("p",null,"Dans le langage 4D, il existe deux fa\xe7ons de manipuler un blob :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"comme une valeur scalaire")," : un blob peut \xeatre stock\xe9 dans une variable ou un champ Blob et peut \xeatre modifi\xe9."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"comme un objet (",(0,a.kt)("inlineCode",{parentName:"strong"},"4D.Blob"),")")," : un ",(0,a.kt)("inlineCode",{parentName:"li"},"4D.Blob")," est un objet blob. Vous pouvez encapsuler un blob ou une partie de celui-ci dans un ",(0,a.kt)("inlineCode",{parentName:"li"},"4D.Blob")," sans modifier le blob d'origine. Cette m\xe9thode est appel\xe9e ",(0,a.kt)("a",l({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Object_type_(object-oriented_programming)#Boxing"}),'"boxing"'),". Pour plus d'informations sur l'instanciation d'un ",(0,a.kt)("inlineCode",{parentName:"li"},"4D.Blob"),", consultez la rubrique ",(0,a.kt)("a",l({parentName:"li"},{href:"/docs/fr/API/BlobClass"}),"Blob Class"),".")),(0,a.kt)("p",null,"Chaque type de blob a ses avantages. Utilisez le tableau suivant pour d\xe9terminer celui qui convient \xe0 vos besoins :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null})),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"Blob"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"4D.Blob"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Modifiable"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"Oui"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"Non")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Partageable en objets et collections"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"Non"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"Oui")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Pass\xe9 par r\xe9f\xe9rence","*"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"Non"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"Oui")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Performances lors de l'acc\xe8s aux octets"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"+"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Taille maximale"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"2Go"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"M\xe9moire")))),(0,a.kt)("p",null,"A noter que, contrairement aux objets blob, qui sont transmis par r\xe9f\xe9rence, les blobs scalaires sont dupliqu\xe9s en m\xe9moire lorsqu'ils sont pass\xe9s aux m\xe9thodes. Vous pouvez passer des blobs et des objets blob (",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob"),") aux m\xe9thodes."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Par d\xe9faut, la taille maximale des blobs scalaires est fix\xe9e \xe0 2 Go, mais cette limite peut \xeatre inf\xe9rieure en fonction de votre OS et de l'espace disponible.")),(0,a.kt)("p",null,"Vous ne pouvez pas utiliser d'op\xe9rateurs sur les blobs."),(0,a.kt)("h2",l({},{id:"v\xe9rifier-si-une-variable-contient-un-blob-scalaire-ou-un-4dblob"}),"V\xe9rifier si une variable contient un blob scalaire ou un ",(0,a.kt)("inlineCode",{parentName:"h2"},"4D.Blob")),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",l({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/en/page1509.html"}),"Value type")," command to determine if a value is of type Blob or Object. To check that an object is a blob object (",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob"),"), use ",(0,a.kt)("a",l({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/en/page1731.html"}),"OB instance of"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"var $myBlob: Blob\nvar $myBlobObject: 4D.Blob\n$myBlobObject:=4D.Blob.new()\n\n$type:= Value type($myblobObject) // 38 (object)\n$is4DBlob:= OB Instance of($myblobObject; 4D.Blob)  //True\n")),(0,a.kt)("h2",l({},{id:"passer-des-blobs-en-tant-que-param\xe8tres"}),"Passer des blobs en tant que param\xe8tres"),(0,a.kt)("p",null,"Les blobs scalaires et les objets blob peuvent \xeatre pass\xe9s comme param\xe8tres aux commandes 4D ou aux routines de plug-in qui attendent des param\xe8tres blob."),(0,a.kt)("h3",l({},{id:"passer-des-blobs-et-des-objets-blob-aux-commandes-4d"}),"Passer des blobs et des objets blob aux commandes 4D"),(0,a.kt)("p",null,"Vous pouvez passer un blob scalaire ou un ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob")," \xe0 toute commande 4D qui prend un blob comme param\xe8tre :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $myBlob: 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text( $myBlob ; UTF8 text without length )\n')),(0,a.kt)("p",null,"Certaines commandes 4D modifient le blob d'origine et ne prennent donc pas en charge le type ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob")," :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page560.html"}),"DELETE FROM BLOB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page559.html"}),"INSERT IN BLOB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page548.html"}),"INTEGER TO BLOB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page550.html"}),"LONGINT TO BLOB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page552.html"}),"REAL TO BLOB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page606.html"}),"SET BLOB SIZE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page554.html"}),"TEXT TO BLOB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page532.html"}),"VARIABLE TO BLOB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page556.html"}),"LIST TO BLOB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page782.html"}),"SOAP DECLARATION")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page777.html"}),"WEB SERVICE SET PARAMETER"))),(0,a.kt)("h3",l({},{id:"passer-des-blobs-et-des-objets-blob-aux-m\xe9thodes"}),"Passer des blobs et des objets blob aux m\xe9thodes"),(0,a.kt)("p",null,"Lorsque vous travaillez avec des m\xe9thodes, l'utilisation d'objets blob (",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob"),") est plus efficace, car ils sont pass\xe9s par r\xe9f\xe9rence. A noter que, contrairement aux objets blob, qui sont transmis par r\xe9f\xe9rence, les blobs scalaires sont dupliqu\xe9s en m\xe9moire lorsqu'ils sont pass\xe9s aux m\xe9thodes."),(0,a.kt)("h3",l({},{id:"passer-un-blob-scalaire-par-r\xe9f\xe9rence-en-utilisant-un-pointeur"}),"Passer un blob scalaire par r\xe9f\xe9rence en utilisant un pointeur"),(0,a.kt)("p",null,"Pour passer un blob scalaire \xe0 vos propres m\xe9thodes sans le dupliquer en m\xe9moire, d\xe9finissez un pointeur vers la variable qui le stocke et passez le pointeur comme param\xe8tre."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Exemples :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"// D\xe9clarer une variable de type Blob\nvar $myBlobVar: Blob\n// Passer le blob (en tant que param\xe8tre) en une commande 4D\n SET BLOB SIZE($myBlobVar;1024*1024)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"// Passer le blob (en tant que param\xe8tre) en routine externe\n $errCode:=Do Something With This blob($myBlobVar)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"//Passer le blob (en tant que param\xe8tre) en une m\xe9thode qui retourne un blob\n var $retrieveBlob: Blob\n retrieveBlob:=Fill_Blob($myBlobVar)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"// Passer un pointeur au blob (en tant que param\xe8tre) \xe0 votre propre m\xe9thode,\nCOMPUTE BLOB(->$myBlobVar)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note pour les d\xe9veloppeurs de plug ins 4D :")," Un param\xe8tre de type BLOB se d\xe9clare \u201c&O\u201d (la lettre \u201cO\u201d et non le chiffre \u201c0\u201d)."),(0,a.kt)("h2",l({},{id:"assigner-une-variable-blob-\xe0-une-autre"}),"Assigner une variable Blob \xe0 une autre"),(0,a.kt)("p",null,"Vous pouvez affecter une variable Blob \xe0 une autre :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Voici un exemple :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"// D\xe9clarer deux variables de type Blob\n var $vBlobA; $vBlobB : Blob\n // Fixer la taille du premier blob \xe0 10Ko\n SET BLOB SIZE($vBlobA;10*1024)\n // Assigner le premier BLOB au second\n $vBlobB:=$vBlobA\n")),(0,a.kt)("h2",l({},{id:"conversion-automatique-du-type-blob"}),"Conversion automatique du type blob"),(0,a.kt)("p",null,"4D convertit automatiquement les blobs scalaires en objets blob, et vice versa, lorsqu'ils sont assign\xe9s l'un \xe0 l'autre. Par exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'// Cr\xe9er une variable de type Blob et une variable objet\nvar $myBlob: Blob\nvar $myObject : Object\n\n// Assigner ce blob \xe0 une propri\xe9t\xe9 de $myObject nomm\xe9e "blob"\n$myObject:=New object("blob"; $myBlob)\n\n// le blob stock\xe9 dans $myBlob est automatiquement converti en un 4D.Blob\n$type:= OB Instance of($myObject.blob; 4D.Blob)  //True\n\n// Conversion d\'un 4D.Blob en Blob\n$myBlob:= $myObject.blob\n$type:= Value type($myBlob) // Blob\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Lors de la conversion d'un ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob")," en un blob scalaire, si la taille du ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob")," d\xe9passe la taille maximale des blobs scalaires, le blob scalaire r\xe9sultant est vide. Par exemple, lorsque la taille maximale des blobs scalaires est de 2GB, si vous convertissez un ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob")," de 2,5Go en blob scalaire, vous obtenez un blob vide.")),(0,a.kt)("h2",l({},{id:"modification-dun-blob-scalaire"}),"Modification d'un blob scalaire"),(0,a.kt)("p",null,"Contrairement aux objets blob, les blobs scalaires peuvent \xeatre modifi\xe9s. Par exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"var $myBlob : Blob\nSET BLOB SIZE ($myBlob ; 16*1024)\n")),(0,a.kt)("h2",l({},{id:"acc\xe9der-individuellement-aux-octets-dun-blob"}),"Acc\xe9der individuellement aux octets d'un blob"),(0,a.kt)("h4",l({},{id:"acc\xe9der-aux-octets-dun-blob-scalaire"}),"Acc\xe9der aux octets d'un blob scalaire"),(0,a.kt)("p",null,"Vous pouvez acc\xe9der aux octets individuels d'un blob scalaire en utilisant des accolades ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),". Dans un blob, les octets sont num\xe9rot\xe9s de 0 \xe0 N-1, N \xe9tant la taille du BLOB:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"  // D\xe9clarer une variable de type BLOB\n var $vBlob : Blob\n  // Fixer la taille du BLOB \xe0 256 octets\n SET BLOB SIZE($vBlob;256)\n  //  Le code suivant initialise les octets du BLOB \xe0 z\xe9ro\n For(vByte;0;BLOB size($vBlob)-1)\n    $vBlob{vByte}:=0\n End for\n")),(0,a.kt)("p",null,"Etant donn\xe9 que vous pouvez adresser tous les octets d'un blob individuellement, vous pouvez stocker tout ce que vous souhaitez dans une variable ou un champ Blob."),(0,a.kt)("h4",l({},{id:"acc\xe9der-aux-octets-dun-4dblob"}),"Acc\xe9der aux octets d'un ",(0,a.kt)("inlineCode",{parentName:"h4"},"4D.Blob")),(0,a.kt)("p",null,"Utilisez les crochets ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")," pour acc\xe9der directement \xe0 un octet sp\xe9cifique dans un ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $myBlob: 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text ( $myBlob ; UTF8 text without length )\n$byte:=$myBlob[5]\n')),(0,a.kt)("p",null,"Etant donn\xe9 qu'un ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob")," ne peut pas \xeatre modifi\xe9, vous pouvez lire les octets d'un ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob")," \xe0 l'aide de cette syntaxe, mais pas les modifier."))}d.isMDXComponent=!0}}]);