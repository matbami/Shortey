const express = require('express');
const validate = require('../../middlewares/validate');
const urlValidation = require('../../validations/url.validation');
const urlController = require('../../controllers/url.controller');

const router = express.Router();

router.route('/').post(validate(urlValidation.createUrl), urlController.createUrl);

module.exports = router;

/**
 * @swagger
 * /url:
 *   post:
 *     summary: Create a short URL
 *     description: Anyone can create a short URL.
 *     tags: [Url]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - longUrl
 *             properties:
 *               longUrl:
 *                 type: string
 *                 example: https://www.google.com/search?q=bukayo+saka&sxsrf=AOaemvKDQOQKEwEDC-ZUgu-OZ2ygb1F7-Q%3A1637369172173&ei=VEWYYcSDCsWFxc8P1Yig0AI&ved=0ahUKEwjE_f2-26X0AhXFQvEDHVUECCoQ4dUDCA4&uact=5&oq=bukayo+saka&gs_lcp=Cgdnd3Mtd2l6EAMyBwguELEDEEMyBAgAEEMyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjELADECc6BwgAEEcQsAM6CgguEMgDELADEEM6BwgjEOoCECdKBQg4EgExSgQIQRgAUKYYWJo6YKs8aANwAngBgAGjA4gBxxuSAQkwLjMuNS40LjGYAQCgAQGwAQrIAQ_AAQE&sclient=gws-wiz
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Url'
 *         $ref: '#/components/responses/InvalidUrl'
 *
 */
