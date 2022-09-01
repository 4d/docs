---
id: picture
title: Imagem
---

Um campo, variável ou expressão pode ser qualquer imagem de Windows ou Macintoh. Em geral, isto inclui qualquer imagem que possa ser colocada na pasta ou lida a partir do disco utilizando comandos 4D, tais como `LEIA O ARQUIVO DE IMAGENS`.

4D usa APIs nativas para codificar (escrever) e decodificar (ler) campos de imagens e variáveis sob Windows e macOS. Essas implementações oferecem acesso a inúmeros formatos nativos, incluindo o formato RAW atualmente utilizado por câmeras digitais.

* no Windows, 4D usa o WIC (Componente de Imagens Windows).
* no macOS, 4D usa ImageIO.

WIC e ImageIO permitem o uso de metadados nas fotos. Dois comandos, `SET PICTURA METADATA` e `GET PICTURE METADATA`, permitem que você se beneficie com metadados em seus desenvolvimentos.

## IDs de códigos de imagem

4D suporta nativamente um amplo conjunto de formatos de imagem [](FormEditor/pictures.md#native-formats-supported), tais como .jpeg, .png, ou .svg.

Os formatos de imagens reconhecidos por 4D são retornados pelo comando `PICTURE CODEC LIST` como picture Codec IDs.  Eles podem ser devolvidos nos seguintes formulários:

* Como uma extensão (por exemplo ".gif")
* Como um tipo MIME (por exemplo, “image/jpeg”)

O formulário retornado para cada formato dependerá da forma como o Codec é gravado no nível do sistema operacional. Note que a lista de codecs disponíveis para leitura e escrita pode ser diferente desde que a codificação de codecs pode exigir licenças específicas.

A maioria dos [comandos de gerenciamento de imagens 4D](https://doc.4d.com/4Dv18/4D/18/Pictures.201-4504337.en.html) pode receber um Codec ID como parâmetro. É imperativo, portanto, usar a ID do sistema retornada pelo comando `PICTURE CODEC LIST`. Os formatos de imagem reconhecidos por 4D são devolvidos pelo comando `PICTURE CODEC LIST` .

## Operadores Bitwise

| Operação                | Sintaxe                | Retorna | Ação                                                                                                                                                                       |
| ----------------------- | ---------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Concatenação horizontal | Foto1 + Foto2          | Imagem  | Adicionar Pict2 à direita da Pict1                                                                                                                                         |
| Concatenação vertical   | Pict1 / Pict2          | Imagem  | Acrescentar Pict2 ao fundo de Pict1                                                                                                                                        |
| Sobreposição exclusiva  | Pict1 & Pict2          | Imagem  | Sobrepõe Pict2 no topo de Pict1 (Pict2 em primeiro plano). Produz o mesmo resultado que `COMBINE PICTURES(pict3;pict1;Superimposition;pict2)`                              |
| Sobreposição inclusiva  | Pict1 &#124; Pict2     | Imagem  | Sobrepõe Pict2 em Pict1 e devolve a máscara resultante se ambas as imagens tiverem o mesmo tamanho. Produz o mesmo resultado que `$equal:=Fotos iguais(Pict1;Pict2;Pict3)` |
| Movimento horizontal    | Imagem + Número        | Imagem  | Mover imagem horizontalmente número pixels                                                                                                                                 |
| Movimento vertical      | Imagem / Número        | Imagem  | Mover imagem em pixels do número vertical                                                                                                                                  |
| Redimensionamento       | Imagem * Número        | Imagem  | Redimensionar imagem por proporção número                                                                                                                                  |
| Escala horizontal       | Imagem *+ Número       | Imagem  | Redimensionar imagem horizontalmente por relação numérica                                                                                                                  |
| Escala vertical         | Picture *&#124; Number | Imagem  | Redimensionar imagem por proporção número                                                                                                                                  |

**Notas:**

* Para utilizar o | operador, Pict1 e Pict2 devem ter exactamente a mesma dimensão. Se ambas as imagens tiverem um tamanho diferente, a operação Pict1 | Pict2 produz uma imagem em branco.
* O comando `COMBINE PICTURES` pode ser utilizado para sobrepor imagens mantendo as características de cada imagem de origem na imagem resultante.
* Operações adicionais podem ser realizadas em imagens usando o comando `TRANSFORM PICTURE` .
* Não há operadores de comparação em imagens, no entanto 4D propõe o comando `Equal picture` para comparar duas imagens.

### Exemplos

Concatenação horizontal

```4d
 círculo+rectângulo //Coloca o retângulo à direita do círculo
 rectângulo+círculo //Coloca o círculo à direita do retângulo
```

![](../assets/en/Concepts/concatHor.en.png) ![](../assets/en/Concepts/concatHor2.en.png)

Concatenação vertical

```4d
 círculo/retângulo //Coloca o retângulo abaixo do círculo
 retângulo/círculo //Coloca o círculo abaixo do retângulo
```

![](../assets/en/Concepts/concatVer.en.png) ![](../assets/en/Concepts/concatVer2.en.png)

Sobreposição exclusiva

```4d
Pict3:=Pict1 & Pict2 // Superimpõe Pict2 no topo da Pict1
```

![](../assets/en/Concepts/superimpoExc.fr.png)

Sobreposição inclusiva

```4d
Pict3:=Pict1|Pict2 // Recupera a máscara resultante da sobreposição de duas imagens do mesmo tamanho
```

![](../assets/en/Concepts/superimpoInc.fr.png)

Movimento horizontal

```4d
retângulo+50 //Mova o retângulo 50 pixels para a direita
retângulo-50 //Mova o retângulo 50 pixels para a esquerda
```

![](../assets/en/Concepts/hormove.en.png)

Movimento vertical

```4d
retângulo/50 //Mova o retângulo para baixo em 50 pixels
retângulo/-20 //Mova o retângulo para cima em 20 pixels
```

![](../assets/en/Concepts/vertmove.en.png)![](../assets/en/Concepts/vertmove2.en.png)

Redimensionar

```4d
retângulo*1,5 ///O retângulo fica 50% maior
retângulo*0,5 ///O retângulo fica 50% menor
```

![](../assets/en/Concepts/resize.en.png)![](../assets/en/Concepts/resisze2.en.png)

Escala horizontal

```4d
círculo*+3 ///O círculo se torna 3 vezes maior
círculo*+0.25 ///A largura do círculo se torna um quarto da que era
```

![](../assets/en/Concepts/Horscaling.en.png)![](../assets/en/Concepts/Horscaling2.en.png)

Escala vertical

```4d
círculo*|2 //O círculo torna-se duas vezes mais alto
círculo*|0.25 //A altura do círculo torna-se um quarto do que era
```

![](../assets/en/Concepts/vertscaling.en.png)![](../assets/en/Concepts/veticalscaling2.en.png)
