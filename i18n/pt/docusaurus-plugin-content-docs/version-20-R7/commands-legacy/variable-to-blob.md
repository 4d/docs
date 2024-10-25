---
id: variable-to-blob
title: VARIABLE TO BLOB
slug: /commands/variable-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.VARIABLE TO BLOB.Syntax-->**VARIABLE TO BLOB** ( *variável* ; *BLOB* {; offset | *} )<!-- END REF-->
<!--REF #_command_.VARIABLE TO BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| variável | Variable | &#8594;  | Variável a ser armazenada no BLOB |
| Blob | Blob | &#8594;  | BLOB a receber a variável |
| offset &#124; * | Variável, Operador | &#8596; | Offset da variável(expressado em bytes) no BLOB ou * para adicionar o valor |
| ||| Novo offset depois de escrita se * for omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.VARIABLE TO BLOB.Summary-->O comando VARIABLE TO BLOB armazena a *variável* no BLOB *blob*.<!-- END REF-->

Se você especificar o parâmetro opcional \*, a variável é acrescentada ao BLOB e o tamanho do BLOB é aumentado em conformidade. Usando o parâmetro opcional \*, você pode armazenar qualquer número de variáveis ou listas (ver outros comandos BLOB) em um BLOB, enquanto o BLOB couber na memória. 

Se você não especificar o parâmetro opcional \* ou o parâmetro de deslocamento variável, a variável é armazenada no início do BLOB, substituindo o conteúdo anterior, o tamanho do BLOB é ajustado em conformidade.

Se você passar o parâmetro de deslocamento variável, a variável é escrita no offset (a partir do zero) dentro do BLOB. Não importa onde você escreva a variável, o tamanho do BLOB é aumentado de acordo com o local que você passou (mais o tamanho da variável, se necessário). Bytes recém-alocados, com exceção do que você está escrevendo, são inicializados em zero.

Após a chamada, o parâmetro variável *offset* é devolvido, incrementado pelo número de bytes que foram escritos. Portanto, você pode reutilizar a mesma variável com outro comando de escrita BLOB para escrever uma outra variável ou lista.

VARIABLE TO BLOB aceita qualquer tipo de variável (incluindo outros BLOBs), exceto os seguintes:

* Ponteiros
* Array de ponteiros

Note que:

* Se guardar uma variável de tipo Inteiro longo que é uma referência a uma lista hierárquica (ListRef), VARIABLE TO BLOB guardará a variável Inteiro longo, não a lista. Para guardar e recuperar as listas hierárquicas em um BLOB, utilize os comandos [LIST TO BLOB](list-to-blob.md) e [BLOB to list](blob-to-list.md).
* Se passar um objeto ou uma coleção no parâmetro *variavel*, o comando põe uma cópia (e não uma referência) no BLOB. Se o objeto contém ponteiros, os valores não referenciados são guardados no BLOB, não os ponteiros mesmos.

**ATENÇÃO:** Se você usar um BLOB para armazenar as variáveis, você deve usar mais tarde o comando [BLOB TO VARIABLE](blob-to-variable.md) para reler o conteúdo do BLOB, pois as variáveis são armazenadas em BLOBs usando um formato interno de 4D.

Após a chamada, se a variável foi armazenada com sucesso, a variável OK é definida como 1\. Se a operação não pôde ser executada, a variável OK é definida como 0, por exemplo, não havia memória suficiente.

**Nota sobre a independência de plataforma:** VARIABLE TO BLOB e [BLOB TO VARIABLE](blob-to-variable.md) usam um formato interno de 4D para lidar com variáveis armazenadas em BLOBs. Como benefício, você não precisa se preocupar com a troca de bytes entre as plataformas ao usar esses dois comandos. Em outras palavras, um BLOB criado no Windows usando um desses comandos podem ser reutilizados em Macintosh, e vice-versa.

##### Nota 

**Nota de compatibilidade**: como este comando altera o blob passado como parâmetro, não é compatível com objetos blob (tipo 4D.Blob). Ver *Passing blobs and blob objects to 4D commands* em developer.4d.com

#### Variáveis e conjuntos do sistema 

A variável OK é definida como 1 se a variável foi armazenada com sucesso, caso contrário, ela é definido como 0.

#### Exemplo 1 

Os dois métodos de projeto a seguir permitem armazenar e recuperar rapidamente qualquer conjunto de variáveis de/para um BLOB:

```4d
  // Método de projeto GUARDAR VARIABLES EN BLOB
  // GUARDAR VARIABLES EN BLOB ( Ponteiro{ ; Ponteiro... { ; Ponteiro} } )
  // GUARDAR VARIABLES EN BLOB ( BLOB { ; Var1 ... { ; Var2 } } )
 var ${1} : Pointer
 var $vlParam : Integer
 
 SET BLOB SIZE($1->;0)
 For($vlParam;2;Count parameters)
    VARIABLE TO BLOB(${$vlParam}->;$1->;*)
 End for
 
 
  // Método de projeto RECUPERAR VARIAVEIS DO BLOB
  // RECUPERAR VARIAVEIS DO BLOB ( Ponteiro{ ; Ponteiro... { ; Ponteiro} } )
  // RECUPERAR VARIAVEIS DO BLOB ( BLOB { ; Var1 ... { ; Var2 } } )
 var ${1} : Pointer
 var $vlParam;$vlOffset : Integer
 
 $vlOffset:=0
 For($vlParam;2;Count parameters)
    BLOB TO VARIABLE($1->;${$vlParam}->;$vlOffset)
 End for
```

Depois que estes métodos foram adicionados ao seu aplicativo, você pode escrever:

```4d
 GUARDAR VARIABLES EN BLOB(->vxBLOB;->vgImagem;->comoUmArray;->aoOutroArray)
  // ...
 RECUPERAR VARIABLES DEL BLOB(->vxBLOB;->vgImagem;->comoUmArray;->aoOutroArray)
```

#### Exemplo 2 

Os dois métodos de projeto a seguir permitem armazenar e recuperar rapidamente arrays e documentos em disco:

```4d
  // SAVE ARRAY project method
 
 // SAVE ARRAY (Text ; Pointer)
  // SAVE ARRAY (Document ; -> Array)
 var $1 : Text
 var $2 : Pointer
 var $vxArrayData : Blob
 VARIABLE TO BLOB($2->;$vxArrayData) //Armazena o array em BLOB
 COMPRESS BLOB($vxArrayData) // Comprime o BLOB
 BLOB TO DOCUMENT($1;$vxArrayData) // Salva o BLOB em disco


```

```4d
  // LOAD ARRAY project method
  // LOAD ARRAY (Text ; Pointer)
  // LOAD ARRAY (Document ; -> Array)
 var $1 : Text
 var $2 : Pointer
 var $vxArrayData : Blob
 DOCUMENT TO BLOB($1;$vxArrayData) // Carrega o BLOB a partir do disco
 EXPAND BLOB($vxArrayData) // Expande o BLOB
 BLOB TO VARIABLE($vxArrayData;$2->) // Busca o array do BLOB
```

Depois que esses métodos foram adicionados a sua aplicação, pode escrever:

```4d
 ARRAY TEXT(...;asAnyArray;...)
  //  ...
 SAVE ARRAY($vsDocName;->asAnyArray)
  //  ...
 LOAD ARRAY($vsDocName;->asAnyArray)
```

#### Ver também 

[BLOB to list](blob-to-list.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[LIST TO BLOB](list-to-blob.md)  