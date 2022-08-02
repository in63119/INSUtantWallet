# 환경 설정

'.env.example'에서 환경설정

## Port

SERVER_PORT=4000

## DB

DB_USER_NAME=유저이름
DB_PASSWORD=비밀번호
DB_DATABASE=INSUtantWallet
DB_HOST=서버 호스트 //127.0.0.1
SERVER_PORT=3306

# DB 생성

DB 생성
`sequelize db:create`

DB 마이그레이션
`npx sequelize-cli db:migrate`
