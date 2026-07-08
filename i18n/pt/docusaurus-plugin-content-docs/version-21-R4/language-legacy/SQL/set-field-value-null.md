---
id: set-field-value-null
title: SET FIELD VALUE NULL
slug: /commands/set-field-value-null
displayed_sidebar: docs
---

<!--REF #_command_.SET FIELD VALUE NULL.Syntax-->**SET FIELD VALUE NULL** ( *campo* : Field )<!-- END REF-->
<!--REF #_command_.SET FIELD VALUE NULL.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campo | Field | &#8594; | Campo onde o valor NULL vai ser atribuído |
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

<!--REF #_command_.SET FIELD VALUE NULL.Summary-->O comando SET FIELD VALUE NULL atribui o valor NULL ao campo designado pelo parâmetro *campo*.<!-- END REF-->  
  
O valor NULL é utilizado pelo motor SQL de 4D. Para maior informação, consulte o manual de 4D SQL.  
  
**Nota**:

* é possível não permitir o valor NULL para os campos 4D ao nível do editor de Estrutura (ver o manual de Desenho).
* **SET FIELD VALUE NULL** apaga os conteúdos dos objetos campos.

## Ver também 

[Is field value Null](../commands/is-field-value-null)  
[Null](../commands/null)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 965 |
| Thread-seguro | yes |


