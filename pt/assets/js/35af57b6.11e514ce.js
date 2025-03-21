"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76469"],{866637:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>a,assets:()=>A,toc:()=>r,contentTitle:()=>t});var a=JSON.parse('{"id":"commands-legacy/minimize-window","title":"MINIMIZE WINDOW","description":"MINIMIZE WINDOW {( janela )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/minimize-window.md","sourceDirName":"commands-legacy","slug":"/commands/minimize-window","permalink":"/docs/pt/20-R7/commands/minimize-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fminimize-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"minimize-window","title":"MINIMIZE WINDOW","slug":"/commands/minimize-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MAXIMIZE WINDOW","permalink":"/docs/pt/20-R7/commands/maximize-window"},"next":{"title":"Next window","permalink":"/docs/pt/20-R7/commands/next-window"}}'),o=i("785893"),d=i("250065");let s={id:"minimize-window",title:"MINIMIZE WINDOW",slug:"/commands/minimize-window",displayed_sidebar:"docs"},t=void 0,A={},r=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"On Windows",id:"on-windows",level:3},{value:"On Mac OS",id:"on-mac-os",level:3},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"MINIMIZE WINDOW"})," {( ",(0,o.jsx)(n.em,{children:"janela"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"janela"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de refer\xeancia de janela ou se for omitido, todos os processos atuais e janelas de primeiro plano (Windows) ou processo atual de primeiro plano (Mac OS)"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando MINIMIZE WINDOW define o tamanho da janela, cujo n\xfamero foi passado em ",(0,o.jsx)(n.em,{children:"janela"}),", do tamanho que tinha antes de ser maximizada. Se for omitido janela, o comando aplica a cada janela da aplica\xe7\xe3o (Windows) ou a janela do primeiro plano do processo atual (em Mac OS)."]}),"\n",(0,o.jsx)(n.p,{children:"Este comando tem o mesmo efeito que um clique na caixa de redu\xe7\xe3o da aplica\xe7\xe3o 4D:"}),"\n",(0,o.jsx)(n.h3,{id:"on-windows",children:"On Windows"}),"\n",(0,o.jsx)(n.p,{children:"A janela retorna a seu tamanho inicial, ou seja, seu tamanho antes de ser maximizada. Se for omitido o par\xe2metro janela, todas as janelas da aplica\xe7\xe3o s\xe3o redimensionadas a seu tamanho inicial."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(394241).Z+"",width:"16",height:"14"})}),"\n",(0,o.jsx)(n.p,{children:"Caixa de redu\xe7\xe3o em Windows"}),"\n",(0,o.jsx)(n.h3,{id:"on-mac-os",children:"On Mac OS"}),"\n",(0,o.jsx)(n.p,{children:"O tamanho da janela \xe9 reduzido a seu tamanho inicial (seu tamanho antes de ser maximizada). Se o par\xe2metro janela for omitido, a janela do primeiro plano do processo atual retorna a seu tamanho inicial."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(472672).Z+"",width:"16",height:"16"})}),"\n",(0,o.jsx)(n.p,{children:"Caixa de zoom/redu\xe7\xe3o em Mac OS"}),"\n",(0,o.jsxs)(n.p,{children:["Se as janelas \xe0s quais forem aplicados este comando n\xe3o forem maximizadas previamente (manualmente ou utilizando ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/maximize-window",children:"MAXIMIZE WINDOW"}),"), ou se o tipo de janela n\xe3o incluir uma caixa de zoom, o comando n\xe3o tem efeito. Para maior informa\xe7\xe3o sobre tipos de janelas, consulte a se\xe7\xe3o ",(0,o.jsx)(n.em,{children:"Tipos de Janelas"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota"}),": esta fun\xe7\xe3o n\xe3o deve se confundir com a redu\xe7\xe3o de uma janela a um bot\xe3o (Windows) ou no Dock (Mac OS), a qual \xe9 gerada atrav\xe9s de um clique no bot\xe3o abaixo:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(28025).Z+"",width:"23",height:"23"})}),"\n",(0,o.jsx)(n.p,{children:"Windows"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{src:i(806788).Z+"",width:"16",height:"16"}),(0,o.jsx)(n.br,{}),"\nMac OS"]}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/maximize-window",children:"MAXIMIZE WINDOW"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/reduce-restore-window",children:"REDUCE RESTORE WINDOW"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"454"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},394241:function(e,n,i){i.d(n,{Z:function(){return a}});let a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAIAAACpTQvdAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGGA0uJNzUEzkAAACMSURBVHiclVFbDoAgDKvGG8GZvBOcCc6ETWbqnMbHPprB0naPCViBBPSPOAEYY+Bz7IRaa0qp9/6MB8EeFjnnoNpas4S6s2VG8DQfqtLn3kGS4UmHRRpkqxklpRRVDfeWmN02Y/9Cck4z2HxUNZSVn2G5OnhVPwx/4pauGwsYt/RwAW3p96Vnz35FcjYtEqh7+jvGKwAAAABJRU5ErkJggg=="},472672:function(e,n,i){i.d(n,{Z:function(){return a}});let a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGGA0uJNzUEzkAAAKLSURBVHiclZLfa9NQFMdv2sT2Jm2SxTRr615s3VZnnGWMwqiKYicMHCJIGWw+uRe3R/+I/QHiZPg62Zj4MEEHUmHbw9qJUrpfdJ2gMpvNbWFN2jT9mXqzleKrl3Phnsvn3vP9Hg4mSRL4n4X/m2xsbMRisXg8nk6nURoIBAYGBiKRSG9vb4vBWhVmZ2cXFhY4jgsGg95LXgwD2d9SKpWSZTkajY6NjTUrGIZxTs9Mz4RuhgaHBm+IQY7jMWDIp6ed17s+L8WmX7xqNBqjo6OItKATUjI/P+8RPUKfgHmBQhxMTEWfTY2ouGTtAHyfyyu65+bmEIZgHO1EIqHiObrbfmxPZXK7UtG++vML+iz843WhrMv2irW7kZdz6+vroihakKTV+ArZA3GXXLft5UpbuUqGIAEKpZrJ19J1mMHdMgzAlbVlBJsV9k62faF2QdDffzxgKECRksdl+lv8lNbLIKeCRw86ann2+9a2Kck07TBcHPDwDsEFWAgcJMCA9ayFRqHcIGygnXMU+cYvpm5WQLvn8jW77ZB1up5PDNGQc1DON2/fIf7JyOO8pioF1C3VbjsK+EQEmx5CXWG9qEGcdJIszThRMJA2o41lWJqmePKCo6QVQ/5w88Ht0N36H14rVSHuZOk2lqIZcBYXKJbhSOgo6VXjyHWr/07TtN/nv9/5dCXxUuCFi22CxQonx8eRA61aAuVyQVN2EtmIf9Lvu1KpVLDNzU0kl6bpD0uLycPFDpG46vO7+Xbcgh8en+zuZ/Z3yj3s8PDQQ1VVzUagaTkfEoZhJCm79m05m/+qVQ8wC0ZDr9veF+6/53a7FUVpDl8ymWxNIoSQoiiCIGq12vkNEqxpmq7rLeYvGRYwZYbVLwwAAAAASUVORK5CYII="},28025:function(e,n,i){i.d(n,{Z:function(){return a}});let a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAIAAABvSEP3AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGGA0uJNzUEzkAAAMZSURBVHicpVQ9bxQxEJ2xvZeABEIXaA6J/AM6qCLEP6CggIKCVOEH8NEERVBSIDokJJIWJEChoKdIgURHQw1SIoWv5JLc3a699vDGvlyECEXEnuX17nrevHnzfEw3Num/L0dtrIzMz3WWrp3qdd2Rghee/lhZ8yGxoxDmL0/fvdJ9/Dr83GkHtdSeQiu+JWPIB90dk851kLLGhlETzhzvL9/u4vnZ+5rp6hd5de7e86Y3w85SfyDbA2oC4iUlapOGiVCIEiP5SI2XYUO7w9jv90/Q13dPLp5d2DCF29aeTFXUqQDElSPAVZaNYctkjQ6HtSGjj+wMvupY/7bXm3FZF6O33aHsDBGMPDJqkFC5oKigQ0DHtyBE+iZmXknrtSaTMG4sJz5vDwTZBjUNa6WtQFDHU9MKsDAn0QIhEfDwYBisedIjvWEf4lVOSBvGA9ICXWcoMtGIGKGsvzEEEKCBLhrwD1o24NoobUSM0tYZFETQzonSRaAkWHJhcmCQ2ivJlIMRmcosFEmrwIiaNa8lh7Ei7ldEFW4QFXTQGsqRmgbCGRlnYRbERBKkkSwMSIhJhQtVYy4oBF7quEKVdGcO1vJtycj6kpWjCJdaihszF6tA6B86goKRTXlij9E4xSlYKTNCj5AExUZwg16Zi3XjimBWDHWXBc4+EaO72GSIpFjQBsgxk0sJi0lF2TkgAhTVhfnt0rG/D975+zVpIeqaInxMHAqegXE7bsIFpi48Drk4i5JphaRWSC3mzKWjFdniXaiLcg689OcVhYvkKa/VUBF0SkpIW2kYXo08WYt9cunOEKkTpGRVIzB7YvwrYLTwZMtRWUBgkYKCM2wyivd+1BgLO0Qw0rbE7PJoqAUQsRccAsZRUCAv0ccE/lH/foCgomxspd7Jne99Epy9yjqj7U4owXCxbGQLIigkKwIupOe97s+elol36eFq82Kxe33x0/rmrqumQMhkWzBDbW1nJANqOMYpxqjH2kobZmfC6qMLt1ZGRNMuBVn+UOHMfX45d3h3/nFt/EoP3tQrHyscS6abzZGCD71+A89tJronpkzLAAAAAElFTkSuQmCC"},806788:function(e,n,i){i.d(n,{Z:function(){return a}});let a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGGA0uJNzUEzkAAAKBSURBVHiclVJbTxNBFD7T7W67u+1utzfKxXDTAm0tF0ERXtBAjDxojA+o8IK/wMS/YtR3GglP6gvBgKLGKA1Kb1GJxmCCrCmUll26WSrbHWeBNL46mcnknHzffOd8c5Asy/A/y/5vkM1mXy0tpd5/+Pl1nYTNXR19Q0OXR0fj8XgNg2oKTxKJpbm5BlGKnesLNDYggJ0t+XM6vVncHZuYuDM1daJgmia5ZhOJhYePRgYGh8fHmnp73B4vSe6Xit2d4XfziwsPHgPGtyYnLQLGOJfLvZ2ZvdgcGogGGgMgQN5WLgBgAZkkvBAN4kJdcmY2ctZaFiG9suLXCr09p7xUjsp/q5QZQDbyGDarSDuU7JVoE6jyXjqZjMViVkk/Xr+JtHKhQEmw79l14gNPUQy2ATb+UBXNpKE+5Olo55LLy+b0tKVAb3zpvBoM1hXnnuYpFyAWCNp21CKuQFWF2zcppexdW1gnYEvB6zP9ARD9rNMP4AZwgEkI+MhEA+w0eHwO3z72SVUCtghsOEIz207Re+9+C3J7gJOAdgBCUK1AeQ+rxQOl7GAULhw9IYixYa0ygx0N2OVFghvxLsRyQCF8cAAUcR2ZFbyvbwmxGwRsIycyeCm36y/qhuHkQZSQJIDAk40EF0iSyblKupEtBroGRywC6aOlrd3ZfXfxk/xrW9Gr9CFympTbxO5DitOByavll2uyIz7d0naagBH5NdKcIAgv5p+XNp+FI9DacSZYX48w2inkNze+r2ewO3Ttyvh1VVUtGzKZzPGQiKL4W976uLqslVerhgwIWK6RYfr7z4+GQiFFUU6GL5VK1SaRZVme52maNgzjOENq0DRN1/Ua5i9qxyVTyfY8JQAAAABJRU5ErkJggg=="},250065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return s}});var a=i(667294);let o={},d=a.createContext(o);function s(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);