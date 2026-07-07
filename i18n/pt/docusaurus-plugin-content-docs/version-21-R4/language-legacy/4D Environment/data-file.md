---
id: data-file
title: Data file
slug: /commands/data-file
displayed_sidebar: docs
---

<!--REF #_command_.Data file.Syntax-->**Data file** ( *segmento* : Integer ) : Text<!-- END REF-->
<!--REF #_command_.Data file.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| segmento | Integer | &#8594; | Obsoleto, não use |
| Resultado | Text | &#8592; | Nome longo do arquivo de dados do banco de dados |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.Data file.Summary-->O comando Data file retorna o nome longo do arquivo de dados ou do primeiro segmento do banco no qual você está trabalhando atualmente.<!-- END REF-->

A partir da versão 11 de 4D, não são mais suportados segmentos de dados. O parâmetro *segmento* é ignorado e não deve mais ser utilizado.

*Em Windows*  
Se você está trabalhando, por exemplo, com o banco MeusCDs em DOCMeusCDs no disco G, uma chamada a Data File retorna G:DOCSMisCDs MisCDs .4DD (sempre e quando você tenha aceitado a localização e o nome padrão proposto por 4D quando você criou o banco).

*Em Macintosh*  
Se você está trabalhando, por exemplo, com o banco na pasta Documentos:MeusCDsf: no disco Macintosh HD, uma chamada a Data file retorna Macintosh HD:Documentos:MeusCDsƒ:MeusCDsƒ.data (sempre e quando você tenha aceitado a localização e o nome padrão proposto por 4D quando você criou o banco).

**Atenção:** se você chama este comando desde 4D em modo remoto, você só retorna o nome do arquivo de dados, não o nome longo.

## Ver também 

[Application file](../commands/application-file)  
[Structure file](../commands/structure-file)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 490 |
| Thread-seguro | yes |


