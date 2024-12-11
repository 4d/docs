---
id: get-picture-from-pasteboard
title: GET PICTURE FROM PASTEBOARD
slug: /commands/get-picture-from-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE FROM PASTEBOARD.Syntax-->**GET PICTURE FROM PASTEBOARD** ( *imagem* )<!-- END REF-->
<!--REF #_command_.GET PICTURE FROM PASTEBOARD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| imagem | Picture | &#8592; | Imagem extraída da área de transferência |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET PICTURE FROM PASTEBOARD.Summary-->GET PICTURE FROM PASTEBOARD devolve a imagem presente na área de transferência no campo ou variável imagem *imagem*.<!-- END REF-->

**Nota**: no caso de uma operação copiar/colar, o container de dados corresponde a área de transferência

#### Exemplo 

O método a seguir de objeto de um botão atribui a imagem presente na área de transferência (se houver) ao campo \[Empregados\]Foto:

```4d
 If((Pasteboard data size("com.4d.imagen.jpeg")>0)|(Pasteboard data size("com.4d.imagem.gif")>0))
    GET PICTURE FROM PASTEBOARD([Empregados]Foto)
 Else
    ALERT("A área de transferência não contém nenhuma imagem.")
 End if
```

#### Variáveis e conjuntos do sistema 

Se a imagem for extraída corretamente, OK toma o valor 1; do contrário OK toma o valor 0 e se gera um erro.

#### Ver também 

[GET PASTEBOARD DATA](get-pasteboard-data.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  
[Pasteboard data size](pasteboard-data-size.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 522 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


