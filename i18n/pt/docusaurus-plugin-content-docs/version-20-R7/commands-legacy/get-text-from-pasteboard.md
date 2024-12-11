---
id: get-text-from-pasteboard
title: Get text from pasteboard
slug: /commands/get-text-from-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.Get text from pasteboard.Syntax-->**Get text from pasteboard**  : Text<!-- END REF-->
<!--REF #_command_.Get text from pasteboard.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Retorna o texto (se houver) presente na área de transferência |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get text from pasteboard.Summary-->Get text from pasteboard devolve o texto na área de transferência.<!-- END REF--> 

**Nota**: no caso das operações copiar/colar, o container de dados corresponde a área de transferência

Se o container de dados contém texto enriquecido (por exemplo em formato RTF), o texto conserva seus atributos ao soltar ou colar, se a área de destino é compatível.

Note que os campos e variáveis de tipo texto de 4D podem conter até 2 GB de texto.

#### Variáveis e conjuntos do sistema 

Se o texto for extraído corretamente, OK toma o valor 1; do contrário OK toma o valor 0 e é gerado um erro.

#### Ver também 

[GET PASTEBOARD DATA](get-pasteboard-data.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  
[Pasteboard data size](pasteboard-data-size.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 524 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


