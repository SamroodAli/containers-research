FROM node:18

# the creators of the node container created a user called node
USER node

# WORKDIR creates a directory if one does not exist.
# /home/node is owned by the user node.
WORKDIR /home/node/app

# Since we are using the user "node", we are copying over the files 
# and setting their ownership to the user "node" in the user group "node" 

# Copying package.json and lock file as these rarely change and are cached.
COPY --chown=node:node package.json package-lock.json ./

# RUN lets you ru arbitrary shell comamnds
# npm ci is going to adhere to whatever is in the package-lock
# npm ci will only install the dependencies and not try to update them.
# This way, we can replicate the same dependency versions in CI/CI and in production environments
# It is better to do npm i in development but npm ci in production
RUN npm ci

# Copying the rest of the source code
COPY --chown=node:node . .

# There is another command called Add
# If we are using the local file system, it is better to use COPY
# but if we want to add a file over the network.
# Add can also automatically unzip files such as a tar file.
# ADD --chown=node:node index.js index.js 


# We can export ports but we need to use docker run command with the -P flag
# which doesn't do a one one one mapping like 3000:3000 but selects a ramdom available
# port from the host and maps it to the port we are exposing. 
# For this reason, Expose is not used a lot. 
# Some people use it as documentation, to document what ports the container is exposing
# but we can easily put that in the readme and not here.
# It is better to use port mapping (--publish) when we run the container.
EXPOSE 3000

CMD ["node","index.js"]