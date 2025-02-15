const query = query(collection(db, 'users'), where('uid', '==', userId));

const unsubscribe = onSnapshot(query, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    // Access document data
    const data = doc.data();
    console.log(data);
  });
});

// ... later, when you want to unsubscribe:
unsubscribe();