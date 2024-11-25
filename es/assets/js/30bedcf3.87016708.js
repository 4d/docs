"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85139"],{90254:function(e,r,s){s.r(r),s.d(r,{metadata:()=>o,contentTitle:()=>d,default:()=>p,assets:()=>l,toc:()=>t,frontMatter:()=>i});var o=JSON.parse('{"id":"FormObjects/splitters","title":"Separador","description":"Un separador divide un formulario en dos \xe1reas, permitiendo al usuario ampliar y reducir las \xe1reas moviendo el separador hacia un lado u otro. Un separador puede ser horizontal o vertical. El separador tiene en cuenta las propiedades de redimensionamiento de cada objeto, lo que significa que puede personalizar completamente la interfaz de su aplicaci\xf3n. Un separador puede ser o no un \\"empujador.\\"","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/FormObjects/splitters.md","sourceDirName":"FormObjects","slug":"/FormObjects/splitters","permalink":"/docs/es/FormObjects/splitters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fsplitters.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"splitters","title":"Separador"},"sidebar":"docs","previous":{"title":"Spinner","permalink":"/docs/es/FormObjects/spinner"},"next":{"title":"Imagen est\xe1tica","permalink":"/docs/es/FormObjects/staticPicture"}}'),a=s("785893"),n=s("250065");let i={id:"splitters",title:"Separador"},d=void 0,l={},t=[{value:"Ejemplo JSON:",id:"ejemplo-json",level:4},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:3},{value:"Interacci\xf3n con las propiedades de los objetos vecinos",id:"interacci\xf3n-con-las-propiedades-de-los-objetos-vecinos",level:2},{value:"Gesti\xf3n programada de los separadores",id:"gesti\xf3n-programada-de-los-separadores",level:2}];function c(e){let r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:'Un separador divide un formulario en dos \xe1reas, permitiendo al usuario ampliar y reducir las \xe1reas moviendo el separador hacia un lado u otro. Un separador puede ser horizontal o vertical. El separador tiene en cuenta las propiedades de redimensionamiento de cada objeto, lo que significa que puede personalizar completamente la interfaz de su aplicaci\xf3n. Un separador puede ser o no un "empujador."'}),"\n",(0,a.jsx)(r.p,{children:"Los separadores se utilizan, por ejemplo, en los formularios de salida para poder cambiar el tama\xf1o de las columnas:"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:s(519008).Z+"",width:"260",height:"121"})}),"\n",(0,a.jsx)(r.p,{children:"Algunas de las caracter\xedsticas generales del separador:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Puede colocar tantos separadores como desee en todo tipo de formulario y utilizar una mezcla de separadores horizontales y verticales en el mismo formulario."}),"\n",(0,a.jsx)(r.li,{children:"Un separador puede cruzar (superponer) un objeto. Este objeto cambiar\xe1 de tama\xf1o cuando se mueva el separador."}),"\n",(0,a.jsxs)(r.li,{children:["Los topes de los separadores se calculan para que los objetos desplazados permanezcan totalmente visibles en el formulario o no pasen por debajo/al lado de otro separador. Cuando la propiedad ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#pusher",children:"Empujador"})," est\xe1 asociada a un separador, su movimiento hacia la derecha o hacia abajo no encuentra ning\xfan tope."]}),"\n",(0,a.jsx)(r.li,{children:"Si se redimensiona un formulario mediante un separador, las nuevas dimensiones del formulario se guardan s\xf3lo mientras se muestra el formulario. Una vez que se cierra un formulario, se restablecen las dimensiones iniciales."}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["Una vez insertado, el separador aparece como una l\xednea. You can modify its ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesBackgroundAndBorder#border-line-style-dotted-line-type",children:"border style"})," to obtain a thinner line or ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesBackgroundAndBorder#line-color",children:"change its color"}),"."]}),"\n",(0,a.jsx)(r.h4,{id:"ejemplo-json",children:"Ejemplo JSON:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'"mySplitter": {\n	"type": "splitter",\n	"left": 60,  \n	"top": 160,   \n	"width": 100,  \n	"height": 20,  \n	"splitterMode": "move"  //pusher\n	}\n'})}),"\n",(0,a.jsx)(r.h3,{id:"propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesBackgroundAndBorder#line-color",children:"Line Color"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#pusher",children:"Pusher"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," -  ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]}),"\n",(0,a.jsx)(r.h2,{id:"interacci\xf3n-con-las-propiedades-de-los-objetos-vecinos",children:"Interacci\xf3n con las propiedades de los objetos vecinos"}),"\n",(0,a.jsx)(r.p,{children:"En un formulario, los separadores interact\xfaan con los objetos que est\xe1n a su alrededor seg\xfan las opciones de cambio de tama\xf1o de estos objetos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Opciones de redimensionamiento de los objetos"}),(0,a.jsx)(r.th,{children:"Objeto(s) por encima de un separador horizontal o a la izquierda de un separador vertical (1)"}),(0,a.jsxs)(r.th,{children:["Objeto(s) debajo de un separador horizontal ",(0,a.jsx)(r.em,{children:"no empujador"})," o a la derecha de un separador vertical ",(0,a.jsx)(r.em,{children:"no empujador"})]}),(0,a.jsxs)(r.th,{children:["Objeto(s) debajo de un separador horizontal ",(0,a.jsx)(r.em,{children:"Empujador"})," o a la derecha de un separador vertical ",(0,a.jsx)(r.em,{children:"Empujador"})]})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Ninguno"}),(0,a.jsx)(r.td,{children:"Permanece como est\xe1"}),(0,a.jsx)(r.td,{children:"Se desplazan con el separador (la posici\xf3n respecto al separador no se modifica) hasta la siguiente parada. El tope cuando se mueve hacia abajo o hacia la derecha es el borde de la ventana, u otro separador."}),(0,a.jsx)(r.td,{children:"Se desplazan con el separador (la posici\xf3n respecto al separador no se modifica) indefinidamente. No se aplica ninguna parada ( ver el siguiente p\xe1rrafo)"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Redimensionamiento"}),(0,a.jsx)(r.td,{children:"Conservan la(s) posici\xf3n(es) original(es), pero se redimensionan seg\xfan la nueva posici\xf3n del separador"}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Mover"}),(0,a.jsx)(r.td,{children:"Se mueven con el separador"}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{})]})]})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.em,{children:"(1) No puede arrastrar el separador m\xe1s all\xe1 del lado derecho (horizontal) o inferior (vertical) de un objeto situado en esta posici\xf3n."})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"Un objeto completamente contenido en el rect\xe1ngulo que define el separador se mueve al mismo tiempo que el separador."}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"gesti\xf3n-programada-de-los-separadores",children:"Gesti\xf3n programada de los separadores"}),"\n",(0,a.jsxs)(r.p,{children:["Puede asociar un m\xe9todo objeto a un separador y ser\xe1 llamado con el evento ",(0,a.jsx)(r.code,{children:"On Clicked"})," durante todo el movimiento."]}),"\n",(0,a.jsxs)(r.p,{children:["A cada separador se le asocia una ",(0,a.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression",children:"variable"})," de tipo ",(0,a.jsx)(r.em,{children:"Longint"}),". Esta variable se puede utilizar en su objeto y/o m\xe9todos de formulario. Su valor indica la posici\xf3n actual del separador, en p\xedxeles, en relaci\xf3n con su posici\xf3n inicial."]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Si el valor es negativo: el separador se ha movido hacia arriba o hacia la izquierda,"}),"\n",(0,a.jsx)(r.li,{children:"Si el valor es positivo: el separador se ha movido hacia el fondo o hacia la derecha,"}),"\n",(0,a.jsx)(r.li,{children:"Si el valor es 0: el separador se ha movido a su posici\xf3n original."}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["Tambi\xe9n puede mover el separador por programaci\xf3n: s\xf3lo tiene que definir el valor de la variable asociada. Por ejemplo, si un separador vertical est\xe1 asociado a una variable llamada ",(0,a.jsx)(r.code,{children:"split1"}),", y si se ejecuta la siguiente sentencia:",(0,a.jsx)(r.code,{children:"split1:=-10"}),", el separador se mover\xe1 10 p\xedxeles a la izquierda - como si el usuario lo hiciera manualmente. El movimiento se realiza realmente al final de la ejecuci\xf3n del m\xe9todo del formulario u objeto que contiene la instrucci\xf3n."]})]})}function p(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},519008:function(e,r,s){s.d(r,{Z:function(){return o}});let o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAB5CAYAAADfw1+hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAA2pSURBVHhe7Zk9kly5EYR5BBm6gExF6AK6q06wETyCXK23jiLWlMw11qAhQya11WLuJHOqCsD76enul19EBoCsKszjQ3cRHH76739++XqGvnz5v7IYlMW5rtrjS4zhR/zb+paL+TfxHrd9WN/iN2msUpULn/escu+ifyUefKiLPaa+JN6suDbmWPOc1+/1y9effvz8e16nvP57cR7m3R5dbCSt0/lNv/58kxtCSGOVqlz4vGeVexfFIVc+1MUeU999gBfFtfxl4Dmv38sNYZd+/xImMSiLc121x+3LHn7Ev61vuZh/E+9x24f1LX6TxipVufB5zyr3LopDrnyoiz2mvvsAL4pr+cvAc15XQl6nrE7FeZh3e3SxkbRO5ze5IZA0VqnKhc97Vrl3URxy5UNdbF1B5h+p7z7Ai+Ja/jLwnNeVkNcpq1NxHubdHl1sJK3T+U1uCCSNVapy4fOeVe5dFIdc+VAXWxOTxY/Sdx/gRXEtfxl4zutKyOuU1ak4D/Nujy42ktbp/CY0hC+//hawrI0KPn369N2Y5VnPoU+ff/jbV8vaIqANIcjyrcfXb2f46XaQlrUiBuvMt55Mn3/4nF4drGtoy/njyw4wz7ys3npcuSFcXKvnH9z+JpEvf8TUw1r3sB5XbggX18r5B/iisxCLMYsjZj2+3BAuLt8QLJYbwsW15fwD/fLzGLgZPKfcEC6urefPZA0hyOqsx5YbwsW15/xB1hCyfOvxdWhDiA9E5u/RGXtab9p7/oE2hCzPeg4NG0IcMpTFWTM5EO+rQpxH6xzNNAQ+m+w8mD/88U/v4tbzaPqGMPPFnMnJ1NVt3dOa08xfCJmvCjLfei5taggxZ2lOFuuU5fFe7LHga541r+78R++UzwINIW4I7Ic0l+urWOVj3sWytcasXMsNIXuxHNN4lq8a7ckji70sbo21tSF056Gxah3jKFf9rqbys5iV6/CGUMU6zey5dW+r11ENATcDjByr1upXHvujmi7PGuupGkImrrHW9dE3BPbVizlL45yn8yzPGuupbwjWfj3qDWFLDc+zPGusl/knQxa3xhqdf/Veu/PQWLXeskdXU60rz3qvtiHES4Qqn2Pqc6xTlgePY9gTgq951rxm/kKo3jt7+r8MyEFetkYtS/M0pjmZN5Nj5Zq+IVivqY88/7O+pP7yb5cbwsV11PnHzYDHGZ3xxXUz2KdbQ/jl3z9ZF5XP32LdGsLP//yHdVEddf5//stfvxut59StIfz049+ti8rnb7FuDcFcl6POP/7tzqN5TtwQLo7P3zBuCBfHNwTDuCFcHJ+/YdwQLo5vCIZxQ7g4Pn/DuCFcnGe+Ifg2cjzDhhAvnXVPfODn051/9f4f5Vy651PNkOXN1h4BP+89fy7TNoTsoe75oB/1Uq7EUQ0B3iN8Prrn69hadwT3+jkjlhsCE3EWk8V0DDhn1QeY6wh0bd7Y2xBizgI8D7o1atXjMeA8KCPz2cvq2YOfeUHnZyPQNah8EHHWmWxuCFkMXlUXPse6PYJqH4B4jF3daJ8rs6chrLzz0RrAj5FzsvzRHsxM7kxdlxMjx2dqg8oPsliXv5fNv0PIHgpeFgvU7/YIqn0A4t0+oz2uzqghVEJcYU/zujpQ5WQ11T7hqyo4luWp1+WsxsBqrMvfy7AhKPwHzIRYhvpcxwI8B1lulcejyTnrhhBoXlYXxJoFj9F1kHnBKDfmLMBzoB7XsRBTuhhYjXX5e9nVECqqmPqjP9goH+tsny5m3jiqIQD2NC+r43mQ5QS6DjIv6HK7fbs6kOWArn61DnR7nsHy7xDgrcYC9bs9glE+1tk+QeWbN868IQTqz65n8tQDmQ8v2wd0daDLyWJB5TMrtezN7L3C5t8hBKsxzQmyPEZ9zoXPcabyzRt7GkIQc5aiXpXDgqfM5AScBzEzMUY9rDM/o/IV3pNrKj/Q9V6W/8nwTBz9sl6Ro84f79rv/D3P9E5etiH4gznHK/+F8Ag82+fwpW8IZoxvCIZxQ7g4Pn/DuCFcHN8QDOOGcHF8/oZxQ7g4viEYxg3h4vj8DXN4Q/DfEM/FM98Q/Fk7nmFDiJfOGuFDei6686/O8lHOuHs+1QxZ3mztEfDz3vPnMm1DyB5q9KAf9Qcx2ziqIcC75/lveb6OrXVHcK+fM2K5ITARh4DOs5xAfR7ZB+xzDHP1srzKx6ixK7C3IfB7U5/p1qhVj8eA86CMzGcvq2cPfuYFnZ+NQNeg8kHEWWeyqyEwyNWRGcXUH+Vj5HiXy1T1QZb/quxpCBwfvcPRGsCPkXOy/NEezEzuTF2XEyPHZ2qDyg+yWJe/l8N+h4CYjsxMjNmyV5fLVPVB5r0qo4ZQCXGFPc3r6kCVk9VU+4SvquBYlqdel7MaA6uxLn8vw4ag8MPEnAUPYyaQrRV4yFUhpnA8qHJ4ZDLvVTnrhhBoXlYXxJoFj9F1kHnBKDfmLMBzoB7XsRBTuhhYjXX5e9ncEPSh1J996C5/Zq+Z2Ore3Z6vxlENAbCneVkdz4MsJ9B1kHlBl9vt29WBLAd09at1oNvzDJZ/hwBPY+p3tcxM/moMbK3v9nw1zrwhBOrPrmfy1AOZDy/bB3R1oMvJYkHlMyu17M3svcKu3yFkMc7J4sHI01hQxbo8hn2OaV6Qea/KnoYQxJylqFflsOApMzkB50HMTIxRD+vMz6h8hffkmsoPdL2X5X8ynMXRfzAzx1Hnj/PzOb7nmd6JG8LFeZTzf1We7XP9MA3BfAy+IRjGDeHi+PwN44ZwcXxDMIwbwsXx+RvGDeHi+IZgGDeEi+PzN8zhDcF/QzwXz3xD8GfteIYNIV46a4QP6bnozr86y0c54+75VDNkebO1R8DPe8+fy7QNIXuo0YN+1B/EbOOohgDvnue/5fk6ttYdwb1+zojlhsBEHAI6z3IC9XlkH7DPMczVy/IqH6PGrsDehsDvTX2mW6NWPR4DzoMyMp+9rJ49+JkXdH42Al2DygcRZ53JrobAIFdHZhRTf5SPkeNdLlPVB1n+q7KnIXB89A5HawA/Rs7J8kd7MDO5M3VdTowcn6kNKj/IYl3+Xg77HQJiOjIzMWbLXl0uU9UHmfeqjBpCJcQV9jSvqwNVTlZT7RO+qoJjWZ56Xc5qDKzGuvy9DBuCwg8TcxY8jJlAtlbgIVeFmMLxoMrhkcm8V+WsG0KgeVldEGsWPEbXQeYFo9yYswDPgXpcx0JM6WJgNdbl72VzQ9CHUn/2obv8mb1mYqt7d3u+Gkc1BMCe5mV1PA+ynEDXQeYFXW63b1cHshzQ1a/WgW7PM1j+HQI8janf1TIz+asxsLW+2/PVOPOGEKg/u57JUw9kPrxsH9DVgS4niwWVz6zUsjez9wq7foeQxTgniwcjT2NBFevyGPY5pnlB5r0qexpCEHOWol6Vw4KnzOQEnAcxMzFGPawzP6PyFd6Tayo/0PVelv/JcBZH/8HMHEedP87P5/ieZ3onbggX51HO/1V5ts/1wzQE8zH4hmAYN4SL4/M3jBvCxfENwTBuCBfH528YN4SL4xuCYdwQLo7P3zBuCBfnmW8Ivo0cz7AhxEtnPQL+IBxHd/7Ve370z0H4qhmyvNnaI+DnvefPZdqGkD3URz2oOYejGgK8e34+tjxfx9a6I7jXzxmx3BBA9/J4hBj2OYa5jiDzYw4B9tTn0exvCDFnAZ4H3Rq16vEYcB6UkfnsZfXswc+8oPOzEegaVD6IOOtMTmsIGueYUtVpLufxyHRejFn8yuxpCBzX3NU1gB8j52T5oz2YmdyZui4nRo7P1AaVH2SxLn8vm3+HkD0UvLNjM/lMl391Rg2hEuIKe5rX1YEqJ6up9glfVcGxLE+9Lmc1BlZjXf5ehg1B6f6As7FMiClZTOdVDMDLYlfnrBtCoHlZXRBrFjxG10HmBaPcmLMAz4F6XMdCTOliYDXW5e/lQxpCxWzdbB7oYlfnqIYA2NO8rI7nQZYT6DrIvKDL7fbt6kCWA7r61TrQ7XkGy79DgKexWFexYGssUH91jy52dc68IQTqz65n8tQDmQ8v2wd0daDLyWJB5TMrtezN7L3C5t8hBOrzqGKqmOYB9bFGfRbPYppn9jWEAO8YUtSrcljwlJmcgPMgZibGqId15mdUvsJ7ck3lB7rey/I/GWY4+iHNeRx1/jhzn/17numduCFcnDPO37zxbN+FUxqCeR58QzCMG8LF8fkbxg3h4viGYBg3hIvj8zeMG8LF8Q3BMG4IF8fnbxg3hIuz9fz1JuAbwmvQNoQ4XBWj670cvZ8Zs/X8eb4F3Zf347m5L8OGoJx5WP4g3J+t56+xyq/o9jYfx3JDCPTwdQxizmKyWOYFnc+j2cbehtDlBDFnAZ4DeNkIMex3MTPPYQ2Bc7M6rcnQ2Gifbi8zx1ENgUf1mJVYjJqnOUwXM3McekMAWV2Vyxy1j5lndP4qgDl74KjY3nqzzmkNIRNiFRrLcmf2MfOcfUPIVMUA5uwBjmUCujZz3O2GAFZiWS68bh8zz1ENgeliYCa2dW9mNs/8n+WGwF51OF1dFgNH7WPmOfqGEGQe6GJga/2sZ2qGDUHFYK1+wDUan4kBzlPf7Gfr+euc41VM/QrEshzdgwUyz8zRNgTz+hx1/vjy+Uv43LghXByfv2HcEC6Obwjmja9f/wdAZhz4aahRAQAAAABJRU5ErkJggg=="},250065:function(e,r,s){s.d(r,{Z:function(){return d},a:function(){return i}});var o=s(667294);let a={},n=o.createContext(a);function i(e){let r=o.useContext(n);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);