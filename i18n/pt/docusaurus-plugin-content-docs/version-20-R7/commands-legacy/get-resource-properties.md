---
id: get-resource-properties
title: Get resource properties
slug: /commands/get-resource-properties
displayed_sidebar: docs
---

<!--REF #_command_.Get resource properties.Syntax-->**Get resource properties** ( *resTipo* ; *resNum* {; *resArquivo*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get resource properties.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| resTipo | Text | &#8594;  | tipo de resource de 4 caracteres |
| resNum | Integer | &#8594;  | Número do resource |
| resArquivo | Time | &#8594;  | Número de referência do arquivo Resource, ou todos os arquivos de referência abertos, se omitido |
| Resultado | Integer | &#8592; | Atributos dos resources |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Get resource properties.Summary-->O comando **Get resource properties** retorna os atributos do recurso cujo tipo se passa em *resTipo* e cujo número de identificação se passa em *resNum*.<!-- END REF-->  
  
Se passa um número de referência de arquivo de recursos válido em *resArquivo*, o recurso é pesquisado apenas nesse arquivo. Se não passar *resArquivo*, o arquivo é pesquisado nos arquivos de recursos abertos.  
  
Se o arquivo de recursos não existir, **Get resource properties** retorna 0 (zero) e a variável OK toma o valor *0* (zero).  
  
O valor numérico devolvido por **Get resource properties** deve considerado como um valor binário cujos bits tem um significado especial.  

#### Exemplo 

Ver o exemplo do comando [Get resource name](get-resource-name.md).

#### Variáveis e conjuntos do sistema 

A variável sistema OK toma o valor 0 se o recurso não existir, do contrário assume o valor 1\. 
