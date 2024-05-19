import moment from 'moment';

export const dateFormat = (date) => moment(date).format('MMM Do YYYY');

export const timeDateFormat = (date) => moment(date).format('MMM Do YYYY, h:mm a');

export const hourMinutesFormat = (date) => moment(date).format('LT');

export const dayNameFormat = (num, action) => {
  return action === 'add'
    ? moment().add(num, 'days').format('dddd')
    : moment().subtract(num, 'days').format('dddd');
};
