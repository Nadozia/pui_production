![[web1.png]]
It is our server console, and we can start to set up a simple web server.

Install Nginx
```
sudo apt update
sudo apt install nginx
```

![[Pasted image 20230217120223.png]]
Server is up and working. Let's configure it.

The web page is in /var/www/html/. So we have to go there and create our own webpage.

```
cd /var/www/html/
mkdir pui_build
nano pui_build/index.html
```

![[Pasted image 20230217120749.png]]

Setting up Virtual hosting on our page.
We should put our vhost file in /etc/nginx/sites-enabled

```
cd /etc/nginx/sites-enabled
cp default pui_homepage
nano pui_homepage
```

![[Pasted image 20230217121437.png]]


```
listen 81;
listen [::]:81;
```
We will use port 81 for the moment.

```
root /var/www/html/pui_build
index index.html
```

root is the webpage root directory, index points to the index page.

```
server_name puiserver.com;
```
I just made up the server_name as it is not yet pointing to a real domain.

Finally we can restart and test our new virtual hosting.
```
sudo service nginx restart
```

An Error occurs:
![[Pasted image 20230217125500.png]]

Error message:
Job for nginx.service failed because the control process exited with error code.
See "systemctl status nginx.service" and "journalctl -xeu nginx.service" for details.

Checking what is the error
```
nginx -t
```

![[Pasted image 20230217125719.png]]

It seems that there is duplicated default server. Something wrong with the path and port i guess.

![[Pasted image 20230217130353.png]]

For some reason, it did not save correctly, now it should be okay!



![[Pasted image 20230217130435.png]]

## Now we got it!
![[Pasted image 20230217130610.png]]


Future Updates:
Setup SSL on port 443
Create static page, and a single page application on another vhost

Useful links:
https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04
https://ubuntu.com/tutorials/install-and-configure-nginx#1-overview
