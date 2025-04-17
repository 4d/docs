"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46934"],{850883:function(e,A,r){r.r(A),r.d(A,{default:()=>c,frontMatter:()=>l,metadata:()=>s,assets:()=>i,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/message","title":"MESSAGE","description":"MESSAGE ( message )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/message.md","sourceDirName":"commands-legacy","slug":"/commands/message","permalink":"/docs/fr/commands/message","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmessage.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"message","title":"MESSAGE","slug":"/commands/message","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GOTO XY","permalink":"/docs/fr/commands/goto-xy"},"next":{"title":"MESSAGES OFF","permalink":"/docs/fr/commands/messages-off"}}'),n=r("785893"),t=r("250065");let l={id:"message",title:"MESSAGE",slug:"/commands/message",displayed_sidebar:"docs"},a=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Exemple 4",id:"exemple-4",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let A={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(A.p,{children:[(0,n.jsx)(A.strong,{children:"MESSAGE"})," ( ",(0,n.jsx)(A.em,{children:"message"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(A.table,{children:[(0,n.jsx)(A.thead,{children:(0,n.jsxs)(A.tr,{children:[(0,n.jsx)(A.th,{children:"Param\xe8tre"}),(0,n.jsx)(A.th,{children:"Type"}),(0,n.jsx)(A.th,{}),(0,n.jsx)(A.th,{children:"Description"})]})}),(0,n.jsx)(A.tbody,{children:(0,n.jsxs)(A.tr,{children:[(0,n.jsx)(A.td,{children:"message"}),(0,n.jsx)(A.td,{children:"Text"}),(0,n.jsx)(A.td,{children:"\u2192"}),(0,n.jsx)(A.td,{children:"Message \xe0 afficher"})]})})]}),"\n",(0,n.jsx)(A.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(A.p,{children:["La commande ",(0,n.jsx)(A.strong,{children:"MESSAGE"})," affiche ",(0,n.jsx)(A.em,{children:"message"})," \xe0 l'\xe9cran dans une fen\xeatre sp\xe9ciale de message qui est ouverte et referm\xe9e \xe0 chaque fois que vous l'appelez (\xe0 moins que vous ne travailliez dans une fen\xeatre pr\xe9alablement ouverte par la commande ",(0,n.jsx)(A.a,{href:"/docs/fr/commands/open-window",children:"Open window"}),", cf. ci-dessous). Le message est temporaire et est effac\xe9 d\xe8s qu'un formulaire est affich\xe9 ou d\xe8s que l'ex\xe9cution de la m\xe9thode est stopp\xe9e. Si une autre commande ",(0,n.jsx)(A.strong,{children:"MESSAGE"})," est ex\xe9cut\xe9e, le pr\xe9c\xe9dent message est effac\xe9."]}),"\n",(0,n.jsxs)(A.p,{children:[(0,n.jsx)(A.strong,{children:"MESSAGE"})," est g\xe9n\xe9ralement utilis\xe9e pour informer l'utilisateur du d\xe9roulement d'une action."]}),"\n",(0,n.jsxs)(A.p,{children:["Si une fen\xeatre a \xe9t\xe9 ouverte par la commande ",(0,n.jsx)(A.a,{href:"/docs/fr/commands/open-window",children:"Open window"}),", tous les appels ult\xe9rieurs \xe0 la commande ",(0,n.jsx)(A.strong,{children:"MESSAGE"})," affichent les messages dans cette fen\xeatre. Cette fen\xeatre se comporte en quelque sorte comme un terminal :"]}),"\n",(0,n.jsxs)(A.ul,{children:["\n",(0,n.jsx)(A.li,{children:"Chaque message successif n'efface pas le pr\xe9c\xe9dent, les messages se placent les uns \xe0 la suite des autres."}),"\n",(0,n.jsx)(A.li,{children:"Si un message est plus large que la fen\xeatre, 4D ins\xe8re automatiquement un retour \xe0 la ligne."}),"\n",(0,n.jsx)(A.li,{children:"Si le message contient plus de lignes que ne peut en afficher la fen\xeatre, 4D fait automatiquement d\xe9filer le message dans la fen\xeatre."}),"\n",(0,n.jsxs)(A.li,{children:["Si vous souhaitez contr\xf4ler les retours \xe0 la ligne, ins\xe9rez vos propres retours chariot dans votre texte, \xe0 l'aide de ",(0,n.jsx)(A.a,{href:"/docs/fr/commands/char",children:"Char"}),"(13)."]}),"\n",(0,n.jsxs)(A.li,{children:["Vous pouvez appeler la commande ",(0,n.jsx)(A.a,{href:"/docs/fr/commands/goto-xy",children:"GOTO XY"})," pour afficher le texte \xe0 un emplacement particulier dans la fen\xeatre."]}),"\n",(0,n.jsxs)(A.li,{children:["Vous pouvez appeler la commande ",(0,n.jsx)(A.a,{href:"/docs/fr/commands/erase-window",children:"ERASE WINDOW"})," pour effacer le contenu de la fen\xeatre."]}),"\n",(0,n.jsx)(A.li,{children:"La fen\xeatre est une fen\xeatre d'affichage statique : son contenu n'est pas redessin\xe9 lorsque d'autres fen\xeatres s'affichent par-dessus."}),"\n",(0,n.jsx)(A.li,{children:'La police et la taille des caract\xe8res affich\xe9s dans la fen\xeatre peuvent \xeatre modifi\xe9es via la page "Interface" des Propri\xe9t\xe9s de la base.'}),"\n"]}),"\n",(0,n.jsxs)(A.p,{children:[(0,n.jsx)(A.strong,{children:"Note :"})," ",(0,n.jsx)(A.strong,{children:"MESSAGE"})," est compatible avec la commande ",(0,n.jsx)(A.a,{href:"/docs/fr/commands/open-form-window",children:"Open form window"}),", toutefois dans ce contexte le second param\xe8tre ",(0,n.jsx)(A.em,{children:"*"})," de ",(0,n.jsx)(A.a,{href:"/docs/fr/commands/open-form-window",children:"Open form window"}),", permettant de conserver la taille et position de la fen\xeatre, n'est pas pris en charge."]}),"\n",(0,n.jsx)(A.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,n.jsxs)(A.p,{children:["L'exemple suivant traite une s\xe9lection d'enregistrements et appelle la commande ",(0,n.jsx)(A.strong,{children:"MESSAGE"})," pour informer l'utilisateur de la progression de l'op\xe9ration :"]}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-4d",children:"\xa0For($vlEnregistrement;1;Records in selection([touteTable]))\n\xa0\xa0\xa0\xa0MESSAGE(\"Traitement de l'enregistrement \"+String($vlEnregistrement))\n\xa0\xa0// Faire quelque chose avec l'enregistrement\n\xa0\xa0\xa0\xa0NEXT RECORD([touteTable])\n\xa0End for\n"})}),"\n",(0,n.jsxs)(A.p,{children:["La fen\xeatre suivante s'affiche puis dispara\xeet \xe0 chaque appel de ",(0,n.jsx)(A.strong,{children:"MESSAGE"})," :"]}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{src:r(61821).Z+"",width:"569",height:"139"})}),"\n",(0,n.jsx)(A.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,n.jsxs)(A.p,{children:["Afin d'\xe9liminer le \"clignotement\" de la fen\xeatre, il est pr\xe9f\xe9rable, comme dans ce deuxi\xe8me exemple, d'afficher les messages dans une fen\xeatre ouverte par l'interm\xe9diaire de la commande ",(0,n.jsx)(A.a,{href:"/docs/fr/commands/open-window",children:"Open window"})," :"]}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-4d",children:'\xa0Open window(50;50;500;250;5;"Op\xe9ration en cours")\n\xa0For($vlEnregistrement;1;Records in selection([touteTable]))\n\xa0\xa0\xa0\xa0MESSAGE("Traitement de l\'enregistrement "+String($vlEnregistrement))\n\xa0\xa0// Faire quelque chose avec l\'enregistrement\n\xa0\xa0\xa0\xa0NEXT RECORD([touteTable])\n\xa0End for\n\xa0CLOSE WINDOW\n'})}),"\n",(0,n.jsx)(A.p,{children:"Le r\xe9sultat est le suivant (sous Windows) :"}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{src:r(787969).Z+"",width:"456",height:"232"})}),"\n",(0,n.jsx)(A.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,n.jsx)(A.p,{children:"En ajoutant un retour chariot, vous am\xe9liorez la pr\xe9sentation :"}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-4d",children:'\xa0Open window(50;50;500;250;5;"Op\xe9ration en cours")\n\xa0For($vlEnregistrement;1;Records in selection([touteTable]))\n\xa0\xa0\xa0\xa0MESSAGE("Traitement de l\'enregistrement "+String($vlEnregistrement)+Caractere(Retour chariot))\n\xa0\xa0// Faire quelque chose avec l\'enregistrement\n\xa0\xa0\xa0\xa0NEXT RECORD([touteTable])\n\xa0End for\n\xa0CLOSE WINDOW\n'})}),"\n",(0,n.jsx)(A.p,{children:"Voici le r\xe9sultat (Sous Windows) :"}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{src:r(146810).Z+"",width:"456",height:"232"})}),"\n",(0,n.jsx)(A.h2,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,n.jsxs)(A.p,{children:["A l'aide de la commande ",(0,n.jsx)(A.a,{href:"/docs/fr/commands/goto-xy",children:"GOTO XY"})," et de l'\xe9criture de quelques lignes suppl\xe9mentaires, la pr\xe9sentation s'am\xe9liore nettement :"]}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-4d",children:'\xa0Open window(50;50;500;250;5;"Op\xe9ration en cours")\n\xa0$vlNbEnregistrements:=Records in selection([touteTable])\n\xa0$vhHeureD\xe9but:=Current time\n\xa0For($vlEnregistrement;1;$vlNbEnregistrements)\n\xa0\xa0\xa0\xa0GOTO XY(5;2)\n\xa0\xa0\xa0\xa0MESSAGE("Traitement de l\'enregistrement "+String($vlEnregistrement)+Caractere(Retour chariot))\n\xa0\xa0// Faire quelque chose avec les enregistrements\n\xa0\xa0\xa0\xa0NEXT RECORD([touteTable])\n\xa0\xa0\xa0\xa0GOTO XY(5;5)\n\xa0\xa0\xa0\xa0$vlReste:=(($vlNbEnregistrements/$vlEnregistrement)-1)*(Current time-$vhHeureD\xe9but)\n\xa0\xa0\xa0\xa0MESSAGE("Estimation du temps restant : "+Time string($vlReste))\n\xa0End for\n\xa0CLOSE WINDOW\n'})}),"\n",(0,n.jsx)(A.p,{children:"Voici le r\xe9sultat (sous Windows) :"}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{src:r(402989).Z+"",width:"456",height:"232"})}),"\n",(0,n.jsx)(A.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,n.jsxs)(A.p,{children:[(0,n.jsx)(A.a,{href:"/docs/fr/commands/close-window",children:"CLOSE WINDOW"}),(0,n.jsx)(A.br,{}),"\n",(0,n.jsx)(A.a,{href:"/docs/fr/commands/erase-window",children:"ERASE WINDOW"}),(0,n.jsx)(A.br,{}),"\n",(0,n.jsx)(A.a,{href:"/docs/fr/commands/goto-xy",children:"GOTO XY"}),(0,n.jsx)(A.br,{}),"\n",(0,n.jsx)(A.a,{href:"/docs/fr/commands/open-window",children:"Open window"})]}),"\n",(0,n.jsx)(A.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(A.table,{children:[(0,n.jsx)(A.thead,{children:(0,n.jsxs)(A.tr,{children:[(0,n.jsx)(A.th,{}),(0,n.jsx)(A.th,{})]})}),(0,n.jsxs)(A.tbody,{children:[(0,n.jsxs)(A.tr,{children:[(0,n.jsx)(A.td,{children:"Num\xe9ro de commande"}),(0,n.jsx)(A.td,{children:"88"})]}),(0,n.jsxs)(A.tr,{children:[(0,n.jsx)(A.td,{children:"Thread safe"}),(0,n.jsx)(A.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:A}={...(0,t.a)(),...e.components};return A?(0,n.jsx)(A,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},61821:function(e,A,r){r.d(A,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjkAAACLCAIAAAAMFB9tAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHFQ4qE81JPAYAAAOJSURBVHic7d0NaptgAIDhZOwIhV5h9z9Nr1DoHbpAmUhiEjUmvoPnodAg/nyV4uuXmu1wAICw7+/v4+nb1+fH3iMBgAlv739Orfq19zAA4Jbj8ahVANRpFQB1WgVAnVYBUKdVANRNtOrt/c/l15x9DavNXP9xtw/UHPYmY97WtYNeLl/0+wCwld+Xi4aPW50uSYs+euVzWnP8L2dpMlSrfzcAHrHgPcCfi9d4FnJ2iz1eYc5qZ+ucHWvOVofr9/6TC+fPtO4efc5POt5kcvZ2tsnlCdzrNEoRkDIxr7phuITduMU+vb672niFw7+pxqKtTi/GB5oc4eXCy9GOLTr6ooWTjbzc5Own2vE0ChWQsuzZiuES9uC17KxtK7baduXVO5x5lLurrdv5C04jQMGyedXY0icXnrHzJ+3wNWP+mdAMrwtDAmha2aqz95RurLnuLv41s6Jtj75iq/mPKkROI8AuHv181fw798jMYJcJ1rW/V22y8+dtBRCxcl41vH81fiNrbPx3+2GTpTufs9Xkkx2P7HDDMd8+S9cONPmkw4tP4+M7BNiQ/7/qRTwFDrDCzy3y+mcruGs8lxIqgNW06on0CWAT/u1aAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAOq0CoA6rQKgTqsAqNMqAACAB319fuw9BAC45S+81mmPpQJe4wAAAABJRU5ErkJggg=="},787969:function(e,A,r){r.d(A,{Z:function(){return s}});let s=r.p+"assets/images/pict25454.fr-63f237e28d748b66dd397ddb2e63d984.png"},146810:function(e,A,r){r.d(A,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcgAAADoCAIAAADkGOM/AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHFQ4qErpODJAAABzuSURBVHic7Z0LlCRVecdvPbp7Ztjd2YUFdtdd3iCoyfJUwMcRotGIwaARNcQE4/HBiRqTHDVGjslJQEE5MTl5CNFEEs3xHExQkyM+0RBAYqKyi6C4LPISWNiFXWZ3dqanq6tyb1V3dU1Vd/Wt6js9Penf78z2Vt++3/1u3e7691e36n5t7XniXpFg/e/MWpYjN4JGTT13rNYL1Qm1XXOE6wivKR8txwmagfB8YdvCFsJvN+HZAkYFZ7k7ACHWwnL3AEKC5BEht5uLXq1H/8k3qyoWPFENRW3BFlVXlQlP/TVCSawEQrhhZVc0AlHfteeGarIlN946/K3z8rG6+dnWIZOrJuzahCqclEI6IaZkIxNiMuyDE1rYvcXT93u+BEMm522CYcJBMTqkDgr51jQ9JWvxYy/mGumSmVCI982K/TOHrr/4x2LmwJ6vHRq9ZEURq1RVa91Gd+oQr9KsTKxeVVWqHGlrLYxcpWS7Ca2vtgV5oXc/AABGCq8doUZqFj315tuFE2lBsz3hd4JPUa8verXeNjwwq745608cFI88sOdGFboqYV3/xhkxvUE489ah62RR0JZ0u+Jatiusiltx60HgBKrctQO5XbOU8kaFUYl8KguDppAPniBSAujgLwTL3QVQ2FVLvhdBTQlX0+qcR1hzTasRWE5DNJt+ww2kkDUcUWnKU3+rEk6NKmlri67nSx0UgSsOzrcmS93wcX5O7N0nFib3/KvXVuPGbjF1aDB7oPVUSrfUS9/3bc+ueI1mqJS2quyFMxORhyiEldu271me09H65uKZC4DxhkBjVKiH70UYeLbOwP3wDN8PfBGIefX9FzR9+VQVHgyfLsh/bQmONpqq3Gp6gdI5L3qqFLbeEAfmxUP3CvELljj9FrHhWcJ6RkysbhnXKuox1FZl79hxDCuD2E4X/c6Ug+X7QaM9U+AxnzQ68A0HsJjshLeUUSmOSloX6aZQIhtXSswRRErqhSVeIM9HWuXyvKRxUG088kAYse56VExPWtbBoDbVtSdWuyvSLlUo1d0KLHV7gPDVjQFRTZ8THwAYPeJJVisMFiMl9ZR8WYnrVkFTFbUEtFUhormoREpqPMmz0BBWQ8wfFN6sUHcFzDwq1jwr47+SKQk70xbT0HlLT1XDcZciSW0irKNBwNnDaMAbMZrI96VpRaraDk5DLWvFpIt1zIvnWMNHe7GqRszbqrx+vysOVMQadfOpVRdBbVE7KhS1Atm6+t+xO54s0YpS/cTtq3GU6nH6CQCjihJNWziRpFoJCUtWyOBZYbiZuOXKr8pTeGGF87XVitLWBSmgrRsFOrcS+HYoq2qCtRLejBBOsAZW9KhuOxDh1IPUVjeKVaMqdnrOwmKmfmQgUAJI0hLTaKNNQ0qb2w5E3VZREi+uXEm/FEWjUl6ltjaawp8W9lPtVoKKsKvqqlazKhYcUXWkykrBlOppOR33trBibQ2jZ9GZVO30m0mAUYIvuRGBN2JE8BddkArltb3+ynJF4LUnUSvt6c1wFZbVFjqrqV4K4ov57StXrZP98MqVre5jdYW9TmmtF25LGW1/Ai47b/K9r5w8aYNS3h27mp+7Y/4j/zEntVWFq+F1f1uFwdkwWlzz5jV/+Kurtj/YOPX9u0vv/hOfOlI+Hvm2J0q3ADBCsI5mdLCitQGaJ3PVRXfWBM6iiVfbUhWE6NwY0N6OItaaqIT3A7SulKko9ROXrHpmzp98+a323bdsu+2yD12w7um99WtvS/fGdmy/NfFqqRNPx3r9ORN3PVA/99yPT5z80vnDj9Pc2TuuWH/KZnftpbviEqvpTT74g7ljztBsAWB0cftXgWFQ7hsuZ0my1FY/UFGq1NPmhJpjDSPWxWcozdbTmz+4rlaxvvLNn1lzs/ULLvvsjyZrVfsdL7Tc8M5/y5WNOfGf47qt5QehLh/97t0vuOQWv4iqSs4+qTo9ZU/e993oqYxVj37lNwrsOQBAX9zMl1xSM60o0HTVX5L4Rv7AVous4r8kwaIkLJbY9C2x+QgxNSXWVsWEq8TRsfZdt17K3CEbr2i++M3+mjWy3sKn183sr294w3Zv04lyW5Y8c9CXdR5+qnnc7+9TM6tesO2q6a1Hq/u0tj/onfr+vS13NxwelRxzhL32UjWtu+/6w6Sh3Hh4T/NT35q/4saDUZ1Why7eHT+V2/Jx28fWbT3GzTa74zHv6MMd+QUQt5Maw9KGN394+ozjXNlJuY833FF/+3UHclqL+5ndjvf679+x6jVn1o6YVg1e8+9zWY8AMDy89gWoBVulAxCxvIan/cmrU9HNrcnZgOxNTzLcVEsMwhxm+31hPS5+/l1bVFep2LU6oaYemm6YVsuJhE91YO0633bkn9xes7om9u6KtiWbjv/ITbfuOuow584PV2XAuu3qtVJVb7pj72f+5U4pQNs/OtWKaEN2bPvpv31n9+T9t8qStW99euqMG//s6v88ar3z7ldU3Oa89aY9UTUp5VO3Xhc/ldt3XLlWtvaF7+yJmv3vP52Imz1pk3vVPz/0V9f/WLbz9vMc2U4ijLa2fVzpYNf+5Bve/CfT5z+veu9Dc7KTTz6+98Q1+6v1Z3K6EfWz63a817/1kgmpqu+5+u6Fg3PnbJpJeVzCPwDoQrX1p5JLhUtM7ejsvRZey3I7ka3jhn/RAtjwjimn/ee7rQQtjiMqrqhYraDVmxWVNYsjXicKcRfPDzidrFbWg3c5W38pfnrhP055LxYnbZmsPPbTkzeqydDXv/Zvm6e97i2XiGdvrk08ec/8ESdGNS+97IvemW8Qm0+TzW27avXJmy6SAaMsP2JdtfLoPd6xL4jbPPjS3006Py0MEi/9jWuluWz21OMna3t21tcfE736scs/t3DuW37vUrHlyAn3iZ3ellNjw5M3OTn9yTE841gVdJ9//if8511w0uX2xGM/sSan87sRDVN2O97r+Ya6je2E6QObLjtQeWS7c+jRnvw+GwKkYwVI0XQ6swFedNGp2iqJnkWroxrNzqxBlCw1lQKlYrVqRxlaVUqXebFQFbVDhLIMppTcisTUQ+A+MxdMT6ragZiQIW5009XM/ih1QWJRlqW2azXXenJHrXKm3J59/PLolbDwPrHxlLjuwvQG+fjQXx5y1Hr7C995+rff89WDP7pEtfHQ98UJL+y06SzS+lqr9y1z2ay968fiyBPiCt7kmmjDvv92ccyZKcOc/vQynJ5qeayHXua3bNXpxqJuJ7aj+td8ZeF9v2K/551nv/JC77O3n3fFl0l7PGY0OXsYGeJoo+kLN4oxowv9DRXFNibUTVeSSpygqn0bQDU8bBeie7MSi6miydWgrrJWH+KFWalqoXEr42BFhauOqvXgnmDrFutvrrngbbepD8S1l6i+3Ltjd3BsJ7JTTYVJDet1z9r9s3ojkOojz+XjV9WduJVEtBtuS1UVKvT7u+a5b069lN1WjYfNxuXK154HetVPbmv2p5dhfqF+N6LtK29qXv3F/V+6zHvVizdc/hpbbns90jKYJUDARwRuYx1ZlLyGX3teGDJWwn+NxD1VUhGl1KqSautpkkb74peS2s7x5grXbVl7lpgKU7RaznW3+J94g3j1K05yv7G3serwC7cqZTnv1deLc39d2B3V+PK7wrtcdz4VHHn87fcH559sfeULv7l/1VG//FzrzoeDc65YdGtDuLZBbH/Y33qU/YH3vui0V2yJyuX2n9zrxsoVLL5oJ9s5+3jr+k9eNHGMSru9/e5dweHHJ+v02r59Z3D+Kf37k2N43j+4P/1o5elZZdirG1FoL3dh49m1nJYfuqby2L4J2U7wYrUayr37m40zXieGQLV/FYAxwuv2JDqfaB21YUAqpTZ5v2rDzehpeyMuDxrqyWoh5qY6jamUrmH0KlXVtqzr/ss/fFXzXS9x5v/pCFl435PBFZ/eEWw60d9yUnxK8/iO961Zbd/10MI5L/tUcNaFL/vr5rffWT/nrM21mj1z0P/61+6eeMqtJ06WozsZTvtzb9sHmx/+wEu/t9O760HvF4+pbtk8Xbln9ot3rnnj8x155m6/bVGUde5V3rY/9l//a8+V29/bMX/+q68PznqtldDeXtsv+wvv2+/2+vanl+HpWzcGn6lK3fz81x+beGrm3KtO6NqNr/7Iv+hUIXdnx+PNnJa/e78v9042+ORMcO0nb1OL2LixcZwIPGa7RwM3Ok6j1VZueNqu1uyLIPxThCcXvh9KY3xQtxe8xslR4wnRRlud1bxoXd3KqjIGyPPjo+8Sm9eKtZNitSO1VQqrVXGt8JqyMz/r3P8D6151b2nw/FcFR50STKh4bf7jSl3lWXZwwunWzh/6Z19U3/wcEc7eVp580N75P9au+4JjT/ee85JmOI87ceOVyuq1H4r3rvrIPfb/fsk/52LhLcgN7+Xv9FYfVnnmCefmT8c1k1ZRfbW/51y8sLF1ASpZIeuitfv9+pNn+OhPrAd+mDTs2g3ZbfueW6QL/7RX2Xfe1KvleO+CZ7/QO+GsqEEYE/wGS71Hj8bivFHJ5fhWVGKpjeT8eHZ9QdyIVFgZtM5Idd0pfv59S2y6Uxx7WCSs1kRNhquB+gXWUFjdQP4X2OHcohR1u+UgFlbvTR9qWlbWZeDxMQKAEWXR91xyO5WZrxmHsaKz0WqiPbXqJRqR2vpMQyz8RDyyPX1G6geBLVtXP1cYhIsFZBwa5Ny14wRBS1vdjrZaLtdARwK+4QCy2BWro60Vq6OtrrNIW1Veqva2WrIvg8t4nVZixsBb3Igqry8S1qDRbP1yVhgVN4XvqGWwKjVL9HpUrfYHwv38ldF2NmLlYAaAUab7zEw2kXQqV5/UOj++vaOPykXC2lkuG8zXm47rBOFFL6/SrPnCt5woiXVDtG8JCOqv+yP1/8KirgRq1ZaMcMnkMyo0m1wzAcjQEtb4d1aiZ0H6fD9+mpppTVqJxDxA0FkMm4hYZ2fVgi4ZDMtGmuE9rW5TzLlOda614sBxEj8gWPUzt+YFjcAK49UAaR0VOHsYEfhZjdHAa5/vq6nOpjqXl+FgdNotZVQ+9RKzmh11tNTvskgBlaf8bngvQSymSaxOGuy26b5ZsVaIJ/aIqmMpVJlfUfcAqNwC7aVEgZp7dYTTPlzlxmIhD1hhApCljrCOBuo2KSdcrpqh2c5y3ZlX9VVeq2ZisZYflij9jX5MMLyk3what29VpWC2Fv4svnhVDRsIpHQrfbQbrd9vie+GjVWzEzIHcTLW9gaMDEFAxDoScFSMCs3ckzgn8ZgqTFVI/trqZHtjfkIcnFGaatfc2qZDpreumdm9d+6G44Q4esBuAwCMLdaL7hOP7RL+AmuYAQAMg7ACABimI6xWN3SaiKtp1h+cfEej2W0jfTZLV6dd3/pCnwcASORhal/okMdPoYseXCHRYUWMUvKtj7e7FgJADv2nAqI4JRnfpYKXZAWdaqk6KV86VqJbtNU1pCoaevf1rrOnSZOucXHKJDuAyzWMXUUTJQUoiqszyaoTvMjtvtWSFUT7iC1kFYRYmbgp1XJOI1kKeS9U2FXQsyapPVrGYQSAgbBt4c0JzYtX8eE34HGYEuISVmYrl25Q00vfauUaX+phjALbbH2EGECTwvmW9U+ri3fG/DWcQg0Op89RqBhvj0KXUmQjXwAoRDFhTZ1a5tQsd0wOJ940672Elf61oBEZRoHOAhSh5H2s+jHROIeuveZYjTS+FFa96qOqAIUoFrHGp7HJ89kkyQsjsUnRxnWsul46G6RBg33OH6VejrLitbzDmDo1KdETgLGli7BmD++uT3M2slY5r5aw0r/mk6MC+b70vWv61dzNvo0PfxhRUoCiuEGTw8YwySgVVQIYQ/gVZvMgpgBjDklYAAAMg7ACABgGYQUAMAxpA0kbmC7MvvWFPg8A4AYiffNN0bvBuVajw4oYpUK5YACgC2H4QdrAYt519jRp0jUuTplkB3C5hnGQjDMAEKN1u5VO8BKQNpC0gQAQQtrAMg1qetFZRzug1VIMYxTYZr+6EGIATUgbOKj3olZF1/IPoUspspFvr0IA6AppAwf1XsJK/1rQiAwjABSCtIHGvGetes2xGml8KawMdhhgnCFtYJnK+Vb5o9TLUTZ6Xd5hzO5OoW4AjDOkDdQt6eVd06/mbvZtfNSGEQCykN3KPMkoFUkCGEMQVvMgpgBjDklYAAAMg7ACABjG5lYaAAAzSD0NlKaSNpC0genCXm89N7QCaNK5eKW/HCgF12p0WBGjlJO2BlUF0Ie0gcW86+xp0qRrXJwyyQ7gcg3jilB/gNGHtIGkDexPVFPz+wkASBtYpkFNLzrraAe0WophjAJboleA0pA2cFDvRa2KruUfQpdS5ITAAKCDW+iISZ1a5tQsdygOJ940672Elf51whEZxuTMLCIL0JPA0v3Nq67ox0TjHLr2mmM10vhSWHWtH7QRXN0C0IO0gWUq51vlj1IvR9lgcHmHEQ0FKA1pA3VLennX9Ku5m30bX5Zh7PsSACQhu5V5klEqYgQwhiCs5kFMAcYckrAAAJgiEGFcRdpAAADDIKwAAIYhbSBpA9OF2be+6EcCYMwhbeCQWBGjlJO2ZkX0H2BEIG1gMe86e5o06RoXp0yyA7hcw9hVPYt+0QIAaQNJG9ifeEdQWAAdZMTaP5rLX6ujT7lTy+Wdlyi6PKlQtXKNL/UwRoFtykusxZqNAIwp4SFC2sBBvRe1KrqWfwhdSpGKfIlSAYpSTFhTp5Y5NcsdjcOJN816L2Glf51wRIYRAApB2kBj3rNWveZYjTS+FFYGOwwwzpA2sEzlfKv8UerlKBu9Lu8wZnenUDcAxhnSBuqW9PKu6VdzN/s2PmrDCABZ3IDzPNMko1QkCWCcaB37pA00D2IKMOaQhAUAwDAIKwCAYRBWAADDkDaQtIHpwuxbX+jzAACkDRwSK2KUCuWCAYBe2JbecvVkfJcKXpIVdKql6qR86ViJbtFW15CqaOjd17vOniZNusbFKZPsAC7XMJbLGgMAbVoHCGkDSRuoRdIXAOSjdfEqf62OPvmrg3SszFYu3aCml3IBYCGrpRjGKLDNLrcNSBsIoAdpAwf1XtSq6Fr+IXQpRTbyJVAFKARpAwf1XsJK/1rQiAwjABSCtIHGvGetes2xGml8Kaw40wcwghsUOZYC0gZqWOWPUi9H2eh1eYcxuzuFugEwzpA2ULekl3dNv5q72bfxURtGAMhCdivzJKNUJAlgDEFYzYOYAow5JGEBADAMwgoAYJj+uQIAAEALq/WPtIGkDUwXpt76Eh8JgDGHtIFDYkWMUtekLaU/GABjS/85Vou0gb33t5eLuKRrXJwyyQ7gcg0juglgBNIGkjZQi0KVAcYc0gaWaVDTi8462gGtlmIYo8AWGQUoDWkDB/Ve1KroWv4hdClFNvIFgEK40c0BmqROLXNqljsmhxNvmvVewkr/ctCIDCMiC1AI0gYa85616jXHaqTxpbAyPuwA40mxqYCAtIEaVvmj1MtRNipc3mEkRAUoDWkDdUt6edf0q7mbfRsftWEEgCxktzJPMkpFkgDGEITVPIgpwJhDdisAAMMgrAAAhkFYAQAMQ9pA0gamC7NvfaHPAwCQNnBIrIhRKpQLBgB6QdrAYt519jRp0jUuTplkB3C5hhHRBDACaQNJGwgAhtES1vy1Ovrkrw7SsdKprBmfDuJds0t9O1Ou8aUexqReC9a5AhSHtIGDei9qVXQt/xC6lEIzBAaAXhQT1tQxllOz3OFn/KAdwlW4Elb6OjUiwwgAhSBtoDHvWatec6xGGl8KK+PDDjCekDawTOV8q/xR6uUoG70u7zAyxwpQGtIG6pb08q7pV3M3+zY+asMIAFnIbmWeZJSKJAGMIQireRBTgDGHJCwAAIZBWAEADIOwAgAYhrSBpA1MF2bf+kKfBwAgbeCQWBGjVCgXDAD0grSBxbzr7GnSpGtcnDLJDuByDSOiCWAE0gaSNhAADKN18Sp/rY4++auDdKzMVi7doKYXnXW0A1otxTBGgW22vmbgDwCkDRzUe1Gromv5h9ClFKnIN+iXIAIAUpA2cFDvJaz0rwWtxGEEANIGGvOeteo1x2qk8aWwMthhgHGGtIFlKudb5Y9SL0fZ6HV5hzG7O4W6ATCWWCI8REgbqFvSy7umX83d7Nv4qA0jAGQhu5V5klEqkgQwhiCs5kFMAcYckrAAABgGYQUAMAzCCgBgGNIGkjaw/0uFPg8A40sQiPAoIW3gkFhBo5RV1dKfDYDxhLSBxbzr7GnSpGtcnDLJDuAyDiMADA5pA0kb2KV7CC7AIJA2sEyDml501tEOaLVEwwgAg0DawEG9F7UqupZ/CF1KGqK/AIPjFjqMUqeWOTXLHZ/DiTfNei9hpX8taPjDmJyERWQBykHaQGPes1a95liNNL4UVkEbwdQBwACQNrBM5Xyr/FHq5SgbIQ5/GAdvEAAEaQP1S3p51/SruZt9G1/qYdTsBgDkQHYr8ySjVCQJYAxBWM2DmAKMOSRhAQAwhSXCuAphBQAwDMIKAGAY0gaSNlDrJbIHAOhD2sAhsYJGCVUFGBDSBhbzrrOnSZOucXHKJDuAyziMXYdlBX0rAIwCpA0kbWCX7iV7jqoCFIW0gWUa1PSis1p0QKslGkYAKEkYk5A2cFDvRa2KruUfQpeShugvwOAUE9bUqWVOzXLH53DiTbPeS1jpXycc/jAmJ2ERWYBykDbQmPesVa85ViONL4VV0EYwdQAwAKQNLFM53yp/lHo5ykaIwx9GADACaQN1S3p51/SruZt9G1/qYdRpAQDyIbuVebhXCWBMsVrHO8JqHsQUYMwhCQsAgGEQVgAAwyCsAACGIW0gaQP7v1To8wAApA0cEitolLKqWvqzATCekDawmHedPU2adI2LUybZAVzGYcyCkgJoY0VZWEgbSNrALt3T/CoCgK6QNrBMg5pedNbRDmi1RMPYlZwvJwBIQtrAQb0XtSq6ln8IXUoaIp0Ag0PawEG9l7DSvxY0/GFMTsIm20FzAfQhbaAx71mrXnOsRhpfCqugjeiXeQsAcnALHXkBaQM1rPJHqZejrHgNfxh71REJjUZhAfIIDxDSBuqW9PKu6VdzN/s2vtTDqNMaAORDdivzJKNUVAlgDEFYzYOYAow5JGEBADAMwgoAYBiEFQDAMHYgOjerZ9FpIpXXYwjkOxrNbhvps1lynKZeKvR5ABhfgkBYi5Ow6C8HyjTFtZr+rKBRyqpq6c8GwHhC2sBi3nX2NGnSNS5OmWQHcBmHMQtKClAU0gaSNrBL9zS/igCgK6QNLNOgpheddbQDWi3RMGaJol2iVwAdSBs4qPeiVkXX8g+hS0lD/bgeAHrhWqKY9CRPLXNqljv8hhNvmvVewkr/WtDwhzE5CYuGAhRHHTWkDTTmPWvVa47VSONLYRW0EYvVv4RrgHGm2FRAQNpADav8UerlKBshDn8YB28QAARpA/VLennX9Ku5m30bX+ph1OwGAORAdivzJKNUJAlgDEFYzYOYAow5JGEBADCMHXDJFwDACFJOQ0klYgUAMAzCCgBgGIQVAMAwCCsAgGEQVgAAw9gW91wCABhByqk1QBIWAADoBcIKAGAYhBUAwDAIKwCAYRBWAADDIKwAAIZBWAEAzBHewIqwAgAYBmEFADAMwgoAYBiEFQDAMAgrAIBhLLHxzokNU1PHrnI3TM7s3hssrM43qNdrw+kZAMBKYna32Pew+ju4xxXNB+afmpl/SkQ/12LIQ98f0jLhyEhnjfTU6teKzu+29m1Epyt9f8JMK5vZwL+DZuatMbK/JnoyQh+1wb2YcjQwOj+31/8zMDq/2Se76gjhC78h1M9f+7vF7P7l7hMAwP8f/g+KDn5nkm3BsQAAAABJRU5ErkJggg=="},402989:function(e,A,r){r.d(A,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,A,r){r.d(A,{Z:function(){return a},a:function(){return l}});var s=r(667294);let n={},t=s.createContext(n);function l(e){let A=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(A):{...A,...e}},[A,e])}function a(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(t.Provider,{value:A},e.children)}}}]);