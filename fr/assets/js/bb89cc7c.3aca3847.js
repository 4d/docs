"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52494],{672777:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=s(474848),t=s(28453);const r={id:"verify",title:"Page V\xe9rification",sidebar_label:"Page V\xe9rification"},o=void 0,l={id:"MSC/verify",title:"Page V\xe9rification",description:"Cette page permet de v\xe9rifier l\u2019int\xe9grit\xe9 des donn\xe9es et de la structure. La v\xe9rification peut porter sur les enregistrements et/ou les index ainsi que sur les objets du d\xe9veloppement (m\xe9thodes, formulaires...).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/MSC/verify.md",sourceDirName:"MSC",slug:"/MSC/verify",permalink:"/docs/fr/20-R5/MSC/verify",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fverify.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"verify",title:"Page V\xe9rification",sidebar_label:"Page V\xe9rification"},sidebar:"docs",previous:{title:"Page Analyse d'activit\xe9s",permalink:"/docs/fr/20-R5/MSC/analysis"},next:{title:"Page Sauvegarde",permalink:"/docs/fr/20-R5/MSC/backup"}},a={},d=[{value:"Actions",id:"actions",level:2},{value:"Voir le compte rendu",id:"voir-le-compte-rendu",level:2},{value:"D\xe9tails",id:"d\xe9tails",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Cette page permet de v\xe9rifier l\u2019int\xe9grit\xe9 des donn\xe9es et de la structure. La v\xe9rification peut porter sur les enregistrements et/ou les index ainsi que sur les objets du d\xe9veloppement (m\xe9thodes, formulaires...).\nLa page effectue uniquement une v\xe9rification des objets. Si des erreurs sont trouv\xe9es et des r\xe9parations requises, il vous sera n\xe9cessaire d\u2019utiliser la ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R5/MSC/repair",children:"Page R\xe9paration"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"actions",children:"Actions"}),"\n",(0,i.jsx)(n.p,{children:"La page comporte quatre boutons d\u2019action permettant un acc\xe8s direct aux fonctions de v\xe9rification."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Lorsque la base est chiffr\xe9e, la coh\xe9rence des donn\xe9es chiffr\xe9es est v\xe9rifi\xe9e. Si aucune cl\xe9 de donn\xe9es valide n'a \xe9t\xe9 fournie, une bo\xeete de dialogue s'affiche pour vous demander de saisir une phrase secr\xe8te ou la cl\xe9 des donn\xe9es."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"V\xe9rifier les enregistrements et les index :"})," lance la proc\xe9dure de v\xe9rification globale des donn\xe9es."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"V\xe9rifier uniquement les enregistrements :"})," lance la proc\xe9dure de v\xe9rification des enregistrements uniquement (les index ne sont pas v\xe9rifi\xe9s)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"V\xe9rifier uniquement les index :"})," lance la proc\xe9dure de v\xe9rification des index uniquement (les enregistrements ne sont pas v\xe9rifi\xe9s)."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"La v\xe9rification des enregistrements et des index peut \xe9galement \xeatre effectu\xe9e en mode d\xe9taill\xe9, table par table (cf. paragraphe \u201cD\xe9tails\u201d ci-dessous)."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"voir-le-compte-rendu",children:"Voir le compte rendu"}),"\n",(0,i.jsxs)(n.p,{children:["Quelle que soit la v\xe9rification demand\xe9e, 4D g\xe9n\xe8re un fichier de compte-rendu dans le dossier ",(0,i.jsx)(n.code,{children:"Logs"})," de l'application. Ce fichier liste l\u2019ensemble des v\xe9rifications effectu\xe9es et signale chaque erreur rencontr\xe9e, le cas \xe9ch\xe9ant ([OK] est affich\xe9 lorsque la v\xe9rification est correcte). Il est cr\xe9\xe9 au format XML et est nomm\xe9 : ",(0,i.jsx)(n.em,{children:"ApplicationName__Verify_Log__yyyy-mm-dd hh-mm-ss"}),".xml o\xf9 :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"ApplicationName"}),' est le nom du fichier de structure sans extension, par exemple "Factures",']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"aaaa-mm-jj hh-mm-ss"})," est l'horodatage du fichier, bas\xe9 sur la date et l'heure syst\xe8me locales au moment du lancement de l'op\xe9ration de v\xe9rification, par exemple \"2019-02-11 15-20-45\"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Lorsque vous cliquez sur le bouton ",(0,i.jsx)(n.strong,{children:"Voir le compte rendu"}),", 4D affiche le fichier de compte-rendu le plus r\xe9cent dans le navigateur par d\xe9faut de l\u2019ordinateur."]}),"\n",(0,i.jsx)(n.h2,{id:"d\xe9tails",children:"D\xe9tails"}),"\n",(0,i.jsxs)(n.p,{children:["Le bouton ",(0,i.jsx)(n.strong,{children:"Liste des tables"})," provoque l\u2019affichage d\u2019une page d\xe9taill\xe9e permettant de visualiser et de s\xe9lectionner les enregistrements et les index \xe0 v\xe9rifier :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(339588).A+"",width:"882",height:"666"})}),"\n",(0,i.jsx)(n.p,{children:"La d\xe9signation des \xe9l\xe9ments \xe0 v\xe9rifier permet notamment de gagner du temps lors de la v\xe9rification."}),"\n",(0,i.jsxs)(n.p,{children:["La liste principale affiche toutes les tables de la base. Pour chaque table, vous pouvez limiter la v\xe9rification aux enregistrements et/ou \xe0 chaque index. Cliquez sur l\u2019ic\xf4ne en forme de triangle pour d\xe9ployer le contenu d\u2019une table ou les index d\u2019un champ et s\xe9lectionnez/ d\xe9s\xe9lectionnez les cases \xe0 cocher en fonction de vos souhaits. Par d\xe9faut, tout est s\xe9lectionn\xe9. Vous pouvez \xe9galement utiliser les boutons raccourcis ",(0,i.jsx)(n.strong,{children:"Tout s\xe9lectionner"}),", ",(0,i.jsx)(n.strong,{children:"Tout d\xe9s\xe9lectionner"}),", ",(0,i.jsx)(n.strong,{children:"Tous les enregistrements"})," et ",(0,i.jsx)(n.strong,{children:"Tous les index"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Pour chaque ligne de table, la colonne \u201cAction\u201d r\xe9sume les op\xe9rations \xe0 effectuer. Lorsque la table est d\xe9ploy\xe9e, les lignes \u201cEnregistrements\u201d et \u201cChamps index\xe9s\u201d indiquent le nombre d\u2019\xe9l\xe9ments concern\xe9s."}),"\n",(0,i.jsx)(n.p,{children:'La colonne "Etat" affiche le statut de la v\xe9rification de chaque \xe9l\xe9ment \xe0 l\u2019aide de symboles :'}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.img,{src:s(240101).A+"",width:"32",height:"32"})}),(0,i.jsx)(n.th,{children:"V\xe9rification effectu\xe9e, pas de probl\xe8me"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.img,{src:s(125243).A+"",width:"32",height:"32"})}),(0,i.jsx)(n.td,{children:"V\xe9rification effectu\xe9e, probl\xe8mes rencontr\xe9s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.img,{src:s(376242).A+"",width:"32",height:"32"})}),(0,i.jsx)(n.td,{children:"V\xe9rification partielle effectu\xe9e"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.img,{src:s(409757).A+"",width:"32",height:"32"})}),(0,i.jsx)(n.td,{children:"V\xe9rification non effectu\xe9e"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Cliquez sur le bouton ",(0,i.jsx)(n.strong,{children:"V\xe9rifier"})," pour lancer la v\xe9rification ou sur le bouton ",(0,i.jsx)(n.strong,{children:"Standard"})," pour retourner \xe0 la page standard."]}),"\n",(0,i.jsxs)(n.p,{children:["Le bouton ",(0,i.jsx)(n.strong,{children:"Voir le compte rendu"})," permet d\u2019afficher le fichier de compte-rendu dans le navigateur par d\xe9faut de l\u2019ordinateur (cf. paragraphe ",(0,i.jsx)(n.a,{href:"#open-log-file",children:"Voir le compte rendu"})," ci-dessus)."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"La page standard ne tient pas compte des modifications effectu\xe9es dans la page d\xe9taill\xe9e : lorsque vous cliquez sur un bouton de v\xe9rification dans la page standard, tous les \xe9l\xe9ments sont v\xe9rifi\xe9s. En revanche, les param\xe9trages effectu\xe9s dans la page d\xe9taill\xe9e sont conserv\xe9s d\u2019une session \xe0 l\u2019autre."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},409757:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAyxJREFUWAntVktrU0EUnpv3q6YkBgIRQhZiQ3FTalfFhQvFlYouXdimtCkIbty4LRQq/oGkWbnopgiK1CCIBn+AxDxWpoU0fYTYJBiaV/P0G9uETO6NnXu37YXLnXNmznzfnNdcQi6fi+4BQa4DQqHQNUEQXuGd7nQ6nna7Pa5Wq/MqlSrdarW+Y/xmYWGhyLsvN4FIJKJJpVIr2PiFy+XSWq1WrcFgIDqdjpycnJB6vU4KhUI9l8u1sGZ1aWlpjYcEN4H19fW3FovlsdfrNWu12pF7UyLJZLJcq9XWlpeXV0cuPJvgIgC334G7t2ZmZoz/A++BVatVEo1G65BvwBOZnl7qq5JSDuu63e5zj8cjAj8+PiYHBweEAg4+JpOJ2O32JuyeDOqlxrwEZsfGxhh7JBxJJBK1/f39jVgsVgcYM4/1FiTmFKOUEHgJ2Ghsi8Vi/93b2yOohM8+n+8pwtNqNBrM9giVgIq4yiglBI2EjlHhZAJy4Nv29raBmYCAuS0k5z0AqfV6PTNdLpc7KNEdRikhnEsAp6S+vSthSwKBwG24OTwxMWEcns/n81UQfDesH5a5QjBsRGWc/BbIfZqcnDSjJzBL0ul0A6ePoQIizISEoIhAMBjUAvwDeoJlGBxV0To8PDxCVB5J4IlU54ZAZHGqeIhSs9hsNmZ6d3e3AfAsyM3Oz88fMZMjBEUEEPf7DoeDqUtaITh9AXGfhuvzI/BEakUhwAmv4x5guijK8g/KEdj84JSNIg+AwDjKjJZh/0SVSkWPi+lnX8E5UEQAGf4lm83+HsQAmUaz2SwM6njGjBt5DHprACigD7g1Gs0VvL/m5ubo5SP7UUQAndELpPcIhQvl1kYb1mD8cnFxMSCXgWwC4XBYj2zfwe3ocjqd//Bw95N4PF5BCB74/f6vckjIroJMJjOFZDP3wCmY0WgkbrfbDG88o7KcRzYBgFB3izDOdKN/lUQWpwrZBFDrP3A1N/H/19+SXsXogmVUx0ZfyTkQH4XDENk/jW74EaEwwSNd5IAO8mv8Da9wmDNLFBGgO2xubupKpdJNDK3wSlxuB2RYXAoX2gN/AddTRky3uT9tAAAAAElFTkSuQmCC"},125243:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAFpJREFUWAnt0sENABAMhWHEWh2oE3WgDsYA2gtJXX7HJzz5qjUWAggggAACnwV61G9mK8pfM1U9+mZ2qYhkW1e5u4fnRpgWhjwg/QPZzAqnQxUCCCCAAAI1AhspZwlZmOIJVwAAAABJRU5ErkJggg=="},376242:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAkJJREFUWAntVrtKA0EUnV0TXwQfiYhFjJWmUxsRbC0s/RML8SeEkMI/sUxhK4iN2hkbjYIiJpogUYnuOmfk7o67M7NjgiCYbW6yc+45Z+6dxzLWf/oV+OsVaOzsLPp7e0M/8Qk88mxyXBOovr295jnsqH5zXbE1ARzwIo/nm/gxpjUAcT/lVsaWF4bTufEVGxMkDjzykA8ekwmlgUB8qZhJT02wsaX50SQT38SBF3nFTJIJJ+oOvUP5xMw5SfD4PmudXrQ79eZxLj+74WxtvdFYVJw5IW3n4Ym1Tqqvrs9Ws6XSGeVQjFVgslA45wRHLzf3bcZFg4eTqiphEke+4OF8gjcgC3+EVsN3LImUKuE67qbne/ui57zs8swhTrhoxSQppjQAgJWJ+0cvPT3pojLdiENHa8DGxMvVXWNkbibbrXiigUQTAMiPZdnlFGMFCGhsRwCy6znBKcZ2AQ3IEVsOC67De46yy2P0G+8xDpy8RWlcF60MoAJitfMFJ3quYMN7LEjggFdAlK8SW2BVfqLuYg0YK2AUxyFzeduwOazInypqDSSJ45BpV2uDiL2YUBqwEced4KZSecReTMQM2IrjeM3u7jYRezERM/BYqxV5SVdH8tNWxyu2nMmE4OF8glexCGIGcGU6H95667T63HlofqUkrG6dCeSDB3yqqxjk2m0YfpQsZHClqr4DohOS24eZC/F3byNXLh9GsfRfawAAYWLAPcD3gelKJTJEMoE2YuYmcTlP+/u3v4q1wv2Bf1OBT4kWIelsqx4WAAAAAElFTkSuQmCC"},240101:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAfpJREFUWAljYBgFoyEwGgI0DgHrTc+18VnBhE+SUjnrLS/6/v//f9Fy87MAXGbRzAFAy/s5mBjSNCX4mZkZGZficgQjLpdRIg61PFVbUpCbhYmR4euvPwxXX3789vf//+jjvlIbkM2megigWw6yjJuNhUGSlxMYIAxTQq/+ZyPJAcA4JDqUsFkOsuzV15//nn389p71H4vDam3GX8gOwGu4zebnDgz//09hZGN1Pewh+hxZIzobn+X333x+z/qfxeKAv9gddH04o8B203P7/wz/twrzcKr///37lO2O15LommF8oOV9wPCFxzlMHORzfJaD1GF1AMjn/xj/b9MU4+dSFuZmkRHgFsflCKjP02AJjhTLQWoxosB223OtP3/+n9cQ42MT5ESkl2efvv9+8uHrS0ZWVjNYdJAb7DBHYnUAKNHZbnm+hJOVxV9bnJ+bCZiNYADmiP/srOYMv/6WkhvsMPOwOgAkSMgRj99//cXBwsRAbrATdAAhR7z88vONMBebCKiQgQFiEhxMLTKNMAFZFMoGh8RmYHSwAaNDQoAbyT4U1eRaDjIErwNACgg5ghLLiXIAPkdQajnRDsBwBDB3vPn+i2AhA9JHCBCMAmQDYNHBysIU9OvPv6+4ildkPVRngxxhufl5l8PGVypUN3zUwNEQGA2BgQgBAH6SPzdNKo9/AAAAAElFTkSuQmCC"},339588:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/MSC_Verify-8011610125009120b0db711841a97965.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(296540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);