# portfolio_front

This is the frontend for my portfolio.

## Building

This frontend is run on [Docker](https://www.docker.com/) and it can be
built using the command:

```powershell
docker build --pull --rm -f "portfolio_front\Dockerfile" -t portfolio:latest "portfolio_front"
```

Execute the docker image using:

```powershell
docker run --rm -d  -p 3000:3000/tcp portfolio:latest
```
