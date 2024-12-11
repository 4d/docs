---
id: get-external-data-path
title: Get external data path
slug: /commands/get-external-data-path
displayed_sidebar: docs
---

<!--REF #_command_.Get external data path.Syntax-->**Get external data path** ( *ocampo* ) : Text<!-- END REF-->
<!--REF #_command_.Get external data path.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| ocampo | Text, Blob, Picture | &#8594;  | Campo do qual obter o lugar de armazenamento |
| Resultado | Text | &#8592; | Via de acesso completa do arquivo de armazenamento externo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get external data path.Summary-->O comando **Get external data path** devolve a via de acesso completa do arquivo de armazenamento externo de dados do campo passado no parâmetro *oCampo*, para o registro atual.<!-- END REF--> Deve passar no parâmetro oCampo campos de tipo Texto, BLOB ou Imagem. O comando retorna o caminho de acesso do arquivo de armazenamento se o arquivo não existir mais ou não for acessível.   
  
Mais especificamente, este comando lhe permite copiar novamente o arquivo externo.  
  
**Nota**: para obter mais informação sobre o armazenamento externo de dados, consulte o manual de *Desenho*.  
  
Este comando devolve uma cadeia vazia nos seguintes casos:

* O campo não se guarda fora do arquivo de dados.
* O campo tem um valor Null, em cujo caso o arquivo externo não foi criado.
* O comando se executa desde um 4D remoto.

#### Ver também 

[SET EXTERNAL DATA PATH](set-external-data-path.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1133 |
| Thread-seguro | &check; |


