"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73514"],{72157:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/wa-run-offscreen-area","title":"WA Run offscreen area","description":"WA Run offscreen area ( parametros ) : any","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/wa-run-offscreen-area.md","sourceDirName":"commands-legacy","slug":"/commands/wa-run-offscreen-area","permalink":"/docs/es/commands/wa-run-offscreen-area","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-run-offscreen-area.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wa-run-offscreen-area","title":"WA Run offscreen area","slug":"/commands/wa-run-offscreen-area","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA REFRESH CURRENT URL","permalink":"/docs/es/commands/wa-refresh-current-url"},"next":{"title":"WA SET EXTERNAL LINKS FILTERS","permalink":"/docs/es/commands/wa-set-external-links-filters"}}'),a=s("785893"),d=s("250065");let i={id:"wa-run-offscreen-area",title:"WA Run offscreen area",slug:"/commands/wa-run-offscreen-area",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let n={a:"a",br:"br",code:"code",customproperty:"customproperty",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WA Run offscreen area"})," ( ",(0,a.jsx)(n.em,{children:"parametros"})," ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"parametros"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Objeto que contiene los atributos del \xe1rea web"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"any"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Propiedad .result del objeto onEvent, o Null si no devuelve un valor"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"WA Run offscreen area"})," crea un \xe1rea web en memoria que se puede utilizar para cargar y analizar autom\xe1ticamente las p\xe1ginas web."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," este comando utiliza el motor de renderizaci\xf3n web integrado."]}),"\n",(0,a.jsxs)(n.p,{children:["En el objeto ",(0,a.jsx)(n.em,{children:"parametros"}),", pase cualquiera de los siguientes atributos opcionales. Estas propiedades estar\xe1n disponibles a trav\xe9s del comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/this",children:"This "})," dentro del m\xe9todo ",(0,a.jsx)(n.em,{children:"onEvent"})," y hacen referencia a la instancia:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Propiedad"})}),(0,a.jsx)(n.th,{children:(0,a.jsxs)(n.strong,{children:["Tipo ",(0,a.jsx)(n.br,{})]})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"url"}),(0,a.jsx)(n.td,{children:"texto | objeto de archivo"}),(0,a.jsx)(n.td,{children:"La URL o el archivo que se cargar\xe1 en el \xe1rea web. Si se omite o es null, se carga una p\xe1gina en blanco."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"area"}),(0,a.jsx)(n.td,{children:"texto"}),(0,a.jsx)(n.td,{children:"El nombre del \xe1rea web. Si se omite o es null, se asigna un nombre gen\xe9rico (por ejemplo, OffscreenArea1)."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"onEvent"}),(0,a.jsx)(n.td,{children:"objeto (f\xf3rmula)"}),(0,a.jsxs)(n.td,{children:["Un m\xe9todo de retrollamada que se iniciar\xe1 cuando el \xe1rea web est\xe9 lista. Puede ser:",(0,a.jsx)(n.br,{})," una funci\xf3n ",(0,a.jsx)(n.em,{children:"onEvent"})," de una clase, o un objeto ",(0,a.jsx)(n.a,{href:"/docs/es/commands/formula",children:"Formula"}),"  Por defecto, el m\xe9todo de retrollamada se llama en los eventos On Load, On Unload, On End URL Loading, On URL Loading Error o On Timer."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"autoQuit"}),(0,a.jsx)(n.td,{children:"booleano"}),(0,a.jsxs)(n.td,{children:["True (valor predeterminado) si el comando debe detener la ejecuci\xf3n de la f\xf3rmula cuando se producen los eventos On End URL Loading o On URL Loading Error.",(0,a.jsx)(n.br,{}),(0,a.jsx)(n.br,{}),"Si es false, debe utilizar los comandos ",(0,a.jsx)(n.a,{href:"/docs/es/commands/cancel",children:"CANCEL"})," o ",(0,a.jsx)(n.a,{href:"/docs/es/commands/accept",children:"ACCEPT"})," en el m\xe9todo de retrollamada o m\xe9todos proyecto llamados con el objeto $4d para cerrar el \xe1rea web."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"timeout"}),(0,a.jsx)(n.td,{children:"real"}),(0,a.jsx)(n.td,{children:"Tiempo m\xe1ximo (expresado en segundos) antes de que el \xe1rea se cierre autom\xe1ticamente si ning\xfan evento se genera. Si se define en 0, no se aplica ninguna limitaci\xf3n. Valor predeterminado: 60"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"result"}),(0,a.jsx)(n.td,{children:"fusionado"}),(0,a.jsx)(n.td,{children:"Resultado del proceso a devolver (si lo hay)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.customproperty,{})}),(0,a.jsx)(n.td,{children:"fusionado"}),(0,a.jsx)(n.td,{children:"Todo atributo personalizado que est\xe9 disponible en la retrollamada o m\xe9todo $4d."})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"El comando agrega autom\xe1ticamente la siguiente propiedad si es necesario:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Propiedad"})}),(0,a.jsx)(n.th,{children:(0,a.jsxs)(n.strong,{children:["Tipo ",(0,a.jsx)(n.br,{})]})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"timeoutReached"}),(0,a.jsx)(n.td,{children:"booleano"}),(0,a.jsxs)(n.td,{children:["Agregado con valor ",(0,a.jsx)(n.strong,{children:"true"})," si se ha excedido el tiempo de espera"]})]})})]}),"\n",(0,a.jsxs)(n.p,{children:["Si se pasa un valor nulo en ",(0,a.jsx)(n.em,{children:"parametros"}),", se crear\xe1 un \xe1rea web en blanco y luego se cerrar\xe1 autom\xe1ticamente."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Notas"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["El \xe1rea web fuera de pantalla solo est\xe1 disponible durante la ejecuci\xf3n del comando ",(0,a.jsx)(n.strong,{children:"WA Run offscreen area"}),". Se destruir\xe1 autom\xe1ticamente una vez haya finalizado la ejecuci\xf3n."]}),"\n",(0,a.jsxs)(n.li,{children:["Los m\xe9todos 4D pueden llamarse desde el c\xf3digo JavaScript ejecutado en un \xe1rea web. Ver ",(0,a.jsx)(n.em,{children:"Acceder a los m\xe9todos 4D"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Los siguientes comandos se pueden usar en el m\xe9todo de retrollamada:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/accept",children:"ACCEPT"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/cancel",children:"CANCEL"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/set-timer",children:"SET TIMER"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/wa-evaluate-javascript",children:"WA Evaluate JavaScript"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/wa-execute-javascript-function",children:"WA EXECUTE JAVASCRIPT FUNCTION"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/wa-get-current-url",children:"WA Get current URL"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/wa-get-last-url-error",children:"WA GET LAST URL ERROR"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/wa-get-page-content",children:"WA Get page content"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/wa-get-page-title",children:"WA Get page title"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/wa-open-url",children:"WA OPEN URL"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/wa-refresh-current-url",children:"WA REFRESH CURRENT URL"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/wa-stop-loading-url",children:"WA STOP LOADING URL"})}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Desea crear y manejar un \xe1rea web fuera de pantalla utilizando una funci\xf3n de su clase OffscreenArea:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0$config:=cs.OffscreenArea.new()\n\xa0$result:=WA Run offscreen area($config)\n\xa0If($config.timeoutReached)\xa0//devuelto autom\xe1ticamente en caso de tiempo de espera\n\xa0\xa0\xa0\xa0ALERT("Timeout reached")\n\xa0End if\n'})}),"\n",(0,a.jsxs)(n.p,{children:["En la ",(0,a.jsx)(n.strong,{children:"clase OffscreenArea"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0Class constructor\n\xa0This.url:=File("/RESOURCES/compute.html")\n\xa0This.area:="myWAOffscreen"\n\xa0\n\xa0Function onEvent\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event.code=On End URL Loading)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0This.result:=WA Evaluate JavaScript(*;This.area;"myJSMethod();")\n\xa0End case\n'})}),"\n",(0,a.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,a.jsxs)(n.p,{children:["La variable del sistema OK se define en 0 si se ha alcanzado el tiempo de espera o se ha llamado a ",(0,a.jsx)(n.a,{href:"/docs/es/commands/cancel",children:"CANCEL"})," en ",(0,a.jsx)(n.em,{children:"onEvent"}),", de lo contrario, se define en 1."]}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/form-event",children:"FORM Event"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"Gesti\xf3n programada de \xe1reas web"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/wa-open-web-inspector",children:"WA OPEN WEB INSPECTOR"})]}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"1727"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Modifica variables"}),(0,a.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var r=s(667294);let a={},d=r.createContext(a);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);