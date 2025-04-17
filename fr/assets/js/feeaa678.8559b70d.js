"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70622"],{106621:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/qr-get-document-property","title":"QR Get document property","description":"QR Get document property ( zone ; propri\xe9t\xe9 ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-get-document-property.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-document-property","permalink":"/docs/fr/20-R8/commands/qr-get-document-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-document-property.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-get-document-property","title":"QR Get document property","slug":"/commands/qr-get-document-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET DESTINATION","permalink":"/docs/fr/20-R8/commands/qr-get-destination"},"next":{"title":"QR Get drop column","permalink":"/docs/fr/20-R8/commands/qr-get-drop-column"}}'),d=r("785893"),s=r("250065");let i={id:"qr-get-document-property",title:"QR Get document property",slug:"/commands/qr-get-document-property",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"QR Get document property"})," ( ",(0,d.jsx)(n.em,{children:"zone"})," ; ",(0,d.jsx)(n.em,{children:"propri\xe9t\xe9"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"zone"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"propri\xe9t\xe9"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"1=Dialogue d'impression, 2=Unit\xe9 du document"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"R\xe9sultat"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Valeur de la propri\xe9t\xe9"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"QR Get document property"})," vous permet de conna\xeetre la valeur courante de la ",(0,d.jsx)(n.em,{children:"propri\xe9t\xe9"})," d'affichage de la bo\xeete de dialogue d'impression ou de l'unit\xe9 du document pr\xe9sent dans la ",(0,d.jsx)(n.em,{children:"zone"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Vous pouvez passer dans le param\xe8tre ",(0,d.jsx)(n.em,{children:"propri\xe9t\xe9"})," une des constantes du th\xe8me ",(0,d.jsx)(n.em,{children:"QR Propri\xe9t\xe9s de document"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Valeur"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr field separator"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"3"}),(0,d.jsx)(n.td,{children:"Code de caract\xe8re du d\xe9limiteur de champ. La valeur par d\xe9faut est la variable syst\xe8me FldDelimit (Tab par d\xe9faut)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr printing dialog"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsxs)(n.td,{children:["Affichage de la bo\xeete de dialogue d'impression :",(0,d.jsx)(n.br,{}),"Si valeur = 0, la bo\xeete de dialogue d'impression n'est pas affich\xe9e avant l'impression.Si valeur = 1, la bo\xeete de dialogue d'impression est affich\xe9e avant l'impression (valeur par d\xe9faut)."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr record separator"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:"Code de caract\xe8re du d\xe9limiteur d'enregistrement. La valeur par d\xe9faut est la variable syst\xe8me RecDelimit (Retour chariot par d\xe9faut)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr unit"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsxs)(n.td,{children:["Unit\xe9 du document : ",(0,d.jsx)(n.br,{}),"Si valeur = 0, l'unit\xe9 du document est le point.Si valeur = 1, l'unit\xe9 du document est le centim\xe8tre.Si valeur = 2, l'unit\xe9 du document est le pouce."]})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,d.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e.",(0,d.jsx)(n.br,{}),"\nSi la valeur du param\xe8tre ",(0,d.jsx)(n.em,{children:"propri\xe9t\xe9"})," est incorrecte, l\u2019erreur -9852 est g\xe9n\xe9r\xe9e."]}),"\n",(0,d.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R8/commands/qr-set-document-property",children:"QR SET DOCUMENT PROPERTY"})}),"\n",(0,d.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"773"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var t=r(667294);let d={},s=t.createContext(d);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);