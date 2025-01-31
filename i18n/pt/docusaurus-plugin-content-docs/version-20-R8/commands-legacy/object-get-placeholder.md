---
id: object-get-placeholder
title: OBJECT Get placeholder
slug: /commands/object-get-placeholder
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get placeholder.Syntax-->**OBJECT Get placeholder** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get placeholder.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| Resultado | Text | &#8592; | Texto de exemplo associado ao objeto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get placeholder.Summary-->O comando **OBJECT Get placeholder** devolve o texto de exemplo associado ao objeto ou aos objetos designado(s) pelos parâmetros *objeto* e *\**.<!-- END REF--> Se não há nenhum texto do marcador associado com o objeto, o comando devolve uma cadeia vazia.

Pode definir o texto do marcador, seja usando a lista de propriedades ou utilizando o comando [OBJECT SET PLACEHOLDER](object-set-placeholder.md).

Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável no lugar de uma cadeia (campo ou variável de objeto unicamente).

Se o marcador é uma referência xliff definida pela lista de propriedades, o comando devolve a referência original no formulário ":xliff:resname", e não a seu valor calculado.

#### Exemplo 

Se quer receber o texto do marcador de campo:

```4d
 $txt:=OBJECT Get placeholder([People]LastName)
```

#### Ver também 

[OBJECT SET PLACEHOLDER](object-set-placeholder.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1296 |
| Thread-seguro | &cross; |


