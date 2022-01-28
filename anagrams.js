// this code is ment to check if two words are anagrams
function sortingString(string){
    return string.split('').sort().join('');

const isAnagram=function (stringA, stringB){
    sortedA=stringA.split('').sort().join('').toLowerCase();
    sortedB=stringB.split('').sort().join('').toLowerCase();
    return sortingString(sortedA === sortedB)
}

}
console.log (isAnagram('hello', 'Mello'))

