const dayjs = require('dayjs');

module.exports = (date) => {
    const finalDate = dayjs(date).format('dddd, MMMM D, YYYY h:mm A');

    return finalDate;
}