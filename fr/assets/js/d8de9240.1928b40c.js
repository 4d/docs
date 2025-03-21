"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81637"],{630890:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/ob-keys","title":"OB Keys","description":"OB Keys ( objet ) : Collection","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-keys.md","sourceDirName":"commands-legacy","slug":"/commands/ob-keys","permalink":"/docs/fr/20-R7/commands/ob-keys","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-keys.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-keys","title":"OB Keys","slug":"/commands/ob-keys","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Is shared","permalink":"/docs/fr/20-R7/commands/ob-is-shared"},"next":{"title":"OB REMOVE","permalink":"/docs/fr/20-R7/commands/ob-remove"}}'),t=s("785893"),o=s("250065");let d={id:"ob-keys",title:"OB Keys",slug:"/commands/ob-keys",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OB Keys"})," ( ",(0,t.jsx)(n.em,{children:"objet"})," ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objet dont on veut obtenir les noms des propri\xe9t\xe9s"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Collection de noms de propri\xe9t\xe9 (chaines)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"OB Keys"})," retourne une collection de cha\xeenes contenant tous les noms des propri\xe9t\xe9s \xe9num\xe9rables de l'",(0,t.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Seuls les noms de propri\xe9t\xe9s de premier niveau sont retourn\xe9s (les noms des propri\xe9t\xe9s des sous-objets ne sont pas retourn\xe9s). L'ordre des noms contenus dans la collection retourn\xe9e suit l'ordre de d\xe9fintion des propri\xe9t\xe9s."}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez une collection avec tous les noms de propri\xe9t\xe9s de premier niveau d'un objet :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $person : Object\n\xa0var $col : Collection\n\xa0\n\xa0$person:=New object\n\xa0$person.lastName:="Dupont"\n\xa0$person.firstName:="Jeanne"\n\xa0$person.children:=New object("Marie";12;"Marc";8)\n\xa0\n\xa0$col:=OB Keys($person)\n\xa0\n\xa0\xa0//$col[0]="lastName"\n\xa0\xa0//$col[1]="firstName"\n\xa0\xa0//$col[2]="children"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/ob-entries",children:"OB Entries"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/ob-values",children:"OB Values"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1719"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var r=s(667294);let t={},o=r.createContext(t);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);