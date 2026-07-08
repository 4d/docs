---
id: timestamp
title: Timestamp
slug: /commands/timestamp
displayed_sidebar: docs
---

<!--REF #_command_.Timestamp.Syntax-->**Timestamp** : Text<!-- END REF-->
<!--REF #_command_.Timestamp.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Hora atual retornada usando formato ISO com milissegundos |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|16 R2|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Timestamp.Summary-->**Timestamp** retorna a hora UTC atual em formato ISO com milissegundos, ou seja, aaaa-MM-ddTHH:mm:ss.<!-- END REF-->SSSZ. Preste atenção que o caractere "Z" indica a zona horária GMT.

Cada hora devolvida por **Timestamp** é expressa de acordo com a norma ISO 8601\. Para saber mais sobre este padrão, consulte: <https://en.wikipedia.org/wiki/ISO%5F8601>

**Note:** esta função não é adequada para tempos; Deve utilizar [Milliseconds](milliseconds.md) quando desejar medir o tempo transcorrido.

## Exemplo 

Pode utilizar **Timestamp** em um arquivo de histórico para saber com precisão onde ocorreram os eventos. Como é mostrado abaixo, é possível que várias operações sejam produzidas durante o mesmo segundo:

```4d
 $vhDocRef:=Append document("TimestampProject.log")
 $logWithTimestamp:=Timestamp+Char(Tab)+"Log with timestamp"+Char(Carriage return)
 SEND PACKET($vhDocRef;String($logWithTimestamp))
```

Resultado:

```txt
2016-12-12T13:31:29.477Z   Log with timestamp
2016-12-12T13:31:29.478Z   Connection of user
12016-12-12T13:31:29.486Z   ERROR - Exception of type 'System exception'
2016-12-12T13:31:29.492Z   Click on button1684
2016-12-12T13:31:29.502Z   [SP_HELP- 1 rows] Command processed
2016-12-12T13:31:29.512Z   [SP_HELP- 5 rows] Result set fetched
```

## Ver também 

[Milliseconds](milliseconds.md)  
[String](../commands/string.md)  
[Time](time.md)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1445 |
| Thread-seguro | yes |


