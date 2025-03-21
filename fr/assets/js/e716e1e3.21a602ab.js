"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["981"],{226143:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/st-set-options","title":"ST SET OPTIONS","description":"ST SET OPTIONS ( { ;} objet ; option ; valeur {; option2 ; valeur2 ; ... ; optionN ; valeurN*} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/st-set-options.md","sourceDirName":"commands-legacy","slug":"/commands/st-set-options","permalink":"/docs/fr/20-R7/commands/st-set-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-set-options.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-set-options","title":"ST SET OPTIONS","slug":"/commands/st-set-options","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST SET ATTRIBUTES","permalink":"/docs/fr/20-R7/commands/st-set-attributes"},"next":{"title":"ST SET PLAIN TEXT","permalink":"/docs/fr/20-R7/commands/st-set-plain-text"}}'),d=s("785893"),r=s("250065");let i={id:"st-set-options",title:"ST SET OPTIONS",slug:"/commands/st-set-options",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"ST SET OPTIONS"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"objet"})," ; ",(0,d.jsx)(n.em,{children:"option"})," ; ",(0,d.jsx)(n.em,{children:"valeur"})," {; ",(0,d.jsx)(n.em,{children:"option2"})," ; ",(0,d.jsx)(n.em,{children:"valeur2"})," ; ... ; ",(0,d.jsx)(n.em,{children:"optionN"})," ; ",(0,d.jsx)(n.em,{children:"valeurN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Op\xe9rateur"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,d.jsx)(n.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objet"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,d.jsx)(n.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"option"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Option \xe0 d\xe9finir"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"valeur"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nouvelle valeur de l\u2019option"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"ST SET OPTIONS"})," vous permet de modifier une ou plusieurs options de fonctionnement du champ ou de la variable de texte styl\xe9 d\xe9sign\xe9(e) par le param\xe8tre ",(0,d.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,d.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,d.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,d.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,d.jsxs)(n.p,{children:["Passez dans ",(0,d.jsx)(n.em,{children:"option"})," le code de l\u2019option \xe0 modifier et dans ",(0,d.jsx)(n.em,{children:"valeur"}),", sa nouvelle valeur."]}),"\n",(0,d.jsxs)(n.p,{children:["Le param\xe8tre ",(0,d.jsx)(n.em,{children:"option"}),' prend en charge la constante suivante du th\xe8me "',(0,d.jsx)(n.em,{children:"Texte multistyle"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Valeur"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ST Expressions display mode"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsxs)(n.td,{children:["Le param\xe8tre ",(0,d.jsx)(n.em,{children:"valeur"})," peut contenir ST Values or ST References"]})]})})]}),"\n",(0,d.jsxs)(n.p,{children:["Vous pouvez passer dans le param\xe8tre ",(0,d.jsx)(n.em,{children:"valeur"})," l'une des constantes suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Valeur"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ST References"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Affichage des cha\xeenes source des expressions"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ST Values"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Affichage des valeurs calcul\xe9es des expressions"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"Affichage des valeurs :"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(272975).Z+"",width:"401",height:"48"})}),"\n",(0,d.jsx)(n.p,{children:"Affichage des expressions :"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(314963).Z+"",width:"401",height:"48"})}),"\n",(0,d.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(n.p,{children:"Le code suivant vous permet de basculer le mode d\u2019affichage de la zone :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0ST GET OPTIONS(*;"StyledText_t";ST Expressions display mode;$valueExpr)\n\xa0If($valueExpr=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ST SET OPTIONS(*;"StyledText_t";ST Expressions display mode;ST Values)\n\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ST SET OPTIONS(*;"StyledText_t";ST Expressions display mode;ST References)\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/st-get-options",children:"ST GET OPTIONS"})}),"\n",(0,d.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"1289"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},314963:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},272975:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZEAAAAwCAIAAABfdND/AAAIaklEQVR42u2dPWwaSRiGh9NFOl1zXBFFl7tryOJIiMoFBalxhGmcwrShwnFjtnGB5DIShZt1GttUpLULuwEUU5vChSuElEDQNZcoHXfXnC5SuJnZnf3/A5OwK71PcVlm55sZFPHe9012501Mp1MCAAAx4btVLwAAAOYAmgUAiBPfr3oBQOPDx09/fvg0nf616oUAEDmSyZ9+ffjg4S8P6HViiv2saPD3P//9/tv9Va8CgIgy/uPj/Z9/JKgNAQDxApoFAIgT0KyI0d1JJJ4cjUM0kvHRkwRnp2vpybF119uN3nq4OR6AqGPSrMnxRlLueX2MPfT7bBxPVr0KX5iIXJKqvXl8dDnIE2frcznbmc1mI2WwqaoOVaHNgTKaMa5rkrlzen+m0qk21d7dNnltbQEgDiDPihC169nsdMve2j08y5Sz9tZx+6xf3SrSK6lUzjcvu6yjTJTXFq0SSJJoLW5pmlisaT1Zy+DdmAAQC0JqFku6OCJVMWct+jW/OJZpNzVBc0R5Diu6GA1hJzo2hhAxxl3zuOv1m5v6uq2f3/J6svfCvx3jo5fkoLZmNNAqj9V9o2E/n0nzFmkty0Sne9nMl8mhpdzTOluGa6pSZzS9G+TLJSlwJQBEglCa1ZPXL57dTinnmfoL35/xTf1tifZTCiGiaId65nyqcrWboiLyQjSEnmh390ob4bZB9Bjtrj5OavfqtpHLNW71ueb5UiuE5k5Zq8QYZNccQnNGtjzKPW33Kj08mJ0WLe20xDyoQbJAXLBpVmtbT1poXqI19tqtyj77mRNSKFVuLt74/L5zjb1CyCjW4VwpGA2TNxdEhM8xkSD19FnOcffR45x7fPCXKiiauq0OmhUNlH2rZBVPxV6VS0FXLvHOxX1FLReNzhIrPClbl+Y99+5OWs52TosEgLhg06yKSHtY2qL92ifjoaFl262QAwdGsQ5W3r+9MT5Qsbl5+z7cVFqNZ6jsEpYXCWgB2JfTND3abBJ6YS7z0hl9W54Wdy45l6gcbZh2r9iWPenMoFggVoSoDVNSxqxleu7hLyleUT5YZIoKWO7xoxATGRWmrrIhWGB5K4CmSeJf+0heGfGUSduikkplIh+yhEnsxlM16qstrKLscxVz7GcRvutV4rfSZ+URBAvEjTD7WbR2ah2KDZ+erD8AMRzztt4r1/zGK0rASrnWtrmZt7TVBlq65Z49TQVPxBKmSokVgrS09MuzqEqZxS9oeavYg+dbTmpK5fY8lhWp9loZbLItKiE9xdOR2pJgTzyY1ch4FCtBMysmfWwvXp0Hj2iBeBHqHemCcjveWE/W+Ydc45b+N7V70rhY522VRiM3DBdlge2LE9ohyT/RpEcp0EFFA/3MU5+giVK7+5XkdrJFp6hUfPOswl7jUB2cLuZqN2h5K6B2Pau536EJV9FxKTn6O1pE5+CeAMQEvCMdFfCONAA+4B1pAEAsgWYBAOIEasOo8Pnzl3+/JFa9CgAiyg/fze7dYzkWzimNCvTv496q1wBAhNH+j47aEAAQJ6BZAIA4Ac0CAMQJaBYAIE5AswAAcQKaBQCIE3jWISrAkxUAL+DJGkXwviEAPuB9QwBALIFmAQDiRNw0y2y9s9wT+SLhf8itUy3n7zlPGg0cQe/Pj/qjo7E/5xrEienUQL+R5l0tAHNj16yJ03orLN/2R88OR85IUTwQ+Y7k84OQFqkBAqEensyOe2cH/F0vbq3D9Ir59Wi8Jm0cagpWh0WzuAug7t51nvE1vgFfifKBMnh512RF9ae4g1CZRuJ+1cZRzVKthkPkweowa1bvVZ00bnX3roKiGjt4+KQuYnrqEujhumpDH8nw1iko3EUxyLR1HkdYQt5YQyauhq8mI1i5x4+N1++HmDf4mPl07SArP3eoFq8b9cPb6SdxcrwzK2vb/Cn0jIxfHO3YizxR+fF7NhNX3a/agaledEkMjbs4ax4sE5NmMTcIZ7Xl4ZO6sOmpPTAMpjWE99YJmsjhCOsSknI1fCWtC3LCu1Va28m2bRYxiCViToqnHadqCROeTrVJ0zD6STXjmTnMvvqy3Kx62qz25aHm26q79HCTQ7XsO2s6I9xdx4yoGbPOsNv7qIUpn4jcOWsEwMCkWSZ3LgMvn9SFTU+DAx0wQx3VWmceAiZyOML6h1gNX0/U70W7OUNECzPXWNzqlavWoTVB0RKtzWZAbF7pOEXEdFc1edWNDsfvBqJNqh1UnRH94cjZyEwVRf7Fwqyd2F3h6rPZdB0AgMWw7sE7nQQX9Uldpumpq5jeEacjrFfHBQxfl0JxXzFvxmsGqjyryQfFpmvXVPLSyyjKpFJZtaSem2pH7NrD9hUsEZNm0WxIOAkaePmkBjKX6am/EgZmZKGFdG4WM3xVca+1w6MaGIqsajTsqzUa22AKEa2aHYZ58EBay4oqkbseOpZxUG1uJszqedTlUURoGQuz7nnxuygJwdfAnGcV9hqkvq67k/bkjeOJp0+qk7lNT0342ruygbUiy8N31d8d1nWxDkdYN0IbvrrFelS0c1i9MtUSORVNuwgvtp4Ps1obN45Oe+5xS2qyFSxbtA5lqsTGJuWq2/2ZMHtVO5WsDrAJF0Nqdpfolq/YhQfLw/KOtNUllaVJVKBcfFI9WND0NNjetaCct5O8g4vvagh3WPdZbY6we66dwhq+GrB/O61rX/lq3k04k/cqx2Sd6uKiynblT/1GYB34hWg037X6vKoD0QpUzm45d+9dLVzdV1T0CwHgzuAd6aUyOd54QU6Ct9hdiMI70uwBioEyWsZjXQAsF/0daZxFA2hylZa1PbJqZwbBApEGeVZUiEKeBUBk0fMsaFZUgCcrAD7AkzVywJMVAF/gyQoAiCH/A0LSHyGZykIiAAAAAElFTkSuQmCC"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);