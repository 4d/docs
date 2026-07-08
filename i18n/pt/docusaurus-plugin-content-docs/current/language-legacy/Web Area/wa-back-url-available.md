---
id: wa-back-url-available
title: WA Back URL available
slug: /commands/wa-back-url-available
displayed_sidebar: docs
---

<!--REF #_command_.WA Back URL available.Syntax-->**WA Back URL available** ( * ; *objeto* : Text ) : Boolean<br/>**WA Back URL available** ( *objeto* : Variable, Field ) : Boolean<!-- END REF-->
<!--REF #_command_.WA Back URL available.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594; | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| Resultado | Boolean | &#8592; | TRUE se houver uma URL anterior na sequência de URLs abertas; senão, FALSE |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL Release 2|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.WA Back URL available.Summary-->O comando WA Back URL available descobre se existe uma URL anterior disponível na sequência de URLs abertas na área web designada pelos parâmetros \* e *objeto*.<!-- END REF-->  

O comando retorna *True* se existe uma URL e do contrário *False*. Particularmente, este comando pode ser utilizado em uma interface personalizada, para ativar ou desativar os botões de navegação.

## Ver também 

[WA Forward URL available](../commands/wa-forward-url-available)  
[WA OPEN BACK URL](../commands/wa-open-back-url)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1026 |
| Thread-seguro | no |


