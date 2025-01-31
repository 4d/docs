---
id: qr-set-html-template
title: QR SET HTML TEMPLATE
slug: /commands/qr-set-html-template
displayed_sidebar: docs
---

<!--REF #_command_.QR SET HTML TEMPLATE.Syntax-->**QR SET HTML TEMPLATE** ( *area* ; *modelo* )<!-- END REF-->
<!--REF #_command_.QR SET HTML TEMPLATE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| modelo | Text | &#8594;  | Modelo HTML |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR SET HTML TEMPLATE.Summary-->O comando QR SET HTML TEMPLATE define o *modelo* HTML a utilizar para a área de relatório rápido referenciada por *area*.<!-- END REF--> Este modelo se utilizará durante a criação do relatório em formato HTML. 

O modelo utiliza um conjunto de etiquetas para processar os dados. Este funcionamento permite gerar documentos HTML próximos ao relatório original ou documentos com aparência totalmente personalizada. 

**Nota:** primeiro deve chamar [QR SET DESTINATION](qr-set-destination.md "QR SET DESTINATION") para definir o formato HTML como destino de saída.

#### Etiquetas HTML 

 *<!--#4DQRheader--> ... <!--/#4DQRheader-->*  
 Os títulos das colunas serão inseridos entre as etiquetas. Estas etiquetas geralmente são utilizadas para definir a linha do título do relatório.  
  
<!--#4DQRrow--> ... <!--/#4DQRrow-->  
 A informação inserida entre estas etiquetas se repete para cada linha de dados (incluindo as linhas de detalhe e subtotal).  
  
 <!--#4DQRcol--> ... <!--/#4DQRcol-->  
 A informação inserida entre estas etiquetas é repetida para cada coluna de dados dentro de uma linha. A ordem da coluna permanecerá idêntica a ordem no relatório. Quando se utilizam conjuntamente com <!--#4DQRcol;n--> ... <!--/#4DQRcol;n-->, as etiquetas <!--#4DQRcol--> ... <!--/#4DQRcol--> não serão efetivas através das colunas cujos conteúdos não são inseridos utilizando <!--#4DQRcol;n--> ... <!--/#4DQRcol;n-->.

Por exemplo, em um relatório que tem cinco colunas, você utiliza as etiquetas <!--#4DQRcol;2--> ... <!--/#4DQRcol;2--> para inserir os dados da segunda coluna, <!--#4DQRcol--> ... <!--/#4DQRcol--> irão por cada fila, através das colunas 1, 3, 4, e 5\. Estas últimas etiquetas ignoram a coluna cujo conteúdo se publica utilizando <!--#4DQRcol;2--> ... <!--/#4DQRcol;2-->.  

<!--#4DQRcol;n--> ... <!--/#4DQRcol;n-->  
A informação inserida entre estas etiquetas é extraída da coluna do relatório cujo número é “n”. Se quer mostrar por exemplo as colunas em uma ordem diferente ao do relatório inicial, pode escrever:  
<!--#4DQRrow--> <!--#4DQRcol;3--> ... <!--/#4DQRcol;3--><!--#4DQRcol;2--> ... <!--/#4DQRcol;2--><!--#4DQRcol;1--> ... <!--/#4DQRcol;1--> <!--/#4DQRrow-->  
  
Neste exemplo, as colunas são inseridas na ordem inversa do relatório.  
  
<!--#4DQRfont--> ... <!--/#4DQRfont-->  
O conteúdo HTML inserido entre estas etiquetas será utilizada para a definição da fonte da coluna ou célula atual.  
  
<!--#4DQRfont--> se substituirá por uma definição de fonte HTML e <!--/#4DQRfont--> se substituirá pela etiqueta de fechamento padrão (</font>).  
  
<!--#4DQRface--> ... <!--/#4DQRface-->  
O conteúdo HTML inserido entre estas etiquetas será utilizado para a definição do estilo da coluna ou célula atual.  
  
<!--#4DQRface--> se substituirá por una definição de estilo HTML <!--#4DQRface--> se substituirá pela etiqueta de fechamento padrão (</face>).  
  
<!--#4DQRbgcolor-->  
Esta etiqueta de cor se substituirá pela definição de cor da célula atual.  
  
<!--#4DQRdata-->  
Esta etiqueta se substituirá pelos dados da célula atual.  
  
<!--#4DQRlHeader--><!--#4DQRdata--><!--/#4DQRlHeader-->  
<!--#4DQRcHeader--><!--#4DQRdata--><!--/#4DQRcHeader-->  
<!--#4DQRrHeader--><!--#4DQRdata--><!--/#4DQRrHeader-->  
Essas etiquetas se substituirão respectivamente pelos dados no cabeçalho da esquerda, centro e direita.  
  
<!--#4DQRlFooter--><!--#4DQRdata--><!--/#4DQRlFooter-->  
<!--#4DQRcFooter--><!--#4DQRdata--><!--/#4DQRcFooter-->  
<!--#4DQRrFooter--><!--#4DQRdata--><!--/#4DQRrFooter-->  
  
Estas etiquetas se substituirão respectivamente pelos dados do rodapé da esquerda, centro ou direita.  
  
Se passa um número de área inválido, se gera o erro -9850.

#### Ver também 

[QR Get HTML template](qr-get-html-template.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 750 |
| Thread-seguro | &cross; |
| Modificar variáveis | error |


