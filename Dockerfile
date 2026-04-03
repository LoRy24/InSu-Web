# Usa Node
FROM node:20-alpine

WORKDIR /app

# Copia package files
COPY package.json package-lock.json* ./

# Installa dipendenze
RUN npm ci

# Copia tutto il progetto
COPY . .

# Build Next.js
RUN npm run build

# Espone porta
EXPOSE 3000

# Avvia in production
CMD ["npm", "run", "start"]