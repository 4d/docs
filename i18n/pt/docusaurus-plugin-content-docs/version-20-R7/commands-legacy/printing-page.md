---
id: printing-page
title: Printing page
slug: /commands/printing-page
displayed_sidebar: docs
---

<!--REF #_command_.Printing page.Syntax-->**Printing page**  : Integer<!-- END REF-->
<!--REF #_command_.Printing page.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número de página da página atualmente sendo impressa |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Printing page.Summary-->Printing page devolvido o número da página em impressão.<!-- END REF--> Pode ser utilizado só quando esteja imprimindo com [PRINT SELECTION](print-selection.md) ou com o menu Impressão no ambiente Usuário.

#### Exemplo 

O exemplo a seguir muda a posição dos números de página em um relatório de modo a que o relatório possa ser reproduzido em um formato de dois lados. O formulário para o relatório tem duas variáveis que mostram os números de página. Uma variável na esquina inferior esquerda (*vNumPagEsq*) imprimirá os números de páginas pares. Uma variável na esquina inferior direita (*vNumPagDir*) imprimirá os números das páginas ímpares. O exemplo testa se o número da página é par ou ímpar, depois apaga e utiliza as variáveis apropriadas:

```4d
 Case of
    :(FORM Event=On Printing Footer)
       If((Printing page% 2)=0) // Modulo é 0 para um número de página par
          vNumPagEsq:=String(Printing page) // Fixar o número de página à esquerda
          vNumPagDir:="" // Apagar o número de página à direita
       Else // Caso contrário, o número de página é ímpar
          vNumPagEsq:="" // Apagar o número de página à esquerda
          vNumPagDir:=String(Printing page) // Fixar o número de página à direita
       End if
 End case
```

#### Ver também 

[PRINT SELECTION](print-selection.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 275 |
| Thread-seguro | &cross; |


