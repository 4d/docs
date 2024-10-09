---
id: get-resource-name
title: Get resource name
slug: /commands/get-resource-name
displayed_sidebar: docs
---

<!--REF #_command_.Get resource name.Syntax-->**Get resource name** ( *resTipo* ; *resNum* {; *resArquivo*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.Get resource name.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| resTipo | Text | &srarr; | tipo de resource de 4 caracteres |
| resNum | Integer | &srarr; | Número resource |
| resArquivo | Time | &srarr; | Número de referência do arquivo Resource, ou todos os arquivos de referência abertos, se omitido |
| Resultado | Text | &larr; | Nome do recurso |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get resource name.Summary-->O comando Get resource name retorna o nome do recurso cujo tipo se passa em *resTipo* e cujo número de referência (ID) em *resNum*.<!-- END REF-->  
  
Se passa um número de referência de arquivo de recursos no parâmetro *resArquivo*, o recurso é pesquisado apenas nesse arquivo. Se não passa *resArquivo*, o arquivo é pesquisado nos arquivos de recursos que estão abertos.  
  
Se o recurso não existir, Get resource name retorna uma cadeia vazia.
