"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84896"],{315415:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>r,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/validate-password","title":"Validate password","description":"Validate password ( utilisateur ; motDePasse {; digest} ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/validate-password.md","sourceDirName":"commands-legacy","slug":"/commands/validate-password","permalink":"/docs/fr/commands/validate-password","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvalidate-password.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"validate-password","title":"Validate password","slug":"/commands/validate-password","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"USERS TO BLOB","permalink":"/docs/fr/commands/users-to-blob"},"next":{"title":"Variables","permalink":"/docs/fr/category/variables"}}'),d=n("785893"),i=n("250065");let r={id:"validate-password",title:"Validate password",slug:"/commands/validate-password",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Validate password"})," ( ",(0,d.jsx)(s.em,{children:"utilisateur"})," ; ",(0,d.jsx)(s.em,{children:"motDePasse"})," {; ",(0,d.jsx)(s.em,{children:"digest"}),"} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Param\xe8tre"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"utilisateur"}),(0,d.jsx)(s.td,{children:"Integer, Text"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"N\xb0 de r\xe9f\xe9rence unique ou Nom de l\u2019utilisateur"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"motDePasse"}),(0,d.jsx)(s.td,{children:"Text"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Mot de passe non crypt\xe9"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"digest"}),(0,d.jsx)(s.td,{children:"Boolean"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsxs)(s.td,{children:["Mot de passe digest = Vrai, ",(0,d.jsx)(s.br,{}),"Mot de passe en clair (d\xe9faut)= Faux"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"R\xe9sultat"}),(0,d.jsx)(s.td,{children:"Boolean"}),(0,d.jsx)(s.td,{children:"\u2190"}),(0,d.jsx)(s.td,{children:"Vrai = mot de passe correct, Faux = mot de passe incorrect"})]})]})]}),"\n",(0,d.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(s.p,{children:["La commande ",(0,d.jsx)(s.strong,{children:"Validate password"})," retourne Vrai si la cha\xeene pass\xe9e dans ",(0,d.jsx)(s.em,{children:"motDePasse"})," est le mot de passe du compte utilisateur dont le n\xb0 de r\xe9f\xe9rence ou le nom est pass\xe9 dans ",(0,d.jsx)(s.em,{children:"utilisateur"}),"."]}),"\n",(0,d.jsxs)(s.p,{children:["Le param\xe8tre optionnel ",(0,d.jsx)(s.em,{children:"digest"})," vous permet d\u2019indiquer si le param\xe8tre ",(0,d.jsx)(s.em,{children:"motDePasse"})," contient un mot de passe en clair ou un mot de passe sous forme hach\xe9e (mode digest) :"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["si vous passez ",(0,d.jsx)(s.strong,{children:"Vrai"}),", vous indiquez que le param\xe8tre ",(0,d.jsx)(s.em,{children:"motDePasse"})," contient un mot de passe sous forme hach\xe9e (mode digest),"]}),"\n",(0,d.jsxs)(s.li,{children:["si vous passez ",(0,d.jsx)(s.strong,{children:"Faux"})," ou omettez ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,d.jsx)(s.em,{children:"motDePasse"})," contient un mot de passe en clair."]}),"\n"]}),"\n",(0,d.jsxs)(s.p,{children:["Ce param\xe8tre est particuli\xe8rement utile dans le contexte de l\u2019utilisation des m\xe9thodes base d'authentification, notamment ",(0,d.jsx)(s.a,{href:"/docs/fr/commands/on-rest-authentication-database-method",children:"On REST Authentication database method"}),"."]}),"\n",(0,d.jsx)(s.p,{children:"La commande est temporis\xe9e afin d\u2019\xe9viter des attaques par \u201Cforce brute\u201D (essais automatiques de multiples combinaisons de noms d\u2019utilisateurs/mots de passe). Ainsi, au bout du quatri\xe8me appel \xe0 la commande, elle n\u2019est ex\xe9cut\xe9e qu\u2019apr\xe8s 10 secondes d\u2019attente. Cette temporisation est globale au poste de travail."}),"\n",(0,d.jsx)(s.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,d.jsx)(s.p,{children:"L\u2019exemple suivant v\xe9rifie que \u201CLaurel\u201D est le mot de passe de l\u2019utilisateur \u201CHardy\u201D :"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:'\xa0GET USER LIST(atNomUtil;alRefUtil)\n\xa0$vlElem:=Find in array(atNomUtil;"Hardy")\n\xa0If($vlElem>0)\n\xa0\xa0\xa0\xa0If(Validate password(alRefUtil{$vlElem};"Laurel"))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Oui !")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Dommage !")\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Nom d\'utilisateur inconnu")\n\xa0End if\n'})}),"\n",(0,d.jsx)(s.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,d.jsxs)(s.p,{children:["Dans la ",(0,d.jsx)(s.a,{href:"/docs/fr/commands/on-rest-authentication-database-method",children:"On REST Authentication database method"}),", vous souhaitez tester une requ\xeate de connexion (vous utilisez les utilisateurs 4D de la base). Il vous suffit d\u2019\xe9crire :"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:"\xa0$0:=Validate password($1;$2;$3)\n"})}),"\n",(0,d.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/docs/fr/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/set-user-properties",children:"Set user properties"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/fr/commands/web-validate-digest",children:"WEB Validate digest"})]}),"\n",(0,d.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(s.td,{children:"638"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Thread safe"}),(0,d.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return r}});var t=n(667294);let d={},i=t.createContext(d);function r(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);