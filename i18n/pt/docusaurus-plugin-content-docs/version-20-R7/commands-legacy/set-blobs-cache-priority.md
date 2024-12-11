---
id: set-blobs-cache-priority
title: SET BLOBS CACHE PRIORITY
slug: /commands/set-blobs-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.SET BLOBS CACHE PRIORITY.Syntax-->**SET BLOBS CACHE PRIORITY** ( *Tabela* ; *prioridade* )<!-- END REF-->
<!--REF #_command_.SET BLOBS CACHE PRIORITY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Table | Table | &#8594;  | Tabela cujo valor de prioridade de dados dos "blobs" vai ser estabelecido para a sessão |
| prioridade | Integer | &#8594;  | Valor de prioridade de cache para BLOBS na tabela |

<!-- END REF-->

#### Modo especialista 

<!--REF #_command_.SET BLOBS CACHE PRIORITY.Summary-->Este comando está reservado para necessidades específicas.<!-- END REF--> Deve ser utilizado com cuidado, já que pode afetar o rendimento do banco de dados.

#### Descrição 

O comando **SET BLOBS CACHE PRIORITY** define uma *prioridade* específica para os dados "blobs" relacionados com *tabela n*a caché para todos os processos da sessão atual. Este comando deve ser chamado no método banco de dados **On Startup** ou **On Server Startup**.

**Nota:** este comando só funciona em modo local (4D Server e 4D); Não pode ser utilizado em modo remoto 4D.

Os tipos de campos de dados "Blobs" incluem BLOB, texto, imagem e objeto. Este comando maneja a prioridade para tais dados quando são armazenados no arquivo de dados unicamente.

Passe em *prioridade* uma das constantes abaixo de tema "*Gestão de Cache*":

| Constante                | Comentário                                      |
| ------------------------ | ----------------------------------------------- |
| Cache priority low       |                                                 |
| Cache priority very low  |                                                 |
| Cache priority normal    | Define a prioridade da cache a seu valor padrão |
| Cache priority high      |                                                 |
| Cache priority very high |                                                 |

#### Exemplo 

Em , se quiser definir uma prioridade alta para a tabela \[Customer\]:

```4d
 SET BLOBS CACHE PRIORITY([Customer];Cache priority very high)
```

#### Ver também 

[ADJUST BLOBS CACHE PRIORITY](adjust-blobs-cache-priority.md)  
[Get adjusted blobs cache priority](get-adjusted-blobs-cache-priority.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1425 |
| Thread-seguro | &check; |
| Proibido no servidor ||


