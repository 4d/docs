"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40369"],{804235:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>t,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/create-deployment-license","title":"Create deployment license","description":"Create deployment license ( mergedApp ; buildLicense {; oemLicense} ) : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/create-deployment-license.md","sourceDirName":"commands-legacy","slug":"/commands/create-deployment-license","permalink":"/docs/es/commands/create-deployment-license","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-deployment-license.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"create-deployment-license","title":"Create deployment license","slug":"/commands/create-deployment-license","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CHANGE LICENSES","permalink":"/docs/es/commands/change-licenses"},"next":{"title":"Is license available","permalink":"/docs/es/commands/is-license-available"}}'),c=i("785893"),r=i("250065");let d={id:"create-deployment-license",title:"Create deployment license",slug:"/commands/create-deployment-license",displayed_sidebar:"docs"},l=void 0,a={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Create deployment license"})," ( ",(0,c.jsx)(n.em,{children:"mergedApp"})," ; ",(0,c.jsx)(n.em,{children:"buildLicense"})," {; ",(0,c.jsx)(n.em,{children:"oemLicense"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe1metro"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"mergedApp"}),(0,c.jsx)(n.td,{children:"4D.Folder"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Carpeta que contiene la aplicaci\xf3n fusionada"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"buildLicense"}),(0,c.jsx)(n.td,{children:"4D.File"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Licencia necesaria para generar la licencia anidada"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"oemLicense"}),(0,c.jsx)(n.td,{children:"4D.File"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Licencia 4D OEM XML Key si se trata de una licencia servidor"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Resultado"}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"\u2190"}),(0,c.jsx)(n.td,{children:"Estado"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsxs)(n.p,{children:["El comando ",(0,c.jsx)(n.strong,{children:"Create deployment license"})," crea un archivo de licencia anidado en la carpeta Licenses de la aplicaci\xf3n creada ",(0,c.jsx)(n.em,{children:"mergedApp"}),". Si la carpeta Licenses no existe en ",(0,c.jsx)(n.em,{children:"mergedApp"}),", el comando la crear\xe1."]}),"\n",(0,c.jsxs)(n.p,{children:["En ",(0,c.jsx)(n.em,{children:"mergedApp"}),", pase un objeto ",(0,c.jsx)(n.a,{href:"/docs/es/API/FolderClass",children:"4D.Folder"})," que contenga una referencia a la carpeta que contiene la aplicaci\xf3n creada en la que desea anidar una licencia."]}),"\n",(0,c.jsxs)(n.p,{children:["En ",(0,c.jsx)(n.em,{children:"license"}),", pase un objeto ",(0,c.jsx)(n.a,{href:"/docs/es/API/FileClass",children:"4D.File"})," que contenga una referencia al archivo de licencia utilizado para generar la licencia anidada."]}),"\n",(0,c.jsxs)(n.p,{children:["Si la compilaci\xf3n requiere una licencia OEM espec\xedfica (",(0,c.jsx)(n.em,{children:"4D OEM XML Keys"}),") y si dicha licencia no est\xe1 ya instalada en la carpeta Licenses de la m\xe1quina de compilaci\xf3n, necesita pasarla utilizando el par\xe1metro ",(0,c.jsx)(n.em,{children:"oemLicense"})," parameter. TEste par\xe1metro es \xfatil si dedica una m\xe1quina a crear sus aplicaciones."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"Propiedad"})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"Tipo"})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"success"}),(0,c.jsx)(n.td,{children:"Booleano"}),(0,c.jsx)(n.td,{children:"True si se ha generado el archivo de licencia"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"file"}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/es/API/FileClass",children:"4D.File"})}),(0,c.jsx)(n.td,{children:"El archivo de licencia generado"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"statusText"}),(0,c.jsx)(n.td,{children:"Texto"}),(0,c.jsx)(n.td,{children:"Descripci\xf3n del error si lo hay"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"errors"}),(0,c.jsx)(n.td,{children:"Collection"}),(0,c.jsx)(n.td,{children:"Colecci\xf3n de objetos de error"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"[].message"}),(0,c.jsx)(n.td,{children:"Texto"}),(0,c.jsx)(n.td,{children:"Mensaje de error"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"[].errCode"}),(0,c.jsx)(n.td,{children:"Number"}),(0,c.jsx)(n.td,{children:"N\xfamero de error"})]})]})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["La licencia generada debe utilizarse \xfanicamente con la aplicaci\xf3n a la que hace referencia ",(0,c.jsx)(n.em,{children:"mergedApp"}),"."]}),"\n",(0,c.jsx)(n.li,{children:"Es necesario regenerar la licencia cada vez que se reconstruya la aplicaci\xf3n."}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0var $status : Object\n\xa0var $application : 4D.File\n\xa0var $license : 4D.File\n\xa0$license:=Folder(fk licenses folder).file("4UUD200-xxx.license4D")\n\xa0$application:=Folder(fk desktop folder).folder("myApp.app")\n\xa0$status:=Create deployment license($application;$license)\n'})}),"\n",(0,c.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,c.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"N\xfamero de comando"}),(0,c.jsx)(n.td,{children:"1811"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Hilo seguro"}),(0,c.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return d}});var s=i(667294);let c={},r=s.createContext(c);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);