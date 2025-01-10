"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43486"],{751486:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/object-set-coordinates","title":"OBJECT SET COORDINATES","description":"OBJECT SET COORDINATES ( { ;} object ; esquerda ; superior {; direita ; bottom*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-coordinates.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-coordinates","permalink":"/docs/pt/commands/object-set-coordinates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-coordinates.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-coordinates","title":"OBJECT SET COORDINATES","slug":"/commands/object-set-coordinates","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET CONTEXT MENU","permalink":"/docs/pt/commands/object-set-context-menu"},"next":{"title":"OBJECT SET CORNER RADIUS","permalink":"/docs/pt/commands/object-set-corner-radius"}}'),d=t("785893"),o=t("250065");let i={id:"object-set-coordinates",title:"OBJECT SET COORDINATES",slug:"/commands/object-set-coordinates",displayed_sidebar:"docs"},r=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"OBJECT SET COORDINATES"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"object"})," ; ",(0,d.jsx)(n.em,{children:"esquerda"})," ; ",(0,d.jsx)(n.em,{children:"superior"})," {; ",(0,d.jsx)(n.em,{children:"direita"})," ; ",(0,d.jsx)(n.em,{children:"bottom"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Se especificar, objeto \xe9 um nome de objeto (cadeia) Se omite, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"object"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsxs)(n.td,{children:["Nome de objeto (se * for especificado) ou",(0,d.jsx)(n.br,{}),"Campo ou vari\xe1vel (se * for omitido)"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"esquerda"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Coordenada esquerda do objeto em pixels"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"superior"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Coordenada superior do objeto em pixels"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"direita"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Coordenada direita do objeto em pixels"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"bottom"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Coordenada inferior do objeto em pixels"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"OBJECT SET COORDINATES"})," command modifies the location and, optionally, the size of the object(s) designated by the ",(0,d.jsx)(n.em,{children:"object"})," and ",(0,d.jsx)(n.em,{children:"*"})," parameters for the current process."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," This command is the equivalent of using the ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/object-move",children:"OBJECT MOVE"})," command and passing its 2nd ",(0,d.jsx)(n.em,{children:"*"})," parameter."]}),"\n",(0,d.jsxs)(n.p,{children:["Passing the optional ",(0,d.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,d.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,d.jsx)(n.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only)."]}),"\n",(0,d.jsxs)(n.p,{children:["In the ",(0,d.jsx)(n.em,{children:"left"})," and ",(0,d.jsx)(n.em,{children:"top"})," parameters, pass the new absolute coordinates of the object in the form. These coordinates must be expressed in pixels with respect to the top left corner of the form."]}),"\n",(0,d.jsxs)(n.p,{children:["You can also pass absolute coordinate values in the ",(0,d.jsx)(n.em,{children:"right"})," and ",(0,d.jsx)(n.em,{children:"bottom"})," parameters, indicating the bottom right corner of the object. If this corner does not correspond to the corner of the object after application of the ",(0,d.jsx)(n.em,{children:"left"})," and ",(0,d.jsx)(n.em,{children:"top"})," parameters, the object is resized accordingly."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," If you want to move an object relative to its initial position, we recommend using the existing ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/object-move",children:"OBJECT MOVE"})," command."]}),"\n",(0,d.jsx)(n.p,{children:"This command only functions in the following contexts:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Input forms in entry mode,"}),"\n",(0,d.jsxs)(n.li,{children:["Forms displayed using the ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/dialog",children:"DIALOG"})," command,"]}),"\n",(0,d.jsxs)(n.li,{children:["Headers and footers of output forms displayed by the ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/modify-selection",children:"MODIFY SELECTION"})," or ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/display-selection",children:"DISPLAY SELECTION"})," command,"]}),"\n",(0,d.jsx)(n.li,{children:"Forms being printed."}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:'A seguinte declara\xe7\xe3o localiza oi objeto "button_1" nas coordenadas (10,20) (30,40):'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET COORDINATES(*;"button_1";10;20;30;40)\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(991432).Z+"",width:"219",height:"186"})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/commands/convert-coordinates",children:"CONVERT COORDINATES"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/object-get-coordinates",children:"OBJECT GET COORDINATES"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/object-move",children:"OBJECT MOVE"})]}),"\n",(0,d.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1248"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},991432:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAAC6CAIAAACoSa/oAAAP0klEQVR42u2df1AU1x3Ad4/faADlBH9QjSkRx5oRQzA6Nk3ApkmEODEttk7K+Icx4aZjTNNJTFIsmdE01aka22mgxUnTJNNanY4pkBiTICmJlRqiIPgDRQwICqcEPPl9P7bfu8VzObjl9nbv3tvH9zM35+6+veXt+tnv2/d231teEASOCW7evOmezszMJJ0dxE9CSWdAY8DFmJiY119/fcGCBTCblJREOkeIMniBoRgJOj711FM5OTllNddJZwfxE6ZiJERH0PHDmk6e40nnBfETdmJkeno6FNbf2KaTzgiiCqZiJFw7Ntd1kc4FogqmjDQajTzfTToXiCoMpDOAICNgKkZGRkYaeKzT6BumjARQSL3DnpF4HaJvWDNSptS2Dg0mxw7s/LzX3N1X+upDdsAhDFltkOQQHENDdqvd3j9kP33ZEhoaRno/Ji6sGSlD780b4bEhs6eGTw4T4uMmCQ7HdcvArIRYSGq9dnNqbGh0RIjNaq8+23pHXDzpzE5cWDOS9x4jhwb6BqxRv1mb3ttvhVD65TlzRX3H8hSnfFveO7H76fT75hktlv7+vp6YKUbS+zFxYc1Ig0GmaiNAYuXZzocXJVafNx881nyjd/CDLy9CQmQo33TVsiTF6HA4OMEhuxEksLBmpEyMNBgMoQYebPtl8f+6ewbTk6eau3o3PDofksr+23itu8dms4KRsBqPNXZysGakwXtdGzwbtDmefCApnLMlxEUlT5989Ez7g9+bBkkJIV2tbY11dZzAhwz19wl2hyEkBL0kAmtGymjkfiAo+/7ZnMNhtdkzFxpr6+phSWvDV3V1p+9NSRro77/nzqk2vsdijQyPiCK9NxMR5ow0jJMkCILVaoPS2Wq1Njdfrq6uhoUff/zJ1q1b+/r7Pysvh8QXnn+uvrGt0x4SGhZOeocmHKwZKVtqGwQXDhddXV11dXUVFRWQtHTZstTU1IZz51IXL/7r3z/YuXP3r19+qez4xfCpM0nv0IQD73AgdMFajJS7jnQliWGyt7f34sWLX3/9dWS4s1yeNWPG0S++SJgxY/Z3ZsfGJ5w+d6GmtjZhcmwfVm6CDmtGyjQlijcYobweHBxsbW09e/ZsQ0PDj1evhoX/Lil59pln+np6wsLCIiKjrA7hm+bme5f+4JteNDLYaGYkRKDAdZDwfeMy97WdrjqrNdb29vaTJ09WVlYuX7r09JkzkAR1mhCe7+rstMEqDucd7/CwsMbLHeHxcwO0R4g3WIuRvGxlOyzEwTmGLN9eq6utAcdXP/FEU1MTpCxJvw8sjIuPv3ixsa+3JzzUED81vjtkcgQ+SRR0mDNS5gYgz5Wc6LzCtzc1WjodcRHGqN8X77va3g4pFnPLprz1RytOlB09tyjRsHptztWbNmPiNB5vJwYd5oz0XmqHGELKT1/9rMUw2NNlG5hmsw7YujusZqeRyVP46OjohXPDIvjBpGlxg2FxU+YsDAll7eDoAtYOukzlODI6euX8CHPbCWGSYIgxCA7h5uTB7ogISJqZMOPdfx6MjJ40OWbKHTO+O+eue8LCsW2cDKqMpKQ24/Erb0nGxJnGxFUByi2iFaqMBGPG9EYTU/3bOPb80jtqS20Pb9yt0JpkbrSU47qOD+zoHQ2uI0VvuAAX4j5uH43UO5o5FDgd3ZKNGx1hhU9OXRuddP8crKboBgUxctwSWUZKeavkU90xWD5j3nhkUQJ8d3fj6Cv6QME9CfEZBfkV5H/rbQX5VB837i31cK0ZddQReJcMoQs0EqELNBKhCzQSoQs0EqGLoBpZVVVlMpl4F/v27bNYLO4kmN67d6+YBBPSJGRCETwjy8rK3njjjXXr1jU0NJSWlq5du3b//v1iEvi3efPm5ubmGy5gAmZRyolJUO/ZgGQxMTHiNATLoqIi8SdHjhxZsWJFR0dHQoKzNdtsNicmJpaXl7tf3eXj/UO8Z8MAQS213Tp6UFFRkZeXJ+oIwATMij2pkYkGmZrN+fPnIUBC2S3Obtu2zWgcMUAezMJC0gcHIQABI6HsfvHFFyEKZmdnk959hDqCbaRYiZk5c+b27dtJ7ztCI0E1UtQRJkBH6TVlfn7+qVOnpGvCLCwkfXAQAgTPSG86AhkZGSUlJVDFFmdhAmazsrJIHxyEAEFq/RF1hNpMTU1NVNTtcRnnzZsnTphMJs4lK3yL4hYWFvq4cek62Pqjd4LUO7ayshJ0hInU1FTpcrdn4OL+/ftjY51vTiguLl6zZg3pI4OQQQe9GnzcOMZINsAnLRC6QCMRukAjEbpgbdwfNbz03tHGbseQzaHJ1sJDDclxhh25y0nvls6gt2bjMVTGuMNmSPvIHq41S5PEmk1cXBznpZssJP1sx8Ep8caXVqXOmjpJk/y3fdu7o6Smq/N60TMZGh4W5qE3Rnoo6JZSvpvsp6Pq2u61ZfrIQtKqNyu3r1+cEBPdPajNeTU9btLLTyzO/eMRcodQl9BrpIgoovQ7QH/IIQjT46K7NNIRuGF1btARyGFnmERPNZtxB7dAGIDqGDk6KI4fKUcb63uQEiBSaroDGB+VQ2+M9GZeQIdfQ4gzhpHnz5/3KByJdBQMvnmC62pSww+eOn7gaaTZbE5JSZEuwY6CSDDxvI4sKCjwWFJdXV1UVNTR0SE+1Lhx48bExMScnBx3R0GqUHMZidDAiBgJJTJ8uztkidDQUVBJAciP+vj8VzjOLmj5wZPBD24bWVVVtWHDhtHdX7CjIBJMhkvtlpaWZcuWNTQ0eOtSrRvUFdt2DGukcRoJ1RS4OoTC2t3HQL94CImC6Q6nkZWVlSUupAk8z0PIBEd13VFQ0R0eQesWcmz+8QPndWR2drYgQazZwIQYMid6R8FPTcmxoe7PmrcabyUcyo994J0mcbrxnYdDkzcdgg/p7Oqe8e/ZZGZmQuW6oKDA4gImYHbp0qWkcz42/te0xwR0/El9/klb4w3xc27lwfkSKYf5z6b5H60+17jnMfiQPgC6x6e7iFABT0tLi3UBE1QPR6FCyVGtP41v7yj+6YEvcue6lyTnFu0SXtlZcatxB0r5prceWM+V/sOUjK0/mjDGkxZiIS5dAhXwp12Qzi3CPvQ+aUGepo8OHd/ww4dHLrxr5WNL6i813Zo9bPrRwZxP3sTCWjOofhrND9RcOA45uLY+yQb6+aH7FkT28W0j1jLccBxrPsO3TTf0csd++8qx7PftoX1c21gbTIjiEKWwFyM1rdtUn2kdY+myOXOHJ37x/u5LP//+vy6R3mmGYM1Innd+/KzZCCOfRrvzsQfTir8sH/mM2aWyz6sXzroTpp1tl8LcjXveW/in5XlVYz6NhlUb5bBmpIhGETL5yec3fJhrOn57yaHdy1/gXvvVEulamYV/e63+1VV/gIK7TelfQEaB15G3cbb+eNy0eeitw++aHpl1+yitfNe6K2N4NWfrj0OwO7jp6yu3Xghbt8q58O0Pnpsl2SCiFNaMVN0mPoqMwsOXC8dKeHTT5UfdM0t+Zz1MetfZgDkjA+AkEkxYM1JlqW3TtDKCpbYfMGckdujWOawZqQpBsOPjaKRhzUiMkHqHzfZIRL+wFiPVBMkx2iPVgWW2H7BmJJbaeoc5I1FJncOakWqiJNSMNS61sdhWDmtGYojUO8wZqbJmg/dsSMOakX5jMPDm7t60aVFfdQxpssH0xHDYIGyW9J7pDNaM9PsuYlK0Y8+Htc9np2YkadMX4bqlHzYImyV9SHQGvW8P8S8Dxxs9X8jQ3Wf18b2Iz/6l4mpfiFZj2Rt4fka0/c/46hCFKIiR3l4kI13BW6o7dKlcQT4Vvo83do25gvgyG877O0RgBZnXiyBBQ8FdRHEMFvkV5H+rfgX5P+0aN5/z+Ih038LbFgKno/tkQHxBm/va7hBFenc4NX0RA6QOhl5FaGCk9G1c4uj5pHfKT1AdGlBb1/a4dhSnCdZydHs6IMOoMpLCV86gkHpHlZEUdpHHGKl3mGshxyipc5gzEoXUOZr1aqCwBEf0CGv9bLy1kBMEW8gVwVypTToDiErYi5Ge+P5bDGY0gDEy4OCtIEWwZqQaJVEdGmDNSBqqMogaWLuORPQOczGSxitJRAHsGXnrH2yw1yesGXk7RGKs1CesGYke6h3WajZq3mcTILDhXRGsGSlqKL2z/ciiBNJZQhTAmpE879nv63Ct2cffYjCjAdauI51QUFJLwVtBimDNSDU2ojo0wFqpjegd5mIkZUU2ohSMkQhdoJEIXaCRCF2wZ6T7Rs1wiyS2kOsL1ox0D/o37vB/QQMb3hXBWl3baievIKIG1ozs7rNKZ5XeRQxEIzk2vCuCNSN7+m203UVEFEF4OHuqID64P8KhkQhtsFbXRvQOGonQBRqJ0AUtRloslqqqKpPJNObYUZC6d+9ecWQpmIBZ0vlFAgUtRm7evLm+vv7uu+8enQT+QWpzc/MNFzABs75LSfxtJsQzoDMEmigtLR2dpfLycljY0dEhzsIEzMJCme1wI18i5l9mtDo4tB1kyqElRspQUVGRl5eXkDD8wARMwCwslD/N3INHCsqbt8Tf+vFDRD06MHLbtm1Go1G6BGZhofyvxBNOUYnpfpee+Fut8o9mK0IHRqrBDylRILKwc19bxjw/IqUUdDSY6MDI/Pz8U6dOSZfALCz0WG1Mb/yIeRgmyaKDUjsjI6OkpMRsHn6oDCZgNisrS/5XftdOBJ2/AVfv0BUPysrKHn/88dFZMplM8L19+3bO1XIJ34WFhXJ7pUWcw2BJBB3ESM7lYlpaWqwLmBDV9IZWJimtFSGawH4YwFCnL/QRI3UNBlpFoJEIXbBvJBbZ+oJ9I30nQMUrnhKKwKt+hC4wRiJ0gUYidIFGInSBRiJ0gUYidMG+kXjLRF+wbyRx8JRQBPtGYoOrvsAWcoQuaImRtbW1W7ZsER/e3rVrV0tLizQVx7SYONBiZH9/f25uruAaIODChQvFxcXuJJVjWiA6g/QQBmPgMbKFH2NaIPqFlhgppb29XdrV0I8xLeis3tKZK+ogfUqMAOKfGCChaHYv5FwdZKWrib7Kb4q2XaMtP9RCUX9tsSMiTEAIHBgYUH+m0dPDhp6c0A9FpXZ2djb8t0HdJSsrKyUlBQRVuUGBjp7XqKMiKIqRIjExMaAmhEl3x20fx7TQapSVQIAjt/gORTFSinQwNB/HtBh9RcLd+o8ne2E0ZvZIH2B6oaVAaWlpiYyMFCvUR44cWbFiBVRxIFiKqUrHtOBoKivFnNCTH8qhJUZeuXKloKBAvOw7cODAsWPH3DpyCse04GjSkZPEaeIXD7qAov85zXaJJh11lDdKwAOE0AUtpTaCiKCRCF2gkQhdoJEIXbBvJLa56Av2jSTemICnhCKw9QehC/ZjJKIv0EiELtBIhC7+DxvE/0pVo2MWAAAAAElFTkSuQmCC"},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let d={},o=s.createContext(d);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);