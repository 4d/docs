/*! For license information please see 69161013.56f233bc.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30206],{882383:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var l=s(474848),o=s(28453);const t={id:"blob",title:"BLOB"},r=void 0,i={id:"Concepts/blob",title:"BLOB",description:"Un champ, une variable ou une expression de type BLOB (Binary Large OBject) est une s\xe9rie contigu\xeb d'octets qui peut \xeatre trait\xe9e comme un seul objet ou dont les octets peuvent \xeatre adress\xe9s individuellement.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/Concepts/dt_blob.md",sourceDirName:"Concepts",slug:"/Concepts/blob",permalink:"/docs/fr/20-R4/Concepts/blob",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_blob.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"blob",title:"BLOB"},sidebar:"docs",previous:{title:"Types de donn\xe9es",permalink:"/docs/fr/20-R4/Concepts/data-types"},next:{title:"Boolean",permalink:"/docs/fr/20-R4/Concepts/boolean"}},a={},d=[{value:"Types de Blob",id:"Types-de-Blob",level:2},{value:"V\xe9rifier si une variable contient un blob scalaire ou un <code>4D.Blob</code>",id:"V\xe9rifier-si-une-variable-contient-un-blob-scalaire-ou-un-4DBlob",level:2},{value:"Passer des blobs en tant que param\xe8tres",id:"Passer-des-blobs-en-tant-que-param\xe8tres",level:2},{value:"Passer des blobs et des objets blob aux commandes 4D",id:"Passer-des-blobs-et-des-objets-blob-aux-commandes-4D",level:3},{value:"Passer des blobs et des objets blob aux m\xe9thodes",id:"Passer-des-blobs-et-des-objets-blob-aux-m\xe9thodes",level:3},{value:"Passer un blob scalaire par r\xe9f\xe9rence en utilisant un pointeur",id:"Passer-un-blob-scalaire-par-r\xe9f\xe9rence-en-utilisant-un-pointeur",level:3},{value:"Assigner une variable Blob \xe0 une autre",id:"Assigner-une-variable-Blob-\xe0-une-autre",level:2},{value:"Conversion automatique du type blob",id:"Conversion-automatique-du-type-blob",level:2},{value:"Modification d&#39;un blob scalaire",id:"Modification-dun-blob-scalaire",level:2},{value:"Acc\xe9der individuellement aux octets d&#39;un blob",id:"Acc\xe9der-individuellement-aux-octets-dun-blob",level:2},{value:"Acc\xe9der aux octets d&#39;un blob scalaire",id:"Acc\xe9der-aux-octets-dun-blob-scalaire",level:4},{value:"Acc\xe9der aux octets d&#39;un <code>4D.Blob</code>",id:"Acc\xe9der-aux-octets-dun-4DBlob",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Un champ, une variable ou une expression de type BLOB (Binary Large OBject) est une s\xe9rie contigu\xeb d'octets qui peut \xeatre trait\xe9e comme un seul objet ou dont les octets peuvent \xeatre adress\xe9s individuellement."}),"\n",(0,l.jsx)(n.p,{children:"Lorsque vous travaillez avec un blob, il est stock\xe9 enti\xe8rement en m\xe9moire. Si vous travaillez avec une variable, le blob n'existe qu'en m\xe9moire. Si vous travaillez avec un champ de type blob, il est charg\xe9 en m\xe9moire \xe0 partir du disque, comme le reste de l'enregistrement auquel il appartient."}),"\n",(0,l.jsxs)(n.p,{children:["A l'instar d'autres types de champs pouvant contenir une grande quantit\xe9 de donn\xe9es (comme les champs de type Image), les champs de type blob ne sont pas dupliqu\xe9s en m\xe9moire lorsque vous modifiez un enregistrement. Par cons\xe9quent, les r\xe9sultats renvoy\xe9s par ",(0,l.jsx)(n.code,{children:"Ancien"})," et ",(0,l.jsx)(n.code,{children:"Modifie"})," ne sont pas significatifs lorsque ces fonctions sont appliqu\xe9es \xe0 des champs de type blob."]}),"\n",(0,l.jsx)(n.h2,{id:"Types-de-Blob",children:"Types de Blob"}),"\n",(0,l.jsx)(n.p,{children:"Dans le langage 4D, il existe deux fa\xe7ons de manipuler un blob :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"comme une valeur scalaire"})," : un blob peut \xeatre stock\xe9 dans une variable ou un champ Blob et peut \xeatre modifi\xe9."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsxs)(n.strong,{children:["comme un objet (",(0,l.jsx)(n.code,{children:"4D.Blob"}),")"]})," : un ",(0,l.jsx)(n.code,{children:"4D.Blob"})," est un objet blob. Vous pouvez encapsuler un blob ou une partie de celui-ci dans un ",(0,l.jsx)(n.code,{children:"4D.Blob"})," sans modifier le blob d'origine. Cette m\xe9thode est appel\xe9e ",(0,l.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Object_type_(object-oriented_programming)#Boxing",children:'"boxing"'}),". Pour plus d'informations sur l'instanciation d'un ",(0,l.jsx)(n.code,{children:"4D.Blob"}),", consultez la rubrique ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R4/API/BlobClass",children:"Blob Class"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Chaque type de blob a ses avantages. Utilisez le tableau suivant pour d\xe9terminer celui qui convient \xe0 vos besoins :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"Blob"}),(0,l.jsx)(n.th,{style:{textAlign:"center"},children:"4D.Blob"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifiable"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"Oui"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"Non"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Partageable en objets et collections"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"Non"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"Oui"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Pass\xe9 par r\xe9f\xe9rence*"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"Non"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"Oui"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Performances lors de l'acc\xe8s aux octets"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"+"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"-"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Taille maximale"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"2Go"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"M\xe9moire"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["A noter que, contrairement aux objets blob, qui sont transmis par r\xe9f\xe9rence, les blobs scalaires sont dupliqu\xe9s en m\xe9moire lorsqu'ils sont pass\xe9s aux m\xe9thodes. Vous pouvez passer des blobs et des objets blob (",(0,l.jsx)(n.code,{children:"4D.Blob"}),") aux m\xe9thodes."]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Par d\xe9faut, la taille maximale des blobs scalaires est fix\xe9e \xe0 2 Go, mais cette limite peut \xeatre inf\xe9rieure en fonction de votre OS et de l'espace disponible."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Vous ne pouvez pas utiliser d'op\xe9rateurs sur les blobs."}),"\n",(0,l.jsxs)(n.h2,{id:"V\xe9rifier-si-une-variable-contient-un-blob-scalaire-ou-un-4DBlob",children:["V\xe9rifier si une variable contient un blob scalaire ou un ",(0,l.jsx)(n.code,{children:"4D.Blob"})]}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1509.html",children:"Value type"})," permet de d\xe9terminer si une valeur est de type Blob ou Objet. Pour v\xe9rifier qu'un objet est un objet blob (",(0,l.jsx)(n.code,{children:"4D.Blob"}),"), utilisez ",(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1731.html",children:"OB instance of"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"var $myBlob: Blob\nvar $myBlobObject: 4D.Blob\n$myBlobObject:=4D.Blob.new()\n\n$type:= Value type($myblobObject) // 38 (object)\n$is4DBlob:= OB Instance of($myblobObject; 4D.Blob)  //True\n"})}),"\n",(0,l.jsx)(n.h2,{id:"Passer-des-blobs-en-tant-que-param\xe8tres",children:"Passer des blobs en tant que param\xe8tres"}),"\n",(0,l.jsx)(n.p,{children:"Les blobs scalaires et les objets blob peuvent \xeatre pass\xe9s comme param\xe8tres aux commandes 4D ou aux routines de plug-in qui attendent des param\xe8tres blob."}),"\n",(0,l.jsx)(n.h3,{id:"Passer-des-blobs-et-des-objets-blob-aux-commandes-4D",children:"Passer des blobs et des objets blob aux commandes 4D"}),"\n",(0,l.jsxs)(n.p,{children:["Vous pouvez passer un blob scalaire ou un ",(0,l.jsx)(n.code,{children:"4D.Blob"})," \xe0 toute commande 4D qui prend un blob comme param\xe8tre :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'var $myBlob: 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text( $myBlob ; UTF8 text without length )\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Certaines commandes 4D modifient le blob d'origine et ne prennent donc pas en charge le type ",(0,l.jsx)(n.code,{children:"4D.Blob"})," :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page560.html",children:"DELETE FROM BLOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page559.html",children:"INSERT IN BLOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page548.html",children:"INTEGER TO BLOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page550.html",children:"LONGINT TO BLOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page552.html",children:"REAL TO BLOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page606.html",children:"SET BLOB SIZE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page554.html",children:"TEXT TO BLOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page532.html",children:"VARIABLE TO BLOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page556.html",children:"LIST TO BLOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page782.html",children:"SOAP DECLARATION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page777.html",children:"WEB SERVICE SET PARAMETER"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"Passer-des-blobs-et-des-objets-blob-aux-m\xe9thodes",children:"Passer des blobs et des objets blob aux m\xe9thodes"}),"\n",(0,l.jsxs)(n.p,{children:["Lorsque vous travaillez avec des m\xe9thodes, l'utilisation d'objets blob (",(0,l.jsx)(n.code,{children:"4D.Blob"}),") est plus efficace, car ils sont pass\xe9s par r\xe9f\xe9rence. A noter que, contrairement aux objets blob, qui sont transmis par r\xe9f\xe9rence, les blobs scalaires sont dupliqu\xe9s en m\xe9moire lorsqu'ils sont pass\xe9s aux m\xe9thodes."]}),"\n",(0,l.jsx)(n.h3,{id:"Passer-un-blob-scalaire-par-r\xe9f\xe9rence-en-utilisant-un-pointeur",children:"Passer un blob scalaire par r\xe9f\xe9rence en utilisant un pointeur"}),"\n",(0,l.jsx)(n.p,{children:"Pour passer un blob scalaire \xe0 vos propres m\xe9thodes sans le dupliquer en m\xe9moire, d\xe9finissez un pointeur vers la variable qui le stocke et passez le pointeur comme param\xe8tre."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Exemples :"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"// D\xe9clarer une variable de type Blob\nvar $myBlobVar: Blob\n// Passer le blob (en tant que param\xe8tre) en une commande 4D\n SET BLOB SIZE($myBlobVar;1024*1024)\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"// Passer le blob (en tant que param\xe8tre) en routine externe\n $errCode:=Do Something With This blob($myBlobVar)\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"//Passer le blob (en tant que param\xe8tre) en une m\xe9thode qui retourne un blob\n var $retrieveBlob: Blob\n retrieveBlob:=Fill_Blob($myBlobVar)\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"// Passer un pointeur au blob (en tant que param\xe8tre) \xe0 votre propre m\xe9thode,\nCOMPUTE BLOB(->$myBlobVar)\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note pour les d\xe9veloppeurs de plug ins 4D :"})," Un param\xe8tre de type BLOB se d\xe9clare \u201c&O\u201d (la lettre \u201cO\u201d et non le chiffre \u201c0\u201d)."]}),"\n",(0,l.jsx)(n.h2,{id:"Assigner-une-variable-Blob-\xe0-une-autre",children:"Assigner une variable Blob \xe0 une autre"}),"\n",(0,l.jsx)(n.p,{children:"Vous pouvez affecter une variable Blob \xe0 une autre :"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Voici un exemple :"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"// D\xe9clarer deux variables de type Blob\n var $vBlobA; $vBlobB : Blob\n // Fixer la taille du premier blob \xe0 10Ko\n SET BLOB SIZE($vBlobA;10*1024)\n // Assigner le premier BLOB au second\n $vBlobB:=$vBlobA\n"})}),"\n",(0,l.jsx)(n.h2,{id:"Conversion-automatique-du-type-blob",children:"Conversion automatique du type blob"}),"\n",(0,l.jsx)(n.p,{children:"4D convertit automatiquement les blobs scalaires en objets blob, et vice versa, lorsqu'ils sont assign\xe9s l'un \xe0 l'autre. Par exemple :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'// Cr\xe9er une variable de type Blob et une variable objet\nvar $myBlob: Blob\nvar $myObject : Object\n\n// Assigner ce blob \xe0 une propri\xe9t\xe9 de $myObject nomm\xe9e "blob"\n$myObject:=New object("blob"; $myBlob)\n\n// le blob stock\xe9 dans $myBlob est automatiquement converti en un 4D.Blob\n$type:= OB Instance of($myObject.blob; 4D.Blob)  //True\n\n// Conversion d\'un 4D.Blob en Blob\n$myBlob:= $myObject.blob\n$type:= Value type($myBlob) // Blob\n'})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["Lors de la conversion d'un ",(0,l.jsx)(n.code,{children:"4D.Blob"})," en un blob scalaire, si la taille du ",(0,l.jsx)(n.code,{children:"4D.Blob"})," d\xe9passe la taille maximale des blobs scalaires, le blob scalaire r\xe9sultant est vide. Par exemple, lorsque la taille maximale des blobs scalaires est de 2GB, si vous convertissez un ",(0,l.jsx)(n.code,{children:"4D.Blob"})," de 2,5Go en blob scalaire, vous obtenez un blob vide."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"Modification-dun-blob-scalaire",children:"Modification d'un blob scalaire"}),"\n",(0,l.jsx)(n.p,{children:"Contrairement aux objets blob, les blobs scalaires peuvent \xeatre modifi\xe9s. Par exemple :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"var $myBlob : Blob\nSET BLOB SIZE ($myBlob ; 16*1024)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"Acc\xe9der-individuellement-aux-octets-dun-blob",children:"Acc\xe9der individuellement aux octets d'un blob"}),"\n",(0,l.jsx)(n.h4,{id:"Acc\xe9der-aux-octets-dun-blob-scalaire",children:"Acc\xe9der aux octets d'un blob scalaire"}),"\n",(0,l.jsxs)(n.p,{children:["Vous pouvez acc\xe9der aux octets individuels d'un blob scalaire en utilisant des accolades ",(0,l.jsx)(n.code,{children:"{}"}),". Dans un blob, les octets sont num\xe9rot\xe9s de 0 \xe0 N-1, N \xe9tant la taille du BLOB:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"  // D\xe9clarer une variable de type BLOB\n var $vBlob : Blob\n  // Fixer la taille du BLOB \xe0 256 octets\n SET BLOB SIZE($vBlob;256)\n  //  Le code suivant initialise les octets du BLOB \xe0 z\xe9ro\n For(vByte;0;BLOB size($vBlob)-1)\n    $vBlob{vByte}:=0\n End for\n"})}),"\n",(0,l.jsx)(n.p,{children:"Etant donn\xe9 que vous pouvez adresser tous les octets d'un blob individuellement, vous pouvez stocker tout ce que vous souhaitez dans une variable ou un champ Blob."}),"\n",(0,l.jsxs)(n.h4,{id:"Acc\xe9der-aux-octets-dun-4DBlob",children:["Acc\xe9der aux octets d'un ",(0,l.jsx)(n.code,{children:"4D.Blob"})]}),"\n",(0,l.jsxs)(n.p,{children:["Utilisez les crochets ",(0,l.jsx)(n.code,{children:"[]"})," pour acc\xe9der directement \xe0 un octet sp\xe9cifique dans un ",(0,l.jsx)(n.code,{children:"4D.Blob"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'var $myBlob: 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text ( $myBlob ; UTF8 text without length )\n$byte:=$myBlob[5]\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Etant donn\xe9 qu'un ",(0,l.jsx)(n.code,{children:"4D.Blob"})," ne peut pas \xeatre modifi\xe9, vous pouvez lire les octets d'un ",(0,l.jsx)(n.code,{children:"4D.Blob"})," \xe0 l'aide de cette syntaxe, mais pas les modifier."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},221020:(e,n,s)=>{var l=s(296540),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var l,t={},d=null,c=null;for(l in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)r.call(n,l)&&!a.hasOwnProperty(l)&&(t[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===t[l]&&(t[l]=n[l]);return{$$typeof:o,type:e,key:d,ref:c,props:t,_owner:i.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var l=s(296540);const o={},t=l.createContext(o);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);