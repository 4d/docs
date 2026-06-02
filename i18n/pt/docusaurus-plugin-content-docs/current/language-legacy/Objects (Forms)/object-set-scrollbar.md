---
id: object-set-scrollbar
title: OBJECT SET SCROLLBAR
slug: /commands/object-set-scrollbar
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SCROLLBAR.Syntax-->**OBJECT SET SCROLLBAR** ( * ; *objeto* : Text ; *horizontal* : Boolean, Integer ; *vertical* : Boolean, Integer )<br/>**OBJECT SET SCROLLBAR** ( *objeto* : Variable, Field ; *horizontal* : Boolean, Integer ; *vertical* : Boolean, Integer )<!-- END REF-->
<!--REF #_command_.OBJECT SET SCROLLBAR.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594; | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| horizontal | Boolean, Integer | &#8594; | True = exibir, False = esconder |
| vertical | Boolean, Integer | &#8594; | True = exibir, False = esconder |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|14|Modificado|
|12|Renomear|
|11 SQL|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.OBJECT SET SCROLLBAR.Summary-->O comando OBJECT SET SCROLLBAR lhe permite mostrar ou ocultar as barras de rolagem horizontal ou vertical no objeto designado pelos parâmetros *objeto* e *\**.<!-- END REF-->

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se não passa este parâmetro opcional *\**, indica que o parâmetro *objeto* é uma variável. Neste caso, é passada uma referência de uma variável ao invés de uma cadeia. Para mais informações sobre nomes de objetos, consulte a seção *Propriedades dos objetos*.

Passe nos parâmetros *horizontal* e *vertical* os valores booleanos indicando se as barras de rolagem correspondentes devem ser mostrados. Pode passar valores booleanos (True=mostrado, False=oculto), ou valores numéricos (0=oculto, 1=mostrado, 2=modo automático). O uso de valores numéricos lhe dá acesso ao modo automático, onde só são mostradas as barras de deslocamento quando for necessário.  
  
  
| **Objetos com barras de deslocamento** | **Ocultar barra de deslocamento** | **Mostrar barra de deslocamento** | **Modo automático** |
| -------------------------------------- | --------------------------------- | --------------------------------- | ------------------- |
| Campos e variável objeto texto         | False ou 0                        | True ou 1                         | *não disponível*    |
| Campos e variável objeto texto         | False ou 0                        | True ou 1                         | 2                   |
| List boxes                             | False ou 0                        | True ou 1                         | 2                   |
| Listas hierárquicas                    | False ou 0                        | True ou 1                         | 2                   |
| Sub formulários                        | False ou 0                        | True ou 1                         | *não disponível*    |

 Por padrão, se mostram as barras de deslocamento.

**Nota:** para obter mais informação sobre o modo automático, consulte *Barra de rolagem*.

## Ver também 

[LISTBOX Get property](../commands/listbox-get-property)  
[LISTBOX SET GRID](../commands/listbox-set-grid)  
[OBJECT GET SCROLLBAR](../commands/object-get-scrollbar)  
[OBJECT SET VISIBLE](../commands/object-set-visible)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 843 |
| Thread-seguro | no |



