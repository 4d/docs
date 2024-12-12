---
id: set-picture-to-pasteboard
title: SET PICTURE TO PASTEBOARD
slug: /commands/set-picture-to-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE TO PASTEBOARD.Syntax-->**SET PICTURE TO PASTEBOARD** ( *imagem* )<!-- END REF-->
<!--REF #_command_.SET PICTURE TO PASTEBOARD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| imagem | Picture | &#8594;  | Imagem a ser colocada na área de transferência |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SET PICTURE TO PASTEBOARD.Summary-->SET PICTURE TO PASTEBOARD limpa a área de transferência e coloca uma cópia da imagem que passou em *imagem* na área de transferência.<!-- END REF--> 

**Nota**: no caso das operações copiar/colar, o container de dados corresponde a área de transferência

A imagem se passa a seu formato nativo (jpeg, tif, png, etc)

Depois de colocar a imagem na área de transferência, pode recuperá-la utilizando o comando [GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md) ou chamando [GET PASTEBOARD DATA](get-pasteboard-data.md)("com.4d.private.picture.gif";...).

#### Exemplo 

Em uma janela flutuante, você visualiza um formulário que contém o array *asEmpregadoNome*, o qual lista os nomes dos empregados de uma tabela \[Empregados\]. Cada vez que clicar em um nome, deseja copiar a imagem de um empregado na área de transferência. No método de objeto do Array, você escreve:

```4d
 If(asEmpregadoNome#0)
    QUERY([Empregados];[Empregado]Sobrenome=asEmpregadoNome{asEmpregadoNome})
    If(Picture size([Empregados]Foto)>0)
       SET PICTURE TO PASTEBOARD([Empregados]Foto) // Copiar a foto do empregado
    Else
       CLEAR PASTEBOARD // Não  foi encontrado nenhuma foto ou registro
    End if
 End if
```

#### Variáveis e conjuntos do sistema 

Se uma cópia da imagem se coloca corretamente na área de transferência, a variável OK toma o valor 1.

Se não houver suficiente memória para colocar uma cópia da imagem na área de transferência,a variável OK toma o valor 0, mas não é gerado um erro.

#### Ver também 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  