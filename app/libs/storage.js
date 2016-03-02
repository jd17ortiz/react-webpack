export default {
  get( obj ) {
    try {
      return JSON.parse(localStorage.getItem(obj));
    } catch( error ) {
      return null;
      console.log("Error message for localstorage", error);
    }
  },
  set( obj, newValue ) {
    localStorage.setItem(obj, JSON.stringify(newValue));
  }
}
