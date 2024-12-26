"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32597"],{370690:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>d,default:()=>m,assets:()=>o,toc:()=>a,frontMatter:()=>r});var n=JSON.parse('{"id":"commands-legacy/count-list-items","title":"Count list items","description":"Count list items ( { ;} liste {; } ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/count-list-items.md","sourceDirName":"commands-legacy","slug":"/commands/count-list-items","permalink":"/docs/fr/commands/count-list-items","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcount-list-items.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"count-list-items","title":"Count list items","slug":"/commands/count-list-items","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Copy list","permalink":"/docs/fr/commands/copy-list"},"next":{"title":"DELETE FROM LIST","permalink":"/docs/fr/commands/delete-from-list"}}'),i=s("785893"),l=s("250065");let r={id:"count-list-items",title:"Count list items",slug:"/commands/count-list-items",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Exemples",id:"exemples",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Count list items"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"liste"})," {; *} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Param\xe8tre"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Op\xe9rateur"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Si sp\xe9cifi\xe9, liste est un nom d'objet (cha\xeene) Si omis, liste est une r\xe9f\xe9rence de liste"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"liste"}),(0,i.jsx)(t.td,{children:"Integer, Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Num\xe9ro de r\xe9f\xe9rence de liste (si * omis) ou Nom d'objet de type liste (si * pass\xe9)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Op\xe9rateur"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Si omis (d\xe9faut) : Retourner les \xe9l\xe9ments visibles (d\xe9ploy\xe9s) dans la ou les liste(s) Si sp\xe9cifi\xe9 : Retourner tous les \xe9l\xe9ments"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"R\xe9sultat"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Nombre d'\xe9l\xe9ments visibles (d\xe9ploy\xe9s) si 2e * omis ou Nombre total d\u2019\xe9l\xe9ments si 2e * pass\xe9"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["La fonction ",(0,i.jsx)(t.strong,{children:"Count list items"})," retourne soit le nombre d'\xe9l\xe9ments visibles soit le nombre total d'\xe9l\xe9ments dans la liste dont vous avez pass\xe9 le num\xe9ro de r\xe9f\xe9rence ou le nom d'objet dans ",(0,i.jsx)(t.em,{children:"liste"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Si vous passez le premier param\xe8tre optionnel ",(0,i.jsx)(t.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(t.em,{children:"liste"})," est un nom d\u2019objet (cha\xeene) correspondant \xe0 une repr\xe9sentation de liste dans le formulaire. Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(t.em,{children:"liste"})," est une r\xe9f\xe9rence de liste hi\xe9rarchique (",(0,i.jsx)(t.a,{href:"#",title:"Expression de type Entier long identifiant de fa\xe7on unique une liste hi\xe9rarchique",children:"R\xe9fListe"}),"). Si vous utilisez une seule repr\xe9sentation de liste ou travaillez avec tous les \xe9l\xe9ments (le second ",(0,i.jsx)(t.em,{children:"*"})," est pass\xe9), vous pouvez utiliser indiff\xe9remment l\u2019une ou l\u2019autre syntaxe. En revanche, si vous utilisez plusieurs repr\xe9sentations d\u2019une m\xeame liste et travaillez avec les \xe9l\xe9ments visibles (le second ",(0,i.jsx)(t.em,{children:"*"})," est omis), la syntaxe bas\xe9e sur le nom d\u2019objet est requise car chaque repr\xe9sentation peut disposer de sa propre configuration d\xe9ploy\xe9e/contract\xe9e."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note :"})," Si vous utilisez le caract\xe8re @ dans le nom d'objet de la liste et que le formulaire contient plusieurs listes r\xe9pondant \xe0 ce nom, la commande ",(0,i.jsx)(t.strong,{children:"Count list items"})," s'appliquera au premier objet dont le nom correspond."]}),"\n",(0,i.jsxs)(t.p,{children:["Le choix du type d'information \xe0 retourner est effectu\xe9 \xe0 l'aide du second param\xe8tre ",(0,i.jsx)(t.em,{children:"*"}),". Lorsque ce param\xe8tre est pass\xe9, la commande retourne le nombre total d\u2019\xe9l\xe9ments pr\xe9sents dans la liste, quel que soit son \xe9tat courant d\xe9ploy\xe9/contract\xe9.",(0,i.jsx)(t.br,{}),"\nLorsque ce param\xe8tre est omis, la commande retourne le nombre d'\xe9l\xe9ments qui sont visibles, en fonction de l'\xe9tat d\xe9ploy\xe9/contract\xe9 actuel de la liste et de ses sous-listes."]}),"\n",(0,i.jsx)(t.p,{children:"Cette fonction doit \xeatre appliqu\xe9e \xe0 une liste affich\xe9e dans un formulaire."}),"\n",(0,i.jsx)(t.h4,{id:"exemples",children:"Exemples"}),"\n",(0,i.jsxs)(t.p,{children:["Voici la liste ",(0,i.jsx)(t.em,{children:"hList"})," affich\xe9e en mode Application :"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(85179).Z+"",width:"163",height:"152"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:"\xa0$vlNbItems:=Count list items(hList)\xa0// \xe0 ce stade, $vlNbItems vaut 8\n\xa0$vlNbTItems:=Count list items(hList;*)\xa0//$vlNbTItems vaut \xe9galement 8\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(249270).Z+"",width:"163",height:"152"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:"\xa0$vlNbItems:=Count list items(hList)\xa0// \xe0 ce stade, $vlNbItems vaut 2\n\xa0$vlNbTItems:=Count list items(hList;*)\xa0//$vlNbTItems vaut toujours 8\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(62541).Z+"",width:"163",height:"152"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:"\xa0$vlNbItems:=Count list items(hList)\xa0//$vlNbItems vaut 5\n\xa0$vlNbTItems:=Count list items(hList;*)\xa0//$vlNbTItems vaut toujours 8\n"})}),"\n",(0,i.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/fr/commands/list-item-position",children:"List item position"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/fr/commands/selected-list-items",children:"Selected list items"})]}),"\n",(0,i.jsx)(t.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(t.td,{children:"380"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},85179:function(e,t,s){s.d(t,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACYCAIAAAAHs865AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHHgoGJwXEjMAAAAbeSURBVHic7Z3dThtHFMdnDTERwRiCIBISSsAYc1t612fIk7TKM+QVKlW9zCtU6mUeoJVyUa6QYkRMLpByURUIcRxjvN7tsY93WFx/LMvO7Ezn/5Oz8U7Gzsq/PfN17F3v9Zu3AjjAPP159fJ53ocB7kFhvrRcXp+be5Sw/vn5p19+P5rnnbWNmrIDAxlzefGJNF9ft25u2r2eHwRBGNIjDIIe/Ss94W0Q+OXy+tLSaqfzTXBMAxshzcXi46BPLxwwKA4j+uXN5iWZppoCpu0liuYw0iyfCA5xWbPTmWDa87xJ7x5/PciXWDTfeuUSWYdVdrsd2hbGvks4DvUHD+4BSeWYliXHx3UO7ugxxPd9Mcn0ffEiMnk3kJhhoy0GmmnbaDREbFDGleiEEJmYJsEy7iFbG7Khps+cNTONxqm4289S8y6mmPbuMuW/RMOeCzJw6/X3XLK7u8tPTk8/iqgLlvUnmr5XJ43WWz/sRUbz3l6NPv9KpcK7LDvqrfvbjFvvh78bSEx/1E2CxUAzN9FUuL39gv6ibVQyJJsRGYOY1olcIalWqyxVdtvbA80jsTd+5eRezuRADCMyzQwEF2K7d9TyeSB3x5hO0QjLl6AB1wavkVHPKcNMRHb/M8CiCiFWQ21lZWWj2byINaKeXC1hwTQNW15eoyfF4oIQ1zBtJWdn9a2t/VLp6cyaJyeHm5s0+zqCaStZXX1Wr79rtb5QG+773ZFh9gCvUJhbXFyqVg/a7a8CuSwb8QoLT56UarXvE9a/uemKbGdZwGSMM415miLMMg3N6tBqevryOK+q6jwep9A3IouLHCsVmpWiL6YhMl+0zrJG2m25i5NAA7m13gKC9ZLD2BsD7FzQ2k/zwBuhnAta++kkyU2cB4owa+UEqAOmXQGmXQGmXQGmXcGsbyJg1UwdBpmemQIBDyGfde+xFqFWKQZlLYFSTMxa4jxQAbKWrmBc1hIBrQizspbQrA59MT3zJ5lciCZdEQZlLaFWKVgNdQWYdgWYdgWYdgWYdgWDclkCUyyVGGQaKRClIGvpCshauoLW1dAk1fCTLUUYl7WUl0SE7GwxLmsJFGFQ1hK/wVSKQVnLeDnCPXMMylpOKQcPB6uhrgDTrgDTrgDTrgDTrpDBfS2xnmUF42dZk4wqPhigkMxab9wZzXAyu4Mp38kFso1l4hrZiLPpPTH6afOZaBry/mdgluUKmfXTmbwPUEcG97UUdzOSGRwUUEAG97WUd1TM5oiAGtBPuwJMuwJMuwJMuwJMu4I+0wlnbpiaK8KsmIZmdeg2jfta5oXuO5hOSW5Cs1K0mobLHMnzmgj4bY5O8jQNwTrR3U/r/O9AHN2/wENyMy90X/1ipmOcBIowa+UEqAOmXQGmXQGmXQGmXcGsrKUXoeF4XANXiHUFg7KWUKsUg7KWQCkmZi3RdKsAWUtXMC5riYBWhFlZS2hWh0FZS9zXUikGZS2hVilYDXUFmHYF5abjvS+2WW3TiHj95u2rl8/XNmrpXp+Eg5/+VPfmrnH46w+fP5+Xy+XkL7m6uvr5t780xTTIitSfp3LTckRNJ+PMylSHH4oPymJSz1AMimkSTO08PyB7EhbENDMlZNGdJ8GOmJZRi5BNjR0xnSRqOegR35OwI6ZHGDv+QtBPJ3VMK1/3pnNwUoAicFNAnyfNp1O8UHc/PaUm4jgJdsS0bJbHRnO80Ua4TyJ1TCs3Tefgdz/+ISJ50xVC8Ezo87y8/CfFC3XPp8EDSf156ohp/qoJtlltjY5pbLPdpgDfRHAFmHYFmHYFmHYFmHYFmHYFmHYFmHYFmHYFmHYFmHYFg65dBBISBp0gCOfmHiWs3+t1BExbCmm+vm7d3LR7PT8g7SE9wiDoiVgiJAj8cnl9aWm10/kmYNpeSHOx+Djo0wsHDIrDiH55s3lJpqmmgGl7iaI5jDTLJ4JDXNbsdGDaZmLRfOuVS2Qd/npht4t+2mZIKqkeKeTgHin0fV9glmU5fa/1+nve8f0ua240TkXs2yl8QsC0rXBDzZqPj+vUbfMXzVgzbxlq3gVM2wuHbK22z7sfPnyg7enpR97d2dmODcj7wLStyFH33t7wyiUsWww0y1pyC9P2EnKzTEjZxPb2CzmljteGaVuROvlRrVapsFLZ8YZXcQxGWm/MsixmELW3sVqpVOJxPBLWMG0rvEZGw+0oiIfL3TKaYzFNFUKYtpWVlY1m8yL2I1tPrpmwYJqGLS+v0ZNicUGIa5i2krOz+tbWfqn0dGbNk5PDzc1dIY6Gps//PlZ8bCAzCvOl1dVn9fq7VusLteG+3x0ZZg/wCoW5xcWlavWg3f4q+GqS+o8V6Odfc87eWVrwV7kAAAAASUVORK5CYII="},249270:function(e,t,s){s.d(t,{Z:function(){return n}});let n="data:image/png;base64,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"},62541:function(e,t,s){s.d(t,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACYCAIAAAAHs865AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHHgoGJwXEjMAAAAZQSURBVHic7Z3fTttIFIfHgYaKJgSKoBISaiGEcM3e7b5C32TVZ+AVVlrt3vEKK+0lL7BSL5a9QWoQDb1A6sVqgdI0hSSOvSc+eDAhCYnxTGyd3ycztaeT2OLzmb8Jdvb2DxQQwCz9vHv7etqXASYgN1tcKK3MzDwbs/z5+edf/zya5YPl1aqxCwMJc3nxmTTf3DTb7etu1/U8z/dp8z2vS/9LO5x6nlsqrRQKS63Wd8UxDbIIac7nn3s9un5AkO2H9PIbjUsyTSUVTGeXMJr9ULPeURziumSrNcS04zjD3j36ejBdItF855VzdBlW2em0KM0NfBd/EOYvHkwASeWY1jnHxzUO7nC7xXVdNcz0pDghibwbGJvbSlsFmimt1+sq0injQnRDqERMk2Ad95BtDV1R0++cNTP1+qm6385S9a5GmHbuM+KUqNingg7cWu0D52xtbfHO6eknFTbBuvxQ0xM10qi97cNedDRvb1fp918ul/mQZYetdS9NuPZ++ruBsen1ukmwCjRzFU2ZGxtv6B9Kw5xbkumRMYhpm+gZkkqlwlJ1s70RaO6LvcEzJxM50x0x9MgsEwjORQ7vqeX7QB8OMB2jEtYvQQVuDZ4jo5ZTh5kK7T7oYFEBH7OhWWVxcbXRuIhUoo6eLWHBNAxbWFimnXx+TqkbmM4kZ2e19fWdYvHloyVPTg7X1mj0dQTTmWRp6VWt9r7Z/Ep1uOt2+rrZAU4uNzM/X6hUdq+vvymsZWURJzf34kWxWv1hzPLtdkclO8oCaSZ1pjFOM0S6TEOzOayaHj09zrOqNq9HFPZ6ZFGRA6VCs1HsxTREThero6y+elsf4iawwNRqbwXBdplC3xsd7KlgtZ3mjjdCeSpYbafHWdzEfWCIdM2cAHPAtBRgWgowLQWYlkK6PomAWTNzpMj0o0sg4ClMZ957oEWoNUqKVi2BUdK4aon7wARYtZRC6lYtEdCGSNeqJTSbw15MP/qVTM5ElW6IFK1aQq1RMBsqBZiWAkxLAaalANNSSNFalsIQyyQpMo0lEKNg1VIKWLWUgtXZ0HGK4StbhkjdqqX+k4iQnSypW7UEhkjRqiW+g2mUFK1aRvMR7omTolXLEfng6WA2VAowLYX4pqMfBkJqM43pa2//4N3b1/GeYLr781+xTwzi8c/vP11e/lcqlcZ/ydXV1S9//P3UmAaWid1pHWDaGc7AUx7+9mO8c4MYxA6w+M+1RExPhSRjOsoInX2npMhGcFsg4Zie9JTkmHpntEG2aZKPad0wP2yhH54SnXBrJB/Tum0e9hhDtNNTwVQ7beKU4CmYaqdH6Oxrp+OdHkxKwjH96GBaPWinue+NBts0Scb0wMH0w9Zan5Ltct873kWA8UE7LYXYMR3/kwhO8LkwpPbTL1/OY/h6akwjtZ/GA59EkAJMSwGmpQDTUoBpKcC0FGBaCjAtBZiWAkxLAaalANNSgGkpwLQUYFoKMC0FmJYCTEsBpqUA01KAaSnAtBRgWgowLQWYlgJMSwGmpQDTUoBpKcC0FGBaCjAtBZiWAkxLAaalANNSgGkpwLQUYFoKMC0FmJYCTEsBpqUA01KAaSnAtBRgWgowLQWYlgJMSwGmpQDTUoBpKcC0FGBaCjAthfjPwAPTwvdanufPzDwbs3y321IwnVFI881Ns92+7nZdj7T7tPme11WRp+V5nlsqrRQKS63WdwXT2YU05/PPvR5dPyDI9kN6+Y3GJZmmkgqms0sYzX6oWe8oDnFdstWC6SwTieY7r5yjy/AjjDsdtNNZhqSS6r5MDu6+TNd1FUZZGafntVb7wAeu22HN9fqpijzCmG8ImM4qXFGz5uPjGjXb/Bxy1swpQ9W7gunswiFbre7w4cePHyk9Pf3Eh5ubG5EOeQ+Yziq61729XeUclq0CzbqUTmE6u/hcLRNaNrGx8UYPqaOlYTqraJ28VSoVyiyXN3lkxUOvaO2NUVaGCaL2LlbL5XI0jvvCGqazCs+RUXc7DOLb6W4dzZGYpgI+TGeVxcXVRuOCNQc4es6EBdMwbGFhmXby+TmlbmA6k5yd1dbXd4rFl4+WPDk5XFvbUuro1vT5v8eGrw0kRm62uLT0qlZ732x+pTrcdTt93ewAJ5ebmZ8vVCq719ffesd7+wf2rxXY53/vnph3DUjg3AAAAABJRU5ErkJggg=="},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return r}});var n=s(667294);let i={},l=n.createContext(i);function r(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);