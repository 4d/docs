---
id: command-name
title: Command name
slug: /commands/command-name
displayed_sidebar: docs
---

<!--REF #_command_.Command name.Syntax-->**Command name** ( *comando* {; *info* {; *tema*}} ) : Text<!-- END REF-->
<!--REF #_command_.Command name.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| comando | Integer | &#8594;  | Número de comando |
| info | Integer | &#8592; | Propriedade thread seguro do comando |
| tema | Text | &#8592; | Tema da linguagem do comando |
| Resultado | Text | &#8592; | Nome do comando localizado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Command name.Summary-->O comando **Command name** retorna o nome do comando cujno número foi passado em *comando*.<!-- END REF-->O número de cada comando é indicado no Explorer assim como na área Propriedades desta documentação.

**Nota de Compatibilidade:** Já que o nome de comando pode variar entre versões de 4D (comandos renomeados) ou de acordo com a linguagem do aplicativo, pode ser útil designar um comando através de seu número, especialmente em porções de código não-tokenizadas. A utilidade do comando com respeito a esta necessidade diminui ao longo do tempo com a evolução de 4D, já que agora 4D oferece uma sintaxe token. Esta sintaxe token pode ser usada para evitar possíveis problemas por variações em nomes de comando, assim como outros elementos tais como tabelas, mas permitindo digitar os nomes em uma maneira legível (para saber mais, veja *Usar tokens em fórmulas* ). Além disso, de forma pré-determinada, a versão na língua inglesa a partir de 4D v15; entretanto, a opção "Use regional system settings" em [Is a list](is-a-list.md) das Preferências permite que continue a usar a linguagem francesa na versão francesa de 4D.  
  
Dois valores opcionais estão disponíveis:
* *info*: propriedades do comando. O valor retornado é um campo *bit*, no qual apenas o primeiro bit (bit 0) é significativo. É estabelecido como 1 se o comando for thread-seguro ( ou seja, compatível com a execução em um processo preemptivo) e 0 se for thread-inseguro. Apenas comandos thread-seguro podem ser usados em um processo preemptivo. Para saber mais sobre este ponto, veja \[#title id="8733"/\].
* *tema*: retorna o nome do tema 4D language para o comando.

O comando **Command name** estabelece a variável *OK* para 1 se *comand*o corresponde a um número de comando existente, e a 0 de outra maneira. Note, entretanto, que alguns comandos existentes foram desativados, em cujo caso **Command name** retorna uma string vazia (ver último exemplo). 

#### Exemplo 1 

O seguinte código lhe permite carregar todos os comandos 4D válidos em um array:

```4d
 var $Lon_id : Integer
 var $Txt_command : Text
 ARRAY LONGINT($tLon_Command_IDs;0)
 ARRAY TEXT($tTxt_commands;0)
 
 Repeat
    $Lon_id:=$Lon_id+1
    $Txt_command:=Command name($Lon_id)
    If(OK=1) //o número de comando existe
       If(Length($Txt_command)>0) //o comando não está desativado
          APPEND TO ARRAY($tTxt_commands;$Txt_command)
          APPEND TO ARRAY($tLon_Command_IDs;$Lon_id)
       End if
    End if
 Until(OK=0) //fim dos comandos existentes
```

#### Exemplo 2 

Em um formulário, você deseja mostrar uma lista suspensa que contenha os comandos padrão de geração de informes. No método de objeto desta lista suspensa, você escreve:

```4d
 Case of
    :(Form event code=On Before)
       ARRAY TEXT(asCommand;4)
       asCommand{1}:=Command name(1)
       asCommand{2}:=Command name(2)
       asCommand{3}:=Command name(4)
       asCommand{4}:=Command name(3)
  // ...
 End case
```

Na versão inglesa de 4D, a lista suspensa conterá: Sum, Average, Min, e Max. Na versão francesa(\*), a lista suspensa conterá: Somme, Moyenne, Min, e Max.

\*com um aplicativo 4D application configurado para a linguagem francesa (ver nota de compatibilidade).

#### Exemplo 3 

Se quiser criar um método que devolva **True** se o comando, cujo número foi passado como parâmetro, for thread seguro e em caso contrário **False**.   

```4d
  //Método projeto Is_Thread_Safe
  //Is_Thread_Safe(numCom) -> Booleano
 
 var $1;$threadsafe : Integer
 var $name : Text
 var $0 : Boolean
 $name:=Command name($1;$threadsafe;$theme)
 If($threadsafe ?? 0) //se o primeiro bit for definido em 1
    $0:=True
 Else
    $0:=False
 End if
```

Depois, para o comando "SAVE RECORD" (53) por exemplo, pode escrever:

```4d
 $isSafe:=Is_Thread_Safe(53)
  // devolveTrue
```

#### Ver também 

[EXECUTE FORMULA](execute-formula.md)  
*Processos 4D Preemptivos*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 538 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


