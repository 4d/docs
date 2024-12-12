---
id: is-new-record
title: Is new record
slug: /commands/is-new-record
displayed_sidebar: docs
---

<!--REF #_command_.Is new record.Syntax-->**Is new record** {( *tabela* )} : Boolean<!-- END REF-->
<!--REF #_command_.Is new record.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela do registro a ser examinado ou tabela Padrão se o parâmetro é omitido |
| Resultado | Boolean | &#8592; | Verdadeiro se o registro está sendo criado, ou então Falso |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Is new record.Summary-->O comando Is new record devolve [True](true.md "True") quando o registro atual de *tabela* estiver sendo criado e ainda não foi guardado no processo atual.<!-- END REF-->  

**Nota de compatibilidade**: É possível obter a mesma informação utilizando o comando existente [Record Number](record-number.md "Record Number"), e provando se devolve -3\. Entretanto, recomendamos utilizar Is new record em lugar de [Record Number](record-number.md "Record Number") nesse caso. De fato, o comando Is new record certifica que haja uma melhor compatibilidade com as futuras versões de 4D.  
  
**4D Server**: Este comando devolve um resultado diferente no contexto do evento de formulário On Validate dependendo se foi executado em 4D (mono-posto) ou 4D Client. Em versão mono-posto, o comando devolve [False](false.md "False") (o registro se considera como criado). Em versão cliente/servidor, o comando devolve *True* porque nesse caso, o registro já foi criado no servidor mas a informação não foi enviada ainda ao cliente.

#### Exemplo 

As duas instruções a seguir são idênticas. A segunda é recomendada para que o código seja compatível com as próximas versões de 4D:

```4d
 If(Record number([Tabela])=-3) //Não é recomendada
  // ...
 End if
 
 If(Is new record([Tabela])) //Recomendada
  // ...
 End if
```

#### Ver também 

[Modified record](modified-record.md)  
[Record number](record-number.md)  