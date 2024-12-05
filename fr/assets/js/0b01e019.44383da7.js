"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34725"],{161915:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/wa-run-offscreen-area","title":"WA Run offscreen area","description":"WA Run offscreen area ( param\xe8tres ) : any","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/wa-run-offscreen-area.md","sourceDirName":"commands-legacy","slug":"/commands/wa-run-offscreen-area","permalink":"/docs/fr/commands/wa-run-offscreen-area","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-run-offscreen-area.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-run-offscreen-area","title":"WA Run offscreen area","slug":"/commands/wa-run-offscreen-area","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA REFRESH CURRENT URL","permalink":"/docs/fr/commands/wa-refresh-current-url"},"next":{"title":"WA SET EXTERNAL LINKS FILTERS","permalink":"/docs/fr/commands/wa-set-external-links-filters"}}'),t=s("785893"),a=s("250065");let i={id:"wa-run-offscreen-area",title:"WA Run offscreen area",slug:"/commands/wa-run-offscreen-area",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){let n={a:"a",br:"br",code:"code",customproperty:"customproperty",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WA Run offscreen area"})," ( ",(0,t.jsx)(n.em,{children:"param\xe8tres"})," ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"param\xe8tres"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objet contenant les attributs de la zone web"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valeur retourn\xe9e par la m\xe9thode callback (ou m\xe9thode de r\xe9tro-appel)"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"WA Run offscreen area"})," cr\xe9e une zone web dans la m\xe9moire qui peut \xeatre utilis\xe9e pour charger et parser automatiquement des pages web."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"})," : Cette commande utilise le moteur de rendu web int\xe9gr\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans l'objet ",(0,t.jsx)(n.em,{children:"param\xe8tres"}),", passez l'un des propri\xe9t\xe9s optionnelles suivantes pour la zone web. Ces propri\xe9t\xe9s seront disponibles via la commande ",(0,t.jsx)(n.a,{href:"this.md",children:"This"})," dans la m\xe9thode onEvent et r\xe9f\xe9rencent cette instance :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"url"}),(0,t.jsx)(n.td,{children:"objet texte | fichier"}),(0,t.jsx)(n.td,{children:"L'URL ou le fichier \xe0 charger dans la zone web. S'il est omis, une page blanche est charg\xe9e."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"texte"}),(0,t.jsx)(n.td,{children:"Le nom de la zone web. S'il est omis ou null, un nom g\xe9n\xe9rique est attribu\xe9 (ex : OffscreenArea1)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onEvent"}),(0,t.jsx)(n.td,{children:"objet (formule)"}),(0,t.jsxs)(n.td,{children:["Une m\xe9thode callback qui est lanc\xe9e lorsque la zone web est pr\xeate. Elle peut \xeatre soit :",(0,t.jsx)(n.br,{})," une fonction ",(0,t.jsx)(n.em,{children:"onEvent"})," d'une classe, ou un objet ",(0,t.jsx)(n.a,{href:"formula.md",children:"Formula"}),"  ",(0,t.jsx)(n.br,{}),"Par d\xe9faut, la m\xe9thode callback est appel\xe9e sur les \xe9v\xe9nements On Load, On Unload, On End URL Loading, On URL Loading Error, ou On Timer."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"autoQuit"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsxs)(n.td,{children:["Vrai (valeur par d\xe9faut) si la commande doit stopper l'ex\xe9cution de la formule lorsque les \xe9v\xe9nement On End URL Loading ou On URL Loading Error se produisent.",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.br,{}),(0,t.jsx)(n.br,{}),"Si faux, vous devez utiliser les commandes ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/cancel",children:"CANCEL"})," ou ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/accept",children:"ACCEPT"})," dans la m\xe9thode callback ou les m\xe9thodes projet appel\xe9es avec l'objet $4d pour fermer la zone web."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timeout"}),(0,t.jsx)(n.td,{children:"r\xe9el"}),(0,t.jsx)(n.td,{children:"Dur\xe9e maximale (en secondes) avant la fermeture automatique de la zone, si aucun \xe9v\xe9n\xe9ment n'est g\xe9n\xe9r\xe9. Si elle est d\xe9finie sur 0, aucune limitation n'est appliqu\xe9e. Valeur par d\xe9faut : 60"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"result"}),(0,t.jsx)(n.td,{children:"mixte"}),(0,t.jsx)(n.td,{children:"R\xe9sultat du traitement \xe0 retourner (le cas \xe9ch\xe9ant)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.customproperty,{})}),(0,t.jsx)(n.td,{children:"mixte"}),(0,t.jsx)(n.td,{children:"Un attribut personnalis\xe9 disponible dans la m\xe9thode callback ou $4d."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"La propri\xe9t\xe9 suivante est automaiquement ajout\xe9e par la commande, si n\xe9cessaire :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timeoutReached"}),(0,t.jsx)(n.td,{children:"bool\xe9en"}),(0,t.jsxs)(n.td,{children:["Ajout\xe9e avec la valeur ",(0,t.jsx)(n.strong,{children:"true"})," si le timeout s'est \xe9coul\xe9"]})]})})]}),"\n",(0,t.jsxs)(n.p,{children:["Si une valeur null est pass\xe9e dans ",(0,t.jsx)(n.em,{children:"param\xe8tres"}),", une zone web vide sera cr\xe9\xe9e puis automatiquement ferm\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Notes"})," :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["La zone web hors \xe9cran est disponible uniquement durant l'ex\xe9cution de la commande ",(0,t.jsx)(n.strong,{children:"WA Run offscreen area."})," Elle sera automatiquement d\xe9truite une fois que l'ex\xe9cution est termin\xe9e."]}),"\n",(0,t.jsxs)(n.li,{children:["Les m\xe9thodes 4D peuvent \xeatre appel\xe9es avec le code JavaScript qui est ex\xe9cut\xe9 dans une zone web. Voir ",(0,t.jsx)(n.em,{children:"Acc\xe9der aux m\xe9thodes 4D"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Les commandes suivantes peuvent \xeatre utilis\xe9es dans la m\xe9thode callback :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/accept",children:"ACCEPT"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/cancel",children:"CANCEL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-timer",children:"SET TIMER"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/wa-evaluate-javascript",children:"WA Evaluate JavaScript"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/wa-execute-javascript-function",children:"WA EXECUTE JAVASCRIPT FUNCTION"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/wa-get-current-url",children:"WA Get current URL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/wa-get-last-url-error",children:"WA GET LAST URL ERROR"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/wa-get-page-content",children:"WA Get page content"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/wa-get-page-title",children:"WA Get page title"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/wa-open-url",children:"WA OPEN URL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/wa-refresh-current-url",children:"WA REFRESH CURRENT URL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/wa-stop-loading-url",children:"WA STOP LOADING URL"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez cr\xe9er et g\xe9rer une zone web hors \xe9cran \xe0 l'aide d'une fonction de votre classe OffscreenArea :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$config:=cs.OffscreenArea.new()\n\xa0$result:=WA Run offscreen area($config)\n\xa0If($config.timeoutReached)\xa0//retourn\xe9 automatiquement en cas de timeout\n\xa0\xa0\xa0\xa0ALERT("Timeout \xe9coul\xe9")\n\xa0End if\n'})}),"\n",(0,t.jsxs)(n.p,{children:["dans la ",(0,t.jsx)(n.strong,{children:"classe OffscreenArea"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0Class constructor\n\xa0This.url:=File("/RESOURCES/compute.html")\n\xa0This.area:="myWAOffscreen"\n\xa0\n\xa0Function onEvent\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event.code=On End URL Loading)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0This.result:=WA Evaluate JavaScript(*;This.area;"myJSMethod();")\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsxs)(n.p,{children:["La variable syst\xe8me OK est d\xe9finie sur 0 si le timeout a \xe9t\xe9 atteint ou si la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/cancel",children:"CANCEL"})," a \xe9t\xe9 appel\xe9e dans onEvent, sinon elle est d\xe9finie sur 1."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"form-event.md",children:"FORM Event"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Gestion programm\xe9e des zones Web"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/wa-open-web-inspector",children:"WA OPEN WEB INSPECTOR"})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var r=s(667294);let t={},a=r.createContext(t);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);