import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
  res.send('hi there!! yes')
});

export { router as currentUserRouter }; 