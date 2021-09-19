import { join, relative } from 'path';

import { red } from 'colors/safe';
import { FileSystem } from '../../file-system';

export function connectAngular(path: string) {
  const fs = new FileSystem();

  if (!fs.exists(path)) {
    if (process.env.P1Z7kEbSUUPMxF8GqPwD8Gx_FOAL_CLI_TEST !== 'true') {
      console.log(red(`  The directory ${path} does not exist.`));
    }
    return;
  }

  if (!fs.exists(join(path, 'angular.json'))) {
    if (process.env.P1Z7kEbSUUPMxF8GqPwD8Gx_FOAL_CLI_TEST !== 'true') {
      console.log(red(`  The directory ${path} is not an Angular project (missing angular.json).`));
    }
    return;
  }

  if (!fs.exists(join(path, 'package.json'))) {
    if (process.env.P1Z7kEbSUUPMxF8GqPwD8Gx_FOAL_CLI_TEST !== 'true') {
      console.log(red(`  The directory ${path} is not an Angular project (missing package.json).`));
    }
    return;
  }

  fs
    .cd(path)
    .copy('angular/proxy.conf.json', 'src/proxy.conf.json')
    .modify('package.json', content => {
      const pkg = JSON.parse(content);

      pkg.scripts.build = 'ng build --prod';

      return JSON.stringify(pkg, null, 2);
    })
    .modify('angular.json', content => {
      const config = JSON.parse(content);

      // Proxy configuration
      config.projects[config.defaultProject].architect ||= {};
      config.projects[config.defaultProject].architect.serve ||= {};
      config.projects[config.defaultProject].architect.serve.options ||= {};
      config.projects[config.defaultProject].architect.serve.options.proxyConfig = 'src/proxy.conf.json';

      // Output build directory
      const outputPath = join(relative(path, process.cwd()), 'public')
        // Make projects generated on Windows build on Unix.
        .replace(/\\/g, '/');
      config.projects[config.defaultProject].architect.build ||= {};
      config.projects[config.defaultProject].architect.build.options ||= {};
      config.projects[config.defaultProject].architect.build.options.outputPath = outputPath;

      return JSON.stringify(config, null, 2);
    });
}
