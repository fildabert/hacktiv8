function shoppingTime(memberId, money) {
    var saleItems =  [ 'Sepatu Stacattu',
        'Baju Zoro',
        'Baju H&N',
        'Sweater Uniklooh',
        'Casing Handphone' ];
    var salePrices = [1500000, 500000, 250000, 175000, 50000];
    var listPurchased = []
    var changeMoney = money
    var result = {}
    for(i = 0; money > 0 && i < salePrices.length; i++){
        if(money - salePrices[i] > 0){
            listPurchased.push(saleItems[i])
            changeMoney -= salePrices[i]
        }
    }
    if(memberId == "" || memberId == null){
        console.log("Mohon maaf, toko X hanya berlaku untuk member saja")
    }
    else if(listPurchased.length === 0){
        console.log("Mohon maaf, uang tidak cukup")
    }
    else{
        result = {
            memberId: memberId,
            money: money,
            listPurchased: listPurchased,
            changeMoney: changeMoney
        }
    }
    return result
  }

  // TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }

console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }

console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja