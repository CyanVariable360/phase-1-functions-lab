const hqStreetNum = 42

function distanceFromHqInBlocks(streetNum)
{
    if(streetNum >= hqStreetNum){
        return streetNum - hqStreetNum
    } else{
        return hqStreetNum - streetNum
    }
}

function distanceFromHqInFeet(streetNum)
{
    let blocks

    if(streetNum >= hqStreetNum){
        blocks = streetNum - hqStreetNum
    } else{
        blocks = hqStreetNum - streetNum
    }

    return blocks * 264
}

function distanceTravelledInFeet(start, destination)
{
    let newDis
    if(start >= destination){
        newDis = start - destination
    } else{
        newDis = destination - start
    }

    return newDis * 264
}

function calculatesFarePrice(start, destination)
{
    let newDis
    if(start >= destination){
        newDis = start - destination
    } else{
        newDis = destination - start
    }

    let totalFeet = newDis * 264
    
    if(totalFeet <= 400)
    {
        return 0;
    } else if(totalFeet > 400 && totalFeet < 2000){
        return (totalFeet - 400) * 0.02
    } else if(totalFeet > 2000 && totalFeet < 2500){
        return 25
    } else{
        return 'cannot travel that far'
    }
}