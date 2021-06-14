export function findSum(arr: number[], value:number): number[] | false{
    if (arr.length < 2) {
        return false
    }

    const setAnchorIdx = (prevAnchor: number) => prevAnchor + 1
    const setRollingIdx = (currentAnchorIdx: number) => currentAnchorIdx + 1 // rollingIdx should always start from (anchorIdx + 1)

    let anchorIdx: number = 0

    let toContinue = true;
    let foundPair: false | number[] = false

    while(toContinue && !foundPair) {
        let anchor = arr[anchorIdx]
        let sampleArray = arr.slice(setRollingIdx(anchorIdx))
        
        for(let i = 0; i < sampleArray.length; i++) {
            let sum = anchor + sampleArray[i]
            
            if (sum === value) {
                foundPair = [anchor, sampleArray[i]]
                break
            }
        }

        anchorIdx = setAnchorIdx(anchorIdx)

        // The max anchorIdx should every increment to is arr.length - 2
        if (anchorIdx===arr.length -1) {
            toContinue = false
        }
    }

    return foundPair
}