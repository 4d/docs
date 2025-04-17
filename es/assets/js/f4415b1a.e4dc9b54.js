"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73759"],{873692:function(e,n,l){l.r(n),l.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>t});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-get-columns","title":"WP Table get columns","description":"WP Table get columns  ( objTarget ) | ( refTabla ; colIni {; numCol} )  -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-table-get-columns.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-get-columns","permalink":"/docs/es/20-R8/WritePro/commands/wp-table-get-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-get-columns.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-table-get-columns","title":"WP Table get columns","slug":"/WritePro/commands/wp-table-get-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Table get cells","permalink":"/docs/es/20-R8/WritePro/commands/wp-table-get-cells"},"next":{"title":"WP Table get rows","permalink":"/docs/es/20-R8/WritePro/commands/wp-table-get-rows"}}'),i=l("785893"),r=l("250065");let c={id:"wp-table-get-columns",title:"WP Table get columns",slug:"/WritePro/commands/wp-table-get-columns",displayed_sidebar:"docs"},t=void 0,d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP Table get columns"}),"  ( ",(0,i.jsx)(n.em,{children:"objTarget"})," ) | ( ",(0,i.jsx)(n.em,{children:"refTabla"})," ; ",(0,i.jsx)(n.em,{children:"colIni"})," {; ",(0,i.jsx)(n.em,{children:"numCol"}),"} )  -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objTarget"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Rango o elemento o documento 4D Write Pro"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"refTabla"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Referencia de tabla"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"colIni"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Posici\xf3n de la primera columna"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"numCol"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"N\xfamero de columnas a obtener"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Nuevo rango de tabla que contiene columnas seleccionadas"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"WP Table get columns"}),"  devuelve un nuevo objeto de rango de celdas que contiene la selecci\xf3n de columnas ",(0,i.jsx)(n.em,{children:"objTarget"})," o ",(0,i.jsx)(n.em,{children:"refTabla"})," (definida por ",(0,i.jsx)(n.em,{children:"colIni"})," y ",(0,i.jsx)(n.em,{children:"numCol"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"Pase:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"objTarget"})," ",(0,i.jsx)(n.em,{children:":"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"a rango, o"}),"\n",(0,i.jsx)(n.li,{children:"un elemento (fila / p\xe1rrafo / cuerpo / encabezado / pie de p\xe1gina / imagen en l\xednea / secci\xf3n / subsecci\xf3n), o"}),"\n",(0,i.jsx)(n.li,{children:"un documento 4D Write Pro"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Si ",(0,i.jsx)(n.em,{children:"objTarget"})," no se cruza con una tabla o rango de texto donde se puede recuperar una selecci\xf3n de columnas, el comando devuelve Null."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"O"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"refTabla"}),"- la referencia de la tabla cuya selecci\xf3n de columnas desea obtener."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"colIni"})," - apunta a la primera columna de la tabla a devolver, y"]}),"\n",(0,i.jsxs)(n.li,{children:["(opcional) ",(0,i.jsx)(n.em,{children:"numCol"})," - especifica cu\xe1ntas columnas devolver. Si se omiten ",(0,i.jsx)(n.em,{children:"numCol"}),", se devuelve la \xfanica columna ",(0,i.jsx)(n.em,{children:"colIni"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Si ",(0,i.jsx)(n.em,{children:"colIni"})," m\xe1s ",(0,i.jsx)(n.em,{children:"numCol"})," excede el n\xfamero de columnas en ",(0,i.jsx)(n.em,{children:"refTabla"}),", o si ",(0,i.jsx)(n.em,{children:"colIni"})," es mayor que el n\xfamero de columnas en ",(0,i.jsx)(n.em,{children:"refTabla"}),", el rango devuelto contiene el m\xe1ximo posible de columnas."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"Usted desea modificar algunos atributos de las dos \xfaltimas columnas de una tabla:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3;$wpRow4;$wpRow5;$cols : Object\n\xa0$wpRange:=WP Create range(WParea;wk start text;wk end text)\n\xa0$wpTable:=WP Insert table($wpRange;wk append)\n\xa0$wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)\n\xa0$wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)\n\xa0$wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18)\n\xa0$wpRow4:=WP Table append row($wpTable;"Christopher";"Lee";53)\n\xa0$wpRow5:=WP Table append row($wpTable;"Henry";"Cartier";42)\n\xa0\n\xa0$cols:=WP Table get columns($wpTable;2;2)\n\xa0WP SET ATTRIBUTES($cols;wk background color;0x00E0E0E0;wk text color;"red";wk height;"36pt";wk text align;wk center)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Resultado:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:l(99427).Z+"",width:"373",height:"221"})}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsx)(n.p,{children:"Para obtener un rango de columnas desde el 10 hasta el final:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0WP Table get columns(tableRef;10;MAXLONG)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,i.jsx)(n.p,{children:"Desea recuperar las columnas que un usuario ha seleccionado:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0var $userSelection;$columns : Object\n\xa0\n\xa0$userSelection:=WP Selection range(myWPArea)\n\xa0\n\xa0$columns:=WP Table get columns($userSelection)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-table-get-cells",children:"WP Table get cells"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-table-get-rows",children:"WP Table get rows"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},99427:function(e,n,l){l.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXUAAADdCAIAAADLp3WoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAABIrSURBVHhe7dpLaivXt4BxgabiIagRqIYHcNx1P1QGYDX/Q6g5aACaQZoyaimBwIXLhdtxIwNw44I6AmF8137Vy3L8kNbSqpzvo0iqtkr2oST9tHedM/u/YbP//O9//ff/sLGxsZ2/4QsbG5vWhi9sbGxaG76wsbFpbfjCxsamteELGxub1nbCl1ciokuEL0SkFb4QkVYnfJmRfj9+/Mh7pNB8Pr+/v88HpNMvv/yy2+0yJO902pf8IOn066+//vHHH3+TWo+Pj7/99ls+IJ2qqvrzzz/ze/qd8OUK4Yt2v//+O75oJ/MXfPEYvmiHLwbhi9PwRTt8MehMX55Wlex2LTdx+KPS0z558s+ZK1/29exVXvFF87yuj+s8+H7bw2Jx2OaD0LqWp780/aHrNw1f4qUbXb3nZvF20Gfnz1+CFVmKzXI2q1ZPcf+Des+iUznyRd7iIovsbJuX2ewTvnQ9N3WCRj4S+PL11sc6Xu7Bld8emq+8Blftor7E/c8Bgy8f5MuX9C6P+1/xpZvI4MuZyRQyX8A0o0niu+/i85e4H8ZiAZt0EIbj48kffPkgT+uj9XH0hs7rnfVhIbP0IEhaQKUPQNyXQcElDMomJEVf0vlfmwHpNS1fWqCft+UiT4GYy/jSlvAQR6Id8lAc6DApI/jyUc7u70Ziegv+eAsgyBJ3IhntMiqcnKYtg/lLOn8wG7pqU5u/1Pu8mxNinEj9D112fdQvTlZG4ODLp3PmSyzeBcjfou16p/VCHv1HX8bnX7sp+bJtDm+v2bpuuXebii9hKIy1muDLl3N1/6X7niyTFHwxbH08uRT62r2w66ThSx+RoS/hXHz5VL7u75b3d1jmRB0Gtxs/4cuJ86/dRHyRi5lXRs9N01siybUdr5gcdqYvgYlUH4u0NCqFR/JItVzGe72r/DSEeTdPvsjkPKyMws3aJIgYEQ+PdfuvM5p0g0bsiPd385lpvz3t2OSf42FiPwFf4oI0XbqwBZeFlXSY4Xbe+fMXUsnj/Zd/V9O6vzvR8MVp+KIdvhiEL07DF+3wxSB8cRq+aIcvBuGL0/BFO3wxCF+chi/a4YtB+OI0fNEOXwzCF6fhi3b4YhC+OA1ftMMXg/DFafiiHb4YhC9Owxft8MUgfHEavmiHLwbhi9PwRTt8MQhfnIYv2uGLQfjiNHzRDl8Mwhen4Yt2+GIQvjgNX7TDF4PwxWn4oh2+GIQvTsMX7fDFIHxxGr5ohy8G4YvT8EU7fDEIX5yGL9rhi0H44jR80Q5fDMIXp+GLdvhiEL44DV+0wxeD8MVp+KIdvhiEL07DF+0eHx/xRbuqqr7pC2n348ePvEcKzefz+/v7fEA6yfxlt9tlSN6J+csVkvnLX3/9lb8FSCHWRwaxPnIavmiHLwbhi9PwRTt8MQhfnIYv2uGLQRfwZbOUo9hyk4fanlbVyXH6KDNf9vXsVV7NdqvX+YG//35uFi/NNh90rY9y2qJ5zoeXTH6j/BmO3R9BsUn5Ite83uf98pL1Xim3XWb+IoxUq6d8MEr4wZevZzl/kfdrdmTbvMzK/j8kp+n4IskfBl9GRXaLL+s6ySKDNhfqnPDFadfxJX03fvjFiC+WbZtj05T5y/awWBzSa6X5Klyqi/uSVkRSGYi+pDVUGCorpm6ETnUdX+S7sV2exP3iTlwTyZbe0PGdvY9rmYhRXjGlkfCU+NxuDZUO88mRsNnisA5zpe5rOU6d5CkHfBm2b+Qytuuj/kJpsGjy2YV9kZ08WQl+xN0ISdhrT3o7Qm8y9iV//ofv1+KOfGemz3zZiRbEh8pbvB1JTGR00jft+pihCU9vf2DSp8xWBj8HX7rW9eD6dDujfadd1pc+GLIfERFNEjl9X0Yj9KYrzF/ksz2cbxdfWiBK3Zk9F0Yj7Uy+3C8IyX44rTzU+tI7p4ij3hR82R6adC3wZeyLMBL38eVbXWV9NPoLo86X0fv4277IaWEfXz6XXJY8r2xnl92l611zv53ri1ghRAgUrRjlnkrmJYwMNXk7Qm+70v3d3tu3G5fBckK41xhvr4w0eTvS/SgZyWSUv/KQkaEv8lFpF1Osj07UXlXZzRabQXxO5/oSsJCSF6E8kG/dlqNqtYr3c2WvGo90z6UuM1/kbZq+HltBwg0U+bQ36cuz+9iXr9CyXzfhNorsLBbxKTJS54fibdpyfvxI5BPyByM9dEh3iOOvSP/yRQaP4dHyWdJsqr60F7CdFTruMusjuniW85efs0n5MtXwxWn4oh2+GIQvTsMX7fDFIHxxGr5ohy8G4YvT8EU7fDEIX5yGL9rhi0H44jR80Q5fDMIXp+GLdvhiEL44DV+0wxeD8MVp+KIdvhiEL07DF+3wxSB8cRq+aIcvBuGL0/BFO3wxCF+chi/a4YtB+OI0fNEOXwzCF6fhi3b4YhC+OA1ftMMXg/DFafiiHb4YhC9Owxft8MUgfHEavmiHLwbhi9PwRTt8MQhfnIYv2uGLQfjiNHzRDl8Mwhen4Yt2+GIQvjgNX7TDF4PwxWn4oh2+GIQvTnt4eMAX1R4fH/FFu6qqvuPL7e2tEEN63dzc3N3d5QNSaD6f39/f5wPSSeYvu90uQ/JOzF+uEOsj7VgfGcT6yGn4oh2+GIQvTsMX7fDFIHxxGr5ohy8GnenL06qS3dlyE4+68ni1esoD9MWu6cu2eZHXd7AtDtv84L+myfgSXo56nw+k7WERX5RF85xH/Hb+/CVSMoLkabWsKnA5p2v6sq5fmsDJc7MoO/WXfdk2x/hct03El/Ux+N75Ii/Ka71OO+nV8dwlfFkuRZM+Jk8rCV/OysP66Jx3sP93/3TWR0JM58u+nh0DL93XgOcu4svqabPsrZE2y+VGZjXZl7xUSnOcdCAgpaFQPO3UJOjnzpsv4WtzNjvWdfivvL/LGiqcsA6DL806zdvl0XRy2OI3rXwk0mH8YMQv5EWzT+fEE67SRH2JVzsc7usJLFov5IuY0gKzWSVIEhflgf5Ad2r7rKfNBlz6OZy/BCYyB+07XnbCuzyCEt/u8u4fzd7br9lAUjwn2hQHh58c26bqS/E6z2J8dylfen4EXrrDWDClzE96EnWnwcs4n77k9/TwBnCasLSajHzpnhX3w6A8Pd+bxJfPNLpK20Oz7kD33cV8CXAIFeWo9UV24nyl86fvSx6Glzd592X4lxef9EUGwz6+fK3BVequZ7nUnrugL0EOwSKvd8rEpOfMKV/Ss5bwMs61L+Ed373LZSdPTOLh2/VR+euP7WERd2QEX77Q2JfRpfbcmb6IGmHlk5c+chTpEDJSMtzux6qqf34qznvyPpWu7ou8j/MKqHgRD8ucvF0iiRRBkLhQasY3fdNz2x8VSQo2xYea6/47jon4Ui5XR8zbEb+dP385OxZHp/Iwf/l3N535y4S7vi/pfjCNwhft8MWga/qSlk6DmzFUwhft8MUgB+sjOhW+aIcvBuGL0/BFO3wxCF+chi/a4YtB+OI0fNEOXwzCF6fhi3b4YhC+OA1ftMMXg/DFafiiHb4YhC9Owxft8MUgfHEavmiHLwbhi9PwRTt8MQhfnIYv2uGLQfjiNHzRDl8Mwhen4Yt2+GIQvjgNX7TDF4PwxWn4oh2+GIQvTsMX7fDFIHxxGr5ohy8G4YvT8EU7fDEIX5yGL9rhi0H44jR80Q5fDMIXp+GLdvhiEL44DV+0wxeD8MVp+KIdvhiEL057eHjAF9UeHx/xRbuqqr7jy+3trRBDet3c3Nzd3eUDUmg+n9/f3+cD0knmL7vdLkPyTsxfrhDrI+1YHxnE+shp+KIdvhiEL07DF+3wxSB8cRq+aIcvBl3Gl6dVJSNStXp6Wi3Df8LAcpMfP9Fm+Y8Pf6KPf8eUc+vLvp69yqs/m7002zw0zabiy3OzGF7w9TEevtbreOi6C/giUgRX4n78zKeDbwKyWX7hWecj5TbP8xchZuq4SBPxZXtoBo7s63of/i/KLA7uX4SzfQmiFF1SWYjvffa/9ix8uUr4Yte6DlOVRfOcj9u2h0WCxnXn+vKWl1L87Mt/pHBCXs0sw8By1VvaxFPCmeVsKf7E9IzhUX5m+ZWj3xEqz3rzOyfm0AR9Gc/by0rK6cdgEr48b8N1DldyRMy68T95kVR9SZ9qOSWdEUbKxzw8L+6n2U77UBQjn5DP7T/WWRN3wkh8rPyO9umy056Rf860mpov8nWapuuyMzuuw12DdE64feDyTsG07u/KNZer2u57hruf8vwl7JTPfjcihefFg7DT+wnlnPZJaT8Ods9/M5JPjz+sbficiTU1X8rkJW7yaPkMxO3E9P76TcsXWSgNr3m44K04blO4//K0WoVP9PizP/ysFyFS0YV4WM5pnxTaLON+7/njkXz64Fmx/u+cVBP0ZfB12v++9dnkfBldT5kY/gS+xI/wYAKS9jtA2g99/7PePtw7Pxz3xSg/tZwijw1/dvtDwl58KPxZ0ojsDn7e1JqOL+tjmJ6EZVEe3DbHZhuWRXnasj3UzF/O7O3d3J/j/m4qfKxz7ec9HlWrVX6oqsqIMFAelpM3q+UyHnR0jE7KjyRf0k8ZPN79jvC7+8/qzkg/YEq59WWw8IlbsaZdIuX3fXumz6/ZKfgS1I7XsP2r6PYiT+Avp6XL+GLTZOci38nz/OXf0cTWR9MMX5yGL9rhi0GT8WXKa53vhC/a4YtBU5q//FThi3b4YhC+OA1ftMMXg/DFafiiHb4YhC9Owxft8MUgfHEavmiHLwbhi9PwRTt8MQhfnIYv2uGLQfjiNHzRDl8Mwhen4Yt2+GIQvjgNX7TDF4PwxWn4oh2+GIQvTsMX7fDFIHxxGr5ohy8G4YvT8EU7fDEIX5yGL9rhi0H44jR80Q5fDMIXp+GLdvhiEL44DV+0wxeD8MVp+KIdvhiEL07DF+3wxSB8cRq+aIcvBuGL0/BFO3wxCF+chi/a4YtB+OK0h4cHfFHt8fERX7Srquo7vtze3goxpNfNzc3d3V0+IIXm8/n9/X0+IJ1k/rLb7TIk78T85QqxPtKO9ZFBrI+chi/a4YtB+OI0fNEOXwzCF6fhi3b4YtCZvjytKtkNLTeDw2r1FE+gb+bGl/VRXuuw1XvZr9d5+BM9N4uXZpsP/DUpX+RVkOufduv4csw8X9u28+cvwZSIS26zHBzS93Lhy7Z5mc2OmZQIzce+bA9185z3XTchX0Tq6LtUiB+8NH7DF6d58GVfj0D5hB3yvl/gy0XbNsem6eYvJXl1/E9hVH0py6WwWEr7y408PBxZxoFUXFXF8Z9+feXAlzBhOf0NWaboUZ84r1nUx0VaRqWt3sdzygegLLJG519Voqn4sm/kKslFG/vifPmZuowvo5IvLTSyE7mItIQheUryI4wUjNrTX582G27eOPZle1gsDuGNXd70Ya6eRgbzl/IF254vO/EH9s+/XtPwZV3Hl+CEL/t6POIwvfnL0J0w1ArS96V7ahmFl5Dr+YsU1//5pkB/TXTCl/Bz2qlNGOmff72m4Mv20KQX4I0v2+bw3kvjKVVfRoucD3zJw/ASc3n/Jc3V43gAojd/+cCX8WcDXz5Vuw7NW3sZ10cHF/AzKd5/kZ3ywGYpO92J7/gSj6slvIQ8+BIg6E1hZME/nKt/0pewLIo74dEj85fv1De6239umjLotDN9CWakohPdYVrplMMwLcn71WqVb+hWVRnpQNks+0c/cy58kSIx6fszGxG96L5UF4t8Qp7pyLtfDvP93dd8nyUNxvF2fzgzsm+SvvReDg/X8MPOn79cNBZHJS++/HublC9TzZcvmxWzlxy+aIcvBnnxJdys6f6umvBFPXwxyNn6iEr4oh2+GIQvTsMX7fDFIHxxGr5ohy8G4YvT8EU7fDEIX5yGL9rhi0H44jR80Q5fDMIXp+GLdvhiEL44DV+0wxeD8MVp+KIdvhiEL07DF+3wxSB8cRq+aIcvBuGL0/BFO3wxCF+chi/a4YtB+OI0fNEOXwzCF6fhi3b4YhC+OA1ftMMXg/DFafiiHb4YhC9Owxft8MUgfHEavmiHLwbhi9PwRTt8MQhfnIYv2uGLQfjiNHzRDl8Mwhen4Yt2+GIQvjjt4eEBX1R7fHzEF+2qqvqOL7e3t0IM6XVzc3N3d5cPSKH5fH5/f58PSCeZv+x2uwzJO53wJT9CRHRe+EJEWuELEWmFL0SkFb4QkVb4QkQ6vb7+P0RjT0cIFCvMAAAAAElFTkSuQmCC"},250065:function(e,n,l){l.d(n,{Z:function(){return t},a:function(){return c}});var s=l(667294);let i={},r=s.createContext(i);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);