---
id: is-record-loaded
title: Is record loaded
slug: /commands/is-record-loaded
displayed_sidebar: docs
---

<!--REF #_command_.Is record loaded.Syntax-->**Is record loaded** {( *tabela* )} : Boolean<!-- END REF-->
<!--REF #_command_.Is record loaded.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela do registro é examinada ou tabela padrão se o parâmetro for omitido |
| Resultado | Boolean | &#8592; | True se o registro é carregado, de outra maneira é False |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Is record loaded.Summary-->O comando **Is record loaded** devolve [True](true.md "True") se o registro atual de *tabela* é carregado no processo atual.<!-- END REF-->  
  
**4D Server**: Em princípio, quando tabelas estiverem linkadas por relações automáticas, os registros atuais de tabelas relacionadas são carregados automaticamente (ver \[#title id="1"/\]). Entretanto, por razões de otimização, 4D Server só carrega os registros quando necessário, por exemplo quando lendo ou atribuindo um campo ao registro relacionado. Como resultado disso, no contexto do comando **Is record loaded**, será retornado False em modo remoto (retorna True em modo local).

#### Exemplo 

Ao invés de utilizar as ações automáticas “Seguinte registro” ou “Registro anterior”, pode escrever os métodos de objeto para esses botões para melhorar sua operação. O botão “Seguinte” mostra o começo da seleção se o usuário estiver ao princípio da seleção e o botão “Anterior” mostra o final da seleção quando o usuário estiver ao começo da seleção  

```4d
  // Método de objeto do botão “Anterior” (sem ação automática)
 If(FORM Event=On Clicked)
    PREVIOUS RECORD([Grupo])
    If(Not(Is record loaded([Grupo])))
       GOTO SELECTED RECORD([Grupo];Records in selection([Grupo]))
  //Ir ao último registro da seleção
    End if
 End if
 
  // Método de objeto do botão “Seguinte” (sem ação automática)
 If(FORM Event=On Clicked)
    NEXT RECORD([Grupo])
    If(Not(Is record loaded([Grupo])))
       GOTO SELECTED RECORD([Grupos];1)
  //Ir ao primeiro registro da seleção
    End if
 End if
```


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 669 |
| Thread-seguro | &check; |


