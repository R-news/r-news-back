import moduleAlias from 'module-alias';
import path from 'path';

const rootPath = path.resolve(__dirname, '..', '..');
moduleAlias.addAliases({
  '@src': rootPath,
});