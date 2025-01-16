"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92215"],{98013:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/json-validate","title":"JSON Validate","description":"JSON Validate ( vJson ; vSchema ) : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/json-validate.md","sourceDirName":"commands-legacy","slug":"/commands/json-validate","permalink":"/docs/fr/commands/json-validate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-validate.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"json-validate","title":"JSON Validate","slug":"/commands/json-validate","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON TO SELECTION","permalink":"/docs/fr/commands/json-to-selection"},"next":{"title":"Selection to JSON","permalink":"/docs/fr/commands/selection-to-json"}}'),t=s("785893"),d=s("250065");let i={id:"json-validate",title:"JSON Validate",slug:"/commands/json-validate",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"JSON Validate"})," ( ",(0,t.jsx)(n.em,{children:"vJson"})," ; ",(0,t.jsx)(n.em,{children:"vSchema"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vJson"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objet JSON \xe0 valider"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vSchema"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Sch\xe9ma JSON utilis\xe9 pour valider les objets JSON"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Statut de la validation et erreurs (\xe9ventuellement)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"JSON Validate"})," v\xe9rifie la conformit\xe9 des contenus JSON de ",(0,t.jsx)(n.em,{children:"vJson"})," avec les r\xe8gles d\xe9finies dans le sch\xe9ma JSON ",(0,t.jsx)(n.em,{children:"vSchema"}),". Si le JSON est invalide, la commande renvoie une description d\xe9taill\xe9e de l'erreur ou des erreurs."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans ",(0,t.jsx)(n.em,{children:"vJson"})," un objet JSON contenant le contenu JSON \xe0 valider."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Valider une chaine JSON consiste \xe0 v\xe9rifier qu'elle suit les r\xe8gles d\xe9finies dans le sch\xe9ma JSON. C'est diff\xe9rent d'une v\xe9rification que le JSON est bien-form\xe9, ce que fait la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/json-parse",children:"JSON Parse"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans ",(0,t.jsx)(n.em,{children:"vSchema"})," le sch\xe9ma JSON \xe0 utiliser pour la validation. Pour plus d'information sur la fa\xe7on de cr\xe9er un sch\xe9ma JSON, vous pouvez consulter le site ",(0,t.jsx)(n.a,{href:"http://json-schema.org/",children:"json-schema.org"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Pour valider un objet JSON, 4D utilise la norme d\xe9crite dans le document ",(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/draft-wright-json-schema-validation-00",children:"JSON Schema Validation"})," (Ce document est toujours en phase d'\xe9criture et peut \xe9voluer dans le futur). L'impl\xe9mentation de 4D est bas\xe9e sur la version 4 de ce document."]}),"\n",(0,t.jsxs)(n.p,{children:["Si le sch\xe9ma JSON n'est pas valide, 4D retourne un objet ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/null",children:"Null"})," et g\xe9n\xe8re une erreur pouvant \xeatre d\xe9tect\xe9e par une m\xe9thode d'appel sur erreur."]}),"\n",(0,t.jsxs)(n.p,{children:["Le ",(0,t.jsx)(n.strong,{children:"JSON Validate"})," retourne un objet qui fournit le statut de la validation. Cet objet peut contenir les propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Nom de la propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"success"})}),(0,t.jsx)(n.td,{children:"Bool\xe9en"}),(0,t.jsxs)(n.td,{children:["True si ",(0,t.jsx)(n.em,{children:"vJson"})," est valid\xe9, False sinon. Si False, la propri\xe9t\xe9 ",(0,t.jsx)(n.em,{children:"errors"})," est aussi retourn\xe9e"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"errors"})}),(0,t.jsx)(n.td,{children:"Collection d'objets"}),(0,t.jsxs)(n.td,{children:["Liste des objets Erreur dans le cas o\xf9 ",(0,t.jsx)(n.em,{children:"vJson"})," n'est pas valid\xe9 (voir ci-dessous)"]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Chaque objet Erreur de la collection ",(0,t.jsx)(n.em,{children:"errors"})," contient les propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Nom de la propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"code"})}),(0,t.jsx)(n.td,{children:"Nombre"}),(0,t.jsx)(n.td,{children:"Code d'erreur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"jsonPath"})}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsxs)(n.td,{children:["Chemin d'acc\xe8s JSON qui ne peut pas \xeatre valid\xe9 dans ",(0,t.jsx)(n.em,{children:"vJson"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"line"})}),(0,t.jsx)(n.td,{children:"Nombre"}),(0,t.jsxs)(n.td,{children:["Num\xe9ro de ligne de l'erreur dans le fichier JSON. Cette propri\xe9t\xe9 est renseign\xe9e si le fichier JSON est analys\xe9 par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/json-parse",children:"JSON Parse"})," avec le param\xe8tre ",(0,t.jsx)(n.em,{children:"*"}),". Sinon la propri\xe9t\xe9 est omise"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"message"})}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:"Message de l'erreur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"offset"})}),(0,t.jsx)(n.td,{children:"Nombre"}),(0,t.jsxs)(n.td,{children:["D\xe9calage de la ligne de l'erreur dans le fichier JSON. Cette propri\xe9t\xe9 est renseign\xe9e si le fichier JSON est analys\xe9 par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/json-parse",children:"JSON Parse"})," avec le param\xe8tre ",(0,t.jsx)(n.em,{children:"*"}),". Sinon la propri\xe9t\xe9 est omise"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"schemaPaths"})}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:"Chemin d'acc\xe8s JSON dans le sch\xe9ma qui cause l'erreur de validation"})]})]})]}),"\n",(0,t.jsx)(n.h5,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsx)(n.p,{children:"Les erreurs suivantes peuvent \xeatre retourn\xe9es :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Code"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Mot-cl\xe9 JSON"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Message"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"multipleOf"}),(0,t.jsx)(n.td,{children:"Erreur \xe0 la validation d'une cl\xe9 'multipleOf'."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"maximum"}),(0,t.jsx)(n.td,{children:'La valeur entr\xe9e ne doit pas \xeatre sup\xe9rieure \xe0 ce que sp\xe9cifie le sch\xe9ma ("{s1}").'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"exclusiveMaximum"}),(0,t.jsx)(n.td,{children:'La valeur entr\xe9e doit \xeatre inf\xe9rieure \xe0 ce que sp\xe9cifie le sch\xe9ma ("{s1}").'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"minimum"}),(0,t.jsx)(n.td,{children:'La valeur entr\xe9e ne doit pas \xeatre inf\xe9rieure \xe0 ce que sp\xe9cifie le sch\xe9ma ("{s1}").'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"exclusiveMinimum"}),(0,t.jsx)(n.td,{children:'La valeur entr\xe9e doit \xeatre sup\xe9rieure par rapport \xe0 ce que sp\xe9cifie le sch\xe9ma ("{s1}").'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:"maxLength"}),(0,t.jsx)(n.td,{children:"La chaine est trop longue par rapport \xe0 ce que sp\xe9cifie le sch\xe9ma."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"minLength"}),(0,t.jsx)(n.td,{children:"La chaine est trop courte par rapport \xe0 ce que sp\xe9cifie le sch\xe9ma."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"9"}),(0,t.jsx)(n.td,{children:"pattern"}),(0,t.jsx)(n.td,{children:'La chaine "{s1}" n\'est pas valide selon le mod\xe8le du schema:{s2}'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"additionalItems"}),(0,t.jsx)(n.td,{children:"Erreur \xe0 la validation d'un tableau. Le JSON contient trop d'\xe9l\xe9ments par rapport \xe0 ce que sp\xe9cifie le sch\xe9ma."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"11"}),(0,t.jsx)(n.td,{children:"maxItems"}),(0,t.jsx)(n.td,{children:"Le tableau contient trop d'\xe9l\xe9ments par rapport \xe0 ce que sp\xe9cifie le sch\xe9ma."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"12"}),(0,t.jsx)(n.td,{children:"minItems"}),(0,t.jsx)(n.td,{children:"Le tableau ne contient pas assez d'\xe9l\xe9ments par rapport \xe0 ce que sp\xe9cifie le sch\xe9ma."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"13"}),(0,t.jsx)(n.td,{children:"uniqueItems"}),(0,t.jsx)(n.td,{children:'Erreur \xe0 la validation d\'un tableau. Des \xe9l\xe9ments ne sont pas uniques. Une autre instance de "{s1}" existe d\xe9j\xe0 dans le tableau.'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"14"}),(0,t.jsx)(n.td,{children:"maxProperties"}),(0,t.jsx)(n.td,{children:"Le nombre de propri\xe9t\xe9s est sup\xe9rieur \xe0 ce que sp\xe9cifie le sch\xe9ma."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"15"}),(0,t.jsx)(n.td,{children:"minProperties"}),(0,t.jsx)(n.td,{children:"Le nombre de propri\xe9t\xe9s est inf\xe9rieur \xe0 ce que sp\xe9cifie le sch\xe9ma."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"16"}),(0,t.jsx)(n.td,{children:"required"}),(0,t.jsx)(n.td,{children:'La propri\xe9t\xe9 requise "{s1}" est manquante.'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17"}),(0,t.jsx)(n.td,{children:"additionalProperties"}),(0,t.jsx)(n.td,{children:"Aucune propri\xe9t\xe9 additionnelle n'est autoris\xe9e par le sch\xe9ma. La(es) propri\xe9t\xe9(s) {s1} doit(vent) \xeatre retir\xe9e(s)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18"}),(0,t.jsx)(n.td,{children:"dependencies"}),(0,t.jsx)(n.td,{children:'La propri\xe9t\xe9 "{s1}" n\xe9cessite la pr\xe9sence de la propri\xe9t\xe9 "{s2}".'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19"}),(0,t.jsx)(n.td,{children:"enum"}),(0,t.jsx)(n.td,{children:"Erreur \xe0 la validation d'une cl\xe9 'enum'. La valeur \"{s1}\" n'est pas valid\xe9e par les \xe9l\xe9ments du sch\xe9ma."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20"}),(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"Type incorrect. Le type attendu est: {s1}."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"21"}),(0,t.jsx)(n.td,{children:"oneOf"}),(0,t.jsx)(n.td,{children:"Erreur \xe0 la validation d'une cl\xe9 'oneOf'. Le JSON a plus qu'une seule valeur."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"22"}),(0,t.jsx)(n.td,{children:"oneOf"}),(0,t.jsx)(n.td,{children:"Erreur \xe0 la validation d'une cl\xe9 'oneOf'. Le JSON n'a aucune des valeurs requises."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"23"}),(0,t.jsx)(n.td,{children:"not"}),(0,t.jsx)(n.td,{children:"Erreur \xe0 la validation d'une cl\xe9 'not'. Le JSON est invalide face au 'not'."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"24"}),(0,t.jsx)(n.td,{children:"format"}),(0,t.jsx)(n.td,{children:'La cha\xeene ne correspond pas \xe0 ("{s1}")'})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez valider un objet JSON avec un sch\xe9ma et obtenir la liste des erreurs de validation, s'il y en a. Vous stockez les lignes d'erreur et les messages dans une variable texte :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $oResult : Object\n\xa0$oResult:=JSON Validate(JSON Parse(myJson;*);mySchema)\n\xa0If($oResult.success)\xa0\xa0//la validation a r\xe9ussi\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0//...\n\xa0Else\xa0\xa0//la validation a \xe9chou\xe9\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $vLNbErr : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $vTerrLine : Text\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vLNbErr:=$oResult.errors.length\xa0\xa0//obtenir le nombre d\'erreurs\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT(String($vLNbErr)+" validation error(s) found.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($i;0;$vLNbErr)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vTerrLine:=$vTerrLine+$oResult.errors[$i].message+" "+String($oResult.errors[$i].line)+Retour chariot\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0End if\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Cet exemple requiert l'activation de la notation objet (voir ",(0,t.jsx)(n.em,{children:"Page Compatibilit\xe9"}),")."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/json-parse",children:"JSON Parse"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1456"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);