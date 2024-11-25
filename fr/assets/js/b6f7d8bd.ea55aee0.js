"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2060"],{635508:function(e,n,l){l.r(n),l.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>c,assets:()=>a,toc:()=>u,frontMatter:()=>o});var t=JSON.parse('{"id":"commands-legacy/volume-attributes","title":"VOLUME ATTRIBUTES","description":"VOLUME ATTRIBUTES ( volume ; taille ; utilis\xe9 ; libre )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/volume-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/volume-attributes","permalink":"/docs/fr/commands/volume-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvolume-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"volume-attributes","title":"VOLUME ATTRIBUTES","slug":"/commands/volume-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"TEXT TO DOCUMENT","permalink":"/docs/fr/commands/text-to-document"},"next":{"title":"VOLUME LIST","permalink":"/docs/fr/commands/volume-list"}}'),r=l("785893"),s=l("250065");let o={id:"volume-attributes",title:"VOLUME ATTRIBUTES",slug:"/commands/volume-attributes",displayed_sidebar:"docs"},i=void 0,a={},u=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function d(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VOLUME ATTRIBUTES"})," ( ",(0,r.jsx)(n.em,{children:"volume"})," ; ",(0,r.jsx)(n.em,{children:"taille"})," ; ",(0,r.jsx)(n.em,{children:"utilis\xe9"})," ; ",(0,r.jsx)(n.em,{children:"libre"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"volume"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom du volume"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"taille"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Taille du volume exprim\xe9e en octets"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"utilis\xe9"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Place utilis\xe9e sur le volume exprim\xe9e en octets"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"libre"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Place libre sur le volume exprim\xe9e en octets"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"VOLUME ATTRIBUTES"})," retourne la taille, la place utilis\xe9e et la place libre sur le volume dont le nom est pass\xe9 dans ",(0,r.jsx)(n.em,{children:"volume"}),". Ces valeurs sont exprim\xe9es en octets."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si ",(0,r.jsx)(n.em,{children:"volume"})," indique un volume distant non mont\xe9, la variable OK prend la valeur 0 et les trois param\xe8tres retournent -1."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Votre application comprend des op\xe9rations par lots qui sont ex\xe9cut\xe9es la nuit ou pendant le week-end. Ces op\xe9rations stockent des fichiers temporaires sur disque. Pour que cette m\xe9thode soit aussi autonome et souple que possible, vous \xe9crivez une routine qui va automatiquement chercher et utiliser le premier volume ayant de la place disponible pour les fichiers temporaires. Voici la m\xe9thode :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode projet Chercher volume pour place\n\xa0\xa0// Chercher volume pour place ( Reel ) -> Alpha\n\xa0\xa0// Chercher volume pour place ( Place n\xe9cessaire en octets ) -> Nom du volume ou cha\xeene vide\n\xa0\n\xa0C_STRING(31;$0)\n\xa0C_STRING(255;$vaNomDoc)\n\xa0var $vlNbVolumes;$vlVolume : Integer\n\xa0var $1;$vlTaille;$vlUtilis\xe9;$vlLibre : Real\n\xa0var $vhDocRef : Time\n\xa0\n\xa0\xa0// Initialiser le r\xe9sultat de la fonction\n\xa0$0:=""\n\xa0\xa0// Prot\xe9ger toutes les op\xe9rations d\'entr\xe9e/sortie par une m\xe9thode d\'interruption d\'erreur\n\xa0ON ERR CALL("METHODE ERREUR")\n\xa0\xa0// Obtenir la liste des volumes\n\xa0ARRAY STRING(31;$taVolumes;0)\n\xa0gErreur:=0\n\xa0VOLUME LIST($taVolumes)\n\xa0If(gErreur=0)\n\xa0\xa0// Si nous sommes sous Windows, ignorer les deux lecteurs de disquettes\n\xa0\xa0\xa0\xa0If(Sous Windows)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlVolume:=Find in array($taVolumes;"A:\\\\")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlVolume>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY($taVolumes;$vlVolume)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlVolume:=Find in array($taVolumes;"B:\\\\")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlVolume>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY($taVolumes;$vlVolume)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0$vlNbVolumes:=Size of array($taVolumes)\n\xa0\xa0// For each volume\n\xa0\xa0\xa0\xa0For($vlVolume;1;$vlNbVolumes)\n\xa0\xa0// Obtenir la taille, la place utilis\xe9e et la place libre\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0gErreur:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0VOLUME ATTRIBUTES($taVolumes{$vlVolume};$vlTaille;$vlUtilis\xe9;$vlLibre)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(gErreur=0)\n\xa0\xa0// Est-ce que la place libre est suffisante (plus 32K) ?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlLibre>=($1+32768))\n\xa0\xa0// Si oui, v\xe9rifier que le volume n\'est pas verrouill\xe9...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vaNomDoc:=$taVolumes{$vlVolume}+Char(Symbole s\xe9parateur)+"XYZ"+String(Hasard)+".TXT"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhDocRef:=Create document($vaNomDoc)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT($vaNomDoc)\n\xa0\xa0// Si tout est ok, retourner le nom du volume\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$taVolumes{$vlVolume}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlVolume:=$vlNbVolumes+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n\xa0ON ERR CALL("")\n'})}),"\n",(0,r.jsx)(n.p,{children:"cette m\xe9thode projet est ajout\xe9e \xe0 votre application, vous pouvez \xe9crire :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$vaVolume:=Chercher volume pour place(100*1024*1024)\n\xa0If($vaVolume#"")\n\xa0\xa0// Continuer\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Un volume avec au moins 100 Mo d\'espace libre est n\xe9cessaire !")\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/volume-list",children:"VOLUME LIST"})})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return o}});var t=l(667294);let r={},s=t.createContext(r);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);