import { $ } from './config.js';
import { getAdress } from './account.js';

const amountTrx = $('#amount');
const recepientAdress = $('#recepient');

export const sendTrx = async () => {
  try {
    const amount = parseFloat(amountTrx.value) * Math.pow(10, 18);
    const adress = await getAdress();

    let params = [
      {
        from: adress,
        to: recepientAdress.value,
        value: Number(amount).toString(16),
        gas: Number(21000).toString(16),
        gasPrice: Number(2500000).toString(16),
      },
    ];

    const response = await ethereum.request({
      method: 'eth_sendTransaction',
      params: params,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
