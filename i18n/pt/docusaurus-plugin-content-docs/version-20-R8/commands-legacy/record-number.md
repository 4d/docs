---
id: record-number
title: Record number
slug: /commands/record-number
displayed_sidebar: docs
---

<!--REF #_command_.Record number.Syntax-->**Record number** {( *tabela* )} : Integer<!-- END REF-->
<!--REF #_command_.Record number.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para qual devolver o número do registro atual, ou tabela padrão, se omitido |
| Resultado de função | Integer | &#8592; | Nº de registro atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Record number.Summary-->**Record number** devolve o número do registro atual de *tabela*.<!-- END REF--> Se não há registro atual, como quando o ponteiro do registro está antes ou depois da seleção atual, **Record number** devolve –1\. Se o registro é um novo registro que não foi guardado, **Record number** devolve –3.  
  
Os números de registro podem variar. Os números de registros apagados são reutilizados.  
  
**4D Server**: este comando devolve um resultado diferente no contexto do evento de formulário On Validate dependendo se for executado em 4D em modo local ou 4D em modo remoto. Em versão monoposto, o comando devolve um número de registro (o registro é considerado como tendo sido criado). Em versão cliente/servidor, o comando devolve -3 porque nesse caso, o registro já foi criado no servidor mas a informação não foi enviada ao cliente.  
  
**Nota:** É recomendado utilizar o comando [Is new record](is-new-record.md) para verificar se o registro está em processo de criação. 

#### Exemplo 

O exemplo a seguir salva o número do registro atual e depois procura na tabela se outro registro tiver o mesmo valor:

```4d
 $NumReg:=Record number([Pessoas]) // Obter o número do registro
 QUERY([Pessoas];[Pessoas]Sobrenome=[Pessoas]Sobrenome) // Alguém mais com o mesmo sobrenome?
  // Mostrar um alerta com o nome das pessoas que tenham o mesmo sobrenome
 ALERT("Há "+String(Records in selection([Pessoas])+" com esse sobrenome.")
 GOTO RECORD([Pessoas];$NumReg) // Regressar ao registro original
```

#### Ver também 

[GOTO RECORD](goto-record.md)  
[Is new record](is-new-record.md)  
[Selected record number](selected-record-number.md)  
[Sequence number](sequence-number.md)  
*Sobre Números de Registros*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 243 |
| Thread-seguro | &check; |


