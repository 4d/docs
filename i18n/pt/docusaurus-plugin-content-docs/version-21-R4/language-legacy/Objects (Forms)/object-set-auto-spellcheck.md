---
id: object-set-auto-spellcheck
title: OBJECT SET AUTO SPELLCHECK
slug: /commands/object-set-auto-spellcheck
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Syntax-->**OBJECT SET AUTO SPELLCHECK** ( * ; *objeto* : Text ; *correAuto* : Boolean )<br/>**OBJECT SET AUTO SPELLCHECK** ( *objeto* : Variable, Field ; *correAuto* : Boolean )<!-- END REF-->
<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto (cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594; | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| correAuto | Boolean | &#8594; | True = correção automática,False= não correção automática |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|13|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.OBJECT SET AUTO SPELLCHECK.Summary-->O comando **OBJECT SET AUTO SPELLCHECK** permite definir ou modificar dinamicamente o estado da opção **Correção ortográfica** dos objetos designados pelos parâmetros *objeto* e *\** para o processo atual.<!-- END REF--> Esta opção ativa ou desativa a correção ortográfica automática durante a entrada para o objeto.

Esse comando é compatível com objetos dos seguintes tipos:

- Baseado em texto [inputs](../../FormObjects/input_overview.md)
- [Áreas do 4D Write Pro](.../../FormObjects/writeProArea_overview.md).
  
Se passa o parâmetro opcional*\** , indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, isto indica que o parâmetro *objeto* é uma variável. Neste caso, se passa uma referencia de variável em lugar de uma cadeia.  
  
Passe **True** em *correAuto* para ativar esta função para objeto e **False** para desativar-la. 

## Ver também 

[OBJECT Get auto spellcheck](../commands/object-get-auto-spellcheck)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1173 |
| Thread-seguro | no |


