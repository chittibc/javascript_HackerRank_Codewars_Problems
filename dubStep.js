function songDecoder(song) {
  // ...
  var noDuplicateWords = song.split('WUB').filter(str => str);
  return noDuplicateWords.join(' ');
}

console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));
