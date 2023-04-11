# 使用 Node.js Alpine 版本作为基础镜像
FROM node:19-alpine

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到容器中
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 将项目文件复制到容器中
COPY . .

# RUN npm run build

# 暴露 5173 端口
EXPOSE 5173

# 启动 Vue.js 项目
CMD ["npm", "run", "dev"]
