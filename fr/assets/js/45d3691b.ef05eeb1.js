"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["259"],{933073:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/ldap-search","title":"LDAP Search","description":"LDAP Search ( dnRootEntry ; filtre {; scope {; attributs {; attributsEnTableau}}} ) : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/ldap-search.md","sourceDirName":"commands-legacy","slug":"/commands/ldap-search","permalink":"/docs/fr/20-R8/commands/ldap-search","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fldap-search.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ldap-search","title":"LDAP Search","slug":"/commands/ldap-search","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LDAP LOGOUT","permalink":"/docs/fr/20-R8/commands/ldap-logout"},"next":{"title":"LDAP SEARCH ALL","permalink":"/docs/fr/20-R8/commands/ldap-search-all"}}'),s=r("785893"),l=r("250065");let i={id:"ldap-search",title:"LDAP Search",slug:"/commands/ldap-search",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LDAP Search"})," ( ",(0,s.jsx)(n.em,{children:"dnRootEntry"})," ; ",(0,s.jsx)(n.em,{children:"filtre"})," {; ",(0,s.jsx)(n.em,{children:"scope"})," {; ",(0,s.jsx)(n.em,{children:"attributs"})," {; ",(0,s.jsx)(n.em,{children:"attributsEnTableau"}),"}}} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dnRootEntry"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Distinguished Name de l'\xe9l\xe9ment racine o\xf9 d\xe9marrer la recherche"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filtre"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Filtre de recherche LDAP"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scope"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:'Champ d\'action de la recherche : "base" (d\xe9faut), "one" ou "sub"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"attributs"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Attribut(s) \xe0 r\xe9cup\xe9rer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"attributsEnTableau"}),(0,s.jsx)(n.td,{children:"Boolean array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Vrai = forcer le retour des attributs en tableaux, Faux = forcer le retour des attributs en variables simples"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Attributs cl\xe9/valeur"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"LDAP Search"})," recherche sur le serveur LDAP cible la premi\xe8re occurrence correspondant aux crit\xe8res d\xe9finis. Cette commande doit \xeatre ex\xe9cut\xe9e dans le contexte d'une connexion serveur LDAP ouverte par la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/ldap-login",children:"LDAP LOGIN"})," dans le process courant ; sinon une erreur 1003 est retourn\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans ",(0,s.jsx)(n.em,{children:"dnRootEntry"}),", passez le ",(0,s.jsx)(n.em,{children:"Distinguished Name"})," de l'\xe9l\xe9ment racine du serveur LDAP ; la recherche d\xe9marrera \xe0 partir de cet \xe9l\xe9ment."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans ",(0,s.jsx)(n.em,{children:"filtre"}),", passez le filtre de recherche LDAP \xe0 appliquer. Ce filtre doit \xeatre conforme \xe0 la ",(0,s.jsx)(n.a,{href:"http://tools.ietf.org/search/rfc2254",children:"rfc2225"}),'. Vous pouvez passer une cha\xeene vide "" afin de ne pas appliquer de filtre. Le joker "*" pour chercher des sous-cha\xeenes est pris en charge.']}),"\n",(0,s.jsxs)(n.p,{children:["Dans ",(0,s.jsx)(n.em,{children:"scope"}),', passez une des constantes suivantes du th\xe8me "',(0,s.jsx)(n.em,{children:"LDAP"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LDAP all levels"}),(0,s.jsx)(n.td,{children:"Cha\xeene"}),(0,s.jsx)(n.td,{children:"sub"}),(0,s.jsxs)(n.td,{children:["Chercher dans l'\xe9l\xe9ment racine d\xe9fini par ",(0,s.jsx)(n.em,{children:"dnRootEntry"})," et dans toutes les branches suivantes"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LDAP root and next"}),(0,s.jsx)(n.td,{children:"Cha\xeene"}),(0,s.jsx)(n.td,{children:"one"}),(0,s.jsxs)(n.td,{children:["Chercher dans l'\xe9l\xe9ment racine d\xe9fini par ",(0,s.jsx)(n.em,{children:"dnRootEntry"})," et dans les branches directement suivantes sur un niveau"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LDAP root only"}),(0,s.jsx)(n.td,{children:"Cha\xeene"}),(0,s.jsx)(n.td,{children:"base"}),(0,s.jsxs)(n.td,{children:["Chercher uniquement dans l'\xe9l\xe9ment racine d\xe9fini par ",(0,s.jsx)(n.em,{children:"dnRootEntry"})," (d\xe9faut si omis)"]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Dans ",(0,s.jsx)(n.em,{children:"attributs"}),", passez un tableau texte contenant la liste de tous les attributs LDAP \xe0 r\xe9cup\xe9rer \xe0 partir des entr\xe9es trouv\xe9es. Par d\xe9faut, si ce param\xe8tre est omis, tous les attributs sont r\xe9cup\xe9r\xe9s."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Les noms d'attributs LDAP tiennent compte des majuscules/minuscules. Pour plus d'informations sur les attributs LDAP, vous pouvez consulter ",(0,s.jsx)(n.a,{href:"https://msdn.microsoft.com/en-us/library/ms675089%28v=vs.85%29.aspx",children:"cette page"})," qui liste tous les attributs disponibles pour MS Active Directory."]}),"\n",(0,s.jsxs)(n.p,{children:["Par d\xe9faut, la commande retourne les attributs sous forme de collection si plusieurs r\xe9sultats sont trouv\xe9s, ou sous forme de variable simple si un seul r\xe9sultat est trouv\xe9. Le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"attributsEnTableau"}),' vous permet de "forcer" le formatage des attributs retourn\xe9s en collection ou en variable pour chaque attribut d\xe9fini :']}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Lorsque vous passez ",(0,s.jsx)(n.strong,{children:"true"})," dans un \xe9l\xe9ment, l'\xe9l\xe9ment correspondant du param\xe8tre ",(0,s.jsx)(n.em,{children:"attributs"})," sera retourn\xe9 en collection. Si une seule valeur est trouv\xe9e, la commande retourne une collection \xe0 un seul \xe9l\xe9ment."]}),"\n",(0,s.jsxs)(n.li,{children:["Lorsque vous passez ",(0,s.jsx)(n.strong,{children:"false"})," dans un \xe9l\xe9ment, l'\xe9l\xe9ment correspondant du param\xe8tre ",(0,s.jsx)(n.em,{children:"attributs"})," sera retourn\xe9 en variable simple. Si plusieurs valeurs sont trouv\xe9es, la commande retourne uniquement le premier \xe9l\xe9ment."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez obtenir le num\xe9ro de t\xe9l\xe9phone de l'utilisateur \"smith\" dans l'annuaire de l'entreprise :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($_tabAttributes;0)\n\xa0APPEND TO ARRAY($_tabAttributes;"cn")\n\xa0APPEND TO ARRAY($_tabAttributes;"phoneNumber")\n\xa0LDAP LOGIN($url;$dn;$pwd)\n\xa0$filter:="cn=*smith*"\n\xa0$vfound:=LDAP Search($dnSearchRootEntry;$filter;LDAP all levels;$_tabAttributes)\n\xa0LDAP LOGOUT\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:'Vous voulez obtenir un tableau de toutes les entr\xe9es trouv\xe9es pour l\'attribut "memberOf" :'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $entry : Object\n\xa0ARRAY TEXT($_tabAttributes;0)\n\xa0ARRAY BOOLEAN($_tabAttributes_asArray;0)\n\xa0APPEND TO ARRAY($_tabAttributes;"cn")\n\xa0APPEND TO ARRAY($_tabAttributes_asArray;False)\n\xa0APPEND TO ARRAY($_tabAttributes;"memberOf")\n\xa0APPEND TO ARRAY($_tabAttributes_asArray;True)\n\xa0\n\xa0LDAP LOGIN($url;$login;$pwd;LDAP password plain text)\n\xa0$entry:=LDAP Search($dnSearchRootEntry;"cn=adrien*";LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)\n\xa0LDAP LOGOUT\n\xa0\n\xa0ARRAY TEXT($_arrMemberOf;0)\n\xa0OB GET ARRAY($entry;"memberOf";$_arrMemberOf)\n\xa0\xa0// $_arrMemberOf est un tableau contenant tous les groupes de l\'entr\xe9e\n'})}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"LDAP"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/ldap-search-all",children:"LDAP SEARCH ALL"})]}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1328"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var t=r(667294);let s={},l=t.createContext(s);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);