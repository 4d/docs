"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29912"],{499888:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/pasteboard-data-size","title":"Pasteboard data size","description":"Pasteboard data size ( typeDonn\xe9es ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/pasteboard-data-size.md","sourceDirName":"commands-legacy","slug":"/commands/pasteboard-data-size","permalink":"/docs/fr/commands/pasteboard-data-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpasteboard-data-size.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"pasteboard-data-size","title":"Pasteboard data size","slug":"/commands/pasteboard-data-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get text from pasteboard","permalink":"/docs/fr/commands/get-text-from-pasteboard"},"next":{"title":"SET FILE TO PASTEBOARD","permalink":"/docs/fr/commands/set-file-to-pasteboard"}}'),a=s("785893"),t=s("250065");let d={id:"pasteboard-data-size",title:"Pasteboard data size",slug:"/commands/pasteboard-data-size",displayed_sidebar:"docs"},o=void 0,i={},l=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Exemple 4",id:"exemple-4",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Pasteboard data size"})," ( ",(0,a.jsx)(n.em,{children:"typeDonn\xe9es"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Param\xe8tre"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"typeDonn\xe9es"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Type de donn\xe9es"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"R\xe9sultat"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Taille (en octets) des donn\xe9es pr\xe9sentes dans le conteneur ou code d'erreur"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Pasteboard data size"})," vous permet de savoir s'il y a des donn\xe9es du type ",(0,a.jsx)(n.em,{children:"typeDonn\xe9es"})," dans le conteneur de donn\xe9es."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note :"})," Dans le cadre d'une op\xe9ration de copier/coller, le conteneur de donn\xe9es correspond au Presse-papiers."]}),"\n",(0,a.jsx)(n.p,{children:"Si le conteneur de donn\xe9es est vide ou ne contient pas de donn\xe9es du type sp\xe9cifi\xe9, la fonction retourne une erreur -102. Si le conteneur contient des donn\xe9es du type sp\xe9cifi\xe9, la fonction retourne la taille des donn\xe9es exprim\xe9e en octets."}),"\n",(0,a.jsxs)(n.p,{children:["Passez dans ",(0,a.jsx)(n.em,{children:"typeDonn\xe9es"})," une valeur d\xe9finissant le type de donn\xe9es \xe0 tester. Vous pouvez passer une signature 4D, un type UTI (macOS), un nom/num\xe9ro de format (Windows), ou un type de 4 caract\xe8res (compatibilit\xe9). Pour plus d'informations sur ces types, reportez-vous \xe0 la section ",(0,a.jsx)(n.em,{children:"Gestion du conteneur de donn\xe9es"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Apr\xe8s avoir v\xe9rifi\xe9 que le conteneur contient bien des donn\xe9es du type que vous voulez, vous pouvez les r\xe9cup\xe9rer \xe0 l'aide d'une des commandes suivantes :"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Si le conteneur contient du texte, vous pouvez l'extraire \xe0 l'aide de la commande ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/get-text-from-pasteboard",children:"Get text from pasteboard"}),", qui retourne une valeur texte. Sinon, vous pouvez utiliser la commande ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),", qui retourne le texte dans un BLOB."]}),"\n",(0,a.jsxs)(n.li,{children:["Si le conteneur contient une image, vous pouvez l'extraire \xe0 l'aide de la commande ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/get-picture-from-pasteboard",children:"GET PICTURE FROM PASTEBOARD"}),", qui retourne l'image dans un champ ou une variable. Sinon, vous pouvez utiliser la commande ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),", qui retourne l'image dans un BLOB."]}),"\n",(0,a.jsxs)(n.li,{children:["Si le conteneur contient un chemin d'acc\xe8s de fichier, vous pouvez l'extraire \xe0 l'aide de la commande ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/get-file-from-pasteboard",children:"Get file from pasteboard"}),", qui retourne le chemin d'acc\xe8s du fichier."]}),"\n",(0,a.jsxs)(n.li,{children:["Pour tout type de donn\xe9es, vous pouvez utiliser la commande ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),", qui retourne les donn\xe9es dans un BLOB."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,a.jsx)(n.p,{children:"L'exemple suivant teste si le Presse-papiers contient une image jpeg et, si oui, la copie dans une variable 4D :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0If(Pasteboard data size("com.4d.private.picture.jfif")>0)\xa0// Y a-t-il une image jpeg dans le Presse-papiers ?\n\xa0\xa0\xa0\xa0GET PICTURE FROM PASTEBOARD($vPicVariable)\xa0// Si oui, extraire l\'image du Presse-papiers\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Il n\'y a pas d\'image dans le Presse-papiers.")\n\xa0End if\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note :"})," Si vous passez le type g\xe9n\xe9rique 'PICT' (ou la constante Picture data) \xe0 la commande, elle retournera toujours 1 et non une taille si le Presse-papiers contient une image."]}),"\n",(0,a.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,a.jsx)(n.p,{children:"G\xe9n\xe9ralement, apr\xe8s un couper ou un copier, les applications placent des donn\xe9es de type Texte ou Image dans le Presse-papiers, ces deux types de donn\xe9es standard sont reconnus par la plupart des applications. Cependant, une application peut placer dans le Presse-papiers plusieurs copies des m\xeames donn\xe9es sous des formats diff\xe9rents. Par exemple, chaque fois que vous copiez ou coupez un tableau, l'application tableur peut placer les donn\xe9es dans un format propri\xe9taire \u2014 par exemple, \u2018SPSH\u2019 \u2014 ou dans les formats SYLK et TEXT. La copie \u2018SPSH\u2019 contient les donn\xe9es structur\xe9es dans le format interne de l'application. La copie SYLK contient les m\xeames donn\xe9es, mais dans le format SYLK, reconnu par la plupart des tableurs. Enfin, la copie TEXT contient les m\xeames donn\xe9es, mais sans les informations de formatage suppl\xe9mentaires pr\xe9sentes dans les formats SYLK ou \u2018SPSH\u2019. Donc, lorsque vous \xe9crivez des routines de Couper/Copier/Coller entre 4D et une application tableur, en prenant l'hypoth\xe8se que vous connaissez la description du format \u2018SPSH\u2019 et que vous pouvez analyser les donn\xe9es SYLK, vous pouvez \xe9crire le code suivant :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0// D'abord, v\xe9rifier si le Presse-papiers contient les donn\xe9es venant du tableur\n\xa0\xa0\xa0\xa0:(Pasteboard data size('SPSH')>0)\n\xa0\xa0// ...\n\xa0\xa0// Ensuite, v\xe9rifier si le Presse-papiers contient des donn\xe9es au format SYLK\n\xa0\xa0\xa0\xa0:(Pasteboard data size('SYLK')>0)\n\xa0\xa0// ...\n\xa0\xa0// Enfin, v\xe9rifier si le Presse-papiers contient des donn\xe9es au format TEXT\n\xa0\xa0\xa0\xa0:(Pasteboard data size('TEXT')>0)\n\xa0\xa0// ...\n\xa0End case\n"})}),"\n",(0,a.jsx)(n.p,{children:"Autrement dit, vous essayez d'extraire du Presse-papiers la copie des donn\xe9es la plus riche en informations originales."}),"\n",(0,a.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,a.jsx)(n.p,{children:"Vous voulez d\xe9placer des donn\xe9es en format priv\xe9 entre divers objets de votre formulaire. Vous pouvez \xe9crire :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//objet source\n\xa0If(FORM Event=On Begin Drag Over)\n\xa0\xa0\xa0\xa0APPEND DATA TO PASTEBOARD("some.private.data";$data)\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//objet cible\n\xa0If(FORM Event=On Drag Over)\n\xa0\xa0\xa0\xa0$0:=Choose(Pasteboard data size("some.private.data")>0;0;-1)\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h2,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,a.jsxs)(n.p,{children:["R\xe9f\xe9rez-vous \xe0 l'exemple de la commande ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"Conteneur de donn\xe9es"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/fr/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/fr/commands/get-picture-from-pasteboard",children:"GET PICTURE FROM PASTEBOARD"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/fr/commands/get-text-from-pasteboard",children:"Get text from pasteboard"})]}),"\n",(0,a.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,a.jsx)(n.td,{children:"400"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2717"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Modifie les variables"}),(0,a.jsx)(n.td,{children:"error"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var r=s(667294);let a={},t=r.createContext(a);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);