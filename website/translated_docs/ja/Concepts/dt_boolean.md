---
id: ブール
title: ブール
---

ブールのフィールド、変数、式は、true（真）またはfalse（偽）のいずれかになります。

## ブール関数

4D provides the Boolean functions `True`, `False`, and `Not` in the dedicated **Boolean** theme. 詳細については、これらのコマンドの説明を参照ください。

### 例題

ボタンの値に基づいて、ブール変数に値を設定します。 myButton ボタンがクリックされたら myBoolean に true を、クリックされていなければ false を設定します。 ボタンがクリックされるとボタン変数の値は1になります。

```4d
 If(myButton=1) // ボタンがクリックされたら
    myBoolean:=True // myBoolean を true に設定
 Else // ボタンがクリックされていなければ
    myBoolean:=False // myBoolean を false に設定
 End if
```

上のコードは以下のように一行で書くこともできます。

```4d
myBoolean:=(myButton=1)
```

## 論理演算子

4Dは、ブール式に対して機能する次の論理演算子をサポートしています: 論理積 (AND) と論理和 (OR)。 論理積 (AND) は両方の式が true である場合に true を返します。 論理和 (OR) は少なくとも一方の式が true の時に true を返します。 次の表に、論理演算子を示します:

| 演算子 | シンタックス         | 戻り値 | 式                            | 結果    |
| --- | -------------- | --- | ---------------------------- | ----- |
| AND | ブール & ブール      | ブール | ("A" = "A") & (15 # 3)       | True  |
|     |                |     | ("A" = "B") & (15 # 3)       | False |
|     |                |     | ("A" = "B") & (15 = 3)       | False |
| OR  | ブール &#124; ブール | ブール | ("A" = "A") &#124; (15 # 3)  | True  |
|     |                |     | ("A" = "B") &#124;  (15 # 3) | True  |
|     |                |     | ("A" = "B") &#124;  (15 = 3) | False |

論理演算子 (AND) の真偽表を示します:

| Expr1 | Expr2 | Expr1 & Expr2 |
| ----- | ----- | ------------- |
| True  | True  | True          |
| True  | False | False         |
| False | True  | False         |
| False | False | False         |

論理演算子 (OR) の真偽表を示します:

| Expr1 | Expr2 | Expr1 &#124; Expr2 |
| ----- | ----- | ------------------ |
| True  | True  | True               |
| True  | False | True               |
| False | True  | True               |
| False | False | False              |

**Tip:** If you need to calculate the exclusive disjunction between Expr1 and Expr2, evaluate:

```4d
 (Expr1|Expr2) & Not(Expr1 & Expr2)  
```
