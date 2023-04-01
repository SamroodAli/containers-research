# Fetch from docker hub a base image that we will chroot into and use as our base image
FROM node:12-stretch

# What command to run by default (default executable) and any arguments
# our base image also has a CMD in it and so 
# docker considers the last CMD as the default executable command.
CMD [ "node", "-e", "console.log(\"hello world\")" ]