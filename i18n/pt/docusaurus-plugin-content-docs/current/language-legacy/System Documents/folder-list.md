---
id: folder-list
title: FOLDER LIST
slug: /commands/folder-list
displayed_sidebar: docs
---

<!--REF #_command_.FOLDER LIST.Syntax-->**FOLDER LIST** ( *nomeRota* : Text ; *diretorios* : Text array )<!-- END REF-->
<!--REF #_command_.FOLDER LIST.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeRota | Text | &#8594; | Rota de acesso ao volume, diretório ou pasta |
| diretorios | Text array | &#8592; | Nomes dos diretórios presentes nessa localização |
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

<!--REF #_command_.FOLDER LIST.Summary-->O comando FOLDER LIST preenche o array de tipo Texto ou Alfa *diretorios* com os nomes das pastas localizadas na rota de acesso que se passa em *rotaAcesso*.<!-- END REF-->  

**Nota**: deve passar uma rota de acesso absoluta no parâmetro *rotaAcesso*.  
  
Se não houver pastas na localização especificada, o comando retorna um array vacío. Se a rota de acesso que se passa em *rotaAcesso* é incorreta, FOLDER LIST gera um erro do administrador de arquivos que pode interceptar utilizando um método [ON ERR CALL](../commands/on-err-call).

## Ver também 

[DOCUMENT LIST](../commands/document-list)  
[VOLUME LIST](../commands/volume-list)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 473 |
| Thread-seguro | yes |
| Modificar variáveis | error |


