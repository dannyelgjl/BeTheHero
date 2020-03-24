import connectDatabase from '../../database/index';

class IncidentController {
  async index(req, res) {
    const incidents = await connectDatabase('incidents').select('*');

    return res.json(incidents);
  }

  async store(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connectDatabase('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id });
  }
}

export default new IncidentController();
