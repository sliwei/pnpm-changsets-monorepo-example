
# 正式版本

### 1、修改代码

### 2、选择需要更新的包，选择patch、minor、minor严格遵循 semver（https://semver.org/） 规范
npx changeset

### 3、然后执行 npx changeset version 修改包的版本
npx changeset version

### 4、打包
yarn build

### 5、推送
npx changeset publish

### 6、提交代码
git add .

git commit -m "xxx"

git push


# alpha/beta/rc版本

### 1、进入 Prereleases 模式

npx changeset pre enter alpha   # 发布 alpha 版本

npx changeset pre enter beta    # 发布 beta 版本

npx changeset pre enter rc      # 发布 rc 版本

### 执行正式版本的步骤

> 正式版本1~6步骤

### 2、退出 Prereleases 模式
npx changeset pre exit