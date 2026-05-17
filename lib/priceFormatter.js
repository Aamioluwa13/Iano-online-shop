import brand from '../data/brand'

export function formatPrice(priceInUsd) {
  const { currency } = brand
  
  if (!currency.showBoth) {
    // Show only primary currency
    if (currency.primary === 'NGN') {
      const naira = priceInUsd * currency.nairaToUsd
      return `₦${naira.toLocaleString('en-NG', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
    }
    return `$${priceInUsd.toFixed(2)}`
  }
  
  // Show both currencies
  const naira = priceInUsd * currency.nairaToUsd
  return `$${priceInUsd.toFixed(2)} / ₦${naira.toLocaleString('en-NG', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
}

export function formatTotal(total) {
  const { currency } = brand
  
  if (!currency.showBoth) {
    if (currency.primary === 'NGN') {
      const naira = total * currency.nairaToUsd
      return `₦${naira.toLocaleString('en-NG', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
    }
    return `$${total.toFixed(2)}`
  }
  
  const naira = total * currency.nairaToUsd
  return `$${total.toFixed(2)} / ₦${naira.toLocaleString('en-NG', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
}
