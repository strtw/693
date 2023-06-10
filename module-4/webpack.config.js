import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = 'production';

const config = {
  entry: {
    employees: './src/employees.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    },
  },
  devtool: 'source-map',
  mode: isProduction ? 'production' : 'development',
};

export default config;
