---
id: object-get-action
title: OBJECT Get action
slug: /commands/object-get-action
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get action.Syntax-->**OBJECT Get action** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get action.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se for especificado, objeto è um nome de objeto (string). Se omitido, objeto é um campo ou variável |
| objeto | any | &#8594;  | Nome de Objeto (se * for especificado) ou Campo ou variável (se * for omitido) |
| Resultado | Text | &#8592; | Nome da ação padrão associada e (se houver) parâmetro string |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get action.Summary-->O comando **OBJECT Get action** devolve o nome e (se for o caso) o parâmetro da ação padrão associada com o objeto designado pelos parâmetros *objeto e* *\**.<!-- END REF-->

Passar o parámetro opcional *\** indica que o parâmetro *objeto é* um nome de objeto (string). Se não passar este parâmetro, indica que o parâmetro *objeto* for um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável ao invés de uma string (só objeto campo ou variável).

Pode estabelecer uma ação padrão para um objeto no Editor de formulários utilizando a lista de propriedades ou utilizando o comando [OBJECT SET ACTION](object-set-action.md). **OBJECT Get action** devolve uma string que contenha o nome da ação padrão associada ao objeto (assim como seu parâmetro, se existir).

Para obter uma lista completa de ações padrão, consulte a seção *Ações padrões* no manual de *Desenho*. 

#### Exemplo 

Se quiser associar a ação "Cancelar" com todos os objetos no formulário que ainda não têm nenhuma ação associada:

```4d
 ARRAY TEXT($arrObjects;0)
 
 FORM GET OBJECTS($arrObjects)
 For($i;1;Size of array($arrObjects))
    If(OBJECT Get action(*;$arrObjects{$i})=ak none)
       OBJECT SET ACTION(*;$arrObjects{$i};ak cancel)
    End if
 End for
```

#### Ver também 

[OBJECT SET ACTION](object-set-action.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1457 |
| Thread-seguro | &cross; |


