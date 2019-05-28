// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseAPIUrl: 'http://localhost:8080',
  baseImageUrl: 'http://fortnitepal.s3.amazonaws.com',

  legendaryBackground: 'https://fortnitepal.s3.amazonaws.com/images/background/legendary.png',
  epicBackground: 'https://fortnitepal.s3.amazonaws.com/images/background/epic.png',
  rareBackground: 'https://fortnitepal.s3.amazonaws.com/images/background/rare.png',
  commonBackground: 'https://fortnitepal.s3.amazonaws.com/images/background/common.png',
  uncommonBackground: 'https://fortnitepal.s3.amazonaws.com/images/background/uncommon.png'
};
