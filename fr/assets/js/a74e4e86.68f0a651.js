"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86819"],{555260:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/svg-export-to-picture","title":"SVG EXPORT TO PICTURE","description":"SVG EXPORT TO PICTURE ( refEl\xe9ment ; vVarImage {; typeExport} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/svg-export-to-picture.md","sourceDirName":"commands-legacy","slug":"/commands/svg-export-to-picture","permalink":"/docs/fr/commands/svg-export-to-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsvg-export-to-picture.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"svg-export-to-picture","title":"SVG EXPORT TO PICTURE","slug":"/commands/svg-export-to-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SVG","permalink":"/docs/fr/category/svg"},"next":{"title":"SVG Find element ID by coordinates","permalink":"/docs/fr/commands/svg-find-element-id-by-coordinates"}}'),s=r("785893"),d=r("250065");let a={id:"svg-export-to-picture",title:"SVG EXPORT TO PICTURE",slug:"/commands/svg-export-to-picture",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SVG EXPORT TO PICTURE"})," ( ",(0,s.jsx)(n.em,{children:"refEl\xe9ment"})," ; ",(0,s.jsx)(n.em,{children:"vVarImage"})," {; ",(0,s.jsx)(n.em,{children:"typeExport"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"refEl\xe9ment"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"R\xe9f\xe9rence d\u2019\xe9l\xe9ment XML racine"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vVarPicture"}),(0,s.jsx)(n.td,{children:"Picture"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Variable image devant recevoir l\u2019arbre XML (image SVG)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"typeExport"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"0=Ne pas stocker la source de donn\xe9es, 1=Copier la source de donn\xe9es  (par d\xe9faut), 2 = Prendre possession de la source de donn\xe9es"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"SVG EXPORT TO PICTURE"})," permet de sauvegarder dans la variable ou le champ image d\xe9sign\xe9(e) par le param\xe8tre ",(0,s.jsx)(n.em,{children:"vVarImage"})," une image au format SVG contenue dans un arbre XML.Pour plus d'informations sur le format SVG, reportez-vous \xe0 la section ",(0,s.jsx)(n.em,{children:"Pr\xe9sentation des commandes XML g\xe9n\xe9riques"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"refEl\xe9ment"})," la r\xe9f\xe9rence de l\u2019\xe9l\xe9ment XML racine contenant l\u2019image SVG."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"vVarImage"})," le nom de la variable image ou du champ image 4D devant contenir l\u2019image SVG. L\u2019image est export\xe9e dans son format natif (description XML) et est dessin\xe9e via le moteur de rendu SVG au moment de l\u2019affichage."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,s.jsx)(n.em,{children:"typeExport"})," vous permet de d\xe9finir la mani\xe8re dont la source de donn\xe9es XML doit \xeatre prise en charge par la commande. Vous pouvez passer dans ce param\xe8tre une des constantes suivantes, plac\xe9es dans le th\xe8me \u201C",(0,s.jsx)(n.em,{children:"XML"}),"\u201D :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Copy XML data source"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsxs)(n.td,{children:["4D conserve une copie de l\u2019arbre DOM avec l\u2019image, ce qui permet de la sauvegarder dans un champ image de la base de donn\xe9es et de la r\xe9afficher ou de l\u2019exporter \xe0 tout moment. Ce mode d\u2019exportation est utilis\xe9 par d\xe9faut si le param\xe8tre ",(0,s.jsx)(n.em,{children:"typeExport"})," est omis."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Get XML data source"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"4D lit uniquement la source de donn\xe9es XML, elle n\u2019est pas conserv\xe9e avec l\u2019image. Ce param\xe9trage acc\xe9l\xe8re sensiblement l\u2019ex\xe9cution de la commande, toutefois l\u2019arbre DOM n\u2019\xe9tant pas conserv\xe9, il ne sera pas possible de stocker ni d\u2019exporter l\u2019image."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Own XML data source"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:["4D exporte l\u2019arbre DOM avec l\u2019image. L\u2019image pourra \xeatre stock\xe9e ou export\xe9e et l\u2019ex\xe9cution de la commande est rapide. Toutefois, la r\xe9f\xe9rence XML ",(0,s.jsx)(n.em,{children:"refEl\xe9ment"})," n\u2019est alors plus utilisable par les autres commandes 4D."]})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"L\u2019exemple suivant permet d\u2019afficher \u201CHello World\u201D dans une image 4D :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var vImage : Picture\n\xa0$svg:=DOM Create XML Ref("svg";"http://www.w3.org/2000/svg")\n\xa0$ref:=DOM Create XML element($svg;"text";"font-size";26;"fill";"red")\n\xa0DOM SET XML ATTRIBUTE($ref;"y";"1em")\n\xa0DOM SET XML ELEMENT VALUE($ref;"Hello World")\n\xa0SVG EXPORT TO PICTURE($svg;vImage;Copy XML data source)\n\xa0DOM CLOSE XML($svg)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(795907).Z+"",width:"227",height:"118"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/dom-export-to-file",children:"DOM EXPORT TO FILE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/dom-export-to-var",children:"DOM EXPORT TO VAR"})]}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1017"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},795907:function(e,n,r){r.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var t=r(667294);let s={},d=t.createContext(s);function a(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);