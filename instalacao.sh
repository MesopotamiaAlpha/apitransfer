#!/bin/bash

#CORES

VERMELHO='\e[1;91m'
VERDE='\e[1;92m'
SEM_COR='\e[0m'

echo -e "Iniciando instalação de dependencias..."

apt update

echo -e "${VERDE}[INFO] - Update executado com sucesso${SEM_COR}"

apt dist-upgrade -y

echo -e "${VERDE}[INFO] - Dist Upgrade executado com sucesso${SEM_COR}"

apt install mysql-server -y

echo -e "${VERMELHO}[INFO] - Executar processo de mysqlSecure depois${SEM_COR}"

apt install curl -y

echo -e "${VERDE}[INFO] - Curl instalado com sucesso${SEM_COR}"

apt install nodejs -y

echo -e "${VERDE}[INFO] - Node instalado com sucesso${SEM_COR}"

apt install  npm -y

echo -e "${VERDE}[INFO] - NPM instalado com sucesso ${SEM_COR}"

curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

echo -e "${VERDE}[INFO] - Instalado node.js 18 com sucesso ${SEM_COR}"

#npm install express

#npm install -g serve

#npm install mysql

#npm install cors

#npm install -g npm-check-updates

#ncu

#ncu -g

#ncu -u

#npm update

#npm install

echo -e "Gostaria de fazer o deploy? [S/N]"

read resposta

if [ $resposta = "S" ]
then
    npm run build
    serve -s build
elif [ $resposta = "N" ]; then

echo "Instalacao concluida!"

else
    echo "Opcao invalida!"
fi

done