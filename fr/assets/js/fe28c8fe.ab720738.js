"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90660"],{377508:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>l,toc:()=>i,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/web-send-raw-data","title":"WEB SEND RAW DATA","description":"WEB SEND RAW DATA ( donn\xe9es {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-send-raw-data.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-raw-data","permalink":"/docs/fr/commands/web-send-raw-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-raw-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-send-raw-data","title":"WEB SEND RAW DATA","slug":"/commands/web-send-raw-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SEND HTTP REDIRECT","permalink":"/docs/fr/commands/web-send-http-redirect"},"next":{"title":"WEB SEND TEXT","permalink":"/docs/fr/commands/web-send-text"}}'),r=s("785893"),o=s("250065");let a={id:"web-send-raw-data",title:"WEB SEND RAW DATA",slug:"/commands/web-send-raw-data",displayed_sidebar:"docs"},d=void 0,l={},i=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WEB SEND RAW DATA"})," ( ",(0,r.jsx)(n.em,{children:"donn\xe9es"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"donn\xe9es"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Donn\xe9es HTTP \xe0 envoyer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Envoi morcel\xe9 (chunked)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"WEB SEND RAW DATA"})," permet au serveur Web 4D d\u2019envoyer des donn\xe9es HTTP \u201Cbrutes\u201D, pouvant \xeatre morcel\xe9es."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"donn\xe9es"})," contient les deux parties standard d\u2019une r\xe9ponse HTTP, c\u2019est-\xe0-dire l\u2019en-t\xeate et le corps (header et body). Les donn\xe9es sont envoy\xe9es sans formatage pr\xe9alable par le serveur. Toutefois, 4D effectue un contr\xf4le \xe9l\xe9mentaire sur l\u2019en-t\xeate et le corps de la r\xe9ponse afin qu\u2019elle soit valide :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Si l\u2019en-t\xeate est incomplet ou non conforme aux sp\xe9cifications du protocole HTTP, 4D le modifie en cons\xe9quence."}),"\n",(0,r.jsx)(n.li,{children:"Si la r\xe9ponse HTTP est incompl\xe8te, 4D ajoute les informations manquantes. Si, par exemple, vous souhaitez effectuer une redirection, vous devez \xe9crire :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-HTML",children:"HTTP/1.1 302 \nLocation : http://...\n"})}),"\n",(0,r.jsx)(n.p,{children:"Si vous passez uniquement :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-HTML",children:"Location : http://...\n"})}),"\n",(0,r.jsx)(n.p,{children:"4D compl\xe9tera la r\xe9ponse en ajoutant HTTP/1.1 302."}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"})," permet de d\xe9clarer que la r\xe9ponse sera envoy\xe9e sous forme \u201Cmorcel\xe9e\u201D (chunked). Le d\xe9coupage des r\xe9ponses peut \xeatre utile lorsque le serveur envoie une r\xe9ponse sans conna\xeetre sa longueur totale (par exemple si la r\xe9ponse n\u2019a pas encore \xe9t\xe9 g\xe9n\xe9r\xe9e). Tous les navigateurs compatibles HTTP/1.1 acceptent les r\xe9ponses \u201Cmorcel\xe9es\u201D.",(0,r.jsx)(n.br,{}),"\nSi vous passez le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"}),", le serveur Web inclura automatiquement le champ ",(0,r.jsx)(n.em,{children:"transfer-encoding: chunked"})," dans l\u2019en-t\xeate de la r\xe9ponse, si n\xe9cessaire (vous pouvez g\xe9rer manuellement l\u2019en-t\xeate de la r\xe9ponse si vous le souhaitez). Le reste de la r\xe9ponse sera \xe9galement format\xe9 en respectant la syntaxe de l\u2019option chunked. Les r\xe9ponses morcel\xe9es comportent un seul en-t\xeate et un nombre ind\xe9fini de corps.",(0,r.jsx)(n.br,{}),"\nToutes les instructions ",(0,r.jsx)(n.strong,{children:"WEB SEND RAW DATA"})," suivant l\u2019ex\xe9cution de ",(0,r.jsx)(n.strong,{children:"WEB SEND RAW DATA"}),"(donn\xe9es;*) au sein de la m\xeame m\xe9thode seront consid\xe9r\xe9es comme partie de la r\xe9ponse (qu\u2019elles contiennent ou non le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"}),"). Le serveur met un terme \xe0 l\u2019envoi morcel\xe9 \xe0 la fin de l\u2019ex\xe9cution de la m\xe9thode."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si le client Web ne prend pas en charge le protocole HTTP/1.1, 4D convertira automatiquement la r\xe9ponse au format compatible HTTP/1.0 (l\u2019envoi ne sera pas morcel\xe9). Dans ce cas toutefois, il est possible que le r\xe9sultat ne corresponde pas \xe0 vos attentes. Il est donc recommand\xe9 de tester si le navigateur est compatible HTTP/1.1 et d\u2019envoyer une r\xe9ponse adapt\xe9e. Pour cela, vous pouvez utiliser une m\xe9thode de ce type :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $0 : Boolean\n\xa0ARRAY TEXT(tabChamps;0)\n\xa0ARRAY TEXT(tabValeurs;0)\n\xa0WEB GET HTTP HEADER(tabChamps;tabValeurs)\n\xa0$0:=False\n\xa0If(Size of array(tabValeurs)>=3)\n\xa0\xa0\xa0\xa0If(Position("HTTP/1.1";tabValeurs{3})>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=True\xa0//Le navigateur est compatible HTTP/1.1, on retourne Vrai dans $0\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Combin\xe9e \xe0 la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/web-get-http-body",children:"WEB GET HTTP BODY"})," et aux autres commandes du th\xe8me \u201CServeur Web\u201D, cette commande compl\xe8te la gamme d\u2019outils mis \xe0 la disposition des d\xe9veloppeurs 4D pour traiter de mani\xe8re enti\xe8rement personnalis\xe9e les connexions HTTP entrantes et sortantes. Ces diff\xe9rents outils sont pr\xe9sent\xe9s dans le sch\xe9ma suivant :"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(38892).Z+"",width:"616",height:"315"})}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["Cet exemple illustre l\u2019emploi de l\u2019option chunked avec la commande ",(0,r.jsx)(n.strong,{children:"WEB SEND RAW DATA"}),". Les donn\xe9es (une suite de chiffres) sont envoy\xe9es en 100 morceaux g\xe9n\xe9r\xe9s \xe0 la vol\xe9e dans une boucle. A noter que l\u2019en-t\xeate de la r\xe9ponse n\u2019est pas explicitement d\xe9fini : la commande ",(0,r.jsx)(n.strong,{children:"WEB SEND RAW DATA"})," l\u2019enverra automatiquement et y ins\xe9rera le champ ",(0,r.jsx)(n.em,{children:"transfer-encoding: chunked"})," car le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"})," est utilis\xe9."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $cpt : Integer\n\xa0var $mon_blob : Blob\n\xa0var $output : Text\n\xa0\n\xa0For($cpt;1;100)\n\xa0\xa0\xa0\xa0$output:="["+String($cpt)+"]"\n\xa0\xa0\xa0\xa0TEXT TO BLOB($output;$mon_blob;UTF8 text without length)\n\xa0\xa0\xa0\xa0WEB SEND RAW DATA($mon_blob;*)\n\xa0End for\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/web-get-http-body",children:"WEB GET HTTP BODY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/web-get-http-header",children:"WEB GET HTTP HEADER"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"815"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},38892:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict856016.fr-ecc5a1a4f28db37146305fd9ac7b1616.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var t=s(667294);let r={},o=t.createContext(r);function a(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);