"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57313"],{485363:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>r,toc:()=>c,contentTitle:()=>A});var t=JSON.parse('{"id":"commands-legacy/minimize-window","title":"MINIMIZE WINDOW","description":"MINIMIZE WINDOW {( window )}","source":"@site/versioned_docs/version-20-R7/commands-legacy/minimize-window.md","sourceDirName":"commands-legacy","slug":"/commands/minimize-window","permalink":"/docs/20-R7/commands/minimize-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fminimize-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"minimize-window","title":"MINIMIZE WINDOW","slug":"/commands/minimize-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MAXIMIZE WINDOW","permalink":"/docs/20-R7/commands/maximize-window"},"next":{"title":"Next window","permalink":"/docs/20-R7/commands/next-window"}}'),s=i("785893"),o=i("250065");let d={id:"minimize-window",title:"MINIMIZE WINDOW",slug:"/commands/minimize-window",displayed_sidebar:"docs"},A=void 0,r={},c=[{value:"Description",id:"description",level:2},{value:"On Windows",id:"on-windows",level:3},{value:"On Mac OS",id:"on-mac-os",level:3},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"MINIMIZE WINDOW"})," {( ",(0,s.jsx)(n.em,{children:"window"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"window"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Window reference number or if omitted, all the current process frontmost windows (Windows) or current process frontmost window (Mac OS)"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The MINIMIZE WINDOW command sets the size of the window whose number is passed as ",(0,s.jsx)(n.em,{children:"window"})," to the size it was before being maximized. If ",(0,s.jsx)(n.em,{children:"window"})," is omitted, the command applies to each window of the application (Windows) or to the frontmost window of the process (on Mac OS)."]}),"\n",(0,s.jsx)(n.p,{children:"This command has the same effect as one click on the reduction box of the 4D application:"}),"\n",(0,s.jsx)(n.h3,{id:"on-windows",children:"On Windows"}),"\n",(0,s.jsxs)(n.p,{children:["The size of the window is set to its initial size, i.e., its size before being maximized. If the ",(0,s.jsx)(n.em,{children:"window"})," parameter is omitted, all the application windows are set to their initial sizes."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(970932).Z+"",width:"16",height:"14"}),(0,s.jsx)(n.br,{}),"\nReduction box on Windows"]}),"\n",(0,s.jsx)(n.h3,{id:"on-mac-os",children:"On Mac OS"}),"\n",(0,s.jsx)(n.p,{children:"The size of the window is set to its initial size (i.e. its size before being maximized). If the window parameter is omitted, the frontmost window of the current process is set to its initial size."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(737638).Z+"",width:"16",height:"16"}),(0,s.jsx)(n.br,{}),"\nReduction/zoom box on Mac OS"]}),"\n",(0,s.jsxs)(n.p,{children:["If the windows to which the command is applied were not previously maximized (manually or using ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/maximize-window",children:"MAXIMIZE WINDOW"}),"), or if the window type does not include a zoom box, the command has no effect. For more information on window types, refer to the ",(0,s.jsx)(n.em,{children:"Window Types (compatibility)"})," section."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This function is not to be confused with minimizing a window to a button (Windows) or in the Dock (Mac OS), which is triggered by a click on the button shown:"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(727122).Z+"",width:"23",height:"23"}),(0,s.jsx)(n.br,{}),"\nWindows"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(971899).Z+"",width:"16",height:"16"}),(0,s.jsx)(n.br,{}),"\nMac OS"]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/maximize-window",children:"MAXIMIZE WINDOW"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/reduce-restore-window",children:"REDUCE RESTORE WINDOW"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"454"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},970932:function(e,n,i){i.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAIAAACpTQvdAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGGA0uJNzUEzkAAACMSURBVHiclVFbDoAgDKvGG8GZvBOcCc6ETWbqnMbHPprB0naPCViBBPSPOAEYY+Bz7IRaa0qp9/6MB8EeFjnnoNpas4S6s2VG8DQfqtLn3kGS4UmHRRpkqxklpRRVDfeWmN02Y/9Cck4z2HxUNZSVn2G5OnhVPwx/4pauGwsYt/RwAW3p96Vnz35FcjYtEqh7+jvGKwAAAABJRU5ErkJggg=="},737638:function(e,n,i){i.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGGA0uJNzUEzkAAAKLSURBVHiclZLfa9NQFMdv2sT2Jm2SxTRr615s3VZnnGWMwqiKYicMHCJIGWw+uRe3R/+I/QHiZPg62Zj4MEEHUmHbw9qJUrpfdJ2gMpvNbWFN2jT9mXqzleKrl3Phnsvn3vP9Hg4mSRL4n4X/m2xsbMRisXg8nk6nURoIBAYGBiKRSG9vb4vBWhVmZ2cXFhY4jgsGg95LXgwD2d9SKpWSZTkajY6NjTUrGIZxTs9Mz4RuhgaHBm+IQY7jMWDIp6ed17s+L8WmX7xqNBqjo6OItKATUjI/P+8RPUKfgHmBQhxMTEWfTY2ouGTtAHyfyyu65+bmEIZgHO1EIqHiObrbfmxPZXK7UtG++vML+iz843WhrMv2irW7kZdz6+vroihakKTV+ArZA3GXXLft5UpbuUqGIAEKpZrJ19J1mMHdMgzAlbVlBJsV9k62faF2QdDffzxgKECRksdl+lv8lNbLIKeCRw86ann2+9a2Kck07TBcHPDwDsEFWAgcJMCA9ayFRqHcIGygnXMU+cYvpm5WQLvn8jW77ZB1up5PDNGQc1DON2/fIf7JyOO8pioF1C3VbjsK+EQEmx5CXWG9qEGcdJIszThRMJA2o41lWJqmePKCo6QVQ/5w88Ht0N36H14rVSHuZOk2lqIZcBYXKJbhSOgo6VXjyHWr/07TtN/nv9/5dCXxUuCFi22CxQonx8eRA61aAuVyQVN2EtmIf9Lvu1KpVLDNzU0kl6bpD0uLycPFDpG46vO7+Xbcgh8en+zuZ/Z3yj3s8PDQQ1VVzUagaTkfEoZhJCm79m05m/+qVQ8wC0ZDr9veF+6/53a7FUVpDl8ymWxNIoSQoiiCIGq12vkNEqxpmq7rLeYvGRYwZYbVLwwAAAAASUVORK5CYII="},727122:function(e,n,i){i.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAIAAABvSEP3AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGGA0uJNzUEzkAAAMZSURBVHicpVQ9bxQxEJ2xvZeABEIXaA6J/AM6qCLEP6CggIKCVOEH8NEERVBSIDokJJIWJEChoKdIgURHQw1SIoWv5JLc3a699vDGvlyECEXEnuX17nrevHnzfEw3Num/L0dtrIzMz3WWrp3qdd2Rghee/lhZ8yGxoxDmL0/fvdJ9/Dr83GkHtdSeQiu+JWPIB90dk851kLLGhlETzhzvL9/u4vnZ+5rp6hd5de7e86Y3w85SfyDbA2oC4iUlapOGiVCIEiP5SI2XYUO7w9jv90/Q13dPLp5d2DCF29aeTFXUqQDElSPAVZaNYctkjQ6HtSGjj+wMvupY/7bXm3FZF6O33aHsDBGMPDJqkFC5oKigQ0DHtyBE+iZmXknrtSaTMG4sJz5vDwTZBjUNa6WtQFDHU9MKsDAn0QIhEfDwYBisedIjvWEf4lVOSBvGA9ICXWcoMtGIGKGsvzEEEKCBLhrwD1o24NoobUSM0tYZFETQzonSRaAkWHJhcmCQ2ivJlIMRmcosFEmrwIiaNa8lh7Ei7ldEFW4QFXTQGsqRmgbCGRlnYRbERBKkkSwMSIhJhQtVYy4oBF7quEKVdGcO1vJtycj6kpWjCJdaihszF6tA6B86goKRTXlij9E4xSlYKTNCj5AExUZwg16Zi3XjimBWDHWXBc4+EaO72GSIpFjQBsgxk0sJi0lF2TkgAhTVhfnt0rG/D975+zVpIeqaInxMHAqegXE7bsIFpi48Drk4i5JphaRWSC3mzKWjFdniXaiLcg689OcVhYvkKa/VUBF0SkpIW2kYXo08WYt9cunOEKkTpGRVIzB7YvwrYLTwZMtRWUBgkYKCM2wyivd+1BgLO0Qw0rbE7PJoqAUQsRccAsZRUCAv0ccE/lH/foCgomxspd7Jne99Epy9yjqj7U4owXCxbGQLIigkKwIupOe97s+elol36eFq82Kxe33x0/rmrqumQMhkWzBDbW1nJANqOMYpxqjH2kobZmfC6qMLt1ZGRNMuBVn+UOHMfX45d3h3/nFt/EoP3tQrHyscS6abzZGCD71+A89tJronpkzLAAAAAElFTkSuQmCC"},971899:function(e,n,i){i.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGGA0uJNzUEzkAAAKBSURBVHiclVJbTxNBFD7T7W67u+1utzfKxXDTAm0tF0ERXtBAjDxojA+o8IK/wMS/YtR3GglP6gvBgKLGKA1Kb1GJxmCCrCmUll26WSrbHWeBNL46mcnknHzffOd8c5Asy/A/y/5vkM1mXy0tpd5/+Pl1nYTNXR19Q0OXR0fj8XgNg2oKTxKJpbm5BlGKnesLNDYggJ0t+XM6vVncHZuYuDM1daJgmia5ZhOJhYePRgYGh8fHmnp73B4vSe6Xit2d4XfziwsPHgPGtyYnLQLGOJfLvZ2ZvdgcGogGGgMgQN5WLgBgAZkkvBAN4kJdcmY2ctZaFiG9suLXCr09p7xUjsp/q5QZQDbyGDarSDuU7JVoE6jyXjqZjMViVkk/Xr+JtHKhQEmw79l14gNPUQy2ATb+UBXNpKE+5Olo55LLy+b0tKVAb3zpvBoM1hXnnuYpFyAWCNp21CKuQFWF2zcppexdW1gnYEvB6zP9ARD9rNMP4AZwgEkI+MhEA+w0eHwO3z72SVUCtghsOEIz207Re+9+C3J7gJOAdgBCUK1AeQ+rxQOl7GAULhw9IYixYa0ygx0N2OVFghvxLsRyQCF8cAAUcR2ZFbyvbwmxGwRsIycyeCm36y/qhuHkQZSQJIDAk40EF0iSyblKupEtBroGRywC6aOlrd3ZfXfxk/xrW9Gr9CFympTbxO5DitOByavll2uyIz7d0naagBH5NdKcIAgv5p+XNp+FI9DacSZYX48w2inkNze+r2ewO3Ttyvh1VVUtGzKZzPGQiKL4W976uLqslVerhgwIWK6RYfr7z4+GQiFFUU6GL5VK1SaRZVme52maNgzjOENq0DRN1/Ua5i9qxyVTyfY8JQAAAABJRU5ErkJggg=="},250065:function(e,n,i){i.d(n,{Z:function(){return A},a:function(){return d}});var t=i(667294);let s={},o=t.createContext(s);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function A(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);