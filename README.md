
# 正式版本

## 选择需要更新的包，选择patch、minor、minor严格遵循 semver（https://semver.org/） 规范
pnpm changeset

## 然后执行 pnpm changeset version 修改包的版本
pnpm changeset version

## 打包
pnpm build

## 推送
pnpm changeset publish

## 提交代码
git add .

git commit -m "xxx"

git push


# alpha/beta/rc版本

## 选择需要更新的包，选择patch、minor、minor严格遵循 semver（https://semver.org/） 规范
> 进入 Prereleases 模式

pnpm changeset pre enter alpha   # 发布 alpha 版本

pnpm changeset pre enter beta    # 发布 beta 版本

pnpm changeset pre enter rc      # 发布 rc 版本

## 然后执行 pnpm changeset version 修改包的版本
pnpm changeset version

## 打包
pnpm build

## 推送
pnpm changeset publish

## 退出 Prereleases 模式
pnpm changeset pre exit

## 提交代码
git add .

git commit -m "xxx"

git push