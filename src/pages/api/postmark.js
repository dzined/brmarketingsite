// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {


    const url = 'https://api.postmarkapp.com/email';

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Postmark-Server-Token': '71c69d95-fee1-45c3-9f58-04239dbdd1bb'
    };

    const body = req.body;

    const response =  fetch(url, {
      method: 'POST',
      headers,
      body
    });

    if (!response.ok) {
      throw new Error('Error sending email');
    }
    res.status(200).json(response)


}
