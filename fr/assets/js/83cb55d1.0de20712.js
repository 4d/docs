"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91432],{819055:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=s(474848),o=s(28453);const t={id:"wp-new-bookmark",title:"WP NEW BOOKMARK",slug:"/WritePro/commands/wp-new-bookmark",displayed_sidebar:"docs"},i=void 0,a={id:"WritePro/commands-legacy/wp-new-bookmark",title:"WP NEW BOOKMARK",description:"WP NEW BOOKMARK ( objCible ; nomSignet )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-new-bookmark.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-new-bookmark",permalink:"/docs/fr/WritePro/commands/wp-new-bookmark",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new-bookmark.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-new-bookmark",title:"WP NEW BOOKMARK",slug:"/WritePro/commands/wp-new-bookmark",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP New",permalink:"/docs/fr/WritePro/commands/wp-new"},next:{title:"WP New footer",permalink:"/docs/fr/WritePro/commands/wp-new-footer"}},d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function m(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP NEW BOOKMARK"})," ( ",(0,r.jsx)(n.em,{children:"objCible"})," ; ",(0,r.jsx)(n.em,{children:"nomSignet"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objCible"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Plage ou \xe9l\xe9ment"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomSignet"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom du signet \xe0 cr\xe9er"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"WP NEW BOOKMARK"})," cr\xe9e un nouveau signet nomm\xe9 ",(0,r.jsx)(n.em,{children:"nomSignet"})," bas\xe9 sur ",(0,r.jsx)(n.em,{children:"objPlage"})," du document parent."]}),"\n",(0,r.jsxs)(n.p,{children:["Les signets sont des r\xe9f\xe9rences nomm\xe9es associ\xe9es \xe0 des plages ou \xe0 des \xe9l\xe9ments, vous permettant de d\xe9signer et de r\xe9utiliser des parties sp\xe9cifiques du document, par exemple pour les besoins li\xe9s \xe0 la g\xe9n\xe9ration de mod\xe8les. Pour plus d'informations, veuillez vous reporter \xe0 la section ",(0,r.jsx)(n.em,{children:"Gestion des signets"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"objCible"}),", vous pouvez passer :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"une plage 4D Write Pro, ou"}),"\n",(0,r.jsx)(n.li,{children:"un \xe9l\xe9ment (corps / tableau / ligne / image en ligne / paragraphe)"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si vous passez un \xe9l\xe9ment dans ",(0,r.jsx)(n.em,{children:"objCible"}),", le signet contiendra uniquement l'\xe9l\xe9ment d\xe9fini."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"nomSignet"}),", passez le nom du nouveau signet. Un nom de signet doit \xeatre conforme aux r\xe8gles de nommage HTML/CSS, ",(0,r.jsx)(n.em,{children:"i.e"}),". il doit uniquement contenir des caract\xe8res alphanum\xe9riques (les caract\xe8res invalides, tels que les espaces, sont automatiquement supprim\xe9s). Chaque nom de signet doit \xeatre unique dans un document. Si un signet de m\xeame nom existe d\xe9j\xe0 dans le document, il est \xe9cras\xe9."]}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez cr\xe9er autant de signets que vous voulez dans un m\xeame document. Plusieurs signets peuvent \xeatre cr\xe9\xe9s avec la m\xeame plage. Une fois cr\xe9\xe9, un signet est automatiquement stock\xe9 dans le document parent et est sauvegard\xe9 en m\xeame temps que le document lui-m\xeame."}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez cr\xe9er un nouveau signet r\xe9f\xe9ren\xe7ant le texte couramment s\xe9lectionn\xe9 dans le document. Vous pouvez \xe9crire :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $range : Object\n\xa0$range:=WP Selection range(*;"WPDocument")\n\xa0WP NEW BOOKMARK($range;"my_bookmark")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez renommer un signet existant. Pour cela, vous devez cr\xe9er un nouveau signet bas\xe9 sur la m\xeame plage puis supprimer l'ancien :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $bookmarkOldName : Text\n\xa0var $bookmarkNewName : Text\n\xa0var $p : Integer\n\xa0var $wpRange : Object\n\xa0\n\xa0$bookmarkOldName:="MyBookmark"\n\xa0$bookmarkNewName:="MyNewBookmark"\n\xa0\n\xa0ARRAY TEXT($_bookmarks;0)\n\xa0WP GET BOOKMARKS(WParea;$_bookmarks)\n\xa0\n\xa0$p:=Find in array($_bookmarks;$bookmarkOldName)\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0$wpRange:=WP Get bookmark range(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP DELETE BOOKMARK(WParea;$bookmarkOldName)\n\xa0\xa0\xa0\xa0WP CREATE BOOKMARK($wpRange;$bookmarkNewName)\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-bookmark-range",children:"WP Bookmark range"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-delete-bookmark",children:"WP DELETE BOOKMARK"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-get-bookmarks",children:"WP GET BOOKMARKS"})]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(296540);const o={},t=r.createContext(o);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);