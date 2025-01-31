---
id: data-file
title: Data file
slug: /commands/data-file
displayed_sidebar: docs
---

<!--REF #_command_.Data file.Syntax-->**Data file** {( *segmento* )} : Text<!-- END REF-->
<!--REF #_command_.Data file.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| segmento | Integer | &#8594;  | Obsoleto, não use |
| Resultado | Text | &#8592; | Nome longo do arquivo de dados do banco de dados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Data file.Summary-->O comando Data file retorna o nome longo do arquivo de dados ou do primeiro segmento do banco no qual você está trabalhando atualmente.<!-- END REF-->

A partir da versão 11 de 4D, não são mais suportados segmentos de dados. O parâmetro *segmento* é ignorado e não deve mais ser utilizado.

*Em Windows*  
Se você está trabalhando, por exemplo, com o banco MeusCDs em DOCMeusCDs no disco G, uma chamada a Data File retorna G:DOCSMisCDs MisCDs .4DD (sempre e quando você tenha aceitado a localização e o nome padrão proposto por 4D quando você criou o banco).

*Em Macintosh*  
Se você está trabalhando, por exemplo, com o banco na pasta Documentos:MeusCDsf: no disco Macintosh HD, uma chamada a Data file retorna Macintosh HD:Documentos:MeusCDsƒ:MeusCDsƒ.data (sempre e quando você tenha aceitado a localização e o nome padrão proposto por 4D quando você criou o banco).

**Atenção:** se você chama este comando desde 4D em modo remoto, você só retorna o nome do arquivo de dados, não o nome longo.

#### Ver também 

[Application file](application-file.md)  
[Structure file](structure-file.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 490 |
| Thread-seguro | &check; |


