"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24536"],{173078:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/locked-by","title":"LOCKED BY","description":"LOCKED BY ( {laTable ;} process ; utilisateur4D ; utilisateurSession ; nomProcess )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/locked-by.md","sourceDirName":"commands-legacy","slug":"/commands/locked-by","permalink":"/docs/fr/commands/locked-by","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flocked-by.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"locked-by","title":"LOCKED BY","slug":"/commands/locked-by","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Locked","permalink":"/docs/fr/commands/locked"},"next":{"title":"Locked records info","permalink":"/docs/fr/commands/locked-records-info"}}'),t=n("785893"),i=n("250065");let l={id:"locked-by",title:"LOCKED BY",slug:"/commands/locked-by",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"LOCKED BY"})," ( {",(0,t.jsx)(s.em,{children:"laTable"})," ;} ",(0,t.jsx)(s.em,{children:"process"})," ; ",(0,t.jsx)(s.em,{children:"utilisateur4D"})," ; ",(0,t.jsx)(s.em,{children:"utilisateurSession"})," ; ",(0,t.jsx)(s.em,{children:"nomProcess"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"laTable"}),(0,t.jsx)(s.td,{children:"Table"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Table de l'enregistrement verrouill\xe9 ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"process"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Num\xe9ro du process"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"utilisateur4D"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Nom de l'utilisateur 4D"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"utilisateurSession"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Nom de l'utilisateur ayant ouvert la session de travail"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"nomProcess"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Nom du process"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"LOCKED BY"})," retourne des informations sur l'utilisateur et le process qui ont verrouill\xe9 l'enregistrement. Le num\xe9ro du process(*), le nom de l'utilisateur dans l'application 4D et dans le syst\xe8me ainsi que le nom du process sont retourn\xe9s dans les variables ",(0,t.jsx)(s.em,{children:"process"}),", ",(0,t.jsx)(s.em,{children:"utilisateur4D"}),", ",(0,t.jsx)(s.em,{children:"utilisateurSession"})," et ",(0,t.jsx)(s.em,{children:"nomProcess"}),". Vous pouvez utiliser ces informations dans une bo\xeete de dialogue pour avertir l'utilisateur lorsqu'un enregistrement est verrouill\xe9."]}),"\n",(0,t.jsx)(s.p,{children:"(*) Il s'agit du num\xe9ro du process sur la machine o\xf9 est ex\xe9cut\xe9 le code \xe0 l'origine du verrouillage. Dans le cas d'un trigger ou d'une m\xe9thode ex\xe9cut\xe9e sur serveur, c'est le num\xe9ro du process \"jumeau\" sur le serveur qui est retourn\xe9. Dans le cas d'un process ex\xe9cut\xe9 sur une machine distante, c'est le num\xe9ro du process sur la machine distante qui est retourn\xe9."}),"\n",(0,t.jsxs)(s.p,{children:["Si l'enregistrement n'est pas verrouill\xe9, ",(0,t.jsx)(s.em,{children:"process"})," prend la valeur 0 et ",(0,t.jsx)(s.em,{children:"utilisateur4D"}),", ",(0,t.jsx)(s.em,{children:"utilisateurSession"})," et ",(0,t.jsx)(s.em,{children:"nomProcess"})," retournent des cha\xeenes vides. Si vous essayez de charger en lecture/\xe9criture un enregistrement qui a \xe9t\xe9 supprim\xe9, ",(0,t.jsx)(s.em,{children:"process"})," retourne -1 et ",(0,t.jsx)(s.em,{children:"utilisateur4D"}),", ",(0,t.jsx)(s.em,{children:"utilisateurSession"})," et ",(0,t.jsx)(s.em,{children:"nomProcess"})," retournent des cha\xeenes vides."]}),"\n",(0,t.jsxs)(s.p,{children:["Le param\xe8tre ",(0,t.jsx)(s.em,{children:"utilisateur4D"})," est le nom de l'utilisateur d\xe9fini dans l'\xe9diteur de mots de passe de 4D ou bien l'alias de l'utilisateur tel qu'il a \xe9t\xe9 d\xe9fini avec la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/set-user-alias",children:"SET USER ALIAS"}),' (le cas \xe9ch\xe9ant). Si aucun mot de passe ou alias n\'a \xe9t\xe9 d\xe9fini, "Super_Utilisateur" est retourn\xe9.']}),"\n",(0,t.jsxs)(s.p,{children:["Le param\xe8tre ",(0,t.jsx)(s.em,{children:"utilisateurSession"})," retourn\xe9 correspond au nom de l'utilisateur ayant ouvert la session sur le poste client (ce nom est notamment affich\xe9 dans la fen\xeatre d'administration de 4D Server pour chaque process ouvert)."]}),"\n",(0,t.jsxs)(s.p,{children:["Si l'enregistrement a \xe9t\xe9 verrouill\xe9 par une ",(0,t.jsx)(s.em,{children:"requ\xeate REST $lock"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"process"})," retourne -2"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"4Duser"}),' retourne ""']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"sessionUser"}),' retourne ""']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"processName"}),' retourne l\'adresse IP du cadenas, comme par exemple "127.0.0.1"']}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/locked",children:"Locked"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.em,{children:"Verrouillage d'enregistrements"})]}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"353"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return l}});var r=n(667294);let t={},i=r.createContext(t);function l(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);