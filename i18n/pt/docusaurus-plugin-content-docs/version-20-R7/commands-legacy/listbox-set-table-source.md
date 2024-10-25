---
id: listbox-set-table-source
title: LISTBOX SET TABLE SOURCE
slug: /commands/listbox-set-table-source
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET TABLE SOURCE.Syntax-->**LISTBOX SET TABLE SOURCE** ( {* ;} *objeto* ; numTabela | tempo  {; *nomeSelecionado*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET TABLE SOURCE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string), se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| numTabela &#124; tempo | Inteiro longo, String | &#8594;  | Seleção temporária |
| nomeSelecionado | Text | &#8594;  | Nome do conjunto selecionado |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX SET TABLE SOURCE.Summary-->O comando **LISTBOX SET TABLE SOURCE** permite modificar a fonte de dados mostrada no listbox desenhado pelos parâmetros *\** e *objeto*

**Nota:** este comando só pode ser utilizado quando a propriedade “Fonte de dados” do list box é **Seleção atual** ou **Seleção temporária** (para maior informação, consulte a seção *Gestão de objetos List Box*).<!-- END REF--> O comando não faz nada se o utilizar com um list box associado com um array, uma coleção ou seleção de entidades.

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, não passe uma cadeia e sim uma referencia de variável. Para maior informação sobre nomes de objetos, por favor consulte a seção que indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma cadeia, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos*. 

Se passa um número de tabela como parâmetro *numTabela*, o list box será preenchido com os dados dos registros na seleção atual da tabela.

Se passa um nome de seleção temporária como parâmetro *tempo*, o list box será preenchido com os dados dos registros que pertencem à seleção temporária.

O parâmetro opcional *nomeSelecionado* associa um conjunto de destacar com o list box. O conjunto de destacar gerencia destacando registro pelo usuário no list box.

Se o list box já conter as colunas, seus conteúdos são atualizados depois da execução do comando.

**Nota**: por razões de otimização, este comando é processado de maneira anacrônica, ou seja, a mudança de fonte do listbox é realizada apenas quando a execução do método do qual se chama o comando é completada.

#### Ver também 

[LISTBOX GET TABLE SOURCE](listbox-get-table-source.md)  