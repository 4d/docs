"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5967"],{990212:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/set-channel","title":"SET CHANNEL","description":"SET CHANNEL ( port ; param )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-channel.md","sourceDirName":"commands-legacy","slug":"/commands/set-channel","permalink":"/docs/fr/commands/set-channel","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-channel.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-channel","title":"SET CHANNEL","slug":"/commands/set-channel","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SEND VARIABLE","permalink":"/docs/fr/commands/send-variable"},"next":{"title":"SET TIMEOUT","permalink":"/docs/fr/commands/set-timeout"}}'),d=s("785893"),t=s("250065");let i={id:"set-channel",title:"SET CHANNEL",slug:"/commands/set-channel",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Travailler avec les ports s\xe9rie : REGLER SERIE(port;param)",id:"travailler-avec-les-ports-s\xe9rie--regler-serieportparam",level:4},{value:"Note sur les ports s\xe9rie",id:"note-sur-les-ports-s\xe9rie",level:5},{value:"Exemple 1",id:"exemple-1",level:5},{value:"Exemple 2",id:"exemple-2",level:5},{value:"Exemple 3",id:"exemple-3",level:5},{value:"Travailler avec des documents : REGLER SERIE(op\xe9ration;document)",id:"travailler-avec-des-documents--regler-serieop\xe9rationdocument",level:4},{value:"Exemple 4",id:"exemple-4",level:5},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET CHANNEL"})," ( ",(0,d.jsx)(n.em,{children:"port"})," ; ",(0,d.jsx)(n.em,{children:"param"})," )\xa0",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"SET CHANNEL"})," ( ",(0,d.jsx)(n.em,{children:"op\xe9ration"})," ; ",(0,d.jsx)(n.em,{children:"nomFichier"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"port"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Num\xe9ro de port s\xe9rie"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"param"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Param\xe8tres de communication"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SET CHANNEL ( op\xe9ration ; nomFichier )"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Param\xe8tre"}),(0,d.jsx)(n.td,{children:"Type"}),(0,d.jsx)(n.td,{children:"Description"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"op\xe9ration"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Op\xe9ration \xe0 effectuer sur document"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nomFichier"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nom du document"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"SET CHANNEL"})," permet d'ouvrir un port s\xe9rie ou un document. Vous ne pouvez ouvrir qu'un port s\xe9rie ou un document \xe0 la fois avec cette commande."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note historique :"})," A l'origine, ",(0,d.jsx)(n.strong,{children:"SET CHANNEL"})," a \xe9t\xe9 la premi\xe8re commande 4D permettant de travailler avec les ports s\xe9rie et des documents sur disque. Depuis, de nouvelles commandes ont \xe9t\xe9 ajout\xe9es. Aujourd'hui, vous pouvez g\xe9n\xe9ralement travailler avec des documents sur disque \xe0 l'aide des commandes ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/open-document",children:"Open document"}),", ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/create-document",children:"Create document"})," et ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/append-document",children:"Append document"}),", puis lire et \xe9crire des caract\xe8res dans les documents avec ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/create-document",children:"Create document"})," et ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-packet",children:"RECEIVE PACKET"})," (ces deux commandes fonctionnent aussi avec ",(0,d.jsx)(n.strong,{children:"SET CHANNEL"}),"). Cependant, si vous souhaitez utiliser les commandes ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/send-variable",children:"SEND VARIABLE"}),", ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-variable",children:"RECEIVE VARIABLE"}),", ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/send-record",children:"SEND RECORD"})," et ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-record",children:"RECEIVE RECORD"}),", vous devez appeler ",(0,d.jsx)(n.strong,{children:"SET CHANNEL"})," pour acc\xe9der aux documents sur disque."]}),"\n",(0,d.jsxs)(n.p,{children:["La description de la commande ",(0,d.jsx)(n.strong,{children:"SET CHANNEL"})," se compose de deux sections :"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Travailler avec les ports s\xe9rie"}),"\n",(0,d.jsx)(n.li,{children:"Travailler avec des documents"}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"travailler-avec-les-ports-s\xe9rie--regler-serieportparam",children:"Travailler avec les ports s\xe9rie : REGLER SERIE(port;param)"}),"\n",(0,d.jsxs)(n.p,{children:["La premi\xe8re syntaxe de ",(0,d.jsx)(n.strong,{children:"SET CHANNEL"})," ouvre un port s\xe9rie et d\xe9finit le protocole de communication ainsi que des informations suppl\xe9mentaires. Les donn\xe9es peuvent \xeatre envoy\xe9es par les commandes ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/send-packet",children:"SEND PACKET"}),", ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/send-record",children:"SEND RECORD"})," ou ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/send-variable",children:"SEND VARIABLE"}),", et re\xe7ues par les commandes ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-buffer",children:"RECEIVE BUFFER"}),", ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-packet",children:"RECEIVE PACKET"}),", ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-variable",children:"RECEIVE VARIABLE"})," ou ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-record",children:"RECEIVE RECORD"}),"."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Le premier param\xe8tre, ",(0,d.jsx)(n.em,{children:"port"}),", d\xe9finit le port et le protocole utilis\xe9s. Vous pouvez adresser jusqu'\xe0 99 ports s\xe9rie (un par un).",(0,d.jsx)(n.br,{}),"\nLe tableau suivant liste les valeurs possibles du param\xe8tre ",(0,d.jsx)(n.em,{children:"port"})," :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Valeurs port"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Description"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Port imprimante (Mac) ou COM2 (Windows) sans protocole"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Port modem (Mac) ou COM1 (Windows) sans protocole"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"20"}),(0,d.jsx)(n.td,{children:"Port imprimante (Mac) ou COM2 (Windows) avec protocole logiciel tel que XON/XOFF"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"21"}),(0,d.jsx)(n.td,{children:"Port modem (Mac) ou COM1 (Windows) avec protocole logiciel tel que XON/XOFF"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"30"}),(0,d.jsx)(n.td,{children:"Port imprimante (Mac) ou COM2 (Windows) avec protocole mat\xe9riel tel que RTS/CTS"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"31"}),(0,d.jsx)(n.td,{children:"Port modem (Mac) ou COM1 (Windows) avec protocole mat\xe9riel tel que RTS/CTS"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"101 \xe0 199"}),(0,d.jsx)(n.td,{children:"Communication s\xe9rie sans protocole*"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"201 \xe0 299"}),(0,d.jsx)(n.td,{children:"Communication s\xe9rie avec protocole logiciel tel que XON/XOFF*"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"301 \xe0 399"}),(0,d.jsx)(n.td,{children:"Communication s\xe9rie avec protocole mat\xe9riel tel que RTS/CTS*"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Important :"})," La valeur que vous passez dans ",(0,d.jsx)(n.em,{children:"port"}),' doit d\xe9signer un port s\xe9rie "logique" reconnu par votre syst\xe8me d\'exploitation. Par exemple, pour que vous puissiez utiliser les valeurs 101, 203 et 325, les ports s\xe9rie COM1, COM3 et COM25 doivent avoir \xe9t\xe9 correctement configur\xe9s.']}),"\n",(0,d.jsx)(n.h5,{id:"note-sur-les-ports-s\xe9rie",children:"Note sur les ports s\xe9rie"}),"\n",(0,d.jsx)(n.p,{children:"En standard, les syst\xe8mes Mac OS et Windows reconnaissent deux ports s\xe9rie logiques : sous Mac OS, le port modem et le port imprimante ; sous Windows, les ports COM1 et COM2. Toutefois, des ports s\xe9rie suppl\xe9mentaires peuvent \xeatre ajout\xe9s, par l'interm\xe9diaire de cartes d'extension. 4D n\u2019adressait \xe0 l'origine que les deux ports s\xe9rie standard, et a int\xe9gr\xe9 par la suite la gestion des ports s\xe9rie suppl\xe9mentaires. Pour des raisons de compatibilit\xe9, les deux syst\xe8mes d\u2019adressage ont \xe9t\xe9 conserv\xe9s."}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Si vous souhaitez adresser uniquement un port s\xe9rie standard (imprimante/COM2 ou modem/COM1), vous pouvez passer dans le param\xe8tre ",(0,d.jsx)(n.em,{children:"port"})," soit une des valeurs 0, 1, 20, 21, 30 et 31 (correspondant \xe0 l\u2019ancien mode de fonctionnement de 4D), soit une valeur > 100 (cf. ci-dessous)."]}),"\n",(0,d.jsxs)(n.li,{children:['Si vous souhaitez adresser des ports s\xe9rie "\xe9tendus", vous devez passer dans ',(0,d.jsx)(n.em,{children:"port"})," (pour adresser le Ni\xe8me port s\xe9rie) la valeur N+100, augment\xe9e \xe9ventuellement de 100 ou de 200, si vous voulez utiliser respectivement un protocole logiciel ou mat\xe9riel."]}),"\n"]}),"\n",(0,d.jsx)(n.h5,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,d.jsx)(n.p,{children:"Vous souhaitez utiliser le port imprimante/COM2 sans protocole, vous pouvez utiliser l'une des syntaxes suivantes :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(0;param)\n"})}),"\n",(0,d.jsx)(n.p,{children:"ou"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(102;param)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,d.jsx)(n.p,{children:"Vous souhaitez utiliser le port modem/COM1 avec le protocole XON/XOFF, vous pouvez utiliser l'une des syntaxes suivantes :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(21;param)\n"})}),"\n",(0,d.jsx)(n.p,{children:"ou"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(201;param)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,d.jsx)(n.p,{children:"Vous souhaitez utiliser le port COM25 avec le protocole RTS/CTS, vous devez utiliser la syntaxe suivante :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(325;param)\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Le second param\xe8tre, ",(0,d.jsx)(n.em,{children:"param"}),", permet de fixer la vitesse, le nombre de bits de donn\xe9es, le nombre de bits de stop et la parit\xe9. La valeur de ",(0,d.jsx)(n.em,{children:"param"})," se calcule en additionnant les valeurs de vitesse, de bits de donn\xe9es, de bits de stop et de parit\xe9, telles que d\xe9finies dans le tableau ci-dessous. Par exemple, pour param\xe9trer la communication \xe0 1200 bauds, 8 bits de donn\xe9es, 1 bit de stop et aucune parit\xe9, passez 19550 (soit 94 + 3072 + 16384 + 0) dans le param\xe8tre ",(0,d.jsx)(n.em,{children:"param"}),".",(0,d.jsx)(n.br,{}),"\n| ",(0,d.jsx)(n.strong,{children:"Contr\xf4le"}),"       | ",(0,d.jsx)(n.strong,{children:"Valeur"})," ",(0,d.jsx)(n.em,{children:"param"})," ",(0,d.jsx)(n.strong,{children:"(\xe0 cumuler)"})," | ",(0,d.jsx)(n.strong,{children:"Fonction"})," |",(0,d.jsx)(n.br,{}),"\n| ------------------ | ---------------------------------- | ------------ |",(0,d.jsx)(n.br,{}),"\n| Vitesse (en bauds) | 380                                | 300          |",(0,d.jsx)(n.br,{}),"\n| | 189              | 600                                |              |",(0,d.jsx)(n.br,{}),"\n| | 94               | 1200                               |              |",(0,d.jsx)(n.br,{}),"\n| | 62               | 1800                               |              |",(0,d.jsx)(n.br,{}),"\n| | 46               | 2400                               |              |",(0,d.jsx)(n.br,{}),"\n| | 30               | 3600                               |              |",(0,d.jsx)(n.br,{}),"\n| | 22               | 4800                               |              |",(0,d.jsx)(n.br,{}),"\n| | 14               | 7200                               |              |",(0,d.jsx)(n.br,{}),"\n| | 10               | 9600                               |              |",(0,d.jsx)(n.br,{}),"\n| | 4                | 19200                              |              |",(0,d.jsx)(n.br,{}),"\n| | 2                | 28800                              |              |",(0,d.jsx)(n.br,{}),"\n| | 1                | 38400                              |              |",(0,d.jsx)(n.br,{}),"\n| | 0                | 57600                              |              |",(0,d.jsx)(n.br,{}),"\n| | 1022             | 115200                             |              |",(0,d.jsx)(n.br,{}),"\n| | 1021             | 230400                             |              |",(0,d.jsx)(n.br,{}),"\n| Bits de donn\xe9es    | 0                                  | 5            |",(0,d.jsx)(n.br,{}),"\n| | 2048             | 6                                  |              |",(0,d.jsx)(n.br,{}),"\n| | 1024             | 7                                  |              |",(0,d.jsx)(n.br,{}),"\n| | 3072             | 8                                  |              |",(0,d.jsx)(n.br,{}),"\n| Bits de stop       | 16384                              | 1            |",(0,d.jsx)(n.br,{}),"\n| | \u201332768           | 1,5                                |              |",(0,d.jsx)(n.br,{}),"\n| | \u201316384           | 2                                  |              |",(0,d.jsx)(n.br,{}),"\n| Parit\xe9             | 0                                  | Aucune       |",(0,d.jsx)(n.br,{}),"\n| | 4096             | Impaire                            |              |",(0,d.jsx)(n.br,{}),"\n| | 12288            | Paire                              |              |"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Astuce :"})," Les diff\xe9rentes valeurs num\xe9rique \xe0 cumuler et \xe0 passer dans les param\xe8tres ",(0,d.jsx)(n.em,{children:"port"})," et ",(0,d.jsx)(n.em,{children:"param"})," (\xe0 l'exception des valeurs de COM1...COM99) sont disponibles en tant que ",(0,d.jsx)(n.strong,{children:"Constantes"})," pr\xe9d\xe9finies dans le th\xe8me ",(0,d.jsx)(n.em,{children:"Communications"})," de l'Explorateur, en mode D\xe9veloppement. Pour les valeurs de COM1...COM99, vous devez utiliser des valeurs num\xe9riques litt\xe9rales."]}),"\n",(0,d.jsxs)(n.p,{children:["Lorsque vous n'avez plus besoin d'un port s\xe9rie, vous devez le refermer. Pour cela, appelez de nouveau ",(0,d.jsx)(n.strong,{children:"SET CHANNEL"})," et passez-lui la valeur 11. Exemple :"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(11)\xa0//Referme un port s\xe9rie pr\xe9alablement ouvert\n"})}),"\n",(0,d.jsx)(n.h4,{id:"travailler-avec-des-documents--regler-serieop\xe9rationdocument",children:"Travailler avec des documents : REGLER SERIE(op\xe9ration;document)"}),"\n",(0,d.jsxs)(n.p,{children:["La seconde syntaxe de la commande ",(0,d.jsx)(n.strong,{children:"SET CHANNEL"})," vous permet de cr\xe9er, ouvrir ou fermer un document. A la diff\xe9rence des commandes du th\xe8me ",(0,d.jsx)(n.em,{children:"Documents syst\xe8me"}),", ",(0,d.jsx)(n.strong,{children:"SET CHANNEL"}),' ne permet d\'ouvrir qu\'un document \xe0 la fois. Le document peut \xeatre "lu \xe0 partir de" ou "\xe9crit dans". Reportez-vous \xe0 la section ',(0,d.jsx)(n.em,{children:"Pr\xe9sentation des documents syst\xe8me"})," pour plus d'informations sur ce point."]}),"\n",(0,d.jsxs)(n.p,{children:["Le premier param\xe8tre, ",(0,d.jsx)(n.em,{children:"op\xe9ration"}),", d\xe9finit l'op\xe9ration \xe0 effectuer avec le document d\xe9sign\xe9 par ",(0,d.jsx)(n.em,{children:"document"}),". Le tableau suivant dresse la liste les valeurs d'",(0,d.jsx)(n.em,{children:"op\xe9ration"})," et le r\xe9sultat obtenu, en fonction de la valeur de ",(0,d.jsx)(n.em,{children:"document"}),".",(0,d.jsx)(n.br,{}),"\nLa premi\xe8re colonne fournit les valeurs possibles du param\xe8tre ",(0,d.jsx)(n.em,{children:"op\xe9ration"}),". La deuxi\xe8me colonne fournit les valeurs possibles du param\xe8tre ",(0,d.jsx)(n.em,{children:"document"}),". La troisi\xe8me colonne d\xe9crit le r\xe9sultat obtenu. Par exemple, pour afficher un fichier de type texte dans une bo\xeete de dialogue standard d'ouverture de document, vous pouvez \xe9crire l'instruction suivante :"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0SET CHANNEL(13;"")\n'})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Op\xe9ration"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Document"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"R\xe9sultat"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"10"}),(0,d.jsx)(n.td,{children:"Cha\xeene"}),(0,d.jsx)(n.td,{children:"Ouvre le document dont le nom est sp\xe9cifi\xe9 par Cha\xeene. Si le document n'existe pas, il est cr\xe9\xe9 et ouvert."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"10"}),(0,d.jsx)(n.td,{children:'"" (cha\xeene vide)'}),(0,d.jsx)(n.td,{children:"Affiche la bo\xeete de dialogue d'ouverture de fichier. Tous les types de fichiers sont pr\xe9sent\xe9s."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"11"}),(0,d.jsx)(n.td,{children:"Aucun"}),(0,d.jsx)(n.td,{children:"Referme un fichier ouvert."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"12"}),(0,d.jsx)(n.td,{children:'"" (cha\xeene vide)'}),(0,d.jsx)(n.td,{children:"Affiche la bo\xeete de dialogue standard d'enregistement de fichier, permettant de cr\xe9er un nouveau fichier."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"13"}),(0,d.jsx)(n.td,{children:'"" (cha\xeene vide)'}),(0,d.jsx)(n.td,{children:"Affiche la bo\xeete de dialogue d'ouverture de fichier. Seuls les fichiers de type Texte sont pr\xe9sent\xe9s."})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"Toutes les op\xe9rations d\xe9crites dans ce tableau modifient la variable syst\xe8me Document en cons\xe9quence. De plus, la variable syst\xe8me OK prend la valeur 1 si l'op\xe9ration s'est d\xe9roul\xe9e correctement, 0 sinon."}),"\n",(0,d.jsx)(n.h5,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,d.jsxs)(n.p,{children:["Reportez-vous aux exemples des commandes ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-buffer",children:"RECEIVE BUFFER"}),", ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/set-timeout",children:"SET TIMEOUT"})," et ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-record",children:"RECEIVE RECORD"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/fr/commands/append-document",children:"Append document"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"Communications"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/create-document",children:"Create document"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/get-serial-port-mapping",children:"GET SERIAL PORT MAPPING"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/open-document",children:"Open document"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-buffer",children:"RECEIVE BUFFER"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-packet",children:"RECEIVE PACKET"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-record",children:"RECEIVE RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/send-packet",children:"SEND PACKET"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/send-record",children:"SEND RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/send-variable",children:"SEND VARIABLE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/set-timeout",children:"SET TIMEOUT"})]}),"\n",(0,d.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"77"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifie les variables"}),(0,d.jsx)(n.td,{children:"OK, Document"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var r=s(667294);let d={},t=r.createContext(d);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);