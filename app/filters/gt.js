import app from '../app.module.js';

app.filter('gt', () => (collection, value) => (collection.length > value)? collection: []);