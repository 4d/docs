"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51138"],{132445:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>i,assets:()=>r,toc:()=>l,contentTitle:()=>t});var i=JSON.parse('{"id":"commands-legacy/maximize-window","title":"MAXIMIZE WINDOW","description":"MAXIMIZE WINDOW {( ventana )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/maximize-window.md","sourceDirName":"commands-legacy","slug":"/commands/maximize-window","permalink":"/docs/es/20-R7/commands/maximize-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmaximize-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"maximize-window","title":"MAXIMIZE WINDOW","slug":"/commands/maximize-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is window reduced","permalink":"/docs/es/20-R7/commands/is-window-reduced"},"next":{"title":"MINIMIZE WINDOW","permalink":"/docs/es/20-R7/commands/minimize-window"}}'),o=a("785893"),s=a("250065");let d={id:"maximize-window",title:"MAXIMIZE WINDOW",slug:"/commands/maximize-window",displayed_sidebar:"docs"},t=void 0,r={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"En Windows",id:"en-windows",level:5},{value:"En Mac OS",id:"en-mac-os",level:5},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"MAXIMIZE WINDOW"})," {( ",(0,o.jsx)(n.em,{children:"ventana"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ventana"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de referencia de la ventana Si se omite = todas las ventanas (Windows) o Ventana del primer plano del proceso actual (Mac OS)"})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando MAXIMIZE WINDOW provoca el zoom de la ventana cuyo n\xfamero de referencia se pasa en ",(0,o.jsx)(n.em,{children:"ventana"}),". Si se omite este par\xe1metro, el efecto es el mismo pero se aplica a todas las ventanas de la aplicaci\xf3n (Windows) o de la ventana del primer plano del proceso actual (Mac OS)."]}),"\n",(0,o.jsxs)(n.p,{children:["Este comando tiene el mismo efecto que un clic en el zoom de una ventana de la aplicaci\xf3n 4D. En Windows, la ventana que desea maximizar debe tener un cuadro de zoom. Si el tipo de ",(0,o.jsx)(n.em,{children:"ventana"})," no tiene un cuadro de zoom, el comando no hace nada."]}),"\n",(0,o.jsxs)(n.p,{children:["Un clic posterior en la cuadro de zoom o la llamada al comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/minimize-window",children:"MINIMIZE WINDOW"})," reduce la ventana a su tama\xf1o inicial. En Windows, una llamada a ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/minimize-window",children:"MINIMIZE WINDOW"})," sin par\xe1metros hace que todas las ventanas de la aplicaci\xf3n vuelvan a su tama\xf1o inicial."]}),"\n",(0,o.jsxs)(n.p,{children:["Si ",(0,o.jsx)(n.em,{children:"ventana"})," ya est\xe1 maximizada, el comando no hace nada."]}),"\n",(0,o.jsx)(n.h5,{id:"en-windows",children:"En Windows"}),"\n",(0,o.jsxs)(n.p,{children:["El tama\xf1o de la ventana se incrementa para coincidir con el tama\xf1o actual de la ventana de la aplicaci\xf3n (modo MDI) o la pantalla (modo SDI). La ventana maximizada pasa al primer plano. Si no pasa el par\xe1metro ",(0,o.jsx)(n.em,{children:"ventana"}),", el comando se aplica a todas las ventanas de la aplicaci\xf3n."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:a(807564).Z+"",width:"23",height:"23"})}),"\n",(0,o.jsx)(n.p,{children:"Zoom (bot\xf3n para agrandar) bajo Windows"}),"\n",(0,o.jsx)(n.p,{children:"En casos en que se aplica el comando a una ventana cuyo tama\xf1o est\xe1 sujeto a restricciones (por ejemplo, una ventana formulario):"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Si ninguna restricci\xf3n de tama\xf1o est\xe1 en conflicto con el tama\xf1o objetivo, la ventana se "maximiza" (es decir, se restaura del tama\xf1o de la ventana MDI ("Multiple Document Interface"); su barra de t\xedtulo y sus bordes est\xe1n ocultos y su botones de control, minimizar, restaurar y cerrar, se ubican a la derecha de la barra de men\xfa de la aplicaci\xf3n).'}),"\n",(0,o.jsx)(n.li,{children:'Si al menos una restricci\xf3n de tama\xf1o est\xe1 en conflicto (por ejemplo, si el ancho de la ventana MDI es 100 y el ancho m\xe1ximo de la ventana de formulario es 80), la ventana no se "maximiza", s\xf3lo se restaura a su tama\xf1o m\xe1ximo permitido. Este tama\xf1o se define ya sea por la ventana MDI, o por la restricci\xf3n. De esta manera, la interfaz sigue siendo coherente cuando se redimensionan ventanas con restricciones.'}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"en-mac-os",children:"En Mac OS"}),"\n",(0,o.jsxs)(n.p,{children:["La ventana se agranda de manera que pueda mostrar la totalidad de su contenido. Si no pasa el par\xe1meto ",(0,o.jsx)(n.em,{children:"ventana"}),", el comando se aplica a la ventana del primer plano del proceso actual."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:a(820804).Z+"",width:"16",height:"16"})}),"\n",(0,o.jsx)(n.p,{children:"Zoom en Mac OS"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"El zoom se basa en el contenido de la ventana; as\xed, el comando debe llamarse en un contexto en el que se definen el contenido de la ventana, por ejemplo, en un m\xe9todo formulario. De lo contrario, el comando no hace nada."}),"\n",(0,o.jsx)(n.li,{children:'La ventana est\xe1 dimensionada en su tama\xf1o "m\xe1ximo". Si la ventana es un formulario cuyo tama\xf1o se define en las Propiedades del formulario, el tama\xf1o de la ventana se establece en esos valores.'}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsx)(n.p,{children:'Usted quiere que su formulario se abra en una ventana "abierta totalmente". Para alcanzar esto, usted coloca el siguiente c\xf3digo en el m\xe9todo de formulario:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de formulario\n\xa0MAXIMIZE WINDOW\n"})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"Este ejemplo ilustra c\xf3mo las restricciones de tama\xf1o se manejan en Windows (modo MDI). El siguiente formulario tiene una restricci\xf3n de tama\xf1o (ancho m\xe1ximo=400):"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:a(305262).Z+"",width:"799",height:"541"})}),"\n",(0,o.jsx)(n.p,{children:"El m\xe9todo del bot\xf3n contiene \xfanicamente:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0MAXIMIZE WINDOW(Current form window)\n"})}),"\n",(0,o.jsx)(n.p,{children:"En este contexto, si el usuario hace clic en el bot\xf3n:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:a(870147).Z+"",width:"956",height:"817"})}),"\n",(0,o.jsx)(n.p,{children:'... la ventana no se "maximiza"; s\xf3lo aumenta el alto:'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:a(964631).Z+"",width:"956",height:"817"})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/is-window-maximized",children:"Is window maximized"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/minimize-window",children:"MINIMIZE WINDOW"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/reduce-restore-window",children:"REDUCE RESTORE WINDOW"})]}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"453"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},305262:function(e,n,a){a.d(n,{Z:function(){return i}});let i=a.p+"assets/images/pict1476223.en-6fcfc45cca5e638f0ce9433ae82a7387.png"},870147:function(e,n,a){a.d(n,{Z:function(){return i}});let i=a.p+"assets/images/pict1476225.en-101842d018a2e2faa7c97ba83b5612fa.png"},964631:function(e,n,a){a.d(n,{Z:function(){return i}});let i=a.p+"assets/images/pict1476363.en-f892d8aae0f3bd31e9af72721834c4ff.png"},807564:function(e,n,a){a.d(n,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAIAAABvSEP3AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHARMYGpJgIDgAAAMOSURBVHiclVUxaBVBEJ3Z3Us06kcSbVKonbWCIBbaaymCiIKNqaxEsbEROwVbRVALGwsLm9gLYivYWmlIoaLmJ/n/3+3u7PhmL4mgEMmx/Lvb3Xnz5r25/UyXv9JOr1L+mgiUZXZaXyzMnDk22LPb7QjtzfuVK4/Wf7bEdP7z4o3B0SODR4vpx6qOWm0jpawxk3MUk+2WmrtN2j9jw6RLB2eGz27OLn2Tcw/WDEVfHbr9tJuf4+BpONKVEXUJ8QriuViYKiVREYpCXdRxR2tjGQ6H++jLuycn915a2ijh17pONzTVAIibQIBrPDvHnsk7GwHPjpy9cnBYtbH8bb0XIZALuK2NdXWMYOTRSYeExgVFJRsKOjGDENmMVF7F6vWukhAfei5YXhkpso1aergwvb2ox6+PtKhjsOYtj+yGnIg3OeP/rcmFGbYwb81AA7t14J+s7JT/jyJqO4uixi0um1cbjWQpZueFe22M2mWTozNr8MupWvbp8QwctzA27+wq9trgAaKCDqyhumBpIJzTjSzMihghrVUIGwSpKz0Xt8kFhaCXpoJRpQqlNdjK931Gtsm6Ko77WvpupLArULUJ/oE8POqz2R5ncYbTY5XKqIaJJwEfpax/dGmqujasu2rmDSLOdrGrEMWwSKpHNVMpLD1KsBqsc0zFZC3b+wcXqgXUV2EtbNggZ/gAxAYpjPbb5DIVtrigqbnuy4L0it1ajdDeEbhb5TCzhErWLBXdW/v7ysXUtXIql8W7u7btFwYKhtS2qBU1XJPTJJL3SKunb42RurBxwUjMkbhTilqTZRZjAYFVN1B8cBUlxjjpnEfXCSbNFjFjYCq0pERsEIVxMuRMOapEKYCU9Kd3R5MyP1j9PiSN1DUAVvMUWjozR6zNPPoVhaRiWkgm+97b4eEDlQvOE/y+/bD68s7sxTsfl7+uhWYahBzZl8AMtc1OIQdq+IyLCDqtkNecDs+l1/dP4NAkGjBdk9nQvrgcz57av42i/16oAOmvPA8/8xTT1W5HwXaSoK9MXrAV+z9Q/xs9LuXjZb+iggAAAABJRU5ErkJggg=="},820804:function(e,n,a){a.d(n,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHARMYGpJgIDgAAAKLSURBVHiclZLfa9NQFMdv2sT2Jm2SxTRr615s3VZnnGWMwqiKYicMHCJIGWw+uRe3R/+I/QHiZPg62Zj4MEEHUmHbw9qJUrpfdJ2gMpvNbWFN2jT9mXqzleKrl3Phnsvn3vP9Hg4mSRL4n4X/m2xsbMRisXg8nk6nURoIBAYGBiKRSG9vb4vBWhVmZ2cXFhY4jgsGg95LXgwD2d9SKpWSZTkajY6NjTUrGIZxTs9Mz4RuhgaHBm+IQY7jMWDIp6ed17s+L8WmX7xqNBqjo6OItKATUjI/P+8RPUKfgHmBQhxMTEWfTY2ouGTtAHyfyyu65+bmEIZgHO1EIqHiObrbfmxPZXK7UtG++vML+iz843WhrMv2irW7kZdz6+vroihakKTV+ArZA3GXXLft5UpbuUqGIAEKpZrJ19J1mMHdMgzAlbVlBJsV9k62faF2QdDffzxgKECRksdl+lv8lNbLIKeCRw86ann2+9a2Kck07TBcHPDwDsEFWAgcJMCA9ayFRqHcIGygnXMU+cYvpm5WQLvn8jW77ZB1up5PDNGQc1DON2/fIf7JyOO8pioF1C3VbjsK+EQEmx5CXWG9qEGcdJIszThRMJA2o41lWJqmePKCo6QVQ/5w88Ht0N36H14rVSHuZOk2lqIZcBYXKJbhSOgo6VXjyHWr/07TtN/nv9/5dCXxUuCFi22CxQonx8eRA61aAuVyQVN2EtmIf9Lvu1KpVLDNzU0kl6bpD0uLycPFDpG46vO7+Xbcgh8en+zuZ/Z3yj3s8PDQQ1VVzUagaTkfEoZhJCm79m05m/+qVQ8wC0ZDr9veF+6/53a7FUVpDl8ymWxNIoSQoiiCIGq12vkNEqxpmq7rLeYvGRYwZYbVLwwAAAAASUVORK5CYII="},250065:function(e,n,a){a.d(n,{Z:function(){return t},a:function(){return d}});var i=a(667294);let o={},s=i.createContext(o);function d(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);