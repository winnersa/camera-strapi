# Use a Node base image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json and package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
# RUN npm ci --only=production
RUN npm install

# Bundle app source
COPY . .

# Set environment variables from your .env file
# Be careful with sensitive data and consider using Docker secrets or another method
# to handle sensitive environment variables in production
ENV HOST 0.0.0.0
ENV PORT 1337
ENV APP_KEYS hvGNBsSA7PlvsRSMKRXrWw==,zDspkHnsjgPha96Ck8Ymag==,JT1PC6q02j8v78tbdRI6LA==,eYBQsrswxSqaqvzo8gmUhA==
ENV API_TOKEN_SALT 0MVyyBlzMD2Q9D1iDJNLeg==
ENV ADMIN_JWT_SECRET p0yScImAR1t2J1VcIB8NRw==
ENV TRANSFER_TOKEN_SALT IefGeVWHXWsMr41vvyTiLg==
ENV DATABASE_CLIENT mysql2
ENV DATABASE_HOST cdx-stock-camera-do-user-15092335-0.c.db.ondigitalocean.com
ENV DATABASE_PORT 25060
ENV DATABASE_NAME cdx_stock_camera
ENV DATABASE_USERNAME admin
ENV DATABASE_PASSWORD AVNS_UJs2FzADmf3Vhd830G0
ENV DATABASE_SSL false
ENV JWT_SECRET 8DriXhD9n5gNb6verWr2gw==



# Your application's default port
EXPOSE 1337

# Run the application
CMD [ "npm","run" , "develop" ]
