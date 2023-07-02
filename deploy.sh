#!/usr/bin/env sh

# 檢查有沒有 dist 資料夾，如果有的話，就移除
DIR="./dist"
if [ -d "$DIR" ]; then
  yes | rm -r ./dist
fi

# 產出靜態網站，即 dist 資料夾
npm run build

# 進到 dist 資料夾
cd dist

# 初始化 git，將 dist 資料夾進版控
git init
# 切換到 master branch，沒有的話，會自動建立
git checkout -b master
# 將所有檔案加進版控
git add -A
# 進行 commit
git commit -m 'deploy'
# 加 GitHub 遠端的 repo
git remote add origin git@github.com:帳號名稱/儲藏庫名稱.git
# 進行強制 push
git push -f origin master

# 回到上次的資料夾
cd -