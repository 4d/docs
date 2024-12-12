---
id: get-picture-resource
title: GET PICTURE RESOURCE
slug: /commands/get-picture-resource
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE RESOURCE.Syntax-->**GET PICTURE RESOURCE** ( *resNum* ; *resDados* {; *resArquivo*} )<!-- END REF-->
<!--REF #_command_.GET PICTURE RESOURCE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| resNum | Integer | &#8594;  | Número de Resource |
| resDados | Field, Variable | &#8594;  | Campo imagem ou variável a receber a imagem |
| &#8592; | Conteúdos do recurso PICT |
| resArquivo | Time | &#8594;  | Número de referência do arquivo de Resource ou arquivo de resource atual se omitido |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.GET PICTURE RESOURCE.Summary-->O comando GET PICTURE RESOURCE retorna no campo ou na variável *resDados* a imagem guardada no recurso imagem (“PICT”) cujo número se passa em *resNum*.<!-- END REF-->  
  
Se o recurso não se encontra, o parâmetro *resDados* não se modifica e a variável OK toma o valor 0 (zero).  
  
Se passa um número de referência de arquivo de recursos válido em *resArquivo*, o recurso se busca nesse arquivo unicamente. Se não passa *resArquivo*, se retorna a primeira ocorrência do recurso encontrado na cadeia de arquivos de recursos.  
  
**Nota**: o tamanho de um recurso imagem pode ser de vários megabytes.

#### Exemplo 

Ver o exemplo do comando [RESOURCE LIST](resource-list.md "RESOURCE LIST").

#### Variáveis e conjuntos do sistema 

A variável sistema OK toma o valor 1 se for encontrado o recurso, do contrário toma o valor 0 (zero).

#### Gestão de erros 

Se não houver memória suficiente para carregar a imagem, um erro é gerado. Pode interromper esse erro com a ajuda de um método de gestão de erros instalado pelo comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver também 

[ON ERR CALL](on-err-call.md)  