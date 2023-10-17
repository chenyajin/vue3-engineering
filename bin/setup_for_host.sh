# 构建镜像
image_name=vite-web # 表示镜像名称
version=$(date +'%Y%m%d-%H%M%S') # 表示镜像版本（用时间表示）
contianer_name=my-web # 运行的容器名称
host_port=8080 # 本机端口
container_port=80 # 运行的容器端口

echo 'docker build...' # 构建镜像
docker build -t $image_name:$version .
echo 'docker rm...' # 清理同名容器
# 如果已经有同名的容器，删除掉
if [ "$(docker ps -aq -f name=$contianer_name)" ]; then
  echo 'docker rm ...'
  docker rm -f $contianer_name
fi
echo 'docker run...' # 启动容器
docker run -d --name $contianer_name -p $host_port:$container_port $image_name:$version
echo 'Done!'
