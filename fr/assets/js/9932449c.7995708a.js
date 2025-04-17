"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64793"],{835061:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/close-window","title":"CLOSE WINDOW","description":"CLOSE WINDOW {( fen\xeatre )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/close-window.md","sourceDirName":"commands-legacy","slug":"/commands/close-window","permalink":"/docs/fr/20-R8/commands/close-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclose-window.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"close-window","title":"CLOSE WINDOW","slug":"/commands/close-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Windows","permalink":"/docs/fr/20-R8/commands/theme/Windows"},"next":{"title":"CONVERT COORDINATES","permalink":"/docs/fr/20-R8/commands/convert-coordinates"}}'),o=r("785893"),d=r("250065");let t={id:"close-window",title:"CLOSE WINDOW",slug:"/commands/close-window",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"CLOSE WINDOW"})," {( ",(0,o.jsx)(n.em,{children:"fen\xeatre"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Param\xe8tre"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"fen\xeatre"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de la fen\xeatre externe ou Fen\xeatre de premier plan du process si ce param\xe8tre est omis"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"CLOSE WINDOW"})," referme la derni\xe8re fen\xeatre cr\xe9\xe9e \xe0 l'aide de la commande ",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/commands/open-window",children:"Open window"})," ou ",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/commands/open-form-window",children:"Open form window"})," dans le process courant. S'il n'y a pas de fen\xeatre personnalis\xe9e ouverte, ",(0,o.jsx)(n.strong,{children:"CLOSE WINDOW"})," ne fait rien ; la commande ne ferme pas les fen\xeatres syst\xe8me. Si ",(0,o.jsx)(n.strong,{children:"CLOSE WINDOW"})," est appel\xe9e alors qu'un formulaire est actif dans la fen\xeatre, elle n'a pas d'effet non plus. Vous devez appeler ",(0,o.jsx)(n.strong,{children:"CLOSE WINDOW"})," lorsque vous avez fini d'utiliser une fen\xeatre ouverte avec ",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/commands/open-window",children:"Open window"})," ou ",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/commands/open-form-window",children:"Open form window"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Il est inutile de passer un num\xe9ro \xe0 ",(0,o.jsx)(n.strong,{children:"CLOSE WINDOW"})," lorsque vous l'utilisez pour refermer des fen\xeatres ouvertes \xe0 l'aide de la fonction ",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/commands/open-window",children:"Open window"})," ou ",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/commands/open-form-window",children:"Open form window"}),". En effet, si plusieurs fen\xeatres ont \xe9t\xe9 ouvertes par une succession d'appels \xe0 ces commandes, elles ne pourront \xeatre referm\xe9es que dans l'ordre inverse de leur cr\xe9ation."]}),"\n",(0,o.jsxs)(n.p,{children:["Si vous passez en param\xe8tre la r\xe9f\xe9rence d'une zone externe cr\xe9\xe9e \xe0 l'aide de la fonction , ",(0,o.jsx)(n.strong,{children:"CLOSE WINDOW"})," referme la fen\xeatre externe. Pour plus d'informations sur les fen\xeatres externes, reportez-vous \xe0 la description de la fonction ."]}),"\n",(0,o.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,o.jsxs)(n.p,{children:["L'exemple suivant ouvre une fen\xeatre formulaire et cr\xe9e des enregistrements \xe0 l'aide de la commande ",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/commands/add-record",children:"ADD RECORD"}),". Une fois les enregistrements ajout\xe9s, la fen\xeatre est ferm\xe9e par la commande ",(0,o.jsx)(n.strong,{children:"CLOSE WINDOW"})," :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0FORM SET INPUT([Employ\xe9s];\"Entr\xe9e\")\n\xa0$refFen:=Open form window([Employ\xe9s];\"Entr\xe9e\")\n\xa0Repeat\n\xa0\xa0\xa0\xa0ADD RECORD([Employ\xe9s])\xa0//Ajout d'un enregistrement d'employ\xe9\n\xa0Until(OK=0)\xa0//Boucle jusqu'\xe0 ce que l'utilisateur annule\n\xa0CLOSE WINDOW\xa0//Fermeture de la fen\xeatre\n"})}),"\n",(0,o.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/commands/open-form-window",children:"Open form window"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/commands/open-window",children:"Open window"})]}),"\n",(0,o.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,o.jsx)(n.td,{children:"154"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return t}});var s=r(667294);let o={},d=s.createContext(o);function t(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);