"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54162],{463737:(e,n,A)=>{A.r(n),A.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var r=A(474848),o=A(28453);const s={id:"form",title:"Form",slug:"/commands/form",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/form",title:"Form",description:"Form  -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form.md",sourceDirName:"commands-legacy",slug:"/commands/form",permalink:"/docs/es/commands/form",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"form",title:"Form",slug:"/commands/form",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Current form name",permalink:"/docs/es/commands/current-form-name"},next:{title:"FORM Convert to dynamic",permalink:"/docs/es/commands/form-convert-to-dynamic"}},l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Formulario DIALOG",id:"formulario-dialog",level:5},{value:"Subformulario",id:"subformulario",level:5},{value:"Formulario Tabla",id:"formulario-tabla",level:5},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function t(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Form"}),"  -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Datos del formulario asociados al formulario actual"})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"Form"})," devuelve el objeto asociado con el formulario actual, si lo hay. 4D asocia autom\xe1ticamente un objeto al formulario actual en los siguientes casos:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["el formulario actual ha sido mostrado por el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/dialog",children:"DIALOG"}),","]}),"\n",(0,r.jsx)(n.li,{children:"el formulario actual es un subformulario,"}),"\n",(0,r.jsx)(n.li,{children:"actualmente se muestra un formulario tabla en la pantalla."}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"formulario-dialog",children:"Formulario DIALOG"}),"\n",(0,r.jsxs)(n.p,{children:["Si el formulario actual se muestra mediante una llamada al comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/dialog",children:"DIALOG"}),", ",(0,r.jsx)(n.strong,{children:"Form"})," devuelve un objeto vac\xedo, o el objeto ",(0,r.jsx)(n.em,{children:"formData"})," pasado como par\xe1metro a este comando, si existe."]}),"\n",(0,r.jsx)(n.h5,{id:"subformulario",children:"Subformulario"}),"\n",(0,r.jsx)(n.p,{children:"Si el formulario actual es un subformulario, el objeto devuelto depende de la variable del contenedor padre:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si la variable asociada al contenedor principal se ha escrito como un objeto (",(0,r.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"}),"), ",(0,r.jsx)(n.strong,{children:"Form"})," devuelve el valor de esta variable.",(0,r.jsx)(n.br,{}),"\nEn este caso, el objeto devuelto por ",(0,r.jsx)(n.strong,{children:"Form"})," es el mismo que el devuelto por la siguiente expresi\xf3n:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0(OBJECT Get pointer(Object subform container))->  \n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si la variable asociada al contenedor padre no se ha escrito como un objeto, ",(0,r.jsx)(n.strong,{children:"Form"})," devuelve un objeto vac\xedo, mantenido por 4D en el contexto del subformulario."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,r.jsx)(n.em,{children:"Subformularios en p\xe1gina"}),"."]}),"\n",(0,r.jsx)(n.h5,{id:"formulario-tabla",children:"Formulario Tabla"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Form"})," devuelve el objeto asociado al formulario tabla que se muestra en la pantalla. En el contexto de un formulario de entrada que se muestra desde un formulario de salida (es decir, despu\xe9s de hacer doble clic en un registro), el objeto devuelto contiene la siguiente propiedad:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Propiedad"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Tipo"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"parentForm"}),(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"Form"})," objeto del formulario de salida padre"]})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["En un formulario, usted asign\xf3 algunas propiedades de objeto ",(0,r.jsx)(n.a,{href:"/docs/es/commands/form",children:"Form"})," a variables:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:A(592071).A+"",width:"548",height:"305"})}),"\n",(0,r.jsx)(n.p,{children:"Luego, puede ejecutarlas desde cualquier lugar de la aplicaci\xf3n:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $win : Integer\n\xa0$win:=Open form window("Edit_Address";Movable form dialog box;Horizontally centered;Vertically centered)\n\xa0DIALOG("Edit_Address";New object("firstName";"Mike";"age";12))\n\xa0CLOSE WINDOW($win)\n'})}),"\n",(0,r.jsx)(n.p,{children:"El formulario muestra los valores que ha pasado:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:A(489801).A+"",width:"522",height:"268"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," este ejemplo requiere que la notaci\xf3n de objeto est\xe9 habilitada en la base de datos (ver ",(0,r.jsx)(n.em,{children:"P\xe1gina Compatibilidad"}),")."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/dialog",children:"DIALOG"})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},592071:(e,n,A)=>{A.d(n,{A:()=>r});const r=A.p+"assets/images/pict3515147.en-1e0dfbc15dfdee720269412e59c7ddb6.png"},489801:(e,n,A)=>{A.d(n,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgoAAAEMCAIAAAAqEgmCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAABNQSURBVHhe7d1d7CVnXQfw/4VGYtQbvFBv0HihF40h2bgXG26MFwRCMBpMtRqzmLhGo4REGlmDFkUsUjR/Q6K7QU0RoqsL8cLy3/BiaKlUxW2blKWlXd5KsgWs1aWv0ELXZ2aemXlmzu+8/ff83875fPKg8/LMc2ae7Py+Z+Ys7NYPvO0hTdM0TRu1Kh6uAUBBPAAQEA8ABMQDAAHxAEBAPAAQWCIenv38tSvvufbIm649+KtVu3zztSt/c+3ZL+S9AKyTheLh289f+/LZb91/0/P3/+JEu+n5L7/nWy8+n3sCsB7mx0PKhgff8tynXvf0jPbZtz734gu5PwBrYH48PPLup+/+mSfK9m8/O1ht2uW/ejofALAZtmbKnfZF+riLFy/mlULauOszmRMPX3/k+Y+++spHX9W3B9999Yn7vvGlDz712EefufrQN790/qk7f/4rafvHXn3lqS9Ne4K4vH2inq3kxPblasvOqXZpSUsdGHWuzqXZGA616xMbSsP0F7uQdMSpnbw8Po3hPuCQSHd5XpowY9deSDHwnd/1klFChBsXNycePv3ux//lpz/XtX9/05VvfePFB7b/u1n98M998YkHnvv6577xoVd+Pq1e+svH82GlqhwXxe3y9na1vOsqvNSBszuHe3d9YqU0yPL1PB3UHVNPWnceae36zwlYucMTD8koDEaruzAnHi780sP/9IoHmrbzC5998O++dvXzz937rivdxjte99CL337x3j+rtnz4Vx7Jh/VSZQsL5a6r8FIHzu4c7t31iZV2NUiaqvagtHhqO/2nmbhiB3CYHKp4SFIYNJHQLeQduzInHt7/iv9670/+Z2r/8FMXH/7g19534lP/e/mZ/3jHF5uNTXvi4Wc+d8fjTZ98WOfylHRoCuhO9R056Ytf1b8x/CLdb+oqb1qY/IoedR5/SjlCu6097sT2drn31Km0uR5pfGL1salvrR2lkXZleXt/bHe+w8Gz1K85ollIfbrParuNT2O0Pt5dbOiGmHHmwHLSTZSXJszYtacu1sFw/dmQzImHvz7+iTM/8fGzL7/zM/945W9P3J2Wn3jk6U/88cNpoWuPXfy/Bz/wWLOcD+uk8hRXoLqGNruqxaZ21ZWr6b1zql6qyttwgKZPtb2td52w84xPKRfyvmqIYmM7WtezWqyXqr39eONzKfqXu/sTrDZ2PTppa92z+4z2o/LxxbDNvn5XbbRarccfnbcW++FouThT7rT3ZmTAjF17Kl3+PsXD7a+6889/7I6P3fLp/7n85FcvXf3sh648/vCTT33lubve8WDaXrUfv+Oprz53xxvvbVbzYZ3LURmvpMrUVrpuuepcSMcFh1edT4xjoDal8/hTJhfSgf1wk92iEyv3DpYbo2P7s0o76pXJQ2rN7rZTc1792U2eRr2lHyhYnf3RU04DWEy6EfPShBm79s7F/Xy59JG33v/2Hz5ftie+8OSd77rUrd7xuxe/+Mmv/cmPfqBZzYf1Lg9KVC8qUpN9g6NT5zofJgeNO0+WwomFdGDXK+i2+MidqcemHfXK5CG1+kx2yh8dqp8gZpxGpdpcPAX0q8P+0UdPOQ1gMYcqHi4OI2G0ugtz4uGxB574gx967+//YG7v++WPPfnVZ77+lWfu+osHPvL2ez959jP/etv9f/Qj7+865MNKqQQVxSvVrIm/udQtV12H5aqqcMMtuXN5fGtq5+FyuJDPsBpivLdZ7ldqo73DnRPH5suvRm8WJw9p1J8/PLaYvGp12mHl9nZ17kdPOw1gITMyYMauvXAxCoNw4+LmxENy/o13vemlZ0bt5u+v2mhjavmYkao2tXI5mlKkyp65sFU1rlFv6DrXXcfFbVrncnlyoT9u9NN0e+zkiZV7hz0r046dcUhW9S32pH7tPNRGp1HtbrSXm7XHzPnoqacBLCLfXlPkTvsifdzFKAbSxl2fyfx4+OazL2y/8vxvf+/2Ii0fA8ARNz8ekueffeH9v/XhX//ud556yZ/OaL/5fe/KBwBwxC0UD40rDz7+97/zkbe8/OxvvPSdJ7/jbaP2a99z6z//4V25KwBH3BLxAMDmEA8ABMQDAAHxAEBAPAAQEA8ABMQDAAHxAEAgx8NVACiIBwAC4gGAgHgAICAeAAiIBwAC4gGAgHgAICAeAAiIBwAC4gGAgHgAICAeAAiIBwAC4gGAgHgAICAeAAiIBwAC4gGAgHgAICAeAAiIBwAC4gGAgHgAICAeAAjseTycP3126/SlvHJ0VKd94z335bWrVy/dc/zY2a1jZ0/u5A1LSaMdP/NoXlmZR2+9cS+GnWU8LTNc34yt0BLnDBRWEw/3nTmXCkHfirtxLeLh0snrK3ObFw/XO2MrJB5gd1YXD/0dWJWtrWMXztcrRzQeBqovwuduXeYihhOyPvGwqOVnbIVGkw/szl7EQ36x0Hx5FA+JeNhP4gFWYm/ioXi3MIqHqmd+B1WUjzpO2u35saNSbi/GjwdpTQZStaU9PDw2n//OhXp7dQLdIEX/atfJicHzsXktaR6e2lbvauKhGKq4xnmXU4nnJ8fDAsP257yLySmVh48vKhgktXxK4ckk1fZo5vv+defi8OIag2mJJ3/8iV2HYvu0y2k+5ZC8KIP9tHdPD7m+jApK362qCF3tuNAVo6L/4P31+TP5wGmD9MYbh1kVn0BdFIbFol8tLmfG4KXRhFSjHeu+6VeHzJ2T0pT5yaWwHXYwVP2J3VB1z+ao5SenVHx68xHxRQ1mbMbJTJv50bD96ujYcFqiyW93zTiT4HObXeKBTbUX8TBR/vrbrPxOWt2cwV3XFaZx/9pCg1Qbu6JZDdic2/Rj6yI1qIZlTRkeOGXwoRkVKun3Ljgnpb5wV53LYfvRqoXhOP0HLT05pfJCpl5UUo4262SmzPxo6ooOo4nt9dMyffJnnsmsy4GNtLp4qL/lNa2vPuVdV93AfZ+mdT2HI+T7vC4Ng2Ixe5BOeW+nQXKH6cdO1oJBsSiL3bTBh0YDjrt1tWyxy0mi+RkW+kr7KNCN32t3LT85pXJapl5UUs7YwifTKD8iGXdIoxWr0bSMD+kHnHkmsy4HNtJePD0MzLw5G/XTRnf4RLdqhNRhziBDXXmqFtr+04+dU6SG8VCfcLPaLYxNVqi49Cx0OdPmZ5fxsOzklMppmXpRSTljM09mzsxPdkij5dVp0xJM/vQ/PP2ZzLoc2Ej7GA9VyWgrVGl4H1ZDTd6Wg4oWDTKhudur0QZVPj528vwHRaosdrVcStKZF4WsNFmh4tKzyOVMnZ/dvVyqLDU5pXJapl5UUn7czJOZM/OTHdKnNKtTpyWY/DzgzDOZdTmwkfYxHprl/pZ79NbT9SHlTVsv5z6X7jnZ3a7VvdrfxsEgk6o6cuHkjX1NTKYdO6dIFUUky4NPr6fD4pJGm1Z65l/OtPlp4qGvd4O0GA87CpJlJqdUTsuMixrN2IyTmTPzkx2qM69Xp05LMPmLTMvUyyk/CDbJvsZDUt+fuXV3Y3V4szENMrwt286ThSy3wS09UN/8E2c19QSGPQenPSx2tXjwQt0hfUrdJ402tZIucDnx/NQfcfzMpfxBqRXznPRHBcMuMTmlclpmXdTEjE07mTkzP9khfUq7OmVakvHkjweMzmTq5YgHNtVq4mHzNKU5KKAA60E87Er1jbL/+g+wfsTDLnh0ANafeFhOfnM9fMsPsH7EAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPHD1bb35I0zaq5T/6+0s8cPSku+Udd1/bowaHjXiARYkHNop4gEWJBzaKeODAnD99tvoHtI+dPX7m0byplrffeM99ecNh0cbDzvGtE685Nyju19/gsBEPHJguHraOnbv1Ut6YiAc4DMQDB6aIh0EYiAc4DMQDB6aNgXPH64ToXjGN4mGQIsX2q1cfvfXGesvpS1d3LpR77ztzbqJzres22HXpZLVl8AQTCuLh3PbLthqnXt/tesOpZtPL3nC57z/YePk1N2wdv60eIbXbTm3dsJ3vSDg0xAMHpo+BXLVzgZ4TD6mlPKi08TBsx29ss6FpuXORGV1rPqLNjNFPIJMm4qHIidtO1XU/bdnaeu1OLvp9ZkxsTAvNlruvvf61VVTAYSMeODBlDExbHsul/ML5aqWLh2a1eQhIrYmZdm8zzqV7mmeUkztV165zvbrbp4f+0aFWlfsiMPrlaRvb8Lhh+2Yvlzh8xAMHZhgDuV6nr/DjeCjfCOU2DIDRw0T7uDAYJxikanOfGEpRPDQlvmvTkmBy47Wb33AiPXA0/zetwmEjHjgwU2Lg3PHyW39X1gerBxoP9U8F6ft+Xeu7HxjG1X9uPFTpcsOp4zfkVThsxAMHZhwP3Zam1dvzDwZtn7bD8vEwfrlUWuLlUvUrQl/rh++Xlnu5VLXXv7b9TUI8cPiIBw7MZDx0r5j67cNv/e3PzsvHwyh7mjZMjoV/ml5Za36UbpbhsBEPHJgoHvpiHZT1VPd3/XKpNv7LS3nXsj9Nr6hVL5eal1RVg8NGPMCiVhcP1X/vYfCSSjxw+IgHWFS6W/J9AxtAPMCixAMbRTzAotLdomkb1fIf/f0lHgAIiAcAAuIBgIB4ACAgHgAIiAcAAuIBgIB4ACAgHgAIiAeOnt+DDZP/6O8v8cDRk+6W/D9GAxtAPMCixAMbRTzAosQDG0U8cNR0/5zcAv++22rleNg51fzb0ie2L9c3Eawn8cARU/6DoHP/dejVquMhhUOTC90CrCfxwNGS/0Hp4zfWITH6d6r3WBUPl7dPtKGQ8uHUTr0E60g8cKTkN0sXzueF8ful86fzg0VKjvP5OePC+bzz6tWdC3lv3aGNlksnqy3zX1XVTw9dPkgH1px44CjJb5aqyt4+RhTvl/psGLQcD+VbqdyahGgzY+6rqjoe6oCof3sQDqw38cAR0nzNz3W8Lfftw0H3k/Xp5ikg50fu0O49uVPvbIeqV5d5evByiY0hHjg68tf8to6PKv5o7yg/ytdKRVvqx+10txTpIB9Yc+KBI2PKu6P2cWFf4qH8+0rFIqwh8cBRkV8HRW0QAG3F7/qHL5dKy7xc6n968OMDa048cES01X9Q3wcbux8bRq2Oh/Dho/lpuk2ORX+ahs0gHjgShr8z99pHhPHP0dWW8W/Xk395Kf/d1uWeHmBDiAfWVn5c6P/7DddLPLBRxAPr4/zp4EFhqR+fZxMPbBTxwPqI/mrT6GXUdREPbBTxwPoYxcMKnxsa6W6BjZL/6O8v8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDwAEBAPAATEAwAB8QBAQDzAOvjgGsmXdB223vzQ2rR8SQdBPMA6SFX10bUgHkYtX9JBEA+wDsRDqSmsecQjSzwAKyAeSuJhJcQDrIPdxsNdtxzbyo7dclfeuCq337T8oIc3HtLVtIqrKq+xnsybbm9Wrp94AFZgN/EwqmZ33XLLyipbY43iocqGQQy0K/017uZqZxIPwAosHw9VjVvdN93Q2sTDxFz1G/I17sVsigdgBZaOh+n1rPqi3Mj76wp4S95a1PtqiEbuON6wLvEQzFXa1FxaOzlLX+h84gFYgd3Ew5yK1hX3Oi+6gp+XqpI5HKAIg9tvqpeKLQs7pPEwvo4uMerJ6QJypcQDsAIrfHpoK17SFMWyyrfLk4dXWwrVzjWKh/FcpU3F5NyeOix9pXOJB2AFlo6HafnQbx5WwFz7ZsfDaLx1iYfJa+s3tNeY/v/48q+XeABWYPl4aCpaUdKav7nUlfSqAjZLZZUPdreq4Sa2DDcs4FDGQ3Nx3VSVV9pf4+SMXCfxAKzAbuIhqUpaq6hy9epNN814esjLWS6c5WjVprLzog5pPCT95ZaPCYNrrLosfcVTiQdgBXYZD4fP4Y2HfScegBUQDyXxsBLiAdaBeCiJh5UQD7AOxENJPKyEeIB1IB5KTWFdj5Yv6SCIB1gHqaqujXxJ12FUYY90y5d0EMQDAAHxAEBAPAAQEA8ABMQDAAHxAEBAPAAQEA8ABMQDAAHxAEBAPAAQEA8AVD5eyyviAYCGeABgPvEAsNG6h4ZuoSEeADZalwrdQkM8ABAQDwCbqHtWmFxoiAeATdSFweRCQzwAEBAPAARyPGiapmnaoL3tof8HWMiuT413jzEAAAAASUVORK5CYII="},28453:(e,n,A)=>{A.d(n,{R:()=>d,x:()=>a});var r=A(296540);const o={},s=r.createContext(o);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);