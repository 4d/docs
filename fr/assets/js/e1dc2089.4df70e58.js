"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46968"],{271919:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-delete-picture","title":"WP DELETE PICTURE","description":"WP DELETE PICTURE ( objImage )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-delete-picture.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-delete-picture","permalink":"/docs/fr/20-R7/WritePro/commands/wp-delete-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-delete-picture.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-delete-picture","title":"WP DELETE PICTURE","slug":"/WritePro/commands/wp-delete-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP DELETE HEADER","permalink":"/docs/fr/20-R7/WritePro/commands/wp-delete-header"},"next":{"title":"WP DELETE SECTION","permalink":"/docs/fr/20-R7/WritePro/commands/wp-delete-section"}}'),i=t("785893"),s=t("250065");let d={id:"wp-delete-picture",title:"WP DELETE PICTURE",slug:"/WritePro/commands/wp-delete-picture",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP DELETE PICTURE"})," ( ",(0,i.jsx)(n.em,{children:"objImage"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objImage"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Objet image (en ligne ou ancr\xe9e)"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"WP DELETE PICTURE"})," supprime l'image d\xe9finie par le param\xe8tre ",(0,i.jsx)(n.em,{children:"objImage"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"S'il n'existe aucune image, la commande ne fait rien."}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"Vous souhaitez supprimer une image \xe0 l'aide de son ID :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0var $myPicture : Object\n\xa0\n\xa0\xa0// Lire l'image\xa0\xa0\n\xa0$myPicture:=WP Get element by ID(myDoc;\"Logo\")\n\xa0\n\xa0\xa0// Supprimer l'image\n\xa0WP DELETE PICTURE($myPicture)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Manipuler des images"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-add-picture",children:"WP Add picture"})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var r=t(667294);let i={},s=r.createContext(i);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);