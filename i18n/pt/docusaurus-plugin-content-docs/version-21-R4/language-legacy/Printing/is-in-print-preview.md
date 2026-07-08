---
id: is-in-print-preview
title: Is in print preview
slug: /commands/is-in-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.Is in print preview.Syntax-->**Is in print preview**  : Boolean<!-- END REF-->
<!--REF #_command_.Is in print preview.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True = Vista previa de impressão,<br/>False = Não vista previa de impressão |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|13|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Is in print preview.Summary-->O comando **Is in print preview** devolve True se a opção **Vista previa de impressão** está selecionada na caixa de diálogo de impressão e False caso contrário.<!-- END REF--> Esta configuração é local ao processo. 

A diferença do comando [Get print preview](../commands/get-print-preview), **Is in print preview** devolve o valor final da opção, depois da validação da caixa de diálogo por parte do usuário. Este comando permite determinar com certeza se a impressão toma lugar em modo "vista previa". 

## Exemplo 

Este exemplo permite ter em conta todos os tipos de impressões:

```4d
 SET PRINT PREVIEW(True) //Vista previa de impressão por defeito
 PRINT SETTINGS
 If(OK=1)
  //O usuário pode ter mudado o destino de impressão
    If(Is in print preview) // True se vista previa
       FORM SET OUTPUT([Faturas] ;"toScreen")
    Else
       FORM SET OUTPUT([Faturas] ;"toPrinter"
    End if
    OPEN PRINTING JOB
    ALL RECORDS([Faturas])
    PRINT SELECTION([Faturas];>)
    CLOSE PRINTING JOB
 End if
```

## Ver também 

[Get print preview](../commands/get-print-preview)  
[SET PRINT PREVIEW](../commands/set-print-preview)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1198 |
| Thread-seguro | no |


