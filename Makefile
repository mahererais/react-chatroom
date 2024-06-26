ALIAS_CHAT_APP ?= ./

install:
	make build start 

start:
	sh exportEnv.sh
	docker-compose up -d 

stop:
	docker stop node-client-chat node-server-chat

down:
	docker-compose down

restart:
	make stop start

build:
	docker-compose build

build-no-cache:
	docker-compose build --no-cache

node-install:
	docker exec node-client-chat bash -c "npm install --force"
	docker exec node-server-chat bash -c "npm install --force"

deploy:
	docker container start node-server-chat
	docker exec node-client-chat bash -c "npm run build ${ALIAS_CHAT_APP}"
