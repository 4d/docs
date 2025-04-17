"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74514"],{754095:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>t,toc:()=>l,contentTitle:()=>a});var i=JSON.parse('{"id":"commands-legacy/mobile-app-refresh-sessions","title":"MOBILE APP REFRESH SESSIONS","description":"MOBILE APP REFRESH SESSIONS","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/mobile-app-refresh-sessions.md","sourceDirName":"commands-legacy","slug":"/commands/mobile-app-refresh-sessions","permalink":"/docs/es/20-R8/commands/mobile-app-refresh-sessions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmobile-app-refresh-sessions.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"mobile-app-refresh-sessions","title":"MOBILE APP REFRESH SESSIONS","slug":"/commands/mobile-app-refresh-sessions","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Load 4D View document","permalink":"/docs/es/20-R8/commands/load-4d-view-document"},"next":{"title":"Monitored activity","permalink":"/docs/es/20-R8/commands/monitored-activity"}}'),o=n("785893"),r=n("250065");let d={id:"mobile-app-refresh-sessions",title:"MOBILE APP REFRESH SESSIONS",slug:"/commands/mobile-app-refresh-sessions",displayed_sidebar:"docs"},a=void 0,t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"MOBILE APP REFRESH SESSIONS"})}),"\n\n\n\n\n\n\n\n",(0,o.jsx)(s.table,{children:(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Este comando no requiere par\xe1metros"}),(0,o.jsx)(s.th,{})]})})}),"\n",(0,o.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(s.p,{children:["El comando ",(0,o.jsx)(s.strong,{children:"MOBILE APP REFRESH SESSIONS"})," comprueba todos los archivos de sesi\xf3n de la aplicaci\xf3n m\xf3vil ubicados en la carpeta MobileApps del servidor y actualiza el contenido de sesi\xf3n existente en la memoria para todo archivo editado."]}),"\n",(0,o.jsxs)(s.p,{children:['Este comando est\xe1 dise\xf1ado para ser utilizado por los desarrolladores de 4D for iOS y de 4D for Android para "forzar" la recarga de la informaci\xf3n de la sesi\xf3n del usuario despu\xe9s de que se hayan editado sus archivos locales. Por ejemplo, si una sesi\xf3n necesita reiniciarse, puede eliminar el archivo de sesi\xf3n y luego llamar a ',(0,o.jsx)(s.strong,{children:"MOBILE APP REFRESH SESSIONS"}),". Para m\xe1s informaci\xf3n sobre las sesiones de aplicaciones m\xf3viles, consulte la ",(0,o.jsx)(s.a,{href:"https://developer.4d.com/go-mobile",children:"documentaci\xf3n Go Mobile"}),"."]}),"\n",(0,o.jsx)(s.p,{children:"El comando verifica el cumplimiento de cada archivo de sesi\xf3n en la carpeta MobileApps (sintaxis json, esquema json, datos de sesi\xf3n). Si el archivo es compatible y se ha modificado, la sesi\xf3n correspondiente se actualiza en la memoria (si ya existe) con los contenidos editados."}),"\n",(0,o.jsx)(s.p,{children:"Si un archivo de sesi\xf3n no es v\xe1lido o ha sido eliminado, la sesi\xf3n correspondiente se elimina de la memoria."}),"\n",(0,o.jsxs)(s.p,{children:["El comando puede devolver uno de los siguientes errores, que se puede manejar a trav\xe9s de los comandos ",(0,o.jsx)(s.a,{href:"/docs/es/20-R8/commands/on-err-call",children:"ON ERR CALL"})," y ",(0,o.jsx)(s.a,{href:"/docs/es/20-R8/commands/last-errors",children:"Last errors"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:(0,o.jsx)(s.strong,{children:"Nombre del componente"})}),(0,o.jsx)(s.th,{children:(0,o.jsx)(s.strong,{children:"C\xf3digo de error"})}),(0,o.jsx)(s.th,{children:(0,o.jsx)(s.strong,{children:"Descripci\xf3n"})})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"mobi"}),(0,o.jsx)(s.td,{children:"1"}),(0,o.jsx)(s.td,{children:"La ubicaci\xf3n del archivo json no coincide con su contenido"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"mobi"}),(0,o.jsx)(s.td,{children:"2"}),(0,o.jsx)(s.td,{children:"El archivo json no est\xe1 formado correctamente"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"mobi"}),(0,o.jsx)(s.td,{children:"3"}),(0,o.jsx)(s.td,{children:"El archivo json no valida el esquema json"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"mobi"}),(0,o.jsx)(s.td,{children:"4"}),(0,o.jsx)(s.td,{children:"El token de conexi\xf3n no cumple con la informaci\xf3n actual"})]})]})]}),"\n",(0,o.jsx)(s.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(s.p,{children:"Usted desea restablecer todas las sesiones actuales para todas las aplicaciones m\xf3viles:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"\xa0var $sessionsPath : Text\n\xa0$sessionsPath:=Get 4D folder(MobileApps folder)\n\xa0DELETE FOLDER(sessionsPath;Delete with contents)\n\xa0MOBILE APP REFRESH SESSIONS\n"})}),"\n",(0,o.jsx)(s.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"metodo-base-on-mobile-app-authentication.md",children:"M\xe9todo base On Mobile App Authentication"})}),"\n",(0,o.jsx)(s.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero de comando"}),(0,o.jsx)(s.td,{children:"1596"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Hilo seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return d}});var i=n(667294);let o={},r=i.createContext(o);function d(e){let s=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);