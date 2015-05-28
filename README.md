# Webフォントのアイコンとアニメーション
Webフォントを使用したアイコンのMixinとアニメーションMixinです。

##アイコンの使用方法
configファイルで使用したいアイコンのUnicodeを配列として設定します。

**_setting.config.scss**

```css
$icons:(
  excle: f1c3,
  word: f1c2,
  spin: f110,
  ...etc
);
```

変数名は固定でkeyは任意です。
以下のように「@include」を使用し「iconset」と言うmixinに先ほどセットした配列の名前を引数として渡します。

**style.scss**

```css
.c-icon__exl {
  @include iconset(excle);
}
```

コンパイル後以下のように出力されます。

```css
.c-icon__exl:before {
  content: "\f1c3";
}
```

##アニメーションの使用方法

まず以下のファイルでアニメーションの配列で「スタート」と「ラスト」の値を設定します

**_setting.config.scss**

```css
$animates:(
  spin:(
    start: 0deg,
    last: 360deg
  ),
  swing:(
    start: 45deg,
    last: 135deg
  )
);
```

以下のように記述します。

**style.scss**

```css
.c-icon__spin {
  @include iconset(spin);
  @include animation(spin);
}
```

コンパイル後以下のように出力されます。

```css
.c-icon__spin {
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}
.c-icon__spin:before {
  content: "\f110";
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
```

##まとめ
アニメーション用のmixinはそれに応じた汎用性が高いものも使用可能だがここではアイコンのみなのでこのようにしました。
**[Demo](http://taisun.github.io/demos/iconanime/)**
