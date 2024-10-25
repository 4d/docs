---
id: trace
title: TRACE
slug: /commands/trace
displayed_sidebar: docs
---

<!--REF #_command_.TRACE.Syntax-->**TRACE**<!-- END REF-->
<!--REF #_command_.TRACE.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.TRACE.Summary-->O comando **TRACE** se utiliza para executar passo a passo métodos durante o desenvolvimento de um banco.<!-- END REF-->

O comando **TRACE** mostra o depurador de 4D no processo atual. A janela*Depurador* aparece antes da execução da linha de código seguinte, e continua para cada linha de código que é executada. Igualmente pode chamar manualmente ao depurador pressionando **Alt+Shift+clique direito** (Windows) ou **Control+Opção+comando+clique** (Macintosh) durante a execução do código.

O comando **TRACE** é ignorado quando o código executando for compilado.

**4D Server:** **TRACE** é chamada desde um método de projeto executado no contexto de um Procedimento armazenado, a janela do depurador aparece na máquina servidor.

**Dica:** não chame **TRACE** quando utilize um formulário para o qual os eventos On Activate e On Deactivate tenham sido ativados. Cada vez que a janela do depurador apareça, estes eventos serão invocados; isto criará um loop infinito entre estes eventos e a janela do depurador. Se terminar nesta situação, utilize a combinação Shif**t+clique** no botão Continu**ar** do depurador para sair daí. Qualquer chamada posterior a **TRACE** dentro do processo será ignorada.

#### Exemplo 

O código a seguir espera que a variável processo CREAR\_LENG seja igual a “US” ou “FR”. Se não for o caso, chama ao método de projeto DEBUG: 

```4d
  // ...
 Case of
    :(CREAR_LENG="US")
       vsBHCmdNom:=[Comandos]CM US Nom
    :(CREAR_LENG="FR")
       vsBHCmdNom:=[Comandos]CM FR Nom
    Else
       DEBUG("Valor de CREAR_LENG")
 End case
```

O método de projeto DEBUG é listado aqui:

```4d
  // Método de projeto DEBUG
  // DEBUG (Texto)
  // DEBUG (Informação opcional de depuração)
 
 var $1 : Text
 
 If(◊vbDebugOn) // Variável interprocesso definida no Método On Startup
    If(Compiled application)
       If(Count parameters>=1)
          ALERT($1+Char(13)+"Chamar ao desenhador ao x911")
       End if
    Else
       TRACE
    End if
 End if
```
