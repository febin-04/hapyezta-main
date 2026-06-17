import stickers from "@/assets/p-stickers.jpg";
import pens from "@/assets/p-pens.jpg";
import diary from "@/assets/p-diary.jpg";
import puppy from "@/assets/p-puppy.jpg";
import animalpen from "@/assets/p-animalpen.jpg";
import scrunchies from "@/assets/p-scrunchies.jpg";
import pouches from "@/assets/c-pouches.jpg";
import animals from "@/assets/c-animals.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  tag?: string;
};

export const products: Product[] = [
  { id: "premium-scrunchies", name: "Premium Scrunchies", price: 49, oldPrice: 99, image: scrunchies, tag: "-51% Sale" },
  { id: "girly-deco-sticker", name: "Girly Seasonal Deco Sticker", price: 59, oldPrice: 99, image: stickers, tag: "-40% Sale" },
  { id: "daily-inspo-sticker", name: "Daily Inspo Sticker", price: 59, oldPrice: 99, image: stickers, tag: "-40% Sale" },
  { id: "kawaii-puppy-diary", name: "Kawaii Puppy Diary", price: 149, oldPrice: 299, image: puppy, tag: "-50% Sale" },
  { id: "365-planner-diary", name: "365 Planner Diary", price: 599, oldPrice: 699, image: diary, tag: "-14% Sale" },
  { id: "3d-acrylic-gel-pen", name: "3D Acrylic Gel Pen Set", price: 199, oldPrice: 799, image: pens, tag: "-75% Sale" },
  { id: "kawaii-animal-gel-pen", name: "Kawaii Animal Gel Pen", price: 59, oldPrice: 60, image: animalpen },
  { id: "kawaii-pouch", name: "Kawaii Smile Pouch", price: 129, oldPrice: 199, image: pouches, tag: "-35% Sale" },
];

export const collections = [
  { name: "Kawaii Stationery", image: animals },
  { name: "New Arrivals", image: stickers },
  { name: "Pens & Pencils", image: pens },
  { name: "Bows & Charms", image: scrunchies },
  { name: "Journaling Supplies", image: diary },
  { name: "Pouches & Bags", image: pouches },
];

export const popularSearches = ["Lamps", "Pens", "Sharpeners", "Diary", "Stickers"];
