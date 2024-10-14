"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42921],{733008:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=t(474848),r=t(28453);const o={id:"propertiesWebArea",title:"\xc1rea Web"},a=void 0,i={id:"FormObjects/propertiesWebArea",title:"\xc1rea Web",description:"---",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/FormObjects/properties_WebArea.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesWebArea",permalink:"/docs/pt/20-R5/FormObjects/propertiesWebArea",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_WebArea.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"propertiesWebArea",title:"\xc1rea Web"},sidebar:"docs",previous:{title:"Texto e imagem",permalink:"/docs/pt/20-R5/FormObjects/propertiesTextAndPicture"},next:{title:"Eventos formul\xe1rio",permalink:"/docs/pt/20-R5/Events/overview"}},d={},l=[{value:"Acesso a m\xe9todos 4D",id:"acesso-a-m\xe9todos-4d",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objectos suportados",id:"objectos-suportados",level:4},{value:"Progress\xe3o",id:"progress\xe3o",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-1",level:4},{value:"Objectos suportados",id:"objectos-suportados-1",level:4},{value:"URL",id:"url",level:2},{value:"Vari\xe1vel URL e comando WA OPEN URL",id:"vari\xe1vel-url-e-comando-wa-open-url",level:3},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-2",level:4},{value:"Objectos suportados",id:"objectos-suportados-2",level:4},{value:"Utilizar o motor de renderiza\xe7\xe3o Web integrado",id:"utilizar-o-motor-de-renderiza\xe7\xe3o-web-integrado",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-3",level:4},{value:"Objectos suportados",id:"objectos-suportados-3",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"acesso-a-m\xe9todos-4d",children:"Acesso a m\xe9todos 4D"}),"\n",(0,s.jsx)(n.p,{children:'You can call 4D methods from the JavaScript code executed in a Web area and get values in return. To be able to call 4D methods from a Web area, you must activate the 4D methods accessibility property ("all").'}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Esta propiedad s\xf3lo est\xe1 disponible si el \xe1rea web ",(0,s.jsx)(n.a,{href:"#use-embedded-web-rendering-engine",children:"utiliza el motor de renderizado web integrado"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Cuando esta propiedad est\xe1 activada, se instancia un objeto JavaScript especial llamado ",(0,s.jsx)(n.code,{children:"$4d"}),"en el \xe1rea web, que puede ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/FormObjects/webAreaOverview#4d-object",children:"utilizar para gestionar las llamadas a los m\xe9todos proyecto de 4D"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nome"}),(0,s.jsx)(n.th,{children:"Tipo de dados"}),(0,s.jsx)(n.th,{children:"Valores poss\xedveis"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"methodsAccessibility"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:'"none" (padr\xe3o), "all"'})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"objectos-suportados",children:"Objectos suportados"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/FormObjects/webAreaOverview",children:"\xc1rea web"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"progress\xe3o",children:"Progress\xe3o"}),"\n",(0,s.jsx)(n.p,{children:"Nome de uma vari\xe1vel do tipo Longint. This variable will receive a value between 0 and 100, representing the page load completion percentage in the Web area. Atualizado automaticamente por 4D, n\xe3o pode ser modificado manualmente."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["As of 4D v19 R5, this variable is no longer updated in Web Areas using the ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/FormObjects/webAreaOverview#web-rendering-engine",children:"Windows system rendering engine"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"gram\xe1tica-json-1",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nome"}),(0,s.jsx)(n.th,{children:"Tipo de dados"}),(0,s.jsx)(n.th,{children:"Valores poss\xedveis"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"progressSource"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Nome de uma vari\xe1vel Longint"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"objectos-suportados-1",children:"Objectos suportados"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/FormObjects/webAreaOverview",children:"\xc1rea web"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"url",children:"URL"}),"\n",(0,s.jsx)(n.p,{children:"A String type variable that designates the URL loaded or being loading by the associated Web area. The association between the variable and the Web area works in both directions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the user assigns a new URL to the variable, this URL is automatically loaded by the Web area."}),"\n",(0,s.jsx)(n.li,{children:"Any browsing done within the Web area will automatically update the contents of the variable."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Schematically, this variable functions like the address area of a Web browser. Pode represent\xe1-lo atrav\xe9s de uma \xe1rea de texto por cima da \xe1rea Web."}),"\n",(0,s.jsx)(n.h3,{id:"vari\xe1vel-url-e-comando-wa-open-url",children:"Vari\xe1vel URL e comando WA OPEN URL"}),"\n",(0,s.jsxs)(n.p,{children:["La variable URL produce los mismos efectos que el comando ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html",children:"WA OPEN URL"}),". No entanto, h\xe1 que assinalar as seguintes diferen\xe7as:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:['For access to documents, this variable only accepts URLs that are RFC-compliant ("file://c:/My%20Doc") and not system pathnames ("c:\\MyDoc"). El comando ',(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html",children:"WA OPEN URL"})," acepta ambas notaciones."]}),"\n",(0,s.jsxs)(n.li,{children:["If the URL variable contains an empty string, the Web area does not attempt to load the URL. El comando ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html",children:"WA OPEN URL"})," genera un error en este caso."]}),"\n",(0,s.jsxs)(n.li,{children:['Si la variable URL no contiene un protocolo (http, mailto, archivo, etc.), el \xe1rea web a\xf1ade "http://", lo que no ocurre con el comando ',(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html",children:"WA OPEN URL"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["When the Web area is not displayed in the form (when it is located on another page of the form), executing the ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1020.html",children:"WA OPEN URL"})," command has no effect, whereas assigning a value to the URL variable can be used to update the current URL."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"gram\xe1tica-json-2",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nome"}),(0,s.jsx)(n.th,{children:"Tipo de dados"}),(0,s.jsx)(n.th,{children:"Valores poss\xedveis"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"urlSource"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Um URL."})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"objectos-suportados-2",children:"Objectos suportados"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/FormObjects/webAreaOverview",children:"\xc1rea web"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"utilizar-o-motor-de-renderiza\xe7\xe3o-web-integrado",children:"Utilizar o motor de renderiza\xe7\xe3o Web integrado"}),"\n",(0,s.jsx)(n.p,{children:"This option allows choosing between two rendering engines for the Web area, depending on the specifics of your application:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"no marcado"})," - ",(0,s.jsx)(n.code,{children:"valor JSON: sistema"}),' (por defecto): en este caso, 4D utiliza el "mejor" motor correspondiente al sistema. This means that you automatically benefit from the latest advances in Web rendering, through HTML5 or JavaScript. No entanto, voc\xea poder\xe1 notar algumas diferen\xe7as de renderiza\xe7\xe3o entre as plataformas. No Windows, 4D usa Microsoft Edge WebView2. No macOS, 4D usa a vers\xe3o atual do WebKit (Safari).']}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'On Windows, if Microsoft Edge WebView2 is not installed, 4D uses the embedded engine as system rendering engine. To know if it is installed in your system, look for "Microsoft Edge WebView2 Runtime" in your applications panel.'}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"marcado"})," - ",(0,s.jsx)(n.code,{children:"valor JSON: anidado"}),": en este caso, 4D utiliza Chromium Embedded Framework (CEF). Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed). Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The Blink engine has the following limitations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1037.html",children:"WA SET PAGE CONTENT"}),": using this command requires that at least one page is already loaded in the area (through a call to ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1020.html",children:(0,s.jsx)(n.code,{children:"WA OPEN URL"})})," or an assignment to the URL variable associated to the area)."]}),"\n",(0,s.jsxs)(n.li,{children:["When URL drops are enabled by the ",(0,s.jsx)(n.code,{children:"WA enable URL drop"})," selector of the ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1041.html",children:"WA SET PREFERENCE"})," command, the first drop must be preceded by at least one call to ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1020.html",children:"WA OPEN URL"})," or one assignment to the URL variable associated to the area."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"gram\xe1tica-json-3",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nome"}),(0,s.jsx)(n.th,{children:"Tipo de dados"}),(0,s.jsx)(n.th,{children:"Valores poss\xedveis"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"webEngine"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:'"embedded", "system"'})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"objectos-suportados-3",children:"Objectos suportados"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/FormObjects/webAreaOverview",children:"\xc1rea web"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(296540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);