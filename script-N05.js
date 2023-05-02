function treeSum(arr) {
    let result = 0;
    for ( let i = 0; i < arr.length; i++ ) {
      if (Array.isArray( arr[i] )) 
        result += treeSum( arr[i] );
      else 
        result += arr[i];
      }
    return result;
  }
  