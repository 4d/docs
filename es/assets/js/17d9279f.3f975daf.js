"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32677"],{401001:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>i,toc:()=>l,contentTitle:()=>r});var o=JSON.parse('{"id":"commands-legacy/on-drop-database-method","title":"On Drop database method","description":"M\xe9todo base On Drop","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/on-drop-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-drop-database-method","permalink":"/docs/es/commands/on-drop-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-drop-database-method.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"on-drop-database-method","title":"On Drop database method","slug":"/commands/on-drop-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Backup Startup database method","permalink":"/docs/es/commands/on-backup-startup-database-method"},"next":{"title":"On Exit database method","permalink":"/docs/es/commands/on-exit-database-method"}}'),t=a("785893"),s=a("250065");let d={id:"on-drop-database-method",title:"On Drop database method",slug:"/commands/on-drop-database-method",displayed_sidebar:"docs"},r=void 0,i={},l=[{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"M\xe9todo base On Drop"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Este comando no requiere par\xe1metros"}),(0,t.jsx)(n.th,{})]})})}),"\n",(0,t.jsx)(n.h2,{id:""}),"\n",(0,t.jsx)(n.p,{children:"El M\xe9todo base On Drop est\xe1 disponible en aplicaciones 4D locales o remotas."}),"\n",(0,t.jsx)(n.p,{children:"Este m\xe9todo de base se ejecuta autom\xe1ticamente en el caso de soltar objetos en la aplicaci\xf3n 4D fuera de un contexto formulario o dialogo. Dependiendo de la plataforma y del tipo de aplicaci\xf3n, se soportan diferentes tipos de soltar:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Acci\xf3n"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Plataforma(s)"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Comentario"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Soltar en un \xe1rea vac\xeda de la ventana MDI"}),(0,t.jsx)(n.td,{children:"Windows"}),(0,t.jsxs)(n.td,{children:["No disponible cuando la base se ejecuta en modo SDI ya que no hay ninguna ventana MDI en este contexto (consulte la secci\xf3n ",(0,t.jsx)(n.em,{children:"Modo SDI en Windows"}),")."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Soltar en el icono 4D en el Dock"}),(0,t.jsx)(n.td,{children:"macOS"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Soltar en el icono 4D en el escritorio del sistema"}),(0,t.jsx)(n.td,{children:"Windows(*) y macOS"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"M\xe9todo base On Drop"})," se llama \xfanicamente, si la aplicaci\xf3n ya ha sido lanzada, excepto en el caso de las aplicaciones fusionadas con 4D Desktop. En este caso, el m\xe9todo base se llama incluso cuando la base no ha sido lanzada. Esto significa que es posible definir firmas de documentos personalizadas."]})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"(*) No compatible con 4D Developer 64 bits en Windows porque esta acci\xf3n inicia una nueva instancia de aplicaci\xf3n (funcionalidad del sistema)."}),"\n",(0,t.jsxs)(n.p,{children:["Bajo Mac OS, debe presionar las teclas ",(0,t.jsx)(n.strong,{children:"Opci\xf3n"}),"+",(0,t.jsx)(n.strong,{children:"Comando"})," al soltar para que se llame el m\xe9todo de base."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Este ejemplo puede ser utilizado para abrir un documento 4D Write que fue soltado fuera de un formulario:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9todo base On Drop\n\xa0archivoSoltado:=Get file from pasteboard(1)\n\xa0If(Position(".4W7";droppedFile)=Length(archivoSoltado)-3)\n\xa0\xa0\xa0\xa0areaExterna:=Open external window(100;100;500;500;0;archivoSoltado;"_4D Write")\n\xa0\xa0\xa0\xa0WR OPEN DOCUMENT(areaExterna;archivoSoltado)\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Arrastrar y soltar"})})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return d}});var o=a(667294);let t={},s=o.createContext(t);function d(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);