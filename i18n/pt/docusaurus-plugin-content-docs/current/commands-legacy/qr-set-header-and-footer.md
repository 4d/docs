---
id: qr-set-header-and-footer
title: QR SET HEADER AND FOOTER
slug: /commands/qr-set-header-and-footer
displayed_sidebar: docs
---

<!--REF #_command_.QR SET HEADER AND FOOTER.Syntax-->**QR SET HEADER AND FOOTER** ( *area* ; *seletor* ; *tituloEsq* ; *tituloCentro* ; *tituloDir* ; *altura* {; *imagem* {; *alinImag*}} )<!-- END REF-->
<!--REF #_command_.QR SET HEADER AND FOOTER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| seletor | Integer | &#8594;  | 1= Cabeçalho, 2 = Rodapé |
| tituloEsq | Text | &#8594;  | Texto a esquerda |
| tituloCentro | Text | &#8594;  | Texto centralizado |
| tituloDir | Text | &#8594;  | Texto a direita |
| altura | Integer | &#8594;  | Altura do cabeçalho ou rodap~e |
| imagem | Picture | &#8594;  | Imagem a exibir |
| alinImag | Integer | &#8594;  | Atributo de alinhamento da imagem |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.QR SET HEADER AND FOOTER.Summary-->O comando QR SET HEADER AND FOOTER permite definir o conteúdo e o tamanho do cabeçalho e o rodapé de *area*.<!-- END REF-->  
  
*seletor* lhe permite selecionar o cabeçalho ou rodapé:  
  
 \* se *seletor* for igual a 1, se afetará o cabeçalho;  
 \* se *seletor* for igual a 2, se afetará o rodapé.

*tituloEsq, tituloCentro* e *tituloDir* são os valores para os cabeçalhos/rodapés esquerdo, centro e direita, respectivamente.  
  
*altura* é a altura do cabeçalho/rodapé, expressa na unidade selecionada para o relatório rápido.  
  
*imagem* contém a imagem a ser mostrada no cabeçalho ou rodapé.  
  
*alinImag* é o atributo de alinhamento para a imagem passada em *imagem*.

* Se *alinImag* for igual a 1, a imagem se alinha a esquerda.
* Se *alinImag* for igual a 2, a imagem se centra.
* Se *alinImag* for igual a 3, a imagem se alinha a direita.

Se passa um número de *area* inválido, se gera o erro -9850.  
Se o parâmetro *seletor* for incorreto, se gera o erro -9852.

#### Exemplo 

A seguiete instrução coloca o título “Título do centro” no cabeçalho do relatório rápido em MinhaArea e define a altura do cabeçalho em 200 pontos:

```4d
 QR SET HEADER AND FOOTER(MinhaArea;1;"";"Título do centro";"";200)
```

#### Ver também 

[QR GET HEADER AND FOOTER](qr-get-header-and-footer.md)  