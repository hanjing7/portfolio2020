# JingPortfolio20

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Command
If necessary to reinstall angular-kit: 
```
npm install --save-dev @angular-devkit/build-angular
npm install ngx-device-detector --save
```

To publish at github.
```
ng build --prod --output-path docs --base-href https://hanjing7.github.io/portfolio2020/
cd docs
mv index.html 404.html
cd ..
```


### Problems reference
#### `ng build` encounters error `Error: error:0308010C:digital envelope routines::unsupported`

[Answer link](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported), try 
```set NODE_OPTIONS=--openssl-legacy-provider```

#### Git operations failed due to authentication
- https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
- https://stackoverflow.com/questions/47455300/ssh-config-bad-configuration-option-usekeychain-on-mac-os-sierra-10-12-6
- https://blog.csdn.net/weixin_42562387/article/details/114443451

```
# using git-bash, rather than cmd
eval $(ssh-agent -s)
ssh-keygen -t ed25519 -C "hanjing7@github.com"
ssh-keygen -t ed25519 -C "hanjing7@umich.edu"
# add private key
ssh-add id_ed25519
# verify
ssh -T git@github.com
# copy pub key content (all) to github account settings

git config --global user.name "hanjing7"
git config --global user.email hanjing7@umich.edu

```

Still encounter problem
```
$ git push
remote: Permission to hanjing7/portfolio2020.git denied to chutianwen.
fatal: unable to access 'https://github.com/hanjing7/portfolio2020.git/': The requested URL returned error: 403
```
Finally, solved by adding chutianwen to this repo
