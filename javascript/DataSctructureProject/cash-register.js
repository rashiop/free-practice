// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

const status = { INSUFFICIENT_FUNDS: 'INSUFFICIENT_FUNDS', CLOSED: 'CLOSED', OPEN: 'OPEN' }

const currencyUnit = {
  'ONE HUNDRED': 100,
  TWENTY: 20,
  TEN: 10,
  FIVE: 5,
  ONE: 1,
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01,
}

function emptiedCid( unit, unitName ) {
  const currentCid = unit[0] == unitName;
  return currentCid ? [unitName, 0] : unit;
}

function isCidEmpty( cid ) {
  const isEmpty = cid.every( ( unit ) => !Boolean( unit[1] ) )
  return isEmpty
}

function fillChange( changes = [], cid = [] ) {
  let filledChange = [];
  for ( let [unitName, value] of Object.values( cid ) ) {
    const change = changes.find( ( unit ) => unit[0] == unitName )
    if ( change?.value ) {
      filledChange.push( [unitName, change.value] )
    } else {
      filledChange.push( [unitName, value] )
    }
  }
  return filledChange;
}

function checkCashRegister( price, cash, cid ) {
  let changeTotal = cash - price;
  if ( changeTotal <= 0 ) {
    return;
  }

  let changes = [];
  let currentCid = [...cid];
  for ( let [unitName, value] of Object.entries( currencyUnit ) ) {
    if ( changeTotal < value ) {
      continue;
    }

    const [, cidPerUnit] = currentCid.find( ( unit ) => unit[0] == unitName ) || []
    if ( !cidPerUnit ) {
      continue;
    }

    const cashPerUnit = Math.floor( changeTotal / value ) * value;
    const isCidUsed = cashPerUnit >= cidPerUnit;
    if ( isCidUsed ) {
      changeTotal = ( changeTotal - cidPerUnit ).toFixed( 2 )
      changes.push( [unitName, cidPerUnit] )
    } else {
      changeTotal = ( changeTotal - cashPerUnit ).toFixed( 2 )
      changes.push( [unitName, cashPerUnit] )
    }

    if ( isCidUsed ) {
      currentCid = currentCid.map( ( unit ) => emptiedCid( unit, unitName ) )
    }
  }
  if ( changeTotal > 0 ) {
    return { status: status.INSUFFICIENT_FUNDS, change: [] }
  }
  if ( isCidEmpty( currentCid ) ) {
    console.log( fillChange( changes, cid ) )
    return { status: status.CLOSED, change: fillChange( changes, cid ) }
  }
  return { status: status.OPEN, change: changes }
}


checkCashRegister( 19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] )

