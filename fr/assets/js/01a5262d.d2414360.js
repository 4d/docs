"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5570"],{966e3:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-picture-range","title":"WP Picture range","description":"WP Picture range ( objCible ) -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-picture-range.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-picture-range","permalink":"/docs/fr/WritePro/commands/wp-picture-range","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-picture-range.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-picture-range","title":"WP Picture range","slug":"/WritePro/commands/wp-picture-range","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Paragraph range","permalink":"/docs/fr/WritePro/commands/wp-paragraph-range"},"next":{"title":"WP PRINT","permalink":"/docs/fr/WritePro/commands/wp-print"}}'),i=n("785893"),s=n("250065");let a={id:"wp-picture-range",title:"WP Picture range",slug:"/WritePro/commands/wp-picture-range",displayed_sidebar:"docs"},c=void 0,o={},d=[{value:"Compatibilit\xe9",id:"compatibilit\xe9",level:4},{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"WP Picture range"})," ( ",(0,i.jsx)(r.em,{children:"objCible"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Param\xe8tre"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"objCible"}),(0,i.jsx)(r.td,{children:"Object"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Plage ou \xe9l\xe9ment"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"R\xe9sultat"}),(0,i.jsx)(r.td,{children:"Object"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"Plage contenant uniquement les images"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"compatibilit\xe9",children:"Compatibilit\xe9"}),"\n",(0,i.jsxs)(r.p,{children:["La commande ",(0,i.jsx)(r.strong,{children:"WP Picture range"})," \xe9tait nomm\xe9e ",(0,i.jsx)(r.strong,{children:"WP Create picture range"})," dans les versions pr\xe9c\xe9dentes de 4D Write Pro. Elle a \xe9t\xe9 renomm\xe9e pour plus de clart\xe9."]}),"\n",(0,i.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(r.p,{children:["La commande ",(0,i.jsx)(r.strong,{children:"WP Picture range"})," retourne un objet plage qui r\xe9f\xe9rence uniquement les images contenues dans ",(0,i.jsx)(r.em,{children:"objCible"})," que vous avez pass\xe9 en param\xe8tre. L'objet plage d'images retourn\xe9 peut \xeatre utilis\xe9 avec ",(0,i.jsx)(r.a,{href:"/docs/fr/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"})," et ",(0,i.jsx)(r.a,{href:"/docs/fr/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," afin de manipuler les attributs d'images uniquement."]}),"\n",(0,i.jsxs)(r.p,{children:["Dans ",(0,i.jsx)(r.em,{children:"objCible"}),", vous pouvez passer :"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"un objet plage 4D Write Pro, ou"}),"\n",(0,i.jsx)(r.li,{children:"un \xe9l\xe9ment (en-t\xeate / pied / corps / tableau / ligne / paragraphe / section / sous-section)."}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(r.p,{children:"Vous souhaitez modifier la couleur de bordure des images uniquement :"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:'\xa0$oPicts:=WP Picture range($oSelection)\n\xa0WP SET ATTRIBUTES($oPicts;wk border color;"blue")\n'})}),"\n",(0,i.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"Manipuler des images"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.em,{children:"Utiliser les commandes du th\xe8me Texte multistyle"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/WritePro/commands/wp-add-picture",children:"WP Add picture"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/WritePro/commands/wp-insert-picture",children:"WP INSERT PICTURE"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/WritePro/commands/wp-paragraph-range",children:"WP Paragraph range"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/WritePro/commands/wp-selection-range",children:"WP Selection range"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function u(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return a}});var t=n(667294);let i={},s=t.createContext(i);function a(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);