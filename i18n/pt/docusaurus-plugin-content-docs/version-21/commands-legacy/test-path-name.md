---
id: test-path-name
title: Test path name
slug: /commands/test-path-name
displayed_sidebar: docs
---

<!--REF #_command_.Test path name.Syntax-->**Test path name** ( *nomeRota* ) : Integer<!-- END REF-->
<!--REF #_command_.Test path name.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeRota | Text | &#8594;  | Rota ao diretório, pasta ou documento (sintaxe do sistema) |
| resultado | Integer | &#8592; | 1 - rota de acesso do documento existente, 0 - rota do diretório ou pasta existente, <0 - rota inválida, código de erro do gestor de arquivo OS |
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

<!--REF #_command_.Test path name.Summary-->A função Test path name verifica se um documento ou pasta cujo nome ou via de acesso se passa em *viaAcesso* está presente no disco.<!-- END REF--> Pode passar uma via de acesso relativa ou absoluta, expressada na [sintaxe do sistema atual](../../Concepts/paths.md#platform-specific-syntax).

Se encontrado um documento, Test path name devolve 1. Se encontrada uma pasta, Test path name devolve 0.

4D oferece as seguintes constantes predefinidas:

| Constante     | Tipo          | Valor |
| ------------- | ------------- | ----- |
| Is a document | Inteiro longo | 1     |
| Is a folder   | Inteiro longo | 0     |

  
Se não se encontra nenhum documento ou pasta, Test path name devolve um valor negativo (por exemplo -43 para "Arquivo não encontrado").

## Exemplo 

No Windows, o seguinte exemplo prova a presença do documento "Journal.txt" na pasta "Data" do projeto, e o cria se não for encontrado:

```4d
 If(Test path name("\Data\Journal.txt")#Is a document)
    $vhDocRef:=Create document("\Data\Journal.txt")
    If(OK=1)
       CLOSE DOCUMENT($vhDocRef)
    End if
 End if
```

## Ver também 

[Convert path system to POSIX](convert-path-system-to-posix.md)  
[Create document](create-document.md)  
[CREATE FOLDER](create-folder.md)  
[Object to path](object-to-path.md)  
[Path to object ](path-to-object.md)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 476 |
| Thread-seguro | yes |


