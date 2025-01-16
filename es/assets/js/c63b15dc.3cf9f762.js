"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21939"],{295325:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>i,assets:()=>t,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"commands-legacy/combine-pictures","title":"COMBINE PICTURES","description":"COMBINE PICTURES ( imagenResult ; imag1 ; operador ; imag2 {; despHor ; despVert} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/combine-pictures.md","sourceDirName":"commands-legacy","slug":"/commands/combine-pictures","permalink":"/docs/es/20-R7/commands/combine-pictures","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcombine-pictures.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"combine-pictures","title":"COMBINE PICTURES","slug":"/commands/combine-pictures","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB TO PICTURE","permalink":"/docs/es/20-R7/commands/blob-to-picture"},"next":{"title":"CONVERT PICTURE","permalink":"/docs/es/20-R7/commands/convert-picture"}}'),r=s("785893"),d=s("250065");let c={id:"combine-pictures",title:"COMBINE PICTURES",slug:"/commands/combine-pictures",displayed_sidebar:"docs"},a=void 0,t={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"COMBINE PICTURES"})," ( ",(0,r.jsx)(n.em,{children:"imagenResult"})," ; ",(0,r.jsx)(n.em,{children:"imag1"})," ; ",(0,r.jsx)(n.em,{children:"operador"})," ; ",(0,r.jsx)(n.em,{children:"imag2"})," {; ",(0,r.jsx)(n.em,{children:"despHor"})," ; ",(0,r.jsx)(n.em,{children:"despVert"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"imagenResult"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Imagen resultante de la combinaci\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"imag1"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Primera imagen a combinar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"operador"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tipo de combinaci\xf3n a realizar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"imag2"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Segunda imagen a combinar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"despHor"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Desplazamiento horizontal para la superposici\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"despVert"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Desplazamiento vertical para la superposici\xf3n"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando COMBINE PICTURES permite combinar las im\xe1genes ",(0,r.jsx)(n.em,{children:"imag1"})," e ",(0,r.jsx)(n.em,{children:"imag2"})," en modo ",(0,r.jsx)(n.em,{children:"operador"})," para producir una tercera, ",(0,r.jsx)(n.em,{children:"imagenResult"}),". La imagen resultante es de tipo compuesto y conserva todas las caracter\xedsticas de las im\xe1genes fuente."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," este comando extiende las funcionalidades ofrecidas por los operadores cl\xe1sicos de transformaci\xf3n de im\xe1genes (+/, etc., ver la secci\xf3n ",(0,r.jsx)(n.em,{children:"Operadores de im\xe1genes"}),"). Estos operadores permanecen totalmente utilizables en 4D v11."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"operador"}),", pase el tipo de combinaci\xf3n a aplicar. Se proponen tres tipos de combinaciones, accesibles a trav\xe9s de las constantes del tema \u201C",(0,r.jsx)(n.em,{children:"Picture Transformation"}),"\u201D:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Horizontal concatenation (1): ",(0,r.jsx)(n.em,{children:"imag2"})," est\xe1 asociada a ",(0,r.jsx)(n.em,{children:"imag1"}),", la esquina superior izquierda de ",(0,r.jsx)(n.em,{children:"imag2"})," coincide con la esquina superior derecha de ",(0,r.jsx)(n.em,{children:"imag1"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Vertical concatenation (2): ",(0,r.jsx)(n.em,{children:"imag2"})," est\xe1 asociada a ",(0,r.jsx)(n.em,{children:"imag1"}),", la esquina superior izquierda de ",(0,r.jsx)(n.em,{children:"imag2"})," coincide con la izquina inferior izquierda de ",(0,r.jsx)(n.em,{children:"imag1"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Superimposition (3): ",(0,r.jsx)(n.em,{children:"imag2"})," est\xe1 ubicada sobre ",(0,r.jsx)(n.em,{children:"pict1"}),", la esquina superior izquierda de ",(0,r.jsx)(n.em,{children:"imag2"})," coincide con la esquina superior izquierda de ",(0,r.jsx)(n.em,{children:"imag1"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si se utilizan los par\xe1metros opcionales ",(0,r.jsx)(n.em,{children:"despHor"})," y ",(0,r.jsx)(n.em,{children:"despVert"}),", una traducci\xf3n se aplica a ",(0,r.jsx)(n.em,{children:"imag2"})," antes de la superposici\xf3n. Los valores pasados en ",(0,r.jsx)(n.em,{children:"despHor y"})," ",(0,r.jsx)(n.em,{children:"despVert"})," deben estar en p\xedxeles. Pase valores positivos para un desplazamiento a la derecha o hacia abajo y un valor negativo para un desplazamiento a la izquierda o hacia arriba."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," la superposici\xf3n efectuada por el comando COMBINE PICTURES difiere de la superposici\xf3n propuesta por los operadores cl\xe1sicos & y |(superposici\xf3n exclusiva y superposici\xf3n inclusiva). Mientras que el comando COMBINE PICTURES conserva las caracter\xedsticas de cada imagen fuente en la imagen resultantes, los operadores & y | procesan cada p\xedxel y generan una imagen bitmap en todos los casos. Estos operadores, concebidos originalmente para las im\xe1genes monocrom\xe1ticas, ahora son obsoletos."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Dadas las siguientes im\xe1genes:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(636166).Z+"",width:"253",height:"109"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0COMBINE PICTURES(bandera;mifondo;Superimposition;micirculo;50;30)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Resultado:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(935869).Z+"",width:"285",height:"145"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/transform-picture",children:"TRANSFORM PICTURE"})}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"987"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},636166:function(e,n,s){s.d(n,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAABtCAIAAADlMfDoAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFxA7CJUkubsAAAUESURBVHic7d3tVeJcGIVhmDX/tQPtQDvQDrQDpQLtQDuQDrQD7UCtQK1ArUA74N2L552zYoCQQAyH7Pv6wcrHIZLn7CQnmUGHk8lkAJj5s+kPAGwAuYcjcg9Hw0Xj++Fw2PFH2XaN7pQob1Pt3oj+7ewn9dsKOaa89bV+mqjK/W/8vAxlnb9F9c/5M2+DJbkfZB6LteV7YFd/sFjb6675VdzX5keZrnk01m+Jn8h9ZlbIMdFvjtznZOUEE/2GyH021swu0W+C3OehldQS/drIPRyR+wy0eJ7mlF8PuYcjcg9H5H7TWh+ZMNSpgdzDEbmHI3IPR+Qejsg9HJF7OCL3m9b6d0f4MkoN5B6OyD0ckfsMtDgyYZBTD7mHI3Kfh1bO05zsayP32VgztYS+CXKfk5WzS+gbIveZWSHBhL45cp8f5bhmlOu3xE/kPlfVmSbx61n++zGxSYT7d3C+hyNyD0fkHo7IPRyRezgi93BE7uGI3MMRuYcjcg9H5B6OyD0ckXs4IvdwRO7hiNzDEbmHI3IPR+Qejsg9HC3/XvmQvwuJ3lmS+wnf50cfMc6BI3IPR+Qejsg9HJF7OCL3cETu4YjcwxG5hyNyD0fkHo7IPRyRezgi93BE7uGI3MMRuYcjcg9H5B6OyD0ckXs4IvdwRO7hiNzDEbmHo6rfl8ZvCPxVlHeDhvwmQBhinANH5B6O8sr909PT3d1dTGtif39fg+Dj4+N1tnl9fb3mFnpDpfj4+FhtbU3qL3XimhvpQF65V91fX1818f39PRqNxuOxbj/SkYA1KZEq7Gpre2b5331oneq7P6VppVy1Tufj8/PzmIj0n56e6jVaxhv1Onvy1hbU/vDwcHd3t7SwuCR8TKUP0DOxd1GiqEBxT0tn4ih+qlv1ebrUuKZFXbZ5k65cXV3t7e0dHBwcHR3t7Oxo9uTkRLNaqInURmtLj5geHx9fXl7ivdFes9Fea8/OzmKVtpmW397ealabiuWxTbm4uIhZvWq6s33vgEqhMkYp9KoK6DX2VAVMbWJahYpmaqCFalxcq4Uqjgqbil/ReFLotdKPmNtlmeg697H/qp0KdH9/r+n393dNx/JUQdWueEzqjVpV3M7/n34wSMvVT3H8fH19qbOjeybTrMc242DQ2tk2PaBSpCM5Mhp7msoy+ZlsLY+Fqn90RHGtinNzc6NZbaS68WRB7hd1WSY6Hd/rgqsL5eDf0KU4jKkYWeoK+/n5eXl5GbOa0GwMhAaFa6i2ExvR/YCuxWnIlK7LDw8PWhiz0UBL2t3BzYp6DqalUFliT1NZEpXu+flZd7GpcXpjcjmljWjUtLTxrOouy0Fe97VzRbel+MZExXGiVXPH7lpeHJtq2uc2rij2uubtTaPGpXfV77LubUHuS1Ur1XRu+7klLi0vHQY+Yq9rPrJs1Lj0rvpd1r0tyL2GRhodjsfjmNWEZmO8NJeuzm9vb+l5aLq86gKtIVD0gV41XeeS3T9RzzR0UaYrxnuLGusGIA4GVXL2QVDTLuveBp5jrkC1Vkaj4ip09bhc9dWNlNKviXhkGcs1oI/nelquifOp3//sOYp6xiNODd/jMUOjxoryaDTSuUMVVj1nL7CNuqx72/T/0ho9DI4n2bPPm/v9/L6RRo/kZxsX/61gkWyf329T7oG2bMH4HmgduYcjcg9H5B6OyD0ckXs4IvdwRO7hiNzDEbmHo/8At1afd5nmr/QAAAAASUVORK5CYII="},935869:function(e,n,s){s.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return c}});var i=s(667294);let r={},d=i.createContext(r);function c(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);