---
id: volume-list
title: VOLUME LIST
slug: /commands/volume-list
displayed_sidebar: docs
---

<!--REF #_command_.VOLUME LIST.Syntax-->**VOLUME LIST** ( *volumes* )<!-- END REF-->
<!--REF #_command_.VOLUME LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| volumes | Text array | &#8592; | Nomes dos volumes atualmente montados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.VOLUME LIST.Summary-->O comando VOLUME LIST preenche o array *volumes*, tipo de texto, com os nomes dos volumes definidos (Windows) ou montados (Mac OS) em sua máquina.<!-- END REF-->  

* Em Macintosh, retorna a lista de volumes visíveis ao nível do Finder. Somente são devolvidos os nomes dos volumes (por exemplo "MacHD", "BootCamp", etc.).
* Em Windows, retorna a lista dos volumes atualmente definidos sem importar se o volume está presente fisicamente (por exemplo o volume E:\\ será devolvido sem importar ou não se há um CD ou DVD no drive). Os nomes dos volumes estão seguidos pelo caracter separador de pastas ("C:\\").

#### Exemplo 

Utilizando uma área de rolagem chamada *atVolumes*,se quiser mostrar a lista de volumes definidos ou montados em sua equipe, então escreve:

```4d
 Case of
    :(FORM Event=On Load)
       ARRAY TEXT(atVolumes;0)
       VOLUME LIST(atVolumes)
 
  //...
 End case
```

#### Ver também 

[DOCUMENT LIST](document-list.md)  
[FOLDER LIST](folder-list.md)  
[VOLUME ATTRIBUTES](volume-attributes.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 471 |
| Thread-seguro | &check; |


