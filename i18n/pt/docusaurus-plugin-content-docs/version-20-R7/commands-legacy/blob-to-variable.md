---
id: blob-to-variable
title: BLOB TO VARIABLE
slug: /commands/blob-to-variable
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO VARIABLE.Syntax-->**BLOB TO VARIABLE** ( *BLOB* ; *variável* {; *offset*} )<!-- END REF-->
<!--REF #_command_.BLOB TO VARIABLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB que contém variáveis 4D |
| variável | Variable | &#8596;| Variável a ser escrita com o conteúdo do BLOB |
| || | Integer | &#8594;  | Posição da variável no BLOB |
| &#8592; | Posição da próxima variável no BLOB |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BLOB TO VARIABLE.Summary-->O comando BLOB TO VARIABLE  reescreve a variável *variável* com os dados armazenados dentro do BLOB *blob* no deslocamento de byte (a partir de zero) especificada pelo *offset*.<!-- END REF-->

Os dados BLOB devem ser consistentes com a variável destino. Normalmente, você irá usar BLOBs que você previamente preenchidos com o comando [VARIABLE TO BLOB](variable-to-blob.md).

Se você não especificar o parâmetro opcional *offset*, os dados da variável são lidos a partir do início do BLOB. Se você lidar com um BLOB em que diversas variáveis tenham sido armazenados, você deve passar o parâmetro de *offset* e, além disso, você deve passar uma variável numérica. Antes da chamada, defina essa variável numérica para o deslocamento apropriado. Após a chamada, a mesma variável numérica retorna o deslocamento da próxima variável armazenada dentro do BLOB.

**Nota:** **BLOB TO VARIABLE** Suporta as variáveis objeto de tipo *C\_OBJECT*. Para maior informação, consulte o comando [VARIABLE TO BLOB](variable-to-blob.md).

Após a chamada, se a variável foi reescrita com sucesso, a variável OK é definida como 1\. Se a operação não pôde ser executada, a variável OK é definido como 0, por exemplo, se não havia memória suficiente.

**Nota sobre a independência da plataforma:** BLOB TO VARIABLE e [VARIABLE TO BLOB](variable-to-blob.md) usam um formato interno de 4D para o processamento de listas armazenadas em BLOBs. Como benefício, você não precisa se preocupar com a troca de bytes entre as plataformas ao usar esses dois comandos. Em outras palavras, um BLOB criado no Windows usando um desses comandos podem ser reutilizados em Macintosh, e vice-versa.  

#### Exemplo 

Veja os exemplos para o comando [VARIABLE TO BLOB](variable-to-blob.md "VARIABLE TO BLOB").

#### Variáveis e conjuntos do sistema 

A variável OK é definida como 1 se a variável foi reescrita com sucesso, caso contrário, ela é definido como 0.

#### Ver também 

[VARIABLE TO BLOB](variable-to-blob.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 533 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


