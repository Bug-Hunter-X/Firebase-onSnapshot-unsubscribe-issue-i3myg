let unsubscribe;

const query = query(collection(db, 'users'), where('uid', '==', userId));

const startListening = () => {
unsubscribe = onSnapshot(query, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    // Access document data
    const data = doc.data();
    console.log(data);
  });
});
};

const stopListening = () => {
if (unsubscribe) {
unsubscribe();
console.log('Unsubscribed successfully!');
}
};

// ... later, when you want to stop listening:
startListening();
// ...some time later...
stopListening();