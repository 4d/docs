---
id: timestamp
title: Timestamp
slug: /commands/timestamp
displayed_sidebar: docs
---

<!--REF #_command_.Timestamp.Syntax-->**Timestamp** : Text<!-- END REF-->
<!--REF #_command_.Timestamp.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Hora atual retornada usando formato ISO com milissegundos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Timestamp.Summary-->**Timestamp** retorna a hora UTC atual em formato ISO com milissegundos, ou seja, aaaa-MM-ddTHH:mm:ss.<!-- END REF-->SSSZ. Preste atenção que o caractere "Z" indica a zona horária GMT.

Cada hora devolvida por **Timestamp** é expressa de acordo com a norma ISO 8601\. Para saber mais sobre este padrão, consulte: <https://en.wikipedia.org/wiki/ISO%5F8601>

**Note:** esta função não é adequada para tempos; Deve utilizar [Milliseconds](milliseconds.md) quando desejar medir o tempo transcorrido.

#### Exemplo 

Pode utilizar **Timestamp** em um arquivo de histórico para saber com precisão onde ocorreram os eventos. Como é mostrado abaixo, é possível que várias operações sejam produzidas durante o mesmo segundo:

```4d
 $vhDocRef:=Append document("TimestampProject.log")
 $logWithTimestamp:=Timestamp+Char(Tab)+"Log with timestamp"+Char(Carriage return)
 SEND PACKET($vhDocRef;String($logWithTimestamp))
```

Resultado:

```RAW
2016-12-12T13:31:29.477Z   Log with timestamp2016-12-12T13:31:29.478Z   Connection of user12016-12-12T13:31:29.486Z   ERROR - Exception of type 'System exception'2016-12-12T13:31:29.492Z   Click on button16842016-12-12T13:31:29.502Z   [SP_HELP- 1 rows] Command processed2016-12-12T13:31:29.512Z   [SP_HELP- 5 rows] Result set fetched
```

#### Ver também 

[Milliseconds](milliseconds.md)  
[String](string.md)  
[Time](time.md)  