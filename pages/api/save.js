import { GoogleSpreadsheet } from 'google-spreadsheet';
import moment from 'moment';

const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

const fromBase64 = value => {
  const buff = new Buffer.from(value, 'base64');
  return buff.toString('ascii');
}

const genCupom = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase();
  return `${code.substr(0, 4)}-${code.substr(4, 4)}-${code.substr(8, 4)}` // Ex: XXXX-XXXX-XXXX
}

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    });
    await doc.loadInfo();
    // Pega dados da planilha 1
    const sheet = doc.sheetsByIndex[1];
    const data = JSON.parse(req.body);

    // Pega dados da planilha 2
    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells('A3:B3');

    const mostrarPromocaoCell = sheetConfig.getCell(2, 0);
    const textoCell = sheetConfig.getCell(2, 1);
    // Nome	Email	Whatsapp	Cupom	Promo

    let Cupom = '';
    let Promo = '';

    if (mostrarPromocaoCell.value === 'VERDADEIRO') {
      // TODO: gerar cupom
      Cupom = genCupom();
      Promo = textoCell.value;
    }

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Nota: parseInt(data.Nota),
      'Data Preenchimento': moment().format('DD/MM/YYY HH:mm:ss'),
      Cupom,
      Promo,
    })
    res.end(JSON.stringify({
      showCoupon: Cupom !== '',
      Cupom,
      Promo
    }))
  } catch (e) {
    console.log(e)
    res.end('error')
  }
}