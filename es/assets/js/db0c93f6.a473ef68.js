"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33754],{508088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>A,metadata:()=>r,toc:()=>o});var s=t(474848),l=t(28453);const A={id:"dom-get-next-sibling-xml-element",title:"DOM Get next sibling XML element",slug:"/commands/dom-get-next-sibling-xml-element",displayed_sidebar:"docs"},d=void 0,r={id:"commands-legacy/dom-get-next-sibling-xml-element",title:"DOM Get next sibling XML element",description:"DOM Get next sibling XML element ( elementRef {; nomElemHermano {; valorElemHermano}} ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-get-next-sibling-xml-element.md",sourceDirName:"commands-legacy",slug:"/commands/dom-get-next-sibling-xml-element",permalink:"/docs/es/commands/dom-get-next-sibling-xml-element",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-next-sibling-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"dom-get-next-sibling-xml-element",title:"DOM Get next sibling XML element",slug:"/commands/dom-get-next-sibling-xml-element",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"DOM Get last child XML element",permalink:"/docs/es/commands/dom-get-last-child-xml-element"},next:{title:"DOM Get parent XML element",permalink:"/docs/es/commands/dom-get-parent-xml-element"}},i={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM Get next sibling XML element"})," ( ",(0,s.jsx)(n.em,{children:"elementRef"})," {; ",(0,s.jsx)(n.em,{children:"nomElemHermano"})," {; ",(0,s.jsx)(n.em,{children:"valorElemHermano"}),"}} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"elementRef"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia del elemento XML"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomElemHermano"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nombre del elemento XML hermano"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valorElemHermano"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor del elemento XML hermano"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Referencia del elemento XML hermano"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"El comando DOM Get next sibling XML element devuelve una referencia al pr\xf3ximo \u201chermano\u201d del elemento XML pasado como referencia. Esta referencia puede utilizarse con otros comandos de an\xe1lisis XML."}),"\n",(0,s.jsxs)(n.p,{children:["Los par\xe1metros ",(0,s.jsx)(n.em,{children:"nomElemHermano"})," y ",(0,s.jsx)(n.em,{children:"valorElemHermano"}),", si se pasan, reciben respectivamente el nombre y el valor del elemento \u201chermano\u201d."]}),"\n",(0,s.jsx)(n.p,{children:"Este comando se utiliza para navegar entre los \u201chijos\u201d de un elemento XML."}),"\n",(0,s.jsx)(n.p,{children:"Despu\xe9s del \xfaltimo \u201chermano,\u201d la variable sistema OK toma el valor 0."}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Recuperaci\xf3n de la referencia del elemento XML hermano seguido por el elemento pasado como par\xe1metro:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $xml_Padre_Ref;$siguiente_XML_Ref : Text\n\xa0$siguiente_XML_Ref:=DOM Get next sibling XML element($xml_Padre_Ref)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(780313).A+"",width:"496",height:"224"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Recuperaci\xf3n en un bucle de las referencias de todos los elementos XML hijos del elemento padre pasado como par\xe1metro, comenzando con el primer hijo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $xml_Padre_Ref;$primer_XML_Ref;$siguiente_XML_Ref : Text\n\xa0\n\xa0$primer_XML_Ref:=DOM Get first child XML element($xml_Padre_Ref)\n\xa0$siguiente_XML_Ref:=$primer_XML_Ref\n\xa0While(OK=1)\n\xa0\xa0\xa0\xa0$siguiente_XML_Ref:=DOM Get next sibling XML element($siguiente_XML_Ref)\n\xa0End while\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(3658).A+"",width:"662",height:"223"})}),"\n",(0,s.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(n.p,{children:"Si el comando se ha ejecutado correctamente y si el elemento analizado no es el \xfaltimo \u201chermano\u201d del elemento referenciado, la variable sistema OK toma el valor 1. Si ocurre un error o si el elemento analizado es el \xfaltimo \u201chermano\u201d del elemento referenciado, toma el valor 0."}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/dom-get-first-child-xml-element",children:"DOM Get first child XML element"})})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},780313:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfAAAADgCAIAAABzb6OeAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHFRQLJOjaqkwAACAASURBVHic7Z1PaCtJfsdLyQxZxsYLOSQeyYMhsYflIUiYg6WDD8PDpxwGFIL+EEgw7CnvYvBhD9KxdcgDg0+BQMCHHPQnEDEb9uZ4Z4kP0uPtOxkzjJ2Qx7M0PmYdv1w7XV39p7q7qrvV+tdd+n4wu63uqurqGr2vfvp16/fNDYdDAgAAIPvkdF1f9RwAAADMgd9b9QQAAADMBwg6AAAoAgQdAAAUAYIOVGdCGjnSn2T2XGzM0ZxGnu9oc5nMJAvrlpGZQNBBSmnnSM7+a49WPZuY5ElHJ9X8/AfeLZGib1cMEew37DVsEL6hYLTVsoR1Cy6XvYd/p/F/jb7Vxrc/fM350fi3bciaz/GtDkEHaUUjum7+DUmrvOoga4XkxVKeK5BuaL9Rm9SK1hr2CCm0JaOpSuwrber2O21M6oT0xtbLTtVq4OxhfyEfPMYn6E3PajbukTL7HI2cyfze6hB0kC7admjTbNq7SsYbntx9MCTKEx+1uRiq3Xajqkmfi7Dk0GbeuNX41+h0GbUDcRYL6PrczhEXuLGhvGGgIED2DjJVRLZfJ7tMSsx4lqlPCJctoh1Z29UTQlqegNEdLUDktfumPekH1kF2+b7xnc8kX+5FciJ3wBiRcpwrnTt3XVLctbbzxkaXfIgxE8FbndjvrvZ0E4Cgg3Rgf7fdN6OhEn+kb2gROSrRt7sR9dROqToYomCEQk4MdbNvBTjdGjkl7naIWuarROuSC6fFiNS65MQc0Bi8TAJxlkntztpfMiZcdmM3IwT+4B3fUB8nQB4W7QDZOwiLyEb2ZQq/+I/MENK4+mrHsyyR63ljKMgX9ssvqPq/Ny8jfLQ4185P22hfGJCx7l7ph9DLp+Pf2O0ln0myEzkD8h3nvG6zcdwjrXNrxUaXpN6zTh1zJu5bndB3O/1PsD+lrOsArJaxXie68U4cig726v5Dxp66sbNu9HO798bybX6n78w9nWjW9lDT673AICYam4Bvv3BY2Ukj9ycgvG+yE0177bJhp738JaxbsEvsPYT7s94k5so4O4eS9sK3tIzgW91laA7ovOflIEIHK2VEv3ef6P6o3DnKgjL+UPWMfpPtnZHZv0bnD0m9ZX3TP2+RyqF7qFZwY72WHdt6O5OznttMmN5xv19nKnMdfe1eZAkN2eUnToAsLXPig8+hO18Km1xW3Xl/tgukMua+3+TCviN6EL3VXcxoXT8hhagBIehgpZTo1+fzwCMB7tGmf1//lBQ1K/EyK3lyopHBNZlck67mudk15P65yu6D5atuBoDUBCldVwrNBEg4IamDZJdWdLKxhOaDurEFMc6188gUX3b5kZ8QU50o7roFP1OnWZNYeC+ThgvxL1b0Vndh+fRzmqoKT9pA0MGqsW/xnQfudAXvWxp7jECm2aQ569PQe54xKR3RVHuh5t4/ZCpf5rKW/YZIVUehN13zpFIntQu77YX/A0PQo+qR0WD0Fw27P2zP9UgjrUv7Es7poxTRQ8W8dm97/sN11Dbbyy7f3G98glrzvY54UIc/kaxj/HU78k417prEx/zMcK6aTTLmB0bwre7uN/5dXJoX1Yn+VgpBB+mAybpO7grSsNR4cxvKOzQDGZp4qUU8xxKLEukZcVSdHHP/sktNMiRurGd8hAj+2ZdIseY+rVEc+vW62iG9G6sBvQ0YEn9NC/fYYk2+XMZVOBOokbgTiHXtvvZFmgpwrpTdiJVdvrHfWbfTu4gHdXgSd5RNlaY45vgfxaSpE61ljU/fq1N9Hvswo/ICuz8ce56otggAyBrGR5p562Vpj69kBUToAIAMYHw/c7JJLIcDNQ8CQQcAZINWeTEpLIVAygUAABQBEToAACgCBB0AABQBgg4AAIoAQQcAAEWAoINUMul/l8v90v1rP8bt1bhf28rpYO2BoIPUUn8x1r/R6d/L3s0bKDUAUUDQQbpoiyorbVY7L3vk9rT/bL587je44N0R+sn9ae2JdG8L5v4GbSxpmdA9AICUA0EH6UBucMHYPKxsdQePpiIb+s4idzN4J7cFlpDJ7531tpy4vlPdlLZM6h4AQLqBoINVY5eaOolXrNUHFfqkLa1CfUcCmzQAsggEHSyCoFm6JAwON7iQj3/fsBMphdrTjC1juwcAkHIg6GAR2MVw3T9J6Y1wgwuO5+vBU72yTeP30btc4aEytnIp4548Qo/XMrZ7AAApB4IOVo3c4MLhud+4qpEXZzQtTibvn0h959BKzVChd4fa3SLdJ8emJ6QlOz6lewAAKQeCDtKBwODCfl4ll7uqFQ/0zh5T3Hz162HROfT2rsjF3aUve/WHsv2US0jLRO4BAKQcVFsEAABFQIQOAACKAEEHAABFgKADAIAiQNBBBnj9+vXHjx+d7Sy+nO+CACAEN0VBBmi32ycnJxsbG8Y2U0m2naGXzjYAi+OTVU8AgGg+/fRTZ9unjFl8CcCCQMoFZIBXr17NTRNlNdNRSx1kHwg6yAASNR+985hguH/fCX9vOjOeYrwNq5ZvHJBDB8sBKReQXUpf6fpXbNOIrwuDnbH9a9KFMHkcFA90fdvcvm8Urtq73zRR/QWkCEToIAPwT4wwhD4YPqTuFgbX7RBzO0nH/F6nuW01yW9X6uTmvRWkR9llvHr1KvIaAZidNAp6ToJzaNUTnAO+61rmSRfXfhlE+WDwSN0tSPf27ojtP9BabwLJE3lHl+e7LinubrIXUXYZuCkKlkMaBd1B97KqaSxO15Z8XatdxlmgN0V/tzE/H4z6i2Prs2D7uOcYIcXoaGGE8G9a2oE33wK7DLByUi3okciCXN/+OG2Ch+Y4sTjBuLBN/HGmvcbIMy4lNo/rg7Fxs7FgH4xpOo7atJbv2Em/eBHZZeCmKFgOWRV0n+LItFso6+F9I1/6iJxY8FzCMYNtIseRTTLkvOGDy0Q88qqTMn8fDI74PhjFTU+8H9aRptfLxK3lKzgt7DLAyki1oEeKCJ+N4Rv4cgvCPIOsr687vyHclqlbsL1zrpAxw68l5pyFO4PzlOWyZJmZOFe9IOhN0Z9+jPTB8BDlbsEa3Z/WnrSj7XgdH9u5q0HlpS6OzUPsMnBTFCyHVAv6XHLo03aM3z6k5bxS1THH8TUTar3vEy4ozcFes0xpUQh8MGQtQ3wwHOuMwm1x6H/0UNpxNGkZXWtXwQdgouwycFMULIc01nJxlCU4N3bI2C8L2J0GfGPfmHH6Bs8VHDP4UtYgzjyFTDVOsJlQ6GUrIDtpyMqEDDJfUAsFgDikOkKPZJYQfi7h/xzPNa82QoQ5q3ldeDDDPnc2NzeFl5AVcFMULAcVfimak0f0y+k7x3PFGTNyHF8MHnOeMXsJPxjijD8LTBCdTLTzkoXtmXgJwBJIdcpFhjBTIUuzBFMucfoSSYIimK+QpTVklxNyruBZko0jTKrwYwpXWJb/CVkxAECqSKOgAwAASEC2c+gAAAAcIOgAAKAIEHQAErEehhj9BmnH/m3udKzHAi4ZCDpYA6h2eCvopltNJv0G99DmohQ1xjzIgBBaxyxrC7i2QNDBmlDfqndvL1amjVORr3bobwSG2mqnMbogpOLUMMjSAq4tEHSgMrwPxs7ZcKd1LgoqudqKTm10MwJ91244nnaO64XH3y5olMFC136b3/nYzgn8NKJsMbyM2ma43mBnt16x4N0b0HuCeqedtREe8PtsQy5bpHLoHs34Aq4FEHSgImIfjNKXPXJ76rOzoGZytKIL87so1q5cwes+7Z/R/UPtqVZ4S5ztiyijDGc/LeNliNEbMrTtMm7cZlG2GLGxAnrGuFcnpFVueMqXtcqXR9Yh0joPVDYTLteItDRf3XlVF1AdIOhALZg2SXwwNqsnO93aD3yIOrl+6Hr9Ltwg1K65+MX+lmf75tluIDHKcPcb8eb3LfelOYE7XhDnZYvhROCFWpe+7t594I5qQ1qBLL9b9B+SL9fokmhH/rMovIBqAEEHCjEiUT4Ypa+G2sO5L8bk6qHnd+Vl0xPjFHc0/soPrpzx8xLYYsSGinm5RWV7usx7yHJNyHmLHAkWUckFVAcVarkAYGH6YBghpxGjDmWaXjp+QQpvL3jVMwWCSRIthk6SSpKpa4IQUTuQlFB3MbS1bASm1BbD0cbJ+5tYpx1dtsyzDJtTOmrIl2tyTboa6Yh7ZWYB1xBE6EAtWMH0MB+M/N6J9tRqWbYV+cMd7uGNx4vak3YidSOSIjLKsMav/kxrvXHTypP7hsdyOsQW48OdmTzRWKD8xT5NgPtSKYQ7cvPevNi4HwPW9MTLdT0gvWNpn6ws4BoCQQcqEu6DUWoeuPFlfq8zfnFTZt/o39z0Xk4R54YaZdhsN/UDUrYzBkZLW7bEthjuIytWFsUaNl89Y/c0y/Yx5wrYkW6tQI+cDmJP3x3Bu1zm4+eHIdKY6gVca1CcCwDgYdQm5/ukU131PMD0QNABAB7aOXIEh+tsAkEHAABFQA4dAAAUAYIOAACKAEEHAABFgKADAIAiQNABmAanDnhwQ9ZSaebvgIEVngEIOlgjWAXX70S/H01Ovvq13pn+t5GxcIvertrrQozjgGGTuRVWDAg6WB9GP9S6O5r2NLh+jm68asxfjJZbpN4bu3VxW+VUSbrXAYNkbIVVBIIOVMbj2DC6fKj3vmweeQrAeuwUvP4JMl8FH94v/m6XQu2JaySwgCAhFg2T/qlZBlcbduyatrTquVVJMcTRggTCelYZPUGXqPUMOGBkaoXVBIIOVETk2PB42dqqHG6SUl4jD5d8oOvaLPD+CVJfBTm0y03vpdnlm3HPLjoot4CQWTRMrgd8YS6HUtOsdyJ3tKC67VbSNWGfCAm6RKxn0AEjSyusKBB0oBYyxwbTJ4F5LJgmDJdcPMj5JxxWLJuFKF8F0anNLmfVTf/+EAsISjKLBrGjhVWhUWRLlKjLFA4Yyq1wFoGgA4WQOzY8Xw+e6pVtpke04mvre2FawePPEMNXwQ9n9SDbL7OAmMKiQe5oUTo2SzI6tRed1EqCLtM5YKi1wlkFgg4UouSW9vb+i508DrqGYF05JVi7RHzjzvRnsNEO2Fd76y/OgxYySeL2e07BwbK959SioZQ/rJgi27r0XseoTbU2zNHCTa3Yom1G3gm6kJD1tBwwuLGytsKR58kmEHSgFkLHBvqV3KsdY97B0oHZLJj+DFG+CqJTU6uHh2trUBqxcvtDLCBEFg1u9XP3BqURZLMy6PEcLUpNS5+Lu/kkXazJx3PAyN4KqwkEHaiI17HhNxcBNxyqJo4EiG0WpL4K8rPudYZbtQLr8vauuOXul1hAhFg00LiZ3rx0EyGGmltmz3JHC8/jKpxDRoIu8vUMOmA8ZnGFVQTlc8F6M+l/VxjsjPG7lSmYzgEDK7xEYBINAJiOyxa9UwpSCAQdADAdTah5WkHKBQAAFAE3RQEAQBEg6AAAoAgQdAAAUAQIOgCKMH+vCZA1IOhgDRg5tVtz70asHKtTQiS0cKtkNIHZhK88bZLatIIeUwi04zUx34sFmQKCDtaAUtMstVp/Mda/sn5CSLfdwq3xnMws0Wa/v/cduh50LSsKqzatLcaT/nnLKU1Lf1nfrRVCNd04i+gMEbheE3O6WJBFIOhAZdqiwlI+Nqudlz1ye2oX45ZbIrAqVmOrOKGPim1FYRfWsuqmEFLsje1folslVVjdWiGjdqHWrWua8Bw8EV4TEuJfLMgiEHSgIkJDBjlukW6S0BIhX606Z7ELjNtHmk4VcZlvhTNtMzjXhp3jfemZ4nlNhDD7xYLUAkEHaiE3ZJiK5JYIZoqF4lYsJHZWnBpL0MSMoIYtsYNzN5wPjBzba2JK1sf/QXkg6EAhQgwZkjG1JYIpynTDV3m81LS938yCh4KbndYHAauHaA1CU/FWvn0ar4mErIH/g/JA0IFCyA0ZwvG47fBMZ4ngFCznCtBO+m3uDmh+t2j+v5NfdwmafrKBrMz8FF4TEczpYkEagaADtZAYMoTw3G9c1YjPqXJ6SwRbzQMplRvuqRbLOKheYcXErccTYzzIGHJpfq+JUOZ0sSCt6ACoi0Z04z0+HGrfEsL+fjuk8e+v7Zfmn/Yj32dIuxBNMJro+Rb2QKL4yZegfyfFerqRO8Tt8Z3JftxRfmljvV7XPd3ndLEgi6DaIgAZZjqvCaA6EHQAMkw7R46Q8gY2EHQAAFAE3BQFAABFgKADAIAiQNABAEARIOgAAKAIEHSgDskdHmjRcFFRWdl+AFLJJ6ueAABzwnR4OCuN3uXKD6LjW73x14mLdckxf3tpl1es9152PD/CBGCZQNCBItgOD6W8rn/FdhnxdWGwM+7sLfDH7JPHQfFA17fN7ftG4aq9+42sXCIACwYpF5BVkjk8GAE158fmTadct0N82iQd83ud5rbVJL9dqZOb9/COAKsCgg6yxmwOD5vVDjNjM/3YyG3B0e7u7d0R23+gtd40bE+f6I4uz3ddUty1Ui7wjgBLB4IOssO8HR6od4/7qv7i2Pp02D7uuZ4+0R0tjBD+TUs78OZb4B0Blgly6CAjjEiuTIY66QQPmQ4PJ82YA9FM961rEqeFNJ2i46hNy9KOnfSLFzNaZ0mYIUqvgIWBCB1khPk4PIze5QoPlbGVPBn3goG2TXHTk8AJ60jT62VyoMvvvsI7AiwFCDrIDrM7PEzeP5H6zqGlu9S7R9To/rT2pB1tx+v42M5dDSovdXFsDu8IsEwg6CBrMFnXyV3BjNbNx88PYyplvvr1sHhbsB5WeXtX5ALtrr2/cFsc+h89lHYcTVrUCPQq+ACMGZUX7kwpj5sOAmAmUD4XZBs4PADgAEEH2QYODwA4QNABAEARkEMHAABFgKADAIAiQNABAEARIOgAAKAIEHSwZsDLAqgLarmAtPP69etXr15tbGywbeN/7Zejk1z5fwj5C0J+Yrb8V/N/jZd/ZHpZeBvbff/yc2dYz9F/+OV/ke//7v8+EhI8kfXybz9/O/qbf7FO9Od//ffX//jHgllFvARgceCxRZB22u32yckJU8OPHw3BJY4yui9NL4s/vPunP/1cdJR/+btfMdeLz3/qPXr/z/+x/2974z6rxyLq++OPP+9tmtXPP368/8/j/f/+M+sHpdJZiV4CsDj8KZecBOfQKiaZhGzNNoRkF6LM5Rt8+umnzvaGCbHdLW7sl4zPPvO81H/183/f3HR+kf/j77ij123jkHnUKmu+8dkf/IT8Pjv43G/YR62f8pvn2XO8LIztP/kr18ti42Zjc3PDKXq+4Z0Ve8nidAAWijSHrntZ5px4VBKmZCRb/8T/1VK44J5khdDdQgK8LMC6kfymKB+8h+yP0yZ4KPGskk1SuD9VFzL7sOGXnKDj0rDUXO5uEYeVe1kYH0vTzRiA6UlyU9T3b9t4yYLB4H7fttEsQd/gS4c4QSg76SwTiHkhU+0XTl7YRjiCs803CA4iuzTZPENmQri1mh+GSBdIl9+jiSsThrhbhI6fHi8L5NDBEpBG6DkvwQZ8NsYnIvw/e6EEyPr6uvMbwu3IsJG1DM4hfALJLkR4KGRnyKdUiG4mzqXE+e8VsuDCtZoZuxKu+ydQ89evX38sfpS5W8iBlwVYOxabQ5+2Y/z28w4VI4adVprDpxd+1Im4w2U9ZIT4LGgZF4LE3UJKyrwscFMULIH559AX3XcuzD6B8K8vyeA/IXwjz36WxLMNT74vgV/84hduvsLnbhEyb3hZgPXDnxXNcclZf1NvMjekgXA7fl/ZuWRtxBcWY8D4kw+/kJALlJ03fPLBjg4xR+YbC8+VYMHBLHz8+BFpdLBoZv2laMgHwHL6zsIsE5jLeSMnE/yoCBkhZH/8BpEdoe/JgJqDJRD3pqgw7kvwjzxZX9Z+lvPOOIHwic3lvL58i2xusjOGzCTBJc9xwWeH3hQ1f2wJAAjHL+h6FMJm/E7Zdvy+/EtfS2FfIbIBk00+eCHBleH3xz9v+OLLliJ4Ctl8ZKeWzVPYLGTOICa4KQqWAIpzZQZh1n4dYL8UnaoAVjpfArBoUJwrMwRFHP/tAAA8EHQAAFAEGFwAkIiUG2KM2ubN7HbsH9ZOR79BFjV0yhc23UDQwRpANYL7HRBJuWpYYsyzKPVMxoQMCKH1zTK2sOoDQQdrQn2r3r29SJUuRlDvjemjReNenZBWOUWaProgpOLUNsjewioMBB2oTJur57VzNtxpnYuCx8l9w/41v1Mb3Yw037UbbP93/Qkty2Vvu12v23YZALtmOgtR+21+52M7529G7DJekfXT84eVOv3/1uXIPkNDErtzoX25xV0f69Doj8yNBrsA7zCNsOo4bW9ZtMsWqRy6R7O6sCoCQQcqIvbBKH3ZI7enPjsLs1JucWj5XRRrV65Cdp/2z+j+ofZUK7wlzvZFlFGGs5+W8TJE5w0Z2nYZN26zKW0x6vtfMBUu1LpW8D7UuNjdUHOq4twhH91auWaXBDbGMYaxGtPvAN1aIajpwmUckZbmq0ef7YVVCQg6UItQH4zN6slOt/YDnx6YXD90vX4XbrBp11z8Yn/Ls33zbDeQGGW4+w3l/L7lvjQncMcLX7gtBmV0YcpwvWJMYHI9cLYNSkembJux++jSjMntQwIsqdc71Tw/Jp3DCR2nW3MTJ/JlHF0S7cg/dCYXVkUg6EAhRq4GSWqRl74aag/nvliSq4ee35WXTU+MU9zR+Cs/uLLFz8tUnxNS4DIbRtBsJ0+0IZVhQj7cdbkjfGJl8v6GXctuDC8nWeOb9+bMQpZxQs5b5EiwuFlaWIWBoAOFKJFoH4zS8QtSe3txx+3ihIAWQ0+MzyjDQTuwHUrNP5E5hsgWw46oDewKv1/s131H7MP53WL8idqNLQF3L4AJvHwZJ9ekq0k+LLOzsAoDQQdqEe2Dkd870Z5aLUtf8oc73EMajxe1J+1E6kYkRWSUYY1f/ZnWeuOmjyf3DY/ldLgtRmA0doPUkxzpN8zkN59+iaR03DPHGVxPzCHOaaRf7zn5DNkyXg9I71g6uQwvrCpA0IGKhPtglJoH7i3D/F5n/OKmzL65v7npvWzGj+RCjTJstpv6ASnbmQGjpS1PSWwx8tWOeQ+zVbYfTynYNzpLTfsBR/9TLuJxrFuh1hBG0N8JOG/7ltF8/FyaoieZXlhFwE//AQCxGLXJ+T7pVFc9DyAHgg4AiEU7R47WIxOdXSDoAACgCMihAwCAIkDQAQBAESDoAACgCBB0AABQBAg6ANPg1PsObshaLmAOjcgCiTMzfwuLNCyd6kDQwRrBKrV+N18hzFe/Fv7ofCaCHheLlW8/joWFTXaWbq2BoIP1YfRDrbujaU+D6+foxqnALtoy1MwfdVqiTn8uyqomLuq8XgsLksWlW08g6EBlPM4Mo8uHeu/L5pGn0KvHNsHrkyDzT/DhzQ+4XQo1rhyVyOqBxLdiKDWHXIFbT8rF61PBW14InOykcX64hUWWl269gKADFRE5MzxetrYqh5uklNfIg6eElWunwPskSP0T5NAuN72XrPjfuGcXjJVbPcS3YpDW3rLCdYZVzYXJdqnp3U8D/jNfVB/PwiLbS7dOQNCBWsicGUw/BOalYJotXHJhI+eTcFix7BSi/BNEpza7nFU3/ftDrB4oU1kx+CvemjixuFWpq3v3wXvY3K8N+SRNfAsLVZZuHYCgA4WQOzM8Xw+e6pVtJlu0smvre2HywePDEMM/wY+scncMq4d4VgwBAwsq5pYHhtB5btJvWM50XNHCaSwslFm6deCTVU8AgPlhOjMYgacRjg49UjV5HHRJt3vVrXGtr5+rwZCQ+jDYqqEdmN6V3gbhMzCVSyBM3H7PKTgMkS0bwkutGIyGl/6jzGFOo1I7EewfimvMCoPzkIWyLCw63I7MLd06gwgdqIXQmYF+c/e624x5p0oHZqdg+jBE+SeITk0tHR6urUFpYMvtD7F6iGHFMGqb9c0Fsm15GFmZGNtbzh5YEJw7s41nYZH5pVsvIOhARbzODL+5CLjeUNFxlEJspyD1T5Cfda8z3KoVWJe3d8Utd7/E6iHKisE2DzV0maZURLpcPaM3PK2GpwP3yKR/WvM6kAqecomysHjM7NKtJyifC9abSf+7wmBnjJ+3UKazsMDSpQ/k0AEAFpcteqcUZBcIOgDAogk1zzhIuQAAgCLgpigAACgCBB0AABQBgg4AAJknl8sRCDoA68D83SpAymB3QyHoYA0YOSVec+9GrGqrU2kktL6rb5RgOVr3lzq+Mra8fnoOhRhVBCvhJhsnMK7tVjGfdQApRgdgHRj3fk3qd+PAtq7/b6/+Lfcy/oBWRVra0aqJxV5YR6xyWXw775HwIcXHZF3DGGp6veeOM+d1AGkCETpQGZ9vg5DNaudlj9ye2jW7Yzkn2L+rr1foD+XtEiqsFGJ+t2i+MuurjC64dvnqiaSqeRRsGHFVlgARbhUSEq0DSBcQdKAiQt8GOW4tbxLPOcGSaaKdmEUM84cVM37mhTpoJsEhrGpu49ZecfItVk1FMjgNy7jEc6sIYep1ACkDgg7UQu7bMBWhzglW7UOu+CG1DaJpl1bZkNrGOT1qFS63qiF2B9fRKW/OfIhlWIzhTE13iihWzuxjhupzmh7frWJK4CCRLSDoQCFCfBuSIXJOmPRNwTZCcNtJh92tLLdY8vvsrELzKpYRnCHSY64cIvskCNpU+LGTM95Y3krpWN8HbF+iadwqEgIHiYwAQQcKUXILfE+lOx5THh6WRz6nzgmWKjpFaa1si7nvemDusvQ2X2X+n3ZUHgi8mU1F8GRt2aOFdlZejPyqmVtFfD2fYh1AKoGgA7WQ+DaE8NxvXNWIz9BS5pzgJM95qwl/Ct3KeLMboRyWfZAb2lsPQjq5EzvF4n4NsD42SscsBXNOW1qfH9w3hLhuFfNbB5BSVvFoDQBLQiO68R4fDrVvCWF/vx2yx/XIt+6feSiXtwAAA39JREFU9iPfZ0i7EE00nO3YKXiw0H6s0MZ9vNBj8+l96tDztGPAENR3Fs8ZhI82+q56rNfruqfZvNYBpBVUWwRATaZzqwBKAEEHQE3aOXKElPeaAUEHAABFwE1RAABQBAg6AAAoAgQdAAAUAYIOAACKAEEH6pDcxoFWBm/cC8pdSfYDkEo+WfUEAJgTpo3DWWn0Lld+EB3f6o2/TlysS475A8uu9aLee9nx/NISgGUCQQeKMLogpELypJTX9a/YLiO+Lgx2xp29Bf5iffI4KB7o+ra5fd8oXLV3v4lTsxyABYCUC8gqyWwcjICaM13zplOu2yFmbJKO+b1Oc9tqkt+u1MnNexhEgFUBQQdZYzYbh81q5xtdZ3/UoKfgaHf39u6I7T/QWm8atnFPdEeX57suKe5aKRcYRIClA0EH2WHeNg7UoMd9VX9hVy/cPu65xj3RHS2MEP5NSzvw5ltgEAGWCXLoICOMSK5MhjrpBA+ZNg4nzZgD0Uz3bdd5qYU0naLjqE1rz46d9IsXM1pnSZgh6quAhYEIHWSE+dg4jN7lCg+VsZU8GfeCgbZNcdOTwAnrSNPrZXKgy+++wiACLAUIOsgOs9s4TN4/kfqO7TtBDXpEje5Pa0/a0Xa8jo/t3NWg8lIXx+YwiADLBIIOsgaTdZ3cFcxo3Xz8/DCmUuarXw+LtwXrYZW3d0Uu0O7a+wu3xaH/0UNpx9GkRQ1Dr4IPwJhReeHOlPK46SAAZgLlc0G2gY0DAA4QdJBtYOMAgAMEHQAAFAE5dAAAUAQIOgAAKAIEHQAAFAGCDgAAigBBB2knuW0FAGsGBB2kG/N3Q7RqFjUPynEFbAXFDkXdYTkE1ggIOkg1tm0Fo/5i7BSwvXkDpQbACwQdpIuYthWb1Q4tSn5qVS2XuE+YVVmc3/SbJc6lBhfwowDZB4IO0sH0thW0KLldtVziPpHfO+ttOXG96fYp9amAHwXIPhB0sGoWa1sxXUv4UYBMA4MLsFJWYFsRoyX8KEA2QYQOVsoMthW0KHm9sk0j+vi2FfFawo8CZBMIOlg1iWwrnvsNavl2RtPiYbYV+d0t0n36YL+MMriAHwXINBB0kA5i2VY4HhS5q1rRtXwLs60ofdmrP5Ttp1xCWsKPAmQflM8FaQS2FQAkAIIO0ghsKwBIAAQdAAAUATl0AABQBAg6AAAowv8Dgi+VlaUD69UAAAAASUVORK5CYII="},3658:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/pict40039.es-3a66c2e2a65d0b29132283de8863ce89.png"},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var s=t(296540);const l={},A=s.createContext(l);function d(e){const n=s.useContext(A);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(A.Provider,{value:n},e.children)}}}]);