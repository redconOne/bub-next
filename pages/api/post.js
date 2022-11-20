import Post from '../../models/Post';
import dbConnect from '../../lib/dbConnect';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const posts = await Post.find({});
        res.status(200).json({ success: true, data: posts });
      } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, error: error });
      }
      break;

    case 'PUT':
      try {
        console.log('were putting');
        res.status(200).json({ success: true });
      } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, error: error });
      }
      break;

    case 'DELETE':
      try {
        console.log('were deleting');
        res.status(200).json({ success: true });
      } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, error: error });
      }
      break;

    case 'POST':
      try {
        console.log('were posting');

        const data = JSON.parse(req.body);

        const response = await Post.create({
          title: data.title,
          image: data.image,
          cloudinaryId: data.cloudinaryId,
          caption: data.caption,
          likes: 0,
          user: data.user,
        });

        res.status(200).json({ success: true });
      } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, error: error });
      }
      break;
  }
}
