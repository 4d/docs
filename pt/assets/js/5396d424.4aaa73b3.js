"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62946"],{745977:function(e,o,a){a.r(o),a.d(o,{default:()=>b,frontMatter:()=>r,metadata:()=>s,assets:()=>t,toc:()=>i,contentTitle:()=>d});var s=JSON.parse('{"id":"Concepts/blob","title":"BLOB","description":"Para passar um BLOB a seus pr\xf3prios m\xe9todos, pode tamb\xe9m definir um ponteiro ao BLOB e passar o ponteiro como um par\xe2metro.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/Concepts/dt_blob.md","sourceDirName":"Concepts","slug":"/Concepts/blob","permalink":"/docs/pt/20-R6/Concepts/blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_blob.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"blob","title":"BLOB"},"sidebar":"docs","previous":{"title":"Tipos de dados","permalink":"/docs/pt/20-R6/Concepts/data-types"},"next":{"title":"Par\xe2metros","permalink":"/docs/pt/20-R6/Concepts/boolean"}}'),n=a("785893"),l=a("250065");let r={id:"blob",title:"BLOB"},d=void 0,t={},i=[{value:"Tipos de Blob",id:"tipos-de-blob",level:2},{value:"Verificar si una variable contiene un blob escalar o un <code>4D.Blob</code>",id:"verificar-si-una-variable-contiene-un-blob-escalar-o-un-4dblob",level:2},{value:"Passagem de blobs como par\xe2metros",id:"passagem-de-blobs-como-par\xe2metros",level:2},{value:"Passagem de blobs e objectos blob para comandos 4D",id:"passagem-de-blobs-e-objectos-blob-para-comandos-4d",level:3},{value:"Passagem de blobs e objectos blob para m\xe9todos",id:"passagem-de-blobs-e-objectos-blob-para-m\xe9todos",level:3},{value:"Passar um blob escalar por refer\xeancia usando um ponteiro",id:"passar-um-blob-escalar-por-refer\xeancia-usando-um-ponteiro",level:3},{value:"Atribui\xe7\xe3o de uma vari\xe1vel blob a outra",id:"atribui\xe7\xe3o-de-uma-vari\xe1vel-blob-a-outra",level:2},{value:"Convers\xe3o autom\xe1tica do tipo blob",id:"convers\xe3o-autom\xe1tica-do-tipo-blob",level:2},{value:"Modifica\xe7\xe3o de um blob escalar",id:"modifica\xe7\xe3o-de-um-blob-escalar",level:2},{value:"Acesso individual a bytes num blob",id:"acesso-individual-a-bytes-num-blob",level:2},{value:"Acesso aos bytes de um blob escalar",id:"acesso-aos-bytes-de-um-blob-escalar",level:4},{value:"Acceder a los bytes de un <code>4D.Blob</code>",id:"acceder-a-los-bytes-de-un-4dblob",level:4}];function c(e){let o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Para passar um BLOB a seus pr\xf3prios m\xe9todos, pode tamb\xe9m definir um ponteiro ao BLOB e passar o ponteiro como um par\xe2metro."}),"\n",(0,n.jsx)(o.p,{children:"Um BLOB \xe9 carregado totalmente na mem\xf3ria. Uma vari\xe1vel BLOB \xe9 mantida e existe apenas na mem\xf3ria. Um campo BLOB \xe9 carregado na mem\xf3ria desde o disco, como o resto do registro ao que pertence."}),"\n",(0,n.jsxs)(o.p,{children:["Como os outros tipos de campo que podem reter uma grande quantidade de dados (tais como tipo de campo Imagem), os campos BLOB n\xe3o s\xe3o duplicados na mem\xf3ria quando um registro for modificado. Por consiguiente, el resultado devuelto por los comandos ",(0,n.jsx)(o.code,{children:"Old"})," y ",(0,n.jsx)(o.code,{children:"Modified"})," no es significativo cuando se aplica a un campo blob."]}),"\n",(0,n.jsx)(o.h2,{id:"tipos-de-blob",children:"Tipos de Blob"}),"\n",(0,n.jsx)(o.p,{children:"Usando a linguagem 4D, h\xe1 duas maneiras de lidar com um blob:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"como un valor escalar"}),": un blob puede ser almacenado en una variable o un campo Blob y puede ser modificado."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsxs)(o.strong,{children:["como un objeto (",(0,n.jsx)(o.code,{children:"4D.Blob"}),")"]}),": un ",(0,n.jsx)(o.code,{children:"4D.Blob"})," es un objeto blob. Puede encapsular un blob o una parte de \xe9l en un ",(0,n.jsx)(o.code,{children:"4D.Blob"})," sin alterar el bloque original. Este m\xe9todo se chama ",(0,n.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/Object_type_(object-oriented_programming)#Boxing",children:"boxing"}),". Para m\xe1s informaci\xf3n sobre c\xf3mo instanciar un ",(0,n.jsx)(o.code,{children:"4D.Blob"}),", vea ",(0,n.jsx)(o.a,{href:"/docs/pt/20-R6/API/BlobClass",children:"Blob Class"}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Cada tipo de blob tem as suas vantagens. Utilize a tabela seguinte para determinar qual se adequa \xe0s suas necessidades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{style:{textAlign:"center"},children:"Blob"}),(0,n.jsx)(o.th,{style:{textAlign:"center"},children:"4D. Blob"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Edit\xe1vel"}),(0,n.jsx)(o.td,{style:{textAlign:"center"},children:"Sim"}),(0,n.jsx)(o.td,{style:{textAlign:"center"},children:"N\xe3o"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Partilh\xe1vel em objectos e colec\xe7\xf5es"}),(0,n.jsx)(o.td,{style:{textAlign:"center"},children:"N\xe3o"}),(0,n.jsx)(o.td,{style:{textAlign:"center"},children:"Sim"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Passado por refer\xeancia*"}),(0,n.jsx)(o.td,{style:{textAlign:"center"},children:"N\xe3o"}),(0,n.jsx)(o.td,{style:{textAlign:"center"},children:"Sim"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Desempenho ao acessar aos bytes"}),(0,n.jsx)(o.td,{style:{textAlign:"center"},children:"+"}),(0,n.jsx)(o.td,{style:{textAlign:"center"},children:"-"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Tamanho m\xe1ximo"}),(0,n.jsx)(o.td,{style:{textAlign:"center"},children:"2GB"}),(0,n.jsx)(o.td,{style:{textAlign:"center"},children:"Mem\xf3ria"})]})]})]}),"\n",(0,n.jsxs)(o.p,{children:["*Diferente dos comandos 4D concebidos para tomar uma bolha escalar como par\xe2metro, passar um blob escalar para um m\xe9todo duplica-o na mem\xf3ria. Puede pasar blobs y objetos blob (",(0,n.jsx)(o.code,{children:"4D.Blob"}),") a los m\xe9todos."]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Como padr\xe3o, 4D estabelece o tamanho blob m\xe1ximo para 2GB mas esse limite de tamanho pode ser menor dependendo de seu SO e de quanto espa\xe7o est\xe1 dispon\xedvel."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Entretanto, nenhum operador pode ser aplicado aos BLOBs."}),"\n",(0,n.jsxs)(o.h2,{id:"verificar-si-una-variable-contiene-un-blob-escalar-o-un-4dblob",children:["Verificar si una variable contiene un blob escalar o un ",(0,n.jsx)(o.code,{children:"4D.Blob"})]}),"\n",(0,n.jsxs)(o.p,{children:["Utilice el comando ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1509.html",children:"Value type"})," para determinar si un valor es de tipo Blob u Objeto.\nPara verificar que un objeto es un objeto blob (",(0,n.jsx)(o.code,{children:"4D.Blob"}),"), utilice ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1731.html",children:"instancia OB de"}),":"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"` Declare a variable of type BLOB\n C_BLOB(anyBlobVar)\n  ` The BLOB is passed as parameter to a 4D command\n SET BLOB SIZE(anyBlobVar;1024*1024)\n  ` The BLOB is passed as parameter to an external routine\n $errCode:=Do Something With This BLOB(anyBlobVar)\n  ` The BLOB is passed as a parameter to a method that returns a BLOB\n C_BLOB(retrieveBlob)\n retrieveBlob:=Fill_Blob(anyBlobVar)\n  ` A pointer to the BLOB is passed as parameter to a user method\n COMPUTE BLOB(-&gt;anyBlobVar)\n"})}),"\n",(0,n.jsx)(o.h2,{id:"passagem-de-blobs-como-par\xe2metros",children:"Passagem de blobs como par\xe2metros"}),"\n",(0,n.jsx)(o.p,{children:"Os BLOBs em 4D podem ser passados como par\xe2metros aos comandos 4D ou \xe0s rotinas dos plugins que esperam par\xe2metros BLOB."}),"\n",(0,n.jsx)(o.h3,{id:"passagem-de-blobs-e-objectos-blob-para-comandos-4d",children:"Passagem de blobs e objectos blob para comandos 4D"}),"\n",(0,n.jsxs)(o.p,{children:["Puede pasar un blob escalar o un ",(0,n.jsx)(o.code,{children:"4D.Blob"})," a todo comando 4D que tome un blob como par\xe1metro:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'var $myBlob: 4D. Blob CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text( $myBlob ; UTF8 text without length )\n'})}),"\n",(0,n.jsxs)(o.p,{children:["Algunos comandos 4D modifican el blob, y por lo tanto no soportan el tipo ",(0,n.jsx)(o.code,{children:"4D.Blob"}),":"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page560.html",children:"DELETE FROM BLOB"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page559.html",children:"INSERT IN BLOB"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page548.html",children:"INTEGER TO BLOB"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page550.html",children:"LONGINT TO BLOB"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page552.html",children:"REAL TO BLOB"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page606.html",children:"SET BLOB SIZE"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page554.html",children:"TEXT TO BLOB"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page532.html",children:"VARIABLE TO BLOB"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page556.html",children:"LIST TO BLOB"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page782.html",children:"SOAP DECLARATION"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page777.html",children:"WEB SERVICE SET PARAMETER"})}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"passagem-de-blobs-e-objectos-blob-para-m\xe9todos",children:"Passagem de blobs e objectos blob para m\xe9todos"}),"\n",(0,n.jsxs)(o.p,{children:["Al trabajar con m\xe9todos, usar objetos blob (",(0,n.jsx)(o.code,{children:"4D.Blob"}),") es m\xe1s eficiente, ya que son pasados por referencia. Tenha em mente que, ao contr\xe1rio dos objectos blob, que s\xe3o passados por refer\xeancia, as blobs escalares s\xe3o duplicadas na mem\xf3ria quando s\xe3o passadas para m\xe9todos."]}),"\n",(0,n.jsx)(o.h3,{id:"passar-um-blob-escalar-por-refer\xeancia-usando-um-ponteiro",children:"Passar um blob escalar por refer\xeancia usando um ponteiro"}),"\n",(0,n.jsx)(o.p,{children:"Para passar um blob escalar aos seus pr\xf3prios m\xe9todos sem  duplicar na mem\xf3ria, defina um ponteiro para a vari\xe1vel que o armazena e passe o ponteiro como um par\xe2metro."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Exemplos:"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"` Declarar uma vari\xe1vel de tipo BLOB\n C_BLOB(vBlob)\n  ` Estabelece o tamanho do BLOB para 256 bytes\n SET BLOB SIZE(vBlob;256)\n  ` O loop abaixo inicia os 256 bytes do BLOB para zero\n For(vByte;0;BLOB size(vBlob)-1)\n    vBlob{vByte}:=0\n End for\n"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"// Passar o blob como par\xe2metro para uma rotina externa\n $errCode:=Fazer algo com este blob($myBlobVar)\n"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"// Passe o blob como par\xe2metro para um m\xe9todo que devolve um blob\n var $retrieveBlob: Blob\n retrieveBlob:=Fill_Blob($myBlobVar)\n"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"// Pasa un puntero al blob como par\xe1metro a su propio m\xe9todo,\nCOMPUTE BLOB(->$myBlobVar)\n"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota para los desarrolladores de plugins:"}),' un par\xe1metro BLOB se declara como "&O" (la letra "O", no el d\xedgito "0").']}),"\n",(0,n.jsx)(o.h2,{id:"atribui\xe7\xe3o-de-uma-vari\xe1vel-blob-a-outra",children:"Atribui\xe7\xe3o de uma vari\xe1vel blob a outra"}),"\n",(0,n.jsx)(o.p,{children:"\xc9 poss\xedvel atribuir uma vari\xe1vel Blob a outra:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Exemplo:"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"` Declara duas vari\xe1veis de tipo BLOB\n C_BLOB(vBlobA;vBlobB)\n  ` Estabelece o tamanho do primeiro  BLOB a 10K\n SET BLOB SIZE(vBlobA;10*1024)\n  ` Atribui o primeiro BLOB ao segundo\n vBlobB:=vBlobA\n"})}),"\n",(0,n.jsx)(o.h2,{id:"convers\xe3o-autom\xe1tica-do-tipo-blob",children:"Convers\xe3o autom\xe1tica do tipo blob"}),"\n",(0,n.jsx)(o.p,{children:"4D converte automaticamente as bolhas escalares em objectos de bolhas, e vice-versa, quando s\xe3o atribu\xeddas umas \xe0s outras. Por exemplo:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'// Create a variable of type Blob and an object variable\nvar $myBlob: Blob\nvar $myObject : Object\n\n// Assign that blob to a property of $myObject named "blob"\n$myObject:=New object("blob"; $myBlob)\n\n// The blob stored in $myBlob is automatically converted to a 4D. Blob\n$type:= OB Instance of($myObject.blob; 4D. Blob)  //True\n\n// Conversion from 4D. Blob to Blob\n$myBlob:= $myObject.blob\n$type:= Value type($myBlob) // Blob\n'})}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["Al convertir un ",(0,n.jsx)(o.code,{children:"4D.Blob"})," a un blob escalar, si el tama\xf1o del ",(0,n.jsx)(o.code,{children:"4D.Blob"})," excede el tama\xf1o m\xe1ximo para los blobs escalares, el blob escalar resultante est\xe1 vac\xedo.\nPor ejemplo, cuando el tama\xf1o m\xe1ximo para los blobs escalares es 2GB, si convierte un ",(0,n.jsx)(o.code,{children:"4D.Blob"})," de 2,5GB a un blob, obtiene un blob vac\xedo."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"modifica\xe7\xe3o-de-um-blob-escalar",children:"Modifica\xe7\xe3o de um blob escalar"}),"\n",(0,n.jsx)(o.p,{children:"Ao contr\xe1rio dos objectos com blobs, as blobs escalares podem ser alteradas. Por exemplo:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"var $myBlob : Blob SET BLOB SIZE ($myBlob ; 16*1024)\n"})}),"\n",(0,n.jsx)(o.h2,{id:"acesso-individual-a-bytes-num-blob",children:"Acesso individual a bytes num blob"}),"\n",(0,n.jsx)(o.h4,{id:"acesso-aos-bytes-de-um-blob-escalar",children:"Acesso aos bytes de um blob escalar"}),"\n",(0,n.jsxs)(o.p,{children:["Puede acceder a los bytes individuales de un blob escalar utilizando las llaves ",(0,n.jsx)(o.code,{children:"{}"}),". Dentro de um BLOB, os bytes s\xe3o numerados de 0 a N-1, onde N \xe9 o tamanho do BLOB."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"  // Declara uma vari\xe1vel do tipo Blob\n var $vBlob : Blob\n  // Define o tamanho do blob para 256 bytes\n SET BLOB SIZE($vBlob;256)\n  // O c\xf3digo a seguir percorre o blob para definir cada byte como zero\n  For(vByte;0;BLOB size($vBlob)-1)\n    $vBlob{vByte}:=0\n End for\n"})}),"\n",(0,n.jsx)(o.p,{children:"Como todos os bytes de um BLOB podem ser direcionados de forma individual, \xe9 poss\xedvel armazenar o que quiser em um campo ou vari\xe1vel BLOB."}),"\n",(0,n.jsxs)(o.h4,{id:"acceder-a-los-bytes-de-un-4dblob",children:["Acceder a los bytes de un ",(0,n.jsx)(o.code,{children:"4D.Blob"})]}),"\n",(0,n.jsxs)(o.p,{children:["Utilice los corchetes ",(0,n.jsx)(o.code,{children:"[]"})," para acceder directamente a un byte espec\xedfico en un ",(0,n.jsx)(o.code,{children:"4D.Blob"})]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'var $myBlob: 4D. Blob CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text ( $myBlob ; UTF8 text without length )\n$byte:=$myBlob[5]\n'})}),"\n",(0,n.jsxs)(o.p,{children:["Dado que un ",(0,n.jsx)(o.code,{children:"4D.Blob"})," no puede ser modificado, puede leer los bytes de un ",(0,n.jsx)(o.code,{children:"4D.Blob"})," utilizando esta sintaxis, pero no modificarlos."]})]})}function b(e={}){let{wrapper:o}={...(0,l.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return d},a:function(){return r}});var s=a(667294);let n={},l=s.createContext(n);function r(e){let o=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(l.Provider,{value:o},e.children)}}}]);