

export const transformKeyValueJSON = (object: any) => {
    // Transform response
    let result = []

    const dict = object;
    for (let key in dict) {
      if (dict[key].length > 0) {
        dict[key].forEach((elem: { toString: () => string }) => {
          result.push(key.toString() + "-" + elem.toString());
        });
      } else {
        result.push(key.toString());
      }
    }
    
    return result
}