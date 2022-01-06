module.exports = function toReadable(number) {
    const numbers0_19 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numbers20_90 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) return 'zero';

    const n = ('000' + number).slice(-3)

    let res = ''

    if (n[0] != 0) {
        res += numbers0_19[n[0]] + ' hundred '
    }
    if (+n.slice(-2) < 20) {
       res += numbers0_19[+`${number}`.slice(-2)]
    } else if (+n.slice(-2) > 19) {
        res += `${numbers20_90[n[1]]} ${numbers0_19[n[2]]}`
    } else {
        res += numbers0_19[n[2]]
    }

    return res.trim()
}