---
id: ob-is-shared
title: OB Is shared
slug: /commands/ob-is-shared
displayed_sidebar: docs
---

<!--REF #_command_.OB Is shared.Syntax-->**OB Is shared** ( *aVerificar* : Object, Collection ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Is shared.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| aVerificar | Object, Collection | &#8594; | Objeto ou coleção a verificar |
| Resultado | Boolean | &#8592; | True se o objeto ou coleção for compartilhável, False se for alterável |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|18 R5|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.OB Is shared.Summary-->O comando **OB Is shared** devolve **True** se o objeto ou coleção *aVerificar* é compartido, e **False** em caso contrário (ver *Objetos compartidos e Coleções compartidas*).<!-- END REF-->

Este comando devolve **True** se for passado uma seleção de entidades compaível em *aVerificar* (ver ).


## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1759 |
| Thread-seguro | yes |


