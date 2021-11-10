const { Router } = require('express');
const basicMiddlewares = require('./../middlewares/basicMiddlewares');
const checkToken = require('./../middlewares/checkToken');
const contestController = require('./../controllers/contestController');
const upload = require('./../utils/fileUpload');

// buyer=customer
// creative=creator

const contestRouter = Router();
// /contests

contestRouter.get(
  '/getAllContests',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  contestController.getContests
);

contestRouter.get(
  '/',
  checkToken.checkToken,
  contestController.getCustomersContests
);

contestRouter.get(
  '/:contestId',
  checkToken.checkToken,
  basicMiddlewares.canGetContest,
  contestController.getContestById
);

contestRouter.patch(
  '/updateContest',
  checkToken.checkToken,
  upload.updateContestFile,
  contestController.updateContest
);

contestRouter.post(
  '/dataForContest',
  checkToken.checkToken,
  contestController.dataForContest
);

module.exports = contestRouter;
