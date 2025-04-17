"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57957"],{336054:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>s});var o=JSON.parse('{"id":"commands-legacy/svg-export-to-picture","title":"SVG EXPORT TO PICTURE","description":"SVG EXPORT TO PICTURE ( refElemento ; varImagem {; tipoExport} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/svg-export-to-picture.md","sourceDirName":"commands-legacy","slug":"/commands/svg-export-to-picture","permalink":"/docs/pt/20-R8/commands/svg-export-to-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsvg-export-to-picture.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"svg-export-to-picture","title":"SVG EXPORT TO PICTURE","slug":"/commands/svg-export-to-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SVG","permalink":"/docs/pt/20-R8/commands/theme/SVG"},"next":{"title":"SVG Find element ID by coordinates","permalink":"/docs/pt/20-R8/commands/svg-find-element-id-by-coordinates"}}'),t=r("785893"),d=r("250065");let a={id:"svg-export-to-picture",title:"SVG EXPORT TO PICTURE",slug:"/commands/svg-export-to-picture",displayed_sidebar:"docs"},s=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SVG EXPORT TO PICTURE"})," ( ",(0,t.jsx)(n.em,{children:"refElemento"})," ; ",(0,t.jsx)(n.em,{children:"varImagem"})," {; ",(0,t.jsx)(n.em,{children:"tipoExport"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"refElemento"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Refer\xeancia do elemento Root XMLK"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"varPicture"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Vari\xe1vel de imagem que recebe a \xe1rvore XML (Imagem SVG)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tipoExport"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"0= N\xe3o armazenar fonte de dados, 1 = Copiar fonte de dados (padr\xe3o), 2 = Fonte de dados pr\xf3pria"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando SVG EXPORT TO PICTURE permite guardar na vari\xe1vel ou campo imagem indicado pelo par\xe2metro ",(0,t.jsx)(n.em,{children:"varImag"})," uma imagem em formato SVG contida em uma \xe1rvore XML."]}),"\n",(0,t.jsxs)(n.p,{children:["Passe em ",(0,t.jsx)(n.em,{children:"refElemento"})," a refer\xeancia do elemento XML raiz que contenha a imagem SVG."]}),"\n",(0,t.jsxs)(n.p,{children:["Passe em ",(0,t.jsx)(n.em,{children:"varImagem"})," o nome da vari\xe1vel imagem ou do campo imagem 4D que conter\xe1 a imagem SVG. A imagem \xe9 exportada em seu formato nativo (descri\xe7\xe3o XML) e \xe9 redesenhada atrav\xe9s do motor de renderiza\xe7\xe3o SVG no momento da visualiza\xe7\xe3o."]}),"\n",(0,t.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"tipoExport"})," permite definir a maneira como a fonte de dados XML deve ser manejada pelo comando. Pode passar uma das seguintes constantes, que s\xe3o encontradas no tema \u201C",(0,t.jsx)(n.em,{children:"XML"}),"\u201D, neste par\xe2metro:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Copy XML data source"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsxs)(n.td,{children:["4D mant\xe9m uma c\xf3pia da \xe1rvore DOM com a imagem, o que significa que a imagem pode ser salva em um campo imagem do banco de dados e ent\xe3o reexibida ou exportada a qualquer momento. Este \xe9 o modo padr\xe3o de exporta\xe7\xe3o quando o par\xe2metro ",(0,t.jsx)(n.em,{children:"exportTipo"})," for omitido"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Get XML data source"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"4D s\xf3 l\xea a fonte de dados XML; n\xe3o se conserva com a imagem. Isto acelera notavelmente a execu\xe7\xe3o de comando; entretanto, como a \xe1rvore DOM n\xe3o se conserva, n\xe3o \xe9 poss\xedvel salvar ou exportar a imagem."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Own XML data source"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsxs)(n.td,{children:["4D exporta a \xe1rvore DOM com a imagem. A imagem pode ser armazenada ou exportada e a execu\xe7\xe3o do comando \xe9 r\xe1pida. Entretanto, a refer\xeancia XML ",(0,t.jsx)(n.em,{children:"elementRef"})," n\xe3o pode mais ser usada por outros comandos 4D."]})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"."}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"O exemplo abaixo pode ser utilizado para mostrar \u201CHello World\u201D em uma imagem 4D:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var vpict : Picture\n\xa0$svg:=DOM Create XML Ref("svg";"http://www.w3.org/2000/svg")\n\xa0$ref:=DOM Create XML element($svg;"text";"font-size";26;"fill";"red")\n\xa0DOM SET XML ATTRIBUTE($ref;"y";"1em")\n\xa0DOM SET XML ELEMENT VALUE($ref;"Hello World")\n\xa0SVG EXPORT TO PICTURE($svg;vpict;Copy XML data source)\n\xa0DOM CLOSE XML($svg)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(254394).Z+"",width:"227",height:"118"})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/dom-export-to-file",children:"DOM EXPORT TO FILE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/dom-export-to-var",children:"DOM EXPORT TO VAR"})]}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"1017"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},254394:function(e,n,r){r.d(n,{Z:function(){return o}});let o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAAB2CAIAAAC1R7PrAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGGA4TLc2mXXoAABGuSURBVHic7V0LjFXFGT67e9k3wWjVNsaopRqNWjWEilqtkQhGDDHVPiKtiVgicSV2paEWsWqlak0oNQRTYouJRdOHrcZQIqUYa2uB0k0x1ZRoVzHGVB4akH2wu3d3+5/97/33v3Nm5sw9j3vuYf8vGzj33jlz5sx88z/m8U/Dof17PYGg7tGYdQEEAicU8L91m9/PthwCgQnLbjjDI6bSZ4GgrkAyVLS/IB8QpgryAWGqIB8QpgryAWGqIB8QpgryAWGqIB8QpgryAWGqIB8QpgryAWGqIB8QpgryAWGqIB8QpgryAWGqIB8QpgryAWGqIB8QpgryAWGqIB8QpgrygXwztfDGW6Fpmnr3NfQP1KAwAoJLu1SbSY6Z2tm9asa8m+yV0vL8Sydcfl3rL35Vs1IJXNolQiYFS+p6xoyFiwq7euxp4G1bnnu+NuURIFzaJVomKlNBUTb9973QvIoXnc8/+hq2r99+y3hnx+jMM8OLGYbG/QenL/lundM0tEKoAkNTauvNcpfSNDWDY7vYAe/V2X2fNhOVqaAo2x9Za89u9PNnHN6xlX9jyp2jeOmsIy8961BaG0AddC69p+ndkIgvifTsOAitkCN/+j1SKjSltt5MdwWbpjZwbJc4mahMLc6+ZGBld2HPm81btgVTQ0UMXzd3/IQZyvdDN14/PPeq5u2vaasP6hp+HZ/eGan8k2je+kr7gz+xV4elU9YSUCFjJ52orUOsjdEvnOWYUltvcNfozLMKO3fz2sDWSegNqoBLu4QCPIq2NestmahMHbn8S/Dn6bQnVETfz3+qVS7HFi+CfwfvviMozBIRpaWy7vwnFsPyPo37DzQcPAQPzZasUCHw1/bEBkVBQeGV2sCU2to++tTPxk492ZS/VymELK2TNlzaJRRNb+21Z2L0/fvWrobb+DeDy7tCKwIql9+F1V1Fea0Y/N5doNqO/PkFpWAc0M0+fXETsGH4+muTem5kQNdVimqSeQP33q2kHD/5MyaaEqA5Rs89p3Q9Z3ZWFqpLu4Ri6Ftft2diG6WCl6druH/kystCnxes3NDqdsd4Rzv+C60YWobixRck9dw4UKg5cu3V2mRQZuJc6ca5V7nkT685eNd3opQvCTi2ix3oNVoysTF19MzT+UdHzvEnxSm6BS6tOHL1l9N4dLVQqDne0WFKObwguhIAOZLIuEpMOPauaJnkeOQ/Fxg79RT+semdXlNKUFmRtacij49L2JgaTSyBT0rXiXSyXANEHedf44f/M6VUVFbTvg/cn1Inpk6qcJWp7npcsRkEvOrs/OOisak3fP6FMqwTUydViPZPHVzJ2PkXQTRChiCzxz57SnjSnEOYmjq4kmk4eMiSsjj7EseUSrIEB1jqFsLU1OGumhX3q3H/QZe7UhpgqTcIU1MHqGZyqprefd+yHI67X5Cy8aMD9pwhK0g2dtKJSRW1niFMTR2Kai707LEk5gJy2qt/s+eMY15TwfH3hKm1Aedfw9E+x7tCB6pwzItbt8cxhKm1AHf/m7e/ZknJR6BDB6owK8W6PV4hTK0F3N3/sdM+55gSE9TJPGoNIEytBdzd/9GzZ/KPoe7/FHH8vbpiKniy8Oc4NJMS4Om+Q927L9ls3d1/Drv7H83xh1eLUMmQXqmTBFvKsd3rYsdf2xMbWn79B1oRPHruOUefXlfjMkBLtK9e07T3bSxG8dJZg123D8+/JpHM1Tn9d3pNa0mVkQFw/00pq3X8m7e+0rb+l7jAHCt5YNVyF8sB12uD8KY14LjuGzLpX/MwrruPBr7OHzcsDDywwliMyI9JCspydyg3/M1YuCipnQIuCO6vgBadvqtn6Jab+9auTuQRvpou529Zp9L4wYf8o8X9r8rxb3/o8bYnN05mO1HJ0C0Hl3cN3bzQciORqVg2M3yxMtFe8GX7Y09EbiZlQwTkhiUM7n1CZKz96bX9Xs7WHPlEuW1ZbcrgS9MyTUGUwh/9BGVr3ZhMh3F0/6f1vFFZNqP7X9jzpmdd8Erw2TZBAqhheDtuh/gsNJs68O6dXSuU7SKg/SbLsKsnmqXki4YJmkJhBu9cDBIBSwXlxPcKIkumgmmCrw0FPbxjK/zBBf3avGUbvE8NitHZfR80BtTUpy88AxIC/vrWP06/tj71TCIGWfHC8+ja4tQrP1lSNn78ic+8sB0pUHigozfRCXHfDq9neHF4fe2NoOs6fvCw8iVIFoW40/7yur0AWoBo8Mp7v0Djg+KCCySrdvOjly1TO+79Ebw217BwwckKdlXaZQCxgabbwIPfJ5MLFGL/o/fjNeq4+A8qzrrYMaWyntrUTxyXsEDhsR/y/YO8nuH1Qegqd4FC00ZL4AK1VAzniQwC0f3Yklupp8EFfLTclRlTfXdy79u+Vb56Jf8ePlJTRVYu7gCR6eF+5Urn6djiRWQGFHbuji9W/d15Ye4/uvNg0YbO/kO1YEr7Q/2hjJ27vYntXIpXx/cYtj7zG+UuaBpuBSGm/f0fSHr7Q0OBdId8cIctAT5aMs+MqdjXi3Nm434xAnzkOw1bNv02vTKALCl17lu/Efx16Mbr8QLStP786WQfrd2mgl/6e/zDZv8b9x/wHLZUkEA9tvQ25Se+xxAkArCQ/3R00wawEwZWdvNbpm17FegLxgPf98unKlxAdT70za8Gf7XEK8iMqdjXtTsqh7426Y0qHkayaP6jbxKZtt0OL5hHXbz55e3xH8f5p3X/8Utoez5K2nD4SDBlYfe/PAeWYCV7hgWsfI9h61MVQeZw9Gr4hvn8S6gE7NL9j/0Qawb+tQ8dBEF1rmfqjQtMN2bDVFRzpplAsBeJIo7WWDSAjsMLbUPCl8QtKC2XOtEwMusiuta6//jl6Nkz+Siptq+ig6xMaClAZe1V7obnAJJNmhnlquDgqxCxIZCXUDODy7uihWyx1zm3kRS4jqdCQcEQdklpGmXgQI3mMhOIJl0aMReoIS0bO0G9UiwW0H1xRrkBY6efRtfaHojz+PCyDf399pQujj8UGC/4sIMCGuXFrmh5QfR96SNQtlpp6jHVb+o8XuXAM4crU30XOCyymjtQeFjMLF5cyzxNHEw2pHmax5+vL791fDvE3f0PXR7lomqowJbnVtUVuVUWDdNeL+klS+cxzQ9no/2xouPHVIuDyYY0T/NwZRTfDrG7/+T4e4HF/2p05omBiFCNhAW2i16+dMbeFX1rPp5K8ZjdbOk8JsFRxWyq+/CEPZIWjfg4yhgQwIN33+H4aHcQ81ymebwU7BBl9p8c/1KpmFYp9OzhKRs/OgCFGbTaiMj70DLg0hlMae+K8RdtUbu7TFgE4cpU95B9wQB3CrCiHZ+bEhwb0kvaDrHM/pPjjx+5ElQWA6CVz63eIEJ3tpSewtya9FyCUv6978Vp9wxWqFAldi69x5QmbSrTcGZo/+aWXFVxTbQA959yU3QFOf74EZQgzSuqiwEmimHXSFTUUFnIO49lkVd84Mha9NuTKkcEZChZLauZLHCMa2KBRRCS448fLXv/MRqFnVLRihqtWhxBg0LRDIkMmErdPThfpwVfhZQUXIbSENz9jw8uCEO2qZjdfxffzt3/40pDO8uQFBo//iTO7Vkwtdzd+x9emdnxCZFqLSn3v6k8hNnUuw/nPtBu5l0X3X9KSRako+MfDanOCMasvTranTIFgdP3XsDxR3A60l4A9Ef5dNcUwRRlqnv/tszvRUMF/8pOhuL4I7Tuv4vj7z6y4dUqTmD8xWhTlKkZgotDMpe18/ja2X80Jd2nu+oE8Ycms2Qqn92eOuDikMxl7Ty+1v0HykYbOc87smRqzAG2nELr/mutEa37n+risnrGVNf+6IDX8onK7L+/et+wgN80+1+V43/cMDvLkX/3Qc1UEXria6og91+7skyZ/fdw9Z15ydxxjCyZGnMoOL+o4F/ZBNIu4Ffcf2yt9E5SSGOSJSlk6lFlp5gqTokwn7xjuSsOFPffsoBfcf9xrCp0XEkZWXMfIarNaSLR2j1jO9WlEtMOUeE+2Z1U9GfF/bcs4Ffcf3T8qzp/wiW2NSHbFcN2ZMBUkij+joi/7rAnBiqnYSSEbqnTIqnoz9z9L+zqsRxGzN1/qK5o50+4jwamN0zrsoncjgyYygMP0XYFE0KpHA2hW+q0qHbHsPHpgXkvk12hHLzmssc/mKHjaGAtTwuKMJSeAVN5e9N2BROAymkcFOgeUJfbJ/a9oHEQsqWMwdHp4cnsYyzcTK/ZaUERhtIzYCpvbxASwVAzHEDlNIyn4iVfdExJ04DJzgwp/LNIa8U4dnR6+JY6u/lEZnraQYN5/vYQ8lpkwFRF92GoAi1wo3MaxpN9S50WyTakIkQt0loxjh0XlLgvhJ3MOeX1WTz/CO5/Nr5/Rffass0U9KHldy+lN8fteJ4O/ZRsQ3Ihan9HZevseKfT/kR3D4bEm3LAe+IYPf9cuo4Q6SMbpirGljaYnh/nG1R/aiqJwk55VmVEIwPJNqS7ycvd/6rOn+ARN0I3ACaySdoOxeICMVTV7TamclvbXVzzVjcNAI1cUVEphV09nd2rlDQY1jS9c9dHvnIFXVveDkcGEm9ILvPsvZEbKlX125Er59C1rSti7IX0T7ZQxjFMERRN2yptTI2//8s0AMQjIiFannt+xsJF4F2BnoJ/4RpHGZUgXglCMVVNjl0pvoM5IlB8hPZGolFVUw88Ahy8hZYWFPKIa5j0wIP8aCMoUhjNUvGYKshsjirY9r5k7VoxY95N8C/S1A/1neZhSzzcnNaxozhKPCxeUpjkX9gwLRlLVU098LiTflcMBOn1yirYj4W2YJ49t0SmvpV4Qc0vb1cMaAz+TB/5+JqNqTyd++o4/kqW1zu25NuhWZk6OlcQpmNIueliGlAEpk7GndQ5dpMhFKuPFhYKEqWhNiuNTFV78CTvYJpw0v0DKMCA0ImMpIa2C1hQfFejH7t96T1EVrAAoRUqxoVYJHWrnVoZqbB589bQsjZvfYX3CYuLB4XmAWODCMYsJnAFUfj3f7Rp+OyXNuSiNyF1uD5SHLvWjc9iTWkjfcYHilKXwQ0amar24EnoYMQMPwbeQ4/zXztWPVKOYq6XGqRSPIeRb8+tXRTpg2QFY++Ey+bjyUGmSJdGpgLBlY0v7Y+stZcV+mgwMn/H8vtNQyR2sWoqMZlWCKidYP4kLRC+SWQ4AoUHEUfHDu05SE+B1dOIiuVV5f5PRI+KdvDkYNftdN325EYKLQqsxUj+g3cu1jqLUIdKVPW2Nesto10u7eJVhqVH+INou3ooULXplJ+GQ/v3wn/rNr+/7Aa/waCFWl7cAlrbtD8LHgN2vXKymU/r3vdMd0EV+7HrZ54VPNtJOYyK33J4hyrCwfzo7L4v+BTMHzoryuDpty2jA9CUkmvLAK/MDwlB4tK81NFNG9KzlUGQ8BPJEkkZhFLJ/AVN4cZMdag9186xXQigeKffemfwoVgYHtds6JabH527BJmprqRuONpH0Qy1r+0XKGB9Nhw+EnpXg85vBd4AxZXFRHh4nCaTvn7TU/z8y4d4oK7Xp9GVAeoRVBW1JVW3f1TS8q60z891HIaLM4qkVDK9IDCjb+2PtbeY6tDTmVKO7UIYnn8NCHJ+khveqxSmdKjO5vKScyUX0HQRlF2cwyOhG4EmAjeQerkptgp8GRS0QbikUQA1UrzwPFD3/ERMx8Ma4wD457g+C7RBnGXOSiX7xvGc2ZbjC6uqQ8d24Rh4YAVoeTqCFBud13b/o/crkljV/hkCzJrxzo5szwBH0wrswtqsKgLbrnjRBcrpMaaU3oQbGvOJ+IL1swk72OhgHzd+dIC+IWZmf24qoR6qr8ZlcGdeUjNk9VDJHMHyQL/VSqupvotakBcIUwX5gDBVkA8IUwX5gDBVkA8IUwX5gDBVkA8IUwX5gDBVkA8IUwX5gDBVkA8IUwX5gDBVkA8IUwX5gDBVkA8IUwX5gDBVkA8IUwX5gDBVkA8IUwX5gDBVkA8IUwX5wOQu6nWb9eF9BIJ6QCkyhUBQ5xDtL8gH/g9NI8Cj8v4cAQAAAABJRU5ErkJggg=="},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return a}});var o=r(667294);let t={},d=o.createContext(t);function a(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);