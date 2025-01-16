"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25469"],{800924:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>s,assets:()=>A,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/set-recent-fonts","title":"SET RECENT FONTS","description":"SET RECENT FONTS ( tabPolices )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-recent-fonts.md","sourceDirName":"commands-legacy","slug":"/commands/set-recent-fonts","permalink":"/docs/fr/20-R7/commands/set-recent-fonts","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-recent-fonts.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-recent-fonts","title":"SET RECENT FONTS","slug":"/commands/set-recent-fonts","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Select RGB Color","permalink":"/docs/fr/20-R7/commands/select-rgb-color"},"next":{"title":"System folder","permalink":"/docs/fr/20-R7/commands/system-folder"}}'),i=t("785893"),c=t("250065");let d={id:"set-recent-fonts",title:"SET RECENT FONTS",slug:"/commands/set-recent-fonts",displayed_sidebar:"docs"},r=void 0,A={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET RECENT FONTS"})," ( ",(0,i.jsx)(n.em,{children:"tabPolices"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tabPolices"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Tableau de noms de polices"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"SET RECENT FONTS"}),' permet de modifier la liste des polices r\xe9centes affich\xe9es dans le menu contextuel des "polices r\xe9centes".']}),"\n",(0,i.jsxs)(n.p,{children:["Ce menu contient les noms des derni\xe8res polices s\xe9lectionn\xe9es durant la session. Il est notamment utilis\xe9 par les zones de ",(0,i.jsx)(n.em,{children:"Notes de programmation"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"Vous souhaitez ajouter une police au menu des polices r\xe9centes :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(236099).Z+"",width:"421",height:"191"})}),"\n",(0,i.jsx)(n.p,{children:"Vous ex\xe9cutez le code suivant :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($tTRecentes;0)\n\xa0FONT LIST($tTRecentes;2)\n\xa0APPEND TO ARRAY($tTRecentes;"Segoe Script")\n\xa0SET RECENT FONTS($tTRecentes)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Le menu contient alors :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(41645).Z+"",width:"421",height:"217"})}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/font-list",children:"FONT LIST"})}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1305"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},236099:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},41645:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict1202031.fr-6c582048b9c91ca8b5af608c509ca427.png"},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var s=t(667294);let i={},c=s.createContext(i);function d(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);