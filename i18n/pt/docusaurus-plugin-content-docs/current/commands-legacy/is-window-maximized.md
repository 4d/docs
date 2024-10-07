---
id: is-window-maximized
title: Is window maximized
slug: /commands/is-window-maximized
displayed_sidebar: docs
---

<!--REF #_command_.Is window maximized.Syntax-->**Is window maximized** ( *janela* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Is window maximized.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#x1F852; | número de referência da janela |
| Resultado | Boolean | &#x1F850; | True se a janela estiver maximizada. Se não, False |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Is window maximized.Summary-->O comando **Is window maximized** devolve **True** se a janela cujo número de referência for passado em *janela* estiver maximizada,no momento e **False** no caso contrário.<!-- END REF-->

#### Exemplo 

Se quiser mudar entre o estado maximizado e o anterior:

```4d
 If(Is window maximized($winRef))
    MINIMIZE WINDOW($winRef)
 Else
    MAXIMIZE WINDOW($winRef)
 End if
```

#### Ver também 

[Is window reduced](is-window-reduced.md)  
[MAXIMIZE WINDOW](maximize-window.md)  