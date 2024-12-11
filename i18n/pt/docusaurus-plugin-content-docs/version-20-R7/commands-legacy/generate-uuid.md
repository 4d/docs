---
id: generate-uuid
title: Generate UUID
slug: /commands/generate-uuid
displayed_sidebar: docs
---

<!--REF #_command_.Generate UUID.Syntax-->**Generate UUID** : Text<!-- END REF-->
<!--REF #_command_.Generate UUID.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Novo UUID como um texto não canônico (32 caracteres) |

<!-- END REF-->

#### Descrição 

Generate UUID retorna um novo identificador UUID de 32 caracteres em forma não canônica.  

Um UUID é um número de 16 bytes (128 bits). Contém 32 caracteres hexadecimais. Pode ser expresso de forma não canônica (séries de 32 letras \[A-F, a-f\] e/ou números \[0-9\], por exemplo 550e8400e29b41d4a716446655440000) ou em forma canônica (grupos de 8,4,4,4,12, por exemplo 550e8400-e29b-41d4-a716-446655440000).   
  
Em 4D, os números UUID podem ser guardados em campos. Para maior informação, por favor consulte o manual de Desenho.  

#### Exemplo 

Geração de um UUID em uma variável: 

```4d
 var MyUUID : Text
 MyUUID:=Generate UUID
```


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1066 |
| Thread-seguro | &check; |
| Proibido no servidor ||


