import _ from 'node_modules/lodash';

export class Helper {

  public static isEmpty(s): boolean {
    if (s == null || _.isUndefined(s) || _.isEmpty(s)) {
      return true;
    } else {
      return false;
    }
  }

  public static isNull(s): boolean {
    if (s == null || _.isUndefined(s)) {
      return true;
    } else { return false; }
  }
}