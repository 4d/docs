---
id: listbox-collapse
title: LISTBOX COLLAPSE
slug: /commands/listbox-collapse
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX COLLAPSE.Syntax-->**LISTBOX COLLAPSE** ( {* ;} *objeto* {; *recursivo* {; *seletor* {; linha | nivel  {; *coluna*}}}} )<!-- END REF-->
<!--REF #_command_.LISTBOX COLLAPSE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string), se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se* for especificado) ou variável (se * é omitido) |
| recursivo | Boolean | &#8594;  | True = contrai os subníveis False = não contrai os subníveis |
| seletor | Integer | &#8594;  | Parte do list box a contrair |
| linha &#124; nivel | Inteiro longo | &#8594;  | Número de quebra de fila a colapsar ou <br/>Número de nível de list box a contrair |
| coluna | Integer | &#8594;  | Número de quebra de coluna a contrair |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX COLLAPSE.Summary-->O comando LISTBOX COLLAPSE é utilizado para contrair linhas de quebra do objeto list box designado pelos parâmetros *objeto* e *\** .<!-- END REF--> 

Se passar o parâmetro opcional *\** , você indica que o parâmetro *objeto* é um nome de objeto (string). Se não passar esse parâmetro, você indica que o parâmetro *objeto* é uma referência de variável ao invés de uma string. 

 Se a list box não estiver configurada em modo hierárquico, o comando não faz nada. Para mais informações sobre list box hierárquicas, consulte *List box hierárquicas*.  
  
O parâmetro opcional *recursivo* é utilizado para configurar a contração dos subníveis hierárquicos do list box. Passe True ou omita este parâmetro para que o comando contraia todos os níveis e subníveis. Se passa False, só o primeiro nível se contrairá. 

O parâmetro opcional *selector* é utilizado para especificar o alcance da ordem. Pode passar uma das seguintes constantes, que são encontradas no tema , neste parâmetro:

| Constante    | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                               |
| ------------ | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| lk all       | Inteiro longo | 0     | O comando afeta todos os subníveis (valor por defeito, utilizado se o parâmetro for omitido).                                                                                                                                                                                                                            |
| lk selection | Inteiro longo | 1     | O comando afeta os subníveis selecionados.                                                                                                                                                                                                                                                                               |
| lk break row | Inteiro longo | 2     | O comando afeta o subnível ao qual pertence a "célula" designada pelos parâmetros *linha* e *coluna*. Note que estes parâmetros representam os números de linha e de coluna na list box de modo padrão e não na sua presentação hierárquica. Se os parâmetros *linha* e *coluna* forem omitidos, o comando não faz nada. |
| lk level     | Inteiro longo | 3     | O comando afeta todas as quebras de linhas correspondentes à coluna *nivel*. Este parâmetro designa um número de coluna na list box no modo padrão e não na sua representação hierárquica. Se o parâmetro *nivel* for omitido, o comando não faz nada.                                                                   |

Se a seleção ou o list box não conter uma linha de quebra ou se todas as linhas de quebra já estiverem contraídas, o comando não faz nada.

#### Exemplo 

Este exemplo colapsa o primeiro nível de linhas de quebra da seleção no list box:

```4d
 LISTBOX COLLAPSE(*;"MeuListbox";False;lk selection)
```

#### Ver também 

[LISTBOX EXPAND](listbox-expand.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1101 |
| Thread-seguro | &cross; |


