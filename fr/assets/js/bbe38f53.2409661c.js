"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69701"],{193134:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"ViewPro/commands/vp-insert-table-rows","title":"VP INSERT TABLE ROWS","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-insert-table-rows.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-insert-table-rows","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-insert-table-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-insert-table-rows.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-insert-table-rows","title":"VP INSERT TABLE ROWS"},"sidebar":"docs","previous":{"title":"VP INSERT TABLE COLUMNS","permalink":"/docs/fr/20-R7/ViewPro/commands/vp-insert-table-columns"},"next":{"title":"M","permalink":"/docs/fr/20-R7/commands-legacy/M"}}'),r=t("785893"),i=t("250065");let c={id:"vp-insert-table-rows",title:"VP INSERT TABLE ROWS"},d=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function h(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP INSERT TABLE ROWS"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,r.jsx)(n.em,{children:"row"})," : Integer {; ",(0,r.jsx)(n.em,{children:"count"})," : Integer {; ",(0,r.jsx)(n.em,{children:"insertAfter"})," : Integer {; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer }}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nom de table"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"row"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Indice dans la table de la ligne de d\xe9part \xe0 ins\xe9rer"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"count"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Number of rows to add (must be >0)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"insertAfter"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"vk table insert before"})," or ",(0,r.jsx)(n.code,{children:"vk table insert after"})," ",(0,r.jsx)(n.em,{children:"row"})]}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP INSERT TABLE ROWS"})," command inserts one or ",(0,r.jsx)(n.em,{children:"count"})," empty row(s) in the specified ",(0,r.jsx)(n.em,{children:"tableName"})," at the specified ",(0,r.jsx)(n.em,{children:"row"})," index."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"insertAfter"})," parameter, you can pass one of the following constants to indicate if the row(s) must be inserted before or after the ",(0,r.jsx)(n.em,{children:"row"})," index:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk table insert before"})}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["Insert row(s) before the ",(0,r.jsx)(n.em,{children:"row"})," (default if omitted)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk table insert after"})}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:["Insert row(s) after the ",(0,r.jsx)(n.em,{children:"row"})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["This command inserts some rows in the ",(0,r.jsx)(n.em,{children:"tableName"})," table, NOT in the sheet. Le nombre total de lignes de la feuille n'est pas impact\xe9 par la commande. Les donn\xe9es pr\xe9sentes sous la table (le cas \xe9ch\xe9ant) sont automatiquement d\xe9plac\xe9es vers le bas en fonction du nombre de lignes ajout\xe9es."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"tableName"})," table is bound to a ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-set-data-context",children:"data context"}),", the command inserts new, empty element(s) in the collection."]}),"\n",(0,r.jsxs)(n.p,{children:["Si ",(0,r.jsx)(n.em,{children:"tableName"})," n'existe pas ou s'il n'y a pas assez d'espace dans la feuille, rien ne se passe."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous cr\xe9ez une table avec un contexte de donn\xe9es :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $context : Object\n$context:=New object()\n\n$context.col:=New collection\n$context.col.push(New object("name"; "Smith"; "salary"; 10000))\n$context.col.push(New object("name"; "Wesson"; "salary"; 50000))\n$context.col.push(New object("name"; "Gross"; "salary"; 10500))\n\nVP SET DATA CONTEXT("ViewProArea"; $context)\n\nVP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 3; 3); "PeopleTable"; "col")\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(773464).Z+"",width:"316",height:"150"})}),"\n",(0,r.jsx)(n.p,{children:"Vous voulez ins\xe9rer deux lignes et deux colonnes dans la table, vous pouvez \xe9crire :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'VP INSERT TABLE ROWS("ViewProArea"; "PeopleTable"; 1; 2)\nVP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 2)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(605887).Z+"",width:"386",height:"173"})}),"\n",(0,r.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-insert-table-columns",children:"VP INSERT TABLE COLUMNS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/ViewPro/commands/vp-remove-table-rows",children:"VP REMOVE TABLE ROWS"})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},773464:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},605887:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYIAAACtCAIAAAAyFe+JAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABspSURBVHhe7Z1/cFXVtcdzsa2JNWoQM4YMERMIiDzIQB4/CnQilkEfMBCah338qG20JYJP5hkqSgp/gEGhUCbOkAl9fTgSojMhEn2Jg5TW2gaGH4ZOwiCEQFDBQF8mJFgsiSjkfe9ZO8dD7k1yCHefk5P7/Zi57r32PmHlnnW+a69z793Xd+nSpYiIiL1/qsiYOxMNQghxmH7q/4QQ4hLfroYefCBOTIQQ4iQeLsqam5svX76sOp4iOjo6JiZGdTwFnnN67jDh4LmHi7LrbddVy2vQc+eh585j33PvydCXX34pjba2Nml4DnruPPTceex77jEZggY1NjZKm/nNeei584SD516SIasGAeY356HnzhMOnntGhjpoEGBgOQ89d55w8NwbMhSoQUDTYrXl669WvJuX9tovfrpjddM/v1DWkKLD88rKymkWSktL1UBI0Vcg5OXlKdenTcPfoqyhI+Set7a25uTkKI8NPPScO+O8fc89IENBNQhoyhL1lxpqGj4dcX/i2aYLpxvPKWtI0eT5oEGDiouL9+7dW1BQsGPHDh0Xsw7P5ZJAA54D/Am4JJqbm2U0VGh6zpcsWSJuy3MOMVUDoUOT58B0HqSnpytr6LDveW+Xoc40CGjKzNX1tXdHRf9s/Ky7o+7cd6ZKWUOKvjWFEB8fP3z48HPnQq+hOjzfvXs3HhcvXizdmJiY3NzckL9TRvdznpSUtGHDhqqqqrq6OmUKEbo914d9z3u1DHWhQaAN/4UaVGHvHvtLSnzyvwwcOjx2cFV9rY66TIfnVurr68+fPz9q1CjVDx06PD979mxqampkZKTq60H3cw6g/gMHDjx69KjqhwgHPNeEfc97rwx1rUFAR5ZAFYZa7IGYuKjv3j7ugZFo//mUB+5TCFj+zJs3D3V+VlYWrgdcFWogdITcc1RkDQ0NqqMTB9YUUNLY2FjVCR36PM/Pz5cbQ5mZmSGvgoF9z3upDHWrQUBHzYwqDLXY6PhktPGI9uHPjrV8/ZWMhgpN1b55bwjgeli7di0ucjUWIvTdp9CNA55rklR9npv3hrZt26bj8yL2Pe+NMmRHg0DIswTqL1RhX7R8+fRba9Je+wUe0a5p+LT+Uohjy4HMPGnSpAsXLrS0tKh+iAi551hBoCKrrKwMuWJ2wIHnXFMt7IDnmrDvea+TIZsaBEKeJaQi+88f/uTD5/5bftCGElXX16oZIcKBzLx///64uLioqCjVDxE6PE9LS4Nibt26VbqoDnJycrzySpkJHM7NzU1JSUlKSlKmEOFAtGjCvue9S4bsaxAI7elB5fV21Z/MikyQuuzdY38J7Y1qTYFl3hsCqA5WrVoV8vu+OjxHObBp06bq6mrxHH9Cenp6yGsETc+5eXsFbqPGWbZsmRoIHZo8B6bzQMf7hux73os2+rCvQYMHD8bjyc9ORvlCnO2doaWtZdgDw1THU+A5p+cOEw6e95bV0E2tgwR9WUI39Nx56Lnz2Pe8t8jQnXfeiTWOTeSQcLh119ug584TDp57dffFxOXTVcuznNm4R7W8w/FPjo94cITqeAp67jz2Pf9Whn40dbIsouS9j6qNR5+lbYz6Inw2Z5ptwc5MGTUMXc2cueW//DO8zIYJv1At7zBi7IjjR46rjqeg585j3/NvZWhcaujf+6+PtNf817AXFxRAlnJedP7jjz9++OGHVcdT0HPnse95b3z7IiEkrKAMEUJchjJECHEZyhAhxGUoQ4QQl9ErQ4c/O6Z1U2dCSB9Aowz99s87Xng39FvzEkL6GLpkSPbuWfGjnyX0j1MmQggJhi4Z6v/9u7cvXDP+gZGqTwghncBb1IQQl6EMEUJchjJECHEZyhAhxGV0yVDTP7/46Y7Vc/9n+dmmC/hBY8W7eSH/ph1CSB9AlwzJK2XmV1zgZ/3sZVHfvV0NE0JIOyzKXKDs57/16E5JhOiAMuQoicun42fW689LQ1kJCW8oQ4QQl+Fe1M6BWgzrINUxeHnMk6pFSF9k9OjRqtUl/GYO5zizcU8Htz13h+jNN9+cP3++6ngKeu489j33qgyBkpKSjIwM1fEIvUSGKisrfT6sOdUas18/VZv7F5vGOtSgzZjjX/l+883173yn39ixY12/JOi58zjhOWQI7Hy7DMd7i507d6qW1ygqKlItl/joo49Uqzuut4NYRJee9xh63gW8RR2e+JObgKBBHKhOOxIcaCDDIctJMuwd0HPn0e45ZSg8UZGE/yFkJGrM8ELDDCY0xdhrCO65+E7P9aDdc8pQWOOPGp/vug8RJrW9YWxvIPlJ8xa/Rv3kyZMpKSlr165V/VBAz4Ny8eLFxx57LCsrq6WlRZlChz7PNcpQaWnptHZQKyor6QVIuBgJrc2IIzOSrCDZdRVP+/fvx6GCprgPpDPPxd5On/XcFRzwXJcM1dXVnThxoqysbO/evUuWLMnPz29ublZjxG1kOQ38QdXWtv+jC2/sPPl68YnXd8pPzRslJ/d8+Jm5xg7UqaKiosmTJ69Zs0aic8qUKbt27VJjOglnz93CAc91yVBSUtLKlSsjIyPRHjVqFM53U1OTDBFB1s+/+93vkJBxggGytAxZ0zUum84mY0jaMsecJsYu87w/UDBHOt/7br/jJz8r+d99xe9WyM/Bj07c/r3bfL7bZII5U8C/UlhYOH36dCQYsSwwQEOqGOPf98ETzJQJAvyBV5iAaeiK/3i089fJnLD1HKA2NH6rzywSA+OkA50F0ubNm/GIP2fjxo3mEBDPcZR027lVz7vFiXtDWAfBs/79+6s+sbB48eJFixZduXIFDYQXogRBgEsFFmg3kvZvfvMbCX1zcmNjIy4kpHRY5ECZg2NxRQ0ePBjGmpqagwcPIsjkwA5YX+3AqRk3Ovbf/y1x8P3/vPj5Afzc9/3/y5iR+MMJ8WpGAPjle/bsmTRp0r333qtMBvDhiSeemDBhAhyAk7DAH3glo93S9V8nc8LWc0TF6tWrd+zYgV+DvI5f20WcCF1MeP755+FwVVXVrFmzRo8eXVFRAZ0FaOBPGD58uEwTbtFzO2iXodbW1tLSUvy1MTExykQsIFjHjBkTFRUVHx//97//HaGMi6SgoAAWjCYmJlZXV8uFYU6+4447oDUIFyQ0TENZIXPkGkMXxoSEBFxUCMTOriVLwvLHWOroIf8x5wfDEqIfjIv8yeyJU6eMxIzrbdfxgyC0vk0NfPrpp6p1I5WVlfAE8Q0HcJ2jAX/glRrujq7/OjWpE89HJvXv254LohezZ88eNmxYF3EidB1Ic+fORQO/58c//jEy1lkDNAI1Gty6512jXYa2bt0aGxubnp6u+qQ7EGfmCn/hwoXKagO5xnAIDsQlgWde7IEYsaIaiDF/2+eb9IN//fnP5v10Ycbjjz+ixtr8YYXY+vb2gAEuNtW6kTNnzqiWNvw+tTesnj/11BN923OoA1Y0OKc4s5A5ZJdu48RmIE2dOhUKBSEWLUZXDbTj96m90QPP7aBXhvLy8hoaGiC9qk9sgEoKSQmpGOcVi3BltYFcY7JuF95///3AzGagyncEqOSuNiSziGtpaROMqPJF+Prhx+fr1w+PEf6GMV0xYMAArOQDl1pIuaqlkeCe/2Di2L7tOVi1ahXOKc4vVmo4s93Gic1AQgmGFRxKtu3btwdWZAa36nm36JIh1GI5OTlo5Obmyo1qcrNIra46NpB4knW7MnXCNeQsBJKBP8L87wS51oYY8weTEXJtxnvSjNHAoJKVPC6G/Px8seDCLioqSk1NxUVeWFgIB3CdoyHViswBKBBQe0p1IBPUgG0689x4Jbkvew4nARqBC7pu46TrCVKE4k/7wx/+gEZg3rpFz+2gS4aOHTt2+PDh8vJy9cahadOwMlJjpEuWLFly//33Q1Ow/L7rrrtweaiB7kAA4UlGAsSB/rCwvKTSgWtYORvxA/wraAQUIuH6bT4jnIBhv97e8b9MK5NNkJmRYFevXi1TcFnOnTsXF/mWLVukcMC6AxfM5s2b5d6ECf46aOXkyZMfffTRZ555xv5fJ3TuuV9AgWHvg57DSUgJRuAAqrMFCxZ0Gyf2A0lUGKChTBZu/TnvHn601XmQ1lTLJQ4drEJ+A/IRITxcu3b966+vf/2NYTUwUiDG/SAfVvaOj1nScx1giQeFxQJQXlbrgAOe61oNkd5Mm+8rfwJrz1r+FOaLuO22iNuQ5BBRElRG4rvm+8Y//3pveWsvPddBjfEaK6rODgtAwQHPud+QC7i+g8yRI0fwePXrNkSSH/99ReP/iK92EFdmD0GGod6w9w091wGKd1Sp+/btmzRpkjJZcMBzypAL4PSoFiF9mpuWIW/tRe0fRuOKaniL6upq1SKkT9PFfXErXA25AFZD06d78tuB9uzZQ88dxtOe21wN8RY1IcRlKEOEEJehDBFCXIYyRAhxGcpQ36GpqemXv/zl6dOnVZ8Qj6BRhrgXdbccOnRogEFaWpp9+SgpKZk3b57sZrlx40Z0xU5I10i8ddgMD93AIEQDXbFb5wedjAgUI8A/IcabQpcMcS/qbsFZXLFixXvvvdfY2Lhr16533nmn20/GCxkZGcXFxdzNktgHoZWdnV1RUfHiiy8qkwEU5MKFC+fOnUMQPvvssytXrkR6A2isX78extra2sOHD0uqCzoZuoNoxDQYEcwIafsJ1USXDHXYizo6OlrsxMp9990n+ypAU5YvXx4VFYXzinDBqZVchPb58+ex9kHbXAFh1LS/+uqrWVlZ1ix06tQp81ibukb6PAitTZs2IcZU3wDhceDAAUSRfJRMNjxD/IBBgwbhskUXkYkJmIZlRNDJkDYYJSnikLFjx1ZVVaF9Uzhxb6i8vDwxMZGbwHYgPj4+ISFBUooyGSDbIL3s3r0bGQbt+fPnr1u3Dg1ExrZt29SkiAg8n5iG5FZQUIBENH78eBgvXbr0xz/+0TwW2UkmExIIZOjy5cvmBkPQF8QYwgbExcWJ3AAxIkoDJ6PowfoIDdOIAzvbabcLnLg3xA0Yg4JzhgQ1bty45ORka6V9zz33PPPMMxhFhsEoVr9DhgxBd+LEiTjlXS9wOhzbg4Ag4QOUJeitkqBhg5mBk69evQqFUp1bQKMMpaen7zVAY9asWbxLHRSsk6XSfvrpp3tQVHdBZ/suEyIgVwXWKFjaBEYOjAMHDgycjCrHXAqZ9CDwnCjKRo4cicwcEtXsq6DSjo2N7bBBMiG6QRVvRp21RrOuu6VGi4yMDJwst4TMSxtGa41mH10yhLUPijJp19fX19TU9MC5vk2JgbRPnTqFx6FDh0r3pmDlRXqGVO7FxcWiOB988EF0dHR8fHxKSsqRI0eOHj0KIwo3TJgyZUrQyUlJSRMnToRR7m/iEEhSD8JYlwxhBQQlkntDWVlZL730UtBtbsOZGTNmHDhwYIDBihUr1q1bJ7nlppgzZ055eTl+Q8/er0HCBGhHdnY24uRVAzTk3UBLly7FI5YIsEBNcnJyoqKihgwZsn79esQnjMnJyfPmzZMXQIJOzsjIgDxhGow9DmNu9OEC3OjDeei583CjD0KIZ6AMEUJchjJECHEZ7kXtAtyLmoQJNvei5tcluoDrX93XY+i584SD5yzKCCEuQxkihLgMZYgQ4jKUIUKIy1CGCCEuo12G5JNleXl5qk8IITeiV4aam5sLCwsfeeQR1SeEkAD0ytD27dvT0tIeeugh1SeEkAA0ylBdXd2ZM2cgQ6pPCCHB0CVDra2t27ZtW7RoEXfCJ4R0jS4Z2r17d2xsLLc6I4R0ixYZwlKosrKyvLxcdl/Mz89HOzMzM3Bnf0II0SJDkZGRubm58rUcYMmSJTNnzkSNxgKNEBKIxlvUhBBiBydkKD09fdmyZapDCCE3wtUQIcRlKEOEEJehDBFCXIZ7UbsA96ImYYLNvaj5dYkuwK9LdB567jz8ukRCiGegDBFCXIYyRAhxGcoQIcRlKEOEEJfRJUPNzc2ZmZnyCXvAj9cTQjpD72rolVdekQ/Z8+P1hJDOYFFGCHEZvTL00ksvSVFWWlqqTIQQciO6ZAglGAoxqchQmuXn51dWVqoxQgix4ERRlpqaOnPmzHPnzqk+IYRYcEKGWltbGxoaVIcQQm5ElwyhBDPvBx07dqympmbUqFHSJYQQK7pkKCkpqaysTO5Pv/LKKxs2bIBFjRFCiAUnblG//fbb1CBCSGc4cW+IEEK6gDJECHEZyhAhxGW4F7ULcC9qEibY3Is6AjIEdr5dhmvbW+zcuVO1vEZRUZFqeQ167jzh4DmLMkKIy1CGCCEuQxkihLgMZYgQ4jKUIUKIy+iVodLSUvlYGeB+Qx0oKirKyspqaWmR7smTJ1NSUvbv3y9d0GECIT3m4sWLjz32mK8dtGGRobVr14oR4YcgFKNEo9gxQYwg6GQEqhiBNYDto1GGoEGQnrKyMvlkWWpqqhogBnhCPvnkk7Nnz0q3sbGxurr6gw8+kC44c+bMlClToqKiVJ+QW2Pfvn3yAvn7779/7733wgIFqa+vv3LlCoy/+tWvli1bBnkCaGzZsgVGhCWUBdM6m4zRwsJCTIMRv3/p0qWmPNlHlww1Nzd/+OGHmZmZkZGRykRuJCEh4cEHHzQXiRAgnNrjx4/j1KKLR7RFu81sY01BZl6SFRPmm+lOggaYBwJJU5j5wgsvoC2TrVmRhBsIhoqKikWLFkmqQzDgscZg8ODBY8aMQRdqhQmY1tTUFHQy4hZGETUcMmHChB7UPbpkqK6uDo+vvfaaVGT8gqBAcDqx2MGSB20RndmzZ+NZwqmFBY9oDxgwwJptoFObN29G9MBo5qWCggL8qvz8fEQDumDBggX4DdCgoGnqH//4ByQMozgc0YYDYSThwOTJkyUnSaJCAHzxxReIMRm94447EA+fGsTHx5vLcDEiRAMn19bWIg7RECMOwYES0jeFxqLs888/f+6551COoS6Li4vbvn27GiDt4PxBUHCCIRaDBg1CMpk0aRJOOYbwiDaSjDXbIAUhFKSOO3jwoFnQCUhW5o0kSXSrVq0KmqbELjqIMDKPIn0VnG4UYpKlkJMWLlyIwEPUYY2jZlgIqiOYGTj5q6++knC9RTTK0N13392/f380UJehuGhoaGhtbZUhIgwfPhyPWPhAIKKjo6ELU6dOhXxAmPCINgQCMoGgkSSGXHTixAkcAoVC6Y7DYUQ8wQJlQSJCjpI6C4nOGh+SplTHgpnHSPiA4FmzZg3CA+EkV6gVhERiYqLqtAMj4idwcnJycmAIBR7eLbpkKCYmBrobVGuJCXKULH+QfyA6sEBZsN5BvsIj2iIfO3bskDwGqqqqhg0bhpk4EF1rtQUlggX2nJwcyJM1PkTOVIeEN9ZgQOGPNZG0rTWadY2M+EQQIhQDJ8ta20x48pt7kNt0yRCEE1fC0aNH0Yb3qMuwIOLt6kCgPihXjx8/LisjLGewinzrrbdGjBgh5xi5pbCwEAscY3pHEDQPPfSQWbEDzJfEhUccKMH0t7/9DUUcX6wMW7BkNl+4MINBsqAZJKjaEHsJCQkYwgRMgxGBhwmI0qCTsRpCXW/GJw6BJEkk3xz6PmF/+vTpuXPn/shg165dyho6+sYn7JFepk+fvnjxYqQXsWDtg/OCZY50gVgETMYhVgtm4lj8BunKBDkQa28xjh49GqUfLDLT/OVoWP/pbrF67i3C3HMJsw7BADqLHASGGIG5GLcfZoJ9z7nRhwvwYnYeeu489j3XeIuaEELsQBkihLgMZYgQ4jLci9oFuBc1CRNs7kX9rQxlzJ0pJq9QUlKSkZGhOp7izTffNF+28BZ79uyh5w7jac/nz5+vOl3CoowQ4jKUIUKIy1CGCCEuQxkihLgMZYgQ4jK6ZMi6C7WQk5PDjT4CaWpqmjdv3oB2Nm7cqAYICTWHDh0KjDF0JfbS0tJOnz4NS4eYRNvcKiNwMigpKREjwD8hxptClwylp6fLFtSgrKxs3Lhx/IR9IDhnycnJOM2N7YhRRgkJFS0tLdnZ2RUVFS+++KIyGUBBLly4cO7cOcTes88+u3LlSlNx3nvvPYnJ4uJi2Wko6GSEKybU1tbCiENWrFhhypN9nCjKjh07Bu8hn6pPDBAZOH8FBQXWdz8tX758/PjxaOCUv/HGGwgdyTASRpJwgmYnjGKONY/hN8gcQqKiojZt2oToUn0DBMyBAwcQMBhFV3a8OnXqlDHYkc4mQ9pgFJ0aNWrU2LFjq6qq/AfcDNplCIUYCrRZs2bFxMQoEzGor68/e/ZsSkqK6gcAZcEJRpLB2f31r38dFxfnz02NjVha5ubmIiwgT2Z2QpAhPrZt2yaHAI++t5M4BkLo8uXLsq0VQPwMGjQI4STdGTNmWPNZ0Ml1dXWIQDRMI6LU3AXNPtplCBfb+fPncSGpPmnn4sWLPp9P0ggERU45MIsyrJ9lZYTnEBGQmZkp9jlz5kC/YET7yJEj0jBBykLEqA4hnYO1c3OwL6pATGKdLskMdVZWVhZiMujkq1evmrJ1K2iXofLyciT8pKQk1SftILG0te+TC7nBKccZffLJJ2XUCgRLPnMjIEpkaYmj1q9fP2HCBFO8sOpGOkJ2wprILNwICYoZSFbMpY2AGEM6RGQGnZyYmNhhPuhFm8AKWLOhUJw502OfVnMGnFeshuwU0hCse+65R3VuTGKiX9Zbg1AiWMzCTaYREhSkN3N/4Q5llwAjyi5pB05GDKNtLohkcqAwdYteGcJSaODAgfHBvhOC4BRmZ2djxdvtvWTMRASYX+j6zjvvJCQkWJ9VhE5ycrLEhICMhGWR3E0kJCgIGKQr1F+SrhBg0dHRiCusrM2YPHr0KAp/FDRBJ6PKmThxIoyy9MZkSNLQoUONQ28CjTKEpdBf//rX9PR0vk7fGVjL1NbW4izKXSFJI4H30RABBQUF5jQknJdffhkSg1gRC+qyp556Chbz1TRMNu8lEQLtkNh41QANeffQ0qVL8YjAk5jJyclBFEFHzGDDKvv3v//9kCFDOpuckZEBeUIWlMnr1q2zpkObcKMPF+BGH85Dz52HG30QQjwDZYgQ4jKUIUKIy3AvahfgXtQkTOBe1L2Xjz/++OGHH1YdT0HPnSccPGdRRghxGcoQIcRlKEOEEJehDBFCXIYyRAhxGY0yVFlZqbahnjYtLy9PWQkh5EZ0yVBdXd2WLVsKCgr27t1bXFxcXV1dWlqqxgghxILG1dBdd90ln7WNMraGFCMhhHRAlwwlJSUlJiZmZ2c3Nzdv3boVlscff1yGCCHkWyIi/h+JGvXzcGu/bwAAAABJRU5ErkJggg=="},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return c}});var s=t(667294);let r={},i=s.createContext(r);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);