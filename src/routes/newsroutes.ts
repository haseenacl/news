import express from "express";
import {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
} from "../controllers/newscontroller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: News
 *   description: News CRUD API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     News:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         _id:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         content:
 *           type: string
 *         author:
 *           type: string
 *         imageUrl:
 *           type: string
 *         category:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /api/news:
 *   get:
 *     summary: Get all news with pagination
 *     tags: [News]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of news
 */

/**
 * @swagger
 * /api/news/{id}:
 *   get:
 *     summary: Get single news by ID
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/news:
 *   post:
 *     summary: Create a news article
 *     tags: [News]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *     responses:
 *       201:
 *         description: Created
 */

/**
 * @swagger
 * /api/news/{id}:
 *   put:
 *     summary: Update news article
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *           example:
 *             title: "Updated Title"
 *             description: "Updated description"
 *             content: "Updated full content..."
 *             author: "Updated Author"
 *             imageUrl: "https://example.com/new-updated.jpg"
 *             category: "sports"
 *     responses:
 *       200:
 *         description: Updated
 */

/**
 * @swagger
 * /api/news/{id}:
 *   delete:
 *     summary: Delete news article
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted
 */

router.get("/", getAllNews);
router.get("/:id", getNewsById);
router.post("/", createNews);
router.put("/:id", updateNews);
router.delete("/:id", deleteNews);

export default router;
