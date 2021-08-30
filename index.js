


function superbowlWin(array) {
   let win = array.find( ({result}) => result === 'W');
    return win !== undefined ? win.year : win;
}
