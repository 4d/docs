"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42885"],{570247:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>o,assets:()=>a,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/set-print-marker","title":"SET PRINT MARKER","description":"SET PRINT MARKER ( markNum ; posi\xe7ao {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-print-marker.md","sourceDirName":"commands-legacy","slug":"/commands/set-print-marker","permalink":"/docs/pt/commands/set-print-marker","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-print-marker.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-print-marker","title":"SET PRINT MARKER","slug":"/commands/set-print-marker","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET CURRENT PRINTER","permalink":"/docs/pt/commands/set-current-printer"},"next":{"title":"SET PRINT OPTION","permalink":"/docs/pt/commands/set-print-option"}}'),s=r("785893"),d=r("250065");let t={id:"set-print-marker",title:"SET PRINT MARKER",slug:"/commands/set-print-marker",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET PRINT MARKER"})," ( ",(0,s.jsx)(n.em,{children:"markNum"})," ; ",(0,s.jsx)(n.em,{children:"posi\xe7ao"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"markNum"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero do marcador"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"posi\xe7ao"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nova posi\xe7\xe3o do marcador"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Se passado = mover marcadores seguintes; se omitido = n\xe3o move os marcadores seguintes"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando SET PRINT MARKER permite definir a posi\xe7\xe3o de um marcador durante a impress\xe3o. Combinado com os comandos ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/get-print-marker",title:"Get print marker",children:"Get print marker"}),", OBJECT MOVE ou ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/print-form",title:"Print form",children:"Print form"}),", este comando lhe permite ajustar o tamanho das \xe1reas de impress\xe3o."]}),"\n",(0,s.jsx)(n.p,{children:"SET PRINT MARKER pode ser utilizado em dois contextos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["durante o evento de formul\xe1rio On header, no contexto de os comandos ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"})," e ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/print-record",title:"PRINT RECORD",children:"PRINT RECORD"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["durante o evento de formul\xe1rio On Printing Detail, no contexto do comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/print-form",title:"Print form",children:"Print form"}),".. Esta opera\xe7\xe3o facilita a impress\xe3o de informes personalizados (ver exemplo)."]}),"\n",(0,s.jsx)(n.li,{children:"O efeito do comando est\xe1 limitado \xe0 impress\xe3o; nenhuma modifica\xe7\xe3o aparece na tela. As modifica\xe7\xf5es realizadas os formul\xe1rios n\xe3o s\xe3o guardados."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,s.jsx)(n.em,{children:"markNum"})," una das constantes do tema :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break0"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"300"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break1"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"301"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break2"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"302"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break3"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"303"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break4"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"304"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break5"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"305"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break6"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"306"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break7"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"307"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break8"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"308"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break9"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"309"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form detail"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form footer"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"100"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"200"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header1"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"201"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header10"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"210"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header2"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"202"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header3"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"203"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header4"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"204"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header5"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"205"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header6"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"206"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header7"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"207"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header8"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"208"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header9"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"209"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"posi\xe7\xe3o"}),", passe a nova posi\xe7\xe3o desejada, expressada em p\xedxels."]}),"\n",(0,s.jsxs)(n.p,{children:["Se passa o par\xe2metro opcional *, todos os marcadores localizados em baixo do marcador especificado por ",(0,s.jsx)(n.em,{children:"markNum"})," se mover\xe3o o mesmo n\xfamero de p\xedxels e na mesma dire\xe7\xe3o que este marcador quando se executa o comando.   ",(0,s.jsx)(n.strong,{children:"Advert\xeancia"}),": neste caso, os objetos presentes nas \xe1reas situadas abaixo do marcador tamb\xe9m se movem."]}),"\n",(0,s.jsx)(n.p,{children:"Quando o par\xe2metro * se utiliza, \xe9 poss\xedvel posicionar o marcador markNum alem da posi\xe7\xe3o inicial dos marcadores que o seguem, estes \xfaltimos marcadores ser\xe3o movidos simultaneamente."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(522074).Z+"",width:"406",height:"145"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 Este comando modifica s\xf3 a posi\xe7\xe3o de os marcadores existentes. N\xe3o permite a adi\xe7\xe3o de marcadores. Se atribuir um marcador que n\xe3o existe no formul\xe1rio, o comando n\xe3o far\xe1 nada.",(0,s.jsx)(n.br,{}),"\n\u2022 O funcionamento dos marcadores de impress\xe3o em modo Desenho se conserva: um marcador n\xe3o pode ir mais acima do que o antecede, nem mais abaixo do que o que segue (quando o par\xe2metro * n\xe3o se utiliza)."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Este exemplo completo permite gerar a impress\xe3o de um relat\xf3rio de tr\xeas colunas, a altura de cada linha se calcula de acordo com os conte\xfados dos campos."}),"\n",(0,s.jsx)(n.p,{children:"O formul\xe1rio de sa\xedda utilizado para a impress\xe3o \xe9 o seguinte:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(807420).Z+"",width:"641",height:"143"})}),"\n",(0,s.jsxs)(n.p,{children:["O evento de formul\xe1rio On Printing Detail foi selecionado para o formul\xe1rio (recorde que sem importar em que \xe1rea se imprima, o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/print-form",title:"Print form",children:"Print form"})," s\xf3 gera este tipo de evento de formul\xe1rio).",(0,s.jsx)(n.br,{}),'\nPara cada registro, a altura da linha deve estar adaptada de acordo aos conte\xfados da coluna "Atores" ou "Resumo" (coluna tem a maioria do conte\xfado). Este \xe9 o resultado desejado:']}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(221480).Z+"",width:"526",height:"748"})}),"\n",(0,s.jsx)(n.p,{children:"O m\xe9todo de projeto de impress\xe3o \xe9 o seguinte:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var vLaltura_imp;$vLaltura;vLaltura_impresso : Integer\n\xa0C_STRING(31;vSprint_area)\n\xa0PAGE SETUP([Filmes];"List_Imp3")\n\xa0GET PRINTABLE AREA(vLaltura_imp)\n\xa0vLaltura_impreso:=0\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([Filmes])\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vSprint_area:="Cabe\xe7alho"\xa0//Impress\xe3o da \xe1rea de cabe\xe7alho\n\xa0$vLaltura:=Print form([Filmes];"List_Imp3";Form header)\n\xa0$vLaltura:=21&NBSP;&NBSP;\xa0//Altura fixa\n\xa0vLaltura_impreso:=vLaltura_impresso+$vLaltura\n\xa0\n\xa0While(Not(End selection([Filmes])))\n\xa0\xa0\xa0\xa0vSprint_area:="Detalhe"\xa0//Impress\xe3o da \xe1rea de detalhe\n\xa0\xa0\xa0\xa0$vLaltura:=Print form([Filmes];"List_Imp3";Form detail)\n\xa0\xa0//El c\xe1lculo del detalle se lleva a cabo en el m\xe9todo de formulario\n\xa0\xa0\xa0\xa0vLaltura_impreso:=vLaltura_impreso+$vLaltura\n\xa0\xa0\xa0\xa0If(OK=0)\xa0//CANCEL ha sido ejecutado en el m\xe9todo de formulario\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PAGE BREAK\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLaltura_impreso:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vSprint_area:="Encabezado"\xa0//Reimpresi\xf3n del \xe1rea de encabezado\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vLaltura:=Print form([Peliculas];"List_Imp3";Form header)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vLaltura:=21\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLaltura_impreso:=vLaltura_impreso+$vLaltura\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vSprint_area:="Detalle"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vLaltura:=Print form([Peliculas];"List_Imp3";Form detail)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLaltura_impreso:=vLaltura_impreso+$vLaltura\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0NEXT RECORD([Peliculas])\n\xa0End while\n\xa0PAGE BREAK\xa0//Aseg\xfarese de que la \xfaltima p\xe1gina se imprima\n'})}),"\n",(0,s.jsx)(n.p,{children:"El m\xe9todo de formulario List_Imp3 es el siguiente:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $l;$t;$r;$b;$fixed_wdth;$exact_hght;$l1;$t1;$r1;$b1 : Integer\n\xa0var $final_pos;$i : Integer\n\xa0var $detalle_pos;$encabezado_pos;$altura_a_imprimir;$altura_restante : Integer\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:(vSprint_area="Detalle")\xa0//Impresi\xf3n del detalle en proceso\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET COORDINATES([Peliculas]Actores;$l;$t;$r;$b)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$largo_fijo:=$r-$l \xa0//C\xe1lculo del tama\xf1o del campo tipo texto Actores\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$altura_exact:=$b-$t\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET BEST SIZE([Peliculas]Actores;$largo;$alto;$largo_fijo)\n\xa0\xa0//Tama\xf1o \xf3ptimo del campo de acuerdo a su contenido\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$movimiento:=$alto-$altura_exact\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET COORDINATES([Peliculas]Resumen;$l1;$t1;$r1;$b1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$largo_fijo:=$r1-$l1 \xa0//C\xe1lculo del tama\xf1o del campo tipo texto Resumen\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$altura_exact1:=$b1-$t1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET BEST SIZE([Peliculas]Resumen;$largo1;$alto1;$largo_fijo)\n\xa0\xa0//Tama\xf1o \xf3ptimo del campo de acuerdo a su contenido\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$movimiento1:=$alto1-$altura_exact1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($movimiento1>$movimiento)\n\xa0\xa0//Determinamos el campo m\xe1s alto\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$movimiento:=$movimiento1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($movement>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$posicion:=Get print marker(Form detail)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$final_pos:=$posicion+$movimiento\n\xa0\xa0//Nos movemos al marcador Detalle y a los que siguen\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET PRINT MARKER(Form detail;$final_pos;*)\n\xa0\xa0//Redimensionamiento de las \xe1reas de texto\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT MOVE([Peliculas]Actores;$l;$t;$r;$hght+$t;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT MOVE([Peliculas]Resumen;$l1;$t1;$r1;$alto1+$t1;*)\n\xa0\n\xa0\xa0//Redimensionamiento de las l\xedneas de divisi\xf3n\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET COORDINATES(*;"H1Linea";$l;$t;$r;$b)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT MOVE(*;"H1Line";$l;$final_pos-1;$r;$final_pos;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($i;1;4;1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET OBJECT RECT(*;"VLinea"+Cadena($i);$l;$t;$r;$b)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MOVE OBJECT(*;"VLinea"+Cadena($i);$l;$t;$r;$final_pos;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0//C\xe1lculo del espacio disponible\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$detalle_pos:=Get print marker(Form detail)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$encabezado_pos:=Get print marker(Form header)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$altura_a_imprimir:=$detalle_pos-$encabezado_pos\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$altura_restante:=altura_impreso-vLaltura_impreso\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($altura_restante<$altura_a_imprimir)\xa0//Altura insuficiente\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CANCEL\xa0//Pasar la l\xednea a la siguiente p\xe1gina\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/get-print-marker",children:"Get print marker"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/object-get-best-size",children:"OBJECT GET BEST SIZE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/object-get-coordinates",children:"OBJECT GET COORDINATES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/object-move",children:"OBJECT MOVE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/page-break",children:"PAGE BREAK"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/print-form",children:"Print form"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/print-record",children:"PRINT RECORD"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"})]}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"709"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},522074:function(e,n,r){r.d(n,{Z:function(){return o}});let o="data:image/png;base64,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"},807420:function(e,n,r){r.d(n,{Z:function(){return o}});let o=r.p+"assets/images/pict28725.en-e07c3635e7877fb9fbcf70bc914db6b4.png"},221480:function(e,n,r){r.d(n,{Z:function(){return o}});let o=r.p+"assets/images/pict28726.en-b54c248495cc30ccec415416cb8b69ff.png"},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return t}});var o=r(667294);let s={},d=o.createContext(s);function t(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);