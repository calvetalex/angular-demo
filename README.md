# Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

# Goal

The goal of this project is to create a website that will let you open some "application" inside the page and use it as a Desktop. It will be my portfolio online and is dedicated to being kept up to date in order to allow me to create sandbox applications to test new things and be able to present them.

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

---

## Architecture

### Store

The store is using [NGRX](https://ngrx.io/) and each part is splitted between UI and API contexts.

- Use an API store service whenever you need to fetch data from a server
- Use an UI store service whenever the data you are using do not depend of a server

To add a store service, you will need to follow those steps:

- define a state (`src/app/store/states`): define the interface for the data you will be using inside the store and create an initialState that will be an empty object of this interface
- define the actions (`src/app/store/actions`): define all the actions you will use or may use inside the application to interact with your store
- define the effects (_optionnal_ `src/app/store/effects`): if your action needs a response from another service, for example in the case you are using an api, you will need to create the effect that will link your action to send the request and the action that will save the response
- define the reducer (`src/app/store/reducers`): define the reducer and include it inside the _combineReducers_ to expose it at the application level.
- define the selectors (`src/app/store/selectors`): define all the selectors that will allow you to retrieve data from the store inside the components

### Container / Components

Each new application must be created in a container file that will include all the components you need to make it works. All the components must be place in `src/app/components/{your-component}/`. All components must have a selector beginning with `app-`.

---

## i18n

The only language supported for the moment is English. To add a new feature, please create a new key inside "app" with the name of your feature to keep the json file clean and maintainable.

---

# Contributing

If you want to add a new feature, please follow this process:

- create your branch using `{keyword}/{name of your component}_{optionnal: quick description}`. For exemple feature/draggable-modal, bug/draggable-modal_impossible-to-reopen-modal-after-close
- first commit on a branch: `git push --set-upstream origin {your branch name}`. If you already pushed on your branch you can simply use `git push`
- keep your branch up to date with main before asking a PR: `git rebase main`
- you can run the lint in local using `npm run lint`
