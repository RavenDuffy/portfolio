DIR="$(dirname "$(readlink -f "$0")")"
docker pull magpiedocker/portfolio
docker stop local_portfolio
docker rm local_portfolio
docker run --name=local_portfolio --env-file $DIR/.env.local --restart=always -d -p 80:3000/tcp magpiedocker/portfolio