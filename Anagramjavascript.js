function isAnagram (str1, str2) {

    
    if (str1.length !== str2.length) {
        return false;
    }
    

    var s1 = str1.split('').sort().join('');
    var s2 = str2.split('').sort().join('');


    return (s1 === s2);
}

console.log(isAnagram('abc','cba'));
console.log(isAnagram('listen','silent')); 
console.log(isAnagram('dog','doog'));