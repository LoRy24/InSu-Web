# Usa Node
FROM node:25-alpine

WORKDIR /app

# Copia TUTTO il progetto all’inizio
COPY . .

# Installa dipendenze
RUN npm i

# Build Next.js
RUN npm run build

# Espone porta
EXPOSE 3000

# Avvia in production
CMD ["npm", "run", "start"]