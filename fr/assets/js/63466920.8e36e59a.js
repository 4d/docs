"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63625"],{125745:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>c,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/convert-picture","title":"CONVERT PICTURE","description":"CONVERT PICTURE ( image ; codec {; compression} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/convert-picture.md","sourceDirName":"commands-legacy","slug":"/commands/convert-picture","permalink":"/docs/fr/commands/convert-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-picture.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"convert-picture","title":"CONVERT PICTURE","slug":"/commands/convert-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COMBINE PICTURES","permalink":"/docs/fr/commands/combine-pictures"},"next":{"title":"CREATE THUMBNAIL","permalink":"/docs/fr/commands/create-thumbnail"}}'),i=s("785893"),t=s("250065");let c={id:"convert-picture",title:"CONVERT PICTURE",slug:"/commands/convert-picture",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CONVERT PICTURE"})," ( ",(0,i.jsx)(n.em,{children:"image"})," ; ",(0,i.jsx)(n.em,{children:"codec"})," {; ",(0,i.jsx)(n.em,{children:"compression"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"image"}),(0,i.jsx)(n.td,{children:"Picture"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Image \xe0 convertir"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Image convertie"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"codec"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Identifiant de codec d'image"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"compression"}),(0,i.jsx)(n.td,{children:"Real"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Qualit\xe9 de compression"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"CONVERT PICTURE"})," convertit ",(0,i.jsx)(n.em,{children:"image"})," dans un nouveau type."]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"codec"})," indique le type d\u2019image \xe0 g\xe9n\xe9rer. Un codec peut \xeatre une extension (par exemple \u201C.gif\u201D) ou un type Mime (par exemple \u201Cimage/jpg\u201D). Vous pouvez obtenir la liste des codecs disponibles via la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si le champ ou la variable ",(0,i.jsx)(n.em,{children:"image"})," est de type compos\xe9 (si par exemple elle est issue d\u2019un copier-coller), seules les informations correspondant au type ",(0,i.jsx)(n.em,{children:"codec"})," sont conserv\xe9es dans l\u2019image r\xe9sultante."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Si le type de ",(0,i.jsx)(n.em,{children:"codec"})," demand\xe9 est \xe9gal au type d'origine de l'",(0,i.jsx)(n.em,{children:"image"}),", aucune conversion n'est effectu\xe9e et l'image est retourn\xe9e telle quelle (sauf si le param\xe8tre ",(0,i.jsx)(n.em,{children:"compression"})," est utilis\xe9, cf. ci-dessous)."]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"compression"}),", s'il est pass\xe9, permet de d\xe9finir la qualit\xe9 de compression \xe0 appliquer \xe0 l\u2019image r\xe9sultante lorsqu\u2019un codec compatible est utilis\xe9. Passez dans ",(0,i.jsx)(n.em,{children:"compression"})," une valeur entre 0 et 1 d\xe9finissant la qualit\xe9 de compression, 0 \xe9tant la qualit\xe9 la plus m\xe9diocre (compression \xe9lev\xe9e) et 1 la meilleure qualit\xe9 (compression faible). Ce param\xe8tre est pris en compte uniquement lorsque le codec supporte la compression (par exemple JPEG ou HDPhoto) et est pris en charge par les APIs WIC et ImageIO. Pour plus d\u2019informations sur les APIs de gestion d\u2019image dans 4D, reportez-vous \xe0 la section ",(0,i.jsx)(n.em,{children:"Introduction aux images"}),". Par d\xe9faut, si vous omettez le param\xe8tre ",(0,i.jsx)(n.em,{children:"compression"}),", la meilleure qualit\xe9 est appliqu\xe9e (compression = 1)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Si vous souhaitez appeler ",(0,i.jsx)(n.strong,{children:"CONVERT PICTURE"})," avec un type d'image qui n'est pas pris en charge dans les versions 64 bits de 4D (tel que PICT), assurez-vous d'effectuer la conversion sur une version 32 bits de 4D (o\xf9 le type d'image original est pris en charge). Pour plus d'informations, reportez-vous \xe0 la page ",(0,i.jsx)(n.em,{children:"Passer de 32 bits \xe0 64 bits"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsx)(n.p,{children:"Conversion de l\u2019image vpPhoto au format jpeg :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0CONVERT PICTURE(vpPhoto;".jpg")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsx)(n.p,{children:"Conversion d\u2019une image avec une qualit\xe9 de 60 % :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0CONVERT PICTURE(vPicture;".JPG";0,6)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/commands/picture-codec-list",children:"PICTURE CODEC LIST"})}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var r=s(667294);let i={},t=r.createContext(i);function c(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);