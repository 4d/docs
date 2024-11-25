"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34969"],{428280:function(e,s,o){o.r(s),o.d(s,{metadata:()=>n,contentTitle:()=>i,default:()=>m,assets:()=>t,toc:()=>c,frontMatter:()=>d});var n=JSON.parse('{"id":"commands-legacy/mobile-app-refresh-sessions","title":"MOBILE APP REFRESH SESSIONS","description":"MOBILE APP REFRESH SESSIONS","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/mobile-app-refresh-sessions.md","sourceDirName":"commands-legacy","slug":"/commands/mobile-app-refresh-sessions","permalink":"/docs/pt/commands/mobile-app-refresh-sessions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmobile-app-refresh-sessions.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"mobile-app-refresh-sessions","title":"MOBILE APP REFRESH SESSIONS","slug":"/commands/mobile-app-refresh-sessions","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Load 4D View document","permalink":"/docs/pt/commands/load-4d-view-document"},"next":{"title":"Monitored activity","permalink":"/docs/pt/commands/monitored-activity"}}'),r=o("785893"),a=o("250065");let d={id:"mobile-app-refresh-sessions",title:"MOBILE APP REFRESH SESSIONS",slug:"/commands/mobile-app-refresh-sessions",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let s={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"MOBILE APP REFRESH SESSIONS"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(s.table,{children:(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,r.jsx)(s.th,{})]})})}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["O comando ",(0,r.jsx)(s.strong,{children:"MOBILE APP REFRESH SESSIONS"})," comprova todos os arquivos de sess\xe3o da aplica\xe7\xe3o m\xf3vel localizados na pasta MobileApps do servidor e atualiza o conte\xfado de sess\xe3o existente na mem\xf3ria para todo arquivo editado."]}),"\n",(0,r.jsxs)(s.p,{children:['Este comando est\xe1 criado para ser utilizado por 4D para os desenvolvedores de iOS para "for\xe7ar" a recarga da informa\xe7\xe3o da sess\xe3o do usu\xe1rio depois de terem editado seus arquivos locais. Por exemplo, se uma sess\xe3o necessitar ser reiniciado, pode eliminar o arquivo de sess\xe3o e depois chamar a ',(0,r.jsx)(s.strong,{children:"MOBILE APP REFRESH SESSIONS"}),". Para saber mais sobre as sess\xf5es de aplica\xe7\xf5es m\xf3veis, consulte a ",(0,r.jsx)(s.a,{href:"https://developer.4d.com/go-mobile",children:"documenta\xe7\xe3o de 4D m\xf3vel"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"O comando verifica o cumprimento de cada arquivo de sess\xe3o na pasta MobileApps (sintaxe json, esquema json, dados de sess\xe3o). Se o arquivo for compat\xedvel e tiver sido modificado, a sess\xe3o correspondente \xe9 atualizada na mem\xf3ria (se existir) com os conte\xfados editados."}),"\n",(0,r.jsx)(s.p,{children:"Se um arquivo de sess\xe3o n\xe3o for v\xe1lido ou tiver sido eliminado, a sess\xe3o correspondente \xe9 eliminada da mem\xf3ria."}),"\n",(0,r.jsxs)(s.p,{children:["O comando pode devolver um dos erros abaixo, que pode ser manejado atrav\xe9s dos comandos ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"})," e ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/last-errors",children:"Last errors"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Nome do componente"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"C\xf3digo de erro"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"mobi"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"A localiza\xe7\xe3o do arquivo json n\xe3o coincide com seu conte\xfado"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"mobi"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"O arquivo json n\xe3o est\xe1 formado corretamente"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"mobi"}),(0,r.jsx)(s.td,{children:"3"}),(0,r.jsx)(s.td,{children:"O arquivo json n\xe3o valida o esquema json"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"mobi"}),(0,r.jsx)(s.td,{children:"4"}),(0,r.jsx)(s.td,{children:"O token de conex\xe3o n\xe3o cumpre com a informa\xe7\xe3o atual"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(s.p,{children:"Se quiser resetar todas as sess\xf5es atuais para todas as aplica\xe7\xf5es m\xf3veis:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0var $sessionsPath : Text\n\xa0$sessionsPath:=Get 4D folder(MobileApps folder)\n\xa0DELETE FOLDER(sessionsPath;Delete with contents)\n\xa0MOBILE APP REFRESH SESSIONS\n"})}),"\n",(0,r.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/pt/commands/on-mobile-app-authentication-database-method",children:"On Mobile App Authentication database method"})})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,o){o.d(s,{Z:function(){return i},a:function(){return d}});var n=o(667294);let r={},a=n.createContext(r);function d(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);