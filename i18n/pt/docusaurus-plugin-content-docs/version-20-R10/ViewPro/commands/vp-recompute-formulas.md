---
id: vp-recompute-formulas
title: VP RECOMPUTE FORMULAS
---

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Syntax -->

**VP RECOMPUTE FORMULAS** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Params -->

| Parâmetro  | Tipo |    | Descrição                                  |                  |
| ---------- | ---- | -- | ------------------------------------------ | ---------------- |
| vpAreaName | Text | -> | Nome de objeto formulário área 4D View Pro | <!-- END REF --> |

## Descrição

O comando `VP RECOMPUTE FORMULAS` <!-- REF #_method_.VP RECOMPUTE FORMULAS.Summary -->avalia imediatamente todas as fórmulas em *vpAreaName*<!-- END REF -->. Por padrão, o 4D calcula automaticamente fórmulas quando elas são inseridas, importadas ou exportadas. `VP RECOMPUTE FORMULAS` allows you to force the compute at any time (e.g, in case modifications are made to the formulas or if the formulas contain calls to the database). The command launches the execution of the [VP FLUSH COMMANDS](vp-flush-commands.md) command to execute any stored commands and clear the command buffer, then calculates all formulas in the workbook.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

> Certifique-se de que o comando [VP SUSPEND COMPUTING](vp-suspend-computing.md) não foi executado antes de usar o comando `VP RECOMPUTE FORMULAS`, caso contrário, o comando não faz nada.

## Exemplo

Para atualizar todas as fórmulas no livro de trabalho:

```4d
VP RECOMPUTE FORMULAS("ViewProArea")
```

## Veja também

[VP RESUME COMPUTING](vp-resume-computing.md)<br/>
[VP SUSPEND COMPUTING](vp-suspend-computing.md)
