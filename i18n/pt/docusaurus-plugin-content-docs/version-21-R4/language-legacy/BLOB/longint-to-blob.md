---
id: longint-to-blob
title: LONGINT TO BLOB
slug: /commands/longint-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.LONGINT TO BLOB.Syntax-->**LONGINT TO BLOB** ( *longint* : Integer ; *blob* : Blob ; *byteOrder* : Integer {; *offset* : Variable} )<br/>**LONGINT TO BLOB** ( *longint* : Integer ; *blob* : Blob ; *byteOrder* : Integer {; *} )<!-- END REF-->
<!--REF #_command_.LONGINT TO BLOB.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| longInt | Integer | &#8594; | Valor de tipo Inteiro longo a escrever no BLOB |
| Blob | Blob | &#8594; | BLOB a receber o valor Inteiro longo |
| byteOrder | Integer | &#8594; | 0 Ordem de bytes nativo 1 Ordem de bytes Macintosh 2 Ordem de bytes PC |
| offset &#124; * | Variável, Operador | &#8596; | Offset no BLOB (expressado em bytes) ou * para adicionar o valor |
|  |  |  | Novo offset depois da escritura se * for omitido |
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

<!--REF #_command_.LONGINT TO BLOB.Summary-->O comando LONGINT TO BLOB grava o valor *inteiro longo* de 4-byte no BLOB *blob*.<!-- END REF-->

O parâmetro *byteOrder* fixa a ordem dos bytes do valor inteiro longo de 4-byte a ser escrito. Você passa uma das seguintes constantes pré-definidas fornecidas por 4D:

| Constante               | Tipo          | Valor |
| ----------------------- | ------------- | ----- |
| Native byte ordering    | Inteiro longo | 0     |
| Macintosh byte ordering | Inteiro longo | 1     |
| PC byte ordering        | Inteiro longo | 2     |

**Nota sobre a independência de plataforma:** Se você intercambiar BLOBs entre as plataformas Macintosh e PC, cabe a você a gerenciar os problemas da troca de bytes ao usar este comando.

Se você especificar o parâmetro opcional \*, o valor inteiro de 4-byte é anexado ao BLOB e o tamanho do BLOB é aumentado em conformidade. Usando o parâmetro opcional \*, você pode armazenar qualquer número sequencial [Inteiro](# "Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)"), [Inteiro longo](# "Number between -2^31..(2^31)-1 (4-byte Integer)"), Real ou valores de texto (ver outros comandos BLOB) em um BLOB, enquanto o BLOB cabe na memória. 

Se você não especificar o parâmetro opcional \* nem o parâmetro variável *offset*, um valor inteiro de 4-bytes é armazenado no início do BLOB, substituindo o conteúdo anterior, o tamanho do BLOB é ajustado em conformidade. 

Se você passar o parâmetro *offset*, um valor inteiro de 4-byte é escrito no byte (a partir do zero) dentro do BLOB. Não importa onde você escreva o valor inteiro de 4-byte, o tamanho do BLOB é aumentado de acordo com o local que você passou (acima de 4 bytes, se necessário). Novos bytes alocados, com exceção do que você está escrevendo, são inicializados em zero. 

Após a chamada, o parâmetro variável *offset* é devolvido, incrementado pelo número de bytes que foram escritos. Portanto, você pode reutilizar a mesma variável com outro comando de escrita BLOB para gravar outro valor. 

### Nota 

**Nota de compatibilidade**: como este comando altera o blob passado como parâmetro, não é compatível com objetos blob (tipo 4D.Blob). Ver *Passing blobs and blob objects to 4D commands* em developer.4d.com
