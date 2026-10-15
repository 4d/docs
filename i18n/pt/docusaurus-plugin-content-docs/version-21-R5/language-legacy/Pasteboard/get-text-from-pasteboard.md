---
id: get-text-from-pasteboard
title: Get text from pasteboard
slug: /commands/get-text-from-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.Get text from pasteboard.Syntax-->**Get text from pasteboard**  : Text<!-- END REF-->
<!--REF #_command_.Get text from pasteboard.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Retorna o texto (se houver) presente na área de transferência |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.Get text from pasteboard.Summary-->Get text from pasteboard devolve o texto na área de transferência.<!-- END REF--> 

**Nota**: no caso das operações copiar/colar, o container de dados corresponde a área de transferência

Se o container de dados contém texto enriquecido (por exemplo em formato RTF), o texto conserva seus atributos ao soltar ou colar, se a área de destino é compatível.

Note que os campos e variáveis de tipo texto de 4D podem conter até 2 GB de texto.

## Variáveis e conjuntos do sistema 

Se o texto for extraído corretamente, OK toma o valor 1; do contrário OK toma o valor 0 e é gerado um erro.

## Ver também 

[GET PASTEBOARD DATA](../commands/get-pasteboard-data)  
[GET PICTURE FROM PASTEBOARD](../commands/get-picture-from-pasteboard)  
[Pasteboard data size](../commands/pasteboard-data-size)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 524 |
| Thread-seguro | no |
| Modificar variáveis | OK |


