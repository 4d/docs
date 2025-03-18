---
id: vp-suspend-computing
title: VP SUSPEND COMPUTING
---

<!-- REF #_method_.VP SUSPEND COMPUTING.Syntax -->

**VP SUSPEND COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->

<!-- REF #_method_.VP SUSPEND COMPUTING.Params -->

| Parâmetro  | Tipo |    | Descrição                                  |                  |
| ---------- | ---- | -- | ------------------------------------------ | ---------------- |
| vpAreaName | Text | -> | Nome de objeto formulário área 4D View Pro | <!-- END REF --> |

#### Descrição

The `VP SUSPEND COMPUTING` command <!-- REF #_method_.VP SUSPEND COMPUTING.Summary -->stops the calculation of all formulas in *vpAreaName*<!-- END REF -->. Esse comando é útil quando você deseja suspender os cálculos nessa área do 4D View Pro para que possa fazer modificações manuais nas fórmulas sem encontrar erros antes de terminar de fazer as alterações.

O comando pausa o serviço de cálculo no 4D View Pro. Formulas that have already been calculated remain unchanged, however any formulas added after `VP SUSPEND COMPUTING` command  is executed are not calculated.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

> O serviço de cálculo de 4D View Pro mantém um contador de ações de sugastar/retomar. Portanto, cada execução do comando `VP SUSPEND COMPUTING` deve ser equilibrada por uma execução correspondente do comando `VP RESUME COMPUTING`. Qualquer fórmula afetada por modificações feitas enquanto os cálculos são suspensos será recalculada quando o comando for executado.

#### Exemplo

Você adicionou dois botões ao formulário para que o usuário possa suspender/retomar os cálculos:

![](../../assets/en/ViewPro/cmd_vpStopCalculations.PNG)

O código do botão Suspend Computing:

```4d
 //pause calculations while users enter information
 If(FORM Event.code=On Clicked)
 
    VP SUSPEND COMPUTING("ViewProArea")
 
 End if
```

```4d
If(FORM Event.code=On Clicked)
 
    VP RESUME COMPUTING("ViewProArea")
 
End if
```

#### Veja também

[VP RECOMPUTE FORMULAS](vp-recompute-formulas.md)<br/>
[VP RESUME COMPUTING](vp-resume-computing.md)
