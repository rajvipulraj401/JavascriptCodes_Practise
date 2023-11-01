let count = 0;

function cc(card) {
  // Only change code below this line

  // switch (card) {
  //   case 2:
  //   case 3:
  //   case 4: case 5:
  //   case 6:
  //     count++;
  //     break;
  //   case 7:
  //   case 8:
  //   case 9:
  //     break;
  //   case 10:
  //   case "J":
  //   case "Q":
  //   case "K":
  //   case "A":
  //     count--;
  //     break;
  // }

  if (card ===2||card ===3||card ===4||card ===5||card ===6){
    count++;
  }
 else if (card ===10||card ==="J"||card ==="Q"||card ==="K"||card ==="A"){
    count--;
  }
  else if (card ===7||card ===8||card ===9){
    
  }

// AGR count 0 se bada hai toh count value aur bet last me ek space deke print kr do .
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
// AUR NAHI TOH COUNT VALUE AUR EK SPACE DEKE HOLD PRINT KRDO
}


cc(2); cc(3); cc(7); cc('K'); cc('A');