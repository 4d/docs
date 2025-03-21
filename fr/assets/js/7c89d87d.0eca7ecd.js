"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59133"],{62937:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/ob-entries","title":"OB Entries","description":"OB Entries ( objet ) : Collection","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-entries.md","sourceDirName":"commands-legacy","slug":"/commands/ob-entries","permalink":"/docs/fr/20-R7/commands/ob-entries","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-entries.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-entries","title":"OB Entries","slug":"/commands/ob-entries","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Copy","permalink":"/docs/fr/20-R7/commands/ob-copy"},"next":{"title":"OB Get","permalink":"/docs/fr/20-R7/commands/ob-get"}}'),t=s("785893"),i=s("250065");let o={id:"ob-entries",title:"OB Entries",slug:"/commands/ob-entries",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OB Entries"})," ( ",(0,t.jsx)(n.em,{children:"objet"})," ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objet retournant le contenu"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Collection d'objets avec les propri\xe9t\xe9s key/value"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"OB Entries"})," retourne une collection d'objets dont le contenu correspond \xe0 l'",(0,t.jsx)(n.em,{children:"objet"})," comme une paire de propri\xe9t\xe9s key/value."]}),"\n",(0,t.jsx)(n.p,{children:"Chaque objet retourn\xe9 contient les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"key"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Nom de la propri\xe9t\xe9 \xe9num\xe9rable de l'objet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:"variant"}),(0,t.jsx)(n.td,{children:"Valeur de la propri\xe9t\xe9 \xe9numerable de l'objet"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Seuls les noms de propri\xe9t\xe9s de premier niveau sont retourn\xe9s (les noms des propri\xe9t\xe9s des sous-objets ne sont pas retourn\xe9s). L'ordre des propri\xe9t\xe9s de la collection retourn\xe9e suit l'ordre de d\xe9fintion des propri\xe9t\xe9s."}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"L'utilisation d'un objet comme une hashmap (syst\xe8me cl\xe9/valeur) permet d'acc\xe9der rapidement et directement aux donn\xe9es, tout comme l'utilisation d'un index (ex : si nous souhaitons connaitre l'\xe2ge de Marie, nous \xe9crivons $persons[\"Marie\"])"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $individual;$persons : Object\n\xa0var $names;$ages : Collection\n\xa0\n\xa0$persons:=New object\n\xa0$persons["John"]:=42\n\xa0$persons["Andy"]:=24\n\xa0$persons["Marie"]:=30\n\xa0$persons["Paul"]:=50\n\xa0\n\xa0ALERT("La moyenne d\'\xe2ge est de "+String(OB Valeurs($persons).average()))\n\xa0ALERT("On compte"+String(OB Cles($persons).length)+" personnes")\n\xa0\n\xa0$ages:=OB Entries($persons).query("value>:1";25)\n\xa0ALERT("On compte"+String($ages.length)+" personnes \xe2g\xe9es de plus de 25 ans")\n\xa0\n\xa0ALERT("Elles s\'appellent : "+$ages.extract("key").join("-"))\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/ob-keys",children:"OB Keys"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/ob-values",children:"OB Values"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1720"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var r=s(667294);let t={},i=r.createContext(t);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);