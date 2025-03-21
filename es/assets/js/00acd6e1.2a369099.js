"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78122"],{539850:function(e,i,n){n.r(i),n.d(i,{default:()=>A,frontMatter:()=>o,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>l});var a=JSON.parse('{"id":"MSC/verify","title":"P\xe1gina Verificaci\xf3n","description":"Esta p\xe1gina se utiliza para verificar la integridad de los datos. La verificaci\xf3n puede llevarse a cabo en los registros y/o \xedndices.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/MSC/verify.md","sourceDirName":"MSC","slug":"/MSC/verify","permalink":"/docs/es/MSC/verify","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fverify.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"verify","title":"P\xe1gina Verificaci\xf3n","sidebar_label":"P\xe1gina Verificaci\xf3n"},"sidebar":"docs","previous":{"title":"P\xe1gina An\xe1lisis de actividades","permalink":"/docs/es/MSC/analysis"},"next":{"title":"P\xe1gina de respaldo","permalink":"/docs/es/MSC/backup"}}'),s=n("785893"),r=n("250065");let o={id:"verify",title:"P\xe1gina Verificaci\xf3n",sidebar_label:"P\xe1gina Verificaci\xf3n"},l=void 0,c={},d=[{value:"Acciones",id:"acciones",level:2},{value:"Abrir archivo de historial",id:"abrir-archivo-de-historial",level:2},{value:"Detalles",id:"detalles",level:2}];function t(e){let i={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["Esta p\xe1gina se utiliza para verificar la integridad de los datos. La verificaci\xf3n puede llevarse a cabo en los registros y/o \xedndices.\nEsta p\xe1gina s\xf3lo comprueba la integridad de los datos. Si se encuentran errores y es necesario repararlos, se le indicar\xe1 que utilice la p\xe1gina ",(0,s.jsx)(i.a,{href:"/docs/es/MSC/repair",children:"Reparaci\xf3n"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"acciones",children:"Acciones"}),"\n",(0,s.jsx)(i.p,{children:"La p\xe1gina contiene botones de acci\xf3n que dan acceso directo a las funciones de verificaci\xf3n."}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"Cuando la base est\xe1 encriptada, la verificaci\xf3n incluye la validaci\xf3n de la consistencia de los datos encriptados. Si no se ha suministrado una llave de datos v\xe1lida, aparecer\xe1 un di\xe1logo solicitando la frase secreta o la llave de datos."}),"\n"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Verificar los registros y los \xedndices:"})," inicia el procedimiento de verificaci\xf3n total de los datos."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Verificar s\xf3lo los registros"}),": inicia el procedimiento de verificaci\xf3n s\xf3lo para los registros (los \xedndices no se verifican)."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Verificar s\xf3lo los \xedndices"}),": inicia el procedimiento de verificaci\xf3n s\xf3lo para los \xedndices(los registros no se verifican)."]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"> > > > > La verificaci\xf3n de registros e \xedndices tambi\xe9n puede realizarse en modo detallado, tabla por tabla (ver la secci\xf3n Detalles m\xe1s abajo)."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"abrir-archivo-de-historial",children:"Abrir archivo de historial"}),"\n",(0,s.jsxs)(i.p,{children:["Independientemente de la verificaci\xf3n solicitada, 4D genera un archivo de historial en la carpeta ",(0,s.jsx)(i.code,{children:"Logs"})," de la aplicaci\xf3n. Este archivo lista todas las verificaciones realizadas e indica los errores encontrados, cuando sea el caso (se muestra [OK] cuando la verificaci\xf3n es correcta). Se crea en formato XML y se denomina: ",(0,s.jsx)(i.em,{children:"ApplicationName__Verify_Log__yyyy-mm-dd hh-mm-ss"}),".xml donde:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"ApplicationName"}),' es el nombre del archivo del proyecto sin ninguna extensi\xf3n, por ejemplo "Facturas",']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"yyyy-mm-dd hh-mm-ss"}),' es la marca de tiempo del archivo, basada en la hora del sistema local cuando se inici\xf3 la operaci\xf3n de mantenimiento, por ejemplo "2019-02-11 15-20-45".']}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Al presionar el bot\xf3n ",(0,s.jsx)(i.strong,{children:"Abrir archivo de historial"}),", 4D muestra el archivo de historial m\xe1s reciente en el navegador por defecto de la m\xe1quina."]}),"\n",(0,s.jsx)(i.h2,{id:"detalles",children:"Detalles"}),"\n",(0,s.jsxs)(i.p,{children:["El bot\xf3n ",(0,s.jsx)(i.strong,{children:"Lista de tablas"})," muestra una p\xe1gina detallada que puede utilizarse para ver y seleccionar los registros e \xedndices reales que se van a verificar:"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(49470).Z+"",width:"882",height:"666"})}),"\n",(0,s.jsx)(i.p,{children:"La designaci\xf3n de los elementos a verificar le permite ahorrar tiempo durante el procedimiento de verificaci\xf3n."}),"\n",(0,s.jsxs)(i.p,{children:["La lista principal muestra todas las tablas de la base. Para cada tabla, puede limitar la verificaci\xf3n a los registros y/o \xedndices. Despliegue el contenido de una tabla o los campos indexados y marque/desmarque las casillas de selecci\xf3n como desee. Por defecto, todo est\xe1 seleccionado. Tambi\xe9n puede utilizar los botones de acceso directo ",(0,s.jsx)(i.strong,{children:"Seleccionar todo"}),", ",(0,s.jsx)(i.strong,{children:"Deseleccionar todo"}),", ",(0,s.jsx)(i.strong,{children:"Todos los registros"})," y ",(0,s.jsx)(i.strong,{children:"Todos los \xedndices"}),"."]}),"\n",(0,s.jsx)(i.p,{children:'Para cada l\xednea de tabla, la columna "Acci\xf3n" indica las operaciones a realizar. Cuando se expande la tabla, las filas "Registros" y "Campos indexados" indican el n\xfamero de elementos en cuesti\xf3n.'}),"\n",(0,s.jsx)(i.p,{children:'La columna "Estado" muestra el estado de verificaci\xf3n de cada elemento mediante s\xedmbolos:'}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:(0,s.jsx)(i.img,{src:n(591733).Z+"",width:"32",height:"32"})}),(0,s.jsx)(i.th,{children:"Verificaci\xf3n realizada sin problemas"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.img,{src:n(828832).Z+"",width:"32",height:"32"})}),(0,s.jsx)(i.td,{children:"Verificaci\xf3n efectuada, problemas encontrados"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.img,{src:n(787849).Z+"",width:"32",height:"32"})}),(0,s.jsx)(i.td,{children:"Verificaci\xf3n realizada parcialmente"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.img,{src:n(210251).Z+"",width:"32",height:"32"})}),(0,s.jsx)(i.td,{children:"Verificaci\xf3n no efectuada"})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:["Haga clic en ",(0,s.jsx)(i.strong,{children:"Verificar"})," para comenzar la verificaci\xf3n o en ",(0,s.jsx)(i.strong,{children:"Est\xe1ndar"})," para volver a la p\xe1gina est\xe1ndar."]}),"\n",(0,s.jsxs)(i.p,{children:["El bot\xf3n ",(0,s.jsx)(i.strong,{children:"Abrir archivo de historial"})," puede utilizarse para mostrar el archivo de historialen el navegador predeterminado de la m\xe1quina (ver ",(0,s.jsx)(i.a,{href:"#abrir-archivo-de-registro",children:"Abrir archivo de historial"})," arriba)."]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"La p\xe1gina est\xe1ndar no tendr\xe1 en cuenta las modificaciones realizadas en la p\xe1gina detallada: cuando se presiona un bot\xf3n de verificaci\xf3n en la p\xe1gina est\xe1ndar, se verifican todos los elementos. Por otra parte, los par\xe1metros establecidos en la p\xe1gina detallada se conservan de una sesi\xf3n a otra."}),"\n"]})]})}function A(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},210251:function(e,i,n){n.d(i,{Z:function(){return a}});let a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAyxJREFUWAntVktrU0EUnpv3q6YkBgIRQhZiQ3FTalfFhQvFlYouXdimtCkIbty4LRQq/oGkWbnopgiK1CCIBn+AxDxWpoU0fYTYJBiaV/P0G9uETO6NnXu37YXLnXNmznzfnNdcQi6fi+4BQa4DQqHQNUEQXuGd7nQ6nna7Pa5Wq/MqlSrdarW+Y/xmYWGhyLsvN4FIJKJJpVIr2PiFy+XSWq1WrcFgIDqdjpycnJB6vU4KhUI9l8u1sGZ1aWlpjYcEN4H19fW3FovlsdfrNWu12pF7UyLJZLJcq9XWlpeXV0cuPJvgIgC334G7t2ZmZoz/A++BVatVEo1G65BvwBOZnl7qq5JSDuu63e5zj8cjAj8+PiYHBweEAg4+JpOJ2O32JuyeDOqlxrwEZsfGxhh7JBxJJBK1/f39jVgsVgcYM4/1FiTmFKOUEHgJ2Ghsi8Vi/93b2yOohM8+n+8pwtNqNBrM9giVgIq4yiglBI2EjlHhZAJy4Nv29raBmYCAuS0k5z0AqfV6PTNdLpc7KNEdRikhnEsAp6S+vSthSwKBwG24OTwxMWEcns/n81UQfDesH5a5QjBsRGWc/BbIfZqcnDSjJzBL0ul0A6ePoQIizISEoIhAMBjUAvwDeoJlGBxV0To8PDxCVB5J4IlU54ZAZHGqeIhSs9hsNmZ6d3e3AfAsyM3Oz88fMZMjBEUEEPf7DoeDqUtaITh9AXGfhuvzI/BEakUhwAmv4x5guijK8g/KEdj84JSNIg+AwDjKjJZh/0SVSkWPi+lnX8E5UEQAGf4lm83+HsQAmUaz2SwM6njGjBt5DHprACigD7g1Gs0VvL/m5ubo5SP7UUQAndELpPcIhQvl1kYb1mD8cnFxMSCXgWwC4XBYj2zfwe3ocjqd//Bw95N4PF5BCB74/f6vckjIroJMJjOFZDP3wCmY0WgkbrfbDG88o7KcRzYBgFB3izDOdKN/lUQWpwrZBFDrP3A1N/H/19+SXsXogmVUx0ZfyTkQH4XDENk/jW74EaEwwSNd5IAO8mv8Da9wmDNLFBGgO2xubupKpdJNDK3wSlxuB2RYXAoX2gN/AddTRky3uT9tAAAAAElFTkSuQmCC"},828832:function(e,i,n){n.d(i,{Z:function(){return a}});let a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAFpJREFUWAnt0sENABAMhWHEWh2oE3WgDsYA2gtJXX7HJzz5qjUWAggggAACnwV61G9mK8pfM1U9+mZ2qYhkW1e5u4fnRpgWhjwg/QPZzAqnQxUCCCCAAAI1AhspZwlZmOIJVwAAAABJRU5ErkJggg=="},787849:function(e,i,n){n.d(i,{Z:function(){return a}});let a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAkJJREFUWAntVrtKA0EUnV0TXwQfiYhFjJWmUxsRbC0s/RML8SeEkMI/sUxhK4iN2hkbjYIiJpogUYnuOmfk7o67M7NjgiCYbW6yc+45Z+6dxzLWf/oV+OsVaOzsLPp7e0M/8Qk88mxyXBOovr295jnsqH5zXbE1ARzwIo/nm/gxpjUAcT/lVsaWF4bTufEVGxMkDjzykA8ekwmlgUB8qZhJT02wsaX50SQT38SBF3nFTJIJJ+oOvUP5xMw5SfD4PmudXrQ79eZxLj+74WxtvdFYVJw5IW3n4Ym1Tqqvrs9Ws6XSGeVQjFVgslA45wRHLzf3bcZFg4eTqiphEke+4OF8gjcgC3+EVsN3LImUKuE67qbne/ui57zs8swhTrhoxSQppjQAgJWJ+0cvPT3pojLdiENHa8DGxMvVXWNkbibbrXiigUQTAMiPZdnlFGMFCGhsRwCy6znBKcZ2AQ3IEVsOC67De46yy2P0G+8xDpy8RWlcF60MoAJitfMFJ3quYMN7LEjggFdAlK8SW2BVfqLuYg0YK2AUxyFzeduwOazInypqDSSJ45BpV2uDiL2YUBqwEced4KZSecReTMQM2IrjeM3u7jYRezERM/BYqxV5SVdH8tNWxyu2nMmE4OF8glexCGIGcGU6H95667T63HlofqUkrG6dCeSDB3yqqxjk2m0YfpQsZHClqr4DohOS24eZC/F3byNXLh9GsfRfawAAYWLAPcD3gelKJTJEMoE2YuYmcTlP+/u3v4q1wv2Bf1OBT4kWIelsqx4WAAAAAElFTkSuQmCC"},591733:function(e,i,n){n.d(i,{Z:function(){return a}});let a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAfpJREFUWAljYBgFoyEwGgI0DgHrTc+18VnBhE+SUjnrLS/6/v//f9Fy87MAXGbRzAFAy/s5mBjSNCX4mZkZGZficgQjLpdRIg61PFVbUpCbhYmR4euvPwxXX3789vf//+jjvlIbkM2megigWw6yjJuNhUGSlxMYIAxTQq/+ZyPJAcA4JDqUsFkOsuzV15//nn389p71H4vDam3GX8gOwGu4zebnDgz//09hZGN1Pewh+hxZIzobn+X333x+z/qfxeKAv9gddH04o8B203P7/wz/twrzcKr///37lO2O15LommF8oOV9wPCFxzlMHORzfJaD1GF1AMjn/xj/b9MU4+dSFuZmkRHgFsflCKjP02AJjhTLQWoxosB223OtP3/+n9cQ42MT5ESkl2efvv9+8uHrS0ZWVjNYdJAb7DBHYnUAKNHZbnm+hJOVxV9bnJ+bCZiNYADmiP/srOYMv/6WkhvsMPOwOgAkSMgRj99//cXBwsRAbrATdAAhR7z88vONMBebCKiQgQFiEhxMLTKNMAFZFMoGh8RmYHSwAaNDQoAbyT4U1eRaDjIErwNACgg5ghLLiXIAPkdQajnRDsBwBDB3vPn+i2AhA9JHCBCMAmQDYNHBysIU9OvPv6+4ildkPVRngxxhufl5l8PGVypUN3zUwNEQGA2BgQgBAH6SPzdNKo9/AAAAAElFTkSuQmCC"},49470:function(e,i,n){n.d(i,{Z:function(){return a}});let a=n.p+"assets/images/MSC_Verify-8011610125009120b0db711841a97965.png"},250065:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return o}});var a=n(667294);let s={},r=a.createContext(s);function o(e){let i=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:i},e.children)}}}]);