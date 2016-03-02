import makeFinalStore from 'alt-utils/lib/makeFinalStore';

export default function( alt, storage, storeName ) {
  const finalStore = makeFinalStore(alt);

  try {
    alt.bootstrap(storage.get(storeName));
  } catch( error ) {
    console.log('There is an error with your request', error);
  }

  finalStore.listen( () => {
    if(!storage.get('debug')) {
      storage.set(storeName, alt.takeSnapshot());
    }
  })
}
