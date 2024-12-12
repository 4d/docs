---
id: window-list
title: WINDOW LIST
slug: /commands/window-list
displayed_sidebar: docs
---

<!--REF #_command_.WINDOW LIST.Syntax-->**WINDOW LIST** ( *janelas* {; *} )<!-- END REF-->
<!--REF #_command_.WINDOW LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janelas | Array | &#8592; | Array de números de referência de janelas |
| * | Operador | &#8594;  | Se especificado, considere janela flutuante, se omitido, ignore janela flutuante |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.WINDOW LIST.Summary-->O comando WINDOW LIST preenche o array *janelas* com os números de referência das janelas abertas atualmente em todos os processos (processos kernel ou usuário).<!-- END REF--> Apenas janelas "visíveis" (ou seja, não ocultadas) são retornadas. 

Se não passar o parâmetro opcional *\**, as janelas flutuantes são ignoradas.

#### Exemplo 

O método de projeto abaixo coloca em mosaico todas as janelas abertas atualmente, exceto as janelas suspensas e as caixas de diálogo: 

```4d
  // Método de projeto TILE WINDOWS
 
 WINDOW LIST($alWnd)
 $vlLeft:=10
 $vlTop:=80 // Deixar espaço para a barra de ferramentas
 For($vlWnd;1;Size of array($alWnd))
    If(Window kind($alWnd{$vlWnd})#Modal dialog)
       GET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})
       $vlWR:=$vlLeft+($vlWR-$vlWL)
       $vlWB:=$vlTop+($vlWB-$vlWT)
       $vlWL:=$vlLeft
       $vlWT:=$vlTop
       SET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})
       $vlLeft:=$vlLeft+10
       $vlTop:=$vlTop+25
    End if
 End for
```

**Nota:** este método pode ser melhorado adicionando testes do tamanho da janela principal (em Windows) ou do tamanho e localização das telas (em Macintosh).

#### Ver também 

[Window kind](window-kind.md)  
[Window process](window-process.md)  