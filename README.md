# Clean Code Examples
Examples of clean code with C#, Typescript

## Vue setup
npm install -g @vue/cli
npm i -g @vue/cli-service-global

## Project setup
```
yarn install
yarn run serve
```
Or
```
npm install
npm run serve
```

npm run build

# Others
npm install -g @vue/cli @vue/cli-service-global
vue create cleancode_csharp
npm run serve | vue serve
vue build MyComponent.vue

=== TAIWIND
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
npm install --save @vue-hero-icons/outline

# Json escape
https://www.freeformatter.com/json-escape.html#ad-output

# Problems
- vue No ESLint configuration found.
    npm install eslint -g -D
    eslint --init (No projeto)

# Docker 
docker build .
docker tag 787a65631a84 cleancode/csharp 
docker run -it -p 8080:80 -d --name docker-cleancodecsharp cleancode/csharp