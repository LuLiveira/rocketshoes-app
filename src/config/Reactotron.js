import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({host: '192.168.15.15'})
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}
