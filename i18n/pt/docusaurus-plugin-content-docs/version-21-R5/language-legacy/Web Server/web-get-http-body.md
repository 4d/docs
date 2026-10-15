---
id: web-get-http-body
title: WEB GET HTTP BODY
slug: /commands/web-get-http-body
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET HTTP BODY.Syntax-->**WEB GET HTTP BODY** ( *corpo* : Blob, Text )<!-- END REF-->
<!--REF #_command_.WEB GET HTTP BODY.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| corpo | Blob, Text | &#8592; | corpo da petição HTTP |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|13|Renomear|
|2004|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.WEB GET HTTP BODY.Summary-->O comando **WEB GET HTTP BODY** retorna o corpo da solicitação HTTP que esta sendo processada.<!-- END REF--> O corpo HTTP se retorna tal qual, sem processo nem análise.  

Este comando pode ser chamado utilizando um método de banco web (*On Web Authentication Database Method*, [On Web Connection](../commands/on-web-connection-database-method)) ou todo método web.  
  
Pode passar no parâmetro *corpo*, uma variável ou um campo de tipo BLOB ou Texto. O tipo Texto é geralmente suficiente (o parâmetro *corpo* pode receber até 2 GB de texto).  
  
Este comando permite por exemplo realizar as pesquisas no corpo das solicitações. Também permite aos usuários avançados configurar um servidor WebDAV dentro de um banco 4D.

## Exemplo 

Neste exemplo, uma petição simples é enviada ao servidor web de 4D e o conteúdo do campo HTTP corpo se visualiza no depurador. Este é o formulário enviado ao servidor web de 4D, assim como o código HTML correspondente:  
  
![](../../assets/en/commands/pict845028.pt.png) 

Este é o método Test4D2004:

```4d
 var $petição : Blob
 var $textoPetição : Text
 
 WEB HTTP BODY($petição)
 $textoPetição:=BLOB to text($petição;UTF8 text without length)
 WEB SEND FILE("pagina.html")
```

**Nota:** este método se declara “Disponível através das etiquetas HTML e as URLs 4D (4DACTION...)” em suas propriedades. 

Quando o formulário é enviado ao servidor web, a variável $textoPetição recebe o texto do campo corpo da petição HTTP.

## Ver também 

[WEB GET BODY PART](../commands/web-get-body-part)  
[WEB GET HTTP HEADER](../commands/web-get-http-header)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 814 |
| Thread-seguro | yes |


