// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (value ===""){
      delete records[id][prop];
    }
    else if (prop !== "tracks" && value !== ""){
      records[id][prop] = value;
    }
    else if( prop ==="tracks" && value !== ""){
      if (!records[id].hasOwnProperty("tracks")){
        // if records object don't have tracks array as a property then make that property and set it to empty array.
        records[id]["tracks"]=[];
      }
      // Push the value whether tracks exists or not
      records[id]["tracks"].push(value);
    }
    return records;
  }
  
  updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
  console.log(recordCollection["1245"].tracks);
  