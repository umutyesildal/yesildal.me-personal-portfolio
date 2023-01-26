// taken and modified from https://stackoverflow.com/a/61375162/811405
function snakeToCamel(str){
  if(str.indexOf('_') == -1 && str.indexOf('-') == -1){
    return str;
  }
  while(str.indexOf('_') != -1){
    const targetIndex = str.indexOf('_');
    str = str.substring(0, targetIndex) + str.substring(targetIndex + 1, targetIndex + 2).toUpperCase() + str.substring(targetIndex + 2);
  }
  return str;
}


export function sanitizeData(data){
  for (const key in data) {
      const element = data[key];
      if(typeof element === 'undefined'){
          data[key] = null;
      }else if(typeof element === 'object'){
          sanitizeData(element);
      }
  }
  for (const key in data) {
    const camelKey = snakeToCamel(key);
    if(camelKey != key){
      data[camelKey] = data[key];
      delete data[key];
    }
  }
}
