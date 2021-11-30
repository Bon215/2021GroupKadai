# 2021GroupKadai

## 環境設定方法

-----------------------

### dockerが設置されている

-----------------------

#### clientとserverを一緒に起動する場合

1. git clone後
```
$  source kadai.sh
```
2. build
```
$ dbuild
```
3. 実行
```
$ dup
```

#### 分けたい場合

1. git clone後
```
$  source kadai.sh
```
2. server起動
```
$ dserver
```
3. 別の窓でclient起動
```
$ dclient
```

-----------------------

### dockerが設置されていない

-----------------------

1. 実行
```
yarn run all
```