"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67940"],{180528:function(e,a,n){n.r(a),n.d(a,{default:()=>p,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>i,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/clear-pasteboard","title":"CLEAR PASTEBOARD","description":"CLEAR PASTEBOARD","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/clear-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/clear-pasteboard","permalink":"/docs/es/commands/clear-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclear-pasteboard.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"clear-pasteboard","title":"CLEAR PASTEBOARD","slug":"/commands/clear-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"APPEND DATA TO PASTEBOARD","permalink":"/docs/es/commands/append-data-to-pasteboard"},"next":{"title":"Get file from pasteboard","permalink":"/docs/es/commands/get-file-from-pasteboard"}}'),t=n("785893"),o=n("250065");let d={id:"clear-pasteboard",title:"CLEAR PASTEBOARD",slug:"/commands/clear-pasteboard",displayed_sidebar:"docs"},r=void 0,l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"CLEAR PASTEBOARD"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(a.table,{children:(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Este comando no requiere par\xe1metros"}),(0,t.jsx)(a.th,{})]})})}),"\n",(0,t.jsx)(a.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsx)(a.p,{children:"El comando CLEAR PASTEBOARD borra el contenido del portapapeles. Si el portapapeles contiene m\xfaltiples instancias de los mismos datos, todas las instancias se borran. Despu\xe9s de llamar a CLEAR PASTEBOARD, el portapapeles queda vac\xedo."}),"\n",(0,t.jsxs)(a.p,{children:["Debe llamar CLEAR PASTEBOARD antes de a\xf1adir nuevos datos al portapapeles utilizando el comando ",(0,t.jsx)(a.a,{href:"/docs/es/commands/append-data-to-pasteboard",title:"APPEND DATA TO PASTEBOARD",children:"APPEND DATA TO PASTEBOARD"}),", porque este \xfaltimo comando no limpia el portapapeles antes de a\xf1adir nuevos datos."]}),"\n",(0,t.jsxs)(a.p,{children:["Si llama a CLEAR PASTEBOARD una vez y luego llama a ",(0,t.jsx)(a.a,{href:"/docs/es/commands/append-data-to-pasteboard",title:"APPEND DATA TO PASTEBOARD",children:"APPEND DATA TO PASTEBOARD"})," muchas veces puede cortar o copiar los mismos datos bajo diferentes formatos."]}),"\n",(0,t.jsxs)(a.p,{children:["Por el contrario, los comandos ",(0,t.jsx)(a.a,{href:"/docs/es/commands/set-text-to-pasteboard",title:"SET TEXT TO PASTEBOARD",children:"SET TEXT TO PASTEBOARD"})," y ",(0,t.jsx)(a.a,{href:"/docs/es/commands/set-picture-to-pasteboard",title:"SET PICTURE TO PASTEBOARD",children:"SET PICTURE TO PASTEBOARD"})," limpian autom\xe1ticamente el portapapeles antes de poner datos TEXT o PICT en \xe9l."]}),"\n",(0,t.jsx)(a.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsx)(a.p,{children:"El siguiente c\xf3digo borra y luego a\xf1ade datos al portapapeles:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-4d",children:"\xa0CLEAR PASTEBOARD\xa0//Borra el contenido del portapapeles\n\xa0APPEND DATA TO PASTEBOARD('XWKZ';$vxAlgunDato)\xa0// A\xf1ade datos de tipo 'XWKZ'\n\xa0APPEND DATA TO PASTEBOARD('SYLK';$vxSylkDatos)\xa0// A\xf1ade datos de tipo SYLK\n"})}),"\n",(0,t.jsx)(a.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsxs)(a.p,{children:["Ver el ejemplo del comando ",(0,t.jsx)(a.a,{href:"/docs/es/commands/append-data-to-pasteboard",title:"APPEND DATA TO PASTEBOARD",children:"APPEND DATA TO PASTEBOARD"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"/docs/es/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"})}),"\n",(0,t.jsx)(a.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{}),(0,t.jsx)(a.th,{})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"N\xfamero de comando"}),(0,t.jsx)(a.td,{children:"402"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Hilo seguro"}),(0,t.jsx)(a.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return r},a:function(){return d}});var s=n(667294);let t={},o=s.createContext(t);function d(e){let a=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);