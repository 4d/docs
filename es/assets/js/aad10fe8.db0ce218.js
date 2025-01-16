"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94244"],{795859:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>t,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/open-printing-job","title":"OPEN PRINTING JOB","description":"OPEN PRINTING JOB","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-printing-job.md","sourceDirName":"commands-legacy","slug":"/commands/open-printing-job","permalink":"/docs/es/20-R7/commands/open-printing-job","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-printing-job.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-printing-job","title":"OPEN PRINTING JOB","slug":"/commands/open-printing-job","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Level","permalink":"/docs/es/20-R7/commands/level"},"next":{"title":"PAGE BREAK","permalink":"/docs/es/20-R7/commands/page-break"}}'),o=i("785893"),r=i("250065");let a={id:"open-printing-job",title:"OPEN PRINTING JOB",slug:"/commands/open-printing-job",displayed_sidebar:"docs"},d=void 0,t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"OPEN PRINTING JOB"})}),"\n\n\n\n\n\n\n\n",(0,o.jsx)(n.table,{children:(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Este comando no requiere par\xe1metros"}),(0,o.jsx)(n.th,{})]})})}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"OPEN PRINTING JOB"})," abre una tarea de impresi\xf3n y apila todas las \xf3rdenes de impresi\xf3n ejecutadas hasta que se llame el comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/close-printing-job",children:"CLOSE PRINTING JOB"}),". Este comando le permite controlar los trabajos de impresi\xf3n y, m\xe1s particularmente, asegurar que ninguna tarea de impresi\xf3n inesperada pueda ser insertada en una secuencia de impresi\xf3n."]}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"OPEN PRINTING JOB"})," puede utilizarse con todos los comandos de impresi\xf3n 4D, los comandos del editor de informes r\xe1pidos, y los comandos de impresi\xf3n de 4D Write Pro y 4D View Pro."]}),"\n",(0,o.jsx)(n.p,{children:"El trabajo de impresi\xf3n es local al proceso, cada proceso tiene su propia configuraci\xf3n de impresi\xf3n (opciones de impresi\xf3n, impresora actual, etc.). Varios trabajos de impresi\xf3n pueden estar abiertos al mismo tiempo en 4D."}),"\n",(0,o.jsxs)(n.p,{children:["Debe llamar al comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/close-printing-job",children:"CLOSE PRINTING JOB"})," para determinar el trabajo de impresi\xf3n y enviar el documento de impresi\xf3n a la impresora. Si omite este comando, el documento de impresi\xf3n permanecer\xe1 en la pila."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OPEN PRINTING JOB"})," utiliza la configuraci\xf3n de impresi\xf3n actual (configuraci\xf3n predeterminada o definida mediante el comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-print-option",children:"SET PRINT OPTION"}),"). Los comandos que modifican la configuraci\xf3n de impresi\xf3n deben ser llamados antes de ",(0,o.jsx)(n.strong,{children:"OPEN PRINTING JOB"}),", de lo contrario se genera un error (excepci\xf3n: el comando Orientation option puede ser llamado por el comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-print-option",children:"SET PRINT OPTION"})," dentro de un trabajo de impresi\xf3n)."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota de compatibilidad"}),": a partir de 4D v20 R4, los trabajos de impresi\xf3n no se bloquean en los nuevos proyectos. Para m\xe1s informaci\xf3n, consulte la documentaci\xf3n de la ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/settings/compatibility",children:"opci\xf3n de impresi\xf3n sin bloqueo"})," en los par\xe1metros de compatibilidad."]}),"\n",(0,o.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,o.jsx)(n.p,{children:"La variable sistema OK toma el valor 1 si el trabajo de impresi\xf3n se ha abierto con \xe9xito. De lo contrario, toma el valor 0, por ejemplo en los siguientes casos:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"si el trabajo de impresi\xf3n ha sido cancelado por el usuario"}),"\n",(0,o.jsx)(n.li,{children:"en Windows, el formato de vista previa de impresi\xf3n seleccionado no est\xe1 disponible"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/close-printing-job",children:"CLOSE PRINTING JOB"})}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"995"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modifica variables"}),(0,o.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return a}});var s=i(667294);let o={},r=s.createContext(o);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);