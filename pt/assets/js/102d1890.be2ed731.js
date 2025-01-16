"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33492"],{23829:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>d,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>t});var o=JSON.parse('{"id":"WebServer/preemptiveWeb","title":"Utilizar processos web preemptivos","description":"The 4D Web Server allows you to take full advantage of multi-core computers by using preemptive web processes in your compiled applications. You can configure your web-related code, including 4D tags and web database methods, to run simultaneously on as many cores as possible.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/WebServer/preemptiveWeb.md","sourceDirName":"WebServer","slug":"/WebServer/preemptiveWeb","permalink":"/docs/pt/WebServer/preemptiveWeb","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FpreemptiveWeb.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"preemptiveWeb","title":"Utilizar processos web preemptivos"},"sidebar":"docs","previous":{"title":"Sess\xf5es web","permalink":"/docs/pt/WebServer/sessions"},"next":{"title":"Qodly Studio","permalink":"/docs/pt/category/qodly-studio-in-4d"}}'),r=n("785893"),i=n("250065");let d={id:"preemptiveWeb",title:"Utilizar processos web preemptivos"},t=void 0,c={},l=[{value:"Disponibilidade do modo preemptivo para os processos web",id:"disponibilidade-do-modo-preemptivo-para-os-processos-web",level:2},{value:"Escrever c\xf3digo servidor Web hilo seguro",id:"escrever-c\xf3digo-servidor-web-hilo-seguro",level:2},{value:"C\xf3digo web 4D hilo seguro",id:"c\xf3digo-web-4d-hilo-seguro",level:2},{value:"Comandos 4D e m\xe9todos base",id:"comandos-4d-e-m\xe9todos-base",level:3},{value:"URLs do servidor Web",id:"urls-do-servidor-web",level:3},{value:"\xcdcone de processo web preemptivo",id:"\xedcone-de-processo-web-preemptivo",level:3}];function a(e){let s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"The 4D Web Server allows you to take full advantage of multi-core computers by using preemptive web processes in your compiled applications. You can configure your web-related code, including 4D tags and web database methods, to run simultaneously on as many cores as possible."}),"\n",(0,r.jsxs)(s.p,{children:["For in-depth information on preemptive process in 4D, please refer to the ",(0,r.jsx)(s.a,{href:"/docs/pt/Develop/preemptive-processes",children:"Preemptive Processes"})," section."]}),"\n",(0,r.jsx)(s.h2,{id:"disponibilidade-do-modo-preemptivo-para-os-processos-web",children:"Disponibilidade do modo preemptivo para os processos web"}),"\n",(0,r.jsx)(s.p,{children:"The following table indicates whether the preemptive mode is used or is available, depending on the execution context:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"4D Server"}),(0,r.jsxs)(s.th,{children:["Interpretado (",(0,r.jsx)(s.a,{href:"/docs/pt/Debugging/debugging-remote",children:"asociado al depurador"}),")"]}),(0,r.jsx)(s.th,{children:"Interpretado (n\xe3o associado ao depurador)"}),(0,r.jsx)(s.th,{children:"Compilado"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Servidor REST"}),(0,r.jsx)(s.td,{children:"cooperativo"}),(0,r.jsx)(s.td,{children:"preemptive"}),(0,r.jsx)(s.td,{children:"preemptive"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Servidor Web"}),(0,r.jsx)(s.td,{children:"cooperativo"}),(0,r.jsx)(s.td,{children:"cooperativo"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.em,{children:"configura\xe7\xe3o web"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Servidor Web Services"}),(0,r.jsx)(s.td,{children:"cooperativo"}),(0,r.jsx)(s.td,{children:"cooperativo"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.em,{children:"configura\xe7\xe3o web"})})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"4D remoto/usu\xe1rio \xfanico"}),(0,r.jsx)(s.th,{children:"Interpretado"}),(0,r.jsx)(s.th,{children:"Compilado"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Servidor REST"}),(0,r.jsx)(s.td,{children:"cooperativo"}),(0,r.jsx)(s.td,{children:"preemptive"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Servidor Web"}),(0,r.jsx)(s.td,{children:"cooperativo"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.em,{children:"configura\xe7\xe3o web"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Servidor Web Services"}),(0,r.jsx)(s.td,{children:"cooperativo"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.em,{children:"configura\xe7\xe3o web"})})]})]})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Servidor REST: gestiona las ",(0,r.jsx)(s.a,{href:"/docs/pt/REST/classFunctions",children:"funciones de clase del modelo de datos ORDA"})]}),"\n",(0,r.jsxs)(s.li,{children:["Servidor web: maneja las ",(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/templates",children:"plantillas web"}),", ",(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/httpRequests",children:"4DACTION y los m\xe9todos base"})]}),"\n",(0,r.jsx)(s.li,{children:"Servidor de servi\xe7os Web: trata dos pedidos SOAP"}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"web setting"})})," significa que el modo apropiativo depende de un valor de configuraci\xf3n:\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["quando a op\xe7\xe3o ",(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/sessions#enabling-sessions",children:(0,r.jsx)(s.strong,{children:"Sess\xf5es escalon\xe1veis"})})," estiver selecionada, o ",(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/sessions#preemptive-mode",children:"modo preventivo \xe9 usado automaticamente"})," para processos web."]}),"\n",(0,r.jsxs)(s.li,{children:["caso contr\xe1rio, a op\xe7\xe3o ",(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/webServerConfig#use-preemptive-processes",children:(0,r.jsx)(s.strong,{children:"Usar processos preventivos"})})," \xe9 tida em conta."]}),"\n",(0,r.jsxs)(s.li,{children:['regarding Web service processes (server or client), preemptive mode is supported at method level. You just have to select "Can be run in preemptive processes" property for published SOAP server methods (see ',(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Publishing-a-Web-Service-with-4D.300-6750334.en.html",children:"Publishing a Web Service with 4D"}),") or proxy client methods (see ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Subscribing-to-a-Web-Service-in-4D.300-6750336.en.html",children:"Subscribing to a Web Service in 4D"}),") and make sure they are confirmed thread-safe by the compiler."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"escrever-c\xf3digo-servidor-web-hilo-seguro",children:"Escrever c\xf3digo servidor Web hilo seguro"}),"\n",(0,r.jsxs)(s.p,{children:["All 4D code executed by the web server must be thread-safe if you want your web processes to be run in preemptive mode. Cuando el ",(0,r.jsx)(s.a,{href:"#availability-of-preemptive-mode-for-web-processes",children:"modo apropiativo est\xe1 activo"}),", las siguientes partes de la aplicaci\xf3n ser\xe1n evaluadas autom\xe1ticamente por el compilador 4D:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Todos os m\xe9todos bases relacionados com a Web:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/authentication#on-web-authentication",children:(0,r.jsx)(s.code,{children:"On Web Authentication"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/httpRequests#on-web-connection",children:(0,r.jsx)(s.code,{children:"On Web Connection"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/pt/REST/configuration#using-the-on-rest-authentication-database-method",children:(0,r.jsx)(s.code,{children:"On REST Authentication"})})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication",children:(0,r.jsx)(s.code,{children:"On Mobile App Authentication"})})," and ",(0,r.jsx)(s.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action",children:(0,r.jsx)(s.code,{children:"On Mobile App Action"})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["El m\xe9todo proyecto ",(0,r.jsx)(s.code,{children:"compilador_web"}),' (independientemente de su propiedad real "Modo de ejecuci\xf3n");']}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Basically any code processed by the ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page816.html",children:(0,r.jsx)(s.code,{children:"PROCESS 4D TAGS"})})," command in the web context, for example through .shtml pages"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:['Todo m\xe9todo proyecto con el atributo "Disponible a trav\xe9s de etiquetas 4D y URLs (',(0,r.jsx)(s.code,{children:"4DACTION"}),", etc.)"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:'Triggers para as tabelas com o atributo "Expor como recurso REST"'}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/REST/classFunctions",children:"funciones de clase del modelo de datos ORDA"})," llamadas v\xeda REST"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["For each of these methods and code parts, the compiler will check if the thread-safety rules are respected, and will return errors in case of issues. Para m\xe1s informaci\xf3n sobre las reglas hilo seguro, consulte el p\xe1rrafo ",(0,r.jsx)(s.em,{children:"Escribir un m\xe9todo hilo seguro"})," en el cap\xedtulo ",(0,r.jsx)(s.em,{children:"Procesos"})," del manual de ",(0,r.jsx)(s.a,{href:"https://doc.4d.com",children:"Lenguaje 4D"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"c\xf3digo-web-4d-hilo-seguro",children:"C\xf3digo web 4D hilo seguro"}),"\n",(0,r.jsx)(s.p,{children:"Most of the web-related 4D commands and functions, database methods and URLs are thread-safe and can be used in preemptive mode."}),"\n",(0,r.jsx)(s.h3,{id:"comandos-4d-e-m\xe9todos-base",children:"Comandos 4D e m\xe9todos base"}),"\n",(0,r.jsxs)(s.p,{children:["Todos los comandos 4D relativos a la web son hilo seguro, ",(0,r.jsx)(s.em,{children:"es decir"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["todos los comandos del tema ",(0,r.jsx)(s.em,{children:"Servidor Web"}),","]}),"\n",(0,r.jsxs)(s.li,{children:["todos los comandos del tema ",(0,r.jsx)(s.em,{children:"Cliente HTTP"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Los m\xe9todos base relacionados con la web son hilo seguro y pueden utilizarse en modo apropiativo (ver arriba): ",(0,r.jsx)(s.code,{children:"On Web Authentication"}),", ",(0,r.jsx)(s.code,{children:"On Web Connection"}),", ",(0,r.jsx)(s.code,{children:"On REST Authentication"}),"...)."]}),"\n",(0,r.jsx)(s.p,{children:"Obviamente, o c\xf3digo executado por esses m\xe9todos tamb\xe9m deve ser thread-safe."}),"\n",(0,r.jsx)(s.h3,{id:"urls-do-servidor-web",children:"URLs do servidor Web"}),"\n",(0,r.jsx)(s.p,{children:"The following 4D Web Server URLs are thread-safe and can be used in preemptive mode:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"4daction/"})," (el m\xe9todo proyecto llamado tambi\xe9n debe ser hilo seguro)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"4dcgi/"})," (los m\xe9todos base llamados tambi\xe9n deben ser hilo seguro)"]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.em,{children:"4dwebtest/"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.em,{children:"4dblank/"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.em,{children:"4dstats/"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.em,{children:"4dhtmlstats/"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.em,{children:"4dcacheclear/"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.em,{children:"rest/"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"4dimgfield/"})," (generado por ",(0,r.jsx)(s.code,{children:"PROCESS 4D TAGS"})," para la petici\xf3n web en los campos imagen)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"4dimg/"})," (generado por ",(0,r.jsx)(s.code,{children:"PROCESS 4D TAGS"})," para la petici\xf3n web en las variables imagen)"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\xedcone-de-processo-web-preemptivo",children:"\xcdcone de processo web preemptivo"}),"\n",(0,r.jsx)(s.p,{children:"Both the Runtime Explorer and the 4D Server administration window display a specific icon for preemptive web processes:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Tipo de processo"}),(0,r.jsx)(s.th,{children:"\xcdcone"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"M\xe9todo web preventivo"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{src:n(672409).Z+"",width:"40",height:"32"})})]})})]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},672409:function(e,s,n){n.d(s,{Z:function(){return o}});let o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAIAAADvz61XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAc5SURBVFhH7VbZU1xVHp5/YF6nnAd9mLKmah6s8sEXX6zR0YkEF4KJZiUrSTBISEggi4SEREyc7ARUAiEk0ASahm7ohd7onQa6m17uPefuvZmZ0XEWNeqYMZnM1/TFcsrbgQerfPGr013dt875fef8ft/vO/cXD34i/Ez8EIiywkkKK8opQU7wcpyX5zl5fuFHUpAZQaaSgjnq7KWwXGJZUYKsdGtOOOvhD1jpdiO7doRZNcy8PsJUjbL1FvKOm+sLC+6UJEgKJqvLSmMJYoTgJSXCyZMJqSskvO2g24zkRR3zRHfisffjj3TEH+2M//bDxHP9qY2j7MFJetnPj8+L00RGbqSHnn4J4gVWqWea3zDKrtIzlXpmj5nstZCKIWbFAFM+yGATZTpm9zjZZyVrDWyFnnlNz57zcmEiEVFWo2ihJDHOSiXZz0hXAly9lYBym4k0TtKjDtripMedXKONVpvIfgs97uCOO2mzkx6y090TZJWerZkgZzzUGhfBXercJYmxABnuDfPP65IY4BuOCBEqX/JzrW5qS4ioNzbUFeJDRLrg4066qSspWeLiu1NcpT71RE/8tIfi3Mi5GvH/UZKYiMrVEP+WmVQMp94wMA2T9JKfBxmq2Bnkp4lkmhf322jfjMCI8o0Z4ayXvzkjfBjijzho1RhbNpisHi/kHPXW1Jo2sSArc1TeM0F+35+qNZOmSbrXShpsBEHP+XjdnDhL5dGoWGch18ICemksJmJDLU4O+sLMg5NYQspvMav17HhMhM7VuN+DNjE6B9vfMsa+Nsx0h3hUa2JeBGWNmRyyc21TfHtAaHZyFcMMNIUEnPHwbzu5Ogs96eIMUREJH4uK1SYWGsSG0GM/7G9tYpzmqIPbamTrzMSTkpQF9IaF6nGC52e8PEa9lb44yOwch444EJ9wcXvM9LyXh8NgMvyk1UXXGxjoEeX4YaW1id8P8qsNLEr4QZBHzovEA7MCnuhmC22KgbrumiDt/kK98RcpAXdHgIeSMRlM/bMCSrPZyL4zxUEHauhFaBNDmU/fSLW4OCQZBolIiDY4VzAQOElxH+YFcSF68S8EfNbLQVw4K2ZAJe6khDy/MoRyUOhADb0IbeIjdvp4V+I9DxfjZEgDrOhpSLrVyTlKEM8Q+aKPRyPAusGKzcLP+2eEZ/tTW8YIHqqhF6FNfMBGf9URrzVTrLw1J+rmhOthodXFwRnQVMMREQMOetxFIaUicZKXTVER4oCULHFpKCIOzIrQ2pPXkusM7HKJkZxfXo5X6llI95iTO+LgcLgtRhb+9ZaF4glGm5u2e1l7hFUIq7CMyKSSCSYQY41ztNNfmIC1O8bJb7ria0YYXGJq6EVoE0OKv+5M4NsUE23xgh8ZYyJKiB7tnhbsCQnDFY77J11J3c1sx3vZ8ycyZ1uky6dJX3fMZvOHIpACbotzXv6p3uSG5Z8Yxvu77uTpKW6GFjwP9skv1LjFRe0JUZEkhbJpnyvT90H2VGOu5o381pfym1fmd63JNddlui6m7RMSw0QZHhflCwMMLB31VkMvQpsYsnqmP4Vc4aAQJFSND4p91MkVVA3WwFSmtyO3b0u+ujK/qSy/4Y+FgR/bX83tWZdtf1d02tyhGFSNy+qgjaI11NCL0CbumRaqjKTOSs/7+DBR+3hwTjxs55B5JR7NDF3PnjyQryr7a1P136+0fTc+adn70aay3OEaueeKx+FBXeAzsHG4ihp6EdrEaBW8UWwaY6EO3DlFYlhHkw2dLSnhQPZPx3JvrsUp/6W7ev/OF9+NOy7z7R0V+Z2rM0dqoyaTZV6EF6FGy3Uu3AGGiLjdRPByg4sPvetjCm4AU4TclIAn21Kf3/pyfv0Ln430/ffuN1/PBr6cst77x6dfBd23q1flN5dn6zbSMT1cz5mU4PzL9WokF3JosNKVgwwqdMHHo4/hiLvNBBeR4nPnDu/Ob1yRX/c8iO9/eeef3Rf+1tZ4Ny2qxKj3rsq08VZRHPhW434P2sQAkoMUwSPRu6tHWJTqop+H1qKcnA56sycaoCP1xN/+5xuB/Xcycv+Lz1XirS/n9m1Omw2Io8kKlCRGC6Hrwb1+lP2DLvXSEHPKzaHeqAIbCimX2hAahwbxg3v3vv34z3clDuNzw83b214pCPtUY9ppVWNpoSQxUHwdAHeTnaK7yocYXIvtAd4RjJKRweyZo/mqlYVUf/3VZ/rrHzfXYvylvgq7yR2rywz2pGdCaiAtPIwYAHfx3LBMaK3KyMLOOqeSAbdPGOjJNtd9eqPzTtD1Sev+/IYV0FSu5vVc085M96W0f0phkmoULSxBDCDnqDe0hvsA1yXu4Fozq5+lsUBQMQzkLp+63bTjI9hIVXn+zTW5kw0ZXXfa71ZEEbpSQ2hhaeIioBGkHaaN1wm8AgRYiU0xykwoYxvL6K5mezuz165k+rsy48PpkFdJJdRlpbFc4h8ZDx78Dxocu+NZveoIAAAAAElFTkSuQmCC"},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return d}});var o=n(667294);let r={},i=o.createContext(r);function d(e){let s=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);