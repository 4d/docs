"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84288"],{152005:function(e,n,l){l.r(n),l.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>c,assets:()=>i,toc:()=>t,contentTitle:()=>d});var c=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-get-cells","title":"WP Table get cells","description":"WP Table get cells ( objTarget ) | ( refTabla ; colIni ; filaIni {; NumCol{; numFilas}} )  -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-table-get-cells.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-get-cells","permalink":"/docs/es/WritePro/commands/wp-table-get-cells","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-get-cells.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-table-get-cells","title":"WP Table get cells","slug":"/WritePro/commands/wp-table-get-cells","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP TABLE DELETE ROWS","permalink":"/docs/es/WritePro/commands/wp-table-delete-rows"},"next":{"title":"WP Table get columns","permalink":"/docs/es/WritePro/commands/wp-table-get-columns"}}'),s=l("785893"),r=l("250065");let a={id:"wp-table-get-cells",title:"WP Table get cells",slug:"/WritePro/commands/wp-table-get-cells",displayed_sidebar:"docs"},d=void 0,i={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Table get cells"})," ( ",(0,s.jsx)(n.em,{children:"objTarget"})," ) | ( ",(0,s.jsx)(n.em,{children:"refTabla"})," ; ",(0,s.jsx)(n.em,{children:"colIni"})," ; ",(0,s.jsx)(n.em,{children:"filaIni"})," {; ",(0,s.jsx)(n.em,{children:"NumCol"}),"{; ",(0,s.jsx)(n.em,{children:"numFilas"}),"}} )  -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objTarget"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Rango o elemento o documento 4D Write Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"refTabla"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia de tabla"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"colIni"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Posici\xf3n de la primera columna de celda"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filaIni"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Posici\xf3n de la primera fila de la columna"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NumCol"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de columnas a obtener"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numFilas"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de filas a obtener"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nuevo rango que contiene celdas"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"WP Table get cells"})," devuelve un nuevo objeto de rango de celdas que contiene la selecci\xf3n de celdas en ",(0,s.jsx)(n.em,{children:"objTarget"})," o ",(0,s.jsx)(n.em,{children:"refTabla"})," (definida por ",(0,s.jsx)(n.em,{children:"colIni"}),", ",(0,s.jsx)(n.em,{children:"filaIni"}),", ",(0,s.jsx)(n.em,{children:"numCol"})," y ",(0,s.jsx)(n.em,{children:"numFilas"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"Pase:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"objTarget"})," ",(0,s.jsx)(n.em,{children:":"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"un rango, o"}),"\n",(0,s.jsx)(n.li,{children:"un elemento (fila / p\xe1rrafo / cuerpo / encabezado / pie de p\xe1gina / imagen en l\xednea / secci\xf3n / subsecci\xf3n), o"}),"\n",(0,s.jsx)(n.li,{children:"un documento 4D Write Pro"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Si ",(0,s.jsx)(n.em,{children:"objTarget"})," no se cruza con una tabla o rango de texto donde se puede recuperar una selecci\xf3n de celdas, el comando devuelve Null."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"O"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"colIni"})," y ",(0,s.jsx)(n.em,{children:"filaIni"})," - definen las coordenadas superiores izquierdas de la primera celda a obtener."]}),"\n",(0,s.jsxs)(n.li,{children:["(opcional) ",(0,s.jsx)(n.em,{children:"numCol"})," y ",(0,s.jsx)(n.em,{children:"numFilas"}),"- especifican respectivamente el n\xfamero de columnas y el n\xfamero de filas a obtener para el rango de celdas."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Si se omite ",(0,s.jsx)(n.em,{children:"numFilas"}),", se devuelve una sola fila. Si se omiten ",(0,s.jsx)(n.em,{children:"numCol"})," y ",(0,s.jsx)(n.em,{children:"numFilas"}),", el rango devuelto contiene una sola celda."]}),"\n",(0,s.jsxs)(n.p,{children:["Si ",(0,s.jsx)(n.em,{children:"colIni"})," m\xe1s ",(0,s.jsx)(n.em,{children:"numCol"})," o ",(0,s.jsx)(n.em,{children:"filaIni"})," m\xe1s ",(0,s.jsx)(n.em,{children:"numFilas"})," exceden el n\xfamero de columnas/filas en ",(0,s.jsx)(n.em,{children:"refTabla"}),", o si ",(0,s.jsx)(n.em,{children:"colIni"})," o ",(0,s.jsx)(n.em,{children:"filaIni"})," es mayor que el n\xfamero de columnas/filas en ",(0,s.jsx)(n.em,{children:"refTabla"}),", el rango devuelto contiene el m\xe1ximo posible de columnas/filas."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Usted desea modificar los atributos de un rango de celdas:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3;$wpRow4;$wpRow5;$cells : Object\n\xa0$wpRange:=WP Create range(WParea;wk start text;wk end text)\n\xa0\n\xa0$wpTable:=WP Insert table($wpRange;wk append)\n\xa0$wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)\n\xa0$wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)\n\xa0$wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18)\n\xa0$wpRow4:=WP Table append row($wpTable;"Christopher";"Lee";53)\n\xa0$wpRow5:=WP Table append row($wpTable;"Henry";"Cartier";42)\n\xa0\n\xa0$cells:=WP Table get cells($wpTable;2;2;2;2)\n\xa0WP SET ATTRIBUTES($cells;wk background color;0x00E0E0E0)\n\xa0WP SET ATTRIBUTES($cells;wk text color;"blue")\n\xa0WP SET ATTRIBUTES($cells;wk border color;0x00E000E0)\n\xa0WP SET ATTRIBUTES($cells;wk text align;wk center)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Resultado:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:l(110448).Z+"",width:"373",height:"111"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:'Para obtener un rango de celdas desde la celda "5x7" hasta el final de la fila:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$cellRange:=WP Table get cells(tableRef;5;7;MAXLONG;1)\n"})}),"\n",(0,s.jsx)(n.p,{children:'Para obtener un rango de celdas desde la celda "5x7" hasta el final de la columna:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$cellRange:=WP Table get cells(tableRef;5;7;1;MAXLONG)\n"})}),"\n",(0,s.jsx)(n.p,{children:'Para obtener un rango de celdas desde la celda "5x7" hasta el final de la tabla:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$cellRange:=WP Table get cells(tableRef;5;7;MAXLONG;MAXLONG)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Desea recuperar las celdas que un usuario ha seleccionado:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $userSelection;$cells : Object\n\xa0\n\xa0$userSelection:=WP Selection range(myWPArea)\n\xa0\n\xa0$cells:=WP Table get cells($userSelection)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-table-get-columns",children:"WP Table get columns "}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-table-get-rows",children:"WP Table get rows"})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},110448:function(e,n,l){l.d(n,{Z:function(){return c}});let c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXUAAABvCAIAAACcpcfWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAA48SURBVHhe7Z1PixTbGYdd+B38An4AF4MERp2B2YiLMAvJH4QgLZK4cXrpJgazuc2NC1fZNEFILswiO5FAILfDLBQC4sggBC8Nt2fcziIXN4KIed/3vOdvdc/0dNU5XWX/Hgo559Spqu5T73nqnJqu8tz/As49+O/+wVssWLBgaWSBX7BgwZJrgV+wYMGSa0n98gUAABoCfgEA5AJ+AQDkIvXLOZCfK1euaApk4Pz585ubm5oBedjY2Hj9+rVaZDZT/KJrQB5u37799OlTzYAMvHv3jvyiGZCHra2t/f19zcwGfikN/JIbinv4JTfUwvBLG4FfcgO/FAB+aSnwS27glwLU9Mt4uE5JT38kxadhNpuz8moS+cU2c380HvaHYy2dzagfNy7aewrwSx0oxIT1IBydDXxh/fEL71Qjl48ZHu8Egq3ANAK/+LY6QwMro74/N2jvCPhlcWxYiVFsXI2Hw0qENeoXSc8X//DLKcR+cY063/jF4a0Cv6TAL01AcaXByRe/yuWv8fGLpLlM4KOZDBfLevMB4JdTCOdHvgUVW2BOKa3QBpcqrrZZS3CTU8bWT0JgVYFfmoCiTXv0mP/lCAvjqxm/OMyuJZbNKingKqZ3+E/jisBUkvu7tpVdm4kqOCcJbtSolTVlz0RQ352CVQd+aQI3AXf4mCMaHb9ESEAnwvHBPWsroCR+MThJTGvSqCitNa3+igO/1GfaLRcKNR9gWfzCRVzmQrka3FO2AiHR/Rd/z8W1G/xSF/ilLqFIAsIhTQ6/uAh2CRvcXNetSrYCEfH9XddW1JLSgL7MNXKkEE1NKfL1Vxz4pRYutCiiwkEMxZeWMzX9wmFrCPbJhw7gNVqy3u/LvcehbhZuBCIivwz1zqxtMtvs2p6Ea9L14ShoXFPRVVsfDnU/aHn4ZXF8txd8pBHxxav++AVkYer9F9Ag8EsB4JeWAr/kBn4pAPzSUuCX3MAvBYBfWgr8khv4pQCL++XfICfXr19//PgxnRuQiZcvX169elUzIAMHBwfb29uUUIvMJvXLpUuXyEwgH5cvX97Z2fkdyMb9O/e/uf2NZkAevr397au9V2qR2WB+VBqaH7169WoC8vGPyeGdQ02DTPxs8uE/HzSmZwO/lAZ+yQ78UgD4pZ3AL9mBXwoAv7QT+CU78EsB6vvFPw1Q/dG5+dUwfox+dor5Zbf3hU6mX3ofdMVksjf4vDY41oznQ4+qrX3c02yT0BHpM/R2NZuXLvmF2vyTaxU9ZcGZai+NjF9IIzOfmfPPQYEzUHL8QvGqHtn7uHbOpk+AquXxC0EfBn5JEO1av+x+MmahwkINVQf4pZ0sxy/m2njqhRF+Kcnex97gox2/HA/WPg9M0+c8C43RtF8qz1GKX8wciovsjMmXgGksxy90bXTTE0lb78icyE2LJLJ3ZS4jMtIZkynhTWRbP4cyWa0sCjv3ebDLYyV/WZahE20ygF9idgfUjG5+FE6UoklTS2nWL5TQwQr7Q5IiEk65StUSUKGwX7T/x/FqvUPXTNPnbUJcIKtsiLsSowmVjrnSfuipaHhzt0NjHztaifYDv3h2P0Xt4xNJuq006pdQGJQWiZBNjHJCvyQloMISxi/Ut+PxtvWLE4TF1wy8kJS4kby9X8BQmqvZVXII7j9BHWuc/HTAL8eDgWkW+CX1C2lE0vDLQixlfpT8wcj7JYnjhf1C1TgNv8wHNYuOK93o0jdd0OYtpqZfyBWkCBKFM4a9p6J64ZLYJtUSUGVJ93eD8PXlVGgr8L1Gub2S2KRa4ndFJaoM+ycPKon9Ql3FTaYwP5qCa1VpanFxORHXoaZfWBaE8QWjBXrr1ub8ixnX19MSvy3wFPMLham5PDqD8A0U6u0Dc/H03V6yFOU23fvIt1EosfZZNqGST7pKbtPa+tIltIJ2DLNqYO4QyyHML1+osMdrbV/KSkf94hrQjQrbTCPzI9A4JccvK0qX/NJZ4Jd2Ar9kB34pAPzSTuCX7MAvBYBf2gn8kh34pQCL+eXChQvPnz//O8jGo0eP3vz1zY9//hFLpmXyl8nkN5OkEEuDy+Hw8PDnh4v4ZXNzky6wIB83btz4/o/fv//Teyy5lkfvj3aO0kIsjS5Hvz366Z8/qUVmg/lRaUgxmB/lBfOjAuD+SzuBX7IDvxQAfmkn8Et24JcCwC/tBH7JDvxSgHp+qTweoGg5ni5amGX6RR8RCBd9XOiroit+4dMRPjDBj4PxSWn/w41E7fGLqCQRyXjYX8eji7VYpl92P5lnkdzj1HuDT2f2i3kSss10wy/maS/vF35QS548Sh52bykN+KXfJ5uEMhkPCfilFm2YH9WJ4A5Ef2fmR+nDjfrYtL0MtJom/DIcu1e6MKN+f0SjGvWLfYRaxjgmQ0IyRYxUmzYIWm3a5he+bJ770uvxk9D2jQo8SucK8nj02uCDGbfTWlOZl+iBadMx5IIcvV5zSXTTL9LanN3tdWHS2oxf/DujSC9DIxKjC7siLPBV3Vbj0QhyCWnh+IU1oTpwEU8J93YFCXf7dhK/rbvMupe8iJukMO45hemoX8yJKPaWnJo05JfAH6wXnxXYKXZ8EpjIV4NeUtrpF43p+AawGbA4myR+8VtJmgtp8/RlVMugq37hl2Z6obecpvzC4iBV2JzzCyVkvOL9E/pFi6GXCm33S/zHizn9QoWchl/ORtRKvj1tU7ea5vzC5iBZ6HzHDkwCz0zzi9mqD72ktNovHPE+yimhAxPJVudH9s8fx4M1SVAJ/HIGUr8kTd1q6vmFrMEzH536UE7UQcowULFLC/7tmF4o+qJeELF0v1Acm+mP84Vk7ZjcTZHIFGwQmSgN0pu+Zlu3K1ESu0lWuddrLul3HN3wi20ur5hqSYupPX6pDSZH02jD+OUrpzPjly6zdL+Y+8EgAX7JDvxSgCX6xUydopsxwAK/ZAd+KcDy50dgGvBLduCXAizml4sXL+7s7FAfAJl48ODB29+/ndycYMm13J8c/eooLcTS4PKLyeGvF3o/5rVr1/Q9sSAP9+7d++4P3x3/7RhLpuXNkzcPtx8mhViaXR7+8uEP//pBLTIbzI9KQ0MYsoxmQAb29/c3Nzc1A/JALUztrJnZwC+lgV9yA78UAH5pKfBLbuCXAsAvLQV+yQ38UoBm/GIfE+Df/cvzSKbgpJ+2pI8hnZ3Tj9FlnF9c2+KXQs0Cv9Qj7PRSYB8FCuO0Ab/wbu0h5Jgms6BA+OVUmjyd+pJqLeH4hVsVcmka+KUW46E+yqzYjkt9MniesLZfOPaD/RF6oMX6/tm2gl/AwsAvdaCuR8Q9X6BgDWK1rl+qerFI3/efgivS0EnejNkfmox8DKnCNW1tQvZotohzuqU9ZHIMxm5VOWbH+uccfgm/6rQ8OBH4pQbjMccYd70k2pLHCbP6xfRqqmJqcIntJq7LmNGOW0UJU4UqaN1wnTmWOyiXyDp7DLc5JVwN3U+3ONUv6VetfHVwMvBLE7iwM2khiNXM4xdO2L4ffRTXZTgR7MHWcRuZtBT67SslWl125oi36Rin+SX9qtWvDk4GfmmE9PVN1OOC8KvrF4nz+AB64yft+3Ffj7uMdA7J2jpuI0a/QrB9WqLVo62E8JidYg6/RF+1+tXBycAvjVD5gwxFoi+p7RfpwtEAxKR9n3CRH/Z1tzqoz/nQGHavtgqti/ftdsIpWcWfxZRQMtpf15jtF8rpN4u+auWrg5OBXxpAgzEgLmnALwTHtmL2zT2CWR8OdVX0Zky7miqPhv2+ZLw6kkq6Ro6ie4nW+2PwscOtfA2zgy7h/OK+kEfPX9pAaR6cCPyyONVQcwqIg68Zv5SBvkJgxq+ccPwCcgC/FAB+aSnwS27glwJ0xi9dnussAvySG/ilAF0av6wUvV4PfsnKwcEB/JKbBf2ysbGxtbVFG4NM3L1799atW5oBGdje3kYM5+bOnTuL+GVtbY02A/m4f//+kydPNAMy8OzZs5s3b2oG5IGukS9evFCLzAbzo9Lg/ktuKPrpAqsZkAdqYWpnzcwGfikN/JIb+KUA8EtLgV9yA78UoKZf/I9L5ZcpPoufkNYk9Uv4i0l5RaCWz8FK/W5ofuCXBghiy/6CN+r69ccvHPhh+CKaGyHyC586e9pENHPoGw8hnQL8UhuJRRNmNtyCIgZ+aSmBX7iFY6HM4Q6chtOAX2rCw+hhNcwo8ny0ZvWLuIzgw5n0rDfaKfK5pDzuTyuI9wu3x/TmsO07qzl5xcgUmzNiN0jrr6SJ4Jd6yJvqplzGKLB8uDbjlwRzRHdoKzRRCxe5T8Al9uP5TzoejVZcLsQcfrEtdlpz0vaSdEWUcCfE1l894Jc66BDah5kjGlznG79wuYeL3GcJO4Tf1JZCL8w84xeGHWGHe2Fz+rQ9QSeckJUEflkc958HVEIo+W8Fsvol6RXus7hV8aczxdCLcOL9F3MSuZzbb2pz+jRX46Sr5oibf9WAXxaGAiciiLokxPL5RT6ErpAhk684tUMwlF/vQy9M4BfTlP7E6Ul0rTi1OX3atTvvRcvMGDasv3rALw0wK+TsIKamXzh2DbJnn7U9wOVsesYb7ZSK/1aWyC8Ey0GxJzQoIpLmNO1t7++m5yc6ISva4PBLA1inuMgy2BBtYPzSKJgcWVK/gKaBXwrQLr8k/znTKgO/5AZ+KUBb/GLG+m5YBeCX3MAvBWjX+AU44JfcwC8FgF9ays7ODvySlXfv3sEvudna2lrELxsbGzyfAdm4ePHitWvXNAMycP78efKLZkAeSBSvX79Wi8wm9YsWAwBAbeAXAEAu4BcAQC7gFwBALuAXAEAu4BcAQC7gFwBALuAXAEAu4BcAQC7gFwBAHr58+T8OIyMlnOgMXQAAAABJRU5ErkJggg=="},250065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return a}});var c=l(667294);let s={},r=c.createContext(s);function a(e){let n=c.useContext(r);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);