---
id: display-record
title: DISPLAY RECORD
slug: /commands/display-record
displayed_sidebar: docs
---

<!--REF #_command_.DISPLAY RECORD.Syntax-->**DISPLAY RECORD** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.DISPLAY RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para qual exibir o registro atual, ou tabela Padrão, se omitido |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.DISPLAY RECORD.Summary-->O comando DISPLAY RECORD mostra o registro atual de *tabela*, utilizando o formulário de entrada atual.<!-- END REF--> O registro se mostra até que um evento provoque um redesenho da janela. Tal evento pode ser a execução de um comando ADD RECORD, o regresso ao formulário de entrada, ou a barra de menus. DISPLAY RECORD não faz nada se não houver registro atual.  

DISPLAY RECORD é utilizado com freqüência para mostrar mensagens de progresso personalizados. Também pode ser utilizado para gerar uma apresentação de slides.  
  
Se existir um método de formulário, se gerará um evento On Load.  
  
**Advertência**: Não chame DISPLAY RECORD desde um processo de conexão Web, porque o comando será executado na máquina do servidor Web de 4D e não na máquina do cliente do navegador Web.

#### Exemplo 

O exemplo a seguir mostra uma série de registros como uma apresentação de slides

```4d
 ALL RECORDS([Demo]) // Seleção de todos os registros
 FORM SET INPUT([Demo];"Mostrar") // Designação do formulário a utilizar
 For($vlRecord;1;Records in selection([Demo])) // Loop através de todos os registros
    DISPLAY RECORD([Demo]) // Mostrar um registro
    DELAY PROCESS(Current process;180) // 3 segundos de pausa
    NEXT RECORD([Demo]) // Passar ao seguinte registro
 End for
```

#### Ver também 

[MESSAGE](message.md)  