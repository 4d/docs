"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31758"],{741117:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/object-get-data-source","title":"OBJECT Get data source","description":"OBJECT Get data source ( { ;} objet* ) : Pointer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-data-source.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-data-source","permalink":"/docs/fr/commands/object-get-data-source","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-data-source.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-data-source","title":"OBJECT Get data source","slug":"/commands/object-get-data-source","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get corner radius","permalink":"/docs/fr/commands/object-get-corner-radius"},"next":{"title":"OBJECT GET DRAG AND DROP OPTIONS","permalink":"/docs/fr/commands/object-get-drag-and-drop-options"}}'),r=n("785893"),d=n("250065");let o={id:"object-get-data-source",title:"OBJECT Get data source",slug:"/commands/object-get-data-source",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"OBJECT Get data source"})," ( {* ;} ",(0,r.jsx)(t.em,{children:"objet"})," ) : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param\xe8tre"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Op\xe9rateur"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,r.jsx)(t.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objet"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(t.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"R\xe9sultat"}),(0,r.jsx)(t.td,{children:"Pointer"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Pointeur vers la source de donn\xe9es courante de l\u2019objet"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["La commande ",(0,r.jsx)(t.strong,{children:"OBJECT Get data source"})," retourne la source de donn\xe9es courante de l\u2019objet ou des objets d\xe9sign\xe9(s) par les param\xe8tres ",(0,r.jsx)(t.em,{children:"objet"})," et ",(0,r.jsx)(t.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["La source de donn\xe9es d\u2019un objet peut avoir \xe9t\xe9 d\xe9finie en mode D\xe9veloppement via la Liste des propri\xe9t\xe9s ou \xe0 l\u2019aide de la commande ",(0,r.jsx)(t.a,{href:"/docs/fr/commands/object-set-data-source",children:"OBJECT SET DATA SOURCE"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(t.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(t.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(t.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,r.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(t.p,{children:"Soit un objet combo box d\xe9fini dans un formulaire :"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{src:n(49366).Z+"",width:"129",height:"34"}),(0,r.jsx)(t.img,{src:n(778817).Z+"",width:"302",height:"185"})]}),"\n",(0,r.jsx)(t.p,{children:"Vous ex\xe9cutez le code suivant :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0$vPtr :=OBJECT Get data source(*;"vCombo")\n\xa0\xa0\xa0\xa0\xa0//$vPtr contient ->vCombo\n'})}),"\n",(0,r.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/fr/commands/object-set-data-source",children:"OBJECT SET DATA SOURCE"})}),"\n",(0,r.jsx)(t.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(t.td,{children:"1265"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},49366:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAAiCAIAAAD3Si1HAAADNElEQVR42u2ZT2jaUBzHX7S2dGywFXoRx2CLOzhXVrrDpvSyw4Z6KftT2Mmd9KiXggeP3rxEdtJL8eplXtTB2Gkst8JGMxlNGKWydX+KaB2dOkv2kpi02kSj6Xwm5EMP4dffe/x+v+97v5f4sFqtBkyQYkEdgImpwRRgaoAeUwP0zAz43+6hbWvvqFJtuezzD3Er6lANG6E1FospDX79qf75e3P7258iVcess3fsgwRDkp4xIlTsRVC9Lwct+Ldf/9tsVDfJA9QZGTZCxYUDt89etS0M7jR+tSwzb96+Q51Ub4S2Zd1FKOumqAHsX68+1ITBx83Go9WVp4/vo06qB3arqrsIZd0Uz4MbCxbYv6ifLGuZDawuvXx+DXVG/dyyz7c6rI4iTPgvy7phtWG/VRw22lcdi6jT0THM7v7ilQsDHLR/HzApL9bFm2LGn6cU1jZev2jTgKu/sxxnu2RBoYQ6IR2i5YWaSQWj7iKb9okGPBLBUSekQ9TuA7jgw9IaF9oGU8iRoTWfnPep/iSO4seUunZolFx6GhDdtZ4YZaYyGmo1iMRDmbxYznwmFOdXvMfllPEthZ3c/uCgCcov1ZOMJkAWGouhjB8L8o/wmYwmxdqKDjQBokF+lNJUhkL1eeBbE0Uo5SliQ1j+ZJk+68nsUEDcHzjUTnLyEFleOTgV8KwH8O60gNpheh2kUYpTTQuYHKNOov5M9m0QVAJ2oFSCEuqHB9Y90t44X7ja6wK4P4dahjLCexGsOcglkzl3vHvycisTdpWTNs2kUvAZv+kGojZQsYzCmSEDmSvwO0I6acafanKcLvoYAoDR3os4EaKwPacliy/N0i6vU9x+HoJ+z1tpQjRyJtV187jLQQwj4VOoyPqAlqkmCiw9bEHjCQDM7+QJMIHvZBOtmBqgR81dZtv1o/psZQF1qDJ8rBxJN4XTG+FXW2X79zncZbY67L3rF1Fn1J+eviJUustU3AfCPZx0DbRJgie351An1RdhR3cRvrjrOOs2wl3mpTkHmCb0GKGsm+KZDPuXNPi42XiwZEedkWEjVHuXqXQPhxDDRDj8G83kf2N+H6DH1AA9pgbo+QeAnrvGRcgBHAAAAABJRU5ErkJggg=="},778817:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return o}});var s=n(667294);let r={},d=s.createContext(r);function o(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);