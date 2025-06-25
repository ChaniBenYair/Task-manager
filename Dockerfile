# שלב בנייה
FROM node:20-alpine AS builder

# התקנת תעודות SSL במערכת Alpine
RUN apk add --no-cache ca-certificates

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# מבטל בדיקת SSL רק לבנייה (יכול לעזור אם יש בעיות תעודות)
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

# בונה ומייצא את האתר כסטטי לתיקיית out
RUN npm run build 

# שלב ריצה
FROM nginx:alpine AS runner

# מעתיק את התוכן הסטטי ל-Nginx
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
