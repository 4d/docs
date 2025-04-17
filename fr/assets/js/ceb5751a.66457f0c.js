"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46140"],{547352:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-sheet-options","title":"VP Get sheet options","description":"VP Get sheet options ( vpAreaName Integer } ) ) : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-get-sheet-options.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-sheet-options","permalink":"/docs/fr/ViewPro/commands/vp-get-sheet-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-sheet-options.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-get-sheet-options","title":"VP Get sheet options"},"sidebar":"docs","previous":{"title":"VP Get sheet name","permalink":"/docs/fr/ViewPro/commands/vp-get-sheet-name"},"next":{"title":"VP Get show print lines","permalink":"/docs/fr/ViewPro/commands/vp-get-show-print-lines"}}'),o=t("785893"),r=t("250065");let i={id:"vp-get-sheet-options",title:"VP Get sheet options"},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Objet retourn\xe9",id:"objet-retourn\xe9",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP Get sheet options"})," ( ",(0,o.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,o.jsx)(n.em,{children:"sheet"})," : Integer } ) ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Param\xe8tres"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vpAreaName"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sheet"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"R\xe9sultat"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"<-"}),(0,o.jsx)(n.td,{children:"Objet options de la feuille"}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["La commande ",(0,o.jsx)(n.code,{children:"VP Get sheet options"})," retourne un objet contenant les options de la feuille courante de la zone ",(0,o.jsx)(n.em,{children:"vpAreaName"})," ."]}),"\n",(0,o.jsxs)(n.p,{children:["Passez le nom de la zone 4D View Pro dans ",(0,o.jsx)(n.em,{children:"vpAreaName"}),". Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,o.jsxs)(n.p,{children:["Dans le param\xe8tre optionnel ",(0,o.jsx)(n.em,{children:"sheet"}),", vous pouvez d\xe9signer une feuille sp\xe9cifique (la num\xe9rotation commence \xe0 z\xe9ro). Si le param\xe8tre est omis ou si vous passez ",(0,o.jsx)(n.code,{children:"vk current sheet"}),", la feuille courante est utilis\xe9e."]}),"\n",(0,o.jsx)(n.h2,{id:"objet-retourn\xe9",children:"Objet retourn\xe9"}),"\n",(0,o.jsxs)(n.p,{children:["La commande retourne un objet contenant les valeurs courantes pour toutes les options de feuille disponibles. La valeur d'une option peut avoir \xe9t\xe9 modifi\xe9e par l'utilisateur ou par la m\xe9thode ",(0,o.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-sheet-options",children:"VP SET SHEET OPTIONS"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Pour consulter la liste compl\xe8te des options, voir ",(0,o.jsx)(n.a,{href:"/docs/fr/ViewPro/configuring#sheet-options",children:"Options feuille"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'$options:=VP Get sheet options("ViewProArea")\n If($options.colHeaderVisible) //les en-t\xeates des colonnes sont visibles\n    ... //faire quelque chose\n End if\n'})}),"\n",(0,o.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/fr/ViewPro/configuring#sheet-options",children:"4D VIEW PRO SHEET OPTIONS"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-sheet-options",children:"VP SET SHEET OPTIONS"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let o={},r=s.createContext(o);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);