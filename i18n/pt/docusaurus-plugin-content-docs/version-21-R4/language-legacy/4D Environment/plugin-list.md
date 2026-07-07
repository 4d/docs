---
id: plugin-list
title: PLUGIN LIST
slug: /commands/plugin-list
displayed_sidebar: docs
---

<!--REF #_command_.PLUGIN LIST.Syntax-->**PLUGIN LIST** ( *numerosArray* : Integer array ; *arrayNomes* : Text array )<!-- END REF-->
<!--REF #_command_.PLUGIN LIST.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numerosArray | Integer array | &#8592; | Números de plug-ins |
| arrayNomes | Text array | &#8592; | Nomes de plug-ins |
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

<!--REF #_command_.PLUGIN LIST.Summary-->O comandoPLUGIN LISTpreenche os arrays *numerosArray* e *arraynomes* com os números e os nomes dos plug-ins carregados e utilizáveis pela aplicação 4D.<!-- END REF--> Estes dois arrays são dimensionados automaticamente e sincronizados pelo comando. 

**Nota:** Você pode comparar os valores retornados pelo *numerosArray* com as constantes de "*Licença disponível*". 

PLUGIN LIST leva todos os plug-ins em consideração, incluindo aqueles que estão integrados (por exemplo, 4D Chart), e plug-ins de terceiros.

## Ver também 

[COMPONENT LIST](../commands/component-list)  
[Get plugin access](../commands/get-plugin-access)  
[Is license available](../commands/is-license-available)  
[SET PLUGIN ACCESS](../commands/set-plugin-access)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 847 |
| Thread-seguro | yes |


