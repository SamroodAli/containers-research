FROM node:18

# the creators of the node container created a user called node
USER node

# WORKDIR creates a directory if one does not exist.
# /home/node is owned by the user node.
WORKDIR /home/node/app

# Since we are using the user "node", we are copying over the files 
# and setting their ownership to the user "node" in the user group "node" 
COPY --chown=node:node index.js index.js

# There is another command called Add
# If we are using the local file system, it is better to use COPY
# but if we want to add a file over the network.
# Add can also automatically unzip files such as a tar file.
# ADD --chown=node:node index.js index.js 

CMD ["node","index.js"]