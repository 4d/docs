---
id: is-field-value-null
title: Is field value Null
slug: /commands/is-field-value-null
displayed_sidebar: docs
---

<!--REF #_command_.Is field value Null.Syntax-->**Is field value Null** ( *campo* : Field ) : Boolean<!-- END REF-->
<!--REF #_command_.Is field value Null.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campo | Field | &#8594; | Campo a ser avaliado |
| Resultado | Boolean | &#8592; | TRUE = campo é NULL, False = campo não é NULL |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Is field value Null.Summary-->O comando Is field value Null retorna **True** se o campo determinado pelo parâmetro *Campo* contem o valor NULL e **False** do contrário.<!-- END REF-->  

O valor NULL é utilizado pelo motor SQL de 4D. Para maior informação, consulte *Manual de SQL* no manual 4D SQL.

O valor retornado por esse comando só tem significado se a opção *Mapear valores NULOS a valores vazios* não for selecionada no campo definição do editor de Structure. Se for selecionada, retorna **False**

**Nota:** este comando não pode ser utilizado com objetos e propriedades de objetos. Os valores nulos nos campos objeto são manejados através do comando [Null](../commands/null), 

## Ver também 

[Null](../commands/null)  
[SET FIELD VALUE NULL](../commands/set-field-value-null)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 964 |
| Thread-seguro | yes |


