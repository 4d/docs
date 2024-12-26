"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98655"],{730599:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>l,assets:()=>A,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/minimize-window","title":"MINIMIZE WINDOW","description":"MINIMIZE WINDOW {( fen\xeatre )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/minimize-window.md","sourceDirName":"commands-legacy","slug":"/commands/minimize-window","permalink":"/docs/fr/commands/minimize-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fminimize-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"minimize-window","title":"MINIMIZE WINDOW","slug":"/commands/minimize-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MAXIMIZE WINDOW","permalink":"/docs/fr/commands/maximize-window"},"next":{"title":"Next window","permalink":"/docs/fr/commands/next-window"}}'),t=i("785893"),r=i("250065");let d={id:"minimize-window",title:"MINIMIZE WINDOW",slug:"/commands/minimize-window",displayed_sidebar:"docs"},o=void 0,A={},a=[{value:"Description",id:"description",level:4},{value:"Sous Windows",id:"sous-windows",level:5},{value:"Sous Mac OS",id:"sous-mac-os",level:5},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"MINIMIZE WINDOW"})," {( ",(0,t.jsx)(n.em,{children:"fen\xeatre"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fen\xeatre"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de la fen\xeatre Si omis = Toutes les fen\xeatres (Windows) ou Fen\xeatre de premier plan du process courant (Mac OS)"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"MINIMIZE WINDOW"})," provoque un zoom arri\xe8re de la fen\xeatre dont vous avez pass\xe9 le num\xe9ro de r\xe9f\xe9rence dans ",(0,t.jsx)(n.em,{children:"fen\xeatre"})," ou, si ce param\xe8tre est omis, de toutes les fen\xeatres de l'application (sous Windows) ou de la fen\xeatre de premier plan du process courant (sous Mac OS)."]}),"\n",(0,t.jsx)(n.p,{children:"Cette commande produit le m\xeame effet qu'un clic sur la case de r\xe9duction d'une fen\xeatre de l'application 4D ayant \xe9t\xe9 pr\xe9alablement maximis\xe9e :"}),"\n",(0,t.jsx)(n.h5,{id:"sous-windows",children:"Sous Windows"}),"\n",(0,t.jsxs)(n.p,{children:["La fen\xeatre est r\xe9duite et retrouve sa taille initiale. Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(n.em,{children:"fen\xeatre"}),", toutes les fen\xeatres de l'application sont redimensionn\xe9es \xe0 leur taille initiale."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(599717).Z+"",width:"16",height:"14"})}),"\n",(0,t.jsx)(n.p,{children:"Case de r\xe9duction sous Windows"}),"\n",(0,t.jsx)(n.h5,{id:"sous-mac-os",children:"Sous Mac OS"}),"\n",(0,t.jsxs)(n.p,{children:["La fen\xeatre est r\xe9duite et retrouve sa taille initiale. Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(n.em,{children:"fen\xeatre"}),", la fen\xeatre de premier plan du process courant est minimis\xe9e.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{src:i(923426).Z+"",width:"16",height:"16"})]}),"\n",(0,t.jsx)(n.p,{children:"Case de zoom/r\xe9duction sous Mac OS"}),"\n",(0,t.jsxs)(n.p,{children:["Si la ou les fen\xeatres concern\xe9es n'ont pas \xe9t\xe9 pr\xe9alablement maximis\xe9es (manuellement ou \xe0 l'aide de ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/maximize-window",children:"MAXIMIZE WINDOW"}),"), la commande ne fait rien. De m\xeame, si le type de ",(0,t.jsx)(n.em,{children:"fen\xeatre"})," ne comporte pas de case de zoom, la commande ne fait rien (pour plus d'informations sur ce point, reportez-vous \xe0 la section ",(0,t.jsx)(n.em,{children:"Types de fen\xeatres (compatibilit\xe9)"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Ne confondez pas cette fonction avec la r\xe9duction de la fen\xeatre sous forme d'ic\xf4ne (Windows) ou dans le Dock (Mac OS), accessible par l'interm\xe9diaire du bouton suivant :",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{src:i(164514).Z+"",width:"23",height:"23"}),(0,t.jsx)(n.br,{}),"\nWindows"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:i(794937).Z+"",width:"16",height:"16"}),(0,t.jsx)(n.br,{}),"\nMac OS"]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/maximize-window",children:"MAXIMIZE WINDOW"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/reduce-restore-window",children:"REDUCE RESTORE WINDOW"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"454"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},599717:function(e,n,i){i.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAIAAACpTQvdAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHCgoFMQVGqpoAAACMSURBVHiclVFbDoAgDKvGG8GZvBOcCc6ETWbqnMbHPprB0naPCViBBPSPOAEYY+Bz7IRaa0qp9/6MB8EeFjnnoNpas4S6s2VG8DQfqtLn3kGS4UmHRRpkqxklpRRVDfeWmN02Y/9Cck4z2HxUNZSVn2G5OnhVPwx/4pauGwsYt/RwAW3p96Vnz35FcjYtEqh7+jvGKwAAAABJRU5ErkJggg=="},923426:function(e,n,i){i.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHCgoFMQVGqpoAAAKLSURBVHiclZLfa9NQFMdv2sT2Jm2SxTRr615s3VZnnGWMwqiKYicMHCJIGWw+uRe3R/+I/QHiZPg62Zj4MEEHUmHbw9qJUrpfdJ2gMpvNbWFN2jT9mXqzleKrl3Phnsvn3vP9Hg4mSRL4n4X/m2xsbMRisXg8nk6nURoIBAYGBiKRSG9vb4vBWhVmZ2cXFhY4jgsGg95LXgwD2d9SKpWSZTkajY6NjTUrGIZxTs9Mz4RuhgaHBm+IQY7jMWDIp6ed17s+L8WmX7xqNBqjo6OItKATUjI/P+8RPUKfgHmBQhxMTEWfTY2ouGTtAHyfyyu65+bmEIZgHO1EIqHiObrbfmxPZXK7UtG++vML+iz843WhrMv2irW7kZdz6+vroihakKTV+ArZA3GXXLft5UpbuUqGIAEKpZrJ19J1mMHdMgzAlbVlBJsV9k62faF2QdDffzxgKECRksdl+lv8lNbLIKeCRw86ann2+9a2Kck07TBcHPDwDsEFWAgcJMCA9ayFRqHcIGygnXMU+cYvpm5WQLvn8jW77ZB1up5PDNGQc1DON2/fIf7JyOO8pioF1C3VbjsK+EQEmx5CXWG9qEGcdJIszThRMJA2o41lWJqmePKCo6QVQ/5w88Ht0N36H14rVSHuZOk2lqIZcBYXKJbhSOgo6VXjyHWr/07TtN/nv9/5dCXxUuCFi22CxQonx8eRA61aAuVyQVN2EtmIf9Lvu1KpVLDNzU0kl6bpD0uLycPFDpG46vO7+Xbcgh8en+zuZ/Z3yj3s8PDQQ1VVzUagaTkfEoZhJCm79m05m/+qVQ8wC0ZDr9veF+6/53a7FUVpDl8ymWxNIoSQoiiCIGq12vkNEqxpmq7rLeYvGRYwZYbVLwwAAAAASUVORK5CYII="},164514:function(e,n,i){i.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAIAAABvSEP3AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHCgoFMQVGqpoAAAMZSURBVHicpVQ9bxQxEJ2xvZeABEIXaA6J/AM6qCLEP6CggIKCVOEH8NEERVBSIDokJJIWJEChoKdIgURHQw1SIoWv5JLc3a699vDGvlyECEXEnuX17nrevHnzfEw3Num/L0dtrIzMz3WWrp3qdd2Rghee/lhZ8yGxoxDmL0/fvdJ9/Dr83GkHtdSeQiu+JWPIB90dk851kLLGhlETzhzvL9/u4vnZ+5rp6hd5de7e86Y3w85SfyDbA2oC4iUlapOGiVCIEiP5SI2XYUO7w9jv90/Q13dPLp5d2DCF29aeTFXUqQDElSPAVZaNYctkjQ6HtSGjj+wMvupY/7bXm3FZF6O33aHsDBGMPDJqkFC5oKigQ0DHtyBE+iZmXknrtSaTMG4sJz5vDwTZBjUNa6WtQFDHU9MKsDAn0QIhEfDwYBisedIjvWEf4lVOSBvGA9ICXWcoMtGIGKGsvzEEEKCBLhrwD1o24NoobUSM0tYZFETQzonSRaAkWHJhcmCQ2ivJlIMRmcosFEmrwIiaNa8lh7Ei7ldEFW4QFXTQGsqRmgbCGRlnYRbERBKkkSwMSIhJhQtVYy4oBF7quEKVdGcO1vJtycj6kpWjCJdaihszF6tA6B86goKRTXlij9E4xSlYKTNCj5AExUZwg16Zi3XjimBWDHWXBc4+EaO72GSIpFjQBsgxk0sJi0lF2TkgAhTVhfnt0rG/D975+zVpIeqaInxMHAqegXE7bsIFpi48Drk4i5JphaRWSC3mzKWjFdniXaiLcg689OcVhYvkKa/VUBF0SkpIW2kYXo08WYt9cunOEKkTpGRVIzB7YvwrYLTwZMtRWUBgkYKCM2wyivd+1BgLO0Qw0rbE7PJoqAUQsRccAsZRUCAv0ccE/lH/foCgomxspd7Jne99Epy9yjqj7U4owXCxbGQLIigkKwIupOe97s+elol36eFq82Kxe33x0/rmrqumQMhkWzBDbW1nJANqOMYpxqjH2kobZmfC6qMLt1ZGRNMuBVn+UOHMfX45d3h3/nFt/EoP3tQrHyscS6abzZGCD71+A89tJronpkzLAAAAAElFTkSuQmCC"},794937:function(e,n,i){i.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHCgoFMQVGqpoAAAKBSURBVHiclVJbTxNBFD7T7W67u+1utzfKxXDTAm0tF0ERXtBAjDxojA+o8IK/wMS/YtR3GglP6gvBgKLGKA1Kb1GJxmCCrCmUll26WSrbHWeBNL46mcnknHzffOd8c5Asy/A/y/5vkM1mXy0tpd5/+Pl1nYTNXR19Q0OXR0fj8XgNg2oKTxKJpbm5BlGKnesLNDYggJ0t+XM6vVncHZuYuDM1daJgmia5ZhOJhYePRgYGh8fHmnp73B4vSe6Xit2d4XfziwsPHgPGtyYnLQLGOJfLvZ2ZvdgcGogGGgMgQN5WLgBgAZkkvBAN4kJdcmY2ctZaFiG9suLXCr09p7xUjsp/q5QZQDbyGDarSDuU7JVoE6jyXjqZjMViVkk/Xr+JtHKhQEmw79l14gNPUQy2ATb+UBXNpKE+5Olo55LLy+b0tKVAb3zpvBoM1hXnnuYpFyAWCNp21CKuQFWF2zcppexdW1gnYEvB6zP9ARD9rNMP4AZwgEkI+MhEA+w0eHwO3z72SVUCtghsOEIz207Re+9+C3J7gJOAdgBCUK1AeQ+rxQOl7GAULhw9IYixYa0ygx0N2OVFghvxLsRyQCF8cAAUcR2ZFbyvbwmxGwRsIycyeCm36y/qhuHkQZSQJIDAk40EF0iSyblKupEtBroGRywC6aOlrd3ZfXfxk/xrW9Gr9CFympTbxO5DitOByavll2uyIz7d0naagBH5NdKcIAgv5p+XNp+FI9DacSZYX48w2inkNze+r2ewO3Ttyvh1VVUtGzKZzPGQiKL4W976uLqslVerhgwIWK6RYfr7z4+GQiFFUU6GL5VK1SaRZVme52maNgzjOENq0DRN1/Ua5i9qxyVTyfY8JQAAAABJRU5ErkJggg=="},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return d}});var s=i(667294);let t={},r=s.createContext(t);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);