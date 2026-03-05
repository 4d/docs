---
id: volume-list
title: VOLUME LIST
slug: /commands/volume-list
displayed_sidebar: docs
---

<!--REF #_command_.VOLUME LIST.Syntax-->**VOLUME LIST** ( *volumes* : Text array )<!-- END REF-->
<!--REF #_command_.VOLUME LIST.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| volumes | Text array | &#8592; | Nomes dos volumes atualmente montados |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|6|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.VOLUME LIST.Summary-->O comando VOLUME LIST preenche o array *volumes*, tipo de texto, com os nomes dos volumes definidos (Windows) ou montados (macOS) em sua máquina.<!-- END REF-->  

* Em Macintosh, retorna a lista de volumes visíveis ao nível do Finder. Somente são devolvidos os nomes dos volumes (por exemplo "MacHD", "BootCamp", etc.).
* Em Windows, retorna a lista dos volumes atualmente definidos sem importar se o volume está presente fisicamente (por exemplo o volume E:\\ será devolvido sem importar ou não se há um CD ou DVD no drive). Os nomes dos volumes estão seguidos pelo caracter separador de pastas ("C:\\").

## Exemplo 

Utilizando uma área de rolagem chamada *atVolumes*,se quiser mostrar a lista de volumes definidos ou montados em sua equipe, então escreve:

```4d
 Case of
    :(FORM Event.code=On Load)
       ARRAY TEXT(atVolumes;0)
       VOLUME LIST(atVolumes)
 
  //...
 End case
```

## Ver também 

[DOCUMENT LIST](../commands/document-list)  
[FOLDER LIST](../commands/folder-list)  
[VOLUME ATTRIBUTES](../commands/volume-attributes)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 471 |
| Thread-seguro | yes |


