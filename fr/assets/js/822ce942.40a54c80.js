"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14934"],{227914:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>i,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"commands-legacy/change-password","title":"CHANGE PASSWORD","description":"CHANGE PASSWORD ( motDePasse )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/change-password.md","sourceDirName":"commands-legacy","slug":"/commands/change-password","permalink":"/docs/fr/commands/change-password","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fchange-password.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"change-password","title":"CHANGE PASSWORD","slug":"/commands/change-password","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CHANGE CURRENT USER","permalink":"/docs/fr/commands/change-current-user"},"next":{"title":"Current user","permalink":"/docs/fr/commands/current-user"}}'),r=n("785893"),d=n("250065");let a={id:"change-password",title:"CHANGE PASSWORD",slug:"/commands/change-password",displayed_sidebar:"docs"},o=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"CHANGE PASSWORD"})," ( ",(0,r.jsx)(s.em,{children:"motDePasse"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"motDePasse"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Nouveau mot de passe"})]})})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"CHANGE PASSWORD"})," permet de changer le mot de passe de l'utilisateur courant. Cette commande remplace le mot de passe courant par le nouveau mot de passe que vous passez dans ",(0,r.jsx)(s.em,{children:"motDePasse"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Attention :"})," Les mots de passe diff\xe9rencient les caract\xe8res majuscules et minuscules."]}),"\n",(0,r.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(s.p,{children:"L'exemple suivant permet \xe0 l'utilisateur de modifier son mot de passe :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0CHANGE CURRENT USER\xa0// Afficher la bo\xeete de dialogue des mots de passe\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$pw1:=Request("Saisissez le nouveau mot de passe pour "+Current user)\n\xa0\xa0// Le mot de passe doit comporter au moins cinq caract\xe8res\n\xa0\xa0\xa0\xa0If(((OK=1)&($pw1#""))&(Length($pw1)>5))\n\xa0\xa0// V\xe9rifier qu\'un mot de passe valide a \xe9t\xe9 saisi\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$pw2:=Request("Saisissez de nouveau le mot de passe")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If((OK=1)&($pw1=$pw2))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CHANGE PASSWORD($pw2)\xa0// Modifier le mot de passe\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/commands/change-current-user",children:"CHANGE CURRENT USER"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/object-set-font",children:"OBJECT SET FONT"})]})]})}function u(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return a}});var t=n(667294);let r={},d=t.createContext(r);function a(e){let s=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);