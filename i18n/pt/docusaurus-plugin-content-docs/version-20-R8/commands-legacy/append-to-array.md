---
id: append-to-array
title: APPEND TO ARRAY
slug: /commands/append-to-array
displayed_sidebar: docs
---

<!--REF #_command_.APPEND TO ARRAY.Syntax-->**APPEND TO ARRAY** ( *array* ; *valor* )<!-- END REF-->
<!--REF #_command_.APPEND TO ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array ao qual o elemento será anexado |
| valor | Expression | &#8594;  | Valor a acrescentar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.APPEND TO ARRAY.Summary-->O comando APPEND TO ARRAY adiciona um novo elemento ao fim do array e atribui valor ao elemento.<!-- END REF--> Em modo interpretado, se *array* não existe, o comando o cria com com respeito ao tipo de *valor*. 

Esse comando trabalha com todos os tipos de array: alfanumérico, numérico, booleano, data, apontador e imagem. 

O tipo de *valor* deve combinar com o tipo de array, caso contrário, será gerado um erro de sintaxe 54 "Os tipos de argumento são incompatíveis". Os seguintes valores, contudo, serão aceitos:   
• um *array* alfanumérico (Texto ou Alfa) aceita qualquer valor de tipo alfanumérico ou texto.   
• um *array de* numérico (Inteiro, Inteiro largo ou Real) aceita qualquer valor de tipo Inteiro, Inteiro Largo, Real ou Hora. 

#### Exemplo 

O seguinte código:

```4d
 INSERT IN ARRAY($meuarray;Size of array($meuarray)+1)
 $meuarray{Size of array($meuarray)}:=$meuvalor
```

... pode ser substituído por:

```4d
 APPEND TO ARRAY($meuarray;$meuvalor)
```

#### Ver também 

[DELETE FROM ARRAY](delete-from-array.md)  
[INSERT IN ARRAY](insert-in-array.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 911 |
| Thread-seguro | &check; |


