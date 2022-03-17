// class AnagramHelper {
  // private isFirstWordAnAnagramOfSecondWord(firstArray: string[], secondArray: string[]): boolean {
    
    // HOMEWORK 3/15: refactor an use function within isAnAnagram (encapsulation)
    /* let firstArrayPassed = true;
    if (firstArray.every((w) => secondArray.includes(w))) {
      // Show if first word passes anagram test through console
      console.log("Found all letters of " + firstWord + " in " + secondWord);
    } else {
      firstArrayPassed = false;
      // Show if first word does not pass anagram test through console
      console.log(
        "Did not find all letters of " + firstWord + " in " + secondWord
      );
    }

  }
  public isAnAnagram(firstWord: string, secondWord: string): boolean {
  
        */

    //input two words for the comparison
    let firstWord = prompt(); 
    let secondWord = prompt();
    if (firstWord !== null && secondWord !== null  ){
    // Split string by character
    const firstArray = firstWord.split('');
    const secondArray = secondWord.split('');

    // Show how the firstword and secondword have transformed into arrays
    console.log(firstArray, secondArray);

    // Store value of first array comparison to second array
    let firstArrayPassed = true;
    if (firstArray.every((w) => secondArray.includes(w))) {
      // Show if first word passes anagram test through console
      console.log("Found all letters of " + firstWord + " in " + secondWord);
    } else {
      firstArrayPassed = false;
      // Show if first word does not pass anagram test through console
      console.log(
        "Did not find all letters of " + firstWord + " in " + secondWord
      );
    }

    // Store value of second array comparison to first aray
    let secondArrayPassed = true;
    if (secondArray.every((w) => firstArray.includes(w))) {
      //Show if second word passes anagram test through console
      console.log("Found all letters of " + secondWord + " in " + firstWord);
    } else {
      secondArrayPassed = false;
      // Show if second word does not pass anagram test through console
      console.log(
        "Did not find all letters of " + secondWord + " in " + firstWord
      );
    }
    
 if (firstArrayPassed == true && secondArrayPassed == true){ 
   console.log(firstWord + " and " + secondWord + " are anagrams.");
 }
   // return firstArrayPassed && secondArrayPassed;

      
 // } 
//}
//}

/*
function anagramTester(word1: string, word2: string, expected: boolean) {
  let helper: AnagramHelper = new AnagramHelper();

  if (helper.isAnAnagram(word1, word2) == expected) console.log("Success!\n");
  else console.log("Failure!\n");
}

anagramTester("act", "cat", true);
anagramTester("Boris", "Doris", false);
anagramTester("pins", "spins", true);
anagramTester("pots", "spots", true);
anagramTester("saint", "satin", true);
anagramTester("chunk", "monk", false);
anagramTester("elephant", "boss", false);
anagramTester("saint", "satin sheet", false);

*/ 


