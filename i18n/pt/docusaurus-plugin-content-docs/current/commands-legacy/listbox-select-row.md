---
id: listbox-select-row
title: LISTBOX SELECT ROW
slug: /commands/listbox-select-row
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SELECT ROW.Syntax-->**LISTBOX SELECT ROW**  ( {* ;} *objeto* ; *posiçao* {; *açao*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SELECT ROW.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| posiçao | Integer | &#8594;  | Número da fila a selecionar |
| açao | Integer | &#8594;  | Ação de seleção |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX SELECT ROW.Summary-->O comando  LISTBOX SELECT ROW seleciona a fila cujo número é passado em *posição* no list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->

Se passar o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos*. 

O parâmetro opcional *ação*, se for passado, se utiliza para definir a ação de seleção a executar quando uma seleção de filas já existe no list box. Pode passar um valor ou uma das seguintes constantes (localizadas no tema “*List box*”):

| Constante                | Tipo          | Valor | Comentário                                                                                                                                                                                                                                              |
| ------------------------ | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk add to selection      | Inteiro longo | 1     | A linha selecionada é adicionada à seleção existente. Se a linha selecionada já pertence à seleção existente, o comando não faz nada.                                                                                                                   |
| lk remove from selection | Inteiro longo | 2     | A linha selecionada é removida da seleção existente. Se a linha especificada não pertence à seleção existente, o comando não faz nada.                                                                                                                  |
| lk replace selection     | Inteiro longo | 0     | A linha selecionada torna-se a nova seleção e substitui a seleção existente. O comando tem o mesmo efeito que um clique do usuário em uma linha (no entanto, o evento On Clicked não é gerado). Esta é a ação padrão (se o parâmetro *ação* é omitido). |

Quando o parâmetro *posição* não corresponde exatamente a um número de fila existente, o comando atua da seguinte maneira:

* Se *posi* *ção* é <0, o comando não faz nada, qualquer que seja o valor do parâmetro *ação*.
* Se *posi* *ção* é 0 e o parâmetro *a* *ção* contém lk replace selection ou é omitido, todas as filas do list box são selecionadas. Se o parâmetro *a* *ção* contém lk remove from selection, todas as filas do list box são desmarcadas.
* Se o valor de *posi* *ção* é superior ao número total de filas contidas no list box (só no caso de um array de tipo listbox), ou array booleano associado ao list box é redimensionado automaticamente e a ação de seleção é realizada. Este mecanismo permite utilizar  LISTBOX SELECT ROW com os comandos “padrão” de gestão de arrays (tais como [APPEND TO ARRAY](append-to-array.md)) que não provocam a sincronização imediata do listbox.

Depois da execução do método, os arrays são sincronizados: se o array fonte do listbox for redimensionado efetivamente, a ação de seleção é realizada. Do contrário, o array booleano associado com o list box volta ao seu tamanho inicial e o comando não faz nada.

**Notas:**

* Se deseja que o list box tenha rolagem automaticamente para mostrar a fila selecionada, utilize o comando [OBJECT SET SCROLL POSITION ](object-set-scroll-position.md).
* Para passar uma fila a modo edição (para permitir a entrada de dados), utilize o comando [EDIT ITEM](edit-item.md).
* Se o número passado em *posição* corresponde a uma linha oculta no listbox, a linha é selecionada mas não é mostrada.
* Se tiver selecionado a opção Ocultar o ressaltado de seleção para um list box, deverá fazer as seleções de list box visíveis utilizando as opções de interface disponíveis. Para maior informaçao sobre como fazer isto, ver *Personalizar a aparência*.

#### Ver também 

[EDIT ITEM](edit-item.md)  
[LISTBOX DELETE ROWS](listbox-delete-rows.md)  
[LISTBOX INSERT ROWS](listbox-insert-rows.md)  
[LISTBOX SELECT BREAK](listbox-select-break.md)  
[LISTBOX SELECT ROWS](listbox-select-rows.md)  
[OBJECT SET SCROLL POSITION ](object-set-scroll-position.md)  