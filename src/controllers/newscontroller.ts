import { Request, Response } from "express";
import News from "../models/newsmodel.js";

export const getAllNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const total = await News.countDocuments();
    const news = await News.find().skip(skip).limit(limit).sort({ createdAt: -1 });

    res.status(200).json({ success: true, page, total, news });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getNewsById = async (req: Request, res: Response): Promise<void> => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      res.status(404).json({ success: false, message: "News not found" });
      return;
    }
    res.status(200).json({ success: true, news });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const createNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const newNews = await News.create(req.body);
    res.status(201).json({ success: true, news: newNews });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const updated = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      res.status(404).json({ success: false, message: "News not found" });
      return;
    }
    res.status(200).json({ success: true, news: updated });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await News.findByIdAndDelete(req.params.id);
    if (!deleted) {
      res.status(404).json({ success: false, message: "News not found" });
      return;
    }
    res.status(200).json({ success: true, message: "News deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};
