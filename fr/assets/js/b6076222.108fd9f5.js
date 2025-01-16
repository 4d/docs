"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31858"],{975972:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>c});var o=JSON.parse('{"id":"ViewPro/commands/vp-convert-from-4d-view","title":"VP Convert from 4D View","description":"VP Convert from 4D View ( 4DViewDocument Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-convert-from-4d-view.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-convert-from-4d-view","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-convert-from-4d-view","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-convert-from-4d-view.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-convert-from-4d-view","title":"VP Convert from 4D View"},"sidebar":"docs","previous":{"title":"VP Combine ranges","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-combine-ranges"},"next":{"title":"VP Convert to picture","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-convert-to-picture"}}'),r=t("785893"),i=t("250065");let s={id:"vp-convert-from-4d-view",title:"VP Convert from 4D View"},c=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4}];function a(e){let n={blockquote:"blockquote",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Convert from 4D View"})," ( ",(0,r.jsx)(n.em,{children:"4DViewDocument"})," : Blob ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4DViewDocument"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Document 4D View"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objet 4D View Pro"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.code,{children:"VP Convert from 4D View"})," vous permet de convertir un document 4D View legacy en un objet 4D View Pro."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Cette commande ne n\xe9cessite pas l'installation du plug-in 4D View dans votre environnement."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"4DViewDocument"}),", passez une variable ou un champ BLOB contenant le document 4D View \xe0 convertir. La commande retourne un objet 4D View Pro dans lequel toutes les informations stock\xe9es \xe0 l'origine dans le document 4D View sont converties en attributs 4D View Pro."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez obtenir un objet 4D View Pro \xe0 partir d'une zone 4D View stock\xe9e dans un BLOB :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"C_OBJECT($vpObj)\n$vpObj:=VP Convert from 4D View($pvblob)\n"})})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var o=t(667294);let r={},i=o.createContext(r);function s(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);