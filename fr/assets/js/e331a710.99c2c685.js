"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93692"],{345244:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>o,frontMatter:()=>c});var s=JSON.parse('{"id":"ViewPro/commands/vp-run-offscreen-area","title":"VP Run offscreen area","description":"VP Run offscreen area ( parameters Mixed","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-run-offscreen-area.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-run-offscreen-area","permalink":"/docs/fr/ViewPro/commands/vp-run-offscreen-area","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-run-offscreen-area.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-run-offscreen-area","title":"VP Run offscreen area"},"sidebar":"docs","previous":{"title":"VP ROW AUTOFIT","permalink":"/docs/fr/ViewPro/commands/vp-row-autofit"},"next":{"title":"S","permalink":"/docs/fr/commands-legacy/S"}}'),t=r("785893"),i=r("250065");let c={id:"vp-run-offscreen-area",title:"VP Run offscreen area"},d=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function l(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Run offscreen area"})," ( ",(0,t.jsx)(n.em,{children:"parameters"})," : Object) : Mixed"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parameters"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objet contenant les attributs de la zone hors \xe9cran"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Mixed"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:".result"})," property of the ",(0,t.jsx)(n.code,{children:".onEvent"})," object, or Null if does not return a value"]}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP Run offscreen area"})," command creates an offscreen area in memory which can be used to process 4D View Pro area commands and functions."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"parameters"})," object, pass any of the following optional properties. These properties will be available through the ",(0,t.jsx)(n.code,{children:"This"})," command within the ",(0,t.jsx)(n.code,{children:"onEvent"})," method and reference the instance:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Le nom de la zone hors \xe9cran. S'il est omis ou null, un nom g\xe9n\xe9rique est assign\xe9 (ex : OffscreenArea1)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onEvent"}),(0,t.jsx)(n.td,{children:"objet (formula)"}),(0,t.jsxs)(n.td,{children:["Une m\xe9thode callback qui sera lanc\xe9e lorsque la zone hors \xe9cran sera pr\xeate. It can be either:",(0,t.jsxs)(n.li,{children:["an ",(0,t.jsx)(n.code,{children:"onEvent"})," function of a class, or"]}),(0,t.jsxs)(n.li,{children:["a ",(0,t.jsx)(n.code,{children:"Formula"})," object"]}),"By default, the callback method is called on the ",(0,t.jsx)(n.a,{href:"/docs/fr/Events/onVpReady",children:(0,t.jsx)(n.code,{children:"On VP Ready"})}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/Events/onLoad",children:(0,t.jsx)(n.code,{children:"On Load"})}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/Events/onUnload",children:(0,t.jsx)(n.code,{children:"On Unload"})}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/Events/onEndUrlLoading",children:(0,t.jsx)(n.code,{children:"On End URL Loading"})}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/Events/onUrlLoadingError",children:(0,t.jsx)(n.code,{children:"On URL Loading Error"})}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/Events/onVpRangeChanged",children:(0,t.jsx)(n.code,{children:"On VP Range Changed"})}),", or ",(0,t.jsx)(n.a,{href:"/docs/fr/Events/onTimer",children:(0,t.jsx)(n.code,{children:"On Timer"})})," events. The callback method can be used to access the ",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/configuring#4d-view-pro-form-object-variable",children:"4D View Pro form object variable"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"autoQuit"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsxs)(n.td,{children:["True (default value) if the command must stop the formula execution when the ",(0,t.jsx)(n.a,{href:"/docs/fr/Events/onEndUrlLoading",children:(0,t.jsx)(n.code,{children:"On End URL Loading"})})," or ",(0,t.jsx)(n.a,{href:"/docs/fr/Events/onUrlLoadingError",children:(0,t.jsx)(n.code,{children:"On URL Loading Error"})})," events occur. If false, you must use the ",(0,t.jsx)(n.code,{children:"CANCEL"})," or ",(0,t.jsx)(n.code,{children:"ACCEPT"})," commands in the ",(0,t.jsx)(n.em,{children:"onEvent"})," callback method."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timeout"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"Dur\xe9e maximale (exprim\xe9e en secondes) avant la fermeture de la zone si aucun \xe9v\xe9nement n'est g\xe9n\xe9r\xe9. Si elle est fix\xe9e \xe0 0, aucune limitation n'est appliqu\xe9e. Valeur par d\xe9faut : 60"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"result"}),(0,t.jsx)(n.td,{children:"mixte"}),(0,t.jsx)(n.td,{children:"R\xe9sultat du traitement (le cas \xe9ch\xe9ant)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"<customProperty>"})}),(0,t.jsx)(n.td,{children:"mixte"}),(0,t.jsxs)(n.td,{children:["Any custom attribute to be available in the ",(0,t.jsx)(n.em,{children:"onEvent"})," callback method."]})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"La propri\xe9t\xe9 suivante est automatiquement ajout\xe9e par la commande, si n\xe9cessaire :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timeoutReached"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Ajout\xe9 avec la valeur vrai si le timeout a \xe9t\xe9 d\xe9pass\xe9"})]})})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["The offscreen area is only available during the execution of the ",(0,t.jsx)(n.code,{children:"VP Run offscreen area"})," command. Elle sera automatiquement d\xe9truite \xe0 la fin de l'ex\xe9cution."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Les commandes suivantes peuvent \xeatre utilis\xe9es dans la m\xe9thode callback (de r\xe9tro-appel) :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ACCEPT"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"CANCEL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"SET TIMER"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"WA Evaluate JavaScript"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"WA EXECUTE JAVASCRIPT FUNCTION"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez cr\xe9er une zone 4D View Pro hors \xe9cran et lire la valeur d'une cellule :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'// cs.OffscreenArea class declaration \nClass constructor ($path : Text)\n This.filePath:=$path\n \n// This function will be called on each event of the offscreen area \nFunction onEvent()\n Case of\n  :(FORM Event.code=On VP Ready)\n      VP IMPORT DOCUMENT(This.area;This.filePath)\n       This.result:=VP Get value(VP Cell(This.area;6;22))\n \n       ALERT("The G23 cell contains the value: "+String(This.result))\n End case\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"OffscreenArea"})," callback method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"$o:=cs.OffscreenArea.new()\n$result:=VP Run offscreen area($o)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez charger un grand document hors \xe9cran, attendre que tous les calculs soient termin\xe9s et l'exporter au format PDF :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'//cs.OffscreenArea class declaration\nClass constructor($pdfPath : Text)\n This.pdfPath:=$pdfPath\n This.autoQuit:=False\n This.isWaiting:=False\n \nFunction onEvent()\n Case of\n     :(FORM Event.code=On VP Ready)\n // Document import\n   VP IMPORT DOCUMENT(This.area;$largeDocument4VP)\n         This.isWaiting:=True\n \n // Start a timer to verify if all calculations are finished.\n // If during this period the "On VP Range Changed" is thrown, the timer will be restarted\n // The time must be defined according to the computer configuration.\n   SET TIMER(60)\n \n  :(FORM Event.code=On VP Range Changed)\n // End of calculation detected. Restarts the timer\n         If(This.isWaiting)\n           SET TIMER(60)\n         End if\n \n  :(FORM Event.code=On Timer)\n // To be sure to not restart the timer if you call others 4D View command after this point\n         This.isWaiting:=False\n \n\n\n // Stop the timer\n   SET TIMER(0)\n \n // Start the PDF export\n        VP EXPORT DOCUMENT(This.area;This.pdfPath;New object("formula";Formula(ACCEPT)))\n \n     :(FORM Event.code=On URL Loading Error)\n\n         CANCEL \n End case\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"OffscreenArea"})," callback method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"$o:=cs.OffscreenArea.new()\n \n$result:=VP Run offscreen area($o)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://blog.4d.com/4d-view-pro-end-of-document-loading/",children:"Blog post: End of document loading"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return c}});var s=r(667294);let t={},i=s.createContext(t);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);