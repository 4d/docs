---
id: blob-to-list
title: BLOB to list
slug: /commands/blob-to-list
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to list.Syntax-->**BLOB to list** ( *BLOB* {; *offset*} ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB to list.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB que contém uma lista hierárquica |
| offset | Integer | &#8596;  | Offset no BLOB (expressado em bytes) |
| ||| Novo offset depois da leitura |
| Resultado | Integer | &#8592; | Referência da lista criada recentemente |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.BLOB to list.Summary-->O comando BLOB to list cria uma lista hierárquica com os dados armazenados no BLOB blob no o offset de bytes (a partir de zero) especificado pelo *offset* e retorna um número de referência de lista hierárquica para essa nova lista.<!-- END REF-->

Os dados do BLOB devem ser coerentes com o comando. Normalmente, você irá usar BLOBs que você previamente preenchou utilizando o comando [LIST TO BLOB](list-to-blob.md).

Se você não especificar o parâmetro opcional *offset*, os dados da lista são lidos a partir do início do BLOB. Se você lidar com um BLOB em que diversas variáveis ou listas tenham sido armazenados, você deve passar o parâmetro de deslocamento e, além disso, você deve passar uma variável numérica. Antes da chamada, defina essa variável numérica para o deslocamento apropriado. Após a chamada, a mesma variável numérica retorna o deslocamento da próxima variável armazenada dentro do BLOB.

Após a chamada, se a lista hierárquica foi criado com sucesso, a variável OK é definida como 1\. Se a operação não pôde ser executada, a variável OK é definido como 0, por exemplo, se não havia memória suficiente.

**Nota sobre a independência de plataforma**: BLOB to list e [LIST TO BLOB](list-to-blob.md) usam um formato interno de 4D para o processamento de listas armazenadas em BLOBs. Como benefício, você não precisa se preocupar com a troca de bytes entre as plataformas ao usar esses dois comandos. Em outras palavras, um BLOB criado no Windows usando os dois comandos podem ser reutilizados em Macintosh e vice-versa.

#### Exemplo 

Neste exemplo, o método do formulário para um formulário de entrada de dados extrai uma lista de um campo BLOB antes que o formulário seja exibido na tela, e armazena-lo de volta no campo BLOB se a entrada de dados for validada:

```4d
  // Método de formulario [Coisas para fazer];"Entrada"
 
 Case of
 
    :(FORM Event=On Load)
       hList:=BLOB to list([Coisas para fazer]Ideias)
       If(OK=0)
          hList:=New list
       End if
 
    :(FORM Event=On Unload)
       CLEAR LIST(hList;*)
 
    :(bValidate=1)
       LIST TO BLOB(hList;[Coisas para fazer]Ideias)
 
 End case
```

#### Variáveis e conjuntos do sistema 

A variável OK recebe o valor 1 se a lista for criada corretamente, caso contrário recebe o valor 0.

#### Ver também 

[LIST TO BLOB](list-to-blob.md)  