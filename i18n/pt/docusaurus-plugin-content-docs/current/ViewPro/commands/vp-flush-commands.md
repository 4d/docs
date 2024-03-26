---
id: vp-flush-commands
title: VP FLUSH COMMANDS
---

<!-- REF #_method_.VP FLUSH COMMANDS.Syntax -->

**VP FLUSH COMMANDS** (  _vpAreaName_ : Text )<!-- END REF -->

<!-- REF #_method_.VP FLUSH COMMANDS.Params -->

| Parâmetro  | Tipo |    | Descrição                                  |                  |
| ---------- | ---- | -- | ------------------------------------------ | ---------------- |
| vpAreaName | Text | -> | Nome de objeto formulário área 4D View Pro | <!-- END REF --> |

#### Descrição

The `VP FLUSH COMMANDS` command <!-- REF #_method_.VP FLUSH COMMANDS.Summary -->immediately executes stored commands and clears the command buffer<!-- END REF -->.

Em _vpAreaName_, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

Para aumentar o desempenho e reduzir o número de solicitações enviadas, os comandos do 4D View Pro chamados pelo desenvolvedor são armazenados em um buffer de comando. When called, `VP FLUSH COMMANDS` executes the commands as a batch when leaving the method and empties the contents of the command buffer.

#### Exemplo

Você deseja rastrear a execução dos comandos e esvaziar o buffer de comandos:

```4d

 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")
 
 VP FLUSH COMMANDS(("ViewProArea1")
 TRACE
```
