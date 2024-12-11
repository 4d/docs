---
id: move-document
title: MOVE DOCUMENT
slug: /commands/move-document
displayed_sidebar: docs
---

<!--REF #_command_.MOVE DOCUMENT.Syntax-->**MOVE DOCUMENT** ( *rotaFonte* ; *rotaDestino* )<!-- END REF-->
<!--REF #_command_.MOVE DOCUMENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rotaFonte | Text | &#8594;  | Nome da rota completa do documento existente |
| rotaDestino | Text | &#8594;  | Rota de acesso destino |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.MOVE DOCUMENT.Summary-->O comando MOVE DOCUMENT move ou renomeia um documento.<!-- END REF-->  

Passe a rota de acesso completa ao documento existente em *rotaFonte* e o novo nome e/ou localização do documento em *rotaDest*.  
  
**Advertência**: utilizando MOVE DOCUMENT, pode mover um documento desde e para qualquer diretório no mesmo volume. Se desejar mover um documento entre dois volumes diferentes, utilize o comando [COPY DOCUMENT](copy-document.md) para “mover” o documento, e depois apagar a cópia original com o comando [DELETE DOCUMENT](delete-document.md)..  

#### Exemplo 1 

O exemplo abaixo renomeia o documento *DocNome*: 

```4d
 MOVE DOCUMENT("C:\\PASTA\\DocNome";"C:\\PASTA\\NewDocNome")
```

#### Exemplo 2 

O exemplo abaixo move e renomeia o documento DocNome:

```4d
 MOVE DOCUMENT("C:\\PASTA1\\DocNome";"C:\\PASTA2\\NewDocNome")
```

#### Exemplo 3 

O exemplo abaixo move o documento DocNome:

```4d
 MOVE DOCUMENT("C:\\PASTA1\\DocNome";"C:\\PASTA2\\DocNome")
```

**Nota:** Nos últimos dois exemplos, a pasta destino *"C:\\\\PASTA2"* precisa existir. O comando MOVE DOCUMENT apenas movimenta o documento; ele não cria pastas. 

#### Ver também 

[COPY DOCUMENT](copy-document.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 540 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |
| Proibido no servidor ||


