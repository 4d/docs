---
id: set-automatic-relations
title: SET AUTOMATIC RELATIONS
slug: /commands/set-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.SET AUTOMATIC RELATIONS.Syntax-->**SET AUTOMATIC RELATIONS** ( *um* : Boolean {; *muitos* : Boolean} )<!-- END REF-->
<!--REF #_command_.SET AUTOMATIC RELATIONS.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| um | Boolean | &#8594; | Estado de todas as relação Muitos a Um |
| muitos | Boolean | &#8594; | Estado de todas as relações Um a Muitos |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|2004|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.SET AUTOMATIC RELATIONS.Summary-->SET AUTOMATIC RELATIONS muda temporariamente todas as relações manuais em relações automáticas para todo o banco no processo atual.<!-- END REF--> As relações permanecem automáticas a menos que se realize uma chamada posterior a SET AUTOMATIC RELATIONS.

* Se *um* é true, então todas as relações Muitos a Um se transformam em automáticas. Se Um é false, todas as relações Muitos a Um se tornam manuais.
* Se *muitos* é true, então todas as relações Um a Muitos se transformam em automáticas. Se Muitos é false, todas as relações Um a Muitos se tornam manuais.

Este comando muda relações definidas como manuais em modo Desenho a automáticas, justo antes de executar operações que requeiram que sejam automáticas (tais como pesquisas relacionais e ordenações). Uma vez terminada a operação, as relações podem ser mudadas a manuais chamando novamente a **SET AUTOMATIC RELATIONS**. As relações definidas como automáticas no ambiente Desenho não são afetadas por este comando.  
  
**Nota:** 

* Quando passar [True](../commands/true) ao comando **SET AUTOMATIC RELATIONS**, o modo automático se "bloqueia" para todas as relações manuais durante a sessão. Neste caso, todas as chamadas ao comando [SET FIELD RELATION](../commands/set-field-relation) durante a mesma sessão se ignoram, sem importar se estavam antes ou depois de **SET AUTOMATIC RELATIONS**. Para "desbloquear" o modo automático e ter em conta as chamadas a [SET FIELD RELATION](../commands/set-field-relation), passe [False](../commands/false) a **SET AUTOMATIC RELATIONS**.
* As funcionalidades automáticas são desativadas quando as tabelas relacionadas são visualizadas em um formulário listado mostrado utilizando [DISPLAY SELECTION](../commands/display-selection), [MODIFY SELECTION](../commands/modify-selection), ou um subformulário. Ver *Relações manuais e automáticas*.

## Exemplo 

O exemplo a seguir torna automáticas todas as relações Muitos a Um e restabelece a manual todas as relações Um a Muitos modificadas previamente:

```4d
 SET AUTOMATIC RELATIONS(True;False)
```

## Ver também 

[GET AUTOMATIC RELATIONS](../commands/get-automatic-relations)  
[GET RELATION PROPERTIES](../commands/get-relation-properties)  
[SELECTION RANGE TO ARRAY](../commands/selection-range-to-array)  
[SELECTION TO ARRAY](../commands/selection-to-array)  
[SET FIELD RELATION](../commands/set-field-relation)  
*Sobre Relações*  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 310 |
| Thread-seguro | yes |


