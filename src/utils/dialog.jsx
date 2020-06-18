import { Toast } from 'antd-mobile';
export default {
  toast(msg){
    Toast.info(msg, 2);
  },
  offline(msg){
    Toast.offline(msg, 2);
  },
  error(msg){
    Toast.fail(msg, 2);
  },
}