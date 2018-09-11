/* eslint-env node */
export async function load(loaders, path, { args }) {
  const errors = [];

  for (let { loader, filter } of loaders) {
    if (!filter || filter(path)) {
      try {
        return await loader.load(path, { args });
      } catch (error) {
        errors.push(error);
      }
    }
  }

  for (const error of errors) {
    console.error(error); // eslint-disable-line no-console
  }

  throw new Error('Could not load path: ' + path);
}
