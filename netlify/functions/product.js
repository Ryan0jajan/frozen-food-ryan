const fetch = require('node-fetch'); // jika pakai bundler Node lama

exports.handler = async function(event, context) {
  try {
    const response = await fetch('https://opensheet.elk.sh/1Sw4KkgpUuWM44PVdEabXSz-OHMX4p5zt7rl_IfAfH-0/Produk%20Frozen%20Food%20Ryan');
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Gagal mengambil data' })
    };
  }
};