---
id: save-record
title: SAVE RECORD
slug: /commands/save-record
displayed_sidebar: docs
---

<!--REF #_command_.SAVE RECORD.Syntax-->**SAVE RECORD** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.SAVE RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual vai salvar o registro atual, ou tabela padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAVE RECORD.Summary-->SAVE RECORD guarda o registro atual de *tabela* no processo atual.<!-- END REF--> Se não houver registro atual, o comando SAVE RECORDD é ignorado.  
  
Pode utilizar SAVE RECORD para guardar um registro criado ou modificado por programação. Quando um registro foi modificado e confirmado pelo usuário em um formulário, não é necessário guardar com SAVE RECORD. Um registro que foi modificado pelo usuário em um formulário, mas foi cancelado, mesmo assim podem ser guardados com SAVE RECORDD.  

Estes são alguns casos onde é necessário SAVE RECORD:

Para guardar um novo registro criado com [CREATE RECORD](create-record.md) ou [DUPLICATE RECORD](duplicate-record.md)
* Para guardar dados desde [RECEIVE RECORD](receive-record.md)
* Para guardar um registro modificado por um método
* Para guardar um registro que contenha um subregistro criado ou modificado por um desses comandos *\_o\_ADD SUBRECORD*, *\_o\_CREATE SUBRECORD*, ou *\_o\_MODIFY SUBRECORD*
* Durante a entrada de dados, para guardar o registro mostrado antes de chamar um comando que muda o registro atual
* Durante a entrada de dados, para guardar o registro atual

Não deve executar SAVE RECORD no evento de formulário On Validate de um registro que foi aceito. Se o fizer, o registro será guardado duas vezes.

Nota: guardar um registro que contenha campos objeto editados geralmente exige que notifique explicitamente a 4D antes de chamar a SAVE RECORD. Para saber mais, consulte a seção *Salvar campos Objeto*. 

#### Exemplo 

O exemplo a seguir é parte de um método que lê registros de um documento. Nessa parte do código, é recebido um registro, e depois, se receber corretamente, o registro é guardado:

```4d
 RECEIVE RECORD([Clientes]) // Recepção do registro a partir do disco
 If(OK=1) // Se o registro é recebido corretamente…
    SAVE RECORD([Clientes]) // guardar
 End if
```

#### Ver também 

[CREATE RECORD](create-record.md)  
[Locked](locked.md)  
*Triggers*  