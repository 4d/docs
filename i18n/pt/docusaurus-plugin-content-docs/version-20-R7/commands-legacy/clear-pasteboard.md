---
id: clear-pasteboard
title: CLEAR PASTEBOARD
slug: /commands/clear-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR PASTEBOARD.Syntax-->**CLEAR PASTEBOARD**<!-- END REF-->
<!--REF #_command_.CLEAR PASTEBOARD.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CLEAR PASTEBOARD.Summary-->O comando CLEAR PASTEBOARD apaga o conteúdo da área de transferência.<!-- END REF--> Se a área de transferência contiver múltiplas instâncias dos mesmos dados, todas as instâncias são apagadas. Depois de chamar a CLEAR PASTEBOARD, a área de transferência fica vazio. 

Deve chamar CLEAR PASTEBOARD antes de adicionar novos dados a área de transferência utilizando o comando [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD"), porque este último comando não limpa a área de transferência antes de adicionar novos dados. 

Se chama a CLEAR PASTEBOARD uma vez e depois chama a [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD") muitas vezes pode cortar ou copiar os mesmos dados sob diferentes formatos. 

Pelo contrário, os comandos [SET TEXT TO PASTEBOARD](set-text-to-pasteboard.md "SET TEXT TO PASTEBOARD") e [SET PICTURE TO PASTEBOARD](set-picture-to-pasteboard.md "SET PICTURE TO PASTEBOARD") limpam automaticamente a área de transferência antes de pôr dados TEXT ou PICT nele.

#### Exemplo 1 

O código a seguir apaga e depois adiciona dados a área de transferência: 

```4d
 CLEAR PASTEBOARD //Apaga o conteúdo da área de transferência
 APPEND DATA TO PASTEBOARD('XWKZ';$vxAlgumDado) // Adiciona dados de tipo 'XWKZ'
 APPEND DATA TO PASTEBOARD('SYLK';$vxSylkDados) // Adiciona dados de tipo SYLK
```

#### Exemplo 2 

Ver o exemplo do comando [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD").

#### Ver também 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 402 |
| Thread-seguro | &check; |
| Proibido no servidor ||


