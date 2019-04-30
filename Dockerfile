FROM balenalib/%%BALENA_MACHINE_NAME%%-node

COPY package.json /package.json
RUN npm install

COPY . .
CMD ["node", "app.js"]