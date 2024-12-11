---
id: set-text-to-pasteboard
title: SET TEXT TO PASTEBOARD
slug: /commands/set-text-to-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.SET TEXT TO PASTEBOARD.Syntax-->**SET TEXT TO PASTEBOARD** ( *texto* )<!-- END REF-->
<!--REF #_command_.SET TEXT TO PASTEBOARD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| texto | Text | &#8594;  | Texto a copiar na área de transferência |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET TEXT TO PASTEBOARD.Summary-->SET TEXT TO PASTEBOARD limpa a área de transferência e depois coloca uma cópia do texto em *texto* na área de transferência.<!-- END REF--> 

**Nota:** no caso das operações copiar/colar, pasteboard é equivalente a clipboard.

Depois de colocar texto na área de transferência, pode recuperá-lo utilizando o comando [Get text from pasteboard](get-text-from-pasteboard.md) ou chamando [GET PASTEBOARD DATA](get-pasteboard-data.md) ("com.4d.text.native";...).

4D pode conter até 2 GB de texto

**Nota:** o pasteboard está em modo somente de leitura durante o evento de formulário On Drag Over. Não é possível utilizar este comando neste contexto.

#### Exemplo 

Ver o exemplo do comando [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD").

#### Variáveis e conjuntos do sistema 

Se o texto se coloca corretamente na área de transferência, a variável OK toma o valor 1\. Se não houver suficiente memória para colocar uma cópia do texto na área de transferência, a variável OK toma o valor 0, mas não é gerado erro.

#### Ver também 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 523 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


