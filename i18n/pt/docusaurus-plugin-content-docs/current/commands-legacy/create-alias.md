---
id: create-alias
title: CREATE ALIAS
slug: /commands/create-alias
displayed_sidebar: docs
---

<!--REF #_command_.CREATE ALIAS.Syntax-->**CREATE ALIAS** ( *rotaObjetivo* ; *rotaAlias* )<!-- END REF-->
<!--REF #_command_.CREATE ALIAS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rotaObjetivo | Text | &#8594;  | Nome da rota de acesso do alias/atalho alvo |
| rotaAlias | Text | &#8594;  | Nome ou rota de acesso completa para o alias ou atalho |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CREATE ALIAS.Summary-->O comando CREATE ALIAS cria um alias (chamado “atalho” em Windows) do arquivo ou pasta objetivo passado em *rotaObjetivo*.<!-- END REF--> O nome e a localização são definidos pelo parâmetro *rotaAlias*.  

Pode criar um alias de todo tipo de documento ou de pasta. O ícone do alias será idêntico ao do elemento objetivo. O ícone contém uma pequena flecha na parte inferior esquerda. Em Mac OS, o nome do ícone é mostrado em caracteres em itálico.  
  
Este comando não atribui um nome por padrão, o nome tem que ser passado no parâmetro *rotaAlias*. Se apenas passa um nome neste parâmetro, o alias é criado na pasta ativa atual (geralmente a pasta que contém o arquivo de estrutura).  
  
**Nota**: em Windows, os atalhos são arquivos com extensão “.LNK” (invisível). Se esta extensão não for passada, é adicionada automaticamente pelo comando.  
  
Se for passada uma string vazia em *rotaObjetivo*, o comando não faz nada.

#### Exemplo 

Seu banco gera arquivos de texto chamados “RelatórioNúmero” armazenados na pasta do banco. O usuário quer criar atalhos a estes relatórios e armazená-los em uma localização conveniente: 

```4d
  //Método CRIAR_RELATORIO
 var $vtInf : Text
 C_STRING(250;$vtRota)
 C_STRING(80;$vaNome)
 var vDoc : Time
 C_INTEGER($NumRelatorio)
 
 $vtInf:=... //Criar relatorio
 $NumRelatorio:=... //Calculo do número do relatório
 $vaNome:="Relatório"+String($NumRelatório)+".txt" //Nome do arquivo
 vDoc:=Create document($vaNome)
 If(OK=1)
    SEND PACKET(vDoc;$vtInf)
    CLOSE DOCUMENT(vDoc)
  //Adicionar o alias
    CONFIRM("Criar um alias para este relatório?")
    If(OK=1)
       $vtRuta:=Select folder("Onde quer criar o alias?")
       If(OK=1)
          CREATE ALIAS($vaNome;$vtRota+$vaNome)
          If(OK=1)
             SHOW ON DISK($vtRota+$vaNome)
  //Mostrar a localização do alias
          End if
       End if
    End if
 End if
```

#### Variáveis e conjuntos do sistema 

A variável sistema OK assume o valor 1 se o comando for executado corretamente, se não assume o valor 0.

#### Ver também 

[RESOLVE ALIAS](resolve-alias.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 694 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


