const contentful = require("contentful");
var client = contentful.createClient({
  space: '6zqckf2vka6k',
  accessToken: 'jWAkYQB9nep0fR5bkJgpti-1xZpio9ITJO7rtqJKrMU',
});

client.getEntries().then(function (entries) {
  //console.log(entries)
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    console.log(entry)
    if (entry.fields.productName) {
      console.log(entry.fields.productName);
    }
  });
});

// client.getEntry('api').then(function (entry) {
//   // logs the entry metadata
//   console.log(entry);

//   // logs the field with ID title
//   console.log(entry.fields.productName);
// });