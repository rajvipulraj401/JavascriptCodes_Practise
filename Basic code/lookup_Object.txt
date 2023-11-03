// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {

for (let i =0;i<contacts.length;i++){

  // loop se hi hoga na kyunki tabhi na humlog us index wale ko access krpayenge .

  if (name === contacts[i].firstName){

    // any contacts index firstName property value matches with name parameter then 
    // if (prop === contacts[i][prop]){
      // THIS IS not the way to check if the object has this property or not THIS will check if prop is equal to object value name 

      //  in order to check the property name do like this 👇🏿💥
    // if (prop === contacts[i].hasOwnProperty([prop])){
      //  this is also not the way to compare cause hasOwnProperty method returns boolean not a value .
    if ( contacts[i].hasOwnProperty([prop])){
      // '💪🏼⚡⚡⚡

      return contacts[i][prop]
    }
    // now we are seeing that the requested property exists on the object or not.
      else{
        // if property doesnot exists 

        return "No such property"
      }
  }
  // else{
  //   return "No such contact"
  // }

}
return "No such contact"
    /* Logic

        1) i am getting a name and a property in the function 
        i have to see if the name is the first name of any of   
            the objects in my  array indexes

            if yes then i would check if the prop exists or not 
            if yes thn i would return the value of that property . 


            now how to do it 

            a) How to check if the name is the firstName of object 
            inside my array
        
              // i think i need a loop to check maybe ??
              FIRST LETS DO IT IN LOOOP solution 
               then DOIT  IN RECursion 

               and also check the hint and solution at last .
        */

}

console.log(lookUpProfile("Kristian", "lastName"));