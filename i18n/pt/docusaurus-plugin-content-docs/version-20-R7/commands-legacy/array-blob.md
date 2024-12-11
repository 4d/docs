---
id: array-blob
title: ARRAY BLOB
slug: /commands/array-blob
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY BLOB.Syntax-->**ARRAY BLOB** ( *nomArray* ; *tam* {; *tam2*} )<!-- END REF-->
<!--REF #_command_.ARRAY BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomArray | Array | &#8594;  | Nome do array |
| tam | Integer | &#8594;  | Número de elementos do array ou número de arrays se especificado tam2 |
| tam2 | Integer | &#8594;  | Número dos elementos dos array 2D |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ARRAY BLOB.Summary-->O comando **ARRAY BLOB** cria e/ou muda o tamaño de um array de elementos de tipo Blob em memória .<!-- END REF-->  
  
O parâmetro *nomArray* é o nome do array.  
  
O parâmetro *tam* é o número de elementos do array.  
  
O parâmetro *tam2* é opcional. Se passar, este comando cria um array de duas dimensões. Neste caso, *tam* especifica o número de filas e *tam2* o número de colunas de cada array. Cada fila em um array de duas dimensões pode ser processado tanto como um elemento e como um array. Isto significa que quando se trabalha com a primeira dimensão de um array de duas dimensões, pode inserir e retirar arrays inteiros utilizando outros comandos neste tema.  
  
Quando se aplica o comando **ARRAY BLOB** a um array existente:

* Se ampliar seu tamanho, os elementos existentes não são mudados e os novos elementos se inicializam em um BLOB vazio ([BLOB size](blob-size.md)\= 0).
* Se reduzir seu tamanho, são eliminados e perdem os elementos abaixo do array.

#### Exemplo 1 

Este exemplo cria um array processo que contém 100 elementos de tipo BLOB:

```4d
 ARRAY BLOB(arrBlob;100)
```

#### Exemplo 2 

Este exemplo cria um array local de 100 filas, que contém cada uma 50 elementos de tipo BLOB:

```4d
 ARRAY BLOB($arrBlob;100;50)
```

#### Exemplo 3 

Este exemplo cria um array local de 100 filas, contendo cada uma 50 elementos de tipo BLOB. A variável $*vByteValue* recebe o décimo byte do BLOB localizado na sétima coluna e a quinta fila do array BLOB:

```4d
 C_INTEGER($vByteValue)
 ARRAY BLOB($arrValues;100;50)
 ...
 $vByteValue:=$arrValues{5}{7}{9}
```

#### Ver também 

*Criando arrays*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1222 |
| Thread-seguro | &check; |
| Proibido no servidor ||


