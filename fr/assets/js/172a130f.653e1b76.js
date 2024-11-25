"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57990"],{34592:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>m,assets:()=>o,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/maximize-window","title":"MAXIMIZE WINDOW","description":"MAXIMIZE WINDOW {( fen\xeatre )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/maximize-window.md","sourceDirName":"commands-legacy","slug":"/commands/maximize-window","permalink":"/docs/fr/commands/maximize-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmaximize-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"maximize-window","title":"MAXIMIZE WINDOW","slug":"/commands/maximize-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is window reduced","permalink":"/docs/fr/commands/is-window-reduced"},"next":{"title":"MINIMIZE WINDOW","permalink":"/docs/fr/commands/minimize-window"}}'),t=i("785893"),a=i("250065");let r={id:"maximize-window",title:"MAXIMIZE WINDOW",slug:"/commands/maximize-window",displayed_sidebar:"docs"},l=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Sous Windows",id:"sous-windows",level:5},{value:"Sous Mac OS",id:"sous-mac-os",level:5},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"MAXIMIZE WINDOW"})," {( ",(0,t.jsx)(n.em,{children:"fen\xeatre"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fen\xeatre"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de la fen\xeatre Si omis = Toutes les fen\xeatres (Windows) ou Fen\xeatre de premier plan du process courant (Mac OS)"})]})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"MAXIMIZE WINDOW"})," provoque le zoom de la fen\xeatre dont vous avez pass\xe9 le num\xe9ro de r\xe9f\xe9rence dans ",(0,t.jsx)(n.em,{children:"fen\xeatre"})," ou, si ce param\xe8tre est omis, de toutes les fen\xeatres de l'application (sous Windows) ou de la fen\xeatre de premier plan du process courant (sous Mac OS)."]}),"\n",(0,t.jsxs)(n.p,{children:["Cette commande produit le m\xeame effet qu'un clic sur la case de zoom d'une fen\xeatre de l'application 4D. Les fen\xeatres que vous souhaitez maximiser doivent comporter une case de zoom. Si le type de ",(0,t.jsx)(n.em,{children:"fen\xeatre"})," n'en contient pas, la commande ne fait rien."]}),"\n",(0,t.jsxs)(n.p,{children:["Un clic ult\xe9rieur sur la case de zoom ou l'appel de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/minimize-window",children:"MINIMIZE WINDOW"})," provoque le retour de la fen\xeatre \xe0 sa taille initiale. Sous Windows, si la fen\xeatre a \xe9t\xe9 maximis\xe9e, un clic sur la case de zoom ou l'appel de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/minimize-window",children:"MINIMIZE WINDOW"})," (sans param\xe8tre) entra\xeene le retour \xe0 leur taille initiale de toutes les fen\xeatres de l'application."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"fen\xeatre"})," est d\xe9j\xe0 maximis\xe9e, la commande ne fait rien."]}),"\n",(0,t.jsx)(n.h5,{id:"sous-windows",children:"Sous Windows"}),"\n",(0,t.jsxs)(n.p,{children:["La fen\xeatre est agrandie et s'adapte \xe0 la taille courante de la fen\xeatre de l'application (mode MDI) ou de l'\xe9cran (mode SDI). Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(n.em,{children:"fen\xeatre"}),", toutes les fen\xeatres de l'application sont maximis\xe9es. La fen\xeatre maximis\xe9e est pass\xe9e au premier plan."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:i(241902).Z+"",width:"23",height:"23"}),(0,t.jsx)(n.br,{}),'\nCase de zoom ("bouton d\'agrandissement") sous Windows']}),"\n",(0,t.jsx)(n.p,{children:"Dans le cas o\xf9 la commande est appliqu\xe9e \xe0 une fen\xeatre dont la taille est soumise \xe0 des contraintes (par exemple, une fen\xeatre formulaire) :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si aucune des containtes de taille n'est en conflit avec la taille cible, la fen\xeatre est plac\xe9e dans son \xe9tat \"maximis\xe9\" : elle est redimensionn\xe9e \xe0 la taille de la fen\xeatre de l'application parente (mode MDI) ou de l'\xe9cran (mode SDI) ; sa barre de titre et ses bordures sont cach\xe9es et ses boutons de contr\xf4le - minimiser, restaurer et fermer - sont d\xe9plac\xe9s \xe0 droite de la barre de menus de l'application."}),"\n",(0,t.jsx)(n.li,{children:"Si au moins une des contraintes de taille est en conflit (par exemple, si la largeur de la fen\xeatre MDI est de 100 et que la largeur maximale de la fen\xeatre formulaire est 80), la fen\xeatre n'est pas plac\xe9e dans son \xe9tat \"maximis\xe9\", mais uniquement redimensionn\xe9e \xe0 sa taille maximale autoris\xe9e. Cette taille est d\xe9finie soit par la fen\xeatre MDI, soit par la contrainte. Avec ce fonctionnement, l'interface reste coh\xe9rente lorsque les fen\xeatres avec contraintes sont redimensionn\xe9es."}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"sous-mac-os",children:"Sous Mac OS"}),"\n",(0,t.jsxs)(n.p,{children:["La fen\xeatre est agrandie de mani\xe8re \xe0 afficher la totalit\xe9 de son contenu. Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(n.em,{children:"fen\xeatre"}),", la fen\xeatre du premier plan du process courant est maximis\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:i(822663).Z+"",width:"16",height:"16"}),(0,t.jsx)(n.br,{}),"\nCase de zoom sous Mac OS"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le zoom \xe9tant calcul\xe9 par rapport au contenu de la fen\xeatre, cette commande doit \xeatre appel\xe9e dans un contexte o\xf9 ce contenu est d\xe9fini, par exemple une m\xe9thode formulaire. Sinon, la commande ne fait rien."}),"\n",(0,t.jsx)(n.li,{children:'La fen\xeatre est dimensionn\xe9e \xe0 sa taille "maximale". Si la fen\xeatre est un formulaire dont la taille maximale a \xe9t\xe9 d\xe9finie dans les Propri\xe9t\xe9s du formulaire, le zoom de la fen\xeatre se limitera \xe0 cette taille.'}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(n.p,{children:['Vous souhaitez que votre formulaire s\'ouvre sur une fen\xeatre "plein \xe9cran". Pour cela, vous placez la commande ',(0,t.jsx)(n.strong,{children:"MAXIMIZE WINDOW"})," dans la m\xe9thode du formulaire :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode formulaire\n\xa0\n\xa0MAXIMIZE WINDOW\n"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple illustre la prise en charge des contraintes de taille sous Windows en mode MDI. Le formulaire suivant comporte une contrainte de taille (largeur maximale=400) :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(866381).Z+"",width:"782",height:"516"})}),"\n",(0,t.jsx)(n.p,{children:"La m\xe9thode du bouton contient uniquement :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0MAXIMIZE WINDOW(Current form window)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Dans le contexte suivant, si l'utilisateur clique sur le bouton :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(694867).Z+"",width:"962",height:"816"})}),"\n",(0,t.jsx)(n.p,{children:'... la fen\xeatre n\'est pas plac\xe9e dans son \xe9tat "maximis\xe9" ; seule sa hauteur est augment\xe9e :'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(145723).Z+"",width:"959",height:"816"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/is-window-maximized",children:"Is window maximized"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/minimize-window",children:"MINIMIZE WINDOW"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/reduce-restore-window",children:"REDUCE RESTORE WINDOW"})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},866381:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/pict1476223.fr-24ad8fb550cf6657215e85e8082e6d7b.png"},694867:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/pict1476225.fr-a20e235f4782bb335bf2c6167449c0a3.png"},145723:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/pict1476363.fr-c9c494601b8202fad3038173743fbbf6.png"},241902:function(e,n,i){i.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAIAAABvSEP3AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHCgoFEqch2+gAAAMOSURBVHiclVUxaBVBEJ3Z3Us06kcSbVKonbWCIBbaaymCiIKNqaxEsbEROwVbRVALGwsLm9gLYivYWmlIoaLmJ/n/3+3u7PhmL4mgEMmx/Lvb3Xnz5r25/UyXv9JOr1L+mgiUZXZaXyzMnDk22LPb7QjtzfuVK4/Wf7bEdP7z4o3B0SODR4vpx6qOWm0jpawxk3MUk+2WmrtN2j9jw6RLB2eGz27OLn2Tcw/WDEVfHbr9tJuf4+BpONKVEXUJ8QriuViYKiVREYpCXdRxR2tjGQ6H++jLuycn915a2ijh17pONzTVAIibQIBrPDvHnsk7GwHPjpy9cnBYtbH8bb0XIZALuK2NdXWMYOTRSYeExgVFJRsKOjGDENmMVF7F6vWukhAfei5YXhkpso1aergwvb2ox6+PtKhjsOYtj+yGnIg3OeP/rcmFGbYwb81AA7t14J+s7JT/jyJqO4uixi0um1cbjWQpZueFe22M2mWTozNr8MupWvbp8QwctzA27+wq9trgAaKCDqyhumBpIJzTjSzMihghrVUIGwSpKz0Xt8kFhaCXpoJRpQqlNdjK931Gtsm6Ko77WvpupLArULUJ/oE8POqz2R5ncYbTY5XKqIaJJwEfpax/dGmqujasu2rmDSLOdrGrEMWwSKpHNVMpLD1KsBqsc0zFZC3b+wcXqgXUV2EtbNggZ/gAxAYpjPbb5DIVtrigqbnuy4L0it1ajdDeEbhb5TCzhErWLBXdW/v7ysXUtXIql8W7u7btFwYKhtS2qBU1XJPTJJL3SKunb42RurBxwUjMkbhTilqTZRZjAYFVN1B8cBUlxjjpnEfXCSbNFjFjYCq0pERsEIVxMuRMOapEKYCU9Kd3R5MyP1j9PiSN1DUAVvMUWjozR6zNPPoVhaRiWkgm+97b4eEDlQvOE/y+/bD68s7sxTsfl7+uhWYahBzZl8AMtc1OIQdq+IyLCDqtkNecDs+l1/dP4NAkGjBdk9nQvrgcz57av42i/16oAOmvPA8/8xTT1W5HwXaSoK9MXrAV+z9Q/xs9LuXjZb+iggAAAABJRU5ErkJggg=="},822663:function(e,n,i){i.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHCgoFEqch2+gAAAKLSURBVHiclZLfa9NQFMdv2sT2Jm2SxTRr615s3VZnnGWMwqiKYicMHCJIGWw+uRe3R/+I/QHiZPg62Zj4MEEHUmHbw9qJUrpfdJ2gMpvNbWFN2jT9mXqzleKrl3Phnsvn3vP9Hg4mSRL4n4X/m2xsbMRisXg8nk6nURoIBAYGBiKRSG9vb4vBWhVmZ2cXFhY4jgsGg95LXgwD2d9SKpWSZTkajY6NjTUrGIZxTs9Mz4RuhgaHBm+IQY7jMWDIp6ed17s+L8WmX7xqNBqjo6OItKATUjI/P+8RPUKfgHmBQhxMTEWfTY2ouGTtAHyfyyu65+bmEIZgHO1EIqHiObrbfmxPZXK7UtG++vML+iz843WhrMv2irW7kZdz6+vroihakKTV+ArZA3GXXLft5UpbuUqGIAEKpZrJ19J1mMHdMgzAlbVlBJsV9k62faF2QdDffzxgKECRksdl+lv8lNbLIKeCRw86ann2+9a2Kck07TBcHPDwDsEFWAgcJMCA9ayFRqHcIGygnXMU+cYvpm5WQLvn8jW77ZB1up5PDNGQc1DON2/fIf7JyOO8pioF1C3VbjsK+EQEmx5CXWG9qEGcdJIszThRMJA2o41lWJqmePKCo6QVQ/5w88Ht0N36H14rVSHuZOk2lqIZcBYXKJbhSOgo6VXjyHWr/07TtN/nv9/5dCXxUuCFi22CxQonx8eRA61aAuVyQVN2EtmIf9Lvu1KpVLDNzU0kl6bpD0uLycPFDpG46vO7+Xbcgh8en+zuZ/Z3yj3s8PDQQ1VVzUagaTkfEoZhJCm79m05m/+qVQ8wC0ZDr9veF+6/53a7FUVpDl8ymWxNIoSQoiiCIGq12vkNEqxpmq7rLeYvGRYwZYbVLwwAAAAASUVORK5CYII="},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return r}});var s=i(667294);let t={},a=s.createContext(t);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);