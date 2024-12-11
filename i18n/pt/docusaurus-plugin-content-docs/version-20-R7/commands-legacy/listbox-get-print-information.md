---
id: listbox-get-print-information
title: LISTBOX GET PRINT INFORMATION
slug: /commands/listbox-get-print-information
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET PRINT INFORMATION.Syntax-->**LISTBOX GET PRINT INFORMATION** ( {* ;} *objeto* ; *seletor* ; *info* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET PRINT INFORMATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string), se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se* for especificado) ou variável (se * é omitido) |
| seletor | Integer | &#8594;  | Informação a conseguir |
| info | Integer | &#8592; | Valor atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX GET PRINT INFORMATION.Summary-->O comando LISTBOX GET PRINT INFORMATION devolve a informação atual relativa a impressão do objeto list box designado pelos parâmetros *objeto e* *\** .<!-- END REF--> Este comando permite controlar a impressão do conteúdo do list box.  
  
Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* es um nome de objeto (cadena). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, se passa uma referência de variável ao invés de uma string.   
  
Este comando deve ser chamado no contexto da impressão de um list box através do comando [Print object](print-object.md) . Fora deste contexto, não devolve valores significativos.  
  
Passe em *selector* um valor que indique a informação a encontrar e em *info* uma variável de tipo numérico ou BLOB. Em *seletor*, pode passar uma das seguintes constantes, do tema "*List box*":

| Constante                  | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| lk last printed row number | Inteiro longo | 0     | Retorna em *info* o número da última linha impressa. permite conhecer o número da próxima linha a ser impressa.O número retornado pode ser maior ao número de linhas efetivamente impressas se a list box contém as linhas invisíveis ou se o comando [OBJECT SET SCROLL POSITION ](object-set-scroll-position.md) é chamado. Por exemplo, se as linhas 1, 18 e 20 foram impressas, *info* é 20. |
| lk printed height          | Inteiro longo | 3     | Retorna em *info* a altura em pixels do objeto efetivamente impresso (incluindo cabeçalhos, linhas, etc.). Lembre que se o número de linhas a ser impressas é menor do que a "capacidade" da list box, sua altura diminui automaticamente.                                                                                                                                                       |
| lk printed rows            | Inteiro longo | 1     | Retorna em *info* o número de linhas efetivamente impressas durante a última chamada ao comando [Print object](print-object.md). este número inclui as possíveis quebras de linha adicionadas no caso de uma list box hierárquica. Por exemplo, *info* é 10 se a list box contém 20 linhas e as linhas ímpares estão ocultas.                                                                    |
| lk printing is over        | Inteiro longo | 2     | Retorna em *info* um booleano indicando se a última linha (visível) da list box foi impressa. true = a linha foi impressa; do contrário, False.                                                                                                                                                                                                                                                  |

Para maior informação sobre os princípios de impressão de list boxes, consulte *Imprimir list boxes*.

#### Exemplo 1 

Impressão até que todas as linhas são impressas:

```4d
 OPEN PRINTING JOB
 FORM LOAD("SalesForm")
 
 $Over:=False
 Repeat
    $Total:=Print object(*;"mylistbox")
    LISTBOX GET PRINT INFORMATION(*;"mylistbox";lk printing is over;$Over)
    PAGE BREAK
 Until($Over)
 
 CLOSE PRINTING JOB
```

#### Exemplo 2 

Impressão de pelo menos 500 linhas do list box, conhecendo que algumas linhas estão ocultas:

```4d
 $GlobalPrinted:=0
 Repeat
    $Total:=Print object(*;"mylistbox")
    LISTBOX GET PRINT INFORMATION(*;"mylistbox";lk printed rows;$Printed)
    $GlobalPrinted:=$GlobalPrinted+$Printed
    PAGE BREAK
 Until($GlobalPrinted>=500)
```


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1110 |
| Thread-seguro | &check; |
| Proibido no servidor ||


