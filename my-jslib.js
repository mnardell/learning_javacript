function isEquivalent(objA, objB) {
    "use strict";
    //convenience function that produces the 'class'' name of an object
    function getClass(obj) {
        return Object.prototype.toString.call(obj).slice(8,-1);
    }
    //Easy checks;
    //1_if objA is not an object then lets compair A and B using simple equivalence 
    if (objA === objB) { return true;}
    if (typeof objA !== 'object') {return false;} //if A is not an object, then it is a
    //simple type and if they were equal then they would have passed by the above.
    if (getClass(objA) != getClass(objB)){return false;} //if they are not the same clas of
    //object then they cannot be equal
    if (objA.length !== objB.length) {return false;} //if they do not have the same number of
    //slots then they are not equal

    //Now iterate over properties and if any properites are not equal return false, otherwise
    // the two objects are equal.
    for (var property in objA) {
        if (objA.hasOwnProperty(property)) {
            if (!isEquivalent(objA[property],objB[property])) {return false;}
        }
    } return true;
}