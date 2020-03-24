import connectDatabase from '../../database';
import crypto from 'crypto';

class OngController {
  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connectDatabase('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  }
}

export default new OngController();
