"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84888"],{528471:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>t,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/create-folder","title":"CREATE FOLDER","description":"CREATE FOLDER ( cheminAcc\xe8s {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/create-folder.md","sourceDirName":"commands-legacy","slug":"/commands/create-folder","permalink":"/docs/fr/commands/create-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-folder.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"create-folder","title":"CREATE FOLDER","slug":"/commands/create-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Create document","permalink":"/docs/fr/commands/create-document"},"next":{"title":"DELETE DOCUMENT","permalink":"/docs/fr/commands/delete-document"}}'),d=n("785893"),i=n("250065");let c={id:"create-folder",title:"CREATE FOLDER",slug:"/commands/create-folder",displayed_sidebar:"docs"},l=void 0,t={},a=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"CREATE FOLDER"})," ( ",(0,d.jsx)(s.em,{children:"cheminAcc\xe8s"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Param\xe8tre"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"cheminAcc\xe8s"}),(0,d.jsx)(s.td,{children:"Text"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Chemin d'acc\xe8s au nouveau dossier \xe0 cr\xe9er"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"*"}),(0,d.jsx)(s.td,{children:"Op\xe9rateur"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Cr\xe9er la hi\xe9rarchie du dossier"})]})]})]}),"\n",(0,d.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(s.p,{children:["La commande ",(0,d.jsx)(s.strong,{children:"CREATE FOLDER"})," cr\xe9e un dossier en fonction du chemin d'acc\xe8s que vous passez dans le param\xe8tre ",(0,d.jsx)(s.em,{children:"cheminAcc\xe8s"}),"."]}),"\n",(0,d.jsxs)(s.p,{children:["Si vous passez un nom dans ",(0,d.jsx)(s.em,{children:"cheminAcc\xe8s"}),", le dossier est cr\xe9\xe9 dans le dossier de la base."]}),"\n",(0,d.jsxs)(s.p,{children:["Vous pouvez \xe9galement passer dans ",(0,d.jsx)(s.em,{children:"cheminAcc\xe8s"})," une hi\xe9rarchie de dossiers \xe0 partir de la racine du volume ou du dossier de la base (dans ce cas, la cha\xeene doit se terminer par un s\xe9parateur de dossier).",(0,d.jsx)(s.br,{}),"\nSi vous omettez le param\xe8tre *, une erreur est g\xe9n\xe9r\xe9e et aucun dossier n'est cr\xe9\xe9 si au moins un dossier interm\xe9diaire n'existe pas.",(0,d.jsx)(s.br,{}),"\nSi vous passez le param\xe8tre *, ",(0,d.jsx)(s.strong,{children:"CREATE FOLDER"})," recr\xe9e la hi\xe9rarchie de dossiers si n\xe9cessaire et aucune erreur n'est g\xe9n\xe9r\xe9e. Dans ce cas, vous pouvez \xe9galement passer un chemin d\u2019acc\xe8s de document dans ",(0,d.jsx)(s.em,{children:"cheminAcc\xe8s"}),". Le nom du document est alors ignor\xe9 mais la hi\xe9rarchie de dossiers d\xe9finie dans ",(0,d.jsx)(s.em,{children:"cheminAcc\xe8s"})," est cr\xe9\xe9e r\xe9cursivement."]}),"\n",(0,d.jsx)(s.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,d.jsx)(s.p,{children:"L'exemple suivant cr\xe9e le dossier \u201CArchives\u201D dans le dossier de la base :"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:'\xa0CREATE FOLDER("Archives")\n'})}),"\n",(0,d.jsx)(s.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,d.jsx)(s.p,{children:"L'exemple suivant cr\xe9e le dossier \u201CArchives\u201D dans le dossier de la base, puis cr\xe9e les sous-dossiers \u201CJanvier\u201D et \u201CF\xe9vrier\u201D:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:'\xa0CREATE FOLDER("Archives")\n\xa0CREATE FOLDER("Archives\\\\Janvier")\n\xa0CREATE FOLDER("Archives\\\\F\xe9vrier")\n'})}),"\n",(0,d.jsx)(s.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,d.jsx)(s.p,{children:"L'exemple suivant cr\xe9e le dossier \u201CArchives\u201D \xe0 la racine du volume C :"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:'\xa0CREATE FOLDER("C:\\\\Archives")\n'})}),"\n",(0,d.jsx)(s.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,d.jsx)(s.p,{children:'Cr\xe9ation de la hi\xe9rarchie de dossiers "C:\\Archives\\2011\\January\\" :'}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:'\xa0CREATE FOLDER("C:\\\\Archives\\\\2011\\\\January\\\\";*)\n'})}),"\n",(0,d.jsx)(s.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,d.jsx)(s.p,{children:'Cr\xe9ation du sous-dossier "\\February\\" dans le dossier existant "C:\\Archives\\" :'}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:'\xa0CREATE FOLDER("C:\\\\Archives\\\\2011\\\\February\\\\Doc.txt";*)\n\xa0\xa0// le fichier "Doc.txt" est ignor\xe9\n'})}),"\n",(0,d.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/docs/fr/commands/folder-list",children:"FOLDER LIST"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/test-path-name",children:"Test path name"})]}),"\n",(0,d.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(s.td,{children:"475"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Thread safe"}),(0,d.jsx)(s.td,{children:"\u2713"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Modifie les variables"}),(0,d.jsx)(s.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return c}});var r=n(667294);let d={},i=r.createContext(d);function c(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);