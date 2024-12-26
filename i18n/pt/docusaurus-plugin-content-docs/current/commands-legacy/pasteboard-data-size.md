---
id: pasteboard-data-size
title: Pasteboard data size
slug: /commands/pasteboard-data-size
displayed_sidebar: docs
---

<!--REF #_command_.Pasteboard data size.Syntax-->**Pasteboard data size** ( *tipoDados* ) : Integer<!-- END REF-->
<!--REF #_command_.Pasteboard data size.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tipoDados | Text | &#8594;  | Tipo de dados a adicionar |
| Resultado | Integer | &#8592; | Tamanho (em bytes) dos dados armazenados na área de transferência ou então código do erro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Pasteboard data size.Summary-->O comando Pasteboard data size permite testar se hay dados do tipo *tipoDatos* na área de transferência.<!-- END REF--> 

Se a área de transferência está vazio ou não contém dados de tipo especifico, o comando devolve um erro -102 (ver a tabela de constantes predefinidas). Se a área de transferência contém dados do tipo especificado, o comando devolve o tamanho em bytes destes dados. 

Passe em *tipodados* um valor que defina o tipo de dados a extrair. Pode passar uma firma 4D, um tipo UTI (Mac OS), um nome/número de formato (Windows), ou um tipo de 4 caracteres (compatibilidade). Para maior informação sobre estes tipos, consulte a seção *Gerenciar área de transferência*

Depois de verificar que a área de transferência contém dados do tipo que desejar, pode extrair essa informação da área de transferência utilizando um dos seguintes comandos:

* Se a área de transferência contém dados de tipo TEXT, pode obter essa informação utilizando o comando [Get text from pasteboard](get-text-from-pasteboard.md), o qual devolve um valor texto, ou o comando [GET PASTEBOARD DATA](get-pasteboard-data.md), que devolve o texto em um BLOB.
* Se a área de transferência contém dados de tipo PICT, pode obter esses dados utilizando o comando [GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md), que devolve a imagem em um campo ou uma variável ou o comando [GET PASTEBOARD DATA](get-pasteboard-data.md), que devolve a imagem em um BLOB.
* Se o clipboard contém uma rota de acesso ao arquivo, pode extraí-la utilizando o comando [Get file from pasteboard](get-file-from-pasteboard.md) , que devolve a rota de acesso do arquivo.
* Para qualquer outro tipo de dados, utilize o comando [GET PASTEBOARD DATA](get-pasteboard-data.md), o qual devolve os dados em um BLOB.

#### Exemplo 1 

O código a seguir prova se a área de transferência contém uma imagem jpeg e se for assim, copia a imagem em uma variável 4D:   
  
```4d
 If(Pasteboard data size(Picture data)>0) // Há uma imagem na área de transferência?
    GET PICTURE FROM PASTEBOARD($vPicVariable) // Si houver, extrair a imagem da área de transferência
 Else
    ALERT("Não há imagem na área de transferência.")
 End if
```
  
  
#### Exemplo 2 

Geralmente, as aplicações cortam e copiam dados de tipo TEXT ou PICT na área de transferência, porque a maioria das aplicações reconhecem estes dois tipos de dados padrão. Entretanto, uma aplicação pode colocar na área de transferência várias instâncias dos mesmos dados em formatos diferentes. Por exemplo, cada vez que corta ou copia parte de uma folha de cálculo, a aplicação da folha de cálculo pode colocar os dados em um formato hipotético ‘SPSH’, como também nos formatos SYLK e TEXT. A instância ‘SPSH’ contém os dados estruturados no formato utilizado pela aplicação. A cópia SYLK contém os mesmos dados, mas no formato SYLK, reconhecido pela maioria dos outros programas de folhas de cálculo. Por último, o formato TEXT contém os mesmos dados, sem a informação extra incluída no formato SYLK ou no formato hipotético ‘SPSH’. Neste ponto, quando escreva rotinas de Cortar/Copiar/Colar entre 4D e uma aplicação de folha de cálculo hipotética, assumindo que conhece a descrição do formato ‘SPSH’ e que está preparado para analizar os dados SYLK, pode escrever o código a seguir: 

```4d
 Case of
  // Primeiro, verificar se a área de transferência contém os dados da aplicação da folha de cálculo hipotética.
    :(Pasteboard data size('SPSH')>0)
  // ...
  // Segundo, verificar se a área de transferência contém dados em formato Sylk
    :(Pasteboard data size('SYLK')>0)
  // ...
  // Por último, verificar se a área de transferência contém dados em formato Text
    :(Pasteboard data size('TEXT')>0)
  // ...
 End case
```

Em outras palavras, você tenta extrair da área de transferência a instância de dados que tenha mais informação original.

#### Exemplo 3 

Se quiser arrastar alguns dados privados de diferentes objetos em seu formulário pode escrever:

```4d
  //objeto origem
 If(FORM Event=On Begin Drag Over)
    APPEND DATA TO PASTEBOARD("some.private.data";$data)
 End if
```

```4d
  //objeto destino
 If(FORM Event=On Drag Over)
    $0:=Choose(Pasteboard data size("some.private.data")>0;0;-1)
 End if
```

#### Exemplo 4 

Ver o exemplo do comando [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD").

#### Ver também 

*Área de trabalho*  
[GET PASTEBOARD DATA](get-pasteboard-data.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 400 |
| Thread-seguro | &cross; |
| Modificar variáveis | error |


