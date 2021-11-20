const express = require('express');
const validate = require('../../middlewares/validate');
const redirectValidation = require('../../validations/redirect.validation');
const redirectController = require('../../controllers/redirect.controller');

const router = express.Router();

router.route('/:uniqueCode').get(validate(redirectValidation.redirectUrl), redirectController.redirectUrl);

module.exports = router;

/**
 * @swagger
 * /short.ly/{uniqueId}:
 *   get:
 *     summary: Redirect to the main url
 *     description: This route will use the short url generated.
 *     tags: [Url]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: unique id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Url'
 */
