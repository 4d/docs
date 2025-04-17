"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29373"],{420343:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/method-get-attributes","title":"METHOD GET ATTRIBUTES","description":"METHOD GET ATTRIBUTES ( ruta ; atributos {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/method-get-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-attributes","permalink":"/docs/es/20-R8/commands/method-get-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-attributes.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-get-attributes","title":"METHOD GET ATTRIBUTES","slug":"/commands/method-get-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD Get attribute","permalink":"/docs/es/20-R8/commands/method-get-attribute"},"next":{"title":"METHOD GET CODE","permalink":"/docs/es/20-R8/commands/method-get-code"}}'),d=t("785893"),o=t("250065");let r={id:"method-get-attributes",title:"METHOD GET ATTRIBUTES",slug:"/commands/method-get-attributes",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD GET ATTRIBUTES"})," ( ",(0,d.jsx)(n.em,{children:"ruta"})," ; ",(0,d.jsx)(n.em,{children:"atributos"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ruta"}),(0,d.jsx)(n.td,{children:"Text, Text array"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Rutas de m\xe9todos"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"atributos"}),(0,d.jsx)(n.td,{children:"Object, Object array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Atributos para los m\xe9todos seleccionados"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (par\xe1metro ignorado fuera de este contexto)"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"METHOD GET ATTRIBUTES"})," devuelve, en ",(0,d.jsx)(n.em,{children:"atributos"}),", el valor actual de todos los atributos para los m\xe9todos especificados en el par\xe1metro ",(0,d.jsx)(n.em,{children:"ruta"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Este comando s\xf3lo funciona con m\xe9todos proyecto. Si pasa una ",(0,d.jsx)(n.em,{children:"ruta"})," no v\xe1lida, se genera un error."]}),"\n",(0,d.jsxs)(n.p,{children:["En ",(0,d.jsx)(n.em,{children:"ruta"}),", puede pasar ya sea un texto que contenga una ruta de m\xe9todo, o un array texto que contenga un array de rutas. Debe pasar el mismo tipo de par\xe1metro (variable o array) en ",(0,d.jsx)(n.em,{children:"atributos"})," con el fin de obtener los atributos apropiados."]}),"\n",(0,d.jsxs)(n.p,{children:["En ",(0,d.jsx)(n.em,{children:"atributos"}),", pase un objeto o un array de objetos, dependiendo del tipo de par\xe1metro pasado en ",(0,d.jsx)(n.em,{children:"ruta"}),'. Todos los atributos de m\xe9todos se devuelven como propiedades de objeto, con los valores "True"/"False" para los atributos Booleanos, los valores texto o los valores adicionales si es necesario (por ejemplo, "scope":"table" para la propiedad 4D Mobile).']}),"\n",(0,d.jsxs)(n.p,{children:["Si el comando se ejecuta desde un componente, por defecto se aplica a los m\xe9todos del componente. Si pasa el par\xe1metro ",(0,d.jsx)(n.em,{children:"*"}),", accede a los m\xe9todos de la base local."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota de compatibilidad:"})," la propiedad ",(0,d.jsx)(n.em,{children:"published4DMobile"})," es obsoleta a partir de 4D v18."]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsxs)(n.p,{children:["Usted quiere obtener los atributos del m\xe9todo de proyecto ",(0,d.jsx)(n.em,{children:"sendMail"}),". Puede escribir:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $att : Object\n\xa0METHOD GET ATTRIBUTES("sendMail";$att)\n'})}),"\n",(0,d.jsx)(n.p,{children:"Despu\xe9s de la ejecuci\xf3n, $att contiene, por ejemplo:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "invisible":false,\n\xa0\xa0\xa0 "preemptive":"capable",\n\xa0\xa0\xa0 "publishedWeb":false,\n\xa0\xa0\xa0 "publishedSoap":false,\n\xa0\xa0\xa0 "publishedWsdl":false,\n\xa0\xa0\xa0 "shared":false,\n\xa0\xa0\xa0 "publishedSql":false,\n\xa0\xa0\xa0 "executedOnServer":false,\n\xa0\xa0\xa0 "published4DMobile":{\n\xa0\xa0\xa0 \xa0\xa0\xa0 "scope":"table",\n\xa0\xa0\xa0 \xa0\xa0\xa0 "table":"Table_1"\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/method-set-attributes",children:"METHOD SET ATTRIBUTES"})}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"1334"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var s=t(667294);let d={},o=s.createContext(d);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);