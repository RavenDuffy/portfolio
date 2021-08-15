# portfolio_front

This is the frontend for my [portfolio](ravenduffy.io).

## Main and Development

The `main` branch is a direct reflection of the actual code on the website. All changes in this branch are automatically staged at 00:00 UTC every day.

If you want to update the `main` branch submit an up-to-date PR based on the `development` branch with your changes. They will be reviewed and potentially merged with the `main` branch

## Building

This frontend is run on [Docker](https://hub.docker.com/repository/docker/magpiedocker/portfolio) and it can be built using the command:

```powershell
docker build --pull --rm -f "portfolio_front\Dockerfile" -t portfolio:latest "portfolio_front"
```

## Allow Gmail Access

https://www.google.com/settings/security/lesssecureapps

https://g.co/allowaccess
