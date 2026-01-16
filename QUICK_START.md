# Quick Start Guide

## Prerequisites
- Docker and Docker Compose installed
- Maven installed
- Java 17+ JDK

## Quick Commands

### Build & Run
```bash
cd Backend
mvn clean package -DskipTests
sudo docker-compose up -d
```

### Check Status
```bash
sudo docker-compose ps
sudo docker-compose logs backend
```

### Test JWT Login
```bash
# Generate JWT token
curl -X POST http://localhost:8080/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"user","password":"pass"}'

# Use token to access protected endpoint
# Replace TOKEN with the token from above
curl -X GET http://localhost:8080/auth/protected \
  -H "Authorization: Bearer TOKEN"
```

### Access Web UI
Visit: http://localhost:8080/auth/

### Stop Services
```bash
sudo docker-compose down
```

## Default Credentials
- **Username**: `user`
- **Password**: `pass`

## Services
- **Backend API**: http://localhost:8080
- **PostgreSQL**: localhost:5432
- **Database**: demodb
- **DB User**: demo / password

## Issues Fixed
✅ JWT property naming (app.jwt.secret, app.jwt.expiration-ms)
✅ Spring Security AuthenticationManager configuration
✅ PostgreSQL Docker integration
✅ Application properties aligned with Docker networking
