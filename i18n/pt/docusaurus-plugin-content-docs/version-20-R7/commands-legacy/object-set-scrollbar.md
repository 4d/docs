---
id: object-set-scrollbar
title: OBJECT SET SCROLLBAR
slug: /commands/object-set-scrollbar
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SCROLLBAR.Syntax-->**OBJECT SET SCROLLBAR** ( {* ;} *objeto* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT SET SCROLLBAR.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| horizontal | Boolean, Integer | &#8594;  | True = exibir, False = esconder |
| vertical | Boolean, Integer | &#8594;  | True = exibir, False = esconder |

<!-- END REF-->

#### Descrição 

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

#### Ver também 

[LISTBOX Get property](listbox-get-property.md)  
[LISTBOX SET GRID](listbox-set-grid.md)  
[OBJECT GET SCROLLBAR](object-get-scrollbar.md)  
[OBJECT SET VISIBLE](object-set-visible.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 843 |
| Thread-seguro | &check; |
| Proibido no servidor ||


