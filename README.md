# Create Solid Library

Create SolidJS libraries with ease!

## Usage

```bash
npx create-solid-library <name>
```

### Development

Developing components is often a visual process. As a result, vite is being used as a build tool and as a dev environment!
Just run `npm run dev` and you can live code your component.

#### Excluding Dependencies

At build time, Vite unfortunately cannot exclude dependencies automatically. Dependencies you install need to be [externalized](https://vitejs.dev/guide/build.html#library-mode) so that it doesn't appear in the final bundle!

### Testing your component works

Oftentimes, there can be issues that only appear after build time. As a result, we added a `test-project` folder where you can use your Solid component and test if it
actually works in a real project!

### Building for production

```bash
npm run build
```
